// import Box from '@mui/material/Box';
// import InputLabel from '@mui/material/InputLabel';
// import MenuItem from '@mui/material/MenuItem';
// import FormControl from '@mui/material/FormControl';
// import Select from '@material-ui/core/Select';
// export interface FormData {
//     name: string;
//     lastName: string;
//     phoneNumber: string;
//     email: string;
//     serviceType: string;
//     description: string;
// }

// interface BasicSelectProps {
//     formData: {
//         name: string;
//         lastName: string;
//         phoneNumber: string;
//         email: string;
//         serviceType: string;
//         description: string;
//     };
//     handleChange: (field: keyof FormData) => (event: React.ChangeEvent<{ value: string; }>) => void
// }

// const BasicSelect: React.FC<BasicSelectProps> = ({ formData, handleChange }) => {
//     return (
//         <Box sx={ { minWidth: 120, width: "100%" } }>
//             <FormControl fullWidth>
//                 <InputLabel id="demo-simple-select-label" sx={ { marginBottom: 1 } }>
//                     Service Type
//                 </InputLabel>
//                 <Select
//                     labelId="demo-simple-select-label"
//                     id="demo-simple-select"
//                     value={ formData.description }
//                     label="Service Type"
//                 // onChange={ handleChange('serviceType') }
//                 >
//                     <MenuItem value={ 10 }>Ten</MenuItem>
//                     <MenuItem value={ 20 }>Twenty</MenuItem>
//                     <MenuItem value={ 30 }>Thirty</MenuItem>
//                 </Select>
//             </FormControl>
//         </Box>
//     );
// };

// export default BasicSelect;
