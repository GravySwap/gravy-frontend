import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Text, Heading, Card, CardHeader, CardBody, Box, BoxProps } from '@gravyswap/uikit'
import FoldableText from './FoldableText'

interface Props extends BoxProps {
  header: string
  config: { title: string; description: string[] }[]
}

const StyledLink = styled(Link)`
  margin-top: 20px;
  color: ${(props) => props.theme.colors.primary};
`

const SectionsWithFoldableText: React.FC<Props> = ({ header, config, ...props }) => {
  return (
    <Box maxWidth="888px" {...props}>
      <Card>
        <CardHeader>
          <Heading scale="lg" color="secondary">
            {header}
          </Heading>
        </CardHeader>
        <CardBody>
          {config.map(({ title, description }, i, { length }) => (
            <FoldableText key={title} id={title} mb={i + 1 === length ? '' : '24px'} title={title}>
              {description.map((desc) => {
                return (
                  <Text key={desc} color="textSubtle" as="p">
                    {desc}
                  </Text>
                )
              })}
              {i > 1 && <StyledLink to="/">Grab a chance to whitelist on our marketplace!</StyledLink>}
            </FoldableText>
          ))}
        </CardBody>
      </Card>
    </Box>
  )
}

export default SectionsWithFoldableText
