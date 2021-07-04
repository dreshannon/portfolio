import React from "react"
import { css } from "@emotion/react"
import styled from "@emotion/styled"
import resume from "../assets/Leandre_Shannon_Resume.pdf"

const Experience = styled.section`
  background: #F1F1F1;
  padding: 1rem 2rem;
  grid-area: experience;
`

const Divide = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
`

const FlexApart = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
`
const FlexCenter = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
`

const ExperienceSection = () => {
  return(
    <Experience>
      <h2>Experience</h2>
      <h3>Career</h3>
      <Divide>
        <div>
          <p><strong>Cloud Engineer/Software Developer II, CenturyLink/Lumen</strong></p>
          <p>Town &amp; Country, MO</p>
          <small>July 2019 - Present</small>
        </div>
        <div>
          <p><strong>Responsibilities</strong></p>
          <ul>
            <li>Create and maintain APIs utilizing Amazon AWS services used for internal billing systems.</li>
            <li>Utilize serverless technologies for modularized stack deployments.</li>
            <li>Create and maintain API documentation.</li>
            <li>Maintain and implement new features for customer-facing interface.</li>
            <li>Maintain customer facing informational sites.</li>
            <li>Create and maintain APIs utilizing NodeJS and ExpressJS for internal systems.</li>
          </ul>
        </div>
      </Divide>
      <Divide>
        <div>
          <p><strong>Front End Web Developer, theLoft</strong></p>
          <p>Hazelwood, MO</p>
          <small>May 2018 - July 2019</small>
        </div>
        <div>
          <p><strong>Responsibilities</strong></p>
          <ul>
            <li>Create new desktop and mobile friendly user interfaces from Adobe Photoshop documents using Visual Studio.</li>
            <li>Create/maintain new online stores using Shopify ecommerce platform.</li>
            <li>Maintain group git repositories.</li>
            <li>Create/update developer documentation for each production site.</li>
            <li>Refactor production sites for ADA compliance.</li>
          </ul>
        </div>
      </Divide>
      <h3>Education</h3>
      <FlexApart>
        <p><strong>University of Missouri, College of Engineering</strong></p>
        <p>Columbia, Missouri</p>
      </FlexApart>
      <FlexApart>
        <p>Bachelor of Science in Computer Science</p>
        <p>2014 - 2017</p>
      </FlexApart>
      <FlexCenter css={css`
        & > * {
          margin: 1rem;
        }
      `}>
        <a href={resume} className="pill" target="_blank">Resume (PDF)</a>
        <a href="https://github.com/ldsz89" className="pill" target="_blank">GitHub</a>
      </FlexCenter>
    </Experience>
  )
}

export default ExperienceSection
