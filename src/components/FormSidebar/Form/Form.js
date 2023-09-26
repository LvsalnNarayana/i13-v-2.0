import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ChatBot from '../../ChatBot/ChatBot';
import { Button } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import {
  openAssistant,
  selectCanvas,
  selectCustomerCanvasActive,
  selectValueCanvasActive,
  addCustomerProfile,
  addValueMap
} from '../../../features/AppState/AppState';
const Form = () => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState('');
  const canvasStatus = useSelector(selectCanvas);
  const CustomerStatus = useSelector(selectCustomerCanvasActive);
  const ValueStatus = useSelector(selectValueCanvasActive);

  const handleOpenAssistant = () => {
    dispatch(openAssistant())
  };
  const handleInputChange = () => {

    switch (canvasStatus) {
      case 1:
        switch (CustomerStatus) {
          case 0:
            dispatch(addCustomerProfile({ name: 'gains', inputValue: inputValue }));
            setInputValue('');
            break;
          case 1:
            dispatch(addCustomerProfile({ name: 'pains', inputValue: inputValue }));
            setInputValue('');
            break;
          case 2:
            dispatch(addCustomerProfile({ name: 'cxjob', inputValue: inputValue }));
            setInputValue('');
            break;
          default:
            break;
        }
        break;
      case 0:
        switch (ValueStatus) {
          case 0:
            dispatch(addValueMap({ name: 'gainCreators', inputValue: inputValue }));
            setInputValue('');
            break;
          case 1:
            dispatch(addValueMap({ name: 'painReducers', inputValue: inputValue }));
            setInputValue('');
            break;
          case 2:
            dispatch(addValueMap({ name: 'productsServices', inputValue: inputValue }));
            setInputValue('');
            break;
          default:
            break;
        }
        break;
      default:
        break;
    }
  }
  return (
    <div>
      <textarea
        className='relative text-md bg-white border-2 border-green-600 focus:border-green-600 hover:border-green-700 active:border-green-700 rounded-md resize-none w-full h-22 max-h-22 p-2 placeholder-[#38a169] placeholder:text-md mt-6 mb-4'
        placeholder='Enter Your Input Here'
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      >
      </textarea>
      <div className='grid grid-cols-2 gap-2'>
        <Button
          disabled={inputValue === ''}
          variant='contained'
          onClick={handleInputChange}
          id='submitInput'
          sx={{
            '&:disabled': {
              opacity: 0.6,
              backgroundColor: theme.palette.primary.main,
            },
          }}
          className='w-full px-8 py-2 rounded-md !text-white text-md'>
          + Save
        </Button>
        <Button
          onClick={handleOpenAssistant}
          variant='outlined'
          className='w-full border-2 px-8 py-2 rounded-md text-semibold text-md cursor-pointer'>
          Ask Bob's Help
        </Button>
      </div>
      <ChatBot />
    </div>
  )
}

export default Form