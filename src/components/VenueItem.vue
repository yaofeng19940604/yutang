<template>
  <div class="venue-item-wrap">
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
</template>

<script>
export default {
  data(){
    return {
      
    }
  },
  props:["venue"],
  methods: {
    
  },
  watch:{
    
  },
  components: {
    
  },
  created(){
    
  },
   mounted(){
    
  },
}
</script>
<style lang="scss">
.venue-item-wrap{
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
</style>
