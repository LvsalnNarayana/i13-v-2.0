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
      <div className='relative w-full flex justify-center'>
        <img src="https://res.cloudinary.com/dlc4g33ea/image/upload/v1695740912/lqduxdwn1e7wif9zfzee.png" className='w-[55%]' alt="" />
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