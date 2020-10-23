<template>
  <v-card flat class="contactWrap">
    <v-row justify-md="center" align-content-md="space-between">
      <v-col cols="12" sm="6" class="address">
        <v-card flat>

          <v-card-title>
            <h1>Центральный офис</h1>
          </v-card-title>

          <v-card-text>
            <p class="subtitle">Наш адрес:</p>
            <a>107078, Россия, г. Москва, ул. Новая Басманная, дом 23Б, стр. 20</a>
          </v-card-text>
        </v-card>

        <v-card flat class="productInCity">
          <v-card-text>
            <p class="subtitle">Ищите продукцию GoodWill® в своем городе?</p>
            <p class="subtitle">Ознакомьтесь с разделом <a>ПАРТНЕРЫ</a></p>
          </v-card-text>
        </v-card>
      </v-col>

      <v-col cols="12" sm="6">
        <v-card-text>
          <p class="subtitle">Телефоны:</p>
          <p class="phoneNamber">+7 (495) 651-09-58 (многоканальный)</p>
          <v-divider></v-divider>
          <p class="phoneNamber">+7 (495) 662-84-29 (многоканальный)</p>
          <v-divider></v-divider>
        </v-card-text>

        <v-card flat>
          <v-card-text>
            <p class="subtitle">Время работы:</p>
            <p class="subtitle">Понедельник - пятница: 09:00-18:00</p>
          </v-card-text>

        </v-card>
      </v-col>
    </v-row>

    <v-card flat class="addressWrap">
      <v-card flat class="contactAddress">
        <v-img :src="contactAddress"></v-img>
      </v-card>
    </v-card>

  </v-card>
</template>

<script>
import write_a_letter from "~/components/write_a_letter.vue";

export default {
  name: "contacts",
  data() {
    return {
      contactAddress: require("~/assets/contact-address.png"),
      title: 'Контакты'
    }
  },
  head() {
    return {
      title: this.title,
      meta: [
        {
          hid: 'Хид контакты',
          name: 'Имя контакты',
          content: 'Контент контакты'
        }
      ]
    }
  },
  components: {
    write_a_letter,
  }
}
</script>

<style lang="scss" scoped>
.v-card__text{
  padding: 5px;
}
.v-application p {
  margin-bottom: 0;
}

.contactWrap {
  @include size-window;
  margin: 0 auto;

  h1 {
    @include adaptiv_font_heading;
  }

  a {
    @include adaptiv_font_content_text;
  }

  .phoneNamber {
    margin-bottom: 0;
    margin-top: 10px;
  }

  .subtitle {
    @include adaptiv_font_content_text;
  }

  .contactPhone {
    display: flex;
    justify-content: space-between;

  }

  .addressWrap {
    .contactAddress {
      bottom: 0;
    }
  }
}
</style>
