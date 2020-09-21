<template>
  <v-card :elevation="6-1" class="rounded-b-lg">
      <v-footer
        light
        padless
        class="footerWrap">
        <v-card
          color="indigo darken-4"
          flat
          tile
          class="upperFooter rounded-0" >
          <v-card color="indigo darken-4" class="partners" flat>
            <v-card dark color="indigo darken-4" class="phone" flat>
              <p>+7 495 651-0958</p>
              <p>+7 495 662-8429</p>
              <v-card flat class="writeLetter">
                <write_a_letter/>
              </v-card>
            </v-card>

            <v-spacer></v-spacer>

            <v-card flat color="indigo darken-4" class="tecalliance">
              <a href="https://www.tecalliance.net/en/" target="_blank">
                <v-img :src="tecalliance.tecalliance"></v-img>
              </a>
            </v-card>
            <v-card flat color="indigo darken-4" class="drive2YoutubeIinstagramm">
              <a href="https://www.drive2.ru/o/goodwillsocial" target="_blank">
                <v-img :src="drive2.drive2"></v-img>
              </a>
            </v-card>
            <v-card flat color="indigo darken-4" class="drive2YoutubeIinstagramm">
              <a href="https://www.youtube.com/channel/UCXrehcqVbuxLYxV1ejm3sXg?view_as=subscriber" target="_blank">
                <v-img :src="youtube.youtube"></v-img>
              </a>
            </v-card>
            <v-card flat color="indigo darken-4" class="drive2YoutubeIinstagramm">
              <a href="https://www.instagram.com/goodwill.social/?hl=ru" target="_blank">
                <v-img :src="instagramm.instagramm"></v-img>
              </a>
            </v-card>

          </v-card>

        </v-card>

        <v-divider></v-divider>

        <v-card class="bottomFooter rounded-b-lg">
          <p> GoodWill®</p>
        </v-card>
      </v-footer>
  </v-card>
</template>

<script>
import write_a_letter from "~/components/write_a_letter.vue";

export default {
  name: 'footerSite',
  data: () => ({
    tecalliance: {
      tecalliance: require("~/assets/logo/tecalliance.png"),
    },
    drive2: {
      drive2: require("~/assets/logo/drive2.png"),
    },
    youtube: {
      youtube: require("~/assets/logo/youtube.png"),
    },
    instagramm: {
      instagramm: require("~/assets/logo/instagramm.png"),
    }
  }),
  components: {
    write_a_letter,
  }
}
</script>
<style lang="scss">
.v-sheet.v-card{
  border-radius: 0;
}
.footerWrap {
  .upperFooter {
    width: 100%;

    .partners {
      display: flex;
      justify-content: space-around;
      margin: 20px 5% 0 5%;

      .phone {
        p {
          margin: 0;
        }

        .writeLetter {
          margin-left: 2px;
        }
      }

      .tecalliance {
        width: 135px;
        margin-right: 15px;
      }

      .drive2YoutubeIinstagramm {
        width: 35px;
        margin-right: 15px;
      }
    }
  }

  .bottomFooter {
    background-color: #1A237E;
    color: rgb(255, 255, 255, 60%);
    width: 100%;
    text-align: center;

    p {
      margin: auto 0;
    }
  }
}
</style>
