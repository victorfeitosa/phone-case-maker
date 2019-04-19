<template>
  <div class="widget" ref="widget" :style="{ display: visible }">
    <div
      icon
      color="red"
      class="t-btn t-btn--delete"
      title="Delete"
      @click="removeElement"
    >
      <i class="material-icons">delete</i>
    </div>

    <div
      icon
      flat
      color="grey darken-3"
      class="t-btn t-btn--flip-front"
      title="Bring forward"
      @click="brignForward"
    >
      <i class="material-icons">flip_to_front</i>
    </div>
    <div
      icon
      flat
      color="grey darken-3"
      class="t-btn t-btn--flip-back"
      title="Send backward"
      @click="sendBackward"
    >
      <i class="material-icons">flip_to_back</i>
    </div>
    <div
      icon
      flat
      color="grey darken-3"
      class="t-btn t-btn--rotate"
      title="Rotate"
      @mousedown="startRotate"
    >
      <i class="material-icons">rotate_left</i>
    </div>
    <div
      icon
      flat
      color="grey darken-3"
      class="t-btn t-btn--scale"
      title="Scale"
      @mousedown="startScale"
    >
      <i class="material-icons">check_box_outline_blank</i>
    </div>
    <div class="widget__container" @mousedown="startMove"></div>
  </div>
</template>

<script>
import { getElementCanvasData } from '../../utils/component.js';
import { toAngle, toRad, angleFromTransform, distance } from '../../utils/math.js';
import { mapGetters, mapMutations } from 'vuex';

export default {
  mounted() {
    this.$nextTick(() => {
      // Setup widget and tools DOM elements
      this.moveTool = this.$el.getElementsByClassName('widget__container')[0];
      this.rotateTool = this.$el.getElementsByClassName('t-btn--rotate')[0];
      this.scaleTool = this.$el.getElementsByClassName('t-btn--scale')[0];
      this.deleteTool = this.$el.getElementsByClassName('t-btn--delete')[0];
      this.forwardTool = this.$el.getElementsByClassName('t-btn--flip-front')[0];
      this.backwardTool = this.$el.getElementsByClassName('t-btn--flip-back')[0];

      // Setup document DOM events
      document.addEventListener('mouseup', this.endMove);
      document.addEventListener('mouseup', this.endRotate);
      document.addEventListener('mouseup', this.endScale);
      document.addEventListener('mousedown', this.deselect);

      document.addEventListener('mousemove', this.dragMove);
      document.addEventListener('mousemove', this.dragRotate);
      document.addEventListener('mousemove', this.dragScale);
    });
  },
  data() {
    return {
      //HTML Element handles
      moveTool: null,
      rotateTool: null,
      scaleTool: null,
      forwardTool: null,
      backwardTool: null,
      deleteTool: null,

      childElement: null,

      //Control variables
      //Flags
      moving: false,
      rotating: false,
      scaling: false,

      //Position control
      pX: 0,
      pY: 0,
      enterX: 0,
      enterY: 0,
      enterScale: 1.0,

      //Rotation control
      angle: 0,

      //Scale control
      scale: 1.0,
      oldScale: 1.0,
      initialWidth: 0,
      initialHeight: 0,
      initialFontSize: 24,
      fontSize: 24,

      // origin debugging
      originX: 0,
      originY: 0
    };
  },
  computed: {
    ...mapGetters({ selectedElementId: 'control/getSelectedCanvasElement', getElement: 'canvas/getElement' }),

    visible() {
      return this.selectedElementId ? 'inline-block' : 'none';
    }
  },
  watch: {
    selectedElementId() {
      this.childElement = document.querySelector(`[data-uid="${this.selectedElementId}"]`);
      if (this.childElement) {
        this.matchTransform(this.childElement);
      }
    }
  },
  methods: {
    ...mapMutations({
      deselectCanvasElement: 'control/deselectCanvasElement',
      updateElement: 'canvas/updateElement',
      deleteElement: 'canvas/deleteElement'
    }),
    deselect(e) {
      const outsideWidget = e.target.parentElement !== this.$el;
      if (!(this.moving || this.rotating || this.scaling) && outsideWidget) {
        this.deselectCanvasElement();
      }
    },
    // Button Methods
    sendBackward() {
      const child = this.childElement;
      if (child) {
        const z = parseInt(child.style.zIndex);
        child.style.zIndex = Math.max(z - 1, 0);
      }
    },
    brignForward() {
      const child = this.childElement;
      if (child) {
        const z = parseInt(child.style.zIndex);
        child.style.zIndex = Math.min(z + 1, 100);
      }
    },
    removeElement() {
      const child = this.childElement;
      this.removeDialog = false;
      if (child) {
        this.deleteElement(this.selectedElementId);
        this.deselectCanvasElement();
        child.remove();
      }
    },
    // Move methods
    startMove(e) {
      this.moving = true;
      this.enterX = e.clientX - this.pX;
      this.enterY = e.clientY - this.pY;
      this.angle = this.oldAngle;
    },
    // on document
    endMove(e) {
      this.moving = false;

      const elData = getElementCanvasData(this.selectedElementId);
      this.updateElement({
        ...elData,
        id: this.selectedElementId
      });
      e.stopPropagation();
    },
    dragMove(e) {
      if (this.moving && this.visible) {
        this.pX = e.clientX - this.enterX;
        this.pY = e.clientY - this.enterY;
        const transform = {
          translate: { x: this.pX, y: this.pY },
          rotate: this.angle || 0,
          scale: this.scale,
          fontSize: this.initialFontSize
        };
        this.applyTransform(this.childElement, transform);
        e.preventDefault();
        return transform;
      }
    },

    // Rotate methods
    startRotate(e) {
      const widget = this.$el;
      this.rotating = true;
      this.enterX = e.clientX - Math.cos(this.angle) * (widget.offsetWidth / 2);
      this.enterY = e.clientY + Math.sin(this.angle) * (widget.offsetHeight / 2);
    },
    // on document
    endRotate(e) {
      this.rotating = false;
      this.oldAngle = this.angle;

      const elData = getElementCanvasData(this.selectedElementId);
      this.updateElement({
        ...elData,
        id: this.selectedElementId,
        rotate: this.angle
      });
      e.stopPropagation();
    },
    dragRotate(e) {
      if (this.rotating && this.visible) {
        this.angle = toAngle(Math.atan2(e.clientY - this.enterY, e.clientX - this.enterX));
        const transform = {
          translate: { x: this.pX, y: this.pY },
          rotate: this.angle,
          scale: this.scale,
          fontSize: this.initialFontSize
        };
        this.applyTransform(this.childElement, transform);
        e.preventDefault();
        return transform;
      }
    },

    //Scale methods
    startScale(e) {
      const widget = this.$el;
      this.scaling = true;
      this.enterX = this.pX + widget.offsetWidth / 2;
      this.enterY = this.pY + widget.offsetHeight / 2;
      this.enterScale = distance(this.enterX, this.enterY, e.clientX, e.clientY);
    },
    // on document
    endScale(e) {
      this.scaling = false;
      this.oldScale = this.scale;
      this.initialFontSize = this.fontSize;

      const elData = getElementCanvasData(this.selectedElementId);
      this.updateElement({
        ...elData,
        id: this.selectedElementId,
        scale: this.scale,
        fontSize: this.fontSize
      });
      e.stopPropagation();
    },
    dragScale(e) {
      if (this.scaling && this.visible) {
        const coef = distance(this.enterX, this.enterY, e.clientX, e.clientY) / this.enterScale;
        this.scale = this.oldScale * coef;

        const fontCoef = Math.trunc((this.scale - 1) * this.initialFontSize);
        this.fontSize = this.initialFontSize + fontCoef;

        const transform = {
          translate: { x: this.pX, y: this.pY },
          rotate: this.angle,
          scale: this.scale,
          fontSize: this.fontSize
        };

        this.applyTransform(this.childElement, transform);
        e.preventDefault();
        return transform;
      }
    },

    // Match widget transform to element
    matchTransform(element) {
      const widget = this.$el;

      // Matches the widget transform to the element transform
      const width = element.clientWidth;
      const height = element.clientHeight;
      const left = element.offsetLeft;
      const top = element.offsetTop;
      const transform = element.style.transform;
      const fontSize = parseInt(element.style.fontSize);
      let angle = 0;

      widget.style.width = `${width + 2}px`;
      widget.style.height = `${height + 2}px`;
      widget.style.left = `${left - 1}px`;
      widget.style.top = `${top - 1}px`;
      widget.style.transform = transform;

      if (transform) {
        angle = angleFromTransform(transform);
      }

      // Reset control variables
      this.moving = false;
      this.rotating = false;
      this.scaling = false;

      // Position control
      this.pX = left;
      this.pY = top;
      this.enterX = 0;
      this.enterY = 0;
      this.enterScale = 1.0;

      // Rotation control
      this.oldAngle = angle;
      this.angle = angle;

      // Scale control
      this.oldScale = this.scale;
      this.scale = 1.0;
      this.initialWidth = width;
      this.initialHeight = height;
      this.initialFontSize = fontSize;
    },

    // Apply transformations to an element
    applyTransformProperties(element, width, height, top, left, angle, fontSize) {
      const sinA = Math.sin(toRad(angle));
      const cosA = Math.cos(toRad(angle));

      element.style.width = `${width}px`;
      element.style.height = `${height}px`;
      element.style.top = `${top}px`;
      element.style.left = `${left}px`;
      element.style.transform = `matrix(${cosA}, ${sinA}, ${-sinA}, ${cosA} , 0, 0)`;
      if (element.style.fontSize) {
        element.style.fontSize = `${fontSize}px`;
      }
    },
    applyTransform(
      element,
      transform = {
        translate: { x: 0, y: 0 },
        rotate: 0,
        scale: 1,
        fontSize: 24
      }
    ) {
      const widget = this.$el;
      // Check if transform is valid
      if (
        !transform ||
        !transform.translate ||
        typeof transform.rotate !== 'number' ||
        typeof transform.scale !== 'number'
      )
        return;

      const width = this.initialWidth * transform.scale;
      const height = this.initialHeight * transform.scale;

      const top = transform.translate.y;
      const left = transform.translate.x;

      this.applyTransformProperties(widget, width, height, top, left, transform.rotate, 0);
      if (element) {
        this.applyTransformProperties(element, width, height, top, left, transform.rotate, transform.fontSize);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
$btn-size: 1.75rem;

.widget {
  display: inline-block;
  position: absolute;
  transform-origin: 50% 50%;
  z-index: 101;

  &__container {
    border: 1px solid #eeaaaa;
    box-sizing: content-box;
    cursor: move;
    height: 100%;
    width: 100%;
  }
}

.t-btn {
  background-color: #e0e0e0;
  border: 1px solid #bdbdbd;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  height: $btn-size;
  width: $btn-size;
  position: absolute;
  transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out,
    color 0.15s ease-in-out;
  z-index: 101;

  &:hover {
    background-color: #2196f3;
    border-color: #1e88e5;
    color: #fafafa;
  }

  &--delete {
    color: #fafafa;
    background-color: #f44336;
    border-color: #d32f2f;
    right: -$btn-size;
    top: -$btn-size;
    &:hover {
      color: #fafafa;
      background-color: #d32f2f;
      border-color: #d50000;
    }
  }

  &--flip-back {
    border-radius: 50% 50% 0 0;
    bottom: calc(50% - 1px);
    left: -$btn-size;
  }

  &--flip-front {
    border-radius: 0 0 50% 50%;
    left: -$btn-size;
    top: calc(50% - 1px);
  }

  &--rotate {
    cursor: grab;
    right: -$btn-size;
    top: calc(50% - #{$btn-size/2});
  }

  &--scale {
    bottom: -$btn-size;
    cursor: grab;
    right: -$btn-size;
  }

  i {
    font-size: 18px;
    pointer-events: none;
    user-select: none;
  }
}
</style>

