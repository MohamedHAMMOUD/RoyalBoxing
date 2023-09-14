<template>
  <div v-if="showModal" class="modal" @click="showModal = false">
    <!-- Modal content div. The 'click.stop' prevents the click event from bubbling up to the outer div. -->
    <!-- This is to prevent the modal from closing when clicking inside the modal content. -->
    <div class="modal-content" @click.stop>
      <div class="modal-header">
        <slot name="header"></slot>
      </div>
      <div class="modal-body">
        <slot name="content"></slot>
      </div>
      <div class="modal-footer">
        <slot name="footer"></slot>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  /* Not strictly necessary but it's a good practice to specify the events that the component emits.
  update:propName in vue allows you to emit an event that updates the prop with the same name.
  Child signals intent to change a prop.
  Parent reacts to this intent by potentially updating its local state.
  Updated local state is passed down as a new prop value to the child.
  When you use v-model="someData", Vue internally binds the prop value and listens for an update:propName event. 
  By adhering to the update:propName convention, you can easily leverage this built-in mechanism. */
  emits: ['update:show'],
  props: {
    show: {
      type: Boolean,
      required: true
    }
  },

  computed: {
    showModal: {
      get() {
        return this.show;
      },
      set(val) {
        this.$emit('update:show', val);
      }
    }
  },
}
</script>

<style scoped lang="scss">
.modal {
  /* Position: fixed to an element, it takes it out of the normal document flow (No longer inline, block, etc...),
  so it can overlap.
  If Top is not specified, the default value is not 0, the modal moves down because of the default static positioning 
  of elements that stacks them one below the other. 
  100% width and height: When an element is position: fixed, height and width percentages are relative to the viewport. 
  So here the height would be : 100vh. However fixed positioned elements that extend beyond the viewport will 
  not trigger scrollbars on the viewport or any of their parent elements. The parts of the fixed element that are outside 
  the viewport simply won't be visible, giving an impression of being "cut". */
  position: fixed;
  z-index: 9999;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;

  .modal-content {
    display: flex;
    flex-direction: column;
    background: #fff;
    border-radius: 5px;
    max-width: 500px;
    width: 100%;

    .modal-header {
      background-color: #f1d100;
      padding: 10px;
      border-top-left-radius: 5px;
      border-top-right-radius: 5px;
    }

    .modal-body {
      padding: 20px;
    }
  }
}
</style>
