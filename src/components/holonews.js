import { TwitterTimelineEmbed } from 'react-twitter-embed'
import styled from 'styled-components'


const Holonews =(props)=>{
    return(
        <Content>
            <Sidegif>
                <img src="/images/coco.gif" alt="cocogif" />
            </Sidegif>
            <Twitter>
                <TwitterTimelineEmbed
                    sourceType="profile"
                    screenName="hololivetv"
                    options={{ 
                        height: "100vh", 
                        width:"50vw" , 
                        marginLeft:"20vw",  
                    }}
                    />
            </Twitter>
            <Sidegif>
                <img src="/images/coco.gif" alt="cocogif" />
            </Sidegif>
        </Content>
    )
}

const Content = styled.div`
    display: flex;
    justify-content: center;
    /* object-fit: cover; */
`;

const Sidegif = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    img{
        height: 100px;
        width:100px;
    }
`;
const Twitter = styled.div`
`;
export default Holonews;