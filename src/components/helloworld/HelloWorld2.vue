<template>
    <span>{{testData}}</span>
</template>

<script>
    export default {
        name: "HelloWorld2",
        computed: {
            testData: function(){
                return this.$store.state.testData
            }
        }
    }
</script>

<style scoped>

</style>
