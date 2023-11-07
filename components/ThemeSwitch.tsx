"use client"

import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import Switch from 'react-switch';

const ThemeSwitch = () => {
  const { theme, setTheme } = useTheme();
  const [checked, setChecked] = useState(theme === 'dark');

  const handleThemeChange = (newTheme: string) => {
    if (newTheme === 'dark') {
      document.documentElement.style.backgroundColor = '#374151';
      document.documentElement.style.color = '#fff';
      setTimeout(() => {
        setTheme(newTheme);
      }, 300); //transición lenta de 0.3s
    } else {
      setTheme(newTheme);
    }
  }

  useEffect(() => {
    //aplico los estilos al servidor y cliente
    if (typeof window !== 'undefined') {
      document.documentElement.style.transition = 'background-color 0.3s, color 0.3s';
      document.documentElement.style.backgroundColor = theme === 'dark' ? '#000' : '#fff';
      document.documentElement.style.color = theme === 'dark' ? '#fff' : '#000';
    }
  }, [theme]);

  const onToggle = (newChecked: boolean) => {
    setChecked(newChecked);
    handleThemeChange(newChecked ? 'dark' : 'light');
  }

  return (
    <div className="theme-switch-container" style={{ marginTop: '7px' }}>
      <Switch
        onChange={onToggle}
        checked={checked}
        onColor="#ccc"  //color de fondo cuando esta activado/desactivado
        offColor="#ccc" 
        checkedIcon={false}
        uncheckedIcon={false}
        width={40}
        height={20}
        handleDiameter={20}
        activeBoxShadow="0 0 2px 3px #000"
        boxShadow="0 0 2px 3px #ccc"
      />
    </div>
  );
}

export default ThemeSwitch;