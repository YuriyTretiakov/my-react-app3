import React from "react"
import { ThemeContextType } from "../../types/theme"
import { ThemeContext } from "../Context/Context"
import { IconButton, styled } from "@mui/material"
import DarkModeIcon from '@mui/icons-material/DarkMode'
import LightModeIcon from '@mui/icons-material/LightMode'

import './Header.css'

const Header: React.FC = () => {
  const { theme, toggleTheme } = React.useContext(ThemeContext) as unknown as ThemeContextType
  const ButtonDark = styled(IconButton)({
		color: 'yellow',
	})
	const ButtonLight = styled(IconButton)({
		color: 'grey',
			})
  return (
		<>
			<header>
				{theme === 'light' && (
					<ButtonDark onClick={() => toggleTheme()}>
						<DarkModeIcon />
					</ButtonDark>
				)}
				{theme === 'dark' && (
					<ButtonLight onClick={() => toggleTheme()}>
						<LightModeIcon />
					</ButtonLight>
				)}
			</header>
		</>
	)
}

export default Header