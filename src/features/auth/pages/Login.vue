<script setup lang="ts">
import UserForm from "../components/register/UserForm.vue";
import { reactive } from "vue";
import { email, minLength, required } from "@vuelidate/validators";
const formList = [
  {
    label: "Email Address",
    placeholder: "Enter your email.",
    type: "text",
    form: "email",
  },
  {
    label: "Password",
    placeholder: "Enter your password.",
    type: "password",
    form: "password",
  },
];

const form = reactive({
  email: "",
  password: "",
});

const rules = {
  email: { required, email },
  password: { required, minLength: minLength(8) },
};
</script>

<template>
  <div class="flex flex-row w-full lg:h-screen h-auto">
    <div
      class="flex w-full lg:w-1/2 lg:py-[40px] lg:px-[56px] p-[16px] flex-col justify-center items-center"
    >
      <div class="w-full max-w-[500px] h-full flex items-center justify-center">
        <UserForm
          :form-list="formList"
          :rules="rules"
          :form="form"
          title="Welcome back"
          description="It’s free to start. No credit card required."
          button="Sign In"
        />
      </div>
    </div>
    <div class="hidden lg:flex w-1/2 bg-gray-100 items-center justify-center">
      image
    </div>
  </div>
</template>

<style scoped></style>
