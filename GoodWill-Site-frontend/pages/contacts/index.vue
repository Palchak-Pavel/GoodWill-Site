<template>
  <v-card :elevation="6-1" class="contactWrap">
    <v-card flat>
      <v-card flat>
        <h1>Центральный офис</h1>
        <h3>Наш адрес:</h3>
        <v-card flat class="address">
          <a>107078, Россия, г. Москва, ул. Новая Басманная, дом 23Б, стр. 20</a>
        </v-card>
      </v-card>
      <h3>Телефоны:</h3>
      <v-divider class="divider"></v-divider>
      <h2>+7 (495) 651-09-58 (многоканальный)</h2>
      <v-divider class="divider"></v-divider>
      <h2>+7 (495) 662-84-29 (многоканальный)</h2>
      <v-card flat>
        <h3>Время работы:</h3>
        <h3>Понедельник - пятница: 09:00-18:00</h3>
      </v-card>
      <v-card flat class="writeLetter">
        <write_a_letter/>
      </v-card>
      <v-card flat class="productInCity">
        <p>Ищите продукцию GoodWill® в своем городе?</p>
        <p>Ознакомьтесь с разделом <a>ПАРТНЕРЫ</a></p>
      </v-card>
    </v-card>
    <v-card class="contactAddress">
      <v-img :src="contactAddress"></v-img>
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
  width: 80vw;
  margin: 0 auto;
  padding: 10px;
  display: flex;
  justify-content: space-between;

  .address {
    margin-top: 5px;
    margin-bottom: 5px;
  }

  .writeLetter {
    max-width: 15vw;
    margin-left: 1vw;
    margin-top: 1vw;
  }

  .divider {
    max-width: 35vw;
  }

  .contactAddress {
    max-width: 600px;
    align-self: flex-end;
    margin-bottom: 3vh;
  }

  .productInCity {
    position: absolute;
    bottom: 0;
  }

  h1 {
    padding: 10px;
  }

  h2 {
    padding: 10px;
  }
}
</style>
