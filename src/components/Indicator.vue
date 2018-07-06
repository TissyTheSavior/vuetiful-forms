<template>
    <div :class="['circle-loader', { 'is-shown': submitting }, { 'load-complete': success }]">
        <div class="checkmark draw"></div>
    </div>
</template>

<script>

    export default {
        name : "checkmark-indicator",
        props: {
            submitting: {},
            success   : {},
        }
    }
</script>

<style scoped lang="scss">
    $success: #7cb541;
    $loader-size: 1.75rem;
    $check-height: $loader-size/2.5;
    $check-width: $check-height/2.5;
    $check-left: ($loader-size/6 + $loader-size/12);
    $check-thickness: 2px;
    $check-color: $success;

    .circle-loader {
        position: absolute;
        z-index: 1;
        right: 6rem;
        bottom: -2.75rem;
        margin-bottom: $loader-size/2;
        border: 1px solid rgba(0, 0, 0, 0.2);
        border-left-color: $check-color;
        animation: loader-spin 1.2s infinite linear;
        vertical-align: top;
        border-radius: 50%;
        width: $loader-size;
        height: $loader-size;
        visibility: hidden;

        &.is-shown {
            display: inline-block;
        }
    }

    .checkmark {
        display: none;

        &.draw:after {
            animation-duration: 800ms;
            animation-timing-function: ease;
            animation-name: checkmark;
            transform: scaleX(-1) rotate(135deg);
        }

        &:after {
            opacity: 1;
            height: $check-height;
            width: $check-width;
            transform-origin: left top;
            border-right: $check-thickness solid $check-color;
            border-top: $check-thickness solid $check-color;
            content: '';
            left: $check-left;
            top: 50%;
            position: absolute;
        }
    }

    .load-complete {
        -webkit-animation: none;
        animation: none;
        border-color: $check-color;
        transition: border 500ms ease-out;

        .checkmark {
            display: block;
        }
    }

    @keyframes loader-spin {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }

    @keyframes checkmark {
        0% {
            height: 0;
            width: 0;
            opacity: 1;
        }
        20% {
            height: 0;
            width: $check-width;
            opacity: 1;
        }
        40% {
            height: $check-height;
            width: $check-width;
            opacity: 1;
        }
        100% {
            height: $check-height;
            width: $check-width;
            opacity: 1;
        }
    }
</style>