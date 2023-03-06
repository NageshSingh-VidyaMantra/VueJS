<script setup lang="ts">
defineProps({
    button: String
})
</script>
<template>
    <button class="m-5 bg-[#111] p-3 rounded-md shadow-lg shadow-[#111] active:bg-[#222]">{{ button }}</button>
</template>