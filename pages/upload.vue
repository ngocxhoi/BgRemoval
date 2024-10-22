<template>
  <div
    @drop.prevent="handleDrop($event)"
    @dragover.prevent=""
    class="min-h-[80vh] flex items-center justify-center flex-col text-center"
  >
    <HomeTitle>
      Upload an image to <br />
      remove the background
    </HomeTitle>

    <div class="flex items-center justify-center my-16">
      <label for="upload">
        <div
          class="flex items-center gap-2 w-fit px-8 cursor-pointer rounded-full py-2.5 bg-gradient-to-r from-violet-600 to-fuchsia-500 hover:opacity-90 duration-500 text-white font-bold text-lg"
        >
          <Icon name="heroicons:arrow-up-tray-20-solid" size="24" />
          <span>Upload Image</span>
        </div>
      </label>
      <input
        ref="uploadInput"
        @change="onChange($event)"
        type="file"
        name="image"
        accept="image/*"
        hidden
        id="upload"
      />
    </div>

    <p class="my-4 text-lg font-semibold">Or drop a file to upload</p>

    <div class="mt-4">
      <div>
        <div class="max-w-md mt-12">
          <div class="flex flex-col gap-2 justify-between items-center">
            <div class="flex flex-row sm:!flex-col sm:justify-center">
              <span class="font-bold text-center"
                >No image? Try one of these:</span
              >
            </div>
            <div class="flex gap-2 size-fit">
              <img
                v-for="img in imgPreview"
                :key="img.id"
                :src="img.image"
                class="size-16 rounded-xl"
                alt=""
              />
            </div>
          </div>
          <p class="text-xs !mt-4 text-center">
            By uploading an image or URL you agree to our
            <a
              target="_blank"
              class="underline hover:text-blue-400"
              draggable="false"
              href="/tos"
              >Terms of Service</a
            >. To learn more about how remove.bg handles your personal data,
            check our
            <a
              target="_blank"
              rel="noopener"
              class="underline hover:text-blue-400"
              href="/privacy"
              >Privacy Policy</a
            >.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
useSeoMeta({
  title: "Upload",
});

const imgPreview = [
  {
    id: 1,
    image: "https://picsum.photos/200?random=1",
  },
  {
    id: 2,
    image: "https://picsum.photos/200?random=2",
  },
  {
    id: 3,
    image: "https://picsum.photos/200?random=3",
  },
  {
    id: 4,
    image: "https://picsum.photos/200?random=4",
  },
];
const { data: user, refresh } = useAuth();
const uploadInput = ref();
const fileDisplay = useState<string | null>("fileDisplay");
const imgName = useState<string | null>("imgName");
const fileResult = useState<string | null>("fileResult");
const isRemoving = useState<boolean>("isRemoving", () => false);

async function onChange(e: Event) {
  const target = e.target as HTMLInputElement;
  const file = target.files?.item(0);

  if (!file) return;
  if (user.value?.user.creditBalance == 0) {
    useToast().add({
      title: "You don't have enough credit",
      color: "red",
      icon: "i-heroicons-exclamation-triangle",
      callback: () => navigateTo("/buy-credit"),
    });
    return;
  }

  const formData = new FormData();
  formData.append("file", file);

  fileDisplay.value = URL.createObjectURL(file);
  navigateTo("/result");

  try {
    isRemoving.value = true;
    const { data } = await useFetch("/api/db/image", {
      method: "POST",
      body: formData,
      watch: false,
    });

    if (!data.value) throw new Error("Can't remove background");

    useFetch("/api/db/user", {
      method: "PUT",
      body: {
        email: user.value?.user.email,
        creditBalance: user.value?.user.creditBalance - 1,
      },
      watch: false,
    });

    refresh();

    imgName.value = file.name;
    fileResult.value = data.value;
  } catch (error: any) {
    throw showError(error);
  } finally {
    isRemoving.value = false;
  }
}

async function handleDrop(e: DragEvent) {
  const file = e.dataTransfer?.files[0];
  if (!file) return;
  if (user.value?.user.creditBalance == 0) {
    useToast().add({
      title: "You don't have enough credit",
      color: "red",
      icon: "i-heroicons-exclamation-triangle",
      callback: () => navigateTo("/buy-credit"),
    });
    return;
  }

  const formData = new FormData();
  formData.append("file", file);

  fileDisplay.value = URL.createObjectURL(file);
  navigateTo("/result");

  try {
    isRemoving.value = true;
    const { data } = await useFetch("/api/db/image", {
      method: "POST",
      body: formData,
      watch: false,
    });

    if (!data.value) throw new Error("Can't remove background");

    useFetch("/api/db/user", {
      method: "PUT",
      body: {
        email: user.value?.user.email,
        creditBalance: user.value?.user.creditBalance - 1,
      },
      watch: false,
    });

    refresh();

    imgName.value = file.name;
    fileResult.value = data.value;
  } catch (error: any) {
    throw showError(error);
  } finally {
    isRemoving.value = false;
  }
}

onMounted(() => {
  uploadInput.value.click();
});
</script>
