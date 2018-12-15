export const btnSelector = (btns, btnList) =>
  btns.filter(el => btnList.some(e => e === el.name))

export const getWordElOpenStatus = (ownProps, state) => {
  const { wordElStatusList } = state
  const wordId = ownProps.index
  const index = wordElStatusList.findIndex(({ id }) => id === wordId)
  return index > -1 && wordElStatusList[index].isOpen
}
