<template>
  <v-app>
    <v-card app light>
      <menuBar/>
      <breadcrumbs/>
      <v-main app class="mainPadding">
        <nuxt/>
      </v-main>
      <footerSite/>
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
.mainPadding{
  padding-top: 0 !important;
}
</style>
