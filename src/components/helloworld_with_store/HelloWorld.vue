<template>
    <div>
        <h4>네번째 세계</h4>
        <hello/> Vue <world/> !!
    </div>
</template>

<script>
    import Hello from './Hello.vue'
    import World from './World.vue'

    //구조는 HelloWorld.vue와 동알하다
    export default {
        name: "HelloWorld4",
        components: {Hello, World},
    }
</script>
