<template>
  <div class="outer" :class="is_theme">
    <!-- <div class="select-color" style="position: fixed; top: 0; right: 0; z-index: 9999; width: 150px;">
      <select name="color" id="color" v-model="is_theme" style="width: 100%; padding: 8px;">
        <option value="theme1" selected>主題色一</option>
        <option value="theme2">主題色二</option>
        <option value="theme3">主題色三</option>
        <option value="theme4">主題色四</option>
        <option value="theme5">主題色五</option>
      </select>
    </div> -->
    <component
      v-if="currentItinerary && setting"
      :is="template"
      v-bind="currentItinerary"
      :price_per_person="setting.price_per_person"
      :if_show_logo="setting.if_show_logo"
      :if_show_signup="setting.if_show_signup"
      :if_show_locations="setting.if_show_locations"
      :locations="setting.locations"
    ></component>
  </div>
</template>

<script>
import { defineAsyncComponent, shallowRef } from 'vue'

export default {
  data () {
    return {
      is_theme: 'theme1',
      setting: null,
      currentItinerary: null,
      template: shallowRef(defineAsyncComponent(() => { return import('@/views/LayoutOne.vue') }))
    }
  },
  methods: {
    get_setting () {
      const settingUrl = 'https://lara-unitrip-dev-by4xskwu4q-de.a.run.app/api' + '/dm/setting/' + '62566ad0cf4098f58379c814'
      this.$http.get(settingUrl).then(response => {
        this.setting = response.data
        console.log(this.setting, 'setting')
        if (!response.data.is_display) {
          this.$router.push({ name: '404' })
        }
      }).catch(error => {
        console.log(error)
        this.$router.push({ name: '404' })
      })
    },
    get_itinerary () {
      const itineraryUrl = 'https://lara-unitrip-dev-by4xskwu4q-de.a.run.app/api' + '/dm/group-itinerary/' + '62566ad0cf4098f58379c814'
      this.$http.get(itineraryUrl).then(response => {
        this.currentItinerary = response.data
        console.log(this.currentItinerary, 'travelData')
      }).catch(error => {
        console.log(error)
      })
    }
  },
  created () {
    this.get_setting()
    this.get_itinerary()
  }
}
</script>
