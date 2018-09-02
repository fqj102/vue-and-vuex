<template>
    <div class="sellerWrap">
        <h3>{{sellerItem.name}}</h3>
        <SellerProductItem v-for="(productItem, index) in productList" :key="index" :productItem="productItem"/>
    </div>
</template>

<script>
    import SellerProductItem from "./SellerProductItem.vue";

    export default {
        name: "Seller",
        props: {
            sellerItem: Object
        },
        computed: {
            productList: function() {
                return this.sellerItem.products
            }
        },
        components: { SellerProductItem }
    }
</script>

<style scoped>
    .sellerWrap { border-bottom: 1px solid #000000;}
</style>
