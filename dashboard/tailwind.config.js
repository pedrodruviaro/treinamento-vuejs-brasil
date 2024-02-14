import { palette } from './palette'

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        regular: ['RobotoRegular'],
        medium: ['RobotoMedium'],
        bold: ['RobotoBold'],
        black: ['RobotoBlack']
      },
      colors: palette
    }
  },
  plugins: []
}
