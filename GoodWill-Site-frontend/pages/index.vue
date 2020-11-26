<template>
  <v-card class="homeWrap" flat>
    <v-container>
      <v-card flat class="slider">
        <transition name="slideTransition" appear mode="out-in">
          <slider/>
        </transition>
      </v-card>
    </v-container>

    <v-container>
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
    </v-container>
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

  .slider {
    //margin-right: 2vw;
  }

  h2 {
    color: $colorCorporate;
  }

  .linkNewsDetailed {
    text-decoration: none;

    .newsCard {
      color: $colorCorporate;

      .cardDescription {
        margin: 5px;
      }
    }
  }
}


@media (max-width: 1000px) {
  .homeWrap {
    flex-direction: column;
  }
  .slider {
    display: flex;
    justify-content: center;
  }
}

.slideTransition-enter {
  opacity: 0;
}

.slideTransition-enter-active {
  transition: opacity 2s ease;
}

.slideTransition-leave-active {
  transition: opacity 2s ease;
  opacity: 0;
}
</style>
