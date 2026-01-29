<script setup lang="ts">
import TextInput from "../../../../shared/ui/form/TextInput.vue";
 import { useVuelidate } from "@vuelidate/core";
const props = defineProps<{
  formList: {label: string , placeholder: string, type: string,form:string}[],
  form: object,
  rules: object,
  title:string,
  description:string,
  button: string

}>()



const v$ = useVuelidate(props.rules, props.form);

const handleSubmit = async () => {
  v$.value.$touch();
  if (v$.value.$invalid) {
    console.log("Form has errors");
    return;
  }
  console.log("submit", props.form);
};
</script>

<template>
  <div class="flex flex-col lg:items-start items-center gap-[16px] w-full">
    <img src="/logo/main.svg" width="180" height="54" alt="Logo" />

    <div class="flex flex-col lg:items-start items-center  gap-[8px]">
      <h1 class="text-[#101010] lg:text-[28px] text-[24px] font-[500] leading-[120%]">
        {{props.title}}      </h1>
      <p class="text-[#878787] text-[14px] font-[400] leading-[150%]">
{{
        props.description}}      </p>
    </div>

    <form
      @submit.prevent="handleSubmit"
      class="flex py-[20px] px-[20px] flex-col items-start gap-[20px] rounded-[20px] border border-[#EDEDED] bg-white w-full"
    >
      <div class="flex flex-col gap-[16px] w-full">
        <TextInput
          v-for="item in props.formList"
          :key="item.label"
          :label="item.label"
          :placeholder="item.placeholder"
          :type="item.type"
          v-model="form[item.form]"
          :error="v$[item.form].$error"
          :error-message="v$[item.form].$errors[0]?.$message"
        />
      </div>

      <button
        type="submit"
        class="flex h-[48px] py-[12px] px-[20px] flex-col items-center justify-center gap-[10px] rounded-[14px] bg-[#5A8072] w-full hover:bg-[#4a6b5e] transition-colors"
      >
        <span
          class="text-white items-center text-[14px] font-[500] leading-[150%] tracking-[-0.28px]"
        >
{{props.button}}
        </span>
      </button>

      <div class="flex w-full items-center justify-center">
        <p
          class="text-[#878787] text-center text-[12px] font-[400] leading-[150%]"
        >
          By clicking the button, you agree to our
          <span class="text-[#5A8072]">Terms</span>,
          <span class="text-[#5A8072]">Privacy Policy</span>
          and
          <span class="text-[#5A8072]">Security Policy</span
          >.
        </p>
      </div>
    </form>

    <div class="flex w-full items-center justify-center">
      <p class="text-[#101010] text-[14px] font-[400] leading-[150%]">
        Already have an account?
        <a href="#" class="text-[#5A8072] font-[500] hover:underline"
          >Sign In</a
        >
      </p>
    </div>
  </div>
</template>

<style scoped></style>
