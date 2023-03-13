// Setup Store
import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const myStoreA = defineStore('counterA', () => {
    const count = ref(25);
    const double = computed(()=>{ return count.value * 2 });
    function increment(){
        return ++count.value
    }
    return {count, double, increment}
})