import React from 'react';
import {
    RightColContainer,
    DivRow,
    DivFlexWrap,
    SubmissionsContet,
    DatTitleDescrip,
    PlaceHolderImage,
    NavMenuContainer,
    ChallengeHeading,
    DataContentOne,
    DataTitleOne,
    DataContentContainer,
    IndividSubmissionCard
} from "../styles"
import {
    dummyData,
    shortPara
} from "../globals"


function RightCol() {

    const navContent = (
        <NavMenuContainer>
            <h1>Lavendire</h1>
            <PlaceHolderImage/>
        </NavMenuContainer>
    )


    const challengeContent = (
        <DivRow>
            <ChallengeHeading>#goalfriends Challenge</ChallengeHeading>
            <PlaceHolderImage/>
        </DivRow>
    )

    const dataContent = (
        <DataContentContainer>
            <DataContentOne>
                <DatTitleDescrip>Submitted</DatTitleDescrip>
                <DataTitleOne>238</DataTitleOne>
            </DataContentOne>

            <DataContentOne>
                <DatTitleDescrip>Submitted</DatTitleDescrip>
                <DataTitleOne>238</DataTitleOne>
            </DataContentOne>

            <DataContentOne>
                <DatTitleDescrip>Submitted</DatTitleDescrip>
                <DataTitleOne>238</DataTitleOne>
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
            {dataContent}
            {submissionsContent}

        </RightColContainer>
    );
}

export default RightCol;
