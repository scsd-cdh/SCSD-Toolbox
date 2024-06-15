<template>
    <nav class="bg-blue-700 p-4">
        <div class="flex justify-between items-center">
            <div class="text-white">
                <div class="text-xl">{{ currentDate }}</div>
                <div>{{ currentTime }}</div>
            </div>
            <div>
                <h1 class="text-white text-2xl font-bold">SCSD Vue.js UI Components Library</h1>
            </div>
            <div class="space-x-4">
                <router-link to="/" class="text-white hover:text-blue-300">Home</router-link>
                <router-link to="/Buttons" class="text-white hover:text-blue-300">Buttons</router-link>
                <router-link to="/Graphs" class="text-white hover:text-blue-300">Graphs</router-link>

            </div>
        </div>
        </nav>
</template>

<script>
export default {
    name: 'UINavbar',
    data() {
        return {
            currentDate: this.getCurrentDate(),
            currentTime: this.getCurrentTime(),
        };
    },
    methods: {
        getCurrentDate() {
            const now = new Date();
            return now.toLocaleDateString('en-GB');
        },
        getCurrentTime() {
            const now = new Date();
            return now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true });
        },
        updateDateTime() {
            this.currentDate = this.getCurrentDate();
            this.currentTime = this.getCurrentTime();
        },
    },
    mounted() {
        setInterval(this.updateDateTime, 60000); // Update date and time every minute
    },
};
</script>

<style>
/* You can add specific styles for the navbar here */
</style>