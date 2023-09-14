<template>
  <div class="wrapper">
    <div class="container" :style="gridStyle">
      <slot name="content"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "GridLayout",
  props: {
    columns: {
      type: Number,
      default: 4, // Default to 4 if not specified
    },
  },
  computed: {
    gridStyle() {
      return {
        gridTemplateColumns: `repeat(${this.columns}, minmax(0, 1fr))`
      };
    }
  }
}
</script>

<style scoped lang="scss">
.wrapper {
  display: flex;
  flex-direction: column;

  .container {
    display : grid;
    margin: 0 auto;
    padding: 25px 32px;
    gap: 64px;
  }

  .title {
    padding: 50px 32px;
    color: white;
    margin: 0 auto;
  }
}
</style>
