<template class="my-size">
    <div class="my-size" @click="toggleClass()">
       <span>{{simpletext}}</span> <i v-bind:class="[activeIcon ? 'fa-angle-double-up' : 'fa-angle-double-down']" class="fas"></i>
    </div>
</template>
<script>
export default {
  name:'SwapTextIcon',
  props:{
    simpletext:{
      type:String,
      required:true
    }
  },
  data(){
    return {
        activeIcon: false
    }
  },
  methods: {
    toggleClass(){
        if(this.activeIcon){
          this.activeIcon = false;
        }else{
          this.activeIcon = true;
        }
    },
  }
}
</script>

<style lang="scss" scoped>
.my-size{
    min-width: 100%;
    height: auto;
    height: 3em;
    span,i{
      display: block;
      width: fit-content;
    }
    span{
      max-width: 95%;
      margin:1em 0 1em 1em;
      float: left;
    }
    i{
      max-width: 5%;
      margin:1em 1em 1em 0;
      float: right;
    }
}    
@media screen and (max-width: 991px) {
  .my-size{
    span,i{
      width: 95%;
      max-width: 100%;
    }
  }
}
@media screen and (max-width:500px){
  span,i{
    font-size: small;
  }
}
</style>