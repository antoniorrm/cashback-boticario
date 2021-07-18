/* eslint-disable import/prefer-default-export */
// eslint-disable-next-line import/prefer-default-export
// eslint-disable-next-line arrow-body-style
const formatCurrecyBR = (value: number): string => {
	return value.toLocaleString('pt-BR', {
		minimumFractionDigits: 2,
		style: 'currency',
		currency: 'BRL',
	})
}

export { formatCurrecyBR }