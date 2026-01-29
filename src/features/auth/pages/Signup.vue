<script setup lang="ts">
import SignupForm from "../components/register/SignupForm.vue";
</script>

<template>
  <div class="flex flex-row w-full lg:h-screen h-auto ">
    <div
        class="flex w-full lg:w-1/2 lg:py-[40px] lg:px-[56px] p-[16px] flex-col justify-center items-center  "
    >
      <div class="w-full max-w-[500px] h-full flex items-center justify-center">
        <SignupForm />
      </div>
    </div>
    <div class="hidden lg:flex w-1/2 bg-gray-100 items-center justify-center">
      image
    </div>
  </div>
</template>

<style scoped></style>