// Example Challenge
/**
 * map
 *
 * copy and modify each value of an array
 *
 * @param modifier function - function that modifies each value
 * @param list array - a collection of values
 *
 * @return array - modified array of values
 */
const map = (modifier, list) => {
  if (typeof modifier !== 'function') {
    throw new Error('modifier is not a function!')
  }

  if (typeof list !== 'object') {
    throw new Error('list argument is not an array!')
  }

  if (!list.length) {
    throw new Error('list argument is not an array!')
  }

  return list.map(modifier)
}
export default map
