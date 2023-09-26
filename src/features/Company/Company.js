import { createSlice } from '@reduxjs/toolkit';

// Define the initial state
const initialState = {
    company_name: '',
    industry: '',
    vertical: '',
    company_type: '',
    companySize: '',
    headquartersLocation: '',
    targetRegions: '',
    fundingStage: '',
    annualRevenue: '',
    businessModel: '',
};

const companyForm = createSlice({
    name: 'company',
    initialState,
    reducers: {
        updateCompanyName: (state, action) => {
            console.log("hello");
            state.company_name = action.payload;
        },
        updateIndustry: (state, action) => {
            state.industry = action.payload;
        },
        updateVertical: (state, action) => {
            state.vertical = action.payload;
        },
        updateCompanyType: (state, action) => {
            state.company_type = action.payload;
        },
        updateCompanySize: (state, action) => {
            state.companySize = action.payload;
        },
        updateHeadquartersLocation: (state, action) => {
            state.headquartersLocation = action.payload;
        },
        updateTargetRegions: (state, action) => {
            state.targetRegions = action.payload;
        },
        updateFundingStage: (state, action) => {
            state.fundingStage = action.payload;
        },
        updateAnnualRevenue: (state, action) => {
            state.annualRevenue = action.payload;
        },
        updateBusinessModel: (state, action) => {
            state.businessModel = action.payload;
        },
    },
});

// Export the actions and reducer
export const {
    updateCompanyName,
    updateIndustry,
    updateVertical,
    updateCompanyType,
    updateCompanySize,
    updateHeadquartersLocation,
    updateTargetRegions,
    updateFundingStage,
    updateAnnualRevenue,
    updateBusinessModel,
} = companyForm.actions;

export const selectCompanyform = (state) => state.companyform;
export default companyForm.reducer;
