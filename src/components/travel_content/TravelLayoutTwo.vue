<template>
  <div class="travel-layout2">
    <ul class="travel-outer">
      <li v-for="item in travelData" :key="item.day">
        <h3>{{ item.day }}</h3>
        <p>
          澎湖經典必玩七美、望安跳島一日遊搭乘快艇遨遊瑰麗南海離島風光，本航線將特地繞行至桶盤嶼、虎井嶼，從海上眺望澎湖獨特柱狀玄武岩地形，探訪澎湖群島中最大離島，乘著機車暢遊七美島，沿著海岸線飽覽雙心石滬、望夫石、小台灣等知名美景，欣賞自然而純樸的離島風光！澎湖經典必玩七美、望安跳島一日遊搭乘快艇遨遊瑰麗南海離島風光，本航線將特地繞行至桶盤嶼、虎井嶼，從海上眺望澎湖獨特柱狀玄武岩地形，探訪澎湖群島中最大離島，乘著機車暢遊七美島，沿著海岸線飽覽雙心石滬、望夫石、小台灣等知名美景，欣賞自然而純樸的離島風光！
        </p>
        <ul class="travel-content" :class="{'hide': !item.is_show}">
          <div class="hide-content" @click="item.is_show = !item.is_show">
            <span v-if="!item.is_show">顯示行程</span>
            <span v-else>隱藏行程</span>
            <svg
              width="8"
              height="5"
              viewBox="0 0 8 5"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              :class="{ 'hide': item.is_show }"
            >
              <path
                d="M7.84169 1.0774L4.29551 4.70106C4.2533 4.74407 4.20756 4.77446 4.15831 4.79224C4.10906 4.8103 4.05629 4.81934 4 4.81934C3.94371 4.81934 3.89094 4.8103 3.84169 4.79224C3.79244 4.77446 3.7467 4.74407 3.70449 4.70106L0.147757 1.0774C0.0492524 0.977042 0 0.851594 0 0.701056C0 0.550519 0.0527704 0.421487 0.158311 0.31396C0.263852 0.206433 0.386983 0.152669 0.527704 0.152669C0.668426 0.152669 0.791557 0.206433 0.897098 0.31396L4 3.47525L7.1029 0.31396C7.20141 0.213601 7.32271 0.163422 7.46681 0.163422C7.61119 0.163422 7.73615 0.217185 7.84169 0.324712C7.94723 0.432239 8 0.557687 8 0.701056C8 0.844426 7.94723 0.969874 7.84169 1.0774Z"
              />
            </svg>
          </div>
          <Swiper
            :modules="modules"
            :slides-per-view="swiper_per"
            :space-between="swiper_between"
            loop
            :speed="1000"
            navigation
          >
            <SwiperSlide v-for="data in item?.data" :key="data.id">
              <li>
                <img src="@/assets/images/layout2/澎湖攤.png" alt="澎湖">
                <div class="desc">
                  <h3>{{ data.name }}</h3>
                  <p>趣味漁村導覽之旅，高處遠眺小白沙嶼、小富士山、後山大峽谷。在本島除了奎壁山與赤嶼間的岩脈易於觀察之外，後寮赤崁頭東岸、西溪至成功灣的海蝕平台上以及山水、鎖港等地，都有成分不盡相同的岩脈外露。潮間帶位於大海及陸地敏感的區域，棲地環境時而乾燥或潮濕，時而高溫或低溫，時而高鹽度或低鹽度，環境變化非常大，也孕育出海洋無限的生機。趣味漁村導覽之旅，高處遠眺小白沙嶼、小富士山、後山大峽谷。在本島除了奎壁山與赤嶼間的岩脈易於觀察之外，後寮赤崁頭東岸、西溪至成功灣的海蝕平台上以及...</p>
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
            </SwiperSlide>
          </Swiper>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
import { Navigation } from 'swiper'
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
    }
  },
  data () {
    return {
      modules: [Navigation],
      swiper_per: 3,
      swiper_between: 40,
      is_show: true,
      screenWidth: 0
    }
  },
  methods: {
    watchDeviceWidth () {
      const vm = this
      window.addEventListener('resize', function () {
        return (() => {
          window.screenWidth = document.body.clientWidth
          vm.screenWidth = window.screenWidth
        })()
      })
    },
    initSwiper () {
      const result = window.matchMedia('(max-width: 414px)').matches
      if (result) {
        this.swiper_per = 1
        this.swiper_between = 15
      }
    }
  },
  watch: {
    screenWidth () {
      if (this.screenWidth <= 414) {
        this.swiper_per = 1
        this.swiper_between = 15
      } else {
        this.swiper_per = 3
        this.swiper_between = 40
      }
    }
  },
  mounted () {
    this.initSwiper()
    this.watchDeviceWidth()
  }
}
</script>

<style lang="scss">
  .travel-layout2{
    padding-left: 144px;
    padding-right: 80px;
    @media (max-width: 414px) {
      padding-left: 20px;
      padding-right: 0px;
    }
    ul.travel-outer{
      position: relative;
      padding-left: 28px;
      &::before{
        content: '';
        position: absolute;
        height: 100%;
        width: 5px;
        top: 0;
        left: 0;
        background: var(--primary);
      }
      >li{
        position: relative;
        margin-bottom: 30px;
        &::before{
          position: absolute;
          content: '';
          width: 20px;
          height: 90px;
          background: linear-gradient(78.12deg, var(--forthary) -10.2%, var(--primary) 115.8%);
          border-radius: 10px;
          top: 0;
          left: -35px;
          @media (max-width: 414px) {
            width: 14px;
            left: -32px;
            height: 50px;
          }
        }
        h3{
          font-size: 2rem;
          color: var(--primary);
          margin-bottom: 24px;
          @media (max-width: 414px) {
            font-size: 1rem;
            margin-bottom: 16px;
          }
        }
        >p{
          line-height: 1.5;
          margin-bottom: 24px;
          @media (max-width: 414px) {
            font-size: 0.875rem;
            padding-right: 24px;
          }
        }
      }
    }
    ul.travel-content{
      display: flex;
      position: relative;
      &.hide{
        .swiper{
          display: none;
        }
        margin-bottom: 100px;
      }
      &::before{
        position: absolute;
        content: '';
        width: 1440px;
        height: 100%;
        background: url('@/assets/images/澎湖灣1.png');
        filter: blur(30px);
        margin-left: -170px;
        top: 0;
        z-index: -1;
        opacity: .5;
      }
      .swiper{
        width: 100%;
        @media (max-width: 414px) {
          width: 66%;
          margin-left: 0;
          overflow: visible;
        }
      }
      .swiper-slide{
        padding-top: 60px;
        @media (max-width: 414px) {
          transition: opacity .3s;
        }
      }
      .swiper-slide.swiper-slide-prev{
        @media (max-width: 414px) {
          opacity: 0;
        }
      }
      .swiper-button-prev{
        top: 0;
        right: 56px;
        left: auto;
        margin: 0;
        @media (max-width: 414px) {
          display: none;
        }
      }
      .swiper-button-next{
        top: 0;
        right: 0;
        margin: 0;
        @media (max-width: 414px) {
          display: none;
        }
      }
      li{
        border-radius: 8px;
        flex: 0 0 32%;
        margin-right: 2%;
        &:last-child{
          margin-right: 0;
        }
        img{
          height: 240px;
          width: 100%;
          object-fit: cover;
          @media (max-width: 414px) {
            height: 160px;
          }
        }
        .desc{
          padding: 24px;
          background-color: #ffffff;
          @media (max-width: 414px) {
            font-size: 1rem;
            padding: 16px 8px;
          }
          h3{
            font-size: 1.5rem;
            margin-bottom: 16px;
            @media (max-width: 414px) {
              font-size: 1rem;
            }
          }
          p{
            margin-bottom: 18px;
            font-size: 0.875rem;
            text-overflow: ellipsis;
            overflow: hidden;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 6;
            @media (max-width: 414px) {
              -webkit-line-clamp: 4;
              font-size: 0.75rem;
            }
          }
          a{
            display: flex;
            align-items: center;
            color: var(--primary);
            justify-content: flex-end;
            @media (max-width: 414px) {
              font-size: 0.75rem;
            }
            svg{
              fill: var(--primary);
              width: 18px;
              margin-top: 3px;
              @media (max-width: 414px) {
                width: 14px;
              }
            }
          }
        }
      }
      .hide-content{
        position: absolute;
        top: 0;
        padding: 8px;
        display: flex;
        align-items: center;
        border-radius: 40px;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
        background: var(--secondary);
        cursor: pointer;
        z-index: 10;
        @media (max-width: 414px) {
          width: 95%;
          border-radius: 4px;
          justify-content: center;
        }
        span{
          font-size: 0.875rem;
          color: var(--primary);
          padding-right: 12px;
        }
        svg{
          width: 14px;
          fill: var(--primary);
          &.hide{
            transform: rotate(180deg);
          }
        }
      }
    }
  }
</style>
