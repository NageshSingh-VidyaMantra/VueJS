import storeB from './storeB';
import { defineStore, storeToRefs } from 'pinia';

export default defineStore('storeC', () => {
    console.log('I am store C')
    const { countB } = storeToRefs(storeB());
    function mutateB(){
        countB.value = countB.value-5;
    }
    return { mutateB }
})