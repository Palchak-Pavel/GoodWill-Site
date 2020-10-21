<template>
  <v-row justify="center" class="production">
    <v-col cols="md-12 sm-8" class="tabsWrap">
      <v-btn depressed class="btnTabs" @click="component='eco_filters'">
        Воздушные
      </v-btn>
      <v-btn depressed class="btnTabs" @click="component='fuel_filters'">
        Топливные
      </v-btn>
      <v-btn depressed class="btnTabs" @click="component='oil_filters'">
        Масляные
      </v-btn>
      <v-btn depressed class="btnTabs" @click="component='salon_filters'">
        Салонные
      </v-btn>
      <v-btn depressed class="btnTabs" @click="component='shetki'">
        Щетки стеклоочистителей
      </v-btn>
      <v-btn depressed class="btnTabs" @click="component='tk'">
        Тормозные колодки
      </v-btn>
    </v-col>

    <transition
      name="fade"
      mode="out-in"
      appear>
      <component :is="component"></component>
    </transition>

  </v-row>
</template>

<script>
import fuel_filters from "../../components/production/fuel_filters";
import eco_filters from "../../components/production/eco-filters";
import oil_filters from "../../components/production/oil_filters";
import salon_filters from "../../components/production/salon-filters";
import shetki from "../../components/production/shetki";
import tk from "../../components/production/tk";
import Default from "../../layouts/default";

export default {
  name: "production",
  data() {
    return {
      title: 'Продукция',
      component: 'eco_filters'
    }
  },
  components: {
    Default,
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
.fade-enter-active {
  animation: slideIn 1.5s;
}

.fade-leave, .fade-leave-to {
}

.fade-leave-active {
  animation: slideOut 1.5s;
}

@keyframes slideIn {
  from {
    transform: translateX(30vw)
  }
  to {
    transform: translateX(0)
  }
}

@keyframes slideOut {
  from {
    transform: translateX(0)
  }
  to {
    transform: translateX(-30vw)
  }
}

.production {
  @include size-window;

  .btnTabs {
    color: $colorCorporate;
    margin-bottom: 4px;
  }
}
</style>
