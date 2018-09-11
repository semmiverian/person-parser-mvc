const fs = require('fs')

class Person {
  constructor(id, firstName, lastName, email, phone, createdAt) {
    this.id = Number(id)
    this.firstName = firstName
    this.lastName = lastName
    this.email = email
    this.phone = phone
    this.createdAt = new Date(createdAt)
  }

  toCsv() {
    let data = [
      this.id,
      this.firstName,
      this.lastName,
      this.email,
      this.phone,
      this.createdAt.toISOString()
    ]

    return data.join(',')
  }

  static read(filePath) {
    const file = fs.readFileSync(filePath, 'utf-8')
    const [title, ...splitByLine] = file.split('\n')
    return {
      title,
      people: splitByLine.map(person => {
        const personData = person.split(',')
        return new Person(...personData)
      })
    }
  }

  static write(path, firstName, lastName, email, phone) {
    const {title, people} = this.read(path)

    const nextId = people[people.length - 1].id + 1

    let newPerson = new Person(
      nextId,
      firstName,
      lastName,
      email,
      phone,
      new Date()
    )

    people.push(newPerson)

    const csvPeople = people.map(person => person.toCsv())
    let allCsv = [title, ...csvPeople].join('\n')

    fs.writeFileSync(path, allCsv)

    return newPerson
  }
}

module.exports = Person
