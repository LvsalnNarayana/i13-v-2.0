import React from 'react';
import Form from './Form/Form';
import TabHeaders from './TabHeaders/TabHeaders';
import TabContent from './TabContent/TabContent';


const FormSidebar = () => {
  return (
    <>
      <TabHeaders />
      <Form />
      <div className='overflow-auto overflow-x-hidden max-h-[400px] xl:max-h-[300px] lg:max-h-[300px] 2xl:max-h-300px] scrollbar-thin scrollbar-thumb-rounded-xl scrollbar-thumb-[#38a169] pr-4 mt-3'>
        <TabContent />
      </div>
    </>
  )
}

export default FormSidebar