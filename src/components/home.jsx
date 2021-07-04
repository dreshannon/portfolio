import React from "react"
import { css } from "@emotion/react"
import styled from "@emotion/styled"
import Selfie from "../images/team-photo-dre-transparent.png"

const name = css`
  text-align: center;
  margin: 0;
  color: #9650EE;
`

const Home = styled.section`
  background: #F1F1F1;
  grid-area: home;
`

const Divide = styled.div`
  height: 100%;
  display: grid;
  grid-template-columns: 50% 50%;
`

const CenterFlex = styled.div`
  padding: 2rem;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
`

const Endflex = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-end;
`

const Image = styled.img`
  width: 100%;
`

const HomeSection = () => {
  return (
    <Home>
      <Divide>
        <CenterFlex>
          <div>
            <h2 style={{margin: '0'}}>Hello, I'm</h2>
            <h1 css={name}>Dre Shannon</h1>
            <h2 style={{margin: '0'}}>Software Developer from St. Louis, MO</h2>
          </div>
        </CenterFlex>
        <Endflex>
          <Image src={Selfie} alt="Photo of Dre Shannon" />
        </Endflex>
      </Divide>
    </Home>
  )
}

export default HomeSection
