<template>
  <div class="detail-wrap">
    <van-nav-bar
      title="场馆详情"
      left-arrow
      @click-left="onClickLeft"
    />
    <div class="header">
      <div class="pic">
        <img src="../assets/images/img_01.jpg">
      </div>
      <div class="text">
        <h5>{{venue.name}}</h5>
        <p>{{venue.address}}</p>
        <p>营业时间</p>
      </div>
    </div>
    <div class="phone-wrap clearfix">
      <p class="fl">{{venue.phone}}</p>
      <span class="fr">icon</span>
    </div>
    <div class="time-wrap">
      <h6 class="time-top">{{venue.type_id}}</h6>
      <div class="content-wrap">
        <div class="item" v-for="(time,index) in venue.date_weeks" :key="index" @click="venueOrder(index)">
          <h5>{{time.week}}</h5>
          <h6>{{time.date | datafilter}}</h6>
          <p>充足</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { NavBar } from 'vant';
export default {
  data(){
    return {
      venueId:"",
      venue:{},
    }
  },
  methods: {
    onClickLeft(){
      this.$router.go(-1);
    },
    venueOrder(index){
      let venue = this.venue
      this.$router.push({name:"VenueOrder",params: { dateChecked: index ,venue}})
    }
  },
  components: {
    "van-nav-bar":NavBar,
  },
  filters:{
    datafilter:function(val){
      let arr = val.split("-")
      let newStr = arr[1]+"~"+arr[2]
      return newStr
    },
  },
  created(){
    this.venueId = this.$route.params.id;
    this.$axios.get("/venue/detail/"+this.venueId)
    .then(res => {
      this.venue = res.data;
    })
  }
}
</script>
<style lang="scss">
.detail-wrap{
  .van-nav-bar{
    background-color: $main-cl;
  }
  .van-nav-bar__title{
    color: #fff;
  }
  .van-nav-bar .van-icon{
    color: #fff;
    font-size: 22px;
  }
  .header{
    display: flex;
    width: 100%;
    padding-top: 15px;
    height: 107px;
    border-bottom: 1PX #eee solid;
    .pic{
      flex:0 0 auto;
      padding:0 13px;
      width:100px;
      img{
        width:100px;
      }
    }
    .text{
      flex-grow: 1;
      font-size: 14px;
      line-height: 20px;
      h5{
        font-size: 16px;
        line-height: 18px;
        margin-bottom: 6px;
      }
    }
  }
  .phone-wrap{
    height: 55px;
    font-size: 16px;
    line-height: 55px;
    padding:0 12px 0 15px;
    border-bottom: 1PX #eee solid;
  }
  .time-wrap{
    .time-top{
      height: 55px;
      font-size: 16px;
      line-height: 55px;
      padding:0 12px 0 15px;
      border-bottom: 1Px #eee solid;
      color: $main-cl;
    }
    .content-wrap{
      padding:15px 0 15px 4px;
      height: 90px;
      background-color: #f8f8f8;
      width: 100%;
      display: flex;
      overflow: auto;
      .item{
        width:80px;
        margin: 0 6px;
        flex: 0 0 auto;
        text-align: center;
        padding-top:12px;
        border:1PX $main-bdcl solid;
        box-sizing: border-box;
        background-color: #fff;
        line-height: 22px;
        font-size: 14px;
        h6{
          font-size: 15px;
        }
        p{
          color: $main-cl;
        }
      }
    }
  }
}
</style>
