<script setup lang="ts">
import UserForm from "../components/register/UserForm.vue";
import {reactive} from "vue";
import {email, minLength, required} from "@vuelidate/validators";
const formList = [
  {
    label: "Full Name",
    placeholder: "Enter your name.",
    type: "text",
    form: "name",
  },
  {
    label: "Phone",
    placeholder: "Enter your phone.",
    type: "text",
    form: "phone",
  },
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
  name: "",
  phone: "",
  email: "",
  password: "",
  acceptTerms: true,
});

const rules = {
  name: { required },
  phone: { required },
  email: { required, email },
  password: { required, minLength: minLength(8) },
};
</script>

<template>
  <div class="flex flex-row w-full lg:h-screen h-auto ">
    <div
        class="flex w-full lg:w-1/2 lg:py-[40px] lg:px-[56px] p-[16px] flex-col justify-center items-center  "
    >
      <div class="w-full max-w-[500px] h-full flex items-center justify-center">
        <UserForm :form-list="formList" :rules="rules" :form="form"
                  title="Create Your Account"
                  description="It’s free to start. No credit card required."
                  button="Sign Up"
        />
      </div>
    </div>
    <div class="hidden lg:flex w-1/2 bg-gray-100 items-center justify-center">
      image
    </div>
  </div>
</template>

<style scoped></style>