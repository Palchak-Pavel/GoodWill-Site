<template>
  <v-card  class="homeWrap" flat>
    <h1>Главная</h1>
    <v-container>
      <slider/>
    </v-container>
  </v-card>
</template>

<script>
import slider from "~/components/slider.vue";

export default {
  name: "home",
  components: {
    slider,
  }
}
</script>

<style lang="scss" scoped>
.homeWrap{
  @include size-window;
}
</style>
