<template>
  <v-app class="appWrap">
    <v-card app light :elevation="6-1" class="newsWrap">
      <!--    <ul>-->
      <!--      <li v-for="newItem of news" :key="newItem.id">{{ newItem.heading }}</li>-->
      <!--    </ul>-->

      <!--      <v-banner v-for="newItem of news" :key="newItem.id" class="newsCard">-->
      <!--        <h3> {{ newItem.title }}</h3>-->

      <!--&lt;!&ndash;        <v-divider></v-divider>&ndash;&gt;-->
      <!--        <v-banner :elevation="2 -1" class="bannerDescription rounded-r-xl">-->
      <!--          {{ newItem.description }}-->
      <!--          <template v-slot:actions>-->
      <!--            <v-btn text color="indigo darken-4" class="rounded-xl">Перейти</v-btn>-->
      <!--          </template>-->
      <!--        </v-banner>-->
      <!--      </v-banner>-->
      <news/>
    </v-card>
  </v-app>
</template>

<script>
// import axios from '@nuxtjs/axios';
import news from "~/components/news.vue";

export default {
  components: {
    news,
  }
  // data() {
  //   return {
  //     news: [
  //       {
  //         id: 1,
  //         title: "Заголовок новости 1",
  //         description: "Краткое описание 1"
  //       }, {
  //         id: 2,
  //         title: "Заголовок новости 2",
  //         description: "Краткое описание 2"
  //       }, {
  //         id: 3,
  //         title: "Заголовок новости 3",
  //         description: "Краткое описание 3"
  //       }, {
  //         id: 4,
  //         title: "Заголовок новости 4",
  //         description: "Краткое описание 4"
  //       }, {
  //         id: 5,
  //         title: "Заголовок новости 5",
  //         description: "Краткое описание 5"
  //       }, {
  //         id: 6,
  //         title: "Заголовок новости 6",
  //         description: "Краткое описание 6"
  //       }, {
  //         id: 7,
  //         title: "Заголовок новости 7",
  //         description: "Краткое описание 7"
  //       }, {
  //         id: 8,
  //         title: "Заголовок новости 8",
  //         description: "Краткое описание 8"
  //       }, {
  //         id: 9,
  //         title: "Заголовок новости 9",
  //         description: "Краткое описание 9"
  //       }, {
  //         id: 10,
  //         title: "Заголовок новости 10",
  //         description: "Краткое описание 10"
  //       },
  //     ]
  //   }


  // data() {
  //   return {
  //     news: [],
  //   };
  // },
  // async created() {
  //   try {
  //     const response = await axios.get(`http://localhost:3004/news`);
  //     this.news = response.data;
  //   } catch (e) {
  //     console.error(e);
  //   }
  // },
  // }
}
</script>

<style lang="scss">
.theme--light.v-banner.v-sheet .v-banner__wrapper {
  border-bottom: none;
}

.appWrap {
  background-color: white;

  .newsWrap {
    @include size-window;

    //.newsCard {
    //  padding: 5px;
    //
    //  .bannerDescription {
    //    border-bottom: 1px solid rgba(3, 31, 90, 0.2);
    //  }
    //}
  }
}
</style>
