<template>
    <div>
        <!-- 각 컴포넌트에 이벤트 버스를 넘겨준다 -->
        <hello :eventBus="eventBus"/> Vue <world :eventBus="eventBus"/> !!
    </div>
</template>

<script>
    import Vue from 'vue'
    import Hello from './Hello.vue'
    import World from './World.vue'

    //HelloWorld2.vue 에서 eventBus가 추가됨
    export default {
        name: "HelloWorld3",
        data: () => {
            return {
                eventBus: new Vue()
            }
        },
        components: {Hello, World},
    }
</script>
