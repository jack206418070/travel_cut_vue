<template>
  <div class="outer" :class="is_theme">
    <router-view :is_theme = 'is_theme' />
  </div>
</template>

<script>
export default {
  data () {
    return {
      is_theme: 'theme2'
    }
  }
}
</script>
