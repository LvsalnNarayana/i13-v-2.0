import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { motion } from 'framer-motion';
import {
    TextField,
    Autocomplete,
    FormControl,
    MenuItem,
    Select,
    Button,
} from '@mui/material';
import {
    selectCompanyform,
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
} from '../../features/Company/Company'; // Import your Redux actions

import { countries, industries } from '../../constants';

const Home = () => {
    const dispatch = useDispatch();
    const company = useSelector(selectCompanyform);
    const [formState, setFormState] = useState(false);
    const [formErrors, setFormErrors] = useState({});

    const handleFormState = () => {
        setFormState(true);
    };

    const handleSave = () => {
        const errors = {};

        if (!company.companyName) {
            errors.companyName = 'Company name is required.';
        }
        if (!company.industry) {
            errors.industry = 'Industry is required.';
        }
        if (!company.vertical) {
            errors.vertical = 'Vertical is required.';
        }
        if (!company.companyType) {
            errors.companyType = 'Company type is required.';
        }
        if (!company.companySize) {
            errors.companySize = 'Company size is required.';
        }
        if (!company.headquartersLocation) {
            errors.headquartersLocation = 'Headquarters location is required.';
        }
        if (!company.targetRegions) {
            errors.targetRegions = 'Target regions are required.';
        }
        if (!company.fundingStage) {
            errors.fundingStage = 'Funding stage is required.';
        }
        if (!company.annualRevenue) {
            errors.annualRevenue = 'Annual revenue is required.';
        }
        if (!company.businessModel) {
            errors.businessModel = 'Business model is required.';
        }

        if (Object.keys(errors).length === 0) {
            // Dispatch the appropriate actions to update the Redux state
            dispatch(updateCompanyName(company.companyName));
            dispatch(updateIndustry(company.industry));
            dispatch(updateVertical(company.vertical));
            dispatch(updateCompanyType(company.companyType));
            dispatch(updateCompanySize(company.companySize));
            dispatch(updateHeadquartersLocation(company.headquartersLocation));
            dispatch(updateTargetRegions(company.targetRegions));
            dispatch(updateFundingStage(company.fundingStage));
            dispatch(updateAnnualRevenue(company.annualRevenue));
            dispatch(updateBusinessModel(company.businessModel));
        } else {
            setFormErrors(errors);
        }
    };

    const textVariants = {
        hidden: {
            opacity: 0,
            y: 700,
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.3,
            },
        },
        exit: {
            opacity: 0,
            y: -700,
            transition: {
                duration: 0.3,
            },
        },
    };

    const formVariants = {
        hidden: {
            opacity: 0,
            y: -700,
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.3,
            },
        },
        exit: {
            opacity: 0,
            y: 700,
            transition: {
                duration: 0.3,
            },
        },
    };

    return (
        <div className='flex flex-col justify-center items-center min-h-screen text-center overflow-hidden'>
            <motion.div
                initial="hidden"
                animate={formState ? "exit" : "visible"}
                variants={textVariants}
            >
                <h1 className='text-3xl font-semibold mb-8'>
                    Hi! I'm Bob, your personal assistant👋.<br /> I'll be guiding you through your onboarding process.
                </h1>
                <button
                    onClick={handleFormState}
                    className='bg-[#38a169] px-10 py-3 rounded-md text-white font-semibold'>
                    Let's get started!
                </button>
            </motion.div>
            <motion.div
                className='w-1/3'
                initial="hidden"
                animate={!formState ? "exit" : "visible"}
                variants={formVariants}>
                <form className='w-full'>
                    <label htmlFor='company_name' className='text-lg my-4 block font-semibold text-left'>What is the name of your company?</label>
                    <TextField
                        id="company_name"
                        name='company_name'
                        value={company.company_name || ""}
                        size="small"
                        className='w-full'
                        onChange={(event) => { dispatch(updateCompanyName({ ...company, company_name: event.target.value })) }}
                    />
                    {formErrors.company_name && (
                        <p className="text-red-500">{formErrors.company_name}</p>
                    )}
                    <label htmlFor='industry_type' className='text-lg my-4 block font-semibold text-left'>What industry is your company in?</label>
                    <Autocomplete
                        value={company.industry || ""}
                        onChange={(event, newValue) => {
                            dispatch(updateCompanyName({ ...company, industry: newValue?.label || "" }))
                        }}
                        inputValue={company.industry || ""}
                        id="industry_type"
                        options={industries}
                        freeSolo
                        disableClearable
                        size='small'
                        renderInput={(params) => (
                            <TextField
                                {...params}
                                InputProps={{
                                    ...params.InputProps,
                                    type: 'search',
                                }}
                            />
                        )}
                    />
                    {formErrors.industry && (
                        <p className="text-red-500">{formErrors.industry}</p>
                    )}
                    <label htmlFor='vertical' className='text-lg my-4 block font-semibold text-left'>Within your industry, what particular vertical are you tackling?</label>
                    <TextField
                        id="vertical"
                        name='vertical'
                        value={company.vertical || ""}
                        size="small"
                        className='w-full'
                        onChange={(event) => { dispatch(updateVertical({ ...company, vertical: event.target.value })) }}
                    />
                    {formErrors.vertical && (
                        <p className="text-red-500">{formErrors.vertical}</p>
                    )}
                    <label htmlFor='company_type' className='text-lg my-4 block font-semibold text-left'>What type of company are you?</label>
                    <FormControl fullWidth size='small'>
                        <Select
                            id="company_type"
                            onChange={(event) => { dispatch(updateCompanyType({ ...company, company_type: event.target.value })) }}
                            variant='outlined'
                            name='company_type'
                            className='text-left'
                            value={company.company_type || ''} // Set a default value ('') if company_type is undefined
                        >
                            <MenuItem value={'B2B'}>B2B</MenuItem>
                            <MenuItem value={'B2C'}>B2C</MenuItem>
                            <MenuItem value={'B2B2C'}>B2B2C</MenuItem>
                            <MenuItem value={'Manufacturing'}>Manufacturing</MenuItem>
                            <MenuItem value={'Retail'}>Retail</MenuItem>
                            <MenuItem value={'startup'}>Tech Startup</MenuItem>
                        </Select>
                    </FormControl>
                    {formErrors.company_type && (
                        <p className="text-red-500">{formErrors.company_type}</p>
                    )}
                    <label htmlFor='company_size' className='text-lg my-4 block font-semibold text-left'>What is the size of your company?</label>
                    <FormControl fullWidth size='small'>
                        <Select
                            id="company_size"
                            value={company.companySize || ''}
                            onChange={(event) => { dispatch(updateCompanySize({ ...company, companySize: event.target.value })) }}
                            variant='outlined'
                            name='company_size'
                            className='text-left'
                        >
                            <MenuItem value={10}>1-10</MenuItem>
                            <MenuItem value={20}>11-50</MenuItem>
                            <MenuItem value={30}>51-200</MenuItem>
                            <MenuItem value={40}>201-500</MenuItem>
                            <MenuItem value={50}>501-1000</MenuItem>
                            <MenuItem value={60}>1000+</MenuItem>
                        </Select>
                    </FormControl>
                    {formErrors.companySize && (
                        <p className="text-red-500">{formErrors.companySize}</p>
                    )}
                    <label htmlFor='company_headquarters' className='text-lg my-4 block font-semibold text-left'>Where is the primary headquarters of your company?</label>
                    <Autocomplete
                        value={company.headquartersLocation || ""}
                        disableClearable
                        onChange={(event) => {
                            event.preventDefault();
                            dispatch(updateHeadquartersLocation({ ...company, headquartersLocation: event.target.value?.label }))
                        }}
                        id="company_headquarters"
                        options={countries}
                        freeSolo
                        size='small'
                        renderInput={(params) => (
                            <TextField
                                {...params}
                                InputProps={{
                                    ...params.InputProps,
                                    type: 'search',
                                }}
                            />
                        )}
                    />
                    {formErrors.headquartersLocation && (
                        <p className="text-red-500">{formErrors.headquartersLocation}</p>
                    )}
                    <label htmlFor='company_target_regions' className='text-lg my-4 block font-semibold text-left'>Where are the primary target regions of your company?</label>
                    <Autocomplete
                        value={company.targetRegions || ""}
                        onChange={(event) => {
                            event.preventDefault();
                            dispatch(updateTargetRegions({ ...company, targetRegions: event.target.value }))
                        }}
                        id="company_target_regions"
                        options={countries}
                        freeSolo
                        size='small'
                        disableClearable
                        renderInput={(params) => (
                            <TextField
                                {...params}
                                InputProps={{
                                    ...params.InputProps,
                                    type: 'search',
                                }}
                            />
                        )}
                    />
                    {formErrors.targetRegions && (
                        <p className="text-red-500">{formErrors.targetRegions}</p>
                    )}
                    <label htmlFor='company_funding_stage' className='text-lg my-4 block font-semibold text-left'>What stage of funding are you in?</label>
                    <FormControl fullWidth size='small'>
                        <Select
                            id="company_funding_stage"
                            value={company.fundingStage || ''}
                            onChange={(event) => { dispatch(updateFundingStage({ ...company, fundingStage: event.target.value })) }}
                            variant='outlined'
                            name='company_funding_stage'
                            className='text-left'
                        >
                            <MenuItem value="">Select a stage</MenuItem>
                            <MenuItem value="Pre-seed">Pre-seed</MenuItem>
                            <MenuItem value="Seed">Seed</MenuItem>
                            <MenuItem value="Series A">Series A</MenuItem>
                            <MenuItem value="Series B">Series B</MenuItem>
                        </Select>
                    </FormControl>
                    {formErrors.fundingStage && (
                        <p className="text-red-500">{formErrors.fundingStage}</p>
                    )}
                    <label htmlFor='company_revenue' className='text-lg my-4 block font-semibold text-left'>What is your annual revenue?</label>
                    <FormControl fullWidth size='small'>
                        <Select
                            id="company_revenue"
                            value={company.annualRevenue || ''}
                            onChange={(event) => { dispatch(updateAnnualRevenue({ ...company, annualRevenue: event.target.value })) }}
                            variant='outlined'
                            name='company_revenue'
                            className='text-left'
                        >
                            <MenuItem value="$0">Less than $1k</MenuItem>
                            <MenuItem value="$1k-$100k">$1k - $100k</MenuItem>
                            <MenuItem value="$100k-$1M">$100k - $1M</MenuItem>
                            <MenuItem value="$1M-$10M">$1M - $10M</MenuItem>
                            <MenuItem value="$10M+">$10M+</MenuItem>
                        </Select>
                    </FormControl>
                    {formErrors.annualRevenue && (
                        <p className="text-red-500">{formErrors.annualRevenue}</p>
                    )}
                    <label htmlFor='company_model' className='text-lg my-4 block font-semibold text-left'>How would you describe your business model?</label>
                    <FormControl fullWidth size='small'>
                        <Select
                            id="company_model"
                            value={company.businessModel || ''}
                            onChange={(event) => { dispatch(updateBusinessModel({ ...company, businessModel: event.target.value })) }}
                            variant='outlined'
                            name='company_model'
                            className='text-left'
                        >
                            <MenuItem value="">Select a business model</MenuItem>
                            <MenuItem value="Subscription">Subscription</MenuItem>
                            <MenuItem value="Transactional">Transactional</MenuItem>
                            <MenuItem value="Freemium">Freemium</MenuItem>
                            <MenuItem value="Marketplace">Marketplace</MenuItem>
                        </Select>
                    </FormControl>
                    {formErrors.businessModel && (
                        <p className="text-red-500">{formErrors.businessModel}</p>
                    )}
                    <Button onClick={handleSave} className='bg-green py-3 px-5 rounded-md'>Save</Button>
                </form>
            </motion.div>
        </div >
    )
}

export default Home;
