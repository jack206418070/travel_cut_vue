<template>
  <div class="roadmap2">
    <div class="roadmap2-bg" :class="theme">
      <img src="@/assets/images/layout2/Layout2_Web_RoadMap.svg">
      <img src="@/assets/images/layout2/Layout2_Web_RoadMap02.svg">
      <img src="@/assets/images/layout2/Layout2_Web_RoadMap03.svg">
      <img src="@/assets/images/layout2/Layout2_Web_RoadMap04.svg">
      <img src="@/assets/images/layout2/Layout2_Web_RoadMap05.svg">
    </div>
    <ul class="count14">
      <li class="top-s">
        <p>目的地</p>
        <div class="top-s"></div>
        <div class="circle"></div>
      </li>
      <li class="bottom-s">
        <p>目的地</p>
        <div class="bottom-s"></div>
        <div class="circle"></div>
      </li>
      <li class="top-l">
        <p>目的地</p>
        <div class="top-l"></div>
        <div class="circle"></div>
      </li>
      <li class="bottom-l">
        <p>目的地</p>
        <div class="bottom-l"></div>
        <div class="circle"></div>
      </li>
      <li class="top-s">
        <p>目的地</p>
        <div class="top-s"></div>
        <div class="circle"></div>
      </li>
      <li class="bottom-s">
        <p>目的地</p>
        <div class="bottom-s"></div>
        <div class="circle"></div>
      </li>
      <li class="top-l">
        <p>目的地</p>
        <div class="top-l"></div>
        <div class="circle"></div>
      </li>
      <li class="bottom-l">
        <p>目的地</p>
        <div class="bottom-l"></div>
        <div class="circle"></div>
      </li>
      <li class="top-s">
        <p>目的地</p>
        <div class="top-s"></div>
        <div class="circle"></div>
      </li>
      <li class="bottom-s">
        <p>目的地</p>
        <div class="bottom-s"></div>
        <div class="circle"></div>
      </li>
      <li class="top-l">
        <p>目的地</p>
        <div class="top-l"></div>
        <div class="circle"></div>
      </li>
      <li class="bottom-l">
        <p>目的地</p>
        <div class="bottom-l"></div>
        <div class="circle"></div>
      </li>
      <li class="top-s">
        <p>目的地</p>
        <div class="top-s"></div>
        <div class="circle"></div>
      </li>
      <li class="bottom-s">
        <p>目的地</p>
        <div class="bottom-s"></div>
        <div class="circle"></div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    theme: {
      type: String,
      default () {
        return 'theme1'
      }
    }
  }
}
</script>

<style lang="scss">
.roadmap2 {
  padding: 0 20px;
  position: relative;
  @media (max-width: 700px){
    overflow-x: auto;
    overflow-y: hidden;
  }
  @media (max-width: 414px){
    width: 414px;
  }
  @media (max-width: 375px){
    padding-right: 60px;
  }
  &-bg{
    position: absolute;
    width: 100%;
    top: 0;
    left: 0;
    height: 100%;
    img{
      display: none;
    }
    &.theme1{
      img{
        &:nth-child(1) {
          display: block;
        }
      }
    }
    &.theme2{
      img{
        &:nth-child(2) {
          display: block;
        }
      }
    }
    &.theme3{
      img{
        &:nth-child(3) {
          display: block;
        }
      }
    }
    &.theme4{
      img{
        &:nth-child(4) {
          display: block;
        }
      }
    }
    &.theme5{
      img{
        &:nth-child(5) {
          display: block;
        }
      }
    }
    @media (max-width: 576px) {
      width: 1080px;
      &.count-normal{
        width: 100%;
      }
    }
    @media (max-width: 576px) {
      width: 1050px;
      &.count-normal{
        width: 100%;
      }
    }
  }
  ul{
    margin: 0 auto;
    height: 450px;
    max-width: 1220px;
    padding: 0 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    &::before {
      position: absolute;
      content: "";
      width: 100%;
      height: 5px;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background: linear-gradient(var(--primary) 40%, var(--forthary) 100%);
      z-index: 1;
    }
    @media (max-width: 414px) {
      padding: 0 40px;
      height: 350px;
    }
    @media (max-width: 576px){
      justify-content: flex-start;
      width: 960px;
      &.count7{
        li{
          width: calc(960px/6);
          &:last-child{
            width: 0;
          }
        }
      }
      &.count8{
        li{
          width: calc(960px/7);
          &:last-child{
            width: 0;
          }
        }
      }
      &.count9{
        li{
          width: calc(960px/8);
          &:last-child{
            width: 0;
          }
        }
      }
      &.count10{
        li{
          width: calc(960px/9);
          &:last-child{
            width: 0;
          }
        }
      }
      &.count11{
        li{
          width: calc(960px/10);
          &:last-child{
            width: 0;
          }
        }
      }
      &.count12{
        li{
          width: calc(960px/11);
          &:last-child{
            width: 0;
          }
        }
      }
      &.count13{
        li{
          width: calc(960px/12);
          &:last-child{
            width: 0;
          }
        }
      }
      &.count14{
        li{
          width: calc(960px/13);
          &:last-child{
            width: 0;
          }
        }
      }
      &.count-normal{
        width: 100%;
        li{
          width: 100%;
          &:last-child{
            width: 0;
          }
        }
      }
    }
  }
  li{
    position: relative;
    .top-s, .top-l, .bottom-s, .bottom-l{
      background: linear-gradient(var(--primary) 40%, var(--forthary) 100%);
    }
    .top-s{
      position: absolute;
      height: 50px;
      width: 1px;
      top: -50px;
      left: 3.5px;
    }
    .top-l {
      position: absolute;
      height: 100px;
      width: 1px;
      top: -100px;
      left: 3.5px;
    }
    .bottom-s {
      position: absolute;
      height: 50px;
      width: 1px;
      bottom: -50px;
      left: 3.5px;
    }
    .bottom-l {
      position: absolute;
      height: 100px;
      width: 1px;
      bottom: -100px;
      left: 3.5px;
    }
    &.bottom-s, &.bottom-l {
      .circle{
        top: 0;
        bottom: -6px;
      }
    }
    .top-s::after, .top-l::after{
      position: absolute;
      content: "";
      width: 16px;
      height: 16px;
      border-radius: 50%;
      background-color: #fff;
      left: -7.5px;
      top: -22px;
      margin: auto;
    }
    .top-s::before, .top-l::before{
      position: absolute;
      content: "";
      width: 30px;
      height: 30px;
      border-radius: 80% 0 55% 50% / 55% 0 80% 50%;
      background: linear-gradient(90deg, var(--primary) 40%, var(--forthary) 100%);
      transform: rotate(-225deg);
      top: -30px;
      left: -14.5px;
    }
    .bottom-s::after, .bottom-l::after{
      position: absolute;
      content: "";
      width: 16px;
      height: 16px;
      border-radius: 50%;
      background-color: #fff;
      left: -7.5px;
      bottom: -22px;
      margin: auto;
    }
    .bottom-s::before, .bottom-l::before{
      position: absolute;
      content: "";
      width: 30px;
      height: 30px;
      border-radius: 80% 0 55% 50% / 55% 0 80% 50%;
      background: linear-gradient(78deg, var(--primary) 40%, var(--forthary) 100%);;
      transform: rotate(-45deg);
      bottom: -30px;
      left: -14.5px;
    }
    p{
      width: 100px;
      white-space: nowrap;
      position: absolute;
      text-align: center;
      left: -48px;
    }
    &.top-s p {
      top: -110px;
    }
    &.top-l p {
      top: -160px;
    }
    &.bottom-s p {
      bottom: -110px;
    }
    &.bottom-l p {
      bottom: -160px;
    }
  }
  .circle{
    position: absolute;
    height: 8px;
    width: 8px;
    border-radius: 50%;
    background: var(--primary);
    top: -6px;
    right: 0;
    left: 0;
  }
}
</style>
