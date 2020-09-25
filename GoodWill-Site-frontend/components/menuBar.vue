<template>
  <!--  <v-app-bar class="barWrap rounded-t-lg">-->
  <!--    <v-row>-->
  <!--      <v-col>-->
  <!--        <v-toolbar flat class="toolBar">-->
  <!--          <v-card flat class="wrapper">-->
  <!--            <v-card class="imgWrap rounded-lg" flat>-->
  <!--              <router-link :to="logo.href">-->
  <!--                <v-img class="logo_img" :src="logo.src"></v-img>-->
  <!--              </router-link>-->
  <!--            </v-card>-->

  <!--              <v-toolbar-items class="menuBar">-->
  <!--                <v-btn dark text v-for="(item, i) in menuItems" :key="`menuItem${i}`" :to="item.route"-->
  <!--                       class="items rounded" small>-->
  <!--                  {{ item.title }}-->
  <!--                </v-btn>-->
  <!--                <v-card flat class="btnCatalogWrap">-->
  <!--                  <v-btn light rounded class="btnCatalog rounded" href="http://catalog.goodfil.com/products/search"-->
  <!--                         target="_blank">-->
  <!--                    Каталог-->
  <!--                  </v-btn>-->
  <!--                </v-card>-->
  <!--                &lt;!&ndash;Вход пользователя&ndash;&gt;-->
  <!--                <logIn/>-->
  <!--                &lt;!&ndash;&ndash;&gt;-->
  <!--              </v-toolbar-items>-->
  <!--          </v-card>-->
  <!--        </v-toolbar>-->
  <!--      </v-col>-->
  <!--    </v-row>-->
  <!--  </v-app-bar>-->

  <v-app>
    <v-card
      app
      tile
      flat
      class="rounded-t-lg"
    >
      <v-toolbar
        color="indigo darken-2"
        dark
        class="rounded-t-lg"
      >
        <v-app-bar-nav-icon
          @click.stop="drawer = !drawer"
          class="hidden-md-and-up"
        ></v-app-bar-nav-icon>

        <v-toolbar-title>
          <v-card
            light
            class="imgWrap rounded-lg"
            flat>
            <router-link :to="logo.href">
              <v-img class="logo_img" :src="logo.src"></v-img>
            </router-link>
          </v-card>
        </v-toolbar-title>

        <v-spacer></v-spacer>

        <v-toolbar-items class="hidden-sm-and-down">
          <v-btn dark
                 class="itemsToolbar rounded-lg"
                 text v-for="(item, i) in menuItems" :key="`menuItem${i}`" :to="item.route"
                 small>
            {{ item.title }}
          </v-btn>
          <!--catalog------------>
          <catalog/>
          <!--Вход пользователя-->
          <logIn/>
          <!---->
        </v-toolbar-items>
      </v-toolbar>

      <v-navigation-drawer
        v-model="drawer"
        absolute
        height="80vh"
        temporary
      >

        <v-list
          nav
        >
          <v-list-item-group
            v-model="group"
            active-class="deep-purple--text text--accent-4"
          >
            <v-list-item
              v-for="(item, i) in menuItems" :key="`menuItem${i}`" :to="item.route" >
            </v-list-item>

<!--            <v-list-item>-->
<!--              <v-list-item-title>Bar</v-list-item-title>-->
<!--            </v-list-item>-->

<!--            <v-list-item>-->
<!--              <v-list-item-title>Fizz</v-list-item-title>-->
<!--            </v-list-item>-->

<!--            <v-list-item>-->
<!--              <v-list-item-title>Buzz</v-list-item-title>-->
<!--            </v-list-item>-->
          </v-list-item-group>
        </v-list>
      </v-navigation-drawer>
    </v-card>
  </v-app>
</template>

<script>
import logIn from "./log-in.vue";
import catalog from "./catalog";

export default {
  name: "menuBar",
  data() {
    return {
      drawer: false,
      group: null,
      logo: {
        src: require("~/assets/logo/goodwill.png"),
        href: "/home"
      },
    }

  },
  watch: {
    group() {
      this.drawer = false
    },
  },
  computed: {
    menuItems() {
      return [
        {
          title: 'О компании',
          route: '/about'
        },
        {
          title: 'Новости',
          route: '/news'
        },
        {
          title: 'Продукция',
          route: '/production'
        },
        {
          title: 'Контакты',
          route: '/contacts'
        },
        {
          title: 'Партнеры',
          route: '/partners'
        },
      ]
    },
  },
  components: {
    logIn,
    catalog,
  }
}
</script>

<style lang="scss">
.v-application--wrap {
  min-height: 0 !important;
}

.v-toolbar__title {
  padding-left: 0 !important;
}

.itemsToolbar {
  max-height: 50px !important;
  align-self: center;
}

//.barWrap {
//  background-color: $colorCorporate !important;
//
//
//  .toolBar {
//    background-color: $colorCorporate !important;
//
//    .wrapper {
//      display: flex;
//      background-color: $colorCorporate !important;
//
//      .menuBar {
//      }
//
//      .imgWrap {
//        //margin-right: 2.5vw;
//      }
//
//      .logo_img {
//        background-color: transparent;
//      }
//
//      .items {
//        margin-left: 10px;
//        align-items: center;
//      }
//
//      .btnCatalogWrap {
//        background-color: transparent;
//        align-self: center;
//        margin-right: 20px;
//        margin-left: 10px;
//
//        .btnCatalog {
//          color: $colorCorporate;
//        }
//      }
//    }
//  }
//
//}


</style>
