// Setup Store
import { defineStore, storeToRefs } from 'pinia'
import myStoreA from './storeA';
import { ref, computed } from 'vue'


export default defineStore('counterB', () => {
    console.log('I am store B')
    const storeA = myStoreA();

    const { count: countA, double: doubleA } = storeToRefs(storeA);
    const countB = ref(countA.value + 10)
    const DAAddB = computed(() => {
        let num = doubleA.value;
        return (countB.value + num);
    })

    function funInB() {
        return --countB.value
    }
    return { countB, DAAddB, funInB }
})