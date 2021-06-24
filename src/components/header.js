//space between : obj        obj         obj
//display:flex
//align-items:center --->to makes it vertically centered to the box
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';

 function MenuBar() {
  return (
    <PopupState variant="popover" popupId="demo-popup-menu">
      {(popupState) => (
        <React.Fragment>
          <Button variant="contained" color="gray" {...bindTrigger(popupState)}>
            <img src="/images/menubar.png" />
          </Button>
          <Menu {...bindMenu(popupState)}>
            <MenuItem onClick={popupState.close}>
                <a href="/" style={{color:"black",fontFamily: "Brush Script MT, Brush Script Std, cursive",display:"flex"}}> 
                    <img  src="/images/holologo.png" alt="holologo" style={{width:"50px"}}/>Home
                </a>
            </MenuItem>
            <MenuItem onClick={popupState.close}>
                <a href="/schedule" style={{color:"black",fontFamily: "Brush Script MT, Brush Script Std, cursive",display:"flex"}}>
                    <img src="/images/calendar.png"/>Schedule
                </a>
            </MenuItem>
            <MenuItem onClick={popupState.close}>
                <a href="/holonews" style={{color:"black",fontFamily: "Brush Script MT, Brush Script Std, cursive",display:"flex"}}>
                    <img src="/images/newspaper.png"/>Holonews
                </a>
            </MenuItem>
            <MenuItem onClick={popupState.close} style={{alignContent:"center"}}>
                <a href="/holovoice" style={{color:"black",fontFamily: "Brush Script MT, Brush Script Std, cursive",display:"flex"}}>
                    <img src="/images/playlist.png"/>Holovoice
                </a>
            </MenuItem>
          </Menu>
        </React.Fragment>
      )}
    </PopupState>
  );
}



const Header =(props)=>{
    return(
        <Nav>
            
            <Link exact to="/">
                <Logo>
                    <img src="/images/holologo.png" alt="holologo"/>
                </Logo>
            </Link>
            <NavMenu>
                <a href="/schedule">
                    <img src="/images/calendar.png"/> 
                    <span>Schedule</span>
                </a>
                &nbsp;
                <a href="/holonews">
                    <img src="/images/newspaper.png"/> 
                    <span>HoloNews</span>
                </a>
                &nbsp;
                <a href="/holovoice">
                    <img src="/images/playlist.png"/> 
                    <span>HoloVoice</span>
                </a>
            </NavMenu>
            <Bar>
                <MenuBar />
            </Bar>
            <Login>
                <Link exact to="/login">
                    Login
                </Link>
            </Login>
            
        </Nav>
        
    )
}

const Bar = styled.div`
    position:absolute;
    right:10px;
    visibility: hidden;
    @media (max-width:800px){
        visibility: visible;
    }

`;
const Nav = styled.nav`
    position:fixed;
    top:0;
    left:0;
    right: 0;
    height: 70px;
    background-color: black;
    opacity: 0.7;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 80px;
    letter-spacing: 16px;
    z-index:3;

`;

const Logo = styled.a`
    padding:0;
    width:160px;
    height: 100%;
    margin-left:auto;
    margin-right: auto;
    margin-top: 4px;
    max-height: 70px;
    font-size: 0;
    display: flex;
    z-index:2;
    text-align: center;
    img{
        margin-left:0;
        display: block;
        width: 100%;
        @media (max-width:800px){
            visibility: hidden;

        }
    }
`;

const Login = styled.a`
    position: relative;
    margin-left: 0;
    background-color:black;
    padding:8px 16px;
    text-transform:uppercase;
    letter-spacing: 1.5px;
    border : 1px solid black;
    border-radius:4px;
    transition: all 0.2s ease 0s;

    &:hover{
        background-color: #A0A0A0;
        color:#000;
        border-color:transparent
    }
    @media (max-width:800px){
        visibility: hidden;
    }
`;

const NavMenu = styled.div`
    align-items: center;
    display: flex;
    flex-flow: row nowrap;
    height: 100%;
    justify-content: flex-end;
    margin: 0px;
    padding: 0px;
    position: relative;
    margin-right: auto;
    margin-left: 25px;
    a{
        display: flex;
        align-items: center;
        img{
            padding: 10px 0;
        }
    }
    span{
            color: rgb(249, 249, 249);
            font-size: 18px;
            letter-spacing: 1.42px;
            margin-top: 4px;
            margin-left: 5px;
            font-family: Brush Script MT, Brush Script Std, cursive;
        }
    @media (max-width:800px){
    visibility: hidden;
    }
    
`;

export default Header