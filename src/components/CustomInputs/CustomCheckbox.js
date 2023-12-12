import { FormControl, Checkbox, InputLabel,IconButton, Box } from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';
import { Tooltip } from '@mui/material';

const CustomCheckbox = ({ value, id, label, onChange, tooltip, ...rest }) => {
	return (
		<Box style={{ display: 'flex', maxWidth: '100%', alignItems: 'center', justifyContent: 'center' }}>
			<FormControl className="inline" style={{ maxWidth: '100%' }} {...rest}>
				{label ?? <InputLabel htmlFor={id}>{label}</InputLabel>}
				<Checkbox
					id={id}
					checked={value == 1 ? true : false}
					onChange={() => onChange({ target: { value: value == 1 ? 0 : 1 } })}
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

export default CustomCheckbox;