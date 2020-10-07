<template>
  <v-card-actions>
    <v-spacer></v-spacer>
    <v-card flat class="sing-up">
      <v-row>
        <v-dialog light v-model="singUp" fullscreen hide-overlay
                  transition="dialog-bottom-transition">
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              class="sing-up-btn"
              text
              dark
              v-bind="attrs"
              v-on="on"
            >
              Регистрация
            </v-btn>
          </template>
          <!--Форма регистрации-->
          <v-card>
            <v-toolbar dark class="regToolbar">
              <v-btn icon dark @click="singUp = false" class="closeBtn">
                <v-icon>mdi-close</v-icon>
              </v-btn>
              <v-toolbar-title class="titleRegistration">Регистрация</v-toolbar-title>
            </v-toolbar>

            <v-card>
              <v-card-title>
                <span class="headline">Профиль пользователя</span>
              </v-card-title>
              <v-card-text>
                <v-container>
                  <v-row>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field
                        outlined
                        label="Legal first name*"
                        required>
                      </v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field
                        outlined
                        label="Legal middle name"
                        hint="example of helper text only on focus"></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field
                        outlined
                        label="Legal last name*"
                        hint="example of persistent helper text"
                        persistent-hint
                        required
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12">
                      <v-text-field
                        outlined
                        label="Email*"
                        required></v-text-field>
                    </v-col>
                    <v-col cols="12">
                      <v-text-field
                        outlined
                        label="Password*"
                        type="password"
                        required></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6">
                      <v-select
                        outlined
                        :items="['0-17', '18-29', '30-54', '54+']"
                        label="Age*"
                        required
                      ></v-select>
                    </v-col>
                    <v-col cols="12" sm="6">
                      <v-autocomplete
                        outlined
                        :items="['Skiing', 'Ice hockey', 'Soccer', 'Basketball', 'Hockey', 'Reading', 'Writing', 'Coding', 'Basejump']"
                        label="Interests"
                        multiple
                      ></v-autocomplete>
                    </v-col>
                  </v-row>
                </v-container>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-4" text @click="singUp = false">Close</v-btn>
                <v-btn color="blue darken-4" text @click="singUp = false">Save</v-btn>
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
      singUp: false
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
