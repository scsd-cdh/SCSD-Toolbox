<template>
    <section class="flex gap-4 items-center justify-center">
        <Badge>Primary</Badge>
        <Badge variant="secondary">secondary</Badge>
        <Badge variant="destructive">destructive</Badge>
        <Badge variant="outline">outline</Badge>
    </section>
</template>

<script>
    import { Badge } from "@/components/badge"

    export default {
        components: {
            Badge,
        }
    }
</script>