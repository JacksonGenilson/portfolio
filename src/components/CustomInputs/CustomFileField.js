import { FormControl, InputLabel, Box, Tooltip, TextField } from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';

const CustomFileField = ({ value, id, label, options, prefix, onChange, tooltip, ...rest }) => {
	return (
		<Box style={{ display: 'flex', maxWidth: '100%', alignItems: 'center', flex: 1 }}>
			<FormControl className="inline" style={{ width: '100%' }} {...rest}>
				{label ?? <InputLabel htmlFor={id}>{label}</InputLabel>}
				<TextField
					id={id}
					value={value}
					onChange={({ target: { value } }) => (value)}
					spellCheck="true"
					type="file"
					{...rest}
				/>
			</FormControl>
			{tooltip ? (
				<Tooltip placement='top-start' title={tooltip} style={{ marginLeft: '15px' }}>
					<InfoIcon fontSize="medium" />
				</Tooltip>
			) : null}
		</Box>
	);
}

export default CustomFileField;