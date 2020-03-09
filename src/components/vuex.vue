<template lang= "html">
    <div class="vuex">
        vuex  {{$store.state.count}}
        <button @click="increment">增加</button>
        <button @click="decrement">减少</button>
    </div>
</template>
<script>
import {mapActions} from 'vuex'
export default {
    methods: mapActions([
        'increment',
        'decrement'
    ])
}
</script>