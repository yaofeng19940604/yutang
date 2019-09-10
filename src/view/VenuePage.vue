<template>
  <div class="venue-wrap">
    <div class="header">
      <van-search
        background="#3298ed"
        class="search"
        v-model="words"
        placeholder="请输入搜索关键词"
        show-action
        shape="round"
        @search="onSearch"
      >
        <div slot="action" @click="onSearch">搜索</div>
      </van-search>
      <Types @gettype="changType"></Types>
    </div>
    <VenueList class="VenueList" :typeId="typeId"></VenueList>
  </div>
</template>

<script>
import Types from "@/components/Types.vue"
import VenueList from "@/components/VenueList.vue"
import { Search } from 'vant';
export default {
  data(){
    return {
      typeId:0,
      words:"",
    }
  },
  methods: {
    changType(typeid){
      this.typeId = typeid;
    },
    onSearch(){
      this.$router.push("SearchPage")
    }
  },
  components: {
    Types,
    VenueList,
    "van-search":Search,
  },
  created(){
    
  }
}
</script>
<style lang="scss">
.venue-wrap{
  padding-top: 150px;
  .header{
    position:fixed;
    top: 0;
    left: 0;
    z-index: 100;
    background-color: $main-bc;
    .van-search__action{
      color: #fff;
    }
  }
}
</style>
