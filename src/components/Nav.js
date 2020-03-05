import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import styled from 'styled-components'

import { rhythm } from '../../config/typography'

const nav = [
  { name: 'Home', to: '/' },
  { name: 'About', to: '/about' },
  { name: 'Blog', to: '/blog' },
]

const Box = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  @media only screen and (max-width:${props => props.theme.breakpoints.s}) {
    display: none;
  }
`
const StyledLink = styled(Link)`
  padding: ${rhythm(1 / 3)};
`
const Nav = ({location}) => (
  <Box>
    {nav.map(e => (
      <StyledLink
        className={location.pathname === e.to ? 'darklink active' : 'darklink'}
        key={e.name}
        to={e.to}
      >
        {e.name}
      </StyledLink>
    ))}
  </Box>
)

Nav.propTypes = {
  location: PropTypes.object
}

export default Nav
