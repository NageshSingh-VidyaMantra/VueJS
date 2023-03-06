<script setup>
/*
// Props Validation
defineProps({
    childName: String
    fullName: {
        type: String,
        required: true,
        default: 'Anna Tenison'
    },
    id: [Sting, NUumber],
    greet: {
        type: Function,
        default(){return 'Hello'}
    }
})
*/

// OR
// Props NO Validation
defineProps(['childName'])
</script>

<template>
    <div class="my-5 bg-[#111] p-5 font-bold text-xl rounded-lg shadow-sm shadow-lime-400">
        <p>Hi, I am Child from ComponentA name <span class="text-lime-400"> {{ childName }} </span></p>
    </div>
</template>