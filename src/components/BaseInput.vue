<script>
    export default {
        name: "BaseInput",
        props: {
            value: {},
            error: {
                default: '',
            },
            inputName: {}
        },
        methods: {
            handleInput(event) {
                this.$emit('input', event.target.value);
            }
        }
    }
</script>
