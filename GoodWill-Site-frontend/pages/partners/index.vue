<template>
  <v-card flat class="partnersWrap">
    <v-row>
      <v-col
      >
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
      search: "",
      cities: [],
      title: 'Партнёры'
    };
  },
  head() {
    return {
      title: this.title,
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
      const res = await this.$axios.get('http://192.168.0.155:8080/salesapi/api/cities')
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
    }
  }
}
</script>

<style lang="scss" scoped>
.fade-enter-active {
  animation: slideIn 1.5s;
}

.fade-leave, .fade-leave-to {
}

.fade-leave-active {
  animation: slideOut 1.5s;
}

@keyframes slideIn {
  from {
    transform: translateX(20vw)
  }
  to {
    transform: translateX(0)
  }
}

@keyframes slideOut {
  from {
    transform: translateX(0)
  }
  to {
    transform: translateX(-20vw)
  }
}

.partnersWrap {
  @include size-window;
}
</style>
