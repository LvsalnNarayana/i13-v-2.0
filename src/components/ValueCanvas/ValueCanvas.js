import React from 'react';
import '../../Canvas.css';
import { useSelector } from 'react-redux';
import {
    selectGainCreators,
    selectPainReducers,
    selectProductsServices
} from '../../features/AppState/AppState';
import Note from '../Note/Note';
const ValueCanvas = () => {
    const gainCreators = useSelector(selectGainCreators);
    const painReducers = useSelector(selectPainReducers);
    const productsServices = useSelector(selectProductsServices);
    return (
        <>
            <div className='relative w-full flex justify-center'>
                <img src="/valueMap.svg" className='w-[55%]' alt="" />
                <Note
                    classes='note_css top-8 right-52'
                    contents={gainCreators?.contents} name={'Gain Creators'} />
                <Note
                    classes='note_css top-48 left-44'
                    contents={painReducers?.contents} name={'Pain Reducers'} />
                <Note
                    classes='note_css top-72 right-52'
                    contents={productsServices?.contents} name={'Products & Services'} />
            </div>
        </>
    )
}

export default ValueCanvas