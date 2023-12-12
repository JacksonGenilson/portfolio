import * as React from 'react';
import FormControl from '@mui/material/FormControl';
import { MenuItem, InputLabel, Select, Checkbox, ListItemText, Box, Chip } from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';
import { Tooltip } from '@mui/material';

const CustomMultipleSelect = ({ value, id, label, options, onChange, boxStyle, tooltip, ...rest }) => {
	const ITEM_HEIGHT = 70;
	const ITEM_PADDING_TOP = 8;
	const MenuProps = {
		PaperProps: {
			style: {
				maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
			},
		},
	};

	var all = [];

	for (let index = 0; index < options.length; index++) {
		if(options[index]){
			if(options[index].value){
				all.push(options[index].value);
				if(options[index].sub_options){
					for (let index2 = 0; index2 < options[index].sub_options.length; index2++) {
						all.push(options[index].sub_options[index2].value);
					}
				}
			}else if(options[index].sub_options){
				for (let index2 = 0; index2 < options[index].sub_options.length; index2++) {
					all.push(options[index].sub_options[index2].value);
				}
			}
		}
	}

	const handleChange = (event) => {
		if (event.target.value[event.target.value.length - 1] === "all") {
			onChange({
				target: {
					value: value.length === all.length ? [] : all
				}
			});
		}else{
			let inserted = event.target.value.filter(x => !value.includes(x));

			if(inserted.length > 0){
				let op = options.filter(option => option.value === inserted[0]);
				if(op.length > 0){
					if(op[0].sub_options){
						for (let index = 0; index < op[0].sub_options.length; index++) {
							let i = event.target.value.indexOf(op[0].sub_options[index].value);
							if(i < 0){
								event.target.value.push(op[0].sub_options[index].value);
							}
						}
					}
				}else{
					for (let index = 0; index < options.length; index++) {
						if(options[index] && options[index].sub_options){
							for (let index2 = 0; index2 < options[index].sub_options.length; index2++) {
								if(options[index].sub_options[index2].value == inserted[0]){
									if (options[index].value) {
										let i = event.target.value.indexOf(options[index].value);
										if(i < 0){
											event.target.value.push(options[index].value);
										}
									}
								}
							}
						}
					}
				}
			}else{
				let removed = value.filter(x => !event.target.value.includes(x));
				if(removed.length > 0){
					let op = options.filter(option => option.value === removed[0]);
					if(op.length > 0 && op[0].sub_options){
						for (let index = 0; index < op[0].sub_options.length; index++) {
							let i = event.target.value.indexOf(op[0].sub_options[index].value);
							if(i > -1){
								event.target.value.splice(i, 1);
							}
						}
					}
				}
			}
			onChange(event);
		}
	}

	return (
		<Box style={{ display: 'flex', maxWidth: '100%', alignItems: 'center' }}>
			<FormControl className="inline" style={{ width: '100%' }}>
				{label ?? <InputLabel htmlFor={id}>{label}</InputLabel>}
				<Select
					id={id}
					value={value}
					multiple={true}
					onChange={(event) => handleChange(event)}
					renderValue={(selected) => (
						<Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5, ...boxStyle }}>
							{selected.map((value) => {
								let text = options.map((option) => {
									if(option.value == value){
										return option
									}
									if(option.sub_options){
										let sub_option = option.sub_options.map((sub_option) => {
											if(sub_option.value == value){
												return sub_option
											}
										}).filter(item => item);;
										if(sub_option.length > 0){
											return sub_option[0]
										}
									}
								}).filter(item => item);
								return <Chip key={value} label={text[0]?.text}/>
							})}
						</Box>
					)}
					{...rest}
					MenuProps={MenuProps}
				>
					<MenuItem value="all">
						<Checkbox checked={all.length > 0 && value.length === all.length} indeterminate={value.length > 0 && value.length < all.length} />
						<em><ListItemText primary="Select All" /></em>
					</MenuItem>
					{options.map((option) => {
						let html = []
						html.push(
							option.value ? (
								<MenuItem key={option.value} value={option.value}>
									<Checkbox checked={value.indexOf(option.value) > -1} />
									<ListItemText primary={option.text} />
								</MenuItem>
							) : (
								<p primary={option.text} key={option.text} style={{paddingLeft: 30}}>
									{option.text}
								</p>
							)
						);
						if(option.sub_options){
							option.sub_options.map((sub_option) => (
								html.push(<MenuItem style={{paddingLeft: '45px'}} key={sub_option.value} value={sub_option.value}>
									<Checkbox checked={value.indexOf(sub_option.value) > -1} />
									<ListItemText primary={sub_option.text} />
								</MenuItem>)
							))
						}
						return html;
					})}
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

export default CustomMultipleSelect;