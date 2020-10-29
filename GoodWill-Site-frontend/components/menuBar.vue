<template>
  <v-card
    tile
    flat
    class="rounded-t-lg">
    <v-toolbar
      flat
      color="indigo darken-4"
      dark
      class="rounded-t-lg">
      <v-app-bar-nav-icon
        @click.stop="drawer = !drawer"
        class="hidden-md-and-up">
      </v-app-bar-nav-icon>

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
        <v-btn
          dark
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
      height="80vh">
      <v-list
        nav>
        <v-list-item-group
          v-model="group"
          active-class="text--accent-4"
          color="indigo">
          <v-list-item
            v-for="(item, i) in menuItems" :key="`menuItem${i}`" :to="item.route">
            {{ item.title }}
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </v-card>
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
        href: "/"
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
</style>
