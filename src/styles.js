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
    flex: 3;
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
    flex: 9;
    // height: 150vh;
    padding-left: 4em;
    padding-right: 4em;
    // background-color: ${theme.aqua};
    background-color: ${theme.white};
    border-top-left-radius:64px;
    border-bottom-left-radius:64px;
`;

const DataContentContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;


const DataContentOne = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 250px;
    width: 200px;
    background-color: ${theme.green1};
    border-radius: 32px;
`;

const NavMenuContainer = styled.div`
    margin-top: 2em;

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
    font-weight: 400;
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
    color:  ${theme.black};
    font-weight: 300;
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
    ReferralHeading,
    ReferralSubText,
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
    MenuTitle
}
