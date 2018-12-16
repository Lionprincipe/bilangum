export const btnSelector = (btns, btnList) =>
  btnList.map(btn => {
    const index = btns.findIndex(e => e.name === btn.name)
    return index > -1 && { ...btns[index], ...btn }
  })

export const getWordElOpenStatus = (ownProps, state) => {
  const { listOfWordElInOpenMode } = state
  console.log(listOfWordElInOpenMode)
  const { wordId } = ownProps
  const index = listOfWordElInOpenMode.findIndex(el => el && el.id === wordId)
  return index > -1 && listOfWordElInOpenMode[index].isOpen
}

export const getWordElEditStatus = (ownProps, state) => {
  const { listOfWordElInEditMode } = state
  const { wordId, name } = ownProps
  const index = listOfWordElInEditMode.findIndex(
    el => el && el.id === wordId && el.name === name
  )
  return index > -1 && listOfWordElInEditMode[index].status
}
