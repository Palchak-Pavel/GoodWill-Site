<template>
  <v-card flat class="breadcrumbsWrapp">
    <v-breadcrumbs divider="/">
      <v-breadcrumbs-item
        href="/home">
        Home
      </v-breadcrumbs-item>
      <v-breadcrumbs-item divider="/"
        v-for="item in items" :key="item.path"
      >
        {{ item.name }}
      </v-breadcrumbs-item>
    </v-breadcrumbs>
  </v-card>
</template>

<script>
export default {
  // data: () => ({
  //   items: [
  //     {
  //       text: 'Главная',
  //       disabled: false,
  //       href: '/home',
  //     },
  //     {
  //       text: 'Link 1',
  //       disabled: false,
  //       href: 'breadcrumbs_link_1',
  //     },
  //     {
  //       text: 'Link 2',
  //       disabled: true,
  //       href: 'breadcrumbs_link_2',
  //     },
  //   ],
  // }),
  data() {
    return {
      items: [],
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
      console.log(this.$route);
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
