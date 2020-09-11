<template>
  <v-card>
    <v-app-bar  class="menuWrap" app>
      <v-toolbar class="toolBar" flat>
        <v-card flat class="wrapper">
          <v-card flat>
            <router-link :to="logo.href">
              <v-img class="logo_img" :src="logo.src"></v-img>
            </router-link>
          </v-card>
          <v-toolbar-items>
            <v-btn dark  text v-for="(item, i) in menuItems" :key="`menuItem${i}`" :to="item.route" class="items rounded"  small>
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
    </v-app-bar>
  </v-card>
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
.menuWrap {
  background-color: $colorCorporate !important;

  .toolBar {
    background-color: $colorCorporate !important;
    align-items: center;

    .wrapper {
      display: flex;
      width: 100%;
      justify-content: space-between;
      align-items: center;
      background-color: $colorCorporate !important;

      .logo_img {
        background-color: transparent;
      }

      .items {
        margin-left: 10px;
        height: 37px !important;
      }

      .btnCatalogWrap {
        background-color: $colorCorporate;
        display: flex;
        align-items: center;
        margin-right: 20px;
        margin-left: 10px;

        .btnCatalog {
          color: $colorCorporate;
          bottom: 0;
        }
      }
    }
  }
}
</style>
