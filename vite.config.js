export default ({ command }) => ({
  base: command === "build" ? "/Leonard-Atorough.github.io/" : "/",
  test: {
    environment: "jsdom",
    globals: true,
  },
});
