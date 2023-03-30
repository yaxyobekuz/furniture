/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors:{
        br:{
          'primary':"#054C73",
          'text-dark-gray':"#333333",
          'dark':"#111111",
          'light-gray':"#666666",
        }
      },
      backgroundColor:{
        'primary-dark':"#054C73",
        'light-blue':"#F2F5FF",
        'hero-light-blue':"#DFE9F4",
        'primary':"#054C73",
        'hero-light-gray':"#f1f1f1"
      },
      fontFamily:{
        'montserrat':['Montserrat', 'sans-serif']
      },
      maxWidth:{
        '1270':"1270px",
        '1196':"1196px",
        '1183':"1183px",
        '1145':"1145px"
      },
      width:{
        '568':"568px",
        '500':"500px",
        '381':"381px",
        '372':"372px",
        '355':"355px",
        '229':"229px",
        '90':"90px",
        '60':"60px",
        '84':"84px"
      },
      height:{
        '90':"90px"
      },
      inset:{
        'calc-50-45':"calc(50% - 45px)",
        '45':"-45px",
      },
      padding:{
        '197':"197px",
        '155':"155px",
        '150':"150px",
        '133':"133px",
        '46':"46px",
        '60':"60px"
      },
      borderRadius:{
        '50':"50px"
      },
      borderWidth:{
        '15':"15px"
      },
      fontSize:{
        '34':"34px",
        '52':"52px",
        '32':"32px",
      },
      lineHeight:{
        '41':"41.45px",
        '17':"17px",
        '65':"65px",
        '29':"29.26px",
        '24':"24.38px",
        '35':"35px",
        '19':"19px"
      },
      margin:{
        '72':"72px",
        '67':"67px",
        '60':"60px",
        '10':"10px"
      }
    },
  },
  plugins: [],
}