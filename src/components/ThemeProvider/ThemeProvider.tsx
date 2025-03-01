import { useState } from "react"
import { ThemeContext } from "../Context/Context"



const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
	children,
}): React.ReactNode => {
	const [theme, setTheme] = useState<string>('dark')
	const toggleTheme = (): void => {
    // (theme === 'light')? setTheme('dark') : setTheme('light')
		if (theme === 'light') {
      setTheme('dark')
      document.body.classList.remove('light')
      document.body.classList.add('dark')
    } 
    else {
      setTheme('light')
      document.body.classList.remove('dark')
			document.body.classList.add('light')
    }
	}
	return (
		<ThemeContext.Provider value={{ theme, toggleTheme }}>
			
            {/* <label>
        <input
          type="checkbox"
          checked={theme === 'dark'}
          onChange={(e) => {
            setTheme(e.target.checked ? 'dark' : 'light')
          }}
        />
        Get dark mode
      </label> */}
      {children}
		</ThemeContext.Provider>
	)
}

export default ThemeProvider

