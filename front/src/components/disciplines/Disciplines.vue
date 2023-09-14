<template>
  <div class="disciplines-banner"><img src="horaires_title.png"></div>

  <GridLayout>
    <template v-slot:content>
      <Card v-for="discipline in disciplines" :key="discipline._id" :data="discipline" defaultImage="/muay_thai.jpg">
      </Card>
    </template>
  </GridLayout>
</template>

<script>
import axios from 'axios';
import Card from '../utils/Card.vue';
import GridLayout from '../utils/GridLayout.vue';


export default {
  name: "Disciplines",
  components: {
    Card,
    GridLayout,

  },
  data() {
    return {
      disciplines: [],
    };
  },

  methods: {


  },

  async created() {
    try {
      const response = await axios.get('http://localhost:3001/disciplines/');
      this.disciplines = response.data
      console.log("Disciplines", response.data);
    } catch (error) {
      console.error('Error fetching items:', error);
    }
  },
}
</script>


<style scoped lang="scss">
.disciplines-banner {
  width: 100%;
  text-align: center;
}
</style>