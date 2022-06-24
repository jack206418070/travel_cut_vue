<template>
  <footer>
    <div class="bg-back-footer">
      <svg
        class="computed"
        width="1440"
        height="502"
        viewBox="0 0 1440 502"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M-123 200.8L-53.375 217.533C16.25 234.267 155.5 267.733 294.75 251C434 234.267 573.25 167.333 712.5 142.233C851.75 117.133 991 133.867 1130.25 117.133C1269.5 100.4 1408.75 50.2 1478.38 25.1L1548 0V502H1478.38C1408.75 502 1269.5 502 1130.25 502C991 502 851.75 502 712.5 502C573.25 502 434 502 294.75 502C155.5 502 16.25 502 -53.375 502H-123V200.8Z"
        />
      </svg>
      <svg
        class="mobile"
        width="375"
        height="443"
        viewBox="0 0 375 443"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M-133 186.4L-109.792 201.933C-86.5833 217.467 -40.1667 248.533 6.25 233C52.6667 217.467 99.0833 155.333 145.5 132.033C191.917 108.733 238.333 124.267 284.75 108.733C331.167 93.2 377.583 46.6 400.792 23.3L424 0V466H400.792C377.583 466 331.167 466 284.75 466C238.333 466 191.917 466 145.5 466C99.0833 466 52.6667 466 6.25 466C-40.1667 466 -86.5833 466 -109.792 466H-133V186.4Z"
        />
      </svg>
    </div>
    <div class="f-content">
      <div class="bg-footer">
        <svg
          class="computed"
          width="1440"
          height="347"
          viewBox="0 0 1440 347"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M0 135.261H60C120 135.261 240 135.261 360 126.7C480 118.139 600 99.7929 720 74.109C840 47.2021 960 11.7338 1080 3.17253C1200 -5.38877 1320 11.7338 1380 21.5182L1440 30.0795V346.848H1380C1320 346.848 1200 346.848 1080 346.848C960 346.848 840 346.848 720 346.848C600 346.848 480 346.848 360 346.848C240 346.848 120 346.848 60 346.848H0V135.261Z"
            fill="url(#paint0_linear_623_3339)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_623_3339"
              x1="-450"
              y1="426.86"
              x2="1100.08"
              y2="-930.034"
              gradientUnits="userSpaceOnUse"
            >
              <stop
                offset="0.124993"
                :stop-color="theme[is_theme.split('theme')[1]].forthary"
              />
              <stop
                offset="0.927091"
                :stop-color="theme[is_theme.split('theme')[1]].primary"
              />
            </linearGradient>
          </defs>
        </svg>
        <svg
          class="mobile"
          width="375"
          height="291"
          viewBox="0 0 375 291"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M-87 113.047H-67C-47 113.047 -7 113.047 33 105.847C73 98.6464 113 83.217 153 61.6158C193 38.9859 233 9.15571 273 1.95531C313 -5.24509 353 9.15571 373 17.3847L393 24.5851V291H373C353 291 313 291 273 291C233 291 193 291 153 291C113 291 73 291 33 291C-7 291 -47 291 -67 291H-87V113.047Z"
            fill="url(#paint0_linear_623_3338)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_623_3338"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="0%"
              gradientUnits="userSpaceOnUse"
            >
              <stop
                offset="0.124993"
                :stop-color="theme[is_theme.split('theme')[1]].forthary"
              />
              <stop
                offset="0.927091"
                :stop-color="theme[is_theme.split('theme')[1]].primary"
              />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
    <div class="f-top d-flex">
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
