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

    //HelloWorld2.vue 에서 eventBus가 추가됨
    export default {
        name: "HelloWorld2",
        data: () => {
            return {
                worldText: ''
            }
        },
        components: {Hello, World},
    }
</script>
