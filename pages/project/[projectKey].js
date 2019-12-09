import { useRouter } from 'next/router'

import { getProjectByKey } from '../../content/projects/index.js'

const Project = () => {
  const router = useRouter()
  const { projectKey } = router.query
  const result = getProjectByKey({ projectKey })
  if(result){
    const { Project } = result
    return <Project/>
  }else{
    return null
  }
}

export default Project