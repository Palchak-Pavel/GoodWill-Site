<template>
  <div class="slideWrap">

    <div class="imgToggleWrap">
      <div class="btnWrapItem"
           v-for="(category, index) in categories" :key="index"
           @click="changeImage(index)">
        <div class="imgToggle">
          <v-img :src="category.btnImage" class="btnSlide" depressed></v-img>
          <p class="titleImgToggle">{{ category.name }}</p>
        </div>
      </div>
    </div>

    <div class="imgBlock">

      <nuxt-link :to="{ name: 'production', params: { category: categories[currentCategory].category } }">
        <img class="backgroundImageItem" alt="" :src="categories[currentCategory].backgroundImage">
        <div class="colorSlideWrap">

          <!--<transition name="fade" mode="out-in">-->
          <img alt="" class="slideItem" :src="categories[currentCategory].image">
          <!--</transition>-->
        </div>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentCategory: 0,

      categories: [
        {
          category: 'eco_filters',
          image: require('~/assets/filters/filterAsakashi/air.png'),
          backgroundImage: require('~/assets/filters/filterAsakashi/background/slider-bg-cabin.png'),
          btnImage: require('~/assets/filters/filterAsakashi/btn/air.png'),
          name: 'Воздушные'
        },
        {
          category: 'fuel_filters',
          image: require('~/assets/filters/filterAsakashi/fuel.png'),
          backgroundImage: require('~/assets/filters/filterAsakashi/background/slider-bg-fuel.png'),
          btnImage: require('~/assets/filters/filterAsakashi/btn/fuel.png'),
          name: 'Топливные'
        },
        {
          category: 'oil_filters',
          image: require('~/assets/filters/filterAsakashi/oil.png'),
          backgroundImage: require('~/assets/filters/filterAsakashi/background/slider-bg-oil.png'),
          btnImage: require('~/assets/filters/filterAsakashi/btn/oil.png'),
          name: 'Масляные'
        },
        {
          category: 'salon_filters',
          image: require('~/assets/filters/filterAsakashi/cabin.png'),
          backgroundImage: require('~/assets/filters/filterAsakashi/background/slider-bg-cabin.png'),
          btnImage: require('~/assets/filters/filterAsakashi/btn/cabin.png'),
          name: 'Салонные'
        },
        {
          category: 'shetki',
          image: require('~/assets/filters/filterAsakashi/shetki.jpg'),
          backgroundImage: require('~/assets/filters/filterAsakashi/background/slider-bg-cabin.png'),
          btnImage: require('~/assets/filters/filterAsakashi/btn/transmission.png'),
          name: 'Щетки стеклоочистителей'
        },
        {
          category: 'tk',
          image: require('~/assets/filters/filterAsakashi/tk.jpg'),
          backgroundImage: require('~/assets/filters/filterAsakashi/background/slider-bg-trans.png'),
          btnImage: require('~/assets/filters/filterAsakashi/btn/air.png'),
          name: 'Трмозные колодки'
        },
      ],
    }
  },

  methods: {

    changeImage(index) {
      this.currentCategory = index;
    },
  },
}
</script>

<style lang="scss">
//.fade-enter-active, .fade-leave-active {
//  transition: opacity .5s;
//}
//
//.fade-enter, .fade-leave-to {
//  opacity: 0;
//}

.slideWrap {
  display: flex;
  align-items: center;
  margin-left: 5vw;

  .imgToggleWrap {

    .btnWrapItem {
      max-width: 9vw;

      .imgToggle {
        margin-top: 40px;

        .btnSlide {
          max-width: 2.5vw;
          margin: 0 auto;
          cursor: pointer;
        }

        .titleImgToggle {
          color: $colorCorporate;
          font-size: calc(12px + 4 * (100vw / 1200));
          cursor: pointer;
          text-align: center;
          padding-top: 5px;
        }
      }
    }
  }

  .imgBlock {
    z-index: 1;

    .backgroundImageItem {
      position: absolute;
      height: 28vw;
      z-index: -1;
    }

    .colorSlideWrap {
      display: flex;
      align-items: center;
      width: 25vw;
      height: 25vw;
      background-color: $colorCorporate;
      border-radius: 50% 50% 50% 50%;
      margin-left: 20%;

      .slideItem {
        max-width: 24vw;
        max-height: 24vw;
        margin: 0 auto;
        animation-name: transitionImg;
        transition: all .3s ease-in-out;
        animation-duration: .5s;
      }

      .slideItem:hover {
        max-width: 25vw;
        max-height: 25vw;
        transition: all .3s ease-in-out;
      }
    }
  }
}

@keyframes transitionImg {
  0%{
    opacity: 0;
  }
  100%{
    opacity: 100%;
  }
}

//@media (max-width: 800px) {
//  .slideWrap {
//    display: block;
//    margin-top: 5vw;
//
//    .imgBlock {
//      justify-content: center;
//
//      .imagesBackground {
//        margin-top: -20%;
//        width: 14vw;
//        height: 14vw;
//      }
//    }
//
//    .btnSlideWrap {
//      display: flex;
//      justify-content: space-between;
//      flex-direction: row;
//      margin-bottom: 30px;
//
//    }
//
//    .titleImgToggle {
//      display: none;
//    }
//  }
//}


//.slideTransition-enter {
//  opacity: 0;
//}
//
//.slideTransition-enter-active {
//  transition: opacity 1s ease;
//}
//
//.slideTransition-leave-active {
//  transition: opacity 1s ease;
//  opacity: 0;
//}

//.slideTransition-enter-active {
//  animation: slideIn 1s ease;
//}
//
//@keyframes slideIn {
//  from {
//    transform: translate(-50vw)
//  }
//  to {
//    transform: translate(0)
//  }
//}
//
//.slideTransition-leave-active {
//  animation: slideOut 1s ease;
//}
//
//@keyframes slideOut {
//  from {
//    transform: translate(0)
//  }
//  to {
//    transform: translate(50vw)
//  }
//}


</style>
