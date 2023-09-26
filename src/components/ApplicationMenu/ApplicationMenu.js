import React from 'react';
import { useTheme } from '@mui/material/styles';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { selectLeftDrawer, closeLeftDrawer } from '../../features/AppState/AppState';
import { LeftDrawer, LeftDrawerHeader } from '../StyledComponents/StyledComponents';
import { useSelector, useDispatch } from 'react-redux';
import MicroFramework from '../Icons/MicroFramework';
import SecureIcon from '../Icons/SecureIcon';
import Backdrop from '@mui/material/Backdrop';

const ApplicationMenu = () => {
    const theme = useTheme();
    const dispatch = useDispatch();

    const leftDrawerStatus = useSelector(selectLeftDrawer);

    const handleLeftDrawerClose = () => {
        dispatch(closeLeftDrawer());
    }
    return (
        <>
            <LeftDrawer variant="permanent" LeftOpen={leftDrawerStatus}>
                <LeftDrawerHeader>
                    <IconButton onClick={handleLeftDrawerClose}>
                        {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                    </IconButton>
                </LeftDrawerHeader>
                <Divider />
                <div className={`application_menu_item py-4  hover:bg-gray-200 ${leftDrawerStatus ? 'justify-start  pl-2' : 'justify-center'}`}>
                    <MicroFramework classes='w-8 h-8' />
                    {leftDrawerStatus && <p className='font-semibold text-md ml-4 transition-all ease-in transition-75'>Micro Framework</p>}
                </div >
                <div className={`application_menu_item py-3 opacity-50 ${leftDrawerStatus ? 'justify-start  pl-6' : 'justify-center'} cursor-not-allowed`}>
                    <div className='w-[10%]'><SecureIcon classes='w-6 h-6' /></div>
                    {leftDrawerStatus && <p className='font-semibold text-md ml-4 transition-all ease-in transition-75'>Business Model Canvas</p>}
                </div >
                <div className={`application_menu_item py-3 opacity-50 ${leftDrawerStatus ? 'justify-start  pl-6' : 'justify-center'} cursor-not-allowed`}>
                    <div className='w-[10%]'><SecureIcon classes='w-6 h-6' /></div>
                    {leftDrawerStatus && <p className='font-semibold text-md ml-4 transition-all ease-in transition-75'>Lean Canvas</p>}
                </div >
                <div className={`application_menu_item py-3 opacity-50 ${leftDrawerStatus ? 'justify-start  pl-6' : 'justify-center'} cursor-not-allowed`}>
                    <div className='w-[10%]'><SecureIcon classes='w-6 h-6' /></div>
                    {leftDrawerStatus && <p className='font-semibold text-md ml-4 transition-all ease-in transition-75'>Business Environment Canvas</p>}
                </div >
                <div className={`application_menu_item py-3 opacity-50 ${leftDrawerStatus ? 'justify-start  pl-6' : 'justify-center'} cursor-not-allowed`}>
                    <div className='w-[10%]'><SecureIcon classes='w-6 h-6' /></div>
                    {leftDrawerStatus && <p className='font-semibold text-md ml-4 transition-all ease-in transition-75'>Market Context Canvas</p>}
                </div >
                <div className={`application_menu_item bg-[#38a169] opacity-100  py-3 text-white ${leftDrawerStatus ? 'justify-start  pl-6' : 'justify-center'} cursor-pointer`}>
                    <div className='w-[10%]'><SecureIcon classes='w-6 h-6 !fill-white' /></div>
                    {leftDrawerStatus && <p className='font-semibold text-md ml-4 transition-all ease-in transition-75'>Value Proposition Canvas</p>}
                </div >
                <div className={`application_menu_item py-3 opacity-50 ${leftDrawerStatus ? 'justify-start  pl-6' : 'justify-center'} cursor-not-allowed`}>
                    <div className='w-[10%]'><SecureIcon classes='w-6 h-6' /></div>
                    {leftDrawerStatus && <p className='font-semibold text-md ml-4 transition-all ease-in transition-75'>Empathy Canvas</p>}
                </div >
                <div className={`application_menu_item py-3 opacity-50 ${leftDrawerStatus ? 'justify-start  pl-6' : 'justify-center'} cursor-not-allowed`}>
                    <div className='w-[10%]'><SecureIcon classes='w-6 h-6' /></div>
                    {leftDrawerStatus && <p className='font-semibold text-md ml-4 transition-all ease-in transition-75'>Personal Building Canvas</p>}
                </div >
                <div className={`application_menu_item py-3 opacity-50 ${leftDrawerStatus ? 'justify-start  pl-6' : 'justify-center'} cursor-not-allowed`}>
                    <div className='w-[10%]'><SecureIcon classes='w-6 h-6' /></div>
                    {leftDrawerStatus && <p className='font-semibold text-md ml-4 transition-all ease-in transition-75'>Value Chain Mapping Canvas</p>}
                </div >
                <div className={`application_menu_item py-3 opacity-50 ${leftDrawerStatus ? 'justify-start  pl-6' : 'justify-center'} cursor-not-allowed`}>
                    <div className='w-[10%]'><SecureIcon classes='w-6 h-6' /></div>
                    {leftDrawerStatus && <p className='font-semibold text-md ml-4 transition-all ease-in transition-75'>Competition Matrix</p>}
                </div >
                <div className={`application_menu_item py-3 opacity-50 ${leftDrawerStatus ? 'justify-start  pl-6' : 'justify-center'} cursor-not-allowed`}>
                    <div className='w-[10%]'><SecureIcon classes='w-6 h-6' /></div>
                    {leftDrawerStatus && <p className='font-semibold text-md ml-4 transition-all ease-in transition-75'>Journey Mapping Canvas</p>}
                </div >
                <div className={`application_menu_item py-3 opacity-50 ${leftDrawerStatus ? 'justify-start  pl-6' : 'justify-center'} cursor-not-allowed`}>
                    <div className='w-[10%]'><SecureIcon classes='w-6 h-6' /></div>
                    {leftDrawerStatus && <p className='font-semibold text-md ml-4 transition-all ease-in transition-75'>Market Sizing Canvas</p>}
                </div >
            </LeftDrawer>
            <Backdrop open={leftDrawerStatus} style={{ zIndex: 100 }} />
        </>
    )
}

export default ApplicationMenu