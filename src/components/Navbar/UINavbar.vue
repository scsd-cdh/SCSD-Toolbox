<template>
    <nav class="bg-blue-700 p-4 text-white flex justify-between items-center">

        <section class="flex items-center space-x-4">
            <img src="@/assets/scsd.png" alt="SCSD Logo" class="w-16 h-auto">
            <div>
                <div class="text-xl">{{ currentDate }}</div>
                <div>{{ currentTime }}</div>
            </div>
        </section>

        <section>
            <h1 class="text-white text-2xl font-bold">SCSD Vue.js UI Components Library</h1>
        </section>

        <section class="space-x-4">
            <router-link to="/" class="text-white hover:text-blue-300">Home</router-link>
            <router-link to="/Buttons" class="text-white hover:text-blue-300">Buttons</router-link>
            <router-link to="/Tables" class="text-white hover:text-blue-300">Tables</router-link>
            <router-link to="/Graphs" class="text-white hover:text-blue-300">Graphs</router-link>
        </section>

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
            return now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true });
        },
        updateDateTime() {
            this.currentDate = this.getCurrentDate();
            this.currentTime = this.getCurrentTime();
        },
    },
    mounted() {
        setInterval(this.updateDateTime, 1000); // Update date and time every minute
    },
};
</script>
