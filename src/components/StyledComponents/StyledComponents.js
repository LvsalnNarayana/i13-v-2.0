// eslint-disable-next-line no-unused-vars
import React from 'react';
import { styled } from '@mui/material/styles';
import MuiAppBar from '@mui/material/AppBar';
import MuiDrawer from '@mui/material/Drawer';

export const drawerWidth = 300;

const openedMixin = (theme) => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.easeIn,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
});

const closedMixin = (theme) => ({
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    borderRight: '1px solid rgba(6, 188, 6, 0.6)',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
        width: `calc(${theme.spacing(8)} + 1px)`,
    },
});

export const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'RightOpen' && prop !== 'LeftOpen' })(
    ({ theme, RightOpen, LeftOpen }) => ({
        flexGrow: 1,
        zIndex:5,
        marginRight: RightOpen ? drawerWidth : 0,
        // marginLeft: LeftOpen ? drawerWidth : 0,
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeIn,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
);

export const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'LeftOpen' && prop !== 'RightOpen',
})(({ theme, LeftOpen, RightOpen }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(LeftOpen && {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.easeIn,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
    ...(RightOpen && {
        marginRight: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.easeIn,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
    ...(RightOpen && LeftOpen && {
        marginRight: drawerWidth,
        width: `calc(100% - ${2 * drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.easeIn,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
    // backgroundColor: '#38a169'
}));

export const RightDrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    justifyContent: 'flex-start',
    ...theme.mixins.toolbar,
}));
export const RightDrawer = styled(MuiDrawer)(({ theme }) => ({
    flexShrink: 0,
}));

export const LeftDrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
}));
export const LeftDrawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'LeftOpen' })(
    ({ theme, LeftOpen }) => ({
        // width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',
        '& .MuiDrawer-paper': {
            borderRight: '0px'
        },
        ...(LeftOpen && {
            ...openedMixin(theme),
            '& .MuiDrawer-paper': {
                ...openedMixin(theme),
                boxShadow: '0px 0px 12px rgba(6, 188, 6, 0.6)', // Fixed syntax issue here
            },
        }),
        ...(!LeftOpen && {
            ...closedMixin(theme),
            '& .MuiDrawer-paper': closedMixin(theme),
        }),
    }),
);
