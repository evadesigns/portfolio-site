import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import styled from 'styled-components'
// img
import Logo from '../../public/static/logo.svg'

const HeaderContainer = styled.header`
  padding: 15px;
  img {
    z-index: 1000;
    max-width: 70px;
  }
`

const Header = props => (
  <HeaderContainer id="header" className="alt">
    <img id="logo" src="/static/logo.svg" />
    <nav>
      <a
        className="menu-link"
        onClick={props.onToggleMenu}
        href="javascript:;"
      ></a>
    </nav>
  </HeaderContainer>
)

Header.propTypes = {
  onToggleMenu: PropTypes.func,
}

export default Header
