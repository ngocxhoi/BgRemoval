<template>
  <div>
    <!-- Header -->
    <div
      class="flex items-center justify-between flex-col-reverse md:flex-row lg:justify-evenly gap-4 gap-y-10 mt-10 sm:mt-20"
    >
      <div class="w-full max-w-md shadow-lg dark:shadow-gray-400">
        <video src="/videos/manuel_compressed.mp4" class="rounded-lg"></video>
      </div>

      <div class="text-center md:text-left min-w-[350px]">
        <h1
          class="text-5xl 2xl:text-6xl font-bold text-neutral-700 leading-tight"
        >
          Remove the <br />
          <span
            class="bg-gradient-to-r from-violet-600 to-fuchsia-500 bg-clip-text text-transparent"
            >background</span
          >
          from <br />
          images for
          <span
            class="bg-gradient-to-r from-pink-600 to-fuchsia-500 bg-clip-text text-transparent"
            >free</span
          >
        </h1>
        <p class="my-6 text-base text-gray-500">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam, iure.
          <br />
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam, iure.
        </p>
        <div class="flex items-center justify-center md:justify-start">
          <NuxtLink to="/upload">
            <label for="upload">
              <div
                class="flex items-center gap-2 w-fit px-8 cursor-pointer rounded-full py-2.5 bg-gradient-to-r from-violet-600 to-fuchsia-500 hover:opacity-90 duration-500 text-white font-bold text-lg"
              >
                <Icon name="heroicons:arrow-up-tray-20-solid" size="24" />
                <span>Upload Image</span>
              </div>
            </label>
          </NuxtLink>
        </div>
      </div>
    </div>

    <!-- Steps -->
    <div class="py-20 xl:py-30">
      <HomeTitle>
        Step to remove background <br />
        image in second
      </HomeTitle>
      <div
        class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 mt-16 xl:mt-24"
      >
        <div
          class="flex items-start gap-4 bg-white dark:bg-gray-500 drop-shadow-md p-7 pb-10 rounded hover:scale-105 duration-500"
        >
          <div
            class="bg-gradient-to-r from-violet-600 to-fuchsia-500 p-3 rounded-xl"
          >
            <Icon
              name="heroicons:arrow-up-tray-20-solid"
              size="28"
              class="text-white"
            />
          </div>
          <div>
            <p class="text-xl font-medium">Upload image</p>
            <p class="text-sm text-neutral-500 dark:text-white mt-1">
              Upload your image
            </p>
          </div>
        </div>
        <div
          class="flex items-start gap-4 bg-white dark:bg-gray-500 drop-shadow-md p-7 pb-10 rounded hover:scale-105 duration-500"
        >
          <div
            class="bg-gradient-to-r from-violet-600 to-fuchsia-500 p-3 rounded-xl"
          >
            <Icon
              name="heroicons:x-mark-20-solid"
              size="28"
              class="text-white"
            />
          </div>
          <div>
            <p class="text-xl font-medium">Remove background</p>
            <p class="text-sm text-neutral-500 dark:text-white mt-1">
              Remove your image background
            </p>
          </div>
        </div>
        <div
          class="flex items-start gap-4 bg-white dark:bg-gray-500 drop-shadow-md p-7 pb-10 rounded hover:scale-105 duration-500"
        >
          <div
            class="bg-gradient-to-r from-violet-600 to-fuchsia-500 p-3 rounded-xl"
          >
            <Icon
              name="heroicons:arrow-down-tray-20-solid"
              size="28"
              class="text-white"
            />
          </div>
          <div>
            <p class="text-xl font-medium">Download image</p>
            <p class="text-sm text-neutral-500 dark:text-white mt-1">
              Download your image
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- BgSlider -->
    <div class="py-20 xl:py-30">
      <HomeTitle>
        Remove background with hight <br />
        quality and accuracy
      </HomeTitle>
      <div
        @mousemove="handleCurrentPosition"
        class="relative mx-auto w-fit mt-16 xl:mt-24 rounded-xl overflow-hidden"
      >
        <ClientOnly>
          <img
            src="/images/bg-caro-2.png"
            class="w-[700px] aspect-[16/9] object-cover absolute top-0 left-0"
            alt=""
          />
          <img
            src="/images/woman-1274056_1920.jpg"
            alt="primite-img"
            class="w-[700px] aspect-[16/9] object-cover"
            :style="{
              clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)`,
            }"
          />
          <img
            src="/images/woman-1274056_1920-removebg-preview.png"
            alt="removebg-img"
            class="w-[700px] aspect-[16/9] object-cover absolute top-0 left-0 border"
          />
        </ClientOnly>
      </div>
    </div>

    <!-- Testimonials -->
    <div class="py-20 xl:py-30">
      <HomeTitle title="Customer testimonials" />

      <div
        class="mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mt-16"
      >
        <div
          v-for="author in authors"
          :key="author.id"
          class="rounded-xl p-6 shadow-sm dark:shadow-gray-400 max-w-lg m-auto hover:scale-105 duration-500"
        >
          <p class="text-4xl text-gray-500">``</p>
          <p class="text-sm text-gray-500">{{ author.message }}</p>
          <div class="flex items-center gap-3 mt-5">
            <UAvatar :src="author.image" />
            <div>
              <p>{{ author.name }}</p>
              <p class="text-sm text-gray-600">{{ author.job }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Upload -->
    <div class="py-20 xl:py-30">
      <HomeTitle title="See the magic. Try it now." />

      <div class="flex items-center justify-center my-16">
        <label for="upload" @click="navigateTo('/upload')">
          <div
            class="flex items-center gap-2 w-fit px-8 cursor-pointer rounded-full py-2.5 bg-gradient-to-r from-violet-600 to-fuchsia-500 hover:opacity-90 duration-500 text-white font-bold text-lg"
          >
            <Icon name="heroicons:arrow-up-tray-20-solid" size="24" />
            <span>Upload Image</span>
          </div>
        </label>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: "Home",
});

const authors = [
  {
    id: 1,
    name: "John Doe",
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, iure.",
    image: "https://i.pravatar.cc/150?img=13",
    job: "CEO",
  },
  {
    id: 2,
    name: "Grace Vaughn",
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, iure.",
    image: "https://i.pravatar.cc/150?img=14",
    job: "Project Manager",
  },
];
const sliderPosition = ref(50);

function handleCurrentPosition(e: MouseEvent) {
  const target = e.target as HTMLElement;
  sliderPosition.value = (e.layerX / target.clientWidth) * 100;
}
</script>

<style></style>
