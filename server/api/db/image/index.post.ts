export default defineEventHandler(async (event) => {
  const form = await readMultipartFormData(event);
  const data = form?.find((field) => field.name === "file");

  if (!data) {
    throw createError({
      statusCode: 400,
      statusMessage: "No image file provided",
    });
  }

  const blobImg = new Blob([data.data]);

  const formData = new FormData();
  formData.append("image_file", blobImg, data.name);

  const apiKey = process.env.CLIPDROP_API ?? ""; // Đảm bảo lưu API key vào biến môi trường

  const response = await fetch("https://clipdrop-api.co/remove-background/v1", {
    method: "POST",
    headers: {
      "x-api-key": apiKey,
    },
    body: formData,
  });

  const buffer = await response.arrayBuffer();

  const base64Img = Buffer.from(buffer).toString("base64");

  const resultImg = `data:image/png;base64,${base64Img}`;

  return resultImg;
});
