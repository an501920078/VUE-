<template>
  <div class="homecontent">
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="item in lunbotuList" :key="item.id">
        <img :src="item.img">
      </mt-swipe-item>
    </mt-swipe>

    <ul class="mui-table-view mui-grid-view mui-grid-9">
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link  to="/newlist">
          <span class="mui-icon mui-icon-home"></span>
          <div class="mui-media-body">新闻资讯</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <span class="mui-icon mui-icon-email">
          </span>
          <div class="mui-media-body">图片分享</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <span class="mui-icon mui-icon-chatbubble"></span>
          <div class="mui-media-body">商品购买</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <span class="mui-icon mui-icon-location"></span>
          <div class="mui-media-body">留言反馈</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <span class="mui-icon mui-icon-search"></span>
          <div class="mui-media-body">视频专区</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <span class="mui-icon mui-icon-phone"></span>
          <div class="mui-media-body">联系我们</div>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import { Toast } from 'mint-ui';
export default {
  data() {
    return {
      lunbotuList: []
    };
  },
  created() {
    this.getLunbotu();
  },
  methods: {
    getLunbotu() {
      this.$ajax
        .get("/Lunbotu")
        .then(response => {
          this.lunbotuList = response.data;
          console.log(this.lunbotuList);
        })
        .catch(error => {
          Toast({
            message: "获取轮播图加载失败..."
          });
        });
    }
  }
};
</script>

<style lang="scss" scoped>
.homecontent {
  .mint-swipe {
    height: 200px;
    width: 100%;
    .mint-swipe-item:nth-of-type(1) {
      background-color: yellow;
    }
    .mint-swipe-item:nth-of-type(2) {
      background-color: red;
    }
    .mint-swipe-item:nth-of-type(3) {
      background-color: skyblue;
    }
    img{
        height: 100%;
        width: 100%;
    }
  }
  .mui-grid-view.mui-grid-9 {
    background-color: white;
    border: none;
  }
  .mui-grid-view.mui-grid-9 .mui-table-view-cell {
    border: none;
    .mui-media-body {
      font-size: 14px;
    }
  }
}
</style>
