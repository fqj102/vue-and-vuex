/**
 * Product VUEX sotre 모듈
 * 상품 관리 store
 * @author WonwooKang
 */

//첫번째 판매자의 상품
let firstSellerProductList = [
    {id: "10001", name: "꿀벌이 열심히 모아온 화분 (200g)", price: 7500, image: '/images/product_01.jpg'},
    {id: "10002", name: "고소한 피스타치오 250g", price: 5500, image: '/images/product_02.jpg'},
]

//두번째 판매자의 상품
let secondSellerProductList = [
    {id: "20001", name: "톡쏘는 발포 비타민C 20개입", price: 6000, image: '/images/product_03.jpg'},
    {id: "20002", name: "싱싱한 왕란 30구 한판", price: 4500, image: '/images/product_04.jpg'},
]

//서버에서 받아오는 정보를 흉내낸 판매자 배열
let sellerList = [
    {name: "플라워파우더", products: firstSellerProductList},
    {name: "비타민", products: secondSellerProductList}
]

export default {
    namespaced: true,
    state: {
        sellerList: [],
        checkedProductIds: []
    },
    mutations: {
        setSellerList: function (state, data) {
            //데이터 적용
            state.sellerList = data
        },
        //개별 상품 체크
        productCheck: function (state, data) {
            let checkedIndex = state.checkedProductIds.indexOf(data.id)

            if(data.isChecked) {
                if (checkedIndex === -1)
                    state.checkedProductIds.push(data.id)
            } else {
                if (checkedIndex !== -1)
                    state.checkedProductIds.splice(checkedIndex, 1)
            }
        },
        //상품 전체 체크
        checkAllProduct: function (state, isChecked) { //모든 상품번호 체크목록에 등록

            if (isChecked) {
                for (let i = 0; i < state.sellerList.length; i++) {
                    let seller = sellerList[i]

                    for (let j = 0; j < seller.products.length; j++) {
                        let product = seller.products[j]

                        if (state.checkedProductIds.indexOf(product.id) === -1)
                            state.checkedProductIds.push(product.id)
                    }
                }
            } else {
                state.checkedProductIds = []
            }
        }
    },
    actions: {
        getSellerList: function (context) {
            //서버와 통신 후 리턴받은 데이터를 mutation에 전달
            //서버 통신부분은 위의 임시 배열로 대체합니다.
            context.commit('setSellerList', sellerList)
        }
    },
}
