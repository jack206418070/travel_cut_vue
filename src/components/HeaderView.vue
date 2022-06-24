<template>
  <header class="h-100">
    <div class="h-logo">
      <img src="@/assets/images/logo.png" alt="companyName" />
    </div>
    <div class="h-desc text-center">
      <h1 class="mb-6">澎湖南海・秘境忘憂</h1>
      <p class="mb-6">
        吉貝嶼是澎湖北方島嶼中最大的一個，地形兩大特徵是平坦的玄武岩方山和大片的沙灘，被稱為澎湖的水上樂園，獨特的吉貝沙尾景致，更像是遺落人間的絕世仙境。
      </p>
      <p class="code d-inline-block px-4 py-2">行程代碼：20395</p>
    </div>
    <TicketView />
  </header>
</template>

<script>
import TicketView from '@/components/TicketView.vue'

export default {
  components: {
    TicketView
  }
}
</script>
