import { useEffect, useState } from 'react';
import './App.css';
import Button from './Components/Button/Button';
import { ThemeContext } from './context/context';
import classNames from 'classnames';

function App() {

    const storageMode = localStorage.getItem('themeMode');
    const storageIsChange = localStorage.getItem('isChange');
    
    const [themeMode, setThemeMode] = useState(JSON.parse(storageMode));
    const [isChange, setIsChange] = useState(JSON.parse(storageIsChange));

    let theme = null;
    const changedTheme = themeMode ? 'light' : 'dark';
    const themeIsChnaged = isChange ? changedTheme : 'theme';

    useEffect(() => {
        localStorage.setItem('themeMode', JSON.stringify(themeMode));
    }, [themeMode]);

    useEffect(() => {
        localStorage.setItem('isChange', JSON.stringify(isChange));
    }, [isChange]);

    if (window.matchMedia('(prefers-color-scheme)').media !== 'not all') {
        theme = 'dark';
    } else {
        theme = 'light';
    }

    const containerClass = classNames('container', themeIsChnaged);

    const changeTheme = () => {
        setIsChange(true);
        localStorage.setItem('isChange', JSON.stringify(isChange));
        if(theme === 'dark') {
            setThemeMode(false);
        } else {
            setThemeMode(true);
        }
        setThemeMode(!themeMode);
        localStorage.setItem('themeMode', JSON.stringify(themeMode));
    }

    return (
        <div className={containerClass}>
            <ThemeContext.Provider value={{
                onClick: changeTheme,
            }}>
                <Button>Change Theme</Button>
            </ThemeContext.Provider>
        </div>
    );
}

export default App;
