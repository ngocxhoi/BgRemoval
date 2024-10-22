<template>
  <div class="min-h-[80vh] text-center py-14 mb-10">
    <button
      class="border border-violet-600 text-violet-600 hover:bg-violet-600 hover:text-white duration-500 py-2 px-8 shadow-md rounded-full mb-6 mx-auto"
    >
      Our Plans
    </button>
    <HomeTitle title="Chose the plan that best fits your needs" />
    <div
      class="flex items-center justify-center gap-6 mt-6 flex-wrap text-left"
    >
      <div
        v-for="plan in plans"
        :key="plan.id"
        class="w-[300px] my-3 aspect-[9/12] shadow-md dark:shadow-gray-400 rounded-lg py-12 px-4 text-gray-700 hover:scale-105 duration-500"
        :class="{ 'w-[320px] border-2 border-blue-500': plan.id == 'Advanced' }"
      >
        <div class="logo-plan">
          <svg
            viewBox="0 0 370.00000000000006 60.61805555555556"
            class="h-auto w-32 sm:w-36 md:w-40"
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
        <p class="mt-3 font-semibold dark:text-white">{{ plan.id }}</p>
        <p class="text-sm dark:text-gray-400">{{ plan.desc }}</p>
        <p class="mt-6 dark:text-gray-400">
          <span class="text-3xl font-medium dark:text-white">{{
            plan.price
          }}</span
          >/ {{ plan.credits }} credits
        </p>
        <button
          class="w-full border-2 border-violet-600/0 bg-gray-800 text-white mt-8 rounded-md py-2 5 min-w-52 hover:opacity-90 duration-500"
          :class="{
            'bg-gradient-to-r from-violet-600 to-fuchsia-500 border-violet-600/100 font-semibold text-lg':
              plan.id == 'Advanced',
          }"
        >
          Buy Now
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
useSeoMeta({
  title: "Credit",
});

const plans = [
  {
    id: "Basic",
    price: 10,
    credits: 100,
    desc: "Best for personal use.",
  },
  {
    id: "Advanced",
    price: 50,
    credits: 500,
    desc: "Best for business use.",
  },
  {
    id: "Business",
    price: 250,
    credits: 5000,
    desc: "Best for enterprise use.",
  },
];
</script>
