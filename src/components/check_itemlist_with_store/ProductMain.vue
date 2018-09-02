<template>
    <div class="productListWrap">
        <h4><input type="checkbox" v-model="allProductCheck"/> 전체선택 체크박스</h4>
        <Seller v-for="(sellerItem, index) in sellerList" :key="index" :sellerItem="sellerItem"/>
        <button @click="showCheckedItem">체크된 상품은?</button>
    </div>
</template>

<script>
    import Seller from "./Seller.vue";

    export default {
        name: "ProductMain",
        computed: {
            //조회된 판매자 목록
            sellerList: function(){
                return this.$store.state.product.sellerList
            },
            //전체선택 여부 및 설정용
            allProductCheck: {
                //모든상품이 선택됬는지 리턴
                get: function () {
                    let sellerList = this.$store.state.product.sellerList;
                    let productCount = 0;

                    //각셀러의 상품수
                    for (let i = 0; i < sellerList.length; i++) {
                        productCount += sellerList[i].products.length
                    }

                    //상품수와 상품번호의 수가 같은지
                    return productCount === this.$store.state.product.checkedProductIds.length
                },
                //모든상품이 선택되도록 처리
                set: function (isChecked) {
                    this.$store.commit('product/checkAllProduct', isChecked)
                }
            }
        },
        created: function() {
            //생성시 vuex를 통해 판매자 목록 조회 요청
            this.$store.dispatch('product/getSellerList')
        },
        methods: {
            showCheckedItem: function(){
                if (this.$store.state.product.checkedProductIds.length != 0) {
                    alert('체크된 상품번호는 ' + this.$store.state.product.checkedProductIds.toString())
                } else {
                    alert('체크된 상품이 없습니다.')
                }
            }
        },
        components: { Seller }
    }
</script>

<style scoped>
    h4 { border: solid 1px black; padding: 10px; }
    button { margin-top: 10px; width: 200px; height: 40px; font-weight: bold; }
</style>
