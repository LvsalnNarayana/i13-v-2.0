import React from 'react';
import CustomerCanvas from '../components/CustomerCanvas/CustomerCanvas';
import FormSidebar from '../components/FormSidebar/FormSidebar';
import { useSelector, useDispatch } from 'react-redux';
import SwipeableViews from 'react-swipeable-views';
import { useTheme } from '@emotion/react';
import {
    selectCanvas,
    setCanvas,
    selectCustomerCanvas,
    selectValueCanvas
} from '../features/AppState/AppState';
import LinearProgress from '@mui/material/LinearProgress';
import ValueCanvas from './../components/ValueCanvas/ValueCanvas';

function calculatePercentage(object) {
    const finishedCount = Object.values(object).filter((element) => element.isFinished).length;
    if (finishedCount >= 3) {
        return 100;
    } else if (finishedCount === 2) {
        return 66;
    } else if (finishedCount === 1) {
        return 33;
    }
    return 0;
}
const VPCCanvasEditor = () => {
    const theme = useTheme()
    const dispatch = useDispatch();
    const canvasStatus = useSelector(selectCanvas);
    const customerCanvas = useSelector(selectCustomerCanvas);
    const valueCanvas = useSelector(selectValueCanvas);

    const handleActiveCanvas = (step) => {
        dispatch(setCanvas({ name: step }))
    };

    return (
        <>
            <div className='canvasEditor'>
                <div className='canvasContainer'>
                    <div className='canvasStatusMonitor'>
                        <div
                            onClick={() => handleActiveCanvas(0)}
                            className={`canvasStatusController mr-2`}
                            style={canvasStatus === 0 ? { boxShadow: '1px 1px 5px rgba(6, 188, 6, 0.6)' } : {}}
                        >
                            <p className='text-md font-semibold mb-2'>Value Map</p>
                            <LinearProgress
                                className='w-full !h-[8px]'
                                variant="determinate"
                                value={calculatePercentage(valueCanvas)} />
                        </div>
                        <div
                            onClick={() => handleActiveCanvas(1)}
                            className='canvasStatusController ml-2'
                            style={canvasStatus === 1 ? { boxShadow: '0px 0px 12px rgba(6, 188, 6, 0.6)' } : {}}>
                            <p className='text-md font-semibold mb-2'>Customer Profile</p>
                            <LinearProgress
                                className='w-full !h-[8px]'
                                variant="determinate"
                                value={calculatePercentage(customerCanvas)} />
                        </div>
                    </div>
                    <div className='canvasCarousel'>
                        <SwipeableViews
                            style={{ width: '100%' }}
                            axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                            index={canvasStatus}
                            onChangeIndex={handleActiveCanvas}
                        >
                            <div value={canvasStatus} index={0} dir={theme.direction} className='canvasStatus'>
                                <ValueCanvas />

                            </div>
                            <div value={canvasStatus} index={1} dir={theme.direction} className='canvasStatus'>
                                <CustomerCanvas />
                                {/* <img src="/customerProfile.svg" className='w-1/2' alt="" /> */}

                            </div>
                        </SwipeableViews>
                    </div>
                </div>
                <div className='formSidebarContainer'>
                    <FormSidebar />
                </div>
            </div >
        </>
    )
}

export default VPCCanvasEditor