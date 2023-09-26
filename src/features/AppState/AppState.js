import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    rightDrawer: false,
    leftDrawer: false,
    assistantModel: false,
    canvas: 0,
    customerProfile: false,
    valueMap: false,
    customerCanvasActive: 0,
    valueCanvasActive: 0,
    customerCanvas: {
        gains: {
            contents: [],
            isFinished: false
        },
        pains: {
            contents: [],
            isFinished: false
        },
        cxjob: {
            contents: [],
            isFinished: false
        }
    },
    valueCanvas: {
        gainCreators: {
            contents: [],
            isFinished: false
        },
        painReducers: {
            contents: [],
            isFinished: false
        },
        productsServices: {
            contents: [],
            isFinished: false
        }
    }
};


export const ApplicationState = createSlice({
    name: 'application',
    initialState,
    reducers: {
        openRightDrawer: (state, action) => {
            state.rightDrawer = true;
            if (state.leftDrawer === true) {
                state.leftDrawer = false;
            }
        },
        closeRightDrawer: (state, action) => {
            state.rightDrawer = false;
        },
        openLeftDrawer: (state, action) => {
            state.leftDrawer = true;
            if (state.rightDrawer === true) {
                state.rightDrawer = false;
            }
        },
        closeLeftDrawer: (state, action) => {
            state.leftDrawer = false;
        },
        openAssistant: (state, action) => {
            state.assistantModel = true;
        },
        closeAssistant: (state, action) => {
            state.assistantModel = false;
        },
        setCustomerCanvasActive: (state, action) => {
            const { name } = action.payload;
            state.customerCanvasActive = name;
        },
        setValueCanvasActive: (state, action) => {
            const { name } = action.payload;
            state.valueCanvasActive = name;
        },
        setCanvas: (state, action) => {
            const { name } = action.payload;
            state.canvas = name;
        },
        addCustomerProfile: (state, action) => {
            const { inputValue, name } = action.payload;
            state.customerCanvas[name].contents.push({ id: (state?.customerCanvas?.[name]?.contents?.length + 1), data: inputValue });
            if (state.customerCanvas[name].contents.length > 0) {
                state.customerCanvas[name].isFinished = true;
            }
            const customerProfileStatus = state.customerCanvas.gains.contents.length > 0 &&
                state.customerCanvas.pains.contents.length > 0 &&
                state.customerCanvas.cxjob.contents.length > 0;
            state.customerProfile = customerProfileStatus;
        },
        deleteCustomerProfile: (state, action) => {
            const { contentId, name } = action.payload;
            state.customerCanvas[name].contents = state.customerCanvas[name].contents.filter(
                (content) => content.id !== contentId
            );
            state.customerCanvas[name].isFinished = state.customerCanvas[name].contents.length > 0;
            const customerProfileStatus = state.customerCanvas.gains.contents.length > 0 &&
                state.customerCanvas.pains.contents.length > 0 &&
                state.customerCanvas.cxjob.contents.length > 0;
            state.customerProfile = customerProfileStatus;
        },
        addValueMap: (state, action) => {
            const { inputValue, name } = action.payload;
            state.valueCanvas[name].contents.push({ id: (state?.valueCanvas?.[name]?.contents?.length + 1), data: inputValue });
            if (state.valueCanvas[name].contents.length > 0) {
                state.valueCanvas[name].isFinished = true;
            }
            const valueMapStatus = state.valueCanvas.gainCreators.contents.length > 0 &&
                state.valueCanvas.painReducers.contents.length > 0 &&
                state.valueCanvas.productsServices.contents.length > 0;
            state.valueMap = valueMapStatus;
        },
        deleteValueMap: (state, action) => {
            const { contentId, name } = action.payload;
            state.valueCanvas[name].contents = state.valueCanvas[name].contents.filter(
                (content) => content.id !== contentId
            );
            state.valueCanvas[name].isFinished = state.valueCanvas[name].contents.length > 0;
            const valueMapStatus = state.valueCanvas.gainCreators.contents.length > 0 &&
                state.valueCanvas.painReducers.contents.length > 0 &&
                state.valueCanvas.productsServices.contents.length > 0;
            state.valueMap = valueMapStatus;
        },
    },
});

export const {
    openRightDrawer,
    closeRightDrawer,
    openLeftDrawer,
    closeLeftDrawer,
    openAssistant,
    closeAssistant,
    finishCustomerProfile,
    resetCustomerProfile,
    finishValueMap,
    resetValueMap,
    addCustomerProfile,
    deleteCustomerProfile,
    addValueMap,
    deleteValueMap,
    setCustomerCanvasActive,
    setValueCanvasActive,
    setCanvas
} = ApplicationState.actions;


export const selectRightDrawer = (state) => state.application.rightDrawer;
export const selectLeftDrawer = (state) => state.application.leftDrawer;
export const selectAssistantModel = (state) => state.application.assistantModel;
export const selectCustomerProfile = (state) => state.application.customerProfile;
export const selectValueMap = (state) => state.application.valueMap;
export const selectCustomerCanvasActive = (state) => state.application.customerCanvasActive;
export const selectValueCanvasActive = (state) => state.application.valueCanvasActive;
export const selectCanvas = (state) => state.application.canvas;

export const selectCustomerCanvas = (state) => state.application.customerCanvas;
export const selectValueCanvas = (state) => state.application.valueCanvas;
export const selectGains = (state) => state.application.customerCanvas.gains;
export const selectPains = (state) => state.application.customerCanvas.pains;
export const selectCxJob = (state) => state.application.customerCanvas.cxjob;

export const selectGainCreators = (state) =>
    state.application.valueCanvas.gainCreators;
export const selectPainReducers = (state) =>
    state.application.valueCanvas.painReducers;
export const selectProductsServices = (state) =>
    state.application.valueCanvas.productsServices;

export default ApplicationState.reducer;
