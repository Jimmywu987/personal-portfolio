/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./src/**/*.{html,js,svelte,ts}",
    // 2. Append the path for the Skeleton NPM package and files:
    require("path").join(
      require.resolve("@skeletonlabs/skeleton"),
      "../**/*.{html,js,svelte,ts}"
    ),
  ],

  theme: {
    extend: {
      colors: {
        dark: {
          text: "#f8fdfe",
        },
        light: {
          text: "#000000b3",
        },
        theme: {
          color: "#ff3e00",
        },
      },
    },
  },
  plugins: [
    // 3. Append the Skeleton plugin to the end of this list
    ...require("@skeletonlabs/skeleton/tailwind/skeleton.cjs")(),
  ],
};
