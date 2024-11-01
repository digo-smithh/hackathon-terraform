import {   Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import './Sidebar.css'

function MySidebar({ isOpen }) {
    return (
    <Sidebar className={`sidebar-container ${isOpen ? 'open' : ''}`}>
    <Menu className='menu-container'>
        <MenuItem className='menu-item'> Página Inicial </MenuItem>
        <MenuItem className='menu-item'> Object Store </MenuItem>
        <MenuItem className='menu-item'> Turia </MenuItem>
        <MenuItem className='menu-item'> Faturamento </MenuItem>
        <MenuItem className='menu-item'> MagaluForm </MenuItem>
    </Menu>
    </Sidebar>);
}

export default MySidebar;