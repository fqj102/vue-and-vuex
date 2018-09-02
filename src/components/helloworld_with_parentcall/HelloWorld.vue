<template>
    <div>
        <h4>두번째 세계</h4>
        <!-- 컴포넌트에 이벤트핸들러를 등록하고,  -->
        <hello/> Vue <world/> !!
    </div>
</template>

<script>
    import Hello from './Hello.vue'
    import World from './World.vue'

    //이 컴포넌트 객체를 통해 통신하지만 추가되는것은 없다.
    export default {
        name: "HelloWorld2",
        components: {Hello, World},
    }
</script>
