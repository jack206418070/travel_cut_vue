<template>
  <div class="googleMap">
    <div class="googleApi">
      <a
        href="javascript:;"
        class="btn-computed"
        @click="$emit('openTravelModal')"
      ></a>
      <router-link
        to="/detail"
        class="btn-mobile"
      ></router-link>
      <img src="@/assets/images/googleMap.png" alt="googleApi" />
    </div>
    <div class="refrenceRoad py-9 pl-9">
      <p>參考路線</p>
    </div>
  </div>
</template>

<script>
export default {
  emits: ['openTravelModal']
}
</script>
