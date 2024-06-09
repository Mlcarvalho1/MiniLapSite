import React, { useCallback, useState } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { useNavigate } from 'react-router-dom';

import logo from '../assets/logo.svg'
import Button from './button';

import { Link } from 'react-router-dom';

const LINKS = [
    { link: '/home', label: 'Home'},
    { link: '/gustavo-carvalho', label: 'Gustavo Carvalho'},
    { link: '/areas-de-atuacao', label: 'Áreas de Atuação'},
    { link: '/videolaparoscopia', label: 'Videolaparoscopia'},
    { link: '/minilaparoscopia', label: 'Minilaparoscopia'}
]

const Navbar = () => {
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);

    const toggleDrawer = useCallback(() => {
        console.log(' executei')
        setOpen(state => {
            console.log(state)
            return !state
        });
    }, [setOpen])

    const renderNavBarItem = useCallback(({ label, link }) => (
        <Link className="text-white text-2xl max-md:text-xl text-al max-md:hidden" to={link}>
            {label}
        </Link>
    ), []);

    const renderDrawerList = useCallback(() => {
        const onClick = () => {
            setOpen(false)
        };

        const onItemClick = link => {
            setOpen(false)
            navigate(link)
        }

        return (
            <Box sx={{ width: 250 }} role="presentation" onClick={onClick}>
                <List>
                    {LINKS.map(item => (
                    <ListItem key={item.label} disablePadding>
                        <ListItemButton onClick={() => onItemClick(item.link)}>
                        {/* <ListItemIcon>
                        </ListItemIcon> */}
                            <ListItemText primary={item.label} />
                        </ListItemButton>
                    </ListItem>
                    ))}
                </List>
            </Box>
        );
    }, [navigate]);

    return (
        <div className="w-full max-w-[100vw] z-40 sticky top-0">
            <div
                className="
                    px-4
                    py-2
                    md:px-8
                    flex
                    flex-row
                    items-center
                    justify-between
                    tranition
                    duration-900
                    bg-primary-medium
                "
            >
                <img src={logo} alt="logo"/>
                {renderNavBarItem({ link: '/home', label: 'Home'})}
                {renderNavBarItem({ link: '/gustavo-carvalho', label: 'Gustavo Carvalho'})}
                {renderNavBarItem({ link: '/areas-de-atuacao', label: 'Áreas de Atuação'})}
                {renderNavBarItem({ link: '/videolaparoscopia', label: 'Videolaparoscopia'})}
                {renderNavBarItem({ link: '/minilaparoscopia', label: 'Minilaparoscopia'})}
                <Button className="text-white border-white max-md:hidden" variant="medium">
                    Fale conosco
               </Button>
               <Button className="rounded-lg md:hidden text-white border-white" onClick={toggleDrawer} variant="medium">
                    | | |
               </Button>
            </div>
                <Drawer open={open} onClose={toggleDrawer}>
                    {renderDrawerList()}
                </Drawer>
        </div>
)};

export default Navbar;
