<template>
  <v-row justify="center" class="production">
    <v-col cols="md-12 sm-12" class="tabsWrap">
      <v-btn color="indigo lighten-5" depressed class="btnTabs" @click="component='eco_filters'">
        Воздушные
      </v-btn>
      <v-btn color="indigo lighten-5" depressed class="btnTabs" @click="component='fuel_filters'">
        Топливные
      </v-btn>
      <v-btn color="indigo lighten-5" depressed class="btnTabs" @click="component='oil_filters'">
        Масляные
      </v-btn>
      <v-btn color="indigo lighten-5" depressed class="btnTabs" @click="component='salon_filters'">
        Салонные
      </v-btn>
      <v-btn color="indigo lighten-5"  depressed class="btnTabs" @click="component='shetki'">
        Щетки<br/>
        стеклоочистителей
      </v-btn>
      <v-btn color="indigo lighten-5"  depressed class="btnTabs" @click="component='tk'">
        Тормозные <br/>
        колодки
      </v-btn>
    </v-col>

    <transition
      name="fade"
      mode="out-in">
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

  .tabsWrap {

    .btnTabs {
      flex-grow: 1;
      margin: 5px;
      color: $colorCorporate;
      height: 60px;
      border-color: #C5CAE9;
    }
  }
}


</style>
