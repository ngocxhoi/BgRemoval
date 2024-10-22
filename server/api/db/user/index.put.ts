import { prisma } from "../prisma";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  const user = await prisma.user.update({
    where: {
      email: body.email,
    },
    data: {
      ...body,
      id: undefined,
      email: undefined,
    },
  });
});
