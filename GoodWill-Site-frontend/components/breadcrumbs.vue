<template>
  <v-card  class="breadcrumbsWrapp" flat>
    <v-breadcrumbs  :items="items" class="breadcrumbs"></v-breadcrumbs>
  </v-card>
</template>

<script>
export default {
name: "breadcrumbs",
  data: () => ({
    items: [
      {
        text: 'Главная',
        disabled: false,
        href: 'home',
      },
      {
        text: 'Link 1',
        disabled: false,
        href: 'breadcrumbs_link_1',
      },
      {
        text: 'Link 2',
        disabled: true,
        href: 'breadcrumbs_link_2',
      },
    ],
  }),
}
</script>

<style lang="scss">
.breadcrumbsWrapp{
  display: flex;
  align-items: center;
  height:40px;
  margin-top: 60px;
  .breadcrumbs{

  }
}

</style>
