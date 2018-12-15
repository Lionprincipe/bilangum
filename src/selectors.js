export const btnSelector = (btns, btnList) =>
  btns.filter(el => btnList.some(e => e === el.name))
