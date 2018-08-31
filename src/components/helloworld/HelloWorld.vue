<template>
    <div>
        <hello/> Vue <world/> !!
    </div>
</template>

<script>
    import Hello from './Hello.vue'
    import World from './World.vue'
    import store from '../../vuex/store'

    export default {
        store,
        name: 'HelloWorld',
        components: { Hello, World }
    }
</script>

<style scoped>

</style>
