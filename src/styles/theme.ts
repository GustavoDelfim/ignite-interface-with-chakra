import { extendTheme } from "@chakra-ui/react"

export const theme = extendTheme({
  fonts: {
    heading: `'Poppins', sans-serif`,
    body: `'Poppins', sans-serif`
  },
  colors: {
    gray: {
      '100': '#F5F8FA',
      '200': '#DADADA',
      '700': '#47585B'
    }
  }  
})