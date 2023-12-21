import React, { useState } from 'react';
import { Button, TextField, Select, MenuItem, InputLabel, FormControl, Box, Typography } from '@mui/material';
import emailjs from '@emailjs/browser';
interface FormData {
    name: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    service: string;
    description: string;
}

const MyForm: React.FC = () => {
    const [formData, setFormData] = useState<FormData>({
        name: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        service: '',
        description: '',
    });

    const handleChange = (key: keyof FormData, value: string) => {
        setFormData((prevData) => ({
            ...prevData,
            [key]: value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const templateParams = {
            name: formData.name,
            lastName: formData.lastName,
            email: formData.email,
            phoneNumber: formData.phoneNumber,
            service: formData.service,
            description: formData.description,
        };

        try {
            // Use your EmailJS template ID, service ID, and user ID
            const response = await emailjs.send(
                'service_56p4lg1',
                'template_lbfhy68',
                templateParams,
                'WpgTXMD0k0R12bTnt'
            );

            console.log('Email sent successfully', response);
        } catch (error) {
            console.error('Error sending email', error);
        }
    };

    return (
        <Box sx={ {
            display: 'flex',
            alignItems: 'center',
            justifyContent: "center"
        } }>

            <Box sx={ {
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: "center",
                width: "600px",
                "@media (max-width: 866px)": {
                    width: "90%",

                },

            } } component="form">
                <Typography sx={ {
                    color: "#303030",
                    fontFamily: "'monospace','Arial', sans-serif",
                    fontWeight: "bold",
                    marginTop: "80px",
                    marginBottom: "50px"
                } } variant="h4">KOTAKTIEREN UNS!</Typography>
                <TextField
                    required
                    label="Name"
                    fullWidth
                    value={ formData.name }
                    onChange={ (e) => handleChange('name', e.target.value) }
                    margin="normal"
                />
                <TextField
                    required

                    label="Last Name"
                    fullWidth
                    value={ formData.lastName }
                    onChange={ (e) => handleChange('lastName', e.target.value) }
                    margin="normal"
                />
                <TextField
                    required

                    label="Email"
                    fullWidth
                    type="email"
                    value={ formData.email }
                    onChange={ (e) => handleChange('email', e.target.value) }
                    margin="normal"
                />
                <TextField
                    required

                    label="Phone Number"
                    fullWidth
                    type="tel"
                    value={ formData.phoneNumber }
                    onChange={ (e) => handleChange('phoneNumber', e.target.value) }
                    margin="normal"
                />
                <FormControl fullWidth margin="normal">
                    <InputLabel id="service-label">Service</InputLabel>
                    <Select
                        required
                        labelId="service-label"
                        label="Service"
                        value={ formData.service }
                        onChange={ (e) => handleChange('service', e.target.value as string) }
                    >
                        <MenuItem value="service1">Service 1</MenuItem>
                        <MenuItem value="service2">Service 2</MenuItem>
                        <MenuItem value="service3">Service 3</MenuItem>
                        <MenuItem value="service4">Service 4</MenuItem>
                        <MenuItem value="service5">Service 5</MenuItem>
                    </Select>
                </FormControl>
                <FormControl fullWidth margin="normal">
                    <TextField
                        required
                        minRows={ 4 }
                        multiline
                        placeholder="Description"
                        value={ formData.description }
                        onChange={ (e) => handleChange('description', e.target.value) }
                    />
                </FormControl>
                <Button sx={ {
                    backgroundColor: '#3c52b2',
                    color: '#fff',
                    border: '2px solid #3c52b2',
                    borderRadius: '20px',
                    padding: '10px 30px',
                    marginTop: "20px",
                    fontFamily: "'monospace','Arial', sans-serif",
                    '&:hover': {
                        backgroundColor: 'transparent',
                        border: '2px solid #fff',
                    },
                    transition: 'background-color 0.5s ease, border-color 0.5s ease',
                } } type='submit' variant="contained" color="primary" onClick={ handleSubmit }>
                    Senden
                </Button>
            </Box>
        </Box>

    );
};

export default MyForm;
