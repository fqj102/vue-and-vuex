<template>
    <span>{{world}}</span>
</template>

<script>
    export default {
        name: "World",
        data: () => {
          return { world: '임시 세계' }
        },
        //생성시점에 이벤트 버스에 이벤트핸들러 등록
        created: function() {
            //여기서 익명함수 funciton(text){}로 이벤트핸들링시 this가 현제 뷰컴포넌트객체가 아닌
            //$parent 즉 부모의 뷰 객체를 가르키게 되므로 this가 없는 화살표 함수를 사용하거나
            // let thisClass = this 를 통해 뷰컴포넌트 객체를 가져와줘야 함
            //상위 컴포넌트에 이벤트핸들러를 등록하여 해당 이벤트를 처리한다.
            this.$parent.$on('setWorldText', text => {
                //this.world = text
            })
        }
    }
</script>
