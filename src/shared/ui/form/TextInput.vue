<script setup lang="ts">
import { computed, ref } from "vue";

const props = defineProps<{
  label: string;
  type: string;
  placeholder: string;
  modelValue?: string;
  error?: boolean;
  errorMessage?: string;
}>();

const emit = defineEmits<{
  'update:modelValue': [value: string]
}>();

const isPasswordVisible = ref(false);

const togglePasswordVisibility = () => {
  isPasswordVisible.value = !isPasswordVisible.value;
};

const inputType = computed(() => {
  if (props.type === "password") {
    return isPasswordVisible.value ? "text" : "password";
  }
  return props.type || "text";
});

const handleInput = (event: Event) => {
  const target = event.target as HTMLInputElement;
  emit('update:modelValue', target.value);
};
</script>

<template>
  <div class="flex flex-col items-start gap-[6px] w-full">
    <label class="text-[#101010] text-[14px] font-[500] leading-[150%]">
      {{ props.label }}
    </label>

    <div class="relative w-full">
      <input
          :type="inputType"
          :placeholder="props.placeholder"
          :value="modelValue"
          @input="handleInput"
          :class="[
          'flex w-full p-[12px] items-center gap-[8px] rounded-[10px] border bg-white shadow-[0_1px_2px_0_rgba(16,24,20,0.05)] text-[14px]',
          error ? 'border-red-500 focus:border-red-500' : 'border-[#EDEDED] focus:border-[#5A8072]',
          props.type === 'password' ? 'pr-[45px]' : ''
        ]"
      />
      <button
          v-if="props.type === 'password'"
          type="button"
          @click="togglePasswordVisibility"
          class="absolute right-[12px] top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 transition-colors"
      >
        <img
            :src="isPasswordVisible ? '/icons/eye.svg' : '/icons/eye.svg'"
            width="20"
            height="13"
            alt="toggle password visibility"
        />
      </button>
    </div>

    <span
        v-if="error && errorMessage"
        class="text-red-500 text-[12px] font-[400]"
    >
      {{ errorMessage }}
    </span>
  </div>
</template>

<style scoped></style>