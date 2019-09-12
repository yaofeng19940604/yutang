<template>
  <div class="search-page-wrap">
    <div class="search-wrap">
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
      </div>
    </div>
    <div class="venue-list-wrap">
        <VenueItem v-for="(venue,index) in venues" :venue="venue" :key="index"/>
    </div>
  </div>
</template>

<script>
import { Search } from 'vant';
import VenueItem from "@/components/VenueItem.vue"
export default {
  data(){
    return {
      words:"",
      venues:[],
    }
  },
  methods: {
    onSearch(){
      let words = this.words;
      this.$axios.post("/venue/search",{
        "words":words,
      }).then(res => {
        this.venues = res.data.data
      })
    },
  },
  components: {
    "van-search":Search,
    VenueItem,
  },
  created(){
    this.words = this.$route.params.words;
    this.onSearch();
  }
}
</script>
<style lang="scss" scoped>
.search-wrap{
  padding-top: 50px;
  .header{
    width: 100%;
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
