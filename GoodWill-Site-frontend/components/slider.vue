<template>
  <v-carousel
    cycle
    :show-arrows="false"
    class="slider"
     >
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
      reverse-transition="fade-transition"
      transition="fade-transition"
    ></v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
  name: "slider",
  data() {
    return {
      items: [
        {
          src: 'http://www.goodfil.com/images/articles/filter%20salona%20goodwill_kollage.jpg',
        },
        {
          src: 'http://www.goodfil.com/images/articles/1.jpg',
        },
        {
          src: 'http://www.goodfil.com/images/articles/filter%20toplivo%20goodwill_kollage.jpg',
        },
        {
          src: 'http://www.goodfil.com/images/air-filter1.jpg',
        },
      ],
    }
  },
}
</script>

<style scoped>
.slider{
  max-height:300px;
  width: 60%;
  margin: 0 auto;
}

</style>
