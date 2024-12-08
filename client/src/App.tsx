import React, { Fragment } from 'react';
import { ColorModeContext, useMode } from './theme';
import { CssBaseline, ThemeProvider } from '@mui/material'
import Topbar from './domain/pages/global/Topbar';
import Dashboard from './domain/pages/dashboad';
import Sidebar from './domain/pages/global/Sidebar';
import { Route, Routes } from 'react-router-dom';
import Team from './domain/pages/Team';
import Domain from './domain';
import Login from './User/Login';

const App: React.FC = () => {
  const [theme, colorMode] = useMode();
  return <Fragment>
    <Routes>
      <Route element={<Login />} path='/' />
    </Routes>
    {/* <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline /> */}
    {/* reset the css */}
    {/* <div className='app'> */}
    {/* <Sidebar/>
          <main className='content'>
            <Topbar />
            <Routes>
              <Route element={<Dashboard />} path='/' />
              <Route element={<Team />} path='/team' />
            </Routes>
          </main> */}
    {/* </div> */}
    {/* </ThemeProvider>
    </ColorModeContext.Provider> */}
  </Fragment>
};

export default App;
