<template>
    <div>

        <slot name="label"/>

        <div v-for="(item, index) in items">
            <slot :item="item" :index="index"/>
            <button @click.prevent="items.splice(index, 1)">{{ deleteItemText }}</button>
        </div>

        <button @click.prevent="$emit('add-item')">{{ addItemText }}</button>

    </div>
</template>

<script>
    export default {
        name : "repeating-form-group",
        props: {
            items         : {},
            addItemText   : {
                default: 'Add'
            },
            deleteItemText: {
                default: 'Delete'
            }
        }
    }
</script>