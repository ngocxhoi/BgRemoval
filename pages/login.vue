<template>
  <div class="flex min-h-[80vh] flex-col justify-center px-6 py-12 lg:px-8">
    <div class="sm:mx-auto sm:w-full sm:max-w-sm">
      <div class="logo-plan flex justify-center">
        <svg
          viewBox="0 0 70.00000000000006 60.61805555555556"
          class="h-auto w-12"
        >
          <defs id="SvgjsDefs2013"></defs>
          <g
            id="SvgjsG2014"
            featurekey="G09qjj-0"
            transform="matrix(0.7777777777777778,0,0,0.7777777777777778,-3.888888888888889,-8.57986111111111)"
            fill="#550c55"
          >
            <path
              xmlns="http://www.w3.org/2000/svg"
              style="
                text-indent: 0;
                text-transform: none;
                direction: ltr;
                enable-background: accumulate;
              "
              d="M 50 11.03125 L 48.375 13.84375 L 44.65625 20.3125 L 44.125 21.25 L 44.65625 22.1875 L 70.40625 66.78125 L 46.75 66.78125 L 45.65625 66.78125 L 45.125 67.71875 L 41.40625 74.21875 L 39.78125 77 L 43 77 L 84.875 77.03125 L 88.09375 77 L 86.46875 74.1875 L 51.625 13.84375 L 50 11.03125 z M 43.09375 23 L 41.46875 25.8125 L 6.625 86.1875 L 5 88.96875 L 8.25 88.96875 L 15.71875 88.96875 L 16.8125 88.96875 L 17.34375 88.03125 L 43.09375 43.4375 L 54.9375 63.90625 L 55.4375 64.84375 L 56.53125 64.84375 L 64 64.84375 L 67.25 64.84375 L 65.625 62.0625 L 44.71875 25.8125 L 43.09375 23 z M 42.96875 47.125 L 41.375 49.9375 L 20.4375 86.15625 L 18.8125 88.96875 L 22.0625 88.96875 L 91.78125 88.96875 L 95 88.96875 L 93.375 86.15625 L 89.65625 79.6875 L 89.09375 78.75 L 88.03125 78.75 L 36.53125 78.75 L 48.34375 58.28125 L 48.875 57.34375 L 48.34375 56.40625 L 44.59375 49.9375 L 42.96875 47.125 z "
              fill="#550c55"
              fill-opacity="1"
              fill-rule="nonzero"
              stroke="none"
              marker="none"
              visibility="visible"
              display="inline"
              overflow="visible"
            ></path>
          </g>
        </svg>
      </div>

      <HomeTitle title="Sign in to your account" />
      <p class="text-center mt-1 duration-300">
        Don't have an account yet?
        <a class="text-indigo-600" href="/signup">Sign up</a>
      </p>
    </div>

    <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <UForm
        :state="credentials"
        :schema="loginSchema"
        @submit.prevent="handleSubmit"
        @error="handleError"
        class="space-y-6"
      >
        <div>
          <label
            for="email"
            class="block text-sm font-medium leading-6 text-gray-900 dark:text-white"
            >Email address</label
          >
          <div class="mt-2">
            <input
              v-model="credentials.email"
              id="email"
              name="email"
              type="email"
              autocomplete="email"
              required
              class="block px-2 w-full rounded-md border-0 py-1.5 text-gray-900 dark:text-white shadow-sm dark:shadow-gray-400 ring-1 ring-inset ring-gray-300 placeholder:text-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 bg-transparent"
            />
            <p v-if="errors?.email" class="text-red-500 text-sm">
              {{ errors.email }}
            </p>
          </div>
        </div>

        <div>
          <div class="flex items-center justify-between">
            <label
              for="password"
              class="block text-sm font-medium leading-6 text-gray-900 dark:text-white"
              >Password</label
            >
            <div class="text-sm">
              <a
                href="#"
                class="font-semibold text-indigo-600 hover:text-indigo-500"
                >Forgot password?</a
              >
            </div>
          </div>
          <div class="mt-2">
            <input
              v-model="credentials.password"
              id="password"
              name="password"
              type="password"
              required
              class="block px-2 w-full rounded-md border-0 py-1.5 text-gray-900 dark:text-white shadow-sm dark:shadow-gray-400 ring-1 ring-inset ring-gray-300 placeholder:text-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 bg-transparent"
            />
            <p v-if="errors?.password" class="text-red-500 text-sm">
              {{ errors.password }}
            </p>
          </div>
        </div>

        <button
          type="submit"
          class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Sign in
        </button>

        <button
          @click="handleSignInWithGoogle()"
          class="w-full py-2 border flex justify-center gap-2 border-slate-200 dark:border-slate-700 rounded-lg text-slate-700 dark:text-slate-200 hover:border-slate-400 dark:hover:border-slate-500 hover:text-slate-900 dark:hover:text-slate-300 hover:shadow"
        >
          <img
            class="w-6 h-6"
            src="https://www.svgrepo.com/show/475656/google-color.svg"
            loading="lazy"
            alt="google logo"
          />
          <span>Login with Google</span>
        </button>
      </UForm>

      <p class="mt-10 text-center text-sm text-gray-500">
        Not a member?
        <a
          href="#"
          class="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
          >Start a 14 day free trial</a
        >
      </p>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { type LoginSchema, loginSchema } from "~/schema/zod";
import type { FormErrorEvent, FormSubmitEvent } from "#ui/types";
useSeoMeta({
  title: "Login",
});

const { signIn } = useAuth();
const credentials = reactive({
  email: "D4Fy3@example.com",
  password: "123123123",
});
const errors = ref({
  email: "",
  password: "",
});

async function handleSignInWithGoogle() {
  await signIn("google", { callbackUrl: "/" });
}

async function handleSubmit(event: FormSubmitEvent<LoginSchema>) {
  try {
    await signIn("credentials", {
      ...event.data,
      callbackUrl: "/",
    });
  } catch (error: any) {
    throw showError(error);
  }
}

function handleError(event: FormErrorEvent) {
  resetError();
  event.errors.forEach((err) => {
    errors.value[err.path as keyof typeof errors.value] = err.message;
  });
}

function resetError() {
  errors.value.email = "";
  errors.value.password = "";
}
</script>
