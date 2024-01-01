// DescriptionTextField.tsx

import React from "react";
import { FormControl, TextField } from "@mui/material";

interface DescriptionTextFieldProps {
    value: string;
    onChange: (value: string) => void;
}

const DescriptionTextField: React.FC<DescriptionTextFieldProps> = ({ value, onChange }) => {
    return (
        <FormControl fullWidth margin="normal">
            <TextField
                required
                minRows={ 4 }
                multiline
                placeholder="Beschreibung"
                value={ value }
                onChange={ (e) => onChange(e.target.value) }
            />
        </FormControl>
    );
};

export default DescriptionTextField;
