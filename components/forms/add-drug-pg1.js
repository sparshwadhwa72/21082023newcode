import React, { useState } from 'react';
import { Grid , Typography} from '@material-ui/core';
import AutocompleteDropdown from './form-components/autocomplete-dropdown/autocomplete-dropdown';
import DropdownInput from './form-components/dropdown/dropdown';
import DropdownInput1 from './form-components/dropdown/dropdown1';
import TextareaInput from './form-components/textarea-input/textarea-input';
import TextDropdown from './form-components/text-with-dropdown/text-with-dropdown';
import TextInput from './form-components/text-input/text-input';
import { makeStyles } from '@material-ui/core';
import DateInput from './form-components/date-picker/datepicker3';
import ManagePbar1 from '@components/layout/add-drug/Manage-Drug-info-probar';



const useStyles = makeStyles({

    body: {        
        
        backgroundColor: '#f1f6fd',
    
    '@media(max-Width: 900px)' : {
        width: '26.5%'
      },
    
},
        

    
    });

const AddDrugOne = ({formMethods}) => {
    const classes = useStyles();
    


    //async call later
    const drugList = ['Panadol', 'Welbutrin', 'Lorazepam'];
    const sourceList = ['Caritas Medical Centre', 'David Trench Rehab Centre', "St Mary's Hospital"];


    const drugFormList = ['Capsule', 'Liquid', 'Tablet', 'N/A'];
    const drugUnits = ['mg', 'mcg', 'g', 'iu', 'N/A'];
    const drugTypeList = ['Prescribed drug', 'Supplement', 'Over the counter', 'Herbal', 'N/A'];

    return (
        
        
        <Grid container item direction='column' 
       
        >
            
          <br></br>
            <Grid
            >
            
            <ManagePbar1/>
            </Grid>
            
            
            <Grid container item direction='column'
             className={classes.body}>
         
          <br></br><br></br><br></br>
          
                <Grid container item direction='row' spacing={5}>
                    <Grid item 
                    xs={12} sm={10} md={6}
                    >
                        
         
                        <AutocompleteDropdown
                            autocompleteOptions={drugList}
                            label={`Drug name*`}
                            control={formMethods.control}
                            name='drugName'
                            rules={{required: true}}
                            placeholder={`e.g. Panadol`}
                        />
                    </Grid>
                    <Grid item  
                    xs={12} sm={10} md={6}
                    >
                    <TextDropdown
                        textPlaceholder={`e.g. 100`}
                        type='Number'
                        dropdownPlaceholder={`Unit`}
                        
                        control={formMethods.control}
                        textName={`dosageStrength`}
                        dropdownName={`dosageUnit`}
                        label={`Dosage strength*`}
                        additionalStyles={{}}
                        
                        
                        dropdownOptions={drugUnits}
                        textRules={{required: true}}
                        
                        dropdownRules={{required: true}}
                    />
                    
                </Grid>
                    <Grid container item direction='row'spacing={4}>
                        <Grid item
                         xs={12} sm={10} md={3}
                        >
                            <DropdownInput
                                placeholder={`e.g. Capsule`}
                                name='drugForm'
                                label='Form'
                                control={formMethods.control}
                                selectOptions={drugFormList}
                                rules={{}}
                            />
                        </Grid>
                        <Grid item
                        xs={12} sm={10} md={5}
                        >
                            <DropdownInput1
                                placeholder={`e.g. Prescribed drug`}
                                name='drugType'
                                label='Type'
                                control={formMethods.control}
                                selectOptions={drugTypeList}
                                rules={{}}
                            />
                        </Grid>

                    </Grid>

                </Grid>
                <br></br><br></br><br></br> <br></br><br></br>
                <Grid container item direction='row' spacing={5} >
                    <Grid item 
                    xs={12} sm={12} md={6}
                    >
                   
                        <AutocompleteDropdown
                            autocompleteOptions={sourceList}
                            label={`Where is it from?`}
                            control={formMethods.control}
                            name='drugSource'
                            rules={{}}
                            placeholder={`e.g. Caritas Medical Centre`}
                        />
                    </Grid>
                    <Grid item
                     xs={12} sm={10} md={3}
                     >
                        
                    
                        <TextInput
                            control={formMethods.control}
                            name={`quantity`}
                            rules={{}}
                            label={`Quantity`}
                            placeholder={`e.g. 123`}
                            additionalStyles={{}}                                                    
                            
                        />
                    </Grid>
                    <Grid item>
                        
                        <DateInput
                            control={formMethods.control}
                            name={`expiryDate`}
                            label={`Expiry date`}
                            rules={{}}
                        />
                    </Grid>
                    
                </Grid>

            </Grid>
            
            <Grid container item direction='column'>
            <br></br><br></br>
                
                <Grid item container direction='row'>
                    
                    <Grid container item direction='coloumn'
                     xs={12} sm={10} md={6}
                    >        
                                    
                        <TextareaInput
                        fullwidth
                            control={formMethods.control}
                            name='specialInstructions'
                            label={`Special Instructions`}
                            rules={{}}                            
                            placeholder={`e.g. before meal`}                            
                            characterLimit={300}
                            
                            
                        />
                    </Grid>

                </Grid>
            </Grid>
        </Grid>
    )


}

export default AddDrugOne;