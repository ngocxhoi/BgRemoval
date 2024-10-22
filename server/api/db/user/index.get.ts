import { prisma } from "../prisma";

export default defineEventHandler(async (event) => {
  const query = getQuery(event);
  const { email } = query;

  const user = await prisma.user.findUnique({
    where: {
      email: email as string,
    },
  });

  return user;
});
