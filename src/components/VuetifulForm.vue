<template>
    <form @submit.prevent="handleSubmit">
        <h3>
            <slot name="form-title"></slot>
        </h3>
        <slot></slot>
        <button type="submit" :disabled="disableForm">
            <slot name="button-text">Submit</slot>
        </button>
    </form>
</template>

<script>
    export default {
        name      : "vuetiful-form",
        props     : {
            form: {},
            indicator: {
                default: true,
            },
        },

        data() {
            return {
                disableForm: false,
            }
        },

        methods: {
            handleSubmit() {
                this.disableForm = true;

                this.form.validate();

                if(this.form.validator.fails()) {
                    return this.disableForm = false;
                }

                this.$emit('startSubmit');

                this.form.submit()
                    .then(response => this.$emit('success', response))
                    .catch(error => this.$emit('error', error));

            },
        }
    }
</script>

<style scoped>

</style>