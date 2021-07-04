import React from "react"
import styled from "@emotion/styled"
import Card from "./card"

const MyWork = styled.section`
  background: #9650EE;
  padding: 1rem 2rem;
  grid-area: mywork;
  color: white;
`

const CardGrid = styled.div`
  display: flex;
  flex-flow: row wrap;
`

const MyWorkSection = () => {
  return (
    <MyWork>
      <h2>My Work</h2>
      <CardGrid>
        <Card
          title="Role-Playing Game Companion"
          description="This site was created assist a group of players as they played a Homebrewed role-playing game. It utilizes Firebase email sign in, Firestore Database, document storage, and hosting."
        />
        <Card
          title="Character Information Site"
          description="WIP - This is an information sire created for a character for a role-playing game, hosted on NetlifyJS."
        />
        <Card
          title="Vue Moblie App"
          description="WIP"
        />
      </CardGrid>
    </MyWork>
  )
}

export default MyWorkSection;
