import React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { useSelector, useDispatch } from 'react-redux';
import {
    selectCanvas,
    selectCustomerCanvasActive,
    setCustomerCanvasActive,
    selectValueCanvasActive,
    setValueCanvasActive
} from '../../../features/AppState/AppState';
const TabHeaders = () => {
    const dispatch = useDispatch()

    const canvas = useSelector(selectCanvas);
    const customerCanvasActive = useSelector(selectCustomerCanvasActive);
    const valueCanvasActive = useSelector(selectValueCanvasActive);

    const handleCustomerCanvasActive = (event, newValue) => {
        dispatch(setCustomerCanvasActive({ name: newValue }))
    };

    const handleValueCanvasActive = (event, newValue) => {
        dispatch(setValueCanvasActive({ name: newValue }))
    };
    return (
        <>
            {canvas === 1 &&
                <Tabs
                    value={customerCanvasActive}
                    onChange={handleCustomerCanvasActive}
                    variant="scrollable"
                    scrollButtons={false}
                    aria-label="Customer Canvas Tabs"
                >
                    <Tab sx={{ width: '33.33%', fontWeight: 'bold', fontSize: '14px' }} label="Gains" />
                    <Tab sx={{ width: '33.33%', fontWeight: 'bold', fontSize: '14px' }} label="Pains" />
                    <Tab sx={{ width: '33.33%', fontWeight: 'bold', fontSize: '14px' }} label="Customer Jobs" />
                </Tabs>
            }
            {canvas === 0 &&
                <Tabs
                    value={valueCanvasActive}
                    onChange={handleValueCanvasActive}
                    variant="scrollable"
                    scrollButtons={false}
                    aria-label="Customer Canvas Tabs"
                >
                    <Tab sx={{ width: '33.33%', fontWeight: 'bold', fontSize: '14px' }} label="Gain Creators" />
                    <Tab sx={{ width: '33.33%', fontWeight: 'bold', fontSize: '14px' }} label="Pain Reducers" />
                    <Tab sx={{ width: '33.33%', fontWeight: 'bold', fontSize: '14px' }} label="Products & Services" />
                </Tabs>
            }
        </>
    )
}

export default TabHeaders