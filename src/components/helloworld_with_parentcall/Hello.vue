<template>
    <span>Hello</span>
</template>

<script>
    export default {
        name: "Hello",
        //생성시점에 이벤트 버스를 통해 이벤트 발생시킴
        created: function() {

            //여기서 익명함수 function(){}으로 이벤트를 등록할 경우
            // this가 window를 가르키기 때문에
            // let thisClass = this 와같은 방법으로 뷰컴포넌트 객체를 넘겨주어야함
            //상위 컴포넌트를 통해 이벤트를 발생시킨다.
            let emmitEvent = () => {
                this.$parent.$emit('setWorldText', 'world')
            }

            setTimeout(emmitEvent, 2000)
        }
    }
</script>
