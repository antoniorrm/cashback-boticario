import { createTheme, colors, ThemeOptions } from '@material-ui/core'

const theme = createTheme({
	palette: {
		background: {
			dark: '#F4F6F8',
			default: colors.common.white,
			paper: colors.common.white,
		},
		primary: {
			main: '#65987C',
		},
		secondary: {
			main: colors.indigo[500],
		},
		text: {
			primary: colors.blueGrey[900],
			secondary: colors.blueGrey[600],
		},
	},
} as ThemeOptions)

export default theme
