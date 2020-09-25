<template>
  <v-app>
    <v-card
      app
      light class="siteWrapper">
      <v-row
        align="start"
        justify="center"
        class="fill-height">
        <v-col
          cols="12" lg="8"
          class="fill-height">
          <v-card  class="barMenu">
          <menuBar/>
          </v-card>
          <v-card>
          <breadcrumbs/>
          </v-card>
          <v-main class="mainContent">
            <nuxt/>
          </v-main>
          <footerSite/>
        </v-col>
      </v-row>
    </v-card>
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

.siteWrapper {

  .mainContent {
  }
}

</style>
