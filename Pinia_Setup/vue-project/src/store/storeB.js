// Setup Store
import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const myStoreB = defineStore('counterB', () => {
    const count = ref(22);
    const double = computed(()=>{ return count.value * 2 });
    function increment(){
        return ++count.value
    }
    return {count, double, increment}
})