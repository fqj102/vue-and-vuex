<template>
    <span>{{world}}</span>
</template>

<script>
    export default {
        name: "World",

        //컴퓨트 속성으로 store에서 world 가져오기
        computed: {
            world: function(){
                return this.$store.state.world
            }
        }
    }
</script>
