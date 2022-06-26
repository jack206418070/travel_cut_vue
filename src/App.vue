<template>
  <div class="outer" :class="is_theme">
    <div class="select-color" style="position: fixed; top: 0; right: 0; z-index: 9999; width: 150px;">
      <select name="color" id="color" v-model="is_theme" style="width: 100%; padding: 8px;">
        <option value="theme1" selected>主題色一</option>
        <option value="theme2">主題色二</option>
        <option value="theme3">主題色三</option>
        <option value="theme4">主題色四</option>
        <option value="theme5">主題色五</option>
      </select>
    </div>
    <router-view :theme = 'is_theme' />
  </div>
</template>

<script>
export default {
  data () {
    return {
      is_theme: 'theme1'
    }
  }
}
</script>
