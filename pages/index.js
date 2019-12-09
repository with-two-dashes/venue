import React from 'react'
import Head from 'next/head'
import { getProjectList } from '../content/projects/index.js'
import Link from 'next/link'

const projectList = getProjectList()

const Project = ({ data }) => {
  const { meta, isHidden, projectKey } = data

  const title = meta.title || `[an untitled project] key: ${projectKey}`
  const description = meta.description || null

  return (
    <div>
      <Link href={`project/${projectKey}`} as={`project/${projectKey}`}>
        <a>{title}</a>
      </Link>
      <div>{description}</div>
    </div>
  )
}

const Projects = ({ list }) => {
  const rendered = list.map((data) => {
    return <Project key={data.projectKey} data={data} />
  })

  return (
    <div>
      <div>Project List</div>
      <div>{rendered}</div>
    </div>
  )
}

const Home = () => {
  return (
    <div>
      <Head>
        <title>Home</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Projects list={projectList} />
    </div>
  )
}

export default Home
