<template>
    <div>

        <slot name="label"/>

        <div v-for="(item, index) in items"
             class="vuetiful-forms-repeater-item">
            <slot :item="item" :index="index"/>
            <button v-if="buttonOptions.showDeleteButton"
                    @click.prevent="items.splice(index, 1)"
                    class="vuetiful-forms-delete-item-button"
                    type="button">{{ deleteItemText }}
            </button>
        </div>

        <button v-if="buttonOptions.showAddButton"
                @click.prevent="$emit('add-item')"
                class="vuetiful-forms-add-item-button"
                type="button">
            <slot name="add-button">Add</slot>
        </button>

    </div>
</template>

<script>
    export default {
        name : "repeating-form-group",
        props: {
            items        : {},
            buttonOptions: {
                type   : Object,
                default: () => {
                    return {
                        deleteItemText  : 'Delete',
                        showDeleteButton: true,
                        showAddButton   : true,
                    }
                }
            }
        }
    }
</script>