<template>
  <v-breadcrumbs v-if="stack.length > 0" class="crumbs">
    <v-breadcrumbs-item v-for="item in stack" class="crumbs__item" :class="item.class">
      <router-link :to="{ name: item.name }" class="crumbs__link">
        {{ item.label }}
      </router-link>
    </v-breadcrumbs-item>
  </v-breadcrumbs>
</template>

<script>
export default {
  name:    'Crumbs',
  data() {
    return { stack: [] }
  },
  mounted() {
    this.buildStack()
  },
  methods: {
    buildStack() {
      this.stack = []
      this.addPage(this.$router.currentRoute)
      this.stack = this.stack.reverse()
    },
    addPage(route, first) {
      this.stack.push({
        name:  route.name,
        label: route.meta?.breadcrumbs?.label || route.name.replace('.', ' '),
        class: 'crumbs__item--' + (typeof first === 'undefined' ? 'current' : 'parent')
      })
      if (route.meta.breadcrumbs) {
        const parent = this.getRoute(route.meta.breadcrumbs)
        this.addPage(parent, true)
      }
    },
    getRoute(name) {
      return this.$router.options.routes.find(route => route.name === name)
    }
  }
}
</script>

<style>

.crumbs__link {
  text-decoration: none;
}

</style>
