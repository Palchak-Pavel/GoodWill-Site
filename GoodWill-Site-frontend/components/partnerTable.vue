<template>
  <div>

    <v-data-table
      items-per-page-all-text="Все"
      items-per-page-text="Кол-во"
      :headers="headers"
      :items="customer"
      :items-per-page="5"
    ></v-data-table>

  </div>
</template>

<script>
export default {
  name: "partnerTable",
  data() {

    return {
      headers: [
        // {
        //   text: 'Dessert (100g serving)',
        //   align: 'start',
        //   sortable: false,
        //   value: 'name',
        // },
        { text: 'Клиент', value: 'customer' },
        { text: 'Тип клиента', value: 'customerType' },
      ],


      customer: [],

      // desserts: [
      //   {
      //     id: 0,
      //     name: 'Frozen',
      //     calories: 159,
      //   }, {
      //     id: 1,
      //     name: 'Frozen Yogurt',
      //     calories: 159,
      //   },
      //   {
      //     id: 2,
      //     name: 'Ice cream sandwich',
      //     calories: 237,
      //   },
      //   {
      //     id: 3,
      //     name: 'Eclair',
      //     calories: 262,
      //   },
      //   {
      //     id: 4,
      //     name: 'Cupcake',
      //     calories: 305,
      //   },
      //   {
      //     id: 5,
      //     name: 'Gingerbread',
      //     calories: 356,
      //   },
      //   {
      //     id: 6,
      //     name: 'Jelly bean',
      //     calories: 375,
      //   },
      //   {
      //     id: 7,
      //     name: 'Lollipop',
      //     calories: 392,
      //   },
      //   {
      //     id: 8,
      //     name: 'Honeycomb',
      //     calories: 408,
      //   },
      //   {
      //     id: 9,
      //     name: 'Donut',
      //     calories: 452,
      //   },
      //   {
      //     id: 10,
      //     name: 'KitKat',
      //     calories: 518,
      //   },
      // ],
    }
  },
  async created() {
    try {
      const res = await this.$axios.get('http://192.168.0.155:8080/salesapi/api/cities/Москва')
      this.customer = res.data;
    } catch (e) {
      console.error(e);
    }
  },

}
</script>

<style scoped>

</style>
