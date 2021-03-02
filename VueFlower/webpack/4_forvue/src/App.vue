<template>
    <p>
        {{ msg }}
    </p>
</template>

<script scoped>
    export default {
        name: 'App',
        data() {
            return {
                msg: 'Come from Vue.'
            }
        }
    }
</script>

<style scoped>
    p {
        margin: 30px;
    }
</style>