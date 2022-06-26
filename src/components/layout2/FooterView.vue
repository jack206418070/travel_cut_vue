<template>
  <footer>
    <div class="desc">
      <div class="logo">
        <img src="@/assets/images/logo.png" alt="logo" />
      </div>
      <div class="f-desc">
        <h2 class="mb-4">好好玩旅行社股份有限公司</h2>
        <a class="mb-2" href="tel:02-23456789">02-23456789</a>
        <p class="mb-2">100988 台北市中正區重慶北路二段9999號</p>
        <p>交觀綜 5555 號・品保北 8888 號</p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  props: {
    is_theme: {
      type: String,
      default () {
        return 'theme1'
      }
    }
  },
  data () {
    return {
      theme: {
        1: {
          primary: '#FF5B00',
          forthary: '#FF5B00'
        },
        2: {
          primary: '#26BEC9',
          forthary: '#26BEC9'
        },
        3: {
          primary: '#210CAE',
          forthary: '#4DC9E6'
        },
        4: {
          primary: '#5CB270',
          forthary: '#F4F269'
        },
        5: {
          primary: '#AA6BD3',
          forthary: '#DD6A9A'
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
footer{
  position: relative;
  background: linear-gradient(78.12deg, var(--forthary) -10.2%, var(--primary) 115.8%);;
  padding: 50px 0;
  border-radius: 40px 40px 0px 0px;
  .desc{
    img{
      margin-bottom: 60px;
      @media (max-width: 414px) {
        margin-bottom: 16px;
      }
    }
    h2{
      @media (max-width: 414px) {
        margin-bottom: 8px;
        font-size: 1rem;
      }
    }
    a, p{
      @media (max-width: 414px) {
        font-size: 0.875rem;
      }
    }
    a{
      display: block;
      margin-bottom: 8px;
      color: var(--textSecondary);
      @media (max-width: 414px) {
        margin-bottom: 4px;
      }
    }
    p{
      @media (max-width: 414px) {
        margin-bottom: 4px;
      }
    }
    text-align: center;
    color: var(--textSecondary);
  }
}
</style>
