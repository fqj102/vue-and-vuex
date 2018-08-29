<template>
    <div>
        <hello/> Vue <world/> !!
    </div>
</template>

<script>
    import Hello from './components/Hello.vue'
    import World from './components/World.vue'

    export default {
        name: 'HelloWorld',
        components: { Hello, World }
    }
</script>

<style scoped>

</style>
