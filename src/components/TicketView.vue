<template>
  <div class="h-content p-6 mb-10" :class="{'fixed': fixed, 'show': footerFixed}">
    <div class="connect p-8">
      <ul class="d-flex">
        <li class="align-self-start">
          <h3 class="d-flex">
            <img src="@/assets/images/icon-date.png" alt="date" />
            <span>出團日期</span>
          </h3>
          <p class="text-primary">
            <span>2022.8.10 (三) ~ </span> <span>2022.8.12 (五)</span>
          </p>
        </li>
        <li class="align-self-start">
          <h3 class="d-flex">
            <img src="@/assets/images/icon-price.png" alt="date" />
            <span>費用</span>
          </h3>
          <p class="mb-2">
            <span class="title">成人</span>
            <span class="text-primary pl-4">TWD 4,800</span>
          </p>
          <p>
            <span class="title">兒童</span>
            <span class="text-primary pl-4">TWD 2,000</span>
          </p>
        </li>
        <li class="d-flex button-group">
          <button
            class="btn btn-primary-outline py-4 px-6 mr-6"
            type="button"
            @click="controlCard"
          >
            聯絡業務窗口
          </button>
          <button class="btn btn-primary py-4 px-6" type="button">
            我要報名
          </button>
        </li>
      </ul>
      <CardView ref="cardModal" />
    </div>
  </div>
</template>

<script>
import CardView from '@/components/CardView.vue'

export default {
  components: {
    CardView
  },
  props: {
    fixed: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      footerFixed: false
    }
  },
  methods: {
    listenScroll () {
      const myScroll = document.querySelector('.outer').getBoundingClientRect().top
      if (myScroll < 0 && this.footerFixed === false) {
        this.footerFixed = true
      } else if (myScroll === 0) {
        this.footerFixed = false
      }
    },
    controlCard () {
      this.$refs.cardModal.controlCard()
    }
  },
  mounted () {
    document.querySelector('body').addEventListener('scroll', this.listenScroll)
  }
}
</script>
