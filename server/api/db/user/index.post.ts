import { prisma } from "../prisma";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  const user = await prisma.user.create({
    data: {
      ...body,
      passwordConfirm: undefined,
    },
  });

  return user;
});
