<template>
  <div class="travelDetail">
    <div class="title">
      <router-link to="/layout2">
        <img src="@/assets/images/logo.png" alt="logo">
      </router-link>
    </div>
    <div class="m-title">
      <router-link to="/">
        <svg
          class="prePage"
          width="7"
          height="12"
          viewBox="0 0 7 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5.6129 11.7625L0.177419 6.44327C0.112903 6.37995 0.0673117 6.31135 0.040645 6.23747C0.0135482 6.16359 0 6.08443 0 6C0 5.91557 0.0135482 5.83641 0.040645 5.76253C0.0673117 5.68865 0.112903 5.62005 0.177419 5.55673L5.6129 0.221636C5.76344 0.0738786 5.95161 0 6.17742 0C6.40323 0 6.59677 0.0791557 6.75806 0.237467C6.91935 0.395778 7 0.580475 7 0.791557C7 1.00264 6.91935 1.18734 6.75806 1.34565L2.01613 6L6.75806 10.6544C6.9086 10.8021 6.98387 10.9841 6.98387 11.2002C6.98387 11.4168 6.90323 11.6042 6.74194 11.7625C6.58065 11.9208 6.39247 12 6.17742 12C5.96237 12 5.77419 11.9208 5.6129 11.7625Z"
            fill="#4D4D4D"
          />
        </svg>
      </router-link>
      <p>詳細資訊</p>
    </div>
    <div class="image">
      <div class="image-left">
        <img src="@/assets/images/澎湖灣1.png" alt="澎湖">
      </div>
      <div class="image-right">
        <div class="image-group">
          <div class="img">
            <img src="@/assets/images/澎湖灘.png" alt="澎湖">
          </div>
          <div class="img">
            <img src="@/assets/images/澎湖灘.png" alt="澎湖">
          </div>
          <div class="img">
            <img src="@/assets/images/澎湖灘.png" alt="澎湖">
          </div>
          <div class="img">
            <img src="@/assets/images/澎湖灘.png" alt="澎湖">
            <div class="more" @click="is_show = true">
              <p>+5</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="m-image">
      <Swiper
        :modules="modules"
        :slides-per-view="1"
        :space-between="10"
        loop
        :speed="1000"
        :autoplay="{ delay: 2000 }"
        :pagination="{ clickable: true }"
      >
        <SwiperSlide>
          <img src="@/assets/images/澎湖灣1.png" alt="澎湖" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="@/assets/images/澎湖灣1.png" alt="澎湖" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="@/assets/images/澎湖灣1.png" alt="澎湖" />
        </SwiperSlide>
      </Swiper>
    </div>
    <div class="content">
      <h4 class="desc-title">第一天</h4>
      <div class="desc">
      <h3>澎湖灘</h3>
      <p>
        趣味漁村導覽之旅，高處遠眺小白沙嶼、小富士山、後山大峽谷。在本島除了奎壁山與赤嶼間的岩脈易於觀察之外，後寮赤崁頭東岸、西溪至成功灣的海蝕平台上以及山水、鎖港等地，都有成分不盡相同的岩脈外露。潮間帶位於大海及陸地敏感的區域，棲地環境時而乾燥或潮濕，時而高溫或低溫，時而高鹽度或低鹽度，環境變化非常大，也孕育出海洋無限的生機。
      </p>
      <p>
        趣味漁村導覽之旅，高處遠眺小白沙嶼、小富士山、後山大峽谷。在本島除了奎壁山與赤嶼間的岩脈易於觀察之外，後寮赤崁頭東岸、西溪至成功灣的海蝕平台上以及山水、鎖港等地，都有成分不盡相同的岩脈外露。潮間帶位於大海及陸地敏感的區域，棲地環境時而乾燥或潮濕，時而高溫或低溫，時而高鹽度或低鹽度，環境變化非常大，也孕育出海洋無限的生機。
      </p>
      <p>
        趣味漁村導覽之旅，高處遠眺小白沙嶼、小富士山、後山大峽谷。在本島除了奎壁山與赤嶼間的岩脈易於觀察之外，後寮赤崁頭東岸、西溪至成功灣的海蝕平台上以及山水、鎖港等地，都有成分不盡相同的岩脈外露。潮間帶位於大海及陸地敏感的區域，棲地環境時而乾燥或潮濕，時而高溫或低溫，時而高鹽度或低鹽度，環境變化非常大，也孕育出海洋無限的生機。
      </p>
      </div>
      <div class="map">
        <div>
          <h4>地點</h4>
          <p>澎湖縣白沙鄉</p>
        </div>
        <div class="google">
          <img src="@/assets/images/googleMap.png" alt="googlemap" />
        </div>
      </div>
    </div>
    <div class="image-modal" :class="{'show': is_show}" @click.self="is_show = false">
      <Swiper
        :modules="modules"
        :slides-per-view="1"
        :space-between="20"
        loop
        navigation
        :speed="1000"
        :pagination="{ clickable: true }"
      >
        <SwiperSlide>
          <img src="@/assets/images/澎湖灣1.png" alt="澎湖" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="@/assets/images/澎湖灣1.png" alt="澎湖" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="@/assets/images/澎湖灣1.png" alt="澎湖" />
        </SwiperSlide>
      </Swiper>
      <div class="close" @click="is_show = false">X</div>
    </div>
  </div>
  <FooterView />
</template>

<script>
import { Pagination, Autoplay, Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/vue'
import FooterView from '@/components/layout2/FooterView'
import 'swiper/css'
import 'swiper/css/pagination'

export default {
  components: {
    Swiper,
    SwiperSlide,
    FooterView
  },
  data () {
    return {
      modules: [Pagination, Autoplay, Navigation],
      is_mobile: false,
      is_show: false
    }
  },
  mounted () {
    document.body.scrollTop = 0
  }
}
</script>

<style lang="scss" scoped>
footer{
  @media (max-width: 576px) {
    display: none;
  }
}
</style>
