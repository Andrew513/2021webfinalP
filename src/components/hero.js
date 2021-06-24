import { Link } from "react-router-dom";
import styled from 'styled-components'
const Hero =({handleLogout}) =>{
    return (
        <section className="hero">
            <nav>
                <Link exact to="/">
                    <Logo>
                        <img src="/images/holologo.png" alt="holologo"/>
                    </Logo>
                </Link>
                <button onClick={handleLogout}>Logout</button>
            </nav>
            <Content>
                <a href = "/">
                    <img src="/images/portal.gif" alt="portal" />
                    You're logged in, Back to HomePage
                    <img src="/images/portal.gif" alt="portal" />
                </a>
            </Content>
         </section>
    );
};

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
    }
`;

const Content = styled.div`
    width: 100vw;
    height: 90vh;
    margin-top: 10vh;
    display: flex;
    justify-content: center;
    align-items: center;
    img{
        height: 40px;
        width: 40px;
    }
`;
export default Hero;