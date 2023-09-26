# Getting Started with Create React App and Redux

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), using the [Redux](https://redux.js.org/) and [Redux Toolkit](https://redux-toolkit.js.org/) template.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified, and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc.) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point, you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However, we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.



## Navigation

### 1. Basic Form and Validation

- A landing page with a company details form is included with basic required validation.

### 2. Navigation to Value Proposition Canvas

- After saving the form, the Value Proposition Canvas page is loaded.

### 3. Value Proposition Canvas

- On the Canvas page, there are multiple components to visualize the canvas. An input form to add notes to various sections of the canvas is included.

### 4. Tab Navigation

- Tab Navigation is used to navigate to different parts of the canvas and add inputs to the canvas.

### 5. Input Fields and Data Storage

- The inputs provided are volatile and erased on refresh. These inputs are stored in the Redux state of the application. This Redux state can be used to make API calls to the backend to store data in real-time.

### 6. Input Deletion

- These inputs can be deleted using the delete button on the card.

### 7. ChatBot

- The "Ask Bob's help" section opens a modal box. This is a modal box integrated with GPT-3. Provide the API key for using GPT-3 to get better help while using the Value Proposition Canvas.

### Future Improvements:

### 1. SVG-Based Canvas

- Enhance the Value Proposition Canvas with an SVG-based canvas using libraries like Fabric.js or D3.js.
- Store canvas data in the backend using Redux and other libraries.

### 2. Generate PDF Reports

- Implement PDF report generation for the canvas using the `react-pdf` library or a similar solution.

### 3. User Management

- Strengthen the security of created canvases by adding a user management system.
- Explore Firebase Authentication or custom authentication and authorization solutions.
