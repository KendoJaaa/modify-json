import _ from 'lodash'

export default function modify (value) {
  let object
  try {
    object = JSON.parse(value)
  } catch(e) {
    return 'the input is not in correct format'
  }

  const array =  _.values(object)
  for (let i = array.length - 1; i > 0; i--) {
    for(let j = 0; j < array[i].length; j++) {
      for(let k = 0; k < array[i - 1].length; k++) {        
        if (array[i][j].parent_id === array[i - 1][k].id) {
          array[i - 1][k].children.push(array[i][j])
          break
        }
      }
    }
  } 
  return array[0]
}