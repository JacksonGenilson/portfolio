import * as React from 'react';
import { TextField, FormControl, InputLabel, Box } from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';
import { Tooltip } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'

const CustomDate = ({ value, id, label, minDate, maxDate, onChange, tooltip, ...rest }) => {
	return (
		<Box style={{ display: 'flex', maxWidth: '100%', alignItems: 'center', flex: 1 }}>
			<FormControl className="inline" style={{ width: '100%' }} {...rest}>
				{label ?? <InputLabel htmlFor={id}>{label}</InputLabel>}
				<LocalizationProvider dateAdapter={AdapterDayjs}>
					<DatePicker
						id={id}
						value={value}
						onChange={(value) => (onChange({ target: { value } }))}
						minDate={minDate}
						maxDate={maxDate}
						renderInput={(params) => <TextField {...params} required/>}
						{...rest}
					/>
				</LocalizationProvider>
			</FormControl>
			{tooltip ? (
				<Tooltip placement='top-start' title={tooltip} style={{ marginLeft: '15px' }}>
					<InfoIcon fontSize="medium" />
				</Tooltip>
			) : null}
		</Box>
	);
}

export default CustomDate;