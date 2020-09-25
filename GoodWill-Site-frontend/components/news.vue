<template>
  <v-card>
    <v-banner v-for="newItem of news" :key="newItem.id" class="newsCard">
      <h3> {{ newItem.title }}</h3>

      <v-banner :elevation="2 -1" class="bannerDescription rounded-r-xl">
        {{ newItem.description }}
        <template v-slot:actions>
          <v-btn :to="newsDetailed.href" text color="indigo darken-4" class="rounded-xl">Перейти</v-btn>
        </template>
      </v-banner>
    </v-banner>
  </v-card>
</template>

<script>
export default {
  name: "news",
  data() {
    return {
      newsDetailed: {
        href: '/news/news_details/_id',
      },
      news: [
        {
          id: 1,
          title: "Заголовок новости 1",
          description: "Краткое описание 1"
        }, {
          id: 2,
          title: "Заголовок новости 2",
          description: "Краткое описание 2"
        }, {
          id: 3,
          title: "Заголовок новости 3",
          description: "Краткое описание 3"
        }, {
          id: 4,
          title: "Заголовок новости 4",
          description: "Краткое описание 4"
        }, {
          id: 5,
          title: "Заголовок новости 5",
          description: "Краткое описание 5"
        }, {
          id: 6,
          title: "Заголовок новости 6",
          description: "Краткое описание 6"
        }, {
          id: 7,
          title: "Заголовок новости 7",
          description: "Краткое описание 7"
        }, {
          id: 8,
          title: "Заголовок новости 8",
          description: "Краткое описание 8"
        }, {
          id: 9,
          title: "Заголовок новости 9",
          description: "Краткое описание 9"
        }, {
          id: 10,
          title: "Заголовок новости 10",
          description: "Краткое описание 10"
        },
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.newsCard {
  padding: 5px;
  color: $colorCorporate;

  .bannerDescription {
    border-bottom: 1px solid rgba(3, 31, 90, 0.2);
  }
}
</style>
