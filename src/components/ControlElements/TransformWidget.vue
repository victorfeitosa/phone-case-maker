<template>
  <div class="widget" id="widget">
    <div icon flat color="red" class="t-btn t-btn--delete" title="Delete">
      <i class="material-icons">delete</i>
    </div>
    <div
      icon
      flat
      color="grey darken-3"
      class="t-btn t-btn--flip-back"
      title="Bring forward"
    >
      <i class="material-icons">flip_to_front</i>
    </div>
    <div
      icon
      flat
      color="grey darken-3"
      class="t-btn t-btn--flip-front"
      title="Send backward"
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
import { toAngle, toRad, distance } from '../../utils/math.js';

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

      //Scale control
      angle: 0,
      scale: 1.0,
      oldScale: 1.0
    };
  },
  computed: {
    childElement() {
      return null;
    }
  },
  methods: {
    // Move methods
    startMove(e) {
      this.moving = true;
      this.enterX = e.clientX - this.pX;
      this.enterY = e.clientY - this.pY;
    },
    endMove() {
      this.moving = false;
    },
    dragMove(e) {
      e.preventDefault();
      if (this.moving) {
        this.pX = e.clientX - this.enterX;
        this.pY = e.clientY - this.enterY;
        const transform = { translate: { x: this.pX, y: this.pY }, rotate: this.angle, scale: this.scale };
        this.applyTransform(this.childElement, transform);
        return transform;
      }
    },

    //Rotate methods
    startRotate() {
      const widget = this.$el;
      this.rotating = true;
      this.enterX = this.pX + widget.offsetWidth / 2;
      this.enterY = this.pY + widget.offsetHeight / 2;
    },
    endRotate() {
      this.rotating = false;
      this.oldAngle = this.angle;
    },
    dragRotate(e) {
      e.preventDefault();
      if (this.rotating) {
        this.angle = toAngle(Math.atan2(e.clientY - this.enterY, e.clientX - this.enterX));
        const transform = { translate: { x: this.pX, y: this.pY }, rotate: this.angle, scale: this.scale };
        this.applyTransform(this.childElement, transform);
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
    endScale() {
      this.scaling = false;
      this.oldScale = this.scale;
    },
    dragScale(e) {
      e.preventDefault();

      if (this.scaling) {
        const coef = distance(this.enterX, this.enterY, e.clientX, e.clientY) / this.enterScale;
        this.scale = this.oldScale * coef;
        const transform = { translate: { x: this.pX, y: this.pY }, rotate: this.angle, scale: this.scale };
        this.applyTransform(this.childElement, transform);
        return transform;
      }
    },

    // Apply transformations
    applyTransformProperties(element, width, height, top, left, angle) {
      const sinA = Math.sin(toRad(angle));
      const cosA = Math.cos(toRad(angle));

      element.style.width = `${width}px`;
      element.style.height = `${height}px`;
      element.style.top = `${top}px`;
      element.style.left = `${left}px`;
      element.style.transform = `matrix(${cosA}, ${sinA}, ${-sinA}, ${cosA} , 0, 0)`;
    },
    applyTransform(
      element,
      transform = {
        translate: { x: 0, y: 0 },
        rotate: 0,
        scale: 1
      }
    ) {
      const widget = this.$el;
      // Check if transform is valid
      if (!transform || !transform.translate || !transform.rotate || !transform.scale) return;

      const width = widget.initialWidth * transform.scale;
      const height = widget.initialHeight * transform.scale;

      const top = transform.translate.y;
      const left = transform.translate.x;

      this.applyTransformProperties(widget, width, height, top, left, transform.rotate);
      // this.applyTransformProperties(element, width, height, top, left, transform.rotate);
    }
  }
};
</script>

<style lang="scss" scoped>
$btn-size: 1.75rem;
$anim: 0.05s ease-in-out;

.widget {
  display: inline-block;
  position: absolute;
  transform-origin: 50% 50%;
  z-index: 10;

  width: 100px;
  height: 100px;
  top: 0;
  left: 0;

  &__container {
    border: 1px solid #eeaaaa;
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
  z-index: 2;

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

  &--flip-front {
    border-radius: 50% 50% 0 0;
    bottom: calc(50% - 1px);
    left: -$btn-size;
  }

  &--flip-back {
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
  }
}
</style>

