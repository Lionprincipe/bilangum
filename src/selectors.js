export const selectAddPropertyNumber = ({ newProperties }, { wordId }) =>
  newProperties && newProperties.filter(el => el === wordId).length

export const modalIdSelector = state => {
  const { modal } = state
  return (modal && modal.length - 1) || 0
}

export const composeBtnsList = (
  { elBtnsList },
  { name, status, ...others }
) => {
  const { normal, edit, open } = getTrayBtns(name, elBtnsList)
  return (
    normal &&
    normal.map((el, index) => ({
      ...el,
      onClick: el.onClick && others[el.onClick],
      ...(status === 'default' || (edit && edit[index])),
      ...(status === 'default' || (open && open[index])),
    }))
  )
}

export const iconAttributsSelector = ({ buttonsAttributs }, { name }) =>
  buttonsAttributs
    .filter(e => e.name === name)
    .reduce((acc, curr) => (acc = { ...curr, name: curr.icon }), {})

export const getWordElOpenStatus = ({ wordId }, { listOfWordElInOpenMode }) => {
  const index = findWordIndexInList(listOfWordElInOpenMode, wordId)
  return index > -1 && listOfWordElInOpenMode[index].status
}

export const getWordElEditStatus = (
  { wordId, name },
  { listOfWordElInEditMode }
) => {
  const index = findWordIndexInList(listOfWordElInEditMode, wordId, name)
  return index > -1 && listOfWordElInEditMode[index].status
}

function getTrayBtns(name, list) {
  return name && list.filter(el => name && name === el.name)[0]
}

function findWordIndexInList(list, id, name) {
  return name
    ? list.findIndex(el => el && el.id === id && el.name === name)
    : list.findIndex(el => el && el.id === id)
}
