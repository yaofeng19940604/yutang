<template>
  <div class="venue-list-wrap">
    <VenueItem v-for="venue in venuelist" :key="venue.id" :venue="venue"/>
    <div class="more" @click="getMore">加载更多</div>
  </div>
</template>

<script>
import VenueItem from "./VenueItem.vue"
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
    VenueItem,
  },
  created(){
    this.getData();
  },
   mounted(){
    
  },
}
</script>
<style lang="scss" scoped>
.venue-list-wrap{
  padding:0 15px;
  .more{
    text-align: center;
    font-size: 16px;
    line-height: 30px;
    height: 40px;
  }
}
</style>
