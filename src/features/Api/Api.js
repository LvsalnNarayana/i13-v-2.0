import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const apiKey = 'ENTER YOUR API KEY HERE';
const maxRequests = 100;

const getRequestCount = () => {
    const count = localStorage.getItem('apiRequestCount');
    return count ? parseInt(count, 10) : 0;
};

const setRequestCount = (count) => {
    localStorage.setItem('apiRequestCount', count.toString());
};

const baseQuery = fetchBaseQuery({
    baseUrl: 'https://api.openai.com/v1',
    method: 'POST', 
    body: {}, 
    prepareHeaders: (headers) => {
        headers.set('Authorization', `Bearer ${apiKey}`);
        headers.set('Content-Type', 'application/json'); 
        return headers;
    },
});

export const chatGptApi = createApi({
    baseQuery,
    endpoints: (builder) => ({
        chat: builder.query({
            query: (question) => {
                const requestCount = getRequestCount();
                if (requestCount >= maxRequests) {
                    throw new Error('API request limit exceeded');
                }
                if (
                    question !== 'What is value proportionate canvas?' &&
                    question !== 'What is business model canvas?'
                ) {
                    throw Error('Invalid question');
                }
                setRequestCount(requestCount + 1);

                // Define the request data object
                const requestData = {
                    "model": "gpt-3.5-turbo-instruct",
                    prompt: question,
                };

                return {
                    url: '/completions',
                    method: 'POST', // Use POST method
                    body: JSON.stringify(requestData), // Convert data to JSON
                };
            },
        }),
    }),
});

export const { useLazyChatQuery } = chatGptApi;
export default chatGptApi.reducer;
