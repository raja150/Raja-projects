import { Route, Routes, useRoutes } from 'react-router-dom'
import Dashboard from './dashboad'
import Topbar from './global/Topbar'
import Team from './Team'
import SidebarComp from './global/Sidebar'

const Pages = (props: any) => {
    const routes = [
        { path: '/', element: <Dashboard /> },
        { path: '/team', element: <Team /> },
    ];
    const routing = useRoutes(routes);
    return <div className='app'>
        <SidebarComp />
        <main className='content'>
            <Topbar />
            <>{routing}</>
        </main>
    </div>

}

export default Pages