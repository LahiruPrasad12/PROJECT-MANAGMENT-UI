import * as React from 'react';
import {Theme, useTheme} from '@mui/material/styles';
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, {SelectChangeEvent} from '@mui/material/Select';
import Chip from '@mui/material/Chip';
import {string} from "yup";
import {useState} from "react";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};

const names = [
    'Oliver Hansen',
    'Van Henry',
    'April Tucker',
    'Ralph Hubbard',
    'Omar Alexander',
    'Carlos Abbott',
    'Miriam Wagner',
    'Bradley Wilkerson',
    'Virginia Andrews',
    'Kelly Snyder',
];


export default function MultipleSelectChip() {
    const theme = useTheme();
    const [personName, setPersonName] = useState([]);

    const handleChange = (event: SelectChangeEvent<typeof personName>) => {
        const {
            target: {value},
        } = event;
        setPersonName(
            typeof value === 'string' ? value.split(',') : value,
        );
    };

    return (
        <div>
            <FormControl sx={{m: 1, width: 300}}>
                <InputLabel id="demo-multiple-chip-label">Chip</InputLabel>
                <Select
                    labelId="demo-multiple-chip-label"
                    id="demo-multiple-chip"
                    value={personName}
                    onChange={handleChange}
                    input={<OutlinedInput id="select-multiple-chip" label="Chip"/>}
                    renderValue={(selected) => (
                        <Box sx={{display: 'flex', flexWrap: 'wrap', gap: 0.5}}>
                            {selected.map((value) => (
                                <Chip key={value} label={value}/>
                            ))}
                        </Box>
                    )}
                    MenuProps={MenuProps}
                >
                    {names.map((name) => (
                        <MenuItem
                            key={name}
                            value={name}
                            // style={getStyles(name, personName, theme)}
                        >
                            {name}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </div>
    );
}
