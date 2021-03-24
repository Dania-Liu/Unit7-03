// Sets input value to default.
let age = 0

// Connects the button to JavaScript, proceeds to function on click.
document.getElementById('button').addEventListener('click', testAge)

// How the function works.
function testAge () {
  age = document.getElementById('input').value
  age = parseInt(age)
  if (age >= 17) {
    alert('You can watch an R-rated movie alone.')
  } else if (age >= 13) {
    alert('You can see a PG-13 movie alone.')
  } else {
    alert('Hm. You are too young for most things.')
  }
}
