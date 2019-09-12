<template>
  <div class="order-wrap">
    <van-nav-bar
      :title="venue.name"
      left-arrow
      @click-left="onClickLeft"
    />
    <van-tabs v-model="activeName" @click="onClickTab">
      <van-tab v-for="(item,index) in venue.date_weeks" :name="index" :key="index">
        <dl class="tab" slot="title">
          <dt>{{item.date | datafilter}}</dt>
          <dd>{{item.week}}</dd>
        </dl>
        <div class="content-wrap">
          <dl class="time-list">
            <dt v-for="(time,index) in venue.times" :key="index">{{time}}</dt>
          </dl>
          <dl v-for="(item,bianhao,index) in datePrice" :key="index">
            <dt>{{bianhao+"号场"}}</dt>
            <dd v-for="(item,index) in item" :key="index" :class="{isOrdered:item.is_ordered}" @click="orderVenue($event,bianhao,item.price,index)">{{item.price}}</dd>
          </dl>
        </div>
      </van-tab>
    </van-tabs>
    <van-submit-bar
      :price="priceToll"
      button-text="提交订单"
      @submit="onSubmit"
    />
  </div>
</template>

<script>
import { NavBar, Tab, Tabs, SubmitBar, Toast   } from 'vant';
export default {
  data(){
    return {
      venue:{},
      activeName: 0,
      dateChecked:"",
      priceToll:0,
      params:{
        venue_id:0,
        order_date:"",
        items:[]
      },
    }
  },
  methods: {
    onClickLeft(){
      this.$router.go(-1);
    },
    onClickTab(index){
      this.dateChecked = this.venue.date_weeks[index].date;
      this.params.order_date = this.dateChecked;
    },
    onSubmit(){
      this.$axios.post("/order/save",this.params)
      .then(res => {
        this.$toast.success(res.data.msg);
        this.$router.push("home/VenuePage")
      })
    },
    orderVenue(ev,sn,price,time){
      let oDd = ev.target;
      if(oDd.className =="isOrdered"){
        return false;
      }
      if(oDd.className == "selected"){
        oDd.className = ""
        this.priceToll-=price*100;
        this.params.items.forEach((item,index)=> {
            if(item.sn == sn && item.time == time){
                this.params.items.splice(index,1);
            }
        });
      }else{
        if(this.params.items.length>=4){
            this.$toast("亲,单次只能预定4个!!!");
            return false;
        }
        oDd.className = "selected"
        this.params.items.push({sn,time});
        this.priceToll+=price*100;
      }
    }
  },
  computed:{
    datePrice(){
      return this.venue.date_sn_time_prices[this.dateChecked]
    }
  },
  filters:{
    datafilter:function(val){
      let arr = val.split("-")
      let newStr = arr[1]+"~"+arr[2]
      return newStr
    },
  },
  components: {
    "van-nav-bar":NavBar,
    "van-tabs":Tabs,
    "van-tab":Tab,
    "van-submit-bar":SubmitBar,
    [Toast.name]:Toast,
  },
  created(){
    this.activeName = this.$route.params.dateChecked;
    this.venue = this.$route.params.venue;
    this.dateChecked = this.venue.date_weeks[this.activeName].date;

    this.params.venue_id = this.venue.id;
    this.params.order_date = this.dateChecked;
  }
}
</script>
<style lang="scss">
.order-wrap{
  .van-nav-bar{
    width: 100%;
    background-color: $main-cl;
    position: fixed;
    top:0;
    left: 0;
  }
  .van-tabs{
    top:46px;
    left: 0;
  }
  .van-nav-bar__title{
    color: #fff;
  }
  .van-nav-bar .van-icon{
    color: #fff;
    font-size: 22px;
  }
  .van-tabs--line .van-tabs__wrap{
    height: 65px;
  }
  .van-tab{
    line-height: 24px;
    padding-top:7px;
  }
  .content-wrap{

    width: 100%;
    display: flex;
    overflow: auto;
    dl{
      width:60px;
      flex: 0 0 auto;
      dt,dd{
        text-align: center;
        line-height: 50px;
        font-size: 18px;
      }
      dd{
        border:1Px $main-bdcl solid;
        box-sizing: border-box;
      }
      .isOrdered{
        background-color: #999;
      }
      .selected{
        background-color: $main-cl;
        color: #fff;
      }
    }
    .time-list{
      dd{
        border:1Px transparent solid;
      }
    }
  }
  .van-submit-bar__bar{
    border-top: 1px $main-bdcl solid;
    .van-submit-bar__text{
      padding-left: 15px;
      text-align: left;
    }
  }
}
</style>
