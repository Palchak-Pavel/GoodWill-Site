<template>
  <v-card flat class="partnersWrap">
    <v-row>
      <v-col>
        <v-form>
          <transition
            name="fade"
            mode="out-in"
            appear>
            <v-autocomplete
              outlined
              v-model="search"
              :items="filteredCities"
              item-text="city"
              label="Город">
            </v-autocomplete>
          </transition>
        </v-form>

        <v-data-table
          :headers="headers"
          :items="filteredCustomer">
          <template>
            <tr>
<!--              <td class="text-xs-right">{{ filteredCustomer.customer }}</td>-->
<!--              <td class="text-xs-right">{{ filteredCustomer.customerType }}</td>-->
              <td class="text-xs-right"></td>
              <td class="text-xs-right"></td>
            </tr>
          </template>
        </v-data-table>

      </v-col>
    </v-row>
    <v-card flat class="mapGoogle">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d17951.701698197307!2d37.657916500000006!3d55.776519449999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2sru!4v1600862839079!5m2!1sru!2sru"
        width="100%" height="700"
        frameborder="0" style="border:0;"
        allowfullscreen=""
        aria-hidden="false"
        tabindex="0">
      </iframe>
    </v-card>
  </v-card>
</template>

<script>

export default {
  name: "partners",
  data() {
    return {
      model: null,
      search: "",
      cities: [],
      filteredCustomerString: "",
      // filteredCustomer: [
      // ],
      // listItems: null,
      // customer: [],
      // title: 'Партнёры',

      headers: [
        {text: 'Клиент', value: 'customer'},
        {text: 'Тип клиента', value: 'customerType'},
      ],
      filteredCustomerArr: [],
      // filteredCustomer:[
      //   {
      //     customer: "",
      //   },
      //   {
      //     customerType: "",
      //   }
      // ],
    }
  },

  head() {
    return {
      meta: [
        {
          hid: 'Хид Партнёры',
          name: 'Имя Партнёры',
          content: 'Контент Партнёры'
        }
      ]
    }
  },

  async created() {
    try {
      const res = await this.$axios.get('http://api.goodfil.com/sales-test2/api/cities')
      this.cities = res.data;
    } catch (e) {
      console.error(e);
    }
  },
  computed: {
    filteredCities() {
      return this.cities.filter(city => {
        return city.city.toUpperCase().match(this.search.toUpperCase())
      });
    },
    filteredCustomer(){
      return this.filteredCustomerArr.filter(customer => {
        return customer.filteredCustomerArr.match(this.filteredCustomerString)
      })
    },
  },

  methods: {
    // filteredCustomer(city) {
    //   this.filteredCustomer.push(city)
    // }
  },
  mounted() {
    // this.customer = this.cities.customer
    // this.customerType = this.cities.customerType
  },

  // filteredCustomer() {
  //   return this.cities
  // },

//     mounted () {
//       axios
//         .get('data.res')
//         .then(response => (this.listItems = response.data))
//     }
// },


}
</script>

<style lang="scss" scoped>

.partnersWrap {
  @include size-window;
}
</style>
