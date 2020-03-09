<template lang="html">
    <div class="page">
        page a {{$store.state.money.money}}
        <button @click="add">增加</button>
        <button @click="reduce">减少</button>
    </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
    methods: mapActions('money', ['add', 'reduce'])
}
</script>

<style scoped>

</style>