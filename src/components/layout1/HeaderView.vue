<template>
  <header class="h-100">
    <div class="h-logo">
      <img src="@/assets/images/logo.png" alt="companyName" />
    </div>
    <div class="h-desc text-center">
      <h1 class="mb-6">{{ header_data.name }}</h1>
      <p class="mb-6">
        {{ header_data.summary }}
      </p>
      <p class="code d-inline-block px-4 py-2">行程代碼：{{ header_data.code }}</p>
    </div>
    <TicketView />
  </header>
</template>

<script>
import TicketView from '@/components/TicketView.vue'

export default {
  components: {
    TicketView
  },
  props: {
    header_data: {
      type: Object,
      required: true
    }
  }
}
</script>
