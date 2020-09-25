<template>
  <v-card :elevation="6-1" class="partnersWrap">
    <h1>Partners</h1>
    <ul>
      <li v-for="city in cities" :key="city.id">{{ city.heading }}</li>
    </ul>
    <v-card flat class="mapGoogle">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d17951.701698197307!2d37.657916500000006!3d55.776519449999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2sru!4v1600862839079!5m2!1sru!2sru"
        width="60%" height="600"
        frameborder="0" style="border:0;"
        allowfullscreen=""
        aria-hidden="false"
        tabindex="0">
      </iframe>
    </v-card>
  </v-card>
</template>

<script>
import * as axios from '@nuxtjs/axios';

export default {
  name: "partners",
  data() {
    return {
      cities: []
    };
  },

  async created() {
    try {
      const res = await axios.get('http://localhost:3004/news')
      this.cities = res.data;
    } catch (e) {
      console.error(e);
    }
  }
}
</script>

<style lang="scss" scoped>
.partnersWrap {
  @include size-window;
  .mapGoogle{
    margin: 5px;
  }
}
</style>
