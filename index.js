<<<<<<< HEAD
var recipes = {}

function updateObjectWithKeyAndValue(object, key, value) {
  let newObject = Object.assign({}, object)
  newObject[key] = value
  return newObject
}


function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value
  return object
}


function deleteFromObjectByKey(object, key) {
  let newObject = Object.assign({}, object)
  delete newObject[key]
  return newObject
}



function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key]
  return object
}
=======
var recipes = {}
>>>>>>> 943afe8651b98bc13bf86fb807314f4dc48f54a7
