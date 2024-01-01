// ServiceSelect.tsx

import React from "react";
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import {
    CLEANING_SERVICE_TEXT,
    LOGISTICS_SERVICES_TEXT,
    SECCURITY_SERVICES_TEXT,
    Car_rental_entrepreneur,
    OTHER_TEXT,
    SERVICE_TEXT,
} from "../../../assets/text";

interface ServiceSelectProps {
    value: string;
    onChange: (value: string) => void;
}

const ServiceSelect: React.FC<ServiceSelectProps> = ({ value, onChange }) => {
    return (
        <FormControl fullWidth margin="normal">
            <InputLabel id="service-label">{ SERVICE_TEXT }</InputLabel>
            <Select
                required
                labelId="service-label"
                label="Service"
                value={ value }
                onChange={ (e) => onChange(e.target.value as string) }
            >
                <MenuItem value="service1">{ CLEANING_SERVICE_TEXT }</MenuItem>
                <MenuItem value="service2">{ LOGISTICS_SERVICES_TEXT }</MenuItem>
                <MenuItem value="service3">{ SECCURITY_SERVICES_TEXT }</MenuItem>
                <MenuItem value="service4">{ Car_rental_entrepreneur }</MenuItem>
                <MenuItem value="service5">{ OTHER_TEXT }</MenuItem>
            </Select>
        </FormControl>
    );
};

export default ServiceSelect;
