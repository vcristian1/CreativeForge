/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "gray-20": "#F8F4EB",
        "gray-50": "#EFE6E6",
        "gray-100": "#DFCCCC",
        "gray-500": "#5E0000",
        "primary-100": "#FFE1E0",
        "primary-300": "#FFA6A3",
        "primary-500": "#FF6B66",
        "secondary-400": "#FFCD5B",
        "secondary-500": "#FFC132",
      },
      backgroundImage: (theme) => ({
        "gradient-yellowred":
        "linear-gradient(90deg, #FF616A 0%, #FFC837 100%)",
        "HomePageImage1": "url('/HomePageImage1.svg')",
        "HomePageImage2": "url('/HomePageImage2.svg')",
        "HomePageImage3": "url('/HomePageImage3.svg')",
        "HomePageImage4": "url('/HomePageImage4.svg')",
        "aboutpage1": "url('/AboutPage1.svg')",
        "aboutpage2": "url('/AboutPage2.svg')",
        "aboutpage3": "url('/AboutPage3.svg')",
        "aboutpage4": "url('/AboutPage4.svg')",
        "conditionspage1": "url('/ConditionsPage1.svg')",
        "conditionspage2": "url('/ConditionsPage2.svg')",
        "conditionspage3": "url('/ConditionsPage3.svg')",
        "conditionspage4": "url('/ConditionsPage4.svg')",
        "treatmentspage1": "url('/TreatmentsPage1.svg')",
        "treatmentspage2": "url('/TreatmentsPage2.svg')",
        "treatmentspage4": "url('/TreatmentsPage4.svg')",
        "treatmentspage3": "url('/TreatmentsPage3.svg')",
      }),
      fontFamily: {
        josefinsans: ["Josefin Sans"],
        
      },
      content: {
        renovationtext: "url('/RenovationText.svg')",
        abstractwaves: "url('/AbstractWaves.png')",
        sparkles: "url('/Sparkles.png')",
        circles: "url('/Circles.png')",
        logo: "url('/Logo.png')",

      },
    },
    screens: {
      xs: "375px",
      sm: "768px",
      md: "1060px",
      lg: "1500px"
    },
    
  },
  plugins: [],
  safelist: [
    'bg-repair',
    'bg-repair1',
    'bg-renovation',
    'bg-remodel',
  ],
};
