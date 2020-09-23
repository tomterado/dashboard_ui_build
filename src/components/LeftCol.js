import React from 'react';
import {
    LeftColContainer,
    DivRow,
    LogoImage,
    LogoTitle,
    MenuContainer,
    PlaceHolderImage,
    ReferalContainer,
    ReferralHeading,
    MenuTitle,
    ReferralSubText,
    JoinButton
} from "../styles"
import {
    menuItems,
    shortPara
} from "../globals"


function LeftCol() {

    const divMenu = () => {
        return(
            <div>
                {menuItems.map((ele, ind) => {
                    return(
                        <DivRow>
                            <PlaceHolderImage/>
                            <MenuTitle> {ele}</MenuTitle>
                        </DivRow>
                    )
                })}
            </div>
            )
    }

    const logoMenuContent = (
        <div>
            <DivRow style={{marginTop: "2em"}}>
                <LogoImage src={require("../assets/vibes.png")}/>
                <LogoTitle>Vibely</LogoTitle>
            </DivRow>

            <MenuContainer>
                {divMenu()}
            </MenuContainer>
        </div>
    )


    const referContent = (
        <ReferalContainer>
            <ReferralHeading> Join us.</ReferralHeading>
            <ReferralSubText>
                {shortPara}
            </ReferralSubText>

            <JoinButton>

            </JoinButton>
        </ReferalContainer>
    )


    return (
        <LeftColContainer>
            {logoMenuContent}
            {referContent}
        </LeftColContainer>
    );
}

export default LeftCol;
