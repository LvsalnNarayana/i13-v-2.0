import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Read your API key from an environment variable or a config file
const apiKey = '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';
// const apiKey = process.env.REACT_APP_OPENAI_API_KEY; // Replace with your actual method of accessing the API key
const maxRequests = 100;

const getRequestCount = () => {
    const count = localStorage.getItem('apiRequestCount');
    return count ? parseInt(count, 10) : 0;
};

const setRequestCount = (count) => {
    localStorage.setItem('apiRequestCount', count.toString());
};

// Configure the baseQuery with the API key and POST method
const baseQuery = fetchBaseQuery({
    baseUrl: 'https://api.openai.com/v1',
    method: 'POST', // Use the POST method
    body: {}, // Include an empty object for now; you will add data to it in the request
    prepareHeaders: (headers) => {
        // Add the API key to the request headers
        headers.set('Authorization', `Bearer ${apiKey}`);
        headers.set('Content-Type', 'application/json'); // Set content type to JSON
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
