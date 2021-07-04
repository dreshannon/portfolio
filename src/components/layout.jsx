import React from "react"
import { Global, css } from "@emotion/react"
import styled from "@emotion/styled"

const Wrapper = styled("div")``

const PageLayout = styled.div`
  display: grid;
  grid-template-columns: auto;
  // grid-template-rows: max(100vh, 900px, auto) max(100vh, 900px, auto) max(100vh, 900px, auto) max(100vh, 900px, auto);
  grid-template-rows: repeat(4, max(100vh, 900px));
  grid-template-areas:
    "home"
    "mywork"
    "experience"
    "contact"
`

const Layout = ({ children }) => {
  return (
    <Wrapper>
      <Global styles={css`
        h1 {
          font-size: 5rem;
        }
        h2 {
          font-size: 3rem;
        }
        h3 {
          color: #9650EE;
          font-size: 2rem;
        }
        .pill {
          background-color: #9650EE;
          color: white;
          border-radius: 25px;
          padding: .5rem 1rem;
          text-decoration: none;
        }
      `} />
      <PageLayout>
        {children}
      </PageLayout>
    </Wrapper>
  )
}

export default Layout
