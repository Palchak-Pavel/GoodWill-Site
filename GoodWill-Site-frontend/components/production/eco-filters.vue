<template>
  <v-card flat class="containerWrap">
    <transition name="titleTransition" appear>
      <v-card-title>
        <h2>Воздушные фильтры</h2>
      </v-card-title>
    </transition>


    <transition name="imgTransition" appear>
      <div class="productImg">
        <v-img :src="image"></v-img>
      </div>
    </transition>

    <v-card-text>
      <p class="textProduct">
        Трудно представить качественную защиту двигателя автомобиля, в котором не установлены современные автомобильные
        воздушные фильтры. Они обеспечивают эффективную очистку поступающего воздуха, избавляя мотор от попадания, пыли,
        и
        других твердых частиц, способных негативно повлиять на работу двигателя. Поэтому качественные воздушные фильтры
        –
        это необходимая составляющая для долговечной и бесперебойной работы двигателя.
      </p>
      <p class="textProduct">
        Приобретая воздушные фильтры оптом от производителя Goodwill вы получаете максимум качества, ведь они обладают
        большим спектром преимуществ и отличий:
        изготавливаются из материалов, доказавших свою эффективность;
        обеспечивают максимально полную и быструю очистку воздуха;
        надежно защищают любой двигатель от преждевременного износа;
        создают минимальное сопротивление потоку воздуха, который необходим для полного сгорания топлива;
        при своевременной замене позволяют оптимизировать расход топлива.
      </p>
      <p class="textProduct">
        Выгодные условия на поставки фильтров оптом – еще один аргумент в пользу марки Goodwill. Приобретая фильтры
        оптом
        вы серьезно экономите на затратах, сохраняя неизменным высокое качество и надежность поставляемых материалов.
      </p>

    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "eco_filters",
  data() {
    return {
      image: require('~/assets/filters/ecoFilters.jpg'),
    }
  },
}
</script>

<style lang="scss" scoped>

.containerWrap {
  @include padding_production_content;
  @include padding_zero_from_product_text;
  @include animation_product_card;

  h2 {
    @include adaptiv_font_heading;
  }

  .productImg {
    float: left;
    margin: 5px 10px 0 0;
    width: 50%;
    max-width: 800px;
  }

  .textProduct {
    @include adaptiv_font_content_text;
    text-align: justify;
    text-indent: 25px;
    line-height: 1.4;
  }
}
</style>
