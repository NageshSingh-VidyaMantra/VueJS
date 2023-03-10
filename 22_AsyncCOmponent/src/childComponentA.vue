<script setup>
import {inject} from 'vue';
const toggleChildA = inject("toggleChildA", false)
</script>

<template>
    <div v-show="toggleChildA" class="my-10 p-5 rounded-lg bg-[#222] text-center text-xl border-2 border-pink-300 shadow-lg shadow-[#111]">
        <p class="my-5">Hi, I am Child-A</p>
        <p class="my-5">I am already uploaded to client machine.</p>
        <p class="my-5">Even I was Hidden.</p>
    </div>
</template>