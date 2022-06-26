<template>
  <HeaderView />
  <RoadMapView
    :theme="theme"
  />
  <GoogleMap
    @open-travel-modal="openTravelModal"
  />
  <TravelLayout
    :travel-data="travelData"
  />
  <PriceInfo />
  <FooterView />
  <TicketView
   :fixed = true
  />
  <TravelModal
    ref="travelModal"
  />
</template>

<script>
import HeaderView from '@/components/layout2/HeaderView'
import TravelLayout from '@/components/travel_content/TravelLayoutTwo'
import FooterView from '@/components/layout2/FooterView'
import PriceInfo from '@/components/layout2/PriceInfo'
import GoogleMap from '@/components/layout2/GoogleMap'
import RoadMapView from '@/components/layout2/RoadMapView'
import TravelModal from '@/components/TravelModal.vue'
import TicketView from '@/components/TicketView.vue'

export default {
  components: {
    HeaderView,
    TicketView,
    FooterView,
    PriceInfo,
    GoogleMap,
    RoadMapView,
    TravelModal,
    TravelLayout
  },
  props: ['theme'],
  data () {
    return {
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
          ],
          is_show: true
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
          ],
          is_show: true
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
          ],
          is_show: true
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

<style>

</style>
