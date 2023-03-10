import { faker } from "@faker-js/faker";
import {ref } from "vue";

export function useFakerFullName() {
    // State encapsulated and managed by the composable
    const firstName = ref("Aron");
    const lastName = ref("Hills");
    // A composable can pdate its managed state over time
    firstName.value = faker.name.firstName();
    lastName.value = faker.name.lastName();
    return { firstName, lastName }
}