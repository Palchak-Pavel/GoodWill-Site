<template>
  <v-card :elevation="6-1" class="partnersWrap" ><h1>Partners</h1></v-card>
</template>

<script>
export default {
  name: "partners"
}
</script>

<style lang="scss" scoped>
.partnersWrap{
  @include size-window;
}
</style>
