<template>
    <div>
        <div>
            <slot/>
            <error :error="error"></error>
        </div>
        <button @click.prevent="open" type="button" class="vuetiful-select-button">
            {{ placeholder }}
        </button>
        <ul v-if="showOptions">
            <li v-for="option in options" class="vuetiful-option">
                <button @click.prevent="select(option)" type="button">
                    <slot name="options" :option="option">
                        {{ option }}
                    </slot>
                </button>
            </li>
        </ul>
    </div>
</template>

<script>
    import BaseInput from "./BaseInput";
    import Error     from "./Error";

    export default {
        name   : "VuetifulSelect",
        components: { Error },
        extends: BaseInput,
        props  : {
            options: {
                type: Array,
            }
        },

        computed: {
            placeholder() {
                return this.selected ? this.selected : this.options[0];
            }
        },

        data() {
            return {
                showOptions: false,
                selected   : null,
            };
        },

        methods: {
            open() {
                this.showOptions = true;
            },

            select(option) {
                this.selected = option;
                this.showOptions = false;
                this.$emit('input', this.selected);
            },
        },
    }
</script>

<style scoped lang="scss">

</style>
