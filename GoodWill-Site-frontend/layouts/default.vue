<template>
  <v-app>
    <v-row
      app
      align="start"
      justify="center"
      class="fill-height">
      <v-col
        cols="12"  lg="12"
        class="fill-height col-layout rounded-lg">
        <menuBar/>
        <breadcrumbs/>
        <v-main class="mainContent">
          <transition name="fade" appear>
            <nuxt/>
          </transition>
        </v-main>
        <footerSite/>
      </v-col>
    </v-row>
  </v-app>
</template>

<script>
import menuBar from "~/components/menuBar.vue";
import breadcrumbs from "~/components/breadcrumbs.vue";
import footerSite from "~/components/footerSite.vue";

export default {
  head: {
    title: 'Лояут',
    meta: [
      {
        charset: 'utf-8'
      },
      {
        name: 'Мета лояут', content: 'Глобальное лояут описание'
      },
      {
        hid: 'Хид лояут',
        name: 'Мета лояут имя',
        content: 'Мета лояут контент'
      }
    ],
    link: [
      {
        rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'
      }
    ]
  },
  components: {
    menuBar,
    breadcrumbs,
    footerSite,
  }
}
</script>

<style lang="scss">

.col-layout {
  padding: 0;
  background-color: white;
}

.fade-enter {
  opacity: 0;
}

.fade-enter-active {
  transition: opacity 1.5s ease;
}

.fade-leave-active {
  transition: opacity 1.5s ease;
  opacity: 0;
}

</style>
