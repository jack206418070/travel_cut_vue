<template>
  <metainfo>
    <template v-slot:title="{ content }">{{ content ? `${content} | SITE_NAME` : `SITE_NAME` }}</template>
  </metainfo>
  <HeaderView
    :header_data = "header_data"
  />
  <RoadMapView
    :travel-road-map = "locations"
  />
  <GoogleMap
    @open-travel-modal = "openTravelModal"
  />
  <TravelLayout
    v-for = "(item, index) in travelData"
    :key = "item.name"
    :background = "index % 2 !== 0 ? true : false"
    :reverse = "index % 2 !== 0 ? true : false"
    :travel-data = "item"
  />
  <PriceInfo />
  <FooterView
    :company_data="company_data"
  />
  <TravelModal
    ref="travelModal"
  />
  <TicketView
    :fixed = true
  />
</template>

<script>
import FooterView from '@/components/layout1/FooterView'
import TicketView from '@/components/TicketView.vue'
import HeaderView from '@/components/layout1/HeaderView'
import RoadMapView from '@/components/layout1/RoadMapView'
import GoogleMap from '@/components/GoogleMap.vue'
import TravelLayout from '@/components/travel_content/TravelLayoutOne'
import PriceInfo from '@/components/layout1/PriceInfo'
import TravelModal from '@/components/TravelModal.vue'
// import { useMeta } from 'vue-meta'
import { useHead } from '@vueuse/head'
// import { computed, reactive } from 'vue'

export default {
  setup () {
    // const siteData = reactive({
    //   title: 'My website',
    //   description: 'My beautiful website'
    // })

    // useHead({
    //   // Can be static or computed
    //   title: computed(() => siteData.title),
    //   meta: [
    //     {
    //       name: 'description',
    //       content: computed(() => siteData.description)
    //     }
    //   ]
    // })
  },
  components: {
    FooterView,
    TicketView,
    HeaderView,
    RoadMapView,
    GoogleMap,
    TravelLayout,
    PriceInfo,
    TravelModal
  },
  props: {
    name: {
      type: String,
      required: true
    },
    summary: {
      type: String,
      required: true
    },
    code: {
      type: String,
      required: true
    },
    price_per_person: {
      type: Number,
      required: true
    },
    travel_start: {
      type: String,
      required: true
    },
    travel_end: {
      type: String,
      required: true
    },
    total_day: {
      type: Number,
      required: true
    },
    itinerary_content: {
      type: Array,
      required: true
    },
    include_description: {
      type: String,
      required: true
    },
    exclude_description: {
      type: String,
      required: true
    },
    company_data: {
      type: Object,
      required: true
    },
    // refund_policy: {
    //   type: String,
    //   required: true
    // },
    itinerary_group_note: {
      type: String,
      required: true
    },
    if_show_logo: {
      type: Boolean,
      required: true
    },
    if_show_signup: {
      type: Boolean,
      required: true
    },
    if_show_locations: {
      type: Boolean,
      required: true
    },
    locations: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      header_data: {
        name: this.name,
        summary: this.summary,
        code: this.code,
        content: '暑期好玩好去處'
      },
      travelData: [
        {
          day: '第一天',
          data: [
            {
              id: 1,
              name: '澎湖攤1'
            },
            {
              id: 2,
              name: '澎湖攤2'
            },
            {
              id: 3,
              name: '澎湖攤3'
            },
            {
              id: 4,
              name: '澎湖攤4'
            },
            {
              id: 5,
              name: '澎湖攤5'
            }
          ]
        },
        {
          day: '第二天',
          data: [
            {
              id: 1,
              name: '澎湖攤1'
            },
            {
              id: 2,
              name: '澎湖攤2'
            },
            {
              id: 3,
              name: '澎湖攤3'
            },
            {
              id: 4,
              name: '澎湖攤4'
            }
          ]
        },
        {
          day: '第三天',
          data: [
            {
              id: 1,
              name: '澎湖攤1'
            },
            {
              id: 2,
              name: '澎湖攤2'
            },
            {
              id: 3,
              name: '澎湖攤3'
            }
          ]
        }
      ]
    }
  },
  methods: {
    openTravelModal () {
      this.$refs.travelModal.openModal()
    }
  },
  mounted () {
    useHead({
      // Can be static or computed
      title: this.name,
      meta: [
        {
          name: 'description',
          content: this.name
        }
      ]
    })
  }
}
</script>

<style lang="scss">
  @import '@/assets/scss/all.scss';
</style>
