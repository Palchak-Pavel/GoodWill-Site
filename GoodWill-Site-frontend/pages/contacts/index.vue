<template>
  <v-card flat class="contactWrap">
    <v-row justify-md="center" align-content-md="space-between">
      <v-col cols="12" sm="6" class="address">
        <v-card flat>
          <h1>Центральный офис</h1>
          <h3>Наш адрес:</h3>
          <a>107078, Россия, г. Москва, ул. Новая Басманная, дом 23Б, стр. 20</a>
        </v-card>
        <v-card flat class="productInCity">
          <h3>Ищите продукцию GoodWill® в своем городе?</h3>
          <h3>Ознакомьтесь с разделом <a>ПАРТНЕРЫ</a></h3>
        </v-card>
      </v-col>

      <v-col cols="12" sm="6">
        <h3>Телефоны:</h3>
        <v-divider class="divider"></v-divider>
        <h2>+7 (495) 651-09-58 (многоканальный)</h2>
        <v-divider class="divider"></v-divider>
        <h2>+7 (495) 662-84-29 (многоканальный)</h2>
        <v-card flat>
          <h3>Время работы:</h3>
          <h3>Понедельник - пятница: 09:00-18:00</h3>
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

.contactWrap {
  @include size-window;
  margin: 0 auto;


  .contactPhone {
    display: flex;
    justify-content: space-between;

    .address {
      margin-top: 5px;
      margin-bottom: 5px;

      a {
        font-size: 18px;
      }

      .productInCity {
        position: absolute;
        bottom: 0;
      }
    }
  }

  .addressWrap {
    //display: flex;
    //flex-direction: column;

    .contactAddress {
      bottom: 0;
    }
  }

  h1 {
    padding-bottom: 10px;
  }

  h2 {
    padding-bottom: 10px;
  }
}
</style>
