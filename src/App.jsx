import { ThemeProvider } from "styled-components"
import { GlobalStyles } from "./components/UI/Global"

import Header from "./components/Header/Header"
import Home from "./components/HomeSection/Home"
import Featured from "./components/FeaturedSection/Featured"
import Operation from "./components/OperationSection/Operation"
import Blog from "./components/BlogSection/Blog"
import Footer from "./components/FooterSection/Footer"

const defaultTheme = {
  colors: {
    bg: '#EDF1F7',
    darkBlue: '#32324E',
    lightBlue: '#4BB2F6',
    lightGray: '#808080',
    darkGray: '#4f5d78'
  }
}

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <>
        <GlobalStyles />
        <Header />
        <Home />
        <Featured />
        <Operation />
        <Blog />
        <Footer />
      </>
    </ThemeProvider>
  )
}

export default App
