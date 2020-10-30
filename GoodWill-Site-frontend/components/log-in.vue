<template>
  <v-card flat class="userForm">
    <v-row>
      <v-btn
        class="log-in-btn"
        light
        @click.stop="logIn = true">
        Вход
      </v-btn>

      <!--Форма входа-->
      <v-dialog
        v-model="logIn"
        light>
        <v-card>
          <v-main class="mainContent">
            <v-container
              class="fill-height"
              fluid>
              <v-row
                align="center"
                justify="center">
                <v-col
                  cols="12"
                  sm="8"
                  md="4">
                  <v-card class="elevation-15">
                    <v-toolbar
                      class="form"
                      color="#0D47A1"
                      dark
                      flat>
                      <v-toolbar-title>Форма входа</v-toolbar-title>
                    </v-toolbar>
                    <v-card-text>
                      <v-form>
                        <v-text-field
                          :rules="nameRules"
                          outlined
                          label="Логин"
                          name="login"
                          prepend-icon="mdi-account"
                          type="text">
                        </v-text-field>

                        <v-text-field
                          :rules="passwordRules"
                          outlined
                          id="password"
                          label="Пароль"
                          name="password"
                          prepend-icon="mdi-lock"
                          type="password">
                        </v-text-field>
                      </v-form>
                    </v-card-text>
                    <v-divider></v-divider>
                    <v-card class="btnForm">
                      <v-card-actions class="btnLogin">
                        <v-btn dark color="#0D47A1">Войти</v-btn>
                      </v-card-actions>

                      <!--registration-->
                      <v-card-actions>
                        <registration/>
                      </v-card-actions>
                      <!---->
                    </v-card>
                  </v-card>
                </v-col>
              </v-row>
            </v-container>
          </v-main>
        </v-card>
      </v-dialog>
    </v-row>
  </v-card>
</template>

<script>
import registration from "~/components/registration.vue";

export default {
  name: "log-in",
  props: {
    source: String,
  },
  data() {
    return {
      logIn: false,
      valid: true,
      name: '',
      password: '',
      nameRules: [
        v => !!v || 'Обязательное поле для ввода',
      ],
      passwordRules: [
        v => !!v || 'Обязательное поле для ввода',
      ],
    }
  },
  components: {
    registration,
  }
}
</script>

<style lang="scss" scoped>
.userForm {
  display: flex;
  align-items: center;
  background-color: transparent !important;

  .log-in-btn {
    color: $colorCorporate;
    margin-left: 10px;
    margin-right: 10px;
  }
}

.btnForm {
  display: flex;
  justify-content: flex-end;
  padding-right: 10px;

  .btnLogin {
    padding: 0;
  }
}

.mainContent {
  padding-top: 0 !important;
}
</style>
