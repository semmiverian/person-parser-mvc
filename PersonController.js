const Person = require('./person')
const View = require('./view')

class PersonController {
  static read(file) {
    const {people} = Person.read(file)

    return View.display(people)
  }

  static write(file, firstName, lastName, email, phone) {
    const newPerson = Person.write(file, firstName, lastName, email, phone)

    return View.display(
      `Berhasil menambahkan data baru dengan nama ${newPerson.firstName}`
    )
  }
}

module.exports = PersonController
