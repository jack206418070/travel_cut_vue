<template>
  <HeaderView />
  <RoadMapView />
  <GoogleMap
    @open-travel-modal="openTravelModal"
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
import TicketView from '@/components/TicketView.vue'
import FooterView from '@/components/layout2/FooterView'
import PriceInfo from '@/components/layout2/PriceInfo'
import GoogleMap from '@/components/layout2/GoogleMap'
import RoadMapView from '@/components/layout2/RoadMapView'
import TravelModal from '@/components/TravelModal.vue'

export default {
  components: {
    HeaderView,
    TicketView,
    FooterView,
    PriceInfo,
    GoogleMap,
    RoadMapView,
    TravelModal
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
