<template>
  <v-card flat class="breadcrumbsWrapp">
    <v-breadcrumbs divider="/">
      <v-breadcrumbs-item
        v-for="item in items" :key="item.path"
        divider="/"
        :to="breadcrumbs.href">
        {{ breadcrumbs.default }}
        {{ item.name }}
      </v-breadcrumbs-item>
<!--      <v-breadcrumbs-item-->
<!--        divider="/"-->
<!--        v-for="item in items" :key="item.path"-->
<!--      >-->
<!--        {{ item.name }}-->
<!--      </v-breadcrumbs-item>-->
    </v-breadcrumbs>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      items: [],
      breadcrumbs: {
        href: "/",
        default: 'home'
      },
    }
  },
  watch: {
    $route() {
      this.getRoute();
    }
  },
  methods: {
    getRoute() {
      this.items = this.$route.matched;
    }
  },
  created() {
    this.getRoute();
  }
}
</script>

<style lang="scss">
.breadcrumbsWrapp {
  display: flex;
  align-items: center;
  height: 40px;

  .breadcrumbs {

  }
}

</style>
