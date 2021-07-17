/* eslint-disable import/prefer-default-export */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-unused-vars */
import React from 'react'
import NumberFormat from 'react-number-format'

interface NumberFormatCustomProps {
	inputRef: (instance: NumberFormat | null) => void
	onChange: (event: { target: { name: string; value: string } }) => void
	name: string
}

function NumberFormatCustom(props: NumberFormatCustomProps) {
	const { inputRef, onChange, ...other } = props

	return (
		<NumberFormat
			{...other}
			getInputRef={inputRef}
			onValueChange={values => {
				onChange({
					target: {
						name: props.name,
						value: values.value,
					},
				})
			}}
			thousandSeparator='.'
			decimalSeparator=","
			decimalScale={2}
			isNumericString
			prefix='R$ '
			color='primary'
		/>
	)
}

export { NumberFormatCustom }
