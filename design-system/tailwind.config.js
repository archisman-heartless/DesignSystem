module.exports = {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
      "./.storybook/**/*.{js,ts,jsx,tsx}"
    ],
    darkMode: 'class',
    theme: {
      extend: {
        colors: {
          primary: { DEFAULT: '#3b82f6', dark: '#2563eb' },
          error: { DEFAULT: '#ef4444', dark: '#dc2626' },
          success: { DEFAULT: '#10b981', dark: '#059669' },
          warning: { DEFAULT: '#f59e0b', dark: '#d97706' },
          info: { DEFAULT: '#06b6d4', dark: '#0891b2' },
        },
      },
    },
    plugins: [],
  }