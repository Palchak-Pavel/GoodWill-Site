<template>
  <v-footer
    dark
    padless
    color="indigo darken-4"
    class="footerWrap rounded-b-xl"

  >
    <v-card
      flat
      rounded
      class="flex rounded-b-lg"
      color="indigo darken-4"
    >
      <v-row justify="space-around">

        <v-col
          class="pt-2 pb-0"
          cols="md-2 sm-12"
          color="indigo darken-4">
          <v-card
            flat
            color="indigo darken-4"
            class="phoneNamber text-center">
            <v-card-text>
              <p>+7 495 651-0958</p>
              <p>+7 495 662-8429</p>
            </v-card-text>
            <write_a_letter/>
          </v-card>
        </v-col>

        <v-col
          align-self="center"
          color="indigo darken-4"
          cols="md-9 sm-12">
          <div class="linksItem">
            <div class="tecalliance">
              <a href="https://www.tecalliance.net/en/" target="_blank">
                <v-img :src="tecalliance.tecalliance"></v-img>
              </a>
            </div>
            <div class="socialLinks">
              <a href="https://www.drive2.ru/o/goodwillsocial" target="_blank">
                <v-img :src="drive2.drive2"></v-img>
              </a>
            </div>
            <div class="socialLinks">
              <a href="https://www.youtube.com/channel/UCXrehcqVbuxLYxV1ejm3sXg?view_as=subscriber" target="_blank">
                <v-img :src="youtube.youtube"></v-img>
              </a>
            </div>
            <div class="socialLinks">
              <a href="https://www.instagram.com/goodwill.social/?hl=ru" target="_blank">
                <v-img :src="instagramm.instagramm"></v-img>
              </a>
            </div>
          </div>
        </v-col>

        <v-card-text
          cols="12"
          class="pt-0 pb-0 text-center bottomFooter">
          GoodWill®
        </v-card-text>
      </v-row>
    </v-card>
  </v-footer>
</template>

<script>
import write_a_letter from "~/components/write_a_letter.vue";

export default {
  name: 'footerSite',
  data: () => ({
    tecalliance: {
      name: 'tecalliance',
      tecalliance: require("~/assets/logo/tecalliance.png"),
      url: ('https://www.tecalliance.net/en/" target="_blank'),
    },
    drive2: {
      name: 'drive2',
      drive2: require("~/assets/logo/drive2.png"),
      url: ('https://www.drive2.ru/o/goodwillsocial'),
    },
    youtube: {
      name: 'youtube',
      youtube: require("~/assets/logo/youtube.png"),
      url: ('https://www.youtube.com/channel/UCXrehcqVbuxLYxV1ejm3sXg?view_as=subscriber'),
    },
    instagramm: {
      name: 'instagramm',
      instagramm: require('~/assets/logo/instagramm.png'),
      url: ('https://www.instagram.com/goodwill.social/?hl=ru'),
    }
  }),
  // data() {
  //   return {
  //     links: [
  //       {
  //         name: 'tecalliance',
  //         imgLink: require("~/assets/logo/tecalliance.png"),
  //         url: ('https://www.tecalliance.net/en/" target="_blank'),
  //       },
  //       {
  //         name: 'drive2',
  //         imgLink: require("~/assets/logo/drive2.png"),
  //         url: ('https://www.drive2.ru/o/goodwillsocial'),
  //       },
  //       {
  //         name: 'youtube',
  //         imgLink: require("~/assets/logo/youtube.png"),
  //         url: ('https://www.youtube.com/channel/UCXrehcqVbuxLYxV1ejm3sXg?view_as=subscriber'),
  //       },
  //       {
  //         name: 'instagramm',
  //         imgLink: require('~/assets/logo/instagramm.png'),
  //         url: ('https://www.instagram.com/goodwill.social/?hl=ru'),
  //       }
  //     ]
  //   }
  // },
  components: {
    write_a_letter,
  }
}
</script>

<style lang="scss">
.v-sheet.v-card {
  border-radius: 0;
}

.row {
  margin: 0;
}

.footerWrap {
  .phoneNamber {
    p {
      margin-bottom: 5px;
      font-size: 14px;
    }
  }

  .linksItem {
    display: flex;
    justify-content: space-around;


    .tecalliance {
      max-width: 150px;
      min-width: 70px;
      width: 100%;
      padding-right: 5px;
    }

    .socialLinks {
      max-width: 40px;
      min-width: 25px;
      width: 30%;
      padding-right: 5px;
    }
  }

  .bottomFooter {
    color: rgb(255, 255, 255, 60%);
  }
}
</style>
