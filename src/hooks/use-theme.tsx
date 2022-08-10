import React, { useState, useEffect, useContext, createContext } from "react";
import getCookie from "../service/getCookie";
import { API_URL } from "./const";
import { status } from "./status";



export interface ITheme {
	key: string | number
	name: 'light' | 'dark'
}

export const defaultTheme: ITheme = { key: '1', name: 'light' };
export const darkTheme: ITheme = { key: '2', name: 'dark' };

const themes: ITheme[] = [
	defaultTheme,
	darkTheme
]



const themeContext = createContext();

export function ThemeProvider({ children }) {
	const theme = useProvideTheme();
	return <themeContext.Provider value={theme} > {children} </themeContext.Provider>;
}

export const useTheme = () => {
	return useContext(themeContext);
};


function useProvideTheme() {
	const [theme, setTheme] = useState<ITheme>();


	useEffect(() => {
		initTheme();
		document.addEventListener('keyup', keyupHandler);

		const unsubscribe = () => {
			document.removeEventListener('keyup', keyupHandler);

		}

		return () => unsubscribe();
	}, []);

	useEffect(() => {
		const activeThemeJson = JSON.stringify(theme);
		document.cookie = 'activeThemeJson=' + activeThemeJson + '; path=/; expires=Tue, 19 Jan 2138 03:14:07 GMT'
		document.body.setAttribute('data-theme', theme?.name);
	}, [theme])

	function initTheme() {
		const activeThemeJson = getCookie('activeThemeJson');
		if (!activeThemeJson) {
			setTheme(defaultTheme);
			return;
		}
		try {
			const oldActiveTheme = JSON.parse(activeThemeJson);
			setTheme(oldActiveTheme);
		} catch {
			setTheme(defaultTheme);
		}
	}

	function keyupHandler(event) {
		for (const i in themes) {
			if (!themes.hasOwnProperty(i)) continue;
			if (event.key == themes[i].key && event.altKey) {
				setTheme(themes[i])
				return;
			}
		}
	}

	return { theme, setTheme };
}