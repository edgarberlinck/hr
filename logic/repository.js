module.exports.resolveProjectNameByURL = projectUrl => {  
  const { pathname, host } = new URL(projectUrl)

  if ('github.com' !== host) {
    throw new Error('Unsuported prlatform. Make sure to inform a valid github project')
  }

  return pathname
}