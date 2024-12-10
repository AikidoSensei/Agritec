export const boxVariant = {
	hidden: {
		x: 100,
	},
	visible: {
		x: 0,
		transition: {
			delayChildren: 0,
			staggerChildren: 0.1,
		},
	},
}
export const listVariant = {
	hidden: {
		x: '-100px',
		opacity: 0,
	},
	visible: {
		x: '0',
		opacity: 1,
		transition: {
			duration: 1,
			type: 'spring',
		},
	},
}

export const textBoxVariant = {
	hidden: {
		y: '0px',
	},
	visible: {
		y: 0,
		transition: {
			delayChildren: 0,
			staggerChildren: 0.1,
		},
	},
}
export const listBoxVariant = {
	hidden: {
		y: '-50px',
		opacity: 0,
	},
	visible: {
		y: '0',
		opacity: 1,
		transition: {
			duration: 1,
			type: 'spring',

		},
	},
}