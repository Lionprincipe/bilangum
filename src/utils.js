export function updateList(list, index, newItem) {
  index = index > -1 ? index : list.length
  return newItem
    ? [...list.slice(0, index), newItem, ...list.slice(index + 1)]
    : [...list.slice(0, index), ...list.slice(index + 1)]
}

export function findIndexInList(list, id, name) {
  return name
    ? list.findIndex(el => el && el.id === id && el.name === name)
    : list.findIndex(el => el && el.id === id)
}
