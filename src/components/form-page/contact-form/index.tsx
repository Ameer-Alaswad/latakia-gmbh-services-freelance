import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Typography from '@material-ui/core/Typography';

interface FormData {
    name: string;
    lastName: string;
    phoneNumber: string;
    email: string;
    serviceType: string;
    description: string;
}

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        // padding: theme.spacing(3),

    },
    formContainer: {
        height: "600px",
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '50%',
        gap: theme.spacing(2), // Add spacing between inputs
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    button: {
        marginTop: theme.spacing(2),
    },
}));

const options = ['Option 1', 'Option 2', 'Option 3', 'Option 4'];

const SimpleForm: React.FC = () => {
    const classes = useStyles();
    const [formData, setFormData] = useState<FormData>({
        name: '',
        lastName: '',
        phoneNumber: '',
        email: '',
        serviceType: '',
        description: '',
    });

    const handleChange = (field: keyof FormData) => (
        event: React.ChangeEvent<{ value: unknown }>
    ) => {
        setFormData({ ...formData, [field]: event.target.value as string });
    };

    const handleSubmit = () => {
        // Log the form data
        console.log(formData);
    };

    return (
        <div className={ classes.root }>
            <Typography variant="h5">Service Request Form</Typography>
            <div className={ classes.formContainer }>
                <TextField
                    label="Name"
                    value={ formData.name }
                    onChange={ handleChange('name') }
                    margin="normal"
                    variant="outlined"
                    fullWidth
                />
                <TextField
                    label="Last Name"
                    value={ formData.lastName }
                    onChange={ handleChange('lastName') }
                    margin="normal"
                    variant="outlined"
                    fullWidth
                />
                <TextField
                    label="Phone Number"
                    value={ formData.phoneNumber }
                    onChange={ handleChange('phoneNumber') }
                    margin="normal"
                    variant="outlined"
                    fullWidth
                />
                <TextField
                    label="Email"
                    value={ formData.email }
                    onChange={ handleChange('email') }
                    margin="normal"
                    variant="outlined"
                    fullWidth
                />
                <FormControl className={ classes.formControl } fullWidth>
                    <InputLabel id="service-type-label">Service Type</InputLabel>
                    <Select
                        labelId="service-type-label"
                        value={ formData.serviceType }
                        onChange={ handleChange('serviceType') }
                        variant="outlined"
                        fullWidth
                    >
                        { options.map((option, index) => (
                            <MenuItem key={ index } value={ option }>
                                { option }
                            </MenuItem>
                        )) }
                    </Select>
                </FormControl>
                <TextField
                    label="Description"
                    multiline
                    rows={ 4 }
                    value={ formData.description }
                    onChange={ handleChange('description') }
                    margin="normal"
                    variant="outlined"
                    fullWidth
                />
            </div>
            <Button
                variant="contained"
                color="primary"
                className={ classes.button }
                onClick={ handleSubmit }
            >
                Submit
            </Button>
        </div>
    );
};

export default SimpleForm;
