<template>
    <div>

        <slot name="label"/>

        <div v-for="(item, index) in items">
            <slot :item="item" :index="index"/>
            <button v-if="buttonOptions.showDeleteButton" class="vuetiful-forms-delete-item-button" @click.prevent="items.splice(index, 1)">{{ deleteItemText }}</button>
        </div>

        <button v-if="buttonOptions.showDeleteButton" class="vuetiful-forms-add-item-button" @click.prevent="$emit('add-item')">
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