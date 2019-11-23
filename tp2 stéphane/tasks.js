ID = window.location.hash.substr(1);



if (localStorage.getItem('Token')) {
  var reqOptions = {
    method: "GET",
    redirect: "follow",
    headers: {
      'Authorization': 'Bearer ' + localStorage.getItem('Token')
    },
  }

  fetch("https://iutbackend.herokuapp.com/task/" + ID, reqOptions)
    .then(response => response.text())
    .then(result => {
      result = JSON.parse(result)
      document.getElementById('date').innerText = new Date(result.date).toLocaleDateString()
      document.getElementById('name').innerText = result.name
      console.log(result.date)
    })
    .catch(error => {
      console.log(error)
      saveList = JSON.parse("[]")
    })
} else {
  window.location.replace("auth.html");
}