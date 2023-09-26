import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import { useSelector, useDispatch } from 'react-redux';
import {
  deleteValueMap,
  selectCanvas,
  selectCustomerCanvasActive,
  selectValueCanvasActive,
  deleteCustomerProfile
} from '../../../features/AppState/AppState';
import { IconButton } from '@mui/material';
const Card = (props) => {
  const dispatch = useDispatch()
  const canvasStatus = useSelector(selectCanvas);
  const CustomerStatus = useSelector(selectCustomerCanvasActive);
  const ValueStatus = useSelector(selectValueCanvasActive);
  const handleDeleteEntry = (contentId) => {
    console.log(contentId);
    switch (canvasStatus) {
      case 1:
        switch (CustomerStatus) {
          case 0:
            dispatch(deleteCustomerProfile({ name: 'gains', contentId }));
            break;
          case 1:
            dispatch(deleteCustomerProfile({ name: 'pains', contentId }));
            break;
          case 2:
            dispatch(deleteCustomerProfile({ name: 'cxjob', contentId }));
            break;
          default:
            break;
        }
        break;
      case 0:
        switch (ValueStatus) {
          case 0:
            dispatch(deleteValueMap({ name: 'gainCreators', contentId }));
            break;
          case 1:
            dispatch(deleteValueMap({ name: 'painReducers', contentId }));
            break;
          case 2:
            dispatch(deleteValueMap({ name: 'productsServices', contentId }));
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
    <div className='p-3 rounded-md mt-7 m-2 flex justify-between items-center' style={{
      borderRadius: '10px',
      background: '#fff',
      boxShadow: '3px 3px 5px #c5cfcb,-3px -3px 5px #ffffff'
    }}>
      <p className='text-md'>
        {props?.content?.data}
      </p>
      <IconButton onClick={() => handleDeleteEntry(props?.content?.id)}>
        <DeleteIcon className='!text-[#838383] cursor-pointer' />
      </IconButton>
    </div>
  )
}

export default Card