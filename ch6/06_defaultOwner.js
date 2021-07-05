let defaultOwnerData = { firstName: '마틴', lastName: '파울러' }

export const defaultOwner = () => ({ ...defaultOwnerData })
export const setDefaultOwner = arg => {
  defaultOwnerData = arg
}
