const createResource = () => ({})
const availableResources = []
const allocatedResources = []

const func = () => {
  const result = availableResources.length === 0 ? createResource() : availableResources.pop()
  allocatedResources.push(result)
  return result
}
