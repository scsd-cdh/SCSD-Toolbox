<template>
    <section>
        <Table>
            <TableCaption>Contacts list</TableCaption>
            <TableHeader>
                <TableRow>
                    <TableHead>First Name</TableHead>
                    <TableHead>Last Name</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Status</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody class="text-left">
                <TableRow>
                    <TableCell>John</TableCell>
                    <TableCell>Doe</TableCell>
                    <TableCell>abc@gmail.com</TableCell>
                    <TableCell>
                        <Badge>Active</Badge>
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>Jane</TableCell>
                    <TableCell>Doe</TableCell>
                    <TableCell>fcg@gmail.com</TableCell>
                    <TableCell>
                        <Badge variant="destructive">Inactive</Badge>
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>John</TableCell>
                    <TableCell>Smith</TableCell>
                    <TableCell>pol@gmail.com</TableCell>
                    <TableCell>
                        <Badge>Active</Badge>
                    </TableCell>
                </TableRow>
            </TableBody>
        </Table>
    </section>
</template>

<script>
    import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
    TableCaption,
  } from '@/components/table'
    import { Badge } from '@/components/badge'

    export default {
        components: {
            Table,
            TableBody,
            TableCell,
            TableHead,
            TableHeader,
            TableRow,
            TableCaption,
            Badge,
        }
    }
</script>