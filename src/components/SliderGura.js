import styled from "styled-components";
import './SliderGura.css'
<link 
  href="http://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.3.0/css/font-awesome.css" 
  rel="stylesheet"  type='text/css'></link>
const SliderGura = (props) =>{
    return (
        <Container>
            <Bg>
                <img src="/images/gurabg4.jpg" />
            </Bg>  
            <div class="wrap">
                <div class="search">
                    <input type="text" class="searchTerm" placeholder="I'll be honest with you this ain't do shit" />
                    <button type="submit" class="searchButton">
                        <i class="fa fa-search" aria-hidden="true"></i>
                    </button>
                </div>
            </div>
        </Container>
    )
}

const Container = styled.div`
    padding: 0 0;
    display: flex;
    width:100vw;
    height:100vh;  
`;

const Bg = styled.div`
    img{
        position:absolute;
        width:100%;
        height:100%;
        object-fit:cover;
    }
    
`;

export default SliderGura;