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
          v-for="newItem of newsArr.slice(0,6)"
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

export default {
  name: "home",
  data() {
    return {
      newsArr: [],
      newsDetailed: {
        href: '/news/news_details/_id',
      },
    }
  },
  async created() {
    try {
      const res = await this.$axios.get('http://localhost:3004/news')
      this.newsArr = res.data;
    } catch (e) {
      console.error(e);
    }
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
