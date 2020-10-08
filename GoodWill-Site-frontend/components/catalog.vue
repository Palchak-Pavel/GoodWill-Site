<template>
  <v-card flat class="btnCatalogWrap">
    <v-btn
      light
      rounded
      class="btnCatalog rounded" href="http://catalog.goodfil.com/products/search"
      target="_blank">
      Каталог
    </v-btn>
  </v-card>
</template>

<script>
export default {
  name: "catalog"
}
</script>

<style lang="scss">
.btnCatalogWrap {
  background-color: transparent;
  align-self: center;
  margin-right: 20px;
  margin-left: 10px;

  .btnCatalog {
    color: $colorCorporate;
  }
}
</style>
