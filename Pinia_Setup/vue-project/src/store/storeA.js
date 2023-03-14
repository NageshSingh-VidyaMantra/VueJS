// Setup Store
import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export default defineStore('counterA', () => {
    console.log('I am store A')
    const count = ref(25);
    const double = computed(()=>{ return count.value * 2 });
    function increment(){
        return ++count.value
    }
    return {count, double, increment}
})