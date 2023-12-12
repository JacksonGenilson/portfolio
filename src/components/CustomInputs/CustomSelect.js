import FormControl from '@mui/material/FormControl';
import { MenuItem, InputLabel, Select, Box } from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';
import { Tooltip } from '@mui/material';

const CustomSelect = ({ value, id, label, options, tooltip, ...rest }) => {
	const ITEM_HEIGHT = 70;
	const ITEM_PADDING_TOP = 8;
	const MenuProps = {
		PaperProps: {
			style: {
				maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
			},
		},
	};

	return (
		<Box style={{display: 'flex', maxWidth: '100%', alignItems: 'center'}}>
			<FormControl className="inline" style={{ width: '100%', ...rest.style }}>
				{label ?? <InputLabel htmlFor={id}>{label}</InputLabel>}
				<Select
					id={id}
					value={value}
					onChange={({ target: { value } }) => (value)}
					{...rest}
					MenuProps={MenuProps}
				>
					<MenuItem value=""><em>None</em></MenuItem>
					{options.map((option) => (
						<MenuItem key={option.value} value={option.value}>{option.text}</MenuItem>
					))}
				</Select>

			</FormControl>
			{tooltip ? (
				<Tooltip placement='top-start' title={tooltip} style={{ marginLeft: '15px' }}>
					<InfoIcon fontSize="medium" />
				</Tooltip>
			) : null}
		</Box>
	);
}

export default CustomSelect;