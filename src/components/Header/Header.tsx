import { BackgroundContainer, BackgroundImg, HeaderArticle, HeaderForm, HeaderInput, HeaderSection, HeaderTitle, SubmitButton, SubmitImg } from "./HeaderStyle"

import arrow from '../../images/icon-arrow.svg'
import background from '../../images/pattern-bg-desktop.png'

function Header () {
    return (
        <HeaderSection>
            <BackgroundContainer>
                <BackgroundImg src={background} alt=""/>
            </BackgroundContainer>
            <HeaderArticle>
                <HeaderTitle>IP Address Tracker</HeaderTitle>
                <HeaderForm>
                    <HeaderInput type='text' placeholder="Search for any IP Address or domain" required/>
                    <SubmitButton type='submit'>
                        <SubmitImg src={arrow} alt=""/>
                    </SubmitButton>
                </HeaderForm>
            </HeaderArticle>
            <HeaderArticle>
                
            </HeaderArticle>
        </HeaderSection>
    )
}

export default Header