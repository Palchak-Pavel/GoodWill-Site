<template>
  <v-app>
    <v-row
      app
      align="start"
      justify="center"
      class="fill-height">
      <v-col
        cols="12" lg="8"
        class="fill-height">
        <menuBar/>
        <breadcrumbs/>
        <v-main class="mainContent">
          <nuxt/>
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

  components: {
    menuBar,
    breadcrumbs,
    footerSite,
  }
}
</script>

<style lang="scss">


</style>
