import React from 'react'
import Title from 'components/Title'

export default {
	title: 'Components/Title',
	component: Title,
}

const Template = (args) => (
	<Title {...args}>
		<>{args.children}</>
	</Title>
)

export const Headline1 = Template.bind({})
export const Headline2 = Template.bind({})

Headline1.args = {
	headline: 1,
	children: 'Headline 1',
}

Headline2.args = {
	headline: 2,
	children: 'Headline 2',
}
