<template>
  <div class="travel" :class="{'bg': background}">
    <div class="container p-m-0">
      <div class="travel-bg mb-10" :class="{'reverse': reverse}">
        <div class="content">
          <h3>{{ travelData.day }}</h3>
          <p>
            澎湖經典必玩七美、望安跳島一日遊搭乘快艇遨遊瑰麗南海離島風光，本航線將特地繞行至桶盤嶼、虎井嶼，從海上眺望澎湖獨特柱狀玄武岩地形，探訪澎湖群島中最大離島，乘著機車暢遊七美島，沿著海岸線飽覽雙心石滬、望夫石、小台灣等知名美景，欣賞自然而純樸的離島風光！
          </p>
        </div>
      </div>
      <div class="travel-inner">
        <div class="travel-title">
          <ul class="p-2">
            <template v-for="(item, index) in travelData.data" :key="item.id">
              <li
                v-if="index < 4 || isMore === true"
                :class="{ active: tempTravelData.id === item.id }"
                @click="tempTravelData = item"
              >
                <img src="@/assets/images/澎湖灘.png" alt="澎湖" />
                <div class="desc">
                  <h3>{{ item.name }}</h3>
                  <p>
                    趣味漁村導覽之旅，高處遠眺小白沙嶼、小富士山、後山大峽谷。在本島除了奎壁山與赤嶼間的岩脈易於觀察之外，後寮赤崁頭東岸、西溪至成功灣的海蝕平台上以及山水、鎖港等地，都有成分不盡相同的岩脈...
                  </p>
                  <router-link to="/detail">
                    <span>查看更多</span>
                    <svg
                      width="8"
                      height="5"
                      viewBox="0 0 8 5"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7.84169 1.0774L4.29551 4.70106C4.2533 4.74407 4.20756 4.77446 4.15831 4.79224C4.10906 4.8103 4.05629 4.81934 4 4.81934C3.94371 4.81934 3.89094 4.8103 3.84169 4.79224C3.79244 4.77446 3.7467 4.74407 3.70449 4.70106L0.147757 1.0774C0.0492524 0.977042 0 0.851594 0 0.701056C0 0.550519 0.0527704 0.421487 0.158311 0.31396C0.263852 0.206433 0.386983 0.152669 0.527704 0.152669C0.668426 0.152669 0.791557 0.206433 0.897098 0.31396L4 3.47525L7.1029 0.31396C7.20141 0.213601 7.32271 0.163422 7.46681 0.163422C7.61119 0.163422 7.73615 0.217185 7.84169 0.324712C7.94723 0.432239 8 0.557687 8 0.701056C8 0.844426 7.94723 0.969874 7.84169 1.0774Z"
                      />
                    </svg>
                  </router-link>
                </div>
              </li>
            </template>
            <li
              class="more"
              v-if="travelData.data.length > 4"
              @click="isMore = !isMore"
            >
              <a href="#">
                <span>{{ isMore ? "顯示較少" : "顯示全部" }}</span>
                <svg
                  :class="{ less: isMore }"
                  width="8"
                  height="5"
                  viewBox="0 0 8 5"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.84169 1.0774L4.29551 4.70106C4.2533 4.74407 4.20756 4.77446 4.15831 4.79224C4.10906 4.8103 4.05629 4.81934 4 4.81934C3.94371 4.81934 3.89094 4.8103 3.84169 4.79224C3.79244 4.77446 3.7467 4.74407 3.70449 4.70106L0.147757 1.0774C0.0492524 0.977042 0 0.851594 0 0.701056C0 0.550519 0.0527704 0.421487 0.158311 0.31396C0.263852 0.206433 0.386983 0.152669 0.527704 0.152669C0.668426 0.152669 0.791557 0.206433 0.897098 0.31396L4 3.47525L7.1029 0.31396C7.20141 0.213601 7.32271 0.163422 7.46681 0.163422C7.61119 0.163422 7.73615 0.217185 7.84169 0.324712C7.94723 0.432239 8 0.557687 8 0.701056C8 0.844426 7.94723 0.969874 7.84169 1.0774Z"
                  />
                </svg>
              </a>
            </li>
          </ul>
        </div>
        <div class="travel-content">
          <div class="inner p-6">
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
            <!-- <div class="swiper">
              <div class="swiper-slider">
                <img src="@/assets/images/澎湖灣1.png" alt="澎湖" />
              </div>
            </div> -->
            <div class="desc">
              <h3>{{ tempTravelData.name }}</h3>
              <p>
                趣味漁村導覽之旅，高處遠眺小白沙嶼、小富士山、後山大峽谷。在本島除了奎壁山與赤嶼間的岩脈易於觀察之外，後寮赤崁頭東岸、西溪至成功灣的海蝕平台上以及山水、鎖港等地，都有成分不盡相同的岩脈外露。潮間帶位於大海及陸地敏感的區域，棲地環境時而乾燥或潮濕，時而高溫或低溫，時而高鹽度或低鹽度，環境變化非常大，也孕育出海洋無限的生機。
              </p>
              <p>
                趣味漁村導覽之旅，高處遠眺小白沙嶼、小富士山、後山大峽谷。在本島除了奎壁山與赤嶼間的岩脈易於觀察之外，後寮赤崁頭東岸、西溪至成功灣的海蝕平台上以及山水、鎖港等地，都有成分不盡相同的岩脈外露。潮間帶位於大海及陸地敏感的區域，棲地環境時而乾燥或潮濕，時而高溫或低溫，時而高鹽度或低鹽度，環境變化非常大，也孕育出海洋無限的生機。
              </p>
              <p>
                趣味漁村導覽之旅，高處遠眺小白沙嶼、小富士山、後山大峽谷。在本島除了奎壁山與赤嶼間的岩脈易於觀察之外，後寮赤崁頭東岸、西溪至成功灣的海蝕平台上以及山水、鎖港等地，都有成分不盡相同的岩脈外露。潮間帶位於大海及陸地敏感的區域，棲地環境時而乾燥或潮濕，時而高溫或低溫，時而高鹽度或低鹽度，環境變化非常大，也孕育出海洋無限的生機。
              </p>
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
          </div>
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
  props: {
    travelData: {
      type: Object,
      default () {
        return {}
      }
    },
    background: {
      type: Boolean,
      default () {
        return false
      }
    },
    reverse: {
      type: Boolean,
      default () {
        return false
      }
    }
  },
  data () {
    return {
      isMore: false,
      tempTravelData: this.travelData.data[0],
      modules: [Pagination, Autoplay, Navigation]
    }
  }
}
</script>
