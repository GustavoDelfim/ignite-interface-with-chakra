import { extendTheme } from "@chakra-ui/react"

export const theme = extendTheme({
  fonts: {
    heading: `'Poppins', sans-serif`,
    body: `'Poppins', sans-serif`
  },
  colors: {
    yellow: {
      '400': '#FFBA08'
    },
    gray: {
      '100': '#F5F8FA',
      '200': '#DADADA',
      '700': '#47585B'
    }
  },
  styles: {
    global: {
      body: {
        bg: 'gray.100'
      }
    }
  }
})