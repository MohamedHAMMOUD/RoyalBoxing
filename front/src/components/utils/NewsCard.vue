<template>
  <div class="card">
    <div>
      <img v-if="!imageNotFound" :src="data.image" @error="imageNotFound = true">
      <img v-else :src="defaultImage">
    </div>
    <div class="card-information">
      <!-- News information section -->
      <div >{{ this.data.Date }}</div>
      <div>{{ this.data.Title }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
  data() {
    return {
      imageNotFound: false,
    };
  },
  methods: {

  },
  props: {
    data: {
      type: Object,
      required: true,
    },
    defaultImage: {
      type: String,
      default: "/instructor_none.png"
    }
  },
}
</script>

<style scoped lang="scss">
.card {
  display: flex;
  border-radius: 16px;
  background-color: #f1d100;
  flex-direction: row;
  color: black;
  //text-align: center;
  transition: transform .3s;


  img {
    width: 100%;
    height : 100%;
    border-top-left-radius: 16px;
    border-bottom-left-radius: 16px;
  }

  .card-information {
    
    padding: 0 20px 20px;
    font-family: "Twemoji Country Flags",
      Avenir,
      -apple-system,
      BlinkMacSystemFont,
      "Segoe UI",
      Roboto,
      Helvetica,
      Arial,
      sans-serif,
      "Apple Color Emoji",
      "Segoe UI Emoji",
      "Segoe UI Symbol";

  }

}

.card:hover {
  transform: translateY(5px);
  box-shadow: 2px 2px 25px 0px #8e812d;
}

.card-button:hover {
  transform: scale(1.1);
}
</style>