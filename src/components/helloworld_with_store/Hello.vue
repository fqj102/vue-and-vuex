<template>
    <span>Hello</span>
</template>

<script>
    export default {
        name: "Hello",

        //생성시점에 데이터 세팅
        created: function() {
            this.$store.commit('helloworld/setWorld', 'World')
        }
    }
</script>
