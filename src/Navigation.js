import styled from 'styled-components/macro'
import {NavLink} from 'react-router-dom'
import {ReactComponent as HomeLogo} from './assets/home.svg'
import {ReactComponent as QuoteBookmarksLogo} from './assets/click.svg'

export default function Navigation() {
    return(

        <NavBar>
            <NavLink exact to="/">
                <HomeButton/>
            </NavLink>
            <NavLink to="/savedQuotes">
                <BookmarkButton/>
            </NavLink>
        </NavBar>


    )
}

const NavBar = styled.nav`
    position: fixed;
    left:0;
    right: 0;
    margin: auto;
    bottom: 10px;
    width: 80%;
    height: 50px;
    border-radius: 5px;
    background-color: teal;
    display: grid;
    grid-template-columns: 1fr 1fr;
    
    & > a{
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0;
        color: white;
     }

    .active {
        color: papayawhip;
    }

`

const HomeButton = styled(HomeLogo)`
    width: 30%;
    padding: 0.3rem;
`
const BookmarkButton = styled(QuoteBookmarksLogo)`
    width: 30%;
    padding: 0.3rem;

`





