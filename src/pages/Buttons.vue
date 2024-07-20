<template>
    <section class="flex gap-4 items-center justify-center">
        <Button>Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="link">Link</Button>
        <Button variant="destructive">Destructive</Button>
        <Button variant="ghost">ghost</Button>
        <Button variant="secondary">
            <House class="w-4 h-4"/>
        </Button>
        <Button>
            <Mail class="w-4 h-4 mr-2"/>Icon
        </Button>

    </section>
</template>

<script>
    import { Button } from "@/components/button"
    import { House } from 'lucide-vue-next'
    import { Mail } from 'lucide-vue-next'

    export default {
        components: {
            Button,
            House,
            Mail,
        }
    }
</script>