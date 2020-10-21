<template>
  <v-row justify="center">
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
                <v-text-field
                  outlined
                  label="Ваше имя:"
                  :rules="nameRules"
                  required>
                </v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="6">
                <v-text-field
                  outlined
                  :rules="cityRules"
                  label="Город:"
                  required>
                </v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  outlined
                  :rules="emailRules"
                  label="Email*"
                  required>
                </v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  outlined
                  :rules="phoneRules"
                  label="Телефон:">
                </v-text-field>
              </v-col>
              <!---------------Textarea----------------------->
              <v-col cols="12" sm="12">
                <v-textarea
                  :rules="messageRules"
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
      nameRules: [
        v => !!v || 'Обязательное поле для ввода',
      ],
      emailRules: [
        v => !!v || 'Обязательное поле для ввода',
      ],
      cityRules: [
        v => !!v || 'Обязательное поле для ввода',
      ],
      phoneRules: [
        v => !!v || 'Обязательное поле для ввода',
      ],
      messageRules: [
        v => !!v || 'Обязательное поле для ввода',
      ],
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
