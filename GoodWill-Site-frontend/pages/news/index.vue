<template>
  <v-card app light flat class="newsWrap">
    <v-banner v-for="newItem of news" :key="newItem.id" class="newsCard">
      <h3> {{ newItem.heading }}</h3>
      <v-banner
        :elevation="2 -1"
        class="bannerDescription rounded-r-xl"
        md="12">
        {{ newItem.title }}
        <template v-slot:actions>
          <v-btn :to="newsDetailed.href" text color="indigo darken-4" class="rounded-xl">Перейти</v-btn>
        </template>
      </v-banner>
    </v-banner>
  </v-card>
</template>


<script>
import {mapGetters} from 'vuex';

export default {
  data() {
    return {
      newsDetailed: {
        href: '/news/_id',
      },
      title: 'Новости'
    }
  },
  head() {
    return {
      title: this.title,
      meta: [
        {
          hid: 'Хид Новости',
          name: 'Имя Новости',
          content: 'Контент Новости'
        }
      ]
    }
  },
  computed: {
    ...mapGetters("news", ["news"])
  },
}
</script>

<style lang="scss">
.v-banner--is-mobile .v-banner__content .v-banner__wrapper {
  flex-wrap: wrap;
}

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
