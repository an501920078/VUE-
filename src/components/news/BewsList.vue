<template>
  <div class="bewslist">
    <ul class="mui-table-view">
      <li class="mui-table-view-cell mui-media" v-for="item in newslist" :key="item.id">
        <router-link :to="'/newsinfo/'+item.id">
          <img
            class="mui-media-object mui-pull-left"
            :src="item.img_url"
          >
          <div class="mui-media-body">
            <h1>{{item.title}}</h1>
            <p class="mui-ellipsis">
              <span>发表时间：{{item.add_time|dateFormat}}</span>
              <span>点击:{{item.chick}}次</span>
            </p>
          </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { Toast } from 'mint-ui';
export default {
  data() {
    return {
      newslist: {}
    };
  },
  created() {
    this.getNewslist();
  },
  methods: {
    getNewslist() {
      this.$ajax
        .get("/newslist/")
        .then(response => {
          this.newslist = response.data.message;
        })
        .catch(error => {
          Toast({
            message: "获取新闻加载失败..."
          });
        });
    }
  }
};
</script>

<style lang="scss" scoped>
.bewslist {
  li {
      height: 64px;
    .mui-media-body {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      h1 {
        font-size: 14px;
      }
      .mui-ellipsis {
        font-size: 12px;
        color: blue;
        display: flex;
        justify-content: space-between;
      }
    }
  }
}
</style>
