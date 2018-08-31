<template>
    <span>
        World
        <br>
        {{testData}}
    </span>
</template>

<script>
    export default {
        name: "World",
        computed: {
            testData: function(){
                return this.$store.state.testData
            }
        }
    }
</script>

<style scoped>

</style>
