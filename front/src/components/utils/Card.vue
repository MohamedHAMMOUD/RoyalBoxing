<template>
  <div class="card">
    <div>
      <img v-if="!imageNotFound" :src="data.image" @error="imageNotFound = true">
      <img v-else :src="defaultImage">
    </div>
    <div class="card-information">
      <h3>{{ this.data.name }}</h3>
      <div class="card-button">Savoir plus</div>
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
    data : { 
      type : Object,
      required : true,
    },
    defaultImage : {
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
  flex-direction: column;
  color: black;
  text-align: center;
  transition: transform .3s;


  img {
    width: 100%;
    border-top-left-radius: 16px;
    border-top-right-radius: 16px;
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

    h3 {
      text-transform: uppercase;
      font-size: 20px;
      font-weight: 700;
      text-shadow: 1px 1px 3px rgba(150, 150, 150, 1);
    }

    p {
      font-size: 14px;
      line-height: 1.3;
      font-weight: 500;
    }
  }


  .card-button {
    background: black;
    border-radius: 8px;
    border: none;
    color: #f1d100;
    font-weight: 600;
    text-transform: uppercase;
    cursor: pointer;
    padding: 10px;
    font-size: 16px;
    transition: .5s;

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