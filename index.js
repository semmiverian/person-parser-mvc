const path = './people.csv'

const PersonController = require('./PersonController')

PersonController.read(path)

PersonController.write(
  path,
  'semmi',
  'verian',
  'semmi@hacktiv8.com',
  08080808080
)
