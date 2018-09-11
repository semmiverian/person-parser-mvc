const path = './people.csv'

const PersonController = require('./PersonController')

// akses controller untuk nge read data ke file
PersonController.read(path)

PersonController.write(
  path,
  'semmi',
  'verian',
  'semmi@hacktiv8.com',
  08080808080
)
