import React, { useState } from 'react';
import { Grid } from '@material-ui/core';
import AutocompleteDropdown from 'components/forms/form-components/autocomplete-dropdown/autocomplete-dropdown';
import DropdownInput from 'components/forms/form-components/dropdown/dropdown';
import TextareaInput from 'components/forms/form-components/textarea-input/textarea-input';
import TextDropdown from 'components/forms/form-components/text-with-dropdown/text-with-dropdown';
import TextInput from 'components/forms/form-components/text-input/text-input';
import DateInput from 'components/forms/form-components/date-picker/date-picker';

const AddDrugOne = ({formMethods}) => {


    //async call later
    const drugList = ['Panadol', 'Welbutrin', 'Lorazepam'];
    const sourceList = ['Caritas Medical Centre', 'David Trench Rehab Centre', "St Mary's Hospital"];


    const drugFormList = ['Capsule', 'Liquid', 'Tablet'];
    const drugUnits = ['mg', 'mcg', 'g', 'iu', 'N/A'];
    const drugTypeList = ['Prescribed drug', 'Supplement', 'Over the counter', 'Herbal', 'N/A'];

    return (
        <Grid container item direction='row'>
            <Grid container item direction='column'>
                <Grid container item direction='column'>
                    <Grid item>
                        <AutocompleteDropdown
                            autocompleteOptions={drugList}
                            label={`Drug name*`}
                            control={formMethods.control}
                            name='drugName'
                            rules={{required: true}}
                            placeholder={`(i.e. Panadol)`}
                        />
                    </Grid>
                    <Grid container item direction='row'>
                        <Grid item>
                            <DropdownInput
                                placeholder={`(i.e. Capsule)`}
                                name='drugForm'
                                label='Form'
                                control={formMethods.control}
                                selectOptions={drugFormList}
                                rules={{}}
                            />
                        </Grid>
                        <Grid item>
                            <DropdownInput
                                placeholder={`(i.e. Prescribed drug)`}
                                name='drugType'
                                label='Type'
                                control={formMethods.control}
                                selectOptions={drugTypeList}
                                rules={{}}
                            />
                        </Grid>

                    </Grid>

                </Grid>
                <Grid container item direction='column'>
                    <Grid item>
                        <AutocompleteDropdown
                            autocompleteOptions={sourceList}
                            label={`Where is it from?`}
                            control={formMethods.control}
                            name='drugSource'
                            rules={{}}
                            placeholder={`(i.e. Caritas Medical Centre)`}
                        />
                    </Grid>
                    <Grid item>
                        <TextareaInput
                            control={formMethods.control}
                            name='specialInstructions'
                            label={`Special Instructions`}
                            rules={{}}
                            placeholder={`XXXXXXXXXXXXX`}
                            characterLimit={300}
                        />
                    </Grid>

                </Grid>

            </Grid>
            <Grid container item direction='column'>
                <Grid item>
                    <TextDropdown
                        textPlaceholder={`(i.e. 100)`}
                        dropdownPlaceholder={`(unit)`}
                        control={formMethods.control}
                        textName={`dosageStrength`}
                        dropdownName={`dosageUnit`}
                        label={`Dosage strength*`}
                        dropdownOptions={drugUnits}
                        textRules={{required: true}}
                        dropdownRules={{required: true}}
                    />
                </Grid>
                <Grid item container direction='row'>
                    <Grid item>
                        <TextInput
                            control={formMethods.control}
                            name={`quantity`}
                            rules={{}}
                            label={`Quantity`}
                            placeholder={`(i.e. 123)`}
                            additionalStyles={{}}
                            type='number'
                        />
                    </Grid>
                    <Grid item>
                        <DateInput
                            control={formMethods.control}
                            name={`expiryDate`}
                            placeholder={`(i.e. 11/11/2021)`}
                            label={`Expiry date`}
                            rules={{}}
                        />
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )


}

export default AddDrugOne;