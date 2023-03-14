<script setup>
import {ref} from 'vue'
defineProps(["itemName", "itemPrice"])
</script>

<template>
    <section class="w-[550px] m-8">
        <div class="p-10 bg-[#222] text-white rounded-xl shadow-xl shadow-black hover:scale-105 transition-all space-y-8">
            <div class="flex justify-evenly items-center">
                <i class="text-6xl text-center fa-solid text-teal-400 " :class="itemName" ></i>
                <h1 class="text-2xl"><span><i class="fa-solid fa-indian-rupee-sign text-teal-400"></i></span> {{ itemPrice }}</h1>
            </div>
            <div class="flex justify-evenly items-center">
                <button class="active:scale-90 w-[150px]  transition-all shadow-lg shadow-black bg-teal-400 p-2 text-black rounded-lg text-2xl">Add </button>
                <button class="active:scale-90 w-[150px]  transition-all shadow-lg shadow-black bg-[#333] p-2 text-teal-400 border-2 border-teal-400 rounded-lg text-2xl">Remove</button>
            </div>
        </div>
    </section>
</template>