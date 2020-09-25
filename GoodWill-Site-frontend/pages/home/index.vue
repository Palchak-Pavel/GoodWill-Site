<template>
  <v-card class="homeWrap" :elevation="6-1">
    <v-container>
      <slider/>
    </v-container>
    <router-link class="linkNewsDetailed" :to="newsDetailed.href">
      <v-row>
        <v-col
          md="5"
          sm="10"
          xs="10"
          v-for="newTitle of news.slice(0,8)"
          :key="newTitle.title"
          class="newsCard">
          <h4> {{ newTitle.title }} </h4>
          <v-banner class="cardDescription">
            {{ newTitle.description }}
          </v-banner>
        </v-col>
      </v-row>
    </router-link>
  </v-card>
</template>

<script>
import slider from "~/components/slider.vue";

export default {
  name: "home",
  data() {
    return {
      newsDetailed: {
        href: '/news/news_details/_id',
      },
      news: [
        {
          id: 1,
          title: "Заголовок новости 1",
          description: "Краткое описание описание описание описание описание описание описание 1"
        }, {
          id: 2,
          title: "Заголовок новости 2",
          description: "Краткое описание описание описание описание описание описание описание 2"
        }, {
          id: 3,
          title: "Заголовок новости 3",
          description: "Краткое описание описание описание описание описание описание описание 3"
        }, {
          id: 4,
          title: "Заголовок новости 4",
          description: "Краткое описание описание описание описание описание описание описание 4"
        }, {
          id: 5,
          title: "Заголовок новости 5",
          description: "Краткое описание описание описание описание описание описание описание 5"
        }, {
          id: 6,
          title: "Заголовок новости 6",
          description: "Краткое описание описание описание описание описание описание описание 6"
        }, {
          id: 7,
          title: "Заголовок новости 7",
          description: "Краткое описание описание описание описание описание описание описание 7"
        }, {
          id: 8,
          title: "Заголовок новости 8",
          description: "Краткое описание описание описание описание описание описание описание 8"
        }, {
          id: 9,
          title: "Заголовок новости 9",
          description: "Краткое описание описание описание описание описание описание описание 9"
        }, {
          id: 10,
          title: "Заголовок новости 10",
          description: "Краткое описание описание описание описание описание описание описание 10"
        },
      ]
    }
  },
  components: {
    slider,
  }
}
</script>

<style lang="scss" scoped>
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
