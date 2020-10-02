import React from 'react';
import {
    RightColContainer,
    DivRow,
    DivFlexWrap,
    SubmissionsContet,
    DatTitleDescrip,
    TrendingHeading,
    NavMenuContainer,
    ChallengeHeading,
    DataContentOne,
    DataTitleOne,
    DataContentContainer,
    ChallengeDescription,
    IndividSubmissionCard,
    TrendingImage
} from "../styles"
import {
    dummyData,
    descriptionPara
} from "../globals"


function RightCol() {

    const navContent = (
        <NavMenuContainer>
            {/*<MenuTitle>Lavendire</MenuTitle>*/}
        </NavMenuContainer>
    )

    const descriptionContent = (
        <ChallengeDescription>{descriptionPara}</ChallengeDescription>
    )


    const challengeContent = (
        <DivRow>
            <ChallengeHeading>Goal Friends</ChallengeHeading>
        </DivRow>
    )

    const trendingContent = (
        <DivRow>
            <TrendingHeading>Trending</TrendingHeading>
        </DivRow>
    )

    const dataContent = (
        <DataContentContainer>

            <DataContentOne>
                <TrendingImage src={require("../assets/dpog_image.png")}/>
            </DataContentOne>

            <DataContentOne>
                <TrendingImage src={require("../assets/book_image.png")}/>
            </DataContentOne>

            <DataContentOne>
                <TrendingImage src={require("../assets/dpog_image.png")}/>
            </DataContentOne>

        </DataContentContainer>
    )

    const submissionsContent = (
        <>
            <DivRow>
                <SubmissionsContet>Submissions</SubmissionsContet>
            </DivRow>

            <DivFlexWrap>
                {dummyData.map((ele, ind) => {
                    return(
                        <IndividSubmissionCard>
                            <p>{ele.name}</p>
                            <p>{ele.username}</p>
                        </IndividSubmissionCard>
                    )
                })}
                {dummyData.map((ele, ind) => {
                    return(
                        <IndividSubmissionCard>
                            <p>{ele.name}</p>
                            <p>{ele.username}</p>
                        </IndividSubmissionCard>
                    )
                })}
                {dummyData.map((ele, ind) => {
                    return(
                        <IndividSubmissionCard>
                            <p>{ele.name}</p>
                            <p>{ele.username}</p>
                        </IndividSubmissionCard>
                    )
                })}
            </DivFlexWrap>
        </>
    )

    return (
        <RightColContainer>
            {navContent}
            {challengeContent}
            {descriptionContent}
            {trendingContent}
            {dataContent}
            {submissionsContent}

        </RightColContainer>
    );
}

export default RightCol;
