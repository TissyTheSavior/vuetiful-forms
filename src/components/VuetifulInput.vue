<template>
    <label class="vuetiful-input-wrapper">
        <div class="vuetiful-input-label">
            <slot/>
            <error :error="error"></error>
        </div>
        <input class="vuetiful-input" :value="value" @input="handleInput($event)" :type="type" :placeholder="placeholder" :name="inputName">
    </label>
</template>

<script>
    import Error     from "./Error";
    import BaseInput from "./BaseInput";

    export default {
        name      : "VuetifulInput",
        extends: BaseInput,
        components: { Error },
        props     : {
            type: {
                default: 'text',
            },

            placeholder: {
                default: '',
                type   : String,
            }
        },

        methods: {
            handleInput(event) {
                this.$emit('input', event.target.value);
            }
        }
    }
</script>

<style scoped>
    input[type="number"]::-webkit-outer-spin-button, input[type="number"]::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

    input[type="number"] {
        -moz-appearance: textfield;
    }
</style>