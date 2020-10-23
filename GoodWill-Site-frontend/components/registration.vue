<template>
  <v-card-actions>
    <v-spacer></v-spacer>
    <v-card flat class="sing-up">
      <v-row>
        <v-dialog
          light v-model="singUp"
          fullscreen hide-overlay
          transition="dialog-bottom-transition">
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              class="sing-up-btn"
              text
              dark
              v-bind="attrs"
              v-on="on">
              Регистрация
            </v-btn>
          </template>
          <!--Форма регистрации-->
          <v-card>
            <v-toolbar dark class="regToolbar">
              <v-btn
                icon
                dark
                @click="singUp = false"
                class="closeBtn">
                <v-icon>mdi-close</v-icon>
              </v-btn>
              <v-toolbar-title class="titleRegistration">Регистрация</v-toolbar-title>
            </v-toolbar>

            <v-card flat>
              <v-card-title>
                <span class="headline">Профиль пользователя</span>
              </v-card-title>
              <v-card-text>
                <v-container>
                  <v-row>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field
                        :rules="nameRules"
                        outlined
                        label="Имя*"
                        required>
                      </v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field
                        outlined
                        label="Отчество"
                        hint="пример вспомогательного текста только в фокусе">
                      </v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field
                        :rules="lastNameRules"
                        outlined
                        label="Фамилия*"
                        hint="пример постоянного вспомогательного текста"
                        persistent-hint
                        required
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12">
                      <v-text-field
                        :rules="emailRules"
                        outlined
                        label="Email*"
                        required></v-text-field>
                    </v-col>
                    <v-col cols="12">
                      <v-text-field
                        :rules="passwordRules"
                        outlined
                        label="Пароль*"
                        type="password"
                        required></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6">
                      <v-select
                        :rules="ageRules"
                        outlined
                        :items="['0-17', '18-29', '30-54', '54+']"
                        label="Возраст*"
                        required
                      ></v-select>
                    </v-col>
                    <v-col cols="12" sm="6">
                      <v-autocomplete
                        outlined
                        :items="['Skiing', 'Ice hockey', 'Soccer', 'Basketball', 'Hockey', 'Reading', 'Writing', 'Coding', 'Basejump']"
                        label="Интересы"
                        multiple
                      ></v-autocomplete>
                    </v-col>
                  </v-row>
                </v-container>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-4" text @click="singUp = false">Закрыть</v-btn>
                <v-btn color="blue darken-4" text @click="singUp = false">Сохранить</v-btn>
              </v-card-actions>
            </v-card>
          </v-card>
        </v-dialog>
      </v-row>
    </v-card>
  </v-card-actions>
</template>

<script>
export default {
  name: "registration",
  data() {
    return {
      singUp: false,
      valid: true,
      name: '',
      password: '',
      nameRules: [
        v => !!v || 'Обязательное поле для ввода',
      ],
      lastNameRules: [
        v => !!v || 'Обязательное поле для ввода',
      ],
      passwordRules: [
        v => !!v || 'Обязательное поле для ввода',
      ],
      emailRules: [
        v => !!v || 'Обязательное поле для ввода',
      ],
      ageRules: [
        v => !!v || 'Обязательное поле для ввода',
      ],
    }
  }
}
</script>

<style lang="scss" scoped>
.regToolbar {
  background-color: $colorCorporate !important;

  .closeBtn {
    position: absolute;
    margin-left: 3vw;
  }
}

.titleRegistration {
  position: absolute;
  right: 0;
  margin-right: 1vw;
}

.sing-up-btn {
  background-color: $colorCorporate;
  margin-left: 10px;
}

</style>
