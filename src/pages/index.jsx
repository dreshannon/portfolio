import * as React from 'react'
import styled from "@emotion/styled"
import Layout from '../components/layout'
import Home from '../components/home'
import MyWork from '../components/mywork'

const IndexPage = () => {
  return (
    <Layout>
      <Home />
      <MyWork />
    </Layout>
  )
}

export default IndexPage
