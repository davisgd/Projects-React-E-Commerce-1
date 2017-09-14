// const createUser = (user) => {
//   checkAccess('create.user', (err, result) => {
//     if (err) {
//       sendMessage('user has no access')
//       return
//     }

//     findUserByEmail(err, foundUser) => {
//       if (err) {
//         sendMessage('unknown database error')
//         return
//       }
//     }
//   })
// }

// const createUserAsync = (user) => {
//   return checkAccess('create.user')
//     .then(() => findUserByEmail(user.email))
//     .then(foundUser => {
//       if (foundUser) {
//         throw new Error('duplicate user')
//       }
//       return saveUser(user)
//     })
//     .catch(err => {
//       //handle errors here
//     })
// }

// try {
// // do stuff that might throw error
// } catch  (err) {
// // handle any errors that might get thrown
// }

// Creating a promise
const saveToDb = (value) => {
  const callback = (resolve, reject) => {
    const runAfterTimeout = () => {
      const divByTwo = Date.now() % 5 === 0
      if (divByTwo) {
        reject('Database Save Failed')
      } else {
        resolve('Save successful: ' + value)
      }
    }
    setTimeout(runAfterTimeout, 200)
  }
  return new Promise(callback)
}

saveToDb('foo')
  .then(msg => {
    console.log(msg)
    return saveToDb('bar')
  })
  .then(msg => {
    console.log(msg)
    return saveToDb('msg')
  })
  .then(msg => {
    console.log('a third thing happened')
    return saveToDb('saving on the third thing')
  })
  .then(msg => {
    console.log('woo')
    return saveToDb('the fourth thing on hurr triggered')
  })
  .catch(err => console.log(err))
