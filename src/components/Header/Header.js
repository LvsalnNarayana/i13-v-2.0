import React from 'react';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { useSelector, useDispatch } from 'react-redux';
import { AppBar } from '../StyledComponents/StyledComponents';
import {
    // openRightDrawer,
    openLeftDrawer
} from '../../features/AppState/AppState';
import {
    selectLeftDrawer,
    selectRightDrawer
} from '../../features/AppState/AppState';
// import DownloadIcon from '@mui/icons-material/Download';
// import { Link } from 'react-router-dom';


const Header = () => {
    const dispatch = useDispatch();

    const rightDrawerStatus = useSelector(selectRightDrawer);
    const leftDrawerStatus = useSelector(selectLeftDrawer);
    const handleLeftDrawerOpen = () => {
        dispatch(openLeftDrawer())
    }
    // const handleRightDrawerOpen = () => {
    //     dispatch(openRightDrawer())
    // }
    return (
        <>
            <AppBar
                elevation={0}
                position="fixed"
                LeftOpen={leftDrawerStatus}
                RightOpen={rightDrawerStatus}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleLeftDrawerOpen}
                        edge="start"
                        sx={{
                            marginRight: 0,
                            ...(leftDrawerStatus && { display: 'none' }),
                        }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <img src="/i13logo.png" alt="logo" className='w-52' />
                    {/* <Link to={'/report'} style={{ marginLeft: 'auto' }} target="_blank">
                        <IconButton
                            color="inherit"
                            aria-label="Report"
                        >
                            <DownloadIcon />
                        </IconButton>
                    </Link> */}
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Header