<template>
  <div class="disciplines-banner"><img src="horaires_title.png"></div>
  <GridLayout>
    <template v-slot:title>
    </template>
    <template v-slot:content>
      <Card v-for="instructor in instructors" :key="instructor._id" :data="instructor"
        defaultImage="/instructor_none.png">
      </Card>
    </template>
  </GridLayout>
</template>

<script>
import axios from 'axios';
import Card from './utils/Card.vue';
import GridLayout from './utils/GridLayout.vue';

export default {
  name: "Instructors",
  components: {
    Card,
    GridLayout,
  },
  data() {
    return {
      instructors: [],
    };
  },
  methods: {

  },

  async created() {
    try {
      const response = await axios.get('http://localhost:3001/instructors/');
      this.instructors = response.data
      console.log("Instructors", response.data);
    } catch (error) {
      console.error('Error fetching items:', error);
    }
  },
}
</script>

<style scoped lang="scss">
.disciplines-banner {
  text-align: center;

  img {
    max-width: 100%;
    height : auto;

  }
}
</style>