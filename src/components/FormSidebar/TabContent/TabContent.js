import React from 'react';
import { useTheme } from '@emotion/react';
import SwipeableViews from 'react-swipeable-views';
import { useSelector, useDispatch } from 'react-redux';
import {
    selectGains,
    selectPains,
    selectCxJob,
    selectGainCreators,
    selectPainReducers,
    selectProductsServices,
    selectCanvas,
    selectCustomerCanvasActive,
    setCustomerCanvasActive,
    selectValueCanvasActive,
    setValueCanvasActive
} from '../../../features/AppState/AppState';
import CardContainer from './../CardContainer/CardContainer';
const TabContent = () => {
    const dispatch = useDispatch();
    const theme = useTheme();
    const gains = useSelector(selectGains);
    const pains = useSelector(selectPains);
    const cxJob = useSelector(selectCxJob);
    const gainCreators = useSelector(selectGainCreators);
    const painReducers = useSelector(selectPainReducers);
    const productsServices = useSelector(selectProductsServices);
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
                <SwipeableViews
                    axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                    index={customerCanvasActive}
                    onChangeIndex={handleCustomerCanvasActive}
                >
                    <div className='overflow-x-hidden h-full' value={customerCanvasActive} index={0} dir={theme.direction}>
                        <CardContainer contents={gains?.contents} />
                    </div>
                    <div className='overflow-x-hidden h-full' value={customerCanvasActive} index={1} dir={theme.direction}>
                        <CardContainer contents={pains?.contents} />
                    </div>
                    <div className='overflow-x-hidden h-full' value={customerCanvasActive} index={2} dir={theme.direction}>
                        <CardContainer contents={cxJob?.contents} />
                    </div>
                </SwipeableViews>
            }
            {canvas === 0 &&
                <SwipeableViews
                    axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                    index={valueCanvasActive}
                    onChangeIndex={handleValueCanvasActive}
                >
                    <div className='overflow-x-hidden' value={valueCanvasActive} index={0} dir={theme.direction}>
                        <CardContainer contents={gainCreators?.contents} />
                    </div>
                    <div className='overflow-x-hidden' value={valueCanvasActive} index={1} dir={theme.direction}>
                        <CardContainer contents={painReducers?.contents} />
                    </div>
                    <div className='overflow-x-hidden' value={valueCanvasActive} index={2} dir={theme.direction}>
                        <CardContainer contents={productsServices?.contents} />
                    </div>
                </SwipeableViews>
            }
        </>
    )
}

export default TabContent