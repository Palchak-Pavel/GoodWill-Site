<template>
  <div>
    <v-breadcrumbs
      :items="items"
      divider="/">
    </v-breadcrumbs>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          text: 'home',
          disabled: false,
          to: '/',
        },
        {
          text: 'about',
          disabled: false,
          to: '/about',

        },
        {
          text: 'news',
          disabled: false,
          to: '/news',
        },
        {
          text: 'production',
          disabled: false,
          to: '/production',
        },
        {
          text: 'contacts',
          disabled: false,
          to: '/contacts',
        },
        {
          text: 'partners',
          disabled: false,
          to: '/partners',
        },
      ],
    }
  },
}
</script>
