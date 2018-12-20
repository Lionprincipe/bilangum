export const preferedLanguages = { ethnic: 'afro', reference: 'english' }
export const elBtnsList = [
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
  { name: 'appWordProperty', normal: [{ name: 'edit' }] },
  { name: 'appHeaderRight', normal: [{ name: 'user' }] },
  {
    name: 'wordHeaderLeft',
    normal: [{ name: 'toggleDown', onClick: 'toggleOpen' }],
    open: [{ name: 'toggleUp' }],
  },
  {
    name: 'wordHeaderRight',
    normal: [
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
  { name: 'toggleUp', icon: 'arrow', rotate: '90deg' },
  { name: 'show', icon: 'eye' },
  { name: 'plus', icon: 'plus' },
  { name: 'delete', icon: 'trash' },
  { name: 'edit', icon: 'pencil' },
  { name: 'cancel', icon: 'plus', rotate: '46deg' },
  { name: 'close', icon: 'plus', rotate: '90deg' },
]

export const words = [
  { type: 'verb', language: 'english', word: 'to be' },
  { type: 'noun', language: 'english', word: 'hello' },
  { type: 'noun', language: 'english', word: 'house' },
  { type: 'verb', language: 'english', word: 'to do' },
  { type: 'noun', language: 'english', word: 'fish' },
  { type: 'noun', language: 'english', word: 'cat' },
  { type: 'verb', language: 'english', word: 'to be' },
  { type: 'noun', language: 'english', word: 'hello' },
  { type: 'noun', language: 'english', word: 'house' },
  { type: 'verb', language: 'english', word: 'to do' },
  { type: 'noun', language: 'english', word: 'fish' },
  { type: 'noun', language: 'english', word: 'cat' },
]
export const listOfWordElInEditMode = []
export const listOfWordElInOpenMode = []
export const inputName = 'language'
