import { Link } from 'react-router-dom';
import styled from 'styled-components';
import sample from './holointro.mp4';


const Home = (props) => {
    return (
        <Container>
            <IntroVideo>
                <video autoPlay muted loop>
                    <source src={sample} type='video/mp4' />
                </video>
            </IntroVideo>
{/* -----------------------------gura--------------------------- */}
            <Info>
                <img src="/images/gurahead.png" alt="gura head" />
                <profile>
                    <p>
                        <h1>Gawr Gura</h1>
                        <br></br>
                        <h3>
                            Debut date: September 13, 2020
                            <br></br>
                            Birthday: June 20th
                            <br></br>
                            Height: 141 cm
                            <br></br>
                            Fanbase name:Shrimp
                            <br></br>
                            Illustrator: Amashiro Natsuki
                        </h3>
                    </p>
                </profile>
                <intro>
                    <p>
                        <h2>
                            
                            A descendant of the Lost City of Atlantis, who swam to Earth while saying, "It's so boring down there LOLOLOL!" 
                            Gura bought her clothes (and her shark hat) in the human world and she really loves them. In her spare time, she enjoys
                            talking to marine life.
                        </h2>
                    </p>
                </intro>
            </Info>

{/* ------------------------------ina----------------------------------- */}
            <Info1>
            <img src="/images/INA.png" alt="ina head" />
                <profile1>
                    <p>
                        <h1>Ninomae Ina'nis</h1>
                        <br></br>
                        <h3>
                            Debut date: September 13, 2020
                            <br></br>
                            Birthday: May 20th
                            <br></br>
                            Height: 157 cm
                            <br></br>
                            Fanbase name:Tentacult or Takodachi
                            <br></br>
                            Illustrator: Kuroboshi Kouhaku
                        </h3>
                    </p>
                </profile1>
                <intro1>
                    <p>
                        <h2>
                            
                        One day, Ina'nis picked up a strange book and then started to gain the power of controlling tentacles. To her, tentacles are just
                             a part in her ordinary life; it has never been a big deal for her. However, her girly mind does want to get them dressed up and stay pretty.
                        After gaining power, she started hearing Ancient Whispers and Revelations. Hence, she began her VTuber activities to deliver random sanity checks on humanity, as an ordinary girl.
                        </h2>
                    </p>
                </intro1>
            </Info1>
{/* --------------------------------watson--------------------------------- */}
            <Info>
                <img src="/images/watson.png" alt="watson head" />
                <profile>
                    <p>
                        <h1>Amelia Watson</h1>
                        <br></br>
                        <h3>
                            Debut date: September 13, 2020
                            <br></br>
                            Birthday: January 6th
                            <br></br>
                            Height: 150 cm
                            <br></br>
                            Fanbase name:Teamates
                            <br></br>
                            Illustrator: NABI
                        </h3>
                    </p>
                </profile>
                <intro>
                    <p>
                        <h2> 
                        Amelia heard strange rumors surrounding Hololive online: talking foxes, magical squirrels, superhuman dogs,
                         and more. Soon after beginning her investigation on Hololive, and just out of interest, she decided to become
                          an idol herself! She loves to pass her time training her reflexes with FPS games, and challenging herself with puzzle games.
                        It's elementary, right?
                        </h2>
                    </p>
                </intro>
            </Info> 
{/* -----------------------------kiara---------------------------------- */}
            <Info1>
            <img src="/images/kiara.png" alt="kiara head" />
                <profile1>
                    <p>
                        <h1>Takanashi Kiara</h1>
                        <br></br>
                        <h3>
                            Debut date: September 12, 2020
                            <br></br>
                            Birthday: July 6th
                            <br></br>
                            Height: 165 cm
                            <br></br>
                            Fanbase name:Kiara Fried Phoenix aka KFP
                            <br></br>
                            Illustrator: huke
                        </h3>
                    </p>
                </profile1>
                <intro1>
                    <p>
                        <h2>
                        An idol whose dream is to become a fast food shop owner. Kiara is a phoenix, NOT a chicken or turkey. (Very important)
                        She works extremely hard since she will be reborn from ashes anyway.
                        </h2>
                    </p>
                </intro1>
            </Info1>
{/* --------------------------------calliope------------------------------- */}
            <Info>
                <img src="/images/calliope.png" alt="calliop head" />
                <profile>
                    <p>
                        <h1>Mori Calliope</h1>
                        <br></br>
                        <h3>
                            Debut date: September 12, 2020
                            <br></br>
                            Birthday: April 4th
                            <br></br>
                            Height: 167 cm
                            <br></br>
                            Fanbase name:Dead Beats
                            <br></br>
                            Illustrator:Yukisame
                        </h3>
                    </p>
                </profile>
                <intro>
                    <p>
                        <h2> 
                        The Grim Reaper's first apprentice. Because the world's medical system advanced so dramatically, Calliope 
                        became a VTuber to collect souls. It seems that the lost souls vaporized by the wholesome relationships of VTubers 
                        flow through her as well. In the end, she's a gentle-hearted girl whose sweet voice contradicts the morbid things she 
                        tends to say, as well as her hardcore vocals.
                        </h2>
                    </p>
                </intro>
            </Info> 
        </Container>
    )
};

const Container = styled.main`
    position:relative;
    min-height: calc(375vh - 100px);
    overflow-x:(hidden);
    display: block;
    top:0px;
    &:after{
        background: url("/images/home-background.png") center center/cover no-repeat fixed;
        content: "";
        position: absolute;
        opacity: 1;
        z-index: -1;
    }
    @media screen and (max-width:1700px){
        display: grid;
    }
`;
const IntroVideo = styled.div`
    padding: 8vh 14vw;
    video {
        width: 100%;
        max-height: 100%;
    }
`;

const Info = styled.div`
    margin-top:5vh;
    font-family:Comic Sans MS, Comic Sans, cursive;
    padding: 0 3vw;
    display: flex;
    flex-direction: row;
    img{
        border-radius: 10%;  
    }
    profile{
        padding: 0 3px;
        margin-left: 2vw;
        margin-right: 2vw;
        display: flex;
        width:10vw;
    }
    intro{
        display: flex;
        align-items: center;
        padding: 0 3px;
        width:50%;

    }
    @media only screen and (max-width:1150px){
        flex-direction:column;
        align-items: center;
        profile{
            text-align:center;
            justify-content: center;
            
        }
        img{
            height:auto;
            width:60vw;
        }
    }
    
`;

const Info1 = styled.div`
    margin-top:5vh;
    font-family:Comic Sans MS, Comic Sans, cursive;
    padding: 0 3vw;
    display: flex;
    flex-direction: row-reverse;
    img{
        border-radius: 10%;
    }
    profile1{
        padding: 0 3px;
        margin-left: 2vw;
        margin-right: 2vw;
        display: flex;
        width:10vw;
    }
    intro1{
        display: flex;
        align-items: center;
        padding: 0 3px;
        width:50%;
    }
    @media only screen and (max-width:1150px){
        flex-direction:column;
        align-items: center;
        profile1{
            text-align:center;
            justify-content: center;
        }
        img{
            height:auto;
            width:60vw;
        }
    }
`;


export default Home;