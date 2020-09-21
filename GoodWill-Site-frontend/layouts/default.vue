<template>
  <v-app>
    <v-card app light class="siteWrapper">
      <v-row align="start" justify="center" class="fill-height">
        <v-col cols="12" lg="8" class="fill-height">
          <menuBar/>
          <breadcrumbs/>
          <v-main app class="mainPadding">
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

    .mainPadding {
      padding-top: 0 !important;
    }
  }

</style>
