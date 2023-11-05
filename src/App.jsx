import React from 'react'
import Test from './Components/Test'
import { CssBaseline, Paper, ThemeProvider, createTheme } from '@mui/material'
import { orange,green,blue,blueGrey, red } from '@mui/material/colors'
import SxDemo from './Components/SxDemo'
import Themeing from './Components/Themeing'
import Icon from './Components/Icon'
import RatingComp from "./Components/RatingComp"
import CardComp from './Components/CardComp'
import BoxComp from './Components/BoxComp'
import ListComp from './Components/ListComp'
import TableComp from './Components/TableComp'
const App = () => {

    //{this custom theme is for test.jsx file }
    // const theme  = createTheme({
    //     palette: {
    //       primary:{
    //         main:"#ccc",
    //       },
    //       secondary:{
    //         main:orange[500]
    //       },
    //       myCustomColor:{
    //         main: red[400],
    //         superDark: red[800],
    //         superLight:red[100]
    //     }
    //     },
    //     typography:{
    //         myVariant:{
    //             fontSize:"2rem",
    //             color:orange[500]
    //         }
    //     },
       
    //   })

  //{For themeing.jsx file}
  const theme = createTheme({
    spacing : 4,
    palette:{
        mode:"dark",
        // primary :{
        //     main : orange[500],
        // }
        customRibRed : {
            main : red[400],
            superDark : red[800],
            superLight : red[100]

        }
    },
    typography:{
        // h3:{
        //     fontSize : "2rem"
        // }
        
       myVariant : {
         fontSize : "2rem"
       }
    }
  })

  return (
    <div>
        {/* for test.jsx file */}
  {/* <ThemeProvider theme={theme}>
  <Test/>
  </ThemeProvider> */}

{/* --------------- */}

{/* For Sx.jsx file */}
  {/* <SxDemo/> */}

{/* -------------- */}

  {/* For themeing.jsx file */}

  {/* we can have only one cssBaseline and themeProvider for out entire application */}
  {/* <ThemeProvider theme={theme}>
    <CssBaseline/>
  <Themeing/>
  </ThemeProvider> */}

  {/* ----------------- */}

  {/* for icon.jsx */}
   {/* <Icon/> */}

{/* ----------------- */}


   {/* for ratingcomp.jsx */}
   {/* <RatingComp/> */}


{/* ----------------- */}

   {/* for cardcomp.jsx */}
   {/* <CardComp/> */}


{/* ----------------- */}

   {/* for boxcomp.jsx */}
   {/* <BoxComp/> */}

{/* ----------------- */}
   {/* for Listcomp.jsx */}
   {/* <ListComp/> */}

{/* ----------------- */}

   {/* for Table.jsx */}
   <TableComp/>
    </div>
  )
}

export default App