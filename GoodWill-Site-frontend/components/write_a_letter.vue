<template>
  <v-row>
    <v-dialog light v-model="dialog" max-width="50vw">
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          elevation="5"
          small
          class="letterBtn"
          light
          v-bind="attrs"
          v-on="on">
          Написать письмо
        </v-btn>
      </template>
      <v-card>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12" sm="6" md="6">
                <v-text-field label="Ваше имя:" required></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="6">
                <v-text-field label="Город:" required></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field label="Email*" required></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field label="Телефон:"></v-text-field>
              </v-col>
              <!---------------Textarea----------------------->
              <v-col cols="12" sm="12">
                <v-textarea
                  label="Сообщение"
                  auto-grow
                  outlined
                  rows="3"
                  row-height="25"
                ></v-textarea>
              </v-col>
              <!---------------Textarea-end---------------------->
            </v-row>
          </v-container>
        </v-card-text>

        <v-card-actions>
          <v-btn dark color="blue darken-4" @click="dialog = false">Отправить</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>


<script>
export default {
  name: "write_a_letter",
  data() {
    return {
      dialog: false,
    }
  },
}
</script>

<style lang="scss">
.letterBtn {
  width: 140px;
  color: $colorCorporate !important;
}
</style>
