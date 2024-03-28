import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const useCounterStore = defineStore("counter", () => {
    /**
   * State
   */
    const count = ref(0);

    /**
   * Getters / Computed
   */
    const doubleCount = computed(() => count.value * 2);

    /**
   * Functions/ Actions
   */
    function increment() {
        count.value++;
    }

    function dynamicIncrement(value: number) {
        count.value += value;
    }

    return { count, doubleCount, increment, dynamicIncrement };
});
