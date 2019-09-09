<template>
  <div class="venue-wrap">
    venue
  </div>
</template>

<script>
export default {
  data(){
    return {
      
    }
  },
  methods: {
    
  },
  components: {
    
  },
  created(){
    this.$axios.get("/venue/types").then(res=>{
        console.log(res);
    });
  }
}
</script>
<style lang="scss">

</style>
