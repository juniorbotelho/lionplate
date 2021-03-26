import React from 'react'
import * as S from 'containers/Boilerplate/style'

import Image from 'components/Image'
import Title from 'components/Title'

const Boilerplate = () => (
	<S.Wrapper>
		<Image
			size={192}
			src="/assets/img/lion512.png"
			alt="An illustrative lion as the boilerplate logo"
		/>

		<S.Title>
			<Title headline={1}>
				<>Boilerplate</>
			</Title>
		</S.Title>

		<S.SubTitle>
			<Title headline={2}>
				<>
					Welcome to the lions boilerplate, a simplified template for launching
					React applications
				</>
			</Title>
		</S.SubTitle>
	</S.Wrapper>
)

export default Boilerplate
