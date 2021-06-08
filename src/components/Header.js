import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import styled from 'styled-components'

const HeaderContainer = styled.header`
  padding: 15px;
  img {
    z-index: 1000;
    max-width: 70px;
    min-height: 70px;
  }

  img:hover {
    cursor: pointer;
  }
`

const Header = ({ onToggleMenu, children }) => (
  <HeaderContainer id="header" className="alt">
    <img
      id="logo"
      src="/logo.svg"
      onClick={() => (window.location.href = '/')}
    />
    <nav>
      <a className="menu-link" onClick={onToggleMenu} href="javascript:;"></a>
    </nav>
    {children}
  </HeaderContainer>
)

Header.propTypes = {
  onToggleMenu: PropTypes.func,
}

export default Header
