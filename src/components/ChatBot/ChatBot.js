import React, { useState } from 'react';
import Modal from '@mui/material/Modal';
import { Avatar, Divider } from '@mui/material';
import Send from '../Icons/Send';
import CloseIcon from '@mui/icons-material/Close';
import { useSelector, useDispatch } from 'react-redux';
import { selectAssistantModel, closeAssistant } from '../../features/AppState/AppState';
import { useLazyChatQuery } from '../../features/Api/Api';

const ChatBot = () => {
    const dispatch = useDispatch();
    const [input, setInput] = useState('');
    const [trigger, data, error, isFetching] = useLazyChatQuery();
    const assistantModalStatus = useSelector(selectAssistantModel);

    const handleCloseAssistant = () => {
        dispatch(closeAssistant());
    };

    const handleGptQuery = () => {
        // Set the predefined question
        const predefinedQuestion = 'What is value proportionate canvas?';

        // Trigger the API query with the predefined question
        trigger(predefinedQuestion, {
            skip: false,
        });
    };

    return (
        <>
            <Modal
                open={assistantModalStatus}
                onClose={handleCloseAssistant}
                disableEnforceFocus={true}
                disableEscapeKeyDown={true}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                BackdropProps={{
                    onClick: (event) => {
                        event.stopPropagation();
                    },
                }}
            >
                <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-xl bg-green-50 rounded-md overflow-hidden'>
                    <div className='p-4 bg-green-50 w-full flex-justify-start items-center'>
                        <div className='flex justify-between items-center'>
                            <h3 className='text-xl font-semibold'>
                                Hey, My name is Bob let's talk!
                            </h3>
                            <div onClick={handleCloseAssistant} className='cursor-pointer'>
                                <CloseIcon />
                            </div>
                        </div>
                        <Divider className='!my-6' />
                        <div className='flex justify-start items-center flex-col max-h-[300px] overflow-auto scrollbar-thin scrollbar-w-2 scrollbar-rounded-xl scrollbar-thumb-[#38a169] pr-4'>
                            <div className='flex justify-start items-start w-[90%] mb-10'>
                                <Avatar className='mt-3' sx={{ width: 40, height: 40 }} />
                                <div className='bg-white w-fit ml-5 min-h-12 p-2 px-4' style={{
                                    borderRadius: '10px',
                                    background: '#fff',
                                    boxShadow: '5px 5px 13px #c5cfcb,-5px -5px 13px #ffffff'
                                }}>
                                    <p className='text-md w-fit'>what is value proportion canvas? </p>
                                </div>
                            </div>
                            <div className='flex justify-start items-start w-[90%] mb-10'>
                                <Avatar className='mt-3' sx={{ width: 40, height: 40 }} />
                                <div className='w-fit ml-5 min-h-12 p-2 px-4' style={{
                                    borderRadius: '10px',
                                    background: '#fff',
                                    boxShadow: '5px 5px 13px #c5cfcb,-5px -5px 13px #ffffff'
                                }}>
                                    <p className='text-md'> A Value Proposition Canvas (originally from Strategyzer)  is a tool to achieve Product-Market fit. It helps you get to the bottom of a customer’s pain point and build solutions that provides real value. </p>
                                </div>
                            </div>
                            <div className='flex justify-end items-start w-full mb-10'>
                                <button className='border-2 border-[#38a169] text-[#38a169] w-fit p-3 rounded-md'>
                                    What is Value Proportion Canvas?
                                </button>
                            </div>
                        </div>
                        <Divider className='!my-6' />
                        <div className="relative flex items-center">
                            <input
                                id='virtual_assistant_input'
                                name='virtual_assistant_input'
                                value={'What is value proportionate canvas?'}
                                onChange={(e) => setInput(e.target.value)}
                                type="text"
                                className="h-12 p-2 pr-10 text-md border-2 border-[#38a169] bg-white w-full rounded-md"
                                placeholder="Type your message..."
                            />
                            <button onClick={handleGptQuery} className="absolute top-0 right-0 h-full w-10 flex items-center justify-center text-white rounded-r-md">
                                <Send />
                            </button>
                        </div>
                    </div>
                </div>
            </Modal>
        </>
    )
}

export default ChatBot