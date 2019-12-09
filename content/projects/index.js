import {
  Project as LensProject,
  ProjectMeta as LensMeta
} from './lens/Project.js'

const masterProjectMapObject = {
  lens: {
    Project: LensProject,
    isHidden: false,
    meta: LensMeta
  }
}

const visibleProjects = new Map()
const masterProjectKeys = Object.keys(masterProjectMapObject)
for (const projectKey of masterProjectKeys) {
  const { isHidden, ...rest } = masterProjectMapObject[projectKey]
  const output = {
    ...rest,
    isHidden,
    projectKey
  }

  if (!isHidden) {
    visibleProjects.set(projectKey, output)
  }
}

export const getProjectByKey = ({ projectKey }) => {
  return visibleProjects.get(projectKey)
}

export const getProjectList = () => {
  return Array.from(visibleProjects.values())
}
