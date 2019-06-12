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
                this.$emit('beforeSubmit');
                this.disableForm = true;

                this.form.validate();

                if(this.form.validator.fails()) {
                    return this.disableForm = false;
                }

                this.submitForm();
            },

            submitForm() {
                this.$emit('startSubmit');

                let result = this.form.submit();

                if(typeof result.then === 'function') {
                    this.submitAsync(result);
                }
                else {
                    this.$emit('success', result);
                    this.disableForm = false;
                }
            },

            async submitAsync(result) {
                await result.then(response => this.$emit('success', response))
                    .catch(error => this.$emit('error', error));

                this.disableForm = false;
            }

        }
    }
</script>
