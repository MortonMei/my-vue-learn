<template lang="html">
    <div class="page">
        page b {{$store.state.count.count}}
        <button @click="add(2)">增加</button>
        <button type="button" name="button" @click="reduce">减少</button>
    </div>
</template>
<script>
import { mapActions } from 'vuex'
export default {
    methods:mapActions('count', ['add', 'reduce'])
}
</script>