<template>
    <div>
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

<style scoped>

</style>
