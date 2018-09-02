<template>
    <div>
        <h4>첫번째 세계</h4>
        <hello/> Vue <world/> !!
    </div>
</template>

<script>
    import Hello from './Hello.vue'
    import World from './World.vue'

    export default {
        name: 'HelloWorld',
        components: { Hello, World }
    }
</script>
