<template>
  <div class="slideWrap">
    <div class="btnSlideWrap">

      <!--      <v-btn icon @click="changeImage(0)" class="btnSlide" depressed>-->
      <!--        <v-img :src="btnImg[0]" @click="changeImage(0)" class="btnSlide" depressed></v-img>-->
      <!--        <p class="titleImgToggle">Воздушные</p>-->
      <!--      </v-btn>  <v-btn icon @click="changeImage(1)" class="btnSlide" depressed>-->
      <!--        <v-img :src="btnImg[1]" @click="changeImage(0)" class="btnSlide" depressed></v-img>-->
      <!--        <p class="titleImgToggle">Топливные</p>-->
      <!--      </v-btn>-->
      <!--      <v-btn icon @click="changeImage(2)" class="btnSlide" depressed>-->
      <!--        <v-img :src="btnImg[2]" @click="changeImage(0)" class="btnSlide" depressed></v-img>-->
      <!--        <p class="titleImgToggle">Масляные</p>-->
      <!--      </v-btn>-->
      <!--      <v-btn icon @click="changeImage(3)" class="btnSlide" depressed>-->
      <!--        <v-img :src="btnImg[3]" @click="changeImage(0)" class="btnSlide" depressed></v-img>-->
      <!--        <p class="titleImgToggle">Салонные</p>-->
      <!--      </v-btn>-->
      <!--      <v-btn icon @click="changeImage(4)" class="btnSlide" depressed>-->
      <!--        <v-img :src="btnImg[4]" @click="changeImage(0)" class="btnSlide" depressed></v-img>-->
      <!--        <p class="titleImgToggle">Стеклоочистители</p>-->
      <!--      </v-btn>-->
      <!--      <v-btn icon @click="changeImage(5)" class="btnSlide" depressed>-->
      <!--        <v-img :src="btnImg[5]" @click="changeImage(0)" class="btnSlide" depressed></v-img>-->
      <!--        <p class="titleImgToggle">ТК</p>-->
      <!--      </v-btn>-->

      <div class="slideWrapItem">
        <v-img :src="btnImg[0]" @click="changeImage(0)" class="btnSlide" depressed></v-img>
        <p class="titleImgToggle" @click="changeImage(0)">Воздушные</p>
      </div>
      <div class="slideWrapItem">
        <v-img :src="btnImg[1]" @click="changeImage(1)" class="btnSlide" depressed></v-img>
        <p class="titleImgToggle" @click="changeImage(1)">Топливные</p>
      </div>
      <div class="slideWrapItem">
        <v-img :src="btnImg[2]" @click="changeImage(2)" class="btnSlide" depressed></v-img>
        <p class="titleImgToggle" @click="changeImage(2)">Масляные</p>
      </div>
      <div class="slideWrapItem">
        <v-img :src="btnImg[3]" @click="changeImage(3)" class="btnSlide" depressed></v-img>
        <p class="titleImgToggle" @click="changeImage(3)">Салонные</p>
      </div>
      <div class="slideWrapItem">
        <v-img :src="btnImg[4]" @click="changeImage(4)" class="btnSlide" depressed></v-img>
        <p class="titleImgToggle" @click="changeImage(4)">Щетки <br/> стеклоочистителей</p>
      </div>
      <div class="slideWrapItem">
        <v-img :src="btnImg[5]" @click="changeImage(5)" class="btnSlide" depressed></v-img>
        <p class="titleImgToggle" @click="changeImage(5)">Тормозные <br/> колодки</p>
      </div>
    </div>


    <div class="imgBlock">
      <div class="imagesBackground">
        <v-img :src="imagesBackgroundActive">
        </v-img>
      </div>
      <div class="colorSlideWrap">

        <!--        <transition name="slideTransition" appear>-->

        <!--        <v-fab-transition name="slideTransition" mode="in-out">-->
        <div class="imgProduct">
          <v-img :src="imageActive" alt=""></v-img>
        </div>
        <!--        </v-fab-transition>-->

        <!--        </transition>-->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      hidden: true,
      imageActive: require('~/assets/filters/filterAsakashi/air.png'),
      imagesBackgroundActive: require('~/assets/filters/filterAsakashi/background/slider-bg-cabin.png'),

      images: [
        require('~/assets/filters/filterAsakashi/air.png'),
        require('~/assets/filters/filterAsakashi/fuel.png'),
        require('~/assets/filters/filterAsakashi/oil.png'),
        require('~/assets/filters/filterAsakashi/cabin.png'),
        require('~/assets/filters/filterAsakashi/shetki.jpg'),
        require('~/assets/filters/filterAsakashi/tk.jpg'),
      ],
      imagesBackground: [
        require('~/assets/filters/filterAsakashi/background/slider-bg-cabin.png'),
        require('~/assets/filters/filterAsakashi/background/slider-bg-fuel.png'),
        require('~/assets/filters/filterAsakashi/background/slider-bg-oil.png'),
        require('~/assets/filters/filterAsakashi/background/slider-bg-cabin.png'),
        require('~/assets/filters/filterAsakashi/background/slider-bg-cabin.png'),
        require('~/assets/filters/filterAsakashi/background/slider-bg-trans.png'),
      ],
      btnImg: [
        require('~/assets/filters/filterAsakashi/btn/air.png'),
        require('~/assets/filters/filterAsakashi/btn/fuel.png'),
        require('~/assets/filters/filterAsakashi/btn/oil.png'),
        require('~/assets/filters/filterAsakashi/btn/cabin.png'),
        require('~/assets/filters/filterAsakashi/btn/transmission.png'),
        require('~/assets/filters/filterAsakashi/btn/transmission.png'),
      ],
    }
  },
  methods: {
    changeImage: function (index) {
      this.imageActive = this.images[index]
      this.imagesBackgroundActive = this.imagesBackground[index]
    },
  },
}
</script>

<style lang="scss">
.titleImgToggle{
  color: $colorCorporate;
  font-size: calc(12px + 4 * (100vw / 1200));
  cursor: pointer;
  text-align: center;
}

.slideWrap {
  display: flex;
  align-items: center;

  //
  //.btnSlideWrap {
  //  margin-left: 5vw;
  //
  //  .btnSlide {
  //    display: flex;
  //    flex-direction: column;
  //    max-width: 3vw;
  //    margin: 4vw;
  //    color: $colorCorporate;
  //    cursor: pointer;
  //
  //    .titleImgToggle {
  //      position: absolute;
  //      margin-top: -25%;
  //      font-size: calc(9px + 2 * (100vw / 800));
  //    }
  //  }
  //}
  .btnSlideWrap {
    margin-left: 5vw;

    .slideWrapItem {
      display: flex;
      flex-direction: column;
      align-items: center;

      .btnSlide {
        max-width: 3vw;
        margin: 1vw 1vw .3vw 1vw;
        //color: $colorCorporate;
        cursor: pointer;
        .titleImgToggle{
          cursor: pointer;
          color: red;
        }

        a {
          //font-size: calc(9px + 2 * (100vw / 800));
          color: red;
          background: #0D47A1;

        }
      }
    }
  }

  .imgBlock {
    display: flex;
    align-items: center;

    .colorSlideWrap {
      width: 22vw;
      height: 22vw;
      background-color: $colorCorporate;
      border-radius: 50% 50% 50% 50%;
      margin-left: -30%;
      z-index: 1;

      .imgProduct {
        display: flex;
        align-items: center;
        width: 22vw;
        height: 22vw;
        transition-duration: .5s;
      }

      .imgProduct:hover {
        width: 23vw;
        height: 23vw;
      }
    }

    .imagesBackground {
      width: 13vw;
      height: 13vw;
      margin-top: -35%;
      margin-left: 15%;
      z-index: 0;
    }
  }
}

@media (max-width: 800px) {
  .slideWrap {
    display: block;
    margin-top: 5vw;

    .imgBlock {
      justify-content: center;

      .imagesBackground {
        margin-top: -20%;
        width: 14vw;
        height: 14vw;
      }
    }

    .btnSlideWrap {
      display: flex;
      justify-content: space-between;
      flex-direction: row;
      margin-bottom: 30px;

    }


    .titleImgToggle {
      display: none;
    }
  }
    //.btnSlide {
    //  margin: 4vw;
    //}
}

//.slideTransition-enter {
//  opacity: 0;
//}
//
//.slideTransition-enter-active {
//  transition: opacity 2s;
//}
//
//.slideTransition-leave-active {
//  transition: opacity 2s;
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
