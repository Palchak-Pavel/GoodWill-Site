<template>
  <v-card class="homeWrap" flat>
    <v-container>
      <slider/>
    </v-container>
    <router-link class="linkNewsDetailed" :to="newsDetailed.href">
      <v-row
        align="start" justify="center">
        <v-col
          cols="10" md="5"
          v-for="newItem of latestNews"
          :key="newItem.id"
          class="newsCard">
          <h4> {{ newItem.heading }} </h4>
          <v-banner class="cardDescription">
            {{ newItem.title }}
          </v-banner>
        </v-col>
      </v-row>
    </router-link>
  </v-card>
</template>

<script>

import slider from "~/components/slider.vue";
import {mapGetters} from 'vuex';

export default {
  name: "home",
  data() {
    return {
      newsDetailed: {
        href: '/news/_id',
      },
      title: 'Главная',
      description: 'Главная описание'
    }
  },
  head() {
    return {
      title: this.title,
      meta: [
        {
          hid: 'Хид Главная',
          name: 'Имя Главная',
          content: this.description
        }
      ]
    }
  },

  computed: {
    ...mapGetters("news", ["latestNews"])
  },

  components: {
    slider,
  }
}
</script>

<style lang="scss">
.homeWrap {
  @include size-window;

  .linkNewsDetailed {
    text-decoration: none;

    .newsCard {
      color: $colorCorporate;

      .cardDescription {
        margin: 5px;
      }

      margin: 0 auto;
      padding: 5px;
    }
  }
}
</style>
