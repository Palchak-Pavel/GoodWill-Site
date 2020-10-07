<template>
  <v-row class="production">
    <v-col cols="12">
      <v-btn depressed class="btnTabs" @click="component='fuel_filters'">
        Топливные фильтры
      </v-btn>
      <v-btn depressed class="btnTabs" @click="component='eco_filters'">
        Воздушные фильтры
      </v-btn>
      <v-btn depressed class="btnTabs" @click="component='oil_filters'">
        Масляные фильтры
      </v-btn>
      <v-btn depressed class="btnTabs" @click="component='salon_filters'">
        Салонные фильтры
      </v-btn>
      <v-btn depressed class="btnTabs" @click="component='shetki'">
        Щетки стеклоочистителей
      </v-btn>
      <v-btn depressed class="btnTabs" @click="component='tk'">
        Тормозные колодки
      </v-btn>

      <component :is="component"></component>
    </v-col>
  </v-row>
</template>

<script>
import fuel_filters from "../../components/production/fuel_filters";
import eco_filters from "../../components/production/eco-filters";
import oil_filters from "../../components/production/oil_filters";
import salon_filters from "../../components/production/salon-filters";
import shetki from "../../components/production/shetki";
import tk from "../../components/production/tk";

export default {
  name: "production",
  data() {
    return {
      title: 'Продукция',
      component: 'fuel_filters'
    }
  },
  components: {
    fuel_filters,
    eco_filters,
    oil_filters,
    salon_filters,
    shetki,
    tk,
  },
  head() {
    return {
      title: this.title,
      meta: [
        {
          hid: 'Хид Продукция',
          name: 'Имя Продукция',
          content: 'Контент Продукция'
        }
      ]
    }
  },
}
</script>

<style lang="scss" scoped>
.production {
  @include size-window;

  .btnTabs {
    color: $colorCorporate;
    margin: 5px;
  }
}
</style>
