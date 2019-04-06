import uuid4 from 'uuid/v4'
import langData from '../datas/languages.json'
import wordsData from '../datas/words.json'
import elBtnsList from '../datas/btnsPresets.json'
import buttonsAttributs from '../datas/btnsAttributs.json'
import svgPathList from '../datas/svgPath.json'
const languages = parseLangagagesData(langData).filter(({ ethnic }) => !!ethnic)
const referenceLanguages = parseLangagagesData(langData).filter(
  ({ ethnic, language }) => !ethnic && !!language
)
const words = parseWordsData(wordsData, [...referenceLanguages, ...languages])
const initialState = {
  words,
  svgPathList,
  elBtnsList,
  languages,
  buttonsAttributs,
  referenceLanguages,
  referenceLanguage: {},
  ethnicLanguage: {},
  searchLanguage: {},
  modal: [],
  newWordProps: ['word', 'type', 'language', 'translation', 'definition'],
  newProperties: [],
  listOfWordElInEditMode: [],
  listOfWordElInOpenMode: [],
  inputName: 'language',
}

export default initialState

function parseLangagagesData(languages) {
  return languages.map(language => ({ ...language, languageId: uuid4() }))
}

function parseWordsData(words, languages) {
  return words.map(({ spelling, language, ...others }) => ({
    ...others,
    language: languages
      .filter(({ language: name }) => name === language)
      .reduce((acc, curr) => (acc = { ...acc, ...curr }), {}),
    word: spelling,
    wordId: uuid4(),
  }))
}
