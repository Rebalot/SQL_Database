const queryActiveStatus = (queryParams) => {
  if (queryParams === 'true' || queryParams === undefined) {
    return true
  } else if (queryParams === 'false') {
    return false
  } else {
    return null
  }
}

const queryNumbersArray = (queryParams) => {
  const numbersArray = queryParams
    .split(',')
    .map((value) => +value.trim())
    .filter((value) => !isNaN(value))
  return numbersArray
}

const queryStringsArray = (queryParams) => {
  const stringsArray = queryParams
    .split(',')
    .map(value => value.trim())
  return stringsArray
}

module.exports = {
  queryActiveStatus,
  queryNumbersArray,
  queryStringsArray
}
