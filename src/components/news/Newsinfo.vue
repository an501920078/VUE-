<template>
  <div class="newsinfo">
    <div class="title">
      <h3>{{ newsinfo.title }}</h3>
      <p>
        <span>发表时间：{{newsinfo.add_time|dateFormat}}</span>
        <span>点击次数：{{newsinfo.chick}}次</span>
      </p>
    </div>
    <hr>
    <p v-html="newsinfo.content" class="content"></p>

    <comment-box :id="this.id"></comment-box>
  </div>
</template>

<script>
import { Toast } from "mint-ui";
import comment from "../subcomponents/comment.vue"
export default {
  data() {
    return {
      id: this.$route.params.id,
      newsinfo: {}
    };
  },
  created() {
    this.getNewsinfo();
  },
  methods: {
    getNewsinfo() {
      this.$ajax
        .get("/newsinfo/", {
          params: {
            ID: this.id
          }
        })
        .then(response => {
          this.newsinfo = response.data.message[0];
        })
        .catch(error => {
          Toast({
            message: "获取新闻加载失败..."
          });
        });
    }
  },
  components:{
      'comment-box':comment
  }
};
</script>

<style lang="scss" scoped>
.newsinfo {
    margin: 15px 4px 0 4px;
  .title {
    h3 {
      font-size: 16px;
      text-align: center;
      color: red;
      margin-bottom: 15px;
    }
    p {
      font-size: 13px;
      display: flex;
      justify-content: space-between;
      color: blue;
    }
  }
  .content{
      font-size: 18px;
      color: black;
  }
}
</style>
