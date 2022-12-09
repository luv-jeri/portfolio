const {
  createContext,
  useState,
  useEffect,
  useLayoutEffect,
  useContext,
} = require('react');

const colorPalette = [
  {
    name: 'light',
    colors: {
      background: '#eee',
      text: '#000814',
      primary: '#000814',
      secondary: '#000814',
      accent: '#000814',
      muted: '#000814',
      tile: '#eee',
    },
  },
  {
    name: 'dark',
    colors: {
      background: '#000814',
      text: '#eee',
      primary: '#eee',
      secondary: '#eee',
      accent: '#eee',
      muted: '#eee',
      tile: '#000814',
    },
  },
  {
    name: 'blue',
    colors: {
      background: '#000814',
      text: '#eee',
      primary: '#eee',
      secondary: '#eee',
      accent: '#eee',
      muted: '#eee',
      tile: '#000814',
    },
  },
];

const ThemeContext = createContext();

const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const ThemeProvider = ({ children }) => {
  const [colorScheme, setColorScheme] = useState(colorPalette[0]);

  const switch_ = () => {
    const random = Math.floor(Math.random() * colorPalette.length);
    setColorScheme(colorPalette[random]);
  };

  useLayoutEffect(() => {
    const root = window.document.documentElement;
    Object.entries(colorScheme.colors).forEach(([name, colorByTheme]) => {
      const cssVarName = `--color_${name}`;
      console.log(cssVarName, colorByTheme);
      root.style.setProperty(cssVarName, colorByTheme);
    });

    console.log('root', root.style);
  }, [colorScheme]);

  return (
    <ThemeContext.Provider
      value={{
        switch_,
        colorScheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export default useTheme;
