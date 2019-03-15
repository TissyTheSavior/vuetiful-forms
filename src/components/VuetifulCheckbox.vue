<template>
    <label>
        <input @change="handleInput" :value="value" type="checkbox">
        <span>
            <slot/>
            <error :error="error"></error>
        </span>
    </label>
</template>

<script>
    import BaseInput from "./BaseInput";
    import Error     from "./Error";

    export default {
        name: "VuetifulCheckbox",
        components: { Error },
        extends: BaseInput,

        methods: {
            handleInput(event) {
                this.$emit('input', event.target.checked);
            }
        },
    }
</script>

<style scoped lang="scss">

</style>
