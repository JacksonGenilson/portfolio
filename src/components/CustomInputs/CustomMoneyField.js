import * as React from 'react';
import NumberFormat from 'react-number-format';
import { TextField, FormControl, InputLabel, Box } from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';
import { Tooltip } from '@mui/material';

const CustomMoneyField = ({ value, id, label, options, prefix, onChange, decimalScale = 2, tooltip, ...rest }) => {
	return (
		<Box style={{ display: 'flex', maxWidth: '100%', alignItems: 'center', flex: 1 }}>
			<FormControl className="inline" style={{ maxWidth: '100%' }} {...rest}>
				{label ?? <InputLabel htmlFor={id}>{label}</InputLabel>}
				<NumberFormat
					id={id}
					value={value}
					customInput={TextField}
					prefix={prefix}
					type="text"
					decimalScale={decimalScale}
					thousandSeparator=","
					fixedDecimalScale={true}
					onValueChange={({ value }) => onChange({ target: { value } })}
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

export default CustomMoneyField;