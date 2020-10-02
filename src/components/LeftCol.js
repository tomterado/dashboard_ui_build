import React from 'react';
import {
    LeftColContainer,
    DivRow,
    LogoImage,
    LogoTitle,
    MenuContainer,
    PlaceHolderImage,
    ReferalContainer,
    ChannelSubMenuHeading,
    MenuTitle,
    ChannelChallengeTitle,
    JoinButton
} from "../styles"
import {
    menuItems,
    channelItems
} from "../globals"


function LeftCol() {

    const divMenu = (channel) => {
        if(channel){
            return(
                <div>
                    {menuItems.map((ele, ind) => {
                        return(
                            <DivRow>
                                <ChannelSubMenuHeading> {ele}</ChannelSubMenuHeading>
                            </DivRow>
                        )
                    })}
                </div>
            )}
        return(
            <div>
                {channelItems.map((ele, ind) => {
                    return(
                        <DivRow>
                            <ChannelSubMenuHeading> {ele}</ChannelSubMenuHeading>
                        </DivRow>
                    )
                })}
            </div>
        )
        }


    const referContent = (
        <DivRow>
            <PlaceHolderImage/>
            <MenuTitle>Refer a Friend</MenuTitle>
        </DivRow>
    )

    const logoMenuContent = (
        <div>
            <LogoImage src={require("../assets/vibes.png")}/>
            <LogoTitle>Lavendire</LogoTitle>

            <MenuContainer>
                {referContent}
                <ChannelChallengeTitle>Challenges ✨</ChannelChallengeTitle>
                {divMenu(true)}
                <ChannelChallengeTitle>Channels 📺</ChannelChallengeTitle>
                {divMenu(false)}


            </MenuContainer>
        </div>
    )

    return (
        <LeftColContainer>
            {logoMenuContent}
        </LeftColContainer>
    );
}

export default LeftCol;
