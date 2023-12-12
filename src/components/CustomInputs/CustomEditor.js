import * as React from 'react';
import { Editor } from '@tinymce/tinymce-react';
import { useEffect, useState, useRef } from 'react';
import { FormControl, Box } from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';
import { Tooltip } from '@mui/material';


const CustomEditor = ({ value, id, label, onChange, tooltip, exportable = false,  ...rest }) => {

	const editorRef = useRef(null);

	return (
		<Box style={{ display: 'flex', maxWidth: '100%', alignItems: 'center', flex: 1 }}>
			<Editor
				tinymceScriptSrc={process.env.PUBLIC_URL + '/tinymce/tinymce.min.js'}
				onInit={(evt, editor) => editorRef.current = editor}
				value={value}
				onEditorChange={(value) => onChange({ target: { value } })}
				init={{
					height: 500,
					plugins: [
						'preview',
						'importcss',
						'searchreplace',
						'autolink',
						'autosave',
						'save',
						'directionality',
						'visualblocks',
						'visualchars',
						'fullscreen',
						'image',
						'table',
						'charmap',
						'pagebreak',
						'nonbreaking',
						'insertdatetime',
						'advlist',
						'lists',
						'charmap',
						'quickbars',
						'emoticons',
					],
					contextmenu: 'link image table',
					menubar: `${exportable ? 'file' : ''} edit view insert format tools table`,
					menu: {
						file: { title: 'File', items: 'export print' },
						edit: { title: 'Edit', items: 'undo redo | cut copy paste pastetext | selectall | searchreplace' },
						view: { title: 'View', items: 'code | visualaid visualchars visualblocks | spellchecker | preview fullscreen | showcomments' },
						insert: { title: 'Insert', items: ' inserttable | quickimage charmap emoticons hr | pagebreak nonbreaking anchor tableofcontents | insertdatetime' },
						format: { title: 'Format', items: 'bold italic underline strikethrough superscript subscript codeformat | styles blocks fontfamily fontsize align lineheight | forecolor backcolor | language | removeformat' },
						table: { title: 'Table', items: 'inserttable | cell row column | advtablesort | tableprops deletetable' },
					},
					removed_menuitems: 'image link media',
					toolbar: `
						bold italic underline strikethrough |
						fontfamily fontsize blocks |
						alignleft aligncenter alignright alignjustify |
						outdent indent |
						numlist bullist |
						forecolor backcolor removeformat |
						charmap emoticons quickimage |
						fullscreen
					`,
					toolbar_mode: 'sliding',
					quickbars_selection_toolbar: 'bold italic | quicklink h2 h3 blockquote quickimage quicktable',
					content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px } *{max-width:100%}',
					file_picker_types: "image",
					language: 'en',
					browser_spellcheck: true,
					spellchecker_dialog: true,
					spellchecker_active: true,
					spellchecker_on_load: true,
				}}
			/>
			{tooltip ? (
				<Tooltip placement='top-start' title={tooltip} style={{ marginLeft: '15px' }}>
					<InfoIcon fontSize="medium" />
				</Tooltip>
			) : null}
		</Box>
	);
}

export default CustomEditor;