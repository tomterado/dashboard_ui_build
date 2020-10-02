import React from 'react';
import styled from 'styled-components';
import {theme} from "./themes"


// CONTAINER STYLES


const MainContainer = styled.div`
    display: flex;
    background-color: ${theme.lightGrey};
    
`;

const LeftColContainer = styled.div`
    display: flex;
    flex: 2;
    // height: 150vh;
    background-color: ${theme.lightGrey};
    padding-left: 4em;
    padding-right: 4em;
    // border: 4px dotted red;
    flex-direction: column;
    justify-content: space-between;
`;

const RightColContainer = styled.div`
    display: flex;
    flex-direction: column;
    flex: 10;
    // height: 150vh;
    padding-left: 4em;
    padding-right: 4em;
    // background-color: ${theme.aqua};
    background-color: ${theme.white};
    border-top-left-radius:32px;
    border-bottom-left-radius:32px;
`;

const DataContentContainer = styled.div`
    display: flex;
    overflow-x: scroll;
    width: 100%;
`;


const TrendingImage = styled.img`
    max-width: 100%;
    max-height: 100%;
    display: block
`


const DataContentOne = styled.div`
 
    // display: flex;
    // flex-direction: column;
    // margin-right: 15px,
    justify-content: center;
    align-items: center;
    text-align: center;
    // height: 200px;
    width: 30%;
    // background-color: ${theme.green1};
    border-radius: 8px;
`;

const NavMenuContainer = styled.div`
    margin-top: 4em;
    display: flex;
    justify-content: flex-end;
    align-items:center;
`;

const MenuContainer = styled.div`
    margin-top: 3em;
    display: flex;
    flex-direction: column;
    // border: 4px dotted red;
    // height: 500px;
`;

const ReferalContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding-right: 2em;
    padding-left: 2em;
    background-color:  ${theme.white};
    height: 350px;
    margin-bottom: 10em;
    border-radius: 16px;
`;

// IMAGE STYLES



const LogoImage = styled.img`
    margin-top: 3em;
    height: 43px;
    width: 59px;
    margin-right: 1em;
`;

const PlaceHolderImage = styled.div`
    height: 36px;
    width: 36px;
    border-radius: 18px;
    margin-right: 2em;
    background-color:  ${theme.placeholder};
`;

const IndividSubmissionCard = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    // flex: 3
   
    height: 200px;
    width: 15%;
    margin-right: 1em;
    border-radius: 12px;
    background-color:  ${theme.lightGrey};
    margin-bottom: 2em;

`;



// REUSABLE DIV STYLES
const DivRow = styled.div`
    display: flex;
    align-items: center;
`;

const DivFlexWrap = styled.div`
    display: flex;
    // align-items: center;
    flex-wrap: wrap;
    // border: 4px dotted red;
    justify-content: space-between;

`;



// TEXT STYLES
const LogoTitle = styled.h1`
    font-size: 2em;
    color:  ${theme.black};
    font-weight: 600;
`;

const ChallengeDescription = styled.p`
    font-size: 1em;
    line-height: 24px;
    color:  ${theme.textGrey};
    // font-weight: 600;
    margin-bottom: 2em;
`;

const ReferralHeading = styled.h1`
    font-size: 2.5em;
    color:  ${theme.black};
    font-weight: 600;
    margin: 0px;
    margin-top: 1.5em;
    // line-height: em;
`;

const ReferralSubText = styled.p`
    font-size: 1em;
    color:  ${theme.textGrey};
    line-height: 18px;
    margin: 0px;
    margin-top: 16px;
    margin-bottom: 16px;
`;

const JoinButton = styled.button`
    margin-top: 8px;
    margin-bottom: 16px;
    background-color:  ${theme.green2};
    height: 40px;
    width: 200px;
    border: 0px solid grey;
    border-radius: 4px;
`;

const ChallengeHeading = styled.h1`
    font-size: 2.5em;
    color:  ${theme.green1};
    font-weight: 600;
    line-height: 1.5em;
    text-decoration: underline;
`;

const TrendingHeading = styled.h1`
    font-size: 1.5em;
    color:  ${theme.black};
    font-weight: 600;
    line-height: 1.5em;
`;

const DataTitleOne = styled.h1`
    font-size: 2.5em;
    color:  ${theme.white};
    font-weight: 600;
    line-height: 1.5em;
    margin: 0px;

`;

const DatTitleDescrip = styled.p`
    font-size: 1em;
    color:  ${theme.white};
    line-height: 1.5em;
    margin: 0px;
`;


const SubmissionsContet = styled.h1`
    margin-top: 2em;
    font-size: 2em;
    color:  ${theme.black};
    font-weight: 600;
    line-height: 1.5em;
`;


const MenuTitle = styled.h1`
    font-size: 1.5em;
    color:  ${theme.green2};
    font-weight: 500;
    line-height: 1.5em;
`;

const ChannelSubMenuHeading = styled.p`
    font-size: 1em;
    color:  ${theme.black};
    font-weight: 500;
    line-height: 1.5em;
`;

const ChannelChallengeTitle = styled.h1`
    margin-toP: 1em;
    font-size: 2.0em;
    color:  ${theme.green2};
    font-weight: 500;
    line-height: 1.5em;
`;



// justify-content:
// align-items:
// border: 4px dotted red;

export {
    MainContainer,
    LogoImage,
    LeftColContainer,
    RightColContainer,
    DivRow,
    LogoTitle,
    MenuContainer,
    PlaceHolderImage,
    ReferalContainer,
    ChallengeDescription,
    TrendingHeading,
    JoinButton,
    NavMenuContainer,
    ChallengeHeading,
    DataContentOne,
    DataTitleOne,
    DatTitleDescrip,
    DataContentContainer,
    SubmissionsContet,
    DivFlexWrap,
    IndividSubmissionCard,
    MenuTitle,
    ChannelChallengeTitle,
    ChannelSubMenuHeading,
    TrendingImage
}
