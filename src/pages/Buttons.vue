<template>
    <section class="flex gap-4 items-center justify-center">
        <Button>Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="link">Link</Button>
        <Button variant="destructive">Destructive</Button>
        <Button variant="ghost">ghost</Button>
    </section>
</template>

<script>
    import { Button } from '@/components/Buttons'

    export default {
        components: {
            Button,
        }
    }
</script>