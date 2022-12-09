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
    name: 'dark',
    id: 0,
    colors: {
      background: '#000814',
      text: '#eee',
      primary: '#eb5e28',
      secondary: '#eee',
      accent: '#000814',
      muted: '#000814',
      tile: '#000814',
      gradient: `linear-gradient(to right, rgba(98, 0, 234, 1) 0%, rgba(236, 64, 122, 1) 15%, rgba(98,0, 234, 1) 100%)`,
    },
  },
  {
    name: 'light',
    id: 2,
    colors: {
      background: '#eee',
      text: '#000814',
      primary: '#000814',
      secondary: '#000814',
      accent: '#eee',
      muted: '#eee',
      tile: '#eee',
      gradient: `linear-gradient(to right, rgba(98, 0, 234, 1) 0%, rgba(236, 64, 122, 1) 15%, rgba(98,0, 234, 1) 100%)`,
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
    const nextColorScheme =
      currentColorScheme.current + 1 >= colorPalette.length
        ? 0
        : currentColorScheme.current + 1;
    currentColorScheme.current = nextColorScheme;
    setColorScheme(colorPalette[nextColorScheme]);
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
