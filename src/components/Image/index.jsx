import PropTypes from 'prop-types'
import React from 'react'
import * as S from 'components/Image/style'

const Image = ({ src, alt, size }) => (
	<S.Figure>
		<S.Image width={size} src={src} alt={alt} />
	</S.Figure>
)

Image.propTypes = {
	alt: PropTypes.string.isRequired,
	src: PropTypes.string.isRequired,
	size: PropTypes.number,
}

export default Image
