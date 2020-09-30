<template>
  <v-card app light flat class="newsWrap">
    <v-banner v-for="newItem of newsArr" :key="newItem.id" class="newsCard">
      <h3> {{ newItem.heading }}</h3>
      <v-banner :elevation="2 -1" class="bannerDescription rounded-r-xl">
        {{ newItem.title }}
        <template v-slot:actions>
          <v-btn :to="newsDetailed.href" text color="indigo darken-4" class="rounded-xl">Перейти</v-btn>
        </template>
      </v-banner>
    </v-banner>
  </v-card>
</template>
<script>

export default {
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
  }
}
</script>

<style lang="scss">
.theme--light.v-banner.v-sheet .v-banner__wrapper {
  border-bottom: none;
}

  .newsWrap {
    @include size-window;

    .newsCard {
      padding: 5px;
      color: $colorCorporate;

      .bannerDescription {
        border-bottom: 1px solid rgba(3, 31, 90, 0.2);
      }
    }
  }

</style>
