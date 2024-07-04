<template>
    <section>
        <Table>
            <TableCaption>Contacts list</TableCaption>
            <TableHeader>
                <TableRow>
                    <TableHead>First Name</TableHead>
                    <TableHead>Last Name</TableHead>
                    <TableHead>Email</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                <TableRow>
                    <TableCell>John</TableCell>
                    <TableCell>Doe</TableCell>
                    <TableCell>abc@gmail.com</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>Jane</TableCell>
                    <TableCell>Doe</TableCell>
                    <TableCell>fcg@gmail.com</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>John</TableCell>
                    <TableCell>Smith</TableCell>
                    <TableCell>pol@gmail.com</TableCell>
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

    export default {
        components: {
            Table,
            TableBody,
            TableCell,
            TableHead,
            TableHeader,
            TableRow,
            TableCaption,
        }
    }
</script>