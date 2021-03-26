import PropTypes from 'prop-types'
import React from 'react'
import * as S from 'components/Title/style'

const Title = ({ children, headline }) => {
	const headlineTypes = [
		<S.Title key={1}>{children}</S.Title>,
		<S.SubTitle key={2}>{children}</S.SubTitle>,
	]

	// Cover
	return headlineTypes[headline - 1]
}

Title.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node,
	]).isRequired,
	headline: PropTypes.number.isRequired,
}

export default Title
