import React from 'react';
import { useTheme } from '@mui/material/styles';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { useSelector, useDispatch } from 'react-redux';
import { selectRightDrawer, closeRightDrawer } from '../../features/AppState/AppState';
import { RightDrawer, RightDrawerHeader, drawerWidth } from '../StyledComponents/StyledComponents';
import PersonIcon from '@mui/icons-material/Person';
import DownloadIcon from '@mui/icons-material/Download';
import LogoutIcon from '@mui/icons-material/Logout';
import CloseIcon from '@mui/icons-material/Close';
const RightMenu = () => {
    const dispatch = useDispatch();
    const theme = useTheme();

    const rightDrawerStatus = useSelector(selectRightDrawer)
        ;
    const handleRightDrawerClose = () => {
        dispatch(closeRightDrawer())
    }
    return (
        <>
            <RightDrawer
                sx={{
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                        boxShadow: '0px 0px 12px rgba(6, 188, 6, 0.6)',
                    },
                }}
                variant="persistent"
                anchor="right"
                open={rightDrawerStatus}
            >
                <RightDrawerHeader>
                    <IconButton onClick={handleRightDrawerClose}>
                        <CloseIcon/>
                    </IconButton>
                </RightDrawerHeader>
                <Divider />
                <div className={`pl-4 flex items-center py-4 hover:bg-gray-200 cursor-pointer 'justify-start' transition-all transition-75 ease-in`}>
                    <PersonIcon />
                    <p className='font-semibold text-md ml-4  transition-all ease-in transition-75'>Profile</p>
                </div >
                <div className={`pl-4 flex 'justify-start' items-center py-4 cursor-pointer hover:bg-gray-200 transition-all transition-75 ease-in`}>
                    <DownloadIcon />
                    <p className='font-semibold text-md ml-4'>Save to Pdf</p>
                </div>
                <div className={`pl-4 flex  'justify-start' items-center py-4 cursor-pointer hover:bg-gray-200 transition-all transition-75 ease-in`}>
                    <LogoutIcon />
                    <p className='font-semibold text-md ml-4'>Logout</p>
                </div>
            </RightDrawer>
        </>
    )
}

export default RightMenu