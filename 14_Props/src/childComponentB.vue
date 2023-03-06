<script setup>
import {ref, computed} from 'vue'
const props = defineProps(["firstName", "middleName", "lastName"]);
console.log(props.firstName)
console.log(props.middleName)
console.log(props.lastName)
// props.lastName = 'Sharma' // target is read only.

//Below way, you can only use as LOCAL Data Property, It is disconnected from future prop updates.
const lName = ref(props.lastName)


//Below way, you can only use as Computed Property, It auto-updates from future prop updates.
const mName = computed(() => props.middleName+' Ji')
</script>

<template>
  <div
    class="my-5 bg-[#111] p-5 font-bold text-xl rounded-lg shadow-sm shadow-lime-400"
  >
    <p>
      Hi, I am
      <span class="text-lime-400">
        {{ firstName }} {{ mName }} {{ lName }}
      </span>
    </p>
  </div>
</template>
