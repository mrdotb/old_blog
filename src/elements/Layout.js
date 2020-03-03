import React from 'react'
import PropTypes from 'prop-types'
import styled, {createGlobalStyle, ThemeProvider} from 'styled-components'

import 'typeface-domine'
import 'typeface-open-sans'

import {OctagonAnimation, Nav, MobileNav, Header, Footer} from '../components'
import theme from '../../config/theme'

const GlobalStyle = createGlobalStyle`
`

// Fixed footer https://github.com/philipwalton/solved-by-flexbox/blob/master/assets/css/components/site.css
const SiteContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`
const SiteHeader = styled.div`
  flex: none;
`
const SiteContent = styled.div`
  flex: 1 0 auto;
  width: 100%;
  &::after {
    content: \\00a0,
    display: block,
    height: 0px,
    visibility: hidden
  }
`
const SiteFooter = styled.div`
  flex: none;
`

const Layout = ({ children, location}) => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <SiteContainer>
      <MobileNav location={location}/>
      <SiteHeader>
        <Header>
          <Nav location={location} />
        </Header>
        <OctagonAnimation />
      </SiteHeader>
      <SiteContent>{children}</SiteContent>
      <SiteFooter>
        <Footer>
          <Nav location={location} />
        </Footer>
      </SiteFooter>
    </SiteContainer>
  </ThemeProvider>
)

Layout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.node]).isRequired,
  location: PropTypes.object.isRequired,
}

export default Layout
