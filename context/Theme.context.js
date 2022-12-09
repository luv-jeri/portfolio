const {
  createContext,
  useState,
  useEffect,
  useLayoutEffect,
  useContext,
  useRef,
} = require('react');

const colorPalette = [
  {
    name: 'light',
    id: 0,
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
    id: 1,
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
  const [mounted, setMounted] = useState(false);
  const currentColorScheme = useRef(0);

  const switch_ = () => {
    console.log('currentColorScheme', currentColorScheme.current);
    console.log('colorScheme', colorScheme);
    const nextColorScheme =
      currentColorScheme.current + 1 >= colorPalette.length
        ? 0
        : currentColorScheme.current + 1;
    console.log('nextColorScheme', nextColorScheme);
    currentColorScheme.current = nextColorScheme;
    setColorScheme(colorPalette[nextColorScheme]);
    console.log('colorScheme', colorScheme);
  };

  useEffect(() => {
    const root = window.document.documentElement;
    Object.entries(colorScheme.colors).forEach(([name, colorByTheme]) => {
      const cssVarName = `--color_${name}`;
      root.style.setProperty(cssVarName, colorByTheme);
    });
    root.style.setProperty('--color_scheme', colorScheme.name);
    console.log('useEffect', colorScheme);
    console.log('root', root.style.getPropertyValue('--color_scheme'));
  }, [colorScheme.name, colorScheme.colors, colorScheme]);

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
