import React from 'react'
import styled from 'styled-components'

import logoImage from '../../../../images/logo.png'

const Logo = (): JSX.Element => <LogoImage src={logoImage} alt='Courses Logo' />

const LogoImage = styled.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: cover;
`

export default Logo
