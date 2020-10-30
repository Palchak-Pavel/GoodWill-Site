<template>
  <v-app>
    <v-row justify="center" class="idNews">
      <v-dialog light v-model="dialog" persistent max-width="290">
        <v-card>
          <v-card-title class="headline"> Раздел находится в разработке</v-card-title>
          <v-card-text>Информация о новости</v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn :to="backHome.href" block class="btnBackHome">Вернуться на главную</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
  </v-app>
</template>

<script>
export default {
  name: "news_details",
  data() {
    return {
      dialog: true,
      backHome: {
        href: "/"
      },
      title: 'Новости айди'
    }
  },
  head() {
    return {
      title: this.title,
      meta: [
        {
          hid: 'Хид Новости айди',
          name: 'Имя Новости айди',
          content: 'Контент Новости айди'
        }
      ]
    }
  },
}
</script>

<style lang="scss" scoped>
.idNews {
  @include size-window;
  background-color: white;
}

.btnBackHome {
  color: $colorCorporate;
}
</style>
