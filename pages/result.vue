<template>
  <div class="py-3 mt-14 min-h-[80vh]">
    <div
      class="bg-white rounded-lg px-8 py-6 shadow-sm flex flex-col items-center"
    >
      <div
        class="mx-auto grid sm:grid-cols-[repeat(2,minmax(200px,400px))] gap-8"
      >
        <div class="min-w-[300px]">
          <p class="font-semibold text-gray-600 mb-2">Original</p>
          <img
            class="rounded-md border"
            :src="fileDisplay ?? '/images/woman-1274056_1920.jpg'"
            alt=""
          />
        </div>

        <div class="min-w-[300px] h-full overflow-hidden">
          <p class="font-semibold text-gray-600 mb-2">Result</p>
          <div class="relative h-full overflow-hidden">
            <img
              src="/images/bg-caro-2.png"
              class="object-contain absolute top-0 left-0 z-0 scale-[2]"
              alt=""
            />
            <img
              v-if="fileResult || !isRemoving"
              :src="
                fileResult ?? '/images/woman-1274056_1920-removebg-preview.png'
              "
              class="relative z-10"
              alt=""
            />
            <div
              v-else-if="isRemoving"
              class="absolute top-0 left-0 size-full flex items-center justify-center"
            >
              <div
                class="size-12 border-4 border-blue-400 border-t-transparent rounded-full animate-spin"
              />
            </div>
          </div>
        </div>
      </div>

      <div
        class="flex justify-center sm:justify-end items-center flex-wrap gap-4 mt-10"
      >
        <button
          @click="navigateTo('/upload')"
          class="px-8 py-2 rounded-full border border-violet-600 text-violet-600 hover:scale-105 duration-500 font-bold text-lg"
        >
          Try another image
        </button>
        <a
          :href="fileResult ?? ''"
          :download="handleNameDownload()"
          class="flex items-center gap-2 w-fit px-8 cursor-pointer rounded-full py-2 bg-gradient-to-r from-violet-600 to-fuchsia-500 hover:opacity-90 duration-500 text-white font-bold text-lg"
          :class="{ 'pointer-events-none cursor-default': !fileDisplay }"
        >
          <Icon name="heroicons:arrow-down-tray-20-solid" size="24" />
          <span>Download Image</span>
        </a>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
useSeoMeta({
  title: "Result",
});

const fileDisplay = useState<string | null>("fileDisplay");
const imgName = useState<string | null>("imgName");
const fileResult = useState<string | null>("fileResult");
const isRemoving = useState<boolean>("isRemoving");

function handleNameDownload(): string {
  if (!imgName.value) return "";
  let name = "bg-removal_" + imgName.value;
  return name;
}

onUnmounted(() => {
  if (fileDisplay.value) URL.revokeObjectURL(fileDisplay.value);
  fileDisplay.value = null;
  fileResult.value = null;
  imgName.value = null;
  isRemoving.value = false;
});
</script>
