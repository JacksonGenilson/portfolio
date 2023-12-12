import { FormControl, TextField, InputLabel, Box, Tooltip } from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';

const CustomTextField = ({ value, id, label, tooltip, ...rest }) => {
	return (
		<Box style={{ display: 'flex', maxWidth: '100%', alignItems: 'center', flex: rest.fullWidth ? 1 : 'inherit'}}>
			<FormControl className="inline" style={{ width: '100%' }} {...rest}>
				{label ?? <InputLabel htmlFor={id}>{label}</InputLabel>}
				<TextField
					id={id}
					value={value}
					onChange={({ target: { value } }) => (value)}
					spellCheck="true"
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

export default CustomTextField;