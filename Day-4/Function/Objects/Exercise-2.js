const users = {
    Alex: {
      email: 'alex@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript'],
      age: 20,
      isLoggedIn: false,
      points: 30
    },
    Asab: {
      email: 'asab@asab.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
      age: 25,
      isLoggedIn: false,
      points: 50
    },
    Brook: {
      email: 'daniel@daniel.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
      age: 30,
      isLoggedIn: true,
      points: 50
    },
    Daniel: {
      email: 'daniel@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    John: {
      email: 'john@john.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
      age: 20,
      isLoggedIn: true,
      points: 50
    },
    Thomas: {
      email: 'thomas@thomas.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    Paul: {
      email: 'paul@paul.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
      age: 20,
      isLoggedIn: false,
      points: 40
    }
  }
  console.log(users)



// Find the person who has many skills in the users object.


let maxSkills = 0;
let skillfulPerson = ''

for (const person in users) {
  const numSkills = users[person].skills.length
  
  if (numSkills > maxSkills) {
    maxSkills = numSkills
    skillfulPerson = person
  }
}

console.log(skillfulPerson)

// Count logged in users, count users having greater than equal to 50 points from the following object.
let loged=0
let points=0

for(count in users){
  if(users[count].isLoggedIn==true){
    loged+=1
  }
}
console.log(loged)
for(count in users){
  if(users[count].points>=50){
    points+=1
  }
}
console.log(points)

// Find people who are MERN stack developer from the users object
for(count in users){
  let a=users[count].skills
  if(a.includes('MongoDB','Express','React','Node')==true){
    console.log(count,"Was MERN dev")
  }

}

// Get all keys or properties of users object
for(count in users){
  let a=Object.keys(users[count])
  console.log(a)
}
