<template>
    <div class="flex justify-center items-center space-x-4">
        <SuccessButton />
        <WarningButton />
        <FailButton text="Problem" />
    </div>
</template>

<script>
    import SuccessButton from '../components/Buttons/SuccessButton.vue';
    import WarningButton from '../components/Buttons/WarningButton.vue';
    import FailButton from '../components/Buttons/FailButton.vue';

    export default {
        components: {
            SuccessButton,
            WarningButton,
            FailButton,
        }
    }
</script>