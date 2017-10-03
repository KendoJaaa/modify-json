import modify from './modify'

it('can answer correctly if the input format is wrong', () => {
  const input = 'testing input'
  const result = modify(input)

  expect(result).toEqual('the input is not in correct format')
})


it('can answer correctly if the fucntion get the correct input', () => {
  const input = '{"0": [{"id": 10, "title": "House", "level": 0, "children": [], "parent_id": null}], "1": [{"id": 12, "title": "Red Roof", "level": 1, "children": [], "parent_id": 10}, {"id": 18, "title": "Blue Roof", "level": 1, "children": [], "parent_id": 10}, {"id": 13, "title": "Wall", "level": 1, "children": [], "parent_id": 10}], "2":  [{"id": 17, "title": "Blue Window", "level": 2, "children": [], "parent_id": 12}, {"id": 16, "title": "Door", "level": 2, "children": [], "parent_id": 13}, {"id": 15, "title": "Red Window", "level": 2, "children": [], "parent_id": 12}]}'
  const result = modify(input)

  expect(result[0].id).toEqual(10)
  expect(result[0].children[0].id).toEqual(12)
  expect(result[0].children[1].id).toEqual(18)
  expect(result[0].children[2].id).toEqual(13)
  expect(result[0].children[0].children[0].id).toEqual(17)
  expect(result[0].children[0].children[1].id).toEqual(15)
  expect(result[0].children[2].children[0].id).toEqual(16)  
})
