<template class="my-size">
    <div class="my-size" @click="toggleClass()">
        <i v-bind:class="[activeIcon ? 'fa-minus' : 'fa-plus']" class="fas"></i>
    </div>
</template>
<script>
export default {
  name:'SwapIcon',
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
    height:auto;
}
</style>