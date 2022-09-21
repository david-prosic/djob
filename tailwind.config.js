module.exports = {
  mode : 'jit',
  content: [
    "./dist/**/*.html",
    "./dist/index.js",
    "./public/**/*.html",
    "./src/**/*.{js,jsx,ts,tsx,vue}",
    "./dist/index.html"
  ],
theme: {
  debugScreens: {
    position: ["top", "left"],
  },

  screens: {
    xss: "320px",
    xsm: "375px",
    xsl: "425px",
    sm: "640px",
    md: "768px",
    lg: "1024px",
    xl: "1280px",
    xl2: "1570px",
    "2xl": "1601px",
  },

  
  extend: {

    //POSITIONING
    container: {
      padding: "0rem",
      center: true,
    },

    borderRadius:{
      2.5: '0.625rem',
      5: '1.25rem',
      7.5: '1.875rem',
      25: '6.25rem',
    },

    spacing:{
      '0.15px' : '0.15px',
      0.5: '0.125rem',
      1.5: '0.375rem',
      2.5: '0.625rem',
      3.5: '0.875rem',
      4.5: '1.125rem',
      5.5: '1.375rem',
      6.5: '1.625rem',
      7.5 : '1.875rem',
      8.5 : '2.125rem',
      9.5 : '2.375rem',
      10.5: "2.625rem",
      12.5: "3.125rem",
      13: '3.25rem',
      13.5: '3.375rem',
      14.5: '3.625rem',
      15: '3.75rem',
      15.5: '3.875rem',
      16.5: '4.125rem',
      17: '4.25rem',
      17.5: '4.375rem',
      18: '4.5rem',
      18.5: '4.625rem',
      18.76: '4.69rem',
      19: '4.75rem',
      21: '5.25rem',
      21.5: '5.375rem',
      23: '5.75rem',
      23.5: '5.875rem',
      25: '6.25rem',
      25.5: '6.375rem',
      28.25: '7.06rem',
      29: '7.25rem',
      30.5: '7.625rem',
      30: '7.5rem',
      31.5: '7.875rem',
      33.5: '8.375rem',
      33: '8.25rem',
      33.75: '8.44rem',
      35.2: '8.8rem',
      36.5: '9.125rem',
      37.5: '9.375rem',
      38: '9.5rem',
      38.5: '9.625rem',
      40.5: '10.125rem',
      41.5: '10.375rem',
      43: '10.75rem',
      45.5: '11.375rem',
      47.5: '11.875rem',
      46: '11.5rem',
      49.5: '12.375rem',
      55: '13.75rem',
      56.5: '14.125rem',
      58.24: '14.56rem',
      62.5: '15.625rem',
      66: '16.5rem',
      68: '17rem',
      81.25: '20.31rem',
      81.5: '20.375rem',
      84: '21rem',
      86: '21.5rem',
      87: '21.75rem',
      89: '22.25rem',
      91: '22.75rem',
      105: '26.25rem',
      111.5: '27.875rem',
      120: '30rem',
      140: '35rem',
      154: '38.5rem',
      155.5: '38.875rem',
      '90p': '90%',
      '94p': "94%",
      '97/125': "77.6%",
      '78p': "78.3%",
    },

    zIndex: {
      '-1':-1,
      60 : 60,
      70 : 70,
      80 : 80,
      90 : 90,
      100 : 100,
    },

    maxWidth:{
      21: '5.25rem',
      25: '6.25rem',
      30: '7.5rem',
      44: '11rem',
      52: '13rem',
      80.5: '20.125rem',
      81.5: '20.375rem',
     92.5: '23.125rem',
      93.5: '23.375rem',
      94: '23.5rem',
      100.5: '25.125rem',
      110: '27.5rem',
      120: '30rem',
      133.25: '33.31rem',
      135: '33.75rem',
      144.5: '36.125rem',
      172: '43rem',
      242.5: '60.625rem',
      
    },

    //TYPOGRAPHY

    fontFamily: {
      display: ["'Poppins', sans-serif"],
    },

    fontSize:{
      xxs: '0.625rem',
      '3.5xl' : '2rem',
      '6.5xl' : '4rem',
      2.25: '0.56rem',
      4.5: '1.125rem',
      10 : '2.5rem',
    },

    lineHeight: {
      3.5: '0.875rem',
      4.5:'1.125rem',
      6.5:'1.625rem',
      8:'2rem',
      8.5:'2.125rem',
      9.5:'2.375rem',
      12.5:'3.125rem',
      14.5: '3.625rem',
      15:'3.75rem',
      20: '5rem',
    },

    letterSpacing: {
      '0.15px' : '0.15px',
    },

    // SHADOW
    boxShadow: {
        green: '0px 16px 60px 0px #4B9A4E4D',
        orange: '0px 16px 60px 0px #CE8B254D',
        purple: '0px 16px 60px 0px #4B1D974D',
        subtle: '0px 15px 60px 0px #24346B33',
        gridElement: '0px 16px 40px rgba(54, 68, 119, 0.1)',
        slider1: '0px 5px 40px 0px #3644771A',
    },


    //BG IMAGE

    backgroundImage:{
      section5Gradient: 'linear-gradient(to bottom, #FFF 0 50%, #E3E7FA 50%)'
    },

    // COLORS
    colors: {
      purple: {
       E3E: "#E3E7FA",
       C39: "#C39EFF",
       '5B5': "#5B59DF",
       '586': "#5865F2",
       '7F9': "#7F9BFF",
      },
      orange: {
       FFA: "#FFAC2F",
       FBB: "#FBBC04",
      },
      green: {
       '9AC': "#9ACEAF",
       '4B9': "#4B9A4E",
      },
      grey: {
        'FFF':'#FFF2F2',
        'D3C':'#D3CDCD',
       '656': "#656567",
       '565': "#565656",
       '8C': "#8C8C8C",
       '8E': "#8E8E8E",
       '838': "#8388B9",
       '03': "#030303",
       'E0E': "#E0E1EB",
       '747': "#747272",
       'ED': "#EDEDED",
       '85': "#858585",
       '9FA': "#9FA0B2",
      },
    },
  },
},
plugins: [
  require("tailwindcss-debug-screens"),
  function ({ addComponents }) {
    addComponents({
      ".container": {
        maxWidth: "min(95%, 22.875rem)",
        "@screen xsm": {
          maxWidth: "min(95%, 22.875rem)",
        },
        "@screen sm": {
          maxWidth: "550px",
        },
        "@screen md": {
          maxWidth: "700px",
        },
        "@screen lg": {
          maxWidth: "950px",
        },
        "@screen xl": {
          maxWidth: "1208px",
        },
        "@screen 2xl": {
          maxWidth: "1330px",
        },
      },
      ".container-slider": {
        maxWidth: "min(95%, 22.875rem)",
        "@screen xsm": {
          maxWidth: "min(95%, 22.875rem)",
        },
        "@screen sm": {
          maxWidth: "550px",
        },
        "@screen md": {
          maxWidth: "700px",
        },
        "@screen lg": {
          maxWidth: "950px",
        },
        "@screen xl": {
          maxWidth: "1288px",
        },
        "@screen 2xl": {
          maxWidth: "1410px",
        },
      },
    });
  },
],
}
