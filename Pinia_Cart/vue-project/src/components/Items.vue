<script setup>
import {ref} from 'vue'
defineProps(["itemName", "itemPrice"])
const qty = ref(0)
</script>

<template>
    <section class="w-[900px] m-8">
        <div class="px-20 p-10 bg-[#222] text-white flex justify-between items-center rounded-xl border-2 border-[#222] hover:border-2 hover:border-teal-400 transition-all">
            <div>
                <h1 class="text-center"><i class="text-5xl fa-solid text-teal-400 " :class="itemName" ></i></h1>
                <h1 class="mt-8 text-2xl"><span><i class="fa-solid fa-indian-rupee-sign text-teal-400"></i></span> {{ itemPrice }} / Item</h1>
            </div>
            <div class="flex flex-col">
                <div>
                    <button class="active:scale-90 transition-all shadow-lg shadow-black bg-teal-400 p-2 mx-5 text-black w-[50px] font-extrabold rounded-lg text-2xl">+</button>
                    <button class="active:scale-90 transition-all shadow-lg shadow-black bg-teal-400 p-2 mx-5 text-black w-[50px] font-extrabold rounded-lg text-2xl">-</button>
                </div>
                <p class="text-center text-xl mt-8 text-white"><span class="text-3xl">Q</span>ty &nbsp; <span class="text-2xl">{{qty}}</span></p>
            </div>
            <div class="flex flex-col">
                <h1 class="text-2xl"><span class="text-4xl text-teal-400">T</span>otal</h1>
            <h1 class="mt-8 text-2xl"><span><i class="fa-solid fa-indian-rupee-sign text-teal-400"></i></span> {{ itemPrice }}</h1>
            </div>
        </div>
    </section>
</template>