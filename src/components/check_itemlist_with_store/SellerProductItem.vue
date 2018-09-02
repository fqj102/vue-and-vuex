<template>
    <div class="productWrap">
        <input type="checkbox" v-model="productCheck"/>
        <img :src="productItem.image"/>
        <div class="info">
            <h3 class="productName">{{productItem.name}}</h3>
            <span>상품번호: {{productItem.id}}</span><br>
            <span>가격: {{productItem.price}}</span>
        </div>
    </div>
</template>

<script>
    export default {
        name: "SellerProductItem",
        props: {
            productItem: Object
        },
        computed: {
            productCheck: {
                get: function(){
                    let productIndex = this.$store.state.product.checkedProductIds.indexOf(this.productItem.id)
                    return  productIndex !== -1
                },
                set: function(isChecked){
                    let data = {
                        id: this.productItem.id,
                        isChecked: isChecked
                    }

                    this.$store.commit('product/productCheck', data)
                }
            }
        },
    }
</script>

<style scoped>
    .productWrap { height: 120px; margin: 10px; margin-bottom: 10px;}
    .productWrap .info { display: inline; height: 120px; vertical-align: middle; float: left; margin-left:20px; }
    .productWrap .info .productName {}
    .productWrap input[type=checkbox] { float: left; width: 30px; margin-top: 50px; margin-right: 10px;}
    .productWrap img { width: 120px; float: left;}
</style>
