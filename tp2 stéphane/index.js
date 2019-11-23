if (localStorage.getItem('Token')) {
  document.getElementById('add').removeAttribute('disabled')
  document.getElementById('name').removeAttribute('disabled')
  document.getElementById('date').removeAttribute('disabled')
  document.getElementById('date').value = new Date().toISOString().substring(0, 10)


  var reqOptions = {
    method: "GET",
    redirect: "follow",
    headers: {
      'Authorization': 'Bearer ' + localStorage.getItem('Token')
    },
  }

  fetch("https://iutbackend.herokuapp.com/task", reqOptions)
    .then(response => response.text())
    .then(result => {
      saveList = JSON.parse(result).forEach(elt => {
        document.getElementById('taskList').insertAdjacentHTML('beforeend', `
        <div id="${elt._id}" class="pb-2">
            <a href="tasks.html#${elt._id}" class="btn btn-sm btn-outline-primary rounded-0"><i class="fas fa-eye"></i></a>
            <span class="font-weight-bold">${new Date(elt.date).toLocaleDateString() }</span> : ${elt.name}
        </div>`)
      })
    })
    .catch(error => {
      console.log(error)
      saveList = JSON.parse("[]")
    })
} else {
  window.location.replace("auth.html");
}


document.getElementById('add').onclick = () => {
  name = document.getElementById('name').value
  date = document.getElementById('date').value
  if (name != "") {
    ID = Math.floor(Math.random() * Math.floor(99999))
    saveList.push({ 'ID': ID, 'Text': name, 'Date': date })
    localStorage.setItem('saveList', JSON.stringify(saveList))
    console.log(`${name} sauvegardé en local`)

    var urlEncoded = new URLSearchParams()
    urlEncoded.append("name", name)
    urlEncoded.append("date", date)

    var reqOptions = {
      method: "Post",
      body: urlEncoded,
      redirect: "follow",
      headers: {
        'Authorization': 'Bearer ' + localStorage.getItem('Token')
      },
    }

    fetch("https://iutbackend.herokuapp.com/task", reqOptions)
      .then(response => response.text())
      .then(result => {
        console.log(result)
      })
      .catch(error => console.log(error))
    console.log(`${name} sauvegardé sur l'API`)

    document.getElementById('taskList').insertAdjacentHTML('beforeend', `
    <div id="${ID}" class="pb-2">
        <a href="edit.html#${ID}" class="btn btn-sm btn-outline-primary rounded-0">EDIT</a>
        <span class="font-weight-bold">${date}</span> : ${name}
    </div>`)
    console.log(`${name} ajouté à la page`)
    document.getElementById('name').value = ""
    document.getElementById('date').value = ""
  }
}