import React from 'react';
import '../../Canvas.css';
import { useSelector } from 'react-redux';
import {
  selectCxJob,
  selectGains,
  selectPains
} from '../../features/AppState/AppState';
import Note from '../Note/Note';
const CustomerCanvas = () => {
  const gains = useSelector(selectGains);
  const pains = useSelector(selectPains);
  const cxjobs = useSelector(selectCxJob)
  return (
    <>
      {/* 
        bg-[#DC4A4A]
        bg-[#0EA98D]
        bg-[#099DB0] 
      */}
      <div className='relative w-full flex justify-center'>
        <img src="/customerProfile.svg" className='w-[55%]' alt="" />
        {/* <div className="wrapper rounded-full">
          <div className="sector bg-[#38a169]" style={{ transform: 'rotate(360deg) skew(160deg)' }}></div>
          <div className="sector bg-[#38a169]" style={{ transform: 'rotate(240deg) skew(150deg)' }}></div>
          <div className="sector bg-[#38a169]" style={{ transform: 'rotate(110deg) skew(140deg)' }}></div>
        </div> */}
        <Note
          classes='note_css top-8 left-74'
          contents={gains?.contents} name={'Gains'} />
        <Note
          classes='note_css bottom-8 left-60'
          contents={pains?.contents} name={'Pains'} />
        <Note
          classes='note_css top-64 right-48'
          contents={cxjobs?.contents} name={'Customer Jobs'} />
      </div>
    </>
  )
}

export default CustomerCanvas