class Person {
    constructor(firstName, lastName, age, country, city) {
      console.log(this) // Check the output from here
      this.firstName = firstName
      this.lastName = lastName
      this.age = age
      this.country = country
      this.city = city
    }
  }
  
  const person1 = new Person('TAEHYUNG', 'KIM', 28, 'SK', 'DEAGU')
  const person2 = new Person('JUNGKOOK', 'JEON', 26, 'SK', 'BUSAN')
  
  
  console.log(person1)
  console.log(person2)
  