export default ({ command }) => ({
  base: "/",
  test: {
    environment: "jsdom",
    globals: true,
  },
});
