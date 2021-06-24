import React from "react";
import Calendar from "@ericz1803/react-google-calendar";
import { css } from "@emotion/react";
import styled from 'styled-components'
import './schedule.css'

const API_KEY = "AIzaSyA8B7oaDhfy9C5ib6PiuVHWjfoSUxtzeb4";
let calendars = [
  {calendarId: "0u0g6idevmvsdk8orca27lmg8e6uquvq@import.calendar.google.com", color: "red"}, //add a color field to specify the color of a calendar

];

let styles = {
  //you can use object styles (no import required)
  calendar: {
    borderWidth: "3px", //make outer edge of calendar thicker
    borderColor:"white",
  },
  Calendar:css`
    color:red;
  `,
  //you can also use emotion's string styles
  today:css`
    color:black;
    border: 2px solid yellow;
  `,
  day:css`
    border-color: white;
    border-width:2px;
  `,
  Text:css`
    color:red;
  `,
  eventText:css`
    color:white;
  `,
}

export default class Example extends React.Component {
  render() {
    return (
        <Container>
            <Content>
                <Calendar apiKey={API_KEY} calendars={calendars} styles={styles} />
            </Content>
        </Container>
      
    )
  }
}

const Container = styled.div`
    background-image: url("/images/gurabg2.jpg");
    opacity: 0.9;
    width: 100vw;
    height: 110vh;
    background-size: cover;
    @media (max-width:1150px){
      height:162vh;
      width:auto;
    }
    
`;

const Content = styled.div`
    width: 100;
    height: 80vh;
    padding:10vh 20vw;
    @media(max-width:1150px){
      padding:10vh 0;
    }
`;