import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import Nav from './Nav'

const Header = () => {
    return (
        <MainHeader>
            <NavLink to="/">
                <h2 >my<span>Store</span></h2>
            </NavLink>
            <Nav />
        </MainHeader>
    )
}

const MainHeader = styled.header`
background-color: ${({ theme }) => theme.colors.bg};
padding: 0 4.8rem;
height: 8rem;
display: flex;
justify-content: space-between;
align-items: center;
position: relative;
    span{
        color: #8490ff;
        font-weight: bold;
    }
`

export default Header
