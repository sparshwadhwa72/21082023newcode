import React, { useState } from 'react';
import { Grid , Typography} from '@material-ui/core';
import AutocompleteDropdown from './form-components/autocomplete-dropdown/Manage-drug-Autocomplete';
import ManagePbar1 from '@components/layout/add-drug/Manage-Drug-info-probar';
import DropdownInput1 from './form-components/dropdown/Manage-drug-dropdown';
import TextareaInput from './form-components/textarea-input/Manage-drug-text-input';
import TextDropdown from './form-components/text-with-dropdown/Manage-text-with-dropdown';
import TextInput from './form-components/text-input/Manage-drug-text-input';
import { makeStyles } from '@material-ui/core';
import DateInput from './form-components/date-picker/Manage-drug-date-picker';



const useStyles = makeStyles({

    body: {        
        
        backgroundColor: '#f1f6fd',
    
    '@media(max-Width: 900px)' : {
        width: '26.5%'
      },
    
},
        

    
    });

const ManagedrugOne = ({formMethods}) => {
    const classes = useStyles();
    


    //async call later
    const drugList = ['Panadol', 'Welbutrin', 'Lorazepam'];
    const sourceList = ['Caritas Medical Centre', 'David Trench Rehab Centre', "St Mary's Hospital"];


    const drugFormList = ['Capsule', 'Liquid', 'Tablet', 'N/A'];
    const drugUnits = ['mg', 'mcg', 'g', 'iu', 'N/A'];
    const drugTypeList = ['Prescribed drug', 'Supplement', 'Over the counter', 'Herbal', 'N/A'];

    return (
        <Grid container item direction='row' 
        className={classes.body}
        >
            
          <Grid>
            
            <ManagePbar1/>
            </Grid>
            <Grid container item direction='column'>
              
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
                            placeholder={`Panadol`}
                        />
                    </Grid>
                    <Grid item  
                    xs={12} sm={10} md={6}
                    style={{
                        margin: '0px 0px 0px 0px'
                    }}
                    >
                    <TextDropdown
                        textPlaceholder={`500 mg`}
                        type='Number'
                        dropdownPlaceholder={``}
                        
                        control={formMethods.control}
                        textName={`dosageStrength`}
                        dropdownName={`dosageUnit`}
                        label={`Dosage strength*`}
                        additionalStyles={{}}
                        
                        
                        dropdownOptions={drugUnits}
                        
                    />
                    
                </Grid>
                    <Grid container item direction='row'spacing={4}>
                        <Grid item
                         //xs={12} sm={10} md={3}
                        >
                            <DropdownInput1
                                placeholder={`Capsule`}
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
                                placeholder={`Prescribed drug`}
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
                            placeholder={`Caritas Medical Centre`}
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
                            placeholder={`123`}
                            additionalStyles={{}}
                                                     
                            
                        />
                    </Grid>
                    
                </Grid>

            </Grid>
            
            <Grid container item direction='column'>
            <br></br><br></br>
                
                <Grid item container direction='row'>
                    
                    <Grid container item direction='row'
                     xs={12} sm={10} md={6}
                    >        
                                    
                        <TextareaInput
                        fullwidth
                            control={formMethods.control}
                            name='specialInstructions'
                            label={`Special Instructions`}
                            rules={{}}                            
                            placeholder={`Before meal`}                            
                            characterLimit={300}
                            
                            
                        />
                        
                    </Grid>
                    
                    <Grid item
                    style={{
                        margin: '0px 0px 0px 20px'
                    }}>
                        
                        <DateInput
                            control={formMethods.control}
                            name={`expiryDate`}
                            label={`Expiry date`}
                            rules={{}}
                        />
                    </Grid>

                </Grid>
            </Grid>
        </Grid>
    )


}

export default ManagedrugOne;