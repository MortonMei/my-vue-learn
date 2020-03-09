<template>
    <div class="com">
        components
        {{name}} {{age}}
        <button type="button" name="button" @click="handleSubmit">发送到父组件</button>
        <slot></slot>
    </div>
</template>

<script>
export default {
    props: ['age'],
    data () {
        return{
            name: 'com'
        }
    },
    methods:{
        handleSubmit () {
            this.$emit('patch')
        }
    }
    
}
</script>

<style scoped>

</style>