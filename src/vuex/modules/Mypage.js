/**
 * Mypage state 모듈
 *
 * @author 강원우
 */


export default {
  namespaced : true,
  state : {
    orderList : [],
    inquiryList : []
  },
  getters : {
  },
  mutations : {
    getMypageOrderList : function (state, data) {
      state.orderList = data
    },
    getMypageInquiryList : function (state, data) {
      state.inquiryList = data;
    }
  },

  actions : {
    //마이페이지 주문목록 조회 - 커머스
    getMypageOrderList : function (context, payload) {
      return new Promise((resolve, reject) => {
        let url = this._vm.getCommerceUrl() + 'orders?' +
          'offset=' + payload.offset +
          '&limit=' + payload.limit;

        this._vm.get(url, payload).then(response => {

          //더보기용 상품체크가 아닐경우에만 목록으로 추가
          if (!payload.isMoreCheck) {
            context.commit('getMypageOrderList', response.data)
          }
          resolve(response)
        }).catch(error => reject(error))
      })
    },
    //마이페이지 Q&A목록 조회
    getMypageInquiryList : function (context, payload) {
      return new Promise((resolve, reject) => {
        let url = this._vm.getCommerceUrl() + 'users/self/inquiries?' +
          'limit=' + payload.limit +
          '&type=' + payload.type

        if (payload.lt !== undefined && payload.lt) {
          url += '&lt=' + payload.lt
        }

        this._vm.get(url, payload).then(response => {

          //더보기용 포인트체크가 아닐경우에만 목록으로 추가
          if (!payload.isMoreCheck) {
            context.commit('getMypageInquiryList', response.data)
          }
          resolve(response)
        }).catch(error => reject(error))


      }).catch( error => reject(error))
    },
  }
}