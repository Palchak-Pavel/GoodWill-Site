<template>
  <v-app-bar class="barWrap rounded-t-lg">
    <v-row>
      <v-col cols="12" lg="8" class="headerItem">
        <v-toolbar flat class="toolBar">
          <v-card flat class="wrapper">
            <v-card class="imgWrap rounded-lg" flat>
              <router-link :to="logo.href">
                <v-img class="logo_img" :src="logo.src"></v-img>
              </router-link>
            </v-card>

            <v-toolbar-items>
              <v-btn dark text v-for="(item, i) in menuItems" :key="`menuItem${i}`" :to="item.route"
                     class="items rounded" small>
                {{ item.title }}
              </v-btn>
              <v-card flat class="btnCatalogWrap">
                <v-btn light class="btnCatalog" href="http://catalog.goodfil.com/products/search" target="_blank">
                  Каталог
                </v-btn>
              </v-card>
              <!--Вход пользователя-->
              <logIn/>
              <!---->
            </v-toolbar-items>
          </v-card>
        </v-toolbar>
      </v-col>
    </v-row>
  </v-app-bar>
</template>

<script>
import logIn from "~/components/log-in.vue";

export default {
  name: "menuBar",
  data() {
    return {
      drawer: null,
      logo: {
        src: require("~/assets/logo/goodwill.png"),
        href: "/home"
      },
    }
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
  }
}
</script>

<style lang="scss">

.barWrap {
  background-color: $colorCorporate !important;

  .headerItem {
    width: 100%;

    .toolBar {
      background-color: $colorCorporate !important;

      .wrapper {
        display: flex;
        justify-content: space-between !important;
        background-color: $colorCorporate !important;

        .imgWrap {
          margin-right: 2.5vw;
        }

        .logo_img {
          background-color: transparent;
        }

        .items {
          margin-left: 10px;
          align-items: center;
        }

        .btnCatalogWrap {
          background-color: $colorCorporate;
          align-self: center;
          margin-right: 20px;
          margin-left: 10px;

          .btnCatalog {
            color: $colorCorporate;
          }
        }
      }
    }
  }
}
</style>
