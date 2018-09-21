<template>
    <form class="vuetiful-form" @submit.prevent="onSubmit">
        <slot></slot>
        <button class="vuetiful-button" type="submit" :disabled="disableForm">
            <slot name="button-text">Submit</slot>
        </button>
    </form>
</template>

<script>
    export default {
        name : "vuetiful-form",
        props: {
            form: {},
        },

        data() {
            return {
                disableForm: false,
            }
        },

        methods: {
            onSubmit() {
                this.disableForm = true;

                this.form.validate();

                if(this.form.validator.fails()) {
                    return this.disableForm = false;
                }

                this.submitForm()
            },

            submitForm() {
                this.$emit('startSubmit');

                return this.form.submit()
                    .then(response => this.$emit('success', response))
                    .catch(error => this.$emit('error', error));
            }

        }
    }
</script>