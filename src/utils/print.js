import Vue from 'vue';
import { toPng } from 'dom-to-image';
import CanvasSticker from '../components/DropElements/CanvasSticker.vue';
import CanvasText from '../components/DropElements/CanvasText.vue';
import store from '../stores/store';

const targetResolution = store.getters['canvas/caseResolution'];

function buildUpscaledElementsFromStoreElements(sourceRes = { w: 258, h: 541 }, targetRes = targetResolution) {
  const factorX = targetRes.w / sourceRes.w;
  const factorY = targetRes.h / sourceRes.h;
  const factorAspectRatio = factorY / factorX;

  const elements = store.getters['canvas/getElements'];
  const printElements = elements.map(e => ({
    ...e,  //unaltered properties
    left: e.left * factorX,
    top: e.top * factorY,
    height: e.height * factorY,
    width: e.width * factorX,
    fontSize: e.fontSize * factorX * factorAspectRatio,
  }));

  return printElements;
}

function createPrintSticker(element) {
  const componentClass = Vue.extend(CanvasSticker);
  const printSticker = new componentClass({
    store,
    propsData: {
      src: element.src,
    },
  });
  printSticker.$mount();

  return printSticker.$el;
}

function createPrintText(element) {
  const componentClass = Vue.extend(CanvasText);
  const printText = new componentClass({
    store,
    propsData: {
      color: element.color,
      font: element.font,
      text: element.text,
    },
  });
  printText.$mount();

  const rg = new RegExp(/"/, 'g');
  printText.$el.style.fontFamily = printText.$el.style.fontFamily.replace(rg, '');

  return printText.$el;
}

function createPrintElement(element) {
  const printElement = element.type === 'sticker' ? createPrintSticker(element) : createPrintText(element);
  printElement.style.position = 'absolute';
  printElement.style.left = `${element.left}px`;
  printElement.style.top = `${element.top}px`;
  printElement.style.height = `${element.height}px`;
  printElement.style.width = `${element.width}px`;
  printElement.style.fontSize = `${element.fontSize}px`;
  printElement.style.transform = element.transform;
  printElement.style.zIndex = element.zIndex;

  return printElement;
}

function buildPrintCanvas(
  elements,
  background = {
    src: '',
    alignX: 'center',
    alignY: 'center',
    size: '100% 100%',
  },
  resolution = { w: 875, h: 1840 }
) {
  const printCanvas = document.createElement('div');
  // Sets up canvas 
  printCanvas.id = 'print-canvas';
  printCanvas.className = 'print-canvas';
  printCanvas.style.width = `${resolution.w}px`;
  printCanvas.style.height = `${resolution.h}px`;

  // Canvas background properties
  printCanvas.style.backgroundImage = `url(${background.src})`;
  printCanvas.style.backgroundSize = background.size;
  printCanvas.style.backgroundPosition = `${background.alignY} ${background.alignX}`;

  elements.forEach(e => {
    const element = createPrintElement(e);
    printCanvas.append(element);
  });

  return printCanvas;
}

export function printCanvasImage(imageName = 'phone-case') {
  const upscaledElements = buildUpscaledElementsFromStoreElements();
  const printable = buildPrintCanvas(upscaledElements, {
    src: store.getters['background/backgroundImage'],
    alignX: store.getters['background/alignmentX'],
    alignY: store.getters['background/alignmentY'],
    size: store.getters['background/backgroundSize'],
  });

  const printCanvas = document.getElementById('print-canvas');
  printCanvas.append(printable);

  // NOTE: This timeout is a hack because of how v-img works. Since it sends no load events and there's no way to know
  // if the image has finished loading - hence being unable to get the ready state to print - we have to "wait" a little
  // bit to ensure loaded images
  setTimeout(() => {
    toPng(printCanvas, { quality: 1, width: targetResolution.w, height: targetResolution.h })
      .then(function (dataUrl) {
        let link = document.createElement('a');
        link.style.display = 'none';
        link.download = `${imageName}.png`;
        link.href = dataUrl;

        // Needs to append to DOM because of Firefox
        printCanvas.append(link);
        link.click();
        store.commit('control/setPrintDialogClose');

        link.remove();
        printable.remove();

      });
  }, 850);
}
