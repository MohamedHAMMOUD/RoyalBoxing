<template>
  <div class="disciplines-banner"><img src="horaires_title.png"></div>
  <GridLayout :columns="'3'">
    <template v-slot:content>
      <NewsCard v-for="entry in news" :key="entry._id" :data="entry" defaultImage="/muay_thai.jpg">
      </NewsCard>
    </template>
  </GridLayout>
</template>

<script>
import axios from 'axios';
import NewsCard from './utils/NewsCard.vue';
import GridLayout from './utils/GridLayout.vue';

export default {
  name: "News",
  components: {
    NewsCard,
    GridLayout
  },
  data() {
    return {
      news: [],
    };
  },
  methods: {

  },

  async created() {
    try {
      const response = await axios.get('http://localhost:3001/news/');
      this.news = response.data
      console.log("news : ", response.data);
    } catch (error) {
      console.error('Error fetching items:', error);
    }
  },
}
</script>

<style scoped lang="scss">
.disciplines-banner {
  width :100%;
  text-align: center;
}

</style>