var authRegister = () => {
  email = document.getElementById('getEmail').value
  password = document.getElementById('getPassword').value


  var urlEncoded = new URLSearchParams()
  urlEncoded.append("email", email)
  urlEncoded.append("password", password)

  var reqOptions = {
    method: "Post",
    body: urlEncoded,
    redirect: "follow"
  }

  fetch("https://iutbackend.herokuapp.com/register", reqOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log(error))
}

var authLogin = () => {
  email = document.getElementById('getEmail').value
  password = document.getElementById('getPassword').value

  var urlEncoded = new URLSearchParams()
  urlEncoded.append("email", email)
  urlEncoded.append("password", password)

  var reqOptions = {
    method: "Post",
    body: urlEncoded,
    redirect: "follow"
  }

  fetch("https://iutbackend.herokuapp.com/login", reqOptions)
    .then(response => response.text())
    .then(result => {
      localStorage.setItem('Token', JSON.parse(result).token)
      window.location.replace("index.html");
    })
    .catch(error => console.log(error))

}

document.getElementById('doLogin').onclick = authLogin
document.getElementById('doRegister').onclick = authRegister