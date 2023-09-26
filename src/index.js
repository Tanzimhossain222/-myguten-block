const { registerBlockType } = wp.blocks;
const { RichText } = wp.blockEditor;
registerBlockType('myguten/test-block', {
	title: 'Basic Example',
	icon: 'smiley',
	category: 'layout',

	attributes: {
		content: {
			type: 'array',
			source: 'children',
			selector: 'p',
		},
	},

	edit: (props) => {
		const {
			attributes: { content },
			setAttributes,
			className,
		} = props;
		const onChangeContent = (newContent) => {
			setAttributes({ content: newContent });
		};
		return (
			<div>
				<RichText
					tagName="p"
					className={className}
					onChange={onChangeContent}
					value={content}
				/>
			</div>
		);
	},
	save: (props) => {
		return (
			<>
				<RichText.Content
					tagName="p"
					value={props.attributes.content}
				/>
			</>
		);
	},
});
