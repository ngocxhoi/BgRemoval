export default defineNuxtRouteMiddleware(async (to, from) => {
  const { status } = useAuth();
  if (status.value === "authenticated") {
    if (to.path == "/login" || to.path == "/signup") {
      return abortNavigation();
    }
  }

  if (status.value == "unauthenticated") {
    if (to.path === "/login" || from.path === "/" || to.path == "/signup")
      return;
    if (from.path !== "/login") {
      return await navigateTo("/login");
    }
  }
});

// export default defineNuxtRouteMiddleware(async (to, from) => {
//   const { status } = useAuth();

//   if (status.value == "unauthenticated" && to.path == "/login") return;
//   else await navigateTo("/");

//   if (status.value !== "authenticated") {
//     // Redirect to the login page if user is not authenticated
//     return await navigateTo("/login");
//   }
// });
