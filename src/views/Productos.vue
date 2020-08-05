<template>
    <div>
        <h2>Productos</h2>
        <b-container class="row flex-nowrap control">
            <mycard
                v-for="(product,index) in products_data" :key="product.productName" :reference="index"
                :productName="product.productName" :measures="product.productMeasure" :weight="product.productWeight"
                :info="product.productInformation" :pieces="product.productPieces" :image="product.productImage"
                class="col-8"
            />
        </b-container>
    </div>
</template>
<script>
import mycard from "@/components/ProductCard.vue"
export default {
  name: 'Products',
  components: {
    mycard,
  },
  data(){
      return{
          products_data: [
              {
                  productName: 'Yute',
                  productMeasure: 'X mts',
                  productWeight: 'X Kgrs',
                  productPieces: 'X piezas',
                  productImage: 'https://picsum.photos/600/300/?image=25',
                  productInformation: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati libero, aliquid architecto, suscipit fugit dolor enim corrupti earum ut qui fuga quas, consectetur excepturi tempore! Odit amet exercitationem numquam alias?'
              },
              {
                  productName: 'Yute 2',
                  productMeasure: '2X mts',
                  productWeight: '2X Kgrs',
                  productPieces: 'Y piezas',
                  productImage: 'https://picsum.photos/600/300/?image=25',
                  productInformation: 'RE: Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati libero, aliquid architecto, suscipit fugit dolor enim corrupti earum ut qui fuga quas, consectetur excepturi tempore! Odit amet exercitationem numquam alias?'
              },
              {
                  productName: 'Yute 3',
                  productMeasure: '3X mts',
                  productWeight: '3X Kgrs',
                  productPieces: 'Z piezas',
                  productImage: 'https://picsum.photos/600/300/?image=25',
                  productInformation: 'RE: RE: Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati libero, aliquid architecto, suscipit fugit dolor enim corrupti earum ut qui fuga quas, consectetur excepturi tempore! Odit amet exercitationem numquam alias?'
              },
          ]
      }
  }
}
</script>
<style lang="scss" scope>

.control{
    margin: auto;
    overflow-x: scroll;
    overflow-y: auto;
}

.control::-webkit-scrollbar {
  width: 12px;               /* width of the entire scrollbar */
}
.control::-webkit-scrollbar-track {
  background: orange;        /* color of the tracking area */
}
.control::-webkit-scrollbar-thumb {
  background-color: blue;    /* color of the scroll thumb */
  border-radius: 20px;       /* roundness of the scroll thumb */
  border: 3px solid orange;  /* creates padding around scroll thumb */
}

</style>