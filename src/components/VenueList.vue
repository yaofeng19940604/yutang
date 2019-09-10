<template>
  <div class="venue-list-wrap">
    <div class="item" v-for="venue in venuelist" :key="venue.id">
      <div class="img-wrap">
        <img src="../assets/images/img_01.jpg">
      </div>
      <div class="content">
        <h5>{{venue.name}}</h5>
        <h6>{{venue.type_id}}</h6>
        <p class="address">{{venue.address}}</p>
        <p class="price">线上预定</p>
      </div>
    </div>
    <div class="more" @click="getMore">加载更多</div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      venuelist:[],
      page:1,
    }
  },
  props:{
    typeId:{
      type:Number,
      default:0,
    }
  },
  methods: {
    getData(){
      let url =  this.typeId == 0 ? "/venue/list":("/venue/type/"+this.typeId);
      this.$axios.get(url+"?page="+this.page).then(res=>{
          this.venuelist = this.venuelist.concat(res.data.data);
          this.page++;
      });
    },
    getMore(){
      this.getData();
    },
  },
  watch:{
    typeId(){
      this.page = 1;
      this.venuelist = [];
      this.getData();
    }
  },
  components: {
    
  },
  created(){
    this.getData();
  },
   mounted(){
    
  },
}
</script>
<style lang="scss">
.venue-list-wrap{
  padding:0 15px;
  .item{
    padding-top: 20px;
    border-bottom: 1px #dedede solid;
    display: flex;
    .img-wrap{
      width: 100px;
      margin-right: 15px;
      flex: 0 0 auto;
      img{
        width: 100px;
      }
    }
    .content{
      flex: 1 1 auto;
      font-size: 13px;
      h5{
        font-size: 16px;
        line-height: 24px;
      }
      h6{
        line-height: 24px;
      }
      .address{
        line-height: 28px;
      }
      .price{
        line-height: 40px;
      }
    }
  }
  .more{
    text-align: center;
    font-size: 16px;
    line-height: 30px;
    height: 40px;
  }
}
</style>
