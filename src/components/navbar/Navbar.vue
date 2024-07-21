<template>
    <nav class="bg-blue-900 p-4 text-white flex justify-between items-center">

        <section class="flex items-center space-x-4">
            <img src="@/assets/scsd.png" alt="SCSD Logo" class="w-16 h-auto">
            <div>
                <div class="text-xl">{{ currentDate }}</div>
                <div>{{ currentTime }}</div>
            </div>
        </section>

        <section>
            <h1 class="text-white text-2xl font-bold">{{ title }}</h1>
        </section>

        <section class="space-x-4 text-white">
            <router-link 
                v-for="link in links" :key="link.text" :to="link.to" 
                class="hover:text-blue-100"
                active-class="text-blue-300">
                {{ link.text }}
            </router-link>
        </section>

    </nav>
</template>

<script>
export default {
    name: "Navbar",
    props: {
        title: {
            type: String,
            default: "Navbar title",
        },
        links: {
            type: Array,
            default: () => [],
        },
    },
    data() {
        return {
            currentDate: this.getCurrentDate(),
            currentTime: this.getCurrentTime(),
        };
    },
    methods: {
        getCurrentDate() {
            const now = new Date();
            return now.toLocaleDateString("en-GB");
        },
        getCurrentTime() {
            const now = new Date();
            return now.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: true });
        },
        updateDateTime() {
            this.currentDate = this.getCurrentDate();
            this.currentTime = this.getCurrentTime();
        },
    },
    mounted() {
        setInterval(this.updateDateTime, 1000);
    },
};
</script>
