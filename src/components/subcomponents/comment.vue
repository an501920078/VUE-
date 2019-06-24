<template>
  <div class="comment">
    <p>发表评论</p>
    <hr>
    <textarea placeholder="请输入要输入的内容(最多120字)" maxlength="120" v-model="msg"></textarea>
    <mt-button type="primary" size="large" @click="postComment">发表评论</mt-button>

    <div class="cmt-list">
      <div class="cmt-item" v-for="(item,i) in comments" :key="i">
        <div
          class="cmt-title"
        >第{{i+1}}楼&nbsp;&nbsp;用户:{{item.user_name}}&nbsp;&nbsp;发表时间:{{item.add_time|dateFormat}}</div>
        <div class="cmt-body">{{item.content===undefined?"此用户很懒,啥都没说":item.content}}</div>
      </div>
    </div>

    <mt-button type="danger" size="large" plain @click="getMore">加载更多</mt-button>
  </div>
</template>

<script>
import { Toast } from "mint-ui";

export default {
  data() {
    return {
      pageIndex: 1,
      comments: [],
      msg: ""
    };
  },
  created() {
    this.getComments();
  },
  methods: {
    getComments() {
      this.$ajax
        .get("/getcomments/", {
          params: {
            artid: this.id,
            pageindex: this.pageIndex
          }
        })
        .then(response => {
          this.comments = this.comments.concat(response.data.message);
        })
        .catch(error => {
          console.log(error);
          Toast({
            message: "获取评论加载失败..."
          });
        });
    },
    getMore() {
      this.pageIndex++;
      this.getComments();
    },
    postComment() {
        if(this.msg.trim().length===0){
            return Toast({
            message: "评论为空"
          });
        }
      this.$ajax({
        method: "post",
        url: "/postcomment/",
        data: {
          artid: this.id,
          content: this.msg.trim()
        }
      }).then(response=>{
        console.log(response.data);
        if(response.data.status===0){
          var cmt={"user_name":'匿名用户',"add_time":Date.now(),"content":this.msg.trim()
          }
          this.comments.unshift(cmt);
          this.msg=""
        }
      }).catch(error => {
          console.log(error);
          Toast({
            message: "增加评论失败..."
          });
        });
    }
  },
  props: ["id"]
};
</script>

<style lang="scss" scoped>
.comment {
  p {
    font-size: 18px;
    font-weight: bold;
    color: black;
  }
  textarea {
    height: 85px;
    font-size: 14px;
    margin-bottom: 0;
  }
  .cmt-list {
    margin: 4px 0;
    font-size: 13px;
    .cmt-item {
      .cmt-title {
        background-color: #ccc;
        line-height: 30px;
      }
      .cmt-body {
        line-height: 35px;
      }
    }
  }
}
</style>
