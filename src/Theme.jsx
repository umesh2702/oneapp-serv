import { extendTheme, theme as base } from "@chakra-ui/react"

const breakpoints = {
  sm: '320px',
  md: '500px',
  lg: '720px',
  xl: '960px',
  '2xl': '1200px',
}

export const theme = extendTheme({
  breakpoints,
  colors: {
    primary: {
      50: '#ebf8ff',
      100: '#bee3f8',
      200: '#90cdf4',
      300: '#63b3ed',
      400: '#4299e1',
      500: '#3182ce',
      600: '#2b6cb0',
      700: '#2c5282',
      800: '#2a4365',
      900: '#1A365D',
    },
  },
  fonts: {
    heading: `'Roboto Slab', ${base.fonts.heading}`,
    body: `'Montserrat', sans-serif`,
  },
  styles: {
    global: {
      body: {
        bg: 'primary.50', // Use lightest shade of blue as background
      }
    }
  },
  components: {
    Button: {
      defaultProps: {
        colorScheme: 'primary', // Use primary color scheme for buttons
      }
    },
    Input: {
      defaultProps: {
        focusBorderColor: 'primary.500' // Use primary color for input focus border
      }
    },
    Select: {
      baseStyle: {
        _focus: {
          borderColor: 'primary.500' // Use primary color for select focus border
        }
      }
    },
    Textarea: {
      defaultProps: {
        focusBorderColor: 'primary.500' // Use primary color for textarea focus border
      }
    }
  }
});
