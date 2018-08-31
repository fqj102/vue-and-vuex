<template>
    <span>Hello</span>
</template>

<script>
    export default {
        name: "Hello",
        created: function() {
            this.$store.commit('setData', '데이터 세팅')
        }
    }
</script>

<style scoped>

</style>
