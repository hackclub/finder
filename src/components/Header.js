import { Box, Flex, Link as A } from '@hackclub/design-system'
import Link from 'gatsby-link'
import React from 'react'
import styled from 'styled-components'

const Base = styled(Flex.withComponent('header')).attrs({
  align: 'center',
  justify: 'space-between',
  pb: 2,
  pt: 0,
  px: [null, 3, 4],
  w: 1
})``

const Flag = styled(A.withComponent(Link)).attrs({
  to: '/'
})`
  background: url(/flag.svg) no-repeat;
  background-position: top center;
  flex-shrink: 0;
  height: 3rem;
  width: 8rem;
  z-index: 0;
  ${({ theme }) => theme.mediaQueries.md} {
    height: 4rem;
    width: 10rem;
  }
`

const HideOnMobile = styled(Box)`
  display: none;
  ${({ theme }) => theme.mediaQueries.sm} {
    display: unset;
  }
`

const NavBar = styled(Flex.withComponent('nav'))`
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
`

const Item = styled(A).attrs({
  my: [1, 0],
  px: [2, 3]
})`
  color: inherit;
  font-weight: bold;
`

const GatsbyItem = Item.withComponent(Link)

const Header = ({ color = 'muted', ...props }) => (
  <Base role="banner" {...props}>
    <Flag />
    <NavBar role="navigation" ml={-2} py={[1, 0]} color={color} align="center">
      {/*<GatsbyItem to="/map" children="Map" />*/}
      <GatsbyItem to="/hotspots" children="Hotspots" />
      <Item
        href="https://github.com/hackclub/finder"
        target="_blank"
        color="slate"
      >
        <HideOnMobile>Contribute on</HideOnMobile> GitHub
      </Item>
    </NavBar>
  </Base>
)

export default Header
