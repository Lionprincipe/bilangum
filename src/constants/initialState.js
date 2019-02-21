import uuid4 from 'uuid/v4'
import langData from '../datas/languages.json'
import iconPath from '../datas/svgPath'
import wordsData from '../datas/words.json'

export const languages = parseLangagagesData(langData).filter(
  ({ ethnic }) => !!ethnic
)

export const referenceLanguages = parseLangagagesData(langData).filter(
  ({ ethnic, language }) => !ethnic && !!language
)

export const referenceLanguage = {}
export const ethnicLanguage = {}
export const searchLanguage = {}
export const modal = []
export const newWordProps = [
  'word',
  'type',
  'language',
  'translation',
  'definition',
]
export const newProperties = []
// export const preferedLanguages = {
//   ethnic: 'afro',
//   reference: 'english',
// }
export const elBtnsList = [
  {
    name: 'translationOpt',
    normal: [{ name: 'delete', onClick: 'onClickDeleteTranslation' }],
  },
  {
    name: 'translationLeft',
    normal: [
      {
        name: 'left',
        onClick: 'onClickLeft',
      },
    ],
  },
  {
    name: 'translationRight',
    normal: [{ name: 'right', onClick: 'onClickRight' }],
  },
  {
    name: 'appFooter',
    normal: [
      { name: 'home' },
      { name: 'search' },
      { name: 'bookmarks' },
      { name: 'notification' },
      { name: 'settings' },
    ],
  },
  { name: 'appHeaderLeft', normal: [{ name: 'menu' }] },
  {
    name: 'appWordProperty',
    normal: [
      { name: 'edit', onClick: 'toggleEdit' },
      { name: 'delete', onClick: 'deleteMe' },
    ],
    edit: [{ name: 'cancel' }],
  },
  { name: 'appHeaderRight', normal: [{ name: 'user' }] },
  {
    name: 'wordHeaderLeft',
    normal: [{ name: 'toggleDown', onClick: 'toggleOpen' }],
    open: [{ name: 'toggleUp' }],
  },
  {
    name: 'wordHeaderRight',
    normal: [
      { name: 'translate', onClick: 'clickTranslate' },
      { name: 'edit', onClick: 'toggleEdit' },
      { name: 'delete', onClick: 'deleteWord' },
    ],
    edit: [{ name: 'cancel' }],
  },
  { name: 'appHeaderLeft', normal: [{ name: 'menu' }] },
  {
    name: 'appHeaderRight',
    normal: [{ name: 'home' }, { name: 'notification' }, { name: 'settings' }],
  },
]
export const buttonsAttributs = [
  { name: 'menu', icon: 'menu' },
  { name: 'home', icon: 'home' },
  { name: 'user', icon: 'profile' },
  { name: 'search', icon: 'search' },
  { name: 'bookmarks', icon: 'tag' },
  { name: 'notification', icon: 'bell' },
  { name: 'tranlate', icon: 'translate' },
  { name: 'settings', icon: 'settings' },
  { name: 'toggleDown', icon: 'arrow', rotate: '270deg' },
  { name: 'left', icon: 'arrow', rotate: '180deg' },
  { name: 'right', icon: 'arrow', rotate: '0deg' },
  { name: 'toggleUp', icon: 'arrow', rotate: '90deg' },
  { name: 'show', icon: 'eye' },
  { name: 'plus', icon: 'plus' },
  { name: 'delete', icon: 'trash' },
  { name: 'edit', icon: 'pencil' },
  { name: 'cancel', icon: 'plus', rotate: '46deg' },
  { name: 'close', icon: 'plus', rotate: '90deg' },
]
export const words = parseWordsData(wordsData, [
  ...referenceLanguages,
  ...languages,
])
export const listOfWordElInEditMode = []
export const listOfWordElInOpenMode = []
export const inputName = 'language'

export const isAdding = false

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
