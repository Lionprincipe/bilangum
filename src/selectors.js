export const btnSelector = ({ elBtnsList }, { name, status, ...others }) => {
  let result = []
  const selectedBtns = name && elBtnsList.filter(el => name && name === el.name)
  if (selectedBtns) {
    const { normal, edit } = selectedBtns[0]
    result = normal.map((el, index) =>
      status === 'default' || !edit
        ? { ...el, onClick: el.onClick && others[el.onClick] }
        : {
            ...el,
            onClick: el.onClick && others[el.onClick],
            ...(edit && edit[index]),
          }
    )
  }
  return result
}

export const btnAttributSelector = ({ buttonsAttributs }, ownProps) => {
  const { name } = ownProps
  const result = buttonsAttributs.filter(e => e.name === name)[0]
  console.log(result, 'buttxon-final', name)
  return { ...result, name: result && result.icon }
}
export const getWordElOpenStatus = (ownProps, state) => {
  const { listOfWordElInOpenMode } = state
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
