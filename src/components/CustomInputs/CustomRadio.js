import FormControl from '@mui/material/FormControl';
import { Radio, RadioGroup, FormControlLabel, InputLabel, IconButton, Box } from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';
import { Tooltip } from '@mui/material';

const CustomRadio = ({ value, id, label, options, disabled, tooltip, ...rest }) => {
	return (
		<Box style={{ display: 'flex', maxWidth: '100%', alignItems: 'center' }}>
			<FormControl className="inline radio">
				{label ?? <InputLabel htmlFor={id}>{label}</InputLabel>}
				<RadioGroup
					id={id}
					value={value}
					onChange={({ target: { value } }) => (value)}
					{...rest}
				>
					{options.map((option) => (
						<FormControlLabel disabled={disabled} key={option.value} value={option.value} control={<Radio />} label={option.text} />
					))}
				</RadioGroup>
			</FormControl>
			{tooltip ? (
				<Tooltip placement='top-start' title={tooltip} style={{ marginLeft: '15px' }}>
					<InfoIcon fontSize="medium" />
				</Tooltip>
			) : null}
		</Box>
	);
}

export default CustomRadio;