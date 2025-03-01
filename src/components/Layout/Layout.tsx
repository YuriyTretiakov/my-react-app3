import { ReactNode } from "react";
import { ThemeContext } from "../Context/Context";
import cn from 'classnames'
import React from "react";
import { ThemeContextType } from "../../types/theme";
import Header from "./../Header/Header";

interface ILayout {
  children: ReactNode,
  className: string
}



const Layout: React.FunctionComponent<ILayout> = ({ children, className }) => {
  const {theme} = React.useContext(ThemeContext) as unknown as ThemeContextType
  console.log(theme)
	return (
		<>
		<Header />
			<main className={cn(className, theme)}>{children}</main>
		</>
	)
}

export default Layout