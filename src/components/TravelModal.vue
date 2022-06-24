<template>
  <div
    class="dark-mask"
    :class="{ show: isTravelDetail }"
    @click.self="isTravelDetail = false"
  >
    <div class="modal-travel" :class="{ show: isTravelDetail }">
      <div class="modal-travel-close" @click="isTravelDetail = false"></div>
      <h4 class="modal-travel-title">第一天</h4>
      <div class="modal-travel-img">
        <Swiper
          :modules="modules"
          :slides-per-view="1"
          :space-between="10"
          navigation
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
      <div class="modal-travel-desc">
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
      <div class="modal-travel-map">
        <div class="place">
          <h4>地點</h4>
          <p>澎湖縣白沙鄉</p>
        </div>
        <div class="googleMap-modal">
          <img src="@/assets/images/googleMap.png" alt="map" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Pagination, Autoplay, Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/pagination'

export default {
  components: {
    Swiper,
    SwiperSlide
  },
  data () {
    return {
      isTravelDetail: false,
      modules: [Pagination, Autoplay, Navigation]
    }
  },
  methods: {
    openModal () {
      this.isTravelDetail = true
    },
    closeModal () {
      this.isTravelDetail = false
    }
  }
}
</script>

<style>
</style>
