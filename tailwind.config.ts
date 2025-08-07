import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary Colors
        'primary-blue': '#3161D1',
        'secondary-blue': '#5774A8',
        'light-blue': '#E7F5FF',
        'border-blue': '#deefff',
        
        // Background Colors
        'main-bg': '#f5f6fa',
        'card-bg': '#ffffff',
        'sidebar-bg': '#ffffff',
        
        // Text Colors
        'primary-text': '#202224',
        'subtle-text': '#5774a8',
        'brand-text': '#3161d1',
        'neutral-text': '#607CAD',
        'placeholder-text': '#ADB5BD',
        
        // Border Colors
        'light-border': '#eaeaea',
        'blue-border': '#deefff',
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
        'roboto': ['Roboto', 'sans-serif'],
        'euclid': ['Euclid Circular A', 'sans-serif'],
      },
      fontSize: {
        'xs': '14px',
        'sm': '16px',
        'md': '18px',
        'lg': '32px',
      },
      lineHeight: {
        'tight': '16px',
        'normal': '18px',
        'relaxed': '42px',
      },
      spacing: {
        'sidebar': '230px',
      },
    },
  },
  plugins: [],
};

export default config; 