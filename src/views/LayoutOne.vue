<template>
  <HeaderView />
  <RoadMapView
    :travel-road-map = "travelRoadMap"
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
  <FooterView />
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

export default {
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
  props: ['theme'],
  data () {
    return {
      travelRoadMap: ['景點1', '景點2', '景點3', '景點4', '景點5', '景點6', '景點7', '景點8', '景點9', '景點10', '景點11', '景點12', '景點13', '景點14'],
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
  }
}
</script>

<style lang="scss">
  @import '@/assets/scss/all.scss';
</style>
