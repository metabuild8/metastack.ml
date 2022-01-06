const { spacing, fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./src/pages/**/*.tsx",
    "./src/client/components/**/*.tsx",
    "./src/client/layouts/**/*.tsx",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter var", ...fontFamily.sans],
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme("colors.slate.700"),
            a: {
              color: theme("colors.blue.500"),
              "&:hover": {
                color: theme("colors.blue.700"),
              },
              code: { color: theme("colors.blue.400") },
            },
            "h2,h3,h4": {
              "scroll-margin-top": spacing[32],
            },
            thead: {
              borderBottomColor: theme("colors.slate.200"),
            },
            code: { color: theme("colors.pink.500") },
            "blockquote p:first-of-type::before": false,
            "blockquote p:last-of-type::after": false,
          },
        },
        dark: {
          css: {
            color: theme("colors.slate.200"),
            a: {
              color: theme("colors.blue.400"),
              "&:hover": {
                color: theme("colors.blue.600"),
              },
              code: { color: theme("colors.blue.400") },
            },
            blockquote: {
              borderLeftColor: theme("colors.slate.700"),
              color: theme("colors.slate.300"),
            },
            "h2,h3,h4": {
              color: theme("colors.slate.100"),
              "scroll-margin-top": spacing[32],
            },
            hr: { borderColor: theme("colors.slate.700") },
            ol: {
              li: {
                "&:before": { color: theme("colors.slate.500") },
              },
            },
            ul: {
              li: {
                "&:before": { backgroundColor: theme("colors.slate.500") },
              },
            },
            strong: { color: theme("colors.slate.100") },
            thead: {
              color: theme("colors.slate.100"),
              borderBottomColor: theme("colors.slate.600"),
            },
            tbody: {
              tr: {
                borderBottomColor: theme("colors.slate.700"),
              },
            },
          },
        },
      }),
    },
  },
  variants: {
    typography: ["dark"],
  },
  plugins: [require("@tailwindcss/typography")],
};
