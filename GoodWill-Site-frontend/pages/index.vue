<template>


  <v-card class="homeWrap" flat>

      <v-card flat class="slider">
        <slider/>
      </v-card>

    <v-row
      align="start" justify="center">
      <v-col
        cols="12" md="8"
        v-for="newItem of latestNews"
        :key="newItem.id"
        class="newsCard">
        <router-link class="linkNewsDetailed" :to="newsDetailed.href">
          <h4> {{ newItem.heading }} </h4>
          <v-banner class="cardDescription">
            {{ newItem.title }}
          </v-banner>
        </router-link>
      </v-col>
    </v-row>
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
  display: flex;
h2{
  color: $colorCorporate;
}
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


@media (max-width: 1000px) {
  .homeWrap {
    flex-direction: column;
  }
  .slider{
    display: flex;
    justify-content: center;
  }
}
</style>
