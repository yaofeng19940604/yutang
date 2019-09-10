<template>
  <div class="types-wrap">
    <div class="item" v-for="item in types" :key="item.id" @click="onClick(item.id)">
      <van-icon class="icon" name="bullhorn-o"/>
      <p>{{item.name}}</p>
    </div>
  </div>
</template>

<script>
import { Icon } from 'vant';
export default {
  data(){
    return {
      types:[],
    }
  },
  methods: {
    onClick(typeid){
      this.$emit("gettype",typeid);
    }
  },
  components: {
    "van-icon":Icon,
  },
  created(){
    this.$axios.get("/venue/types").then(res=>{
        this.types = res.data;
    });
  }
}
</script>
<style lang="scss">
.types-wrap{
  display: flex;
  width: 100vw;
  overflow: auto;
  border-bottom: 1px #eaeaea solid;
  .item{
    width: 75px;
    padding-top: 16px;
    flex: 0 0 auto;
    text-align: center;
    .icon{
      font-size: 25px;
    }
    p{
      font-size: 16px;
      line-height: 35px;
      margin-bottom: 15px;
    }
  }
}
</style>
