
var user = document.querySelector('#user')
var photo = document.querySelector('#photo')
var dataUser = document.querySelector('#data-user')

function get(){
    fetch('https://randomuser.me/api')
    .then(res => res.json())
    .then(data => {
            user.innerHTML = ` 
                <a class="navbar-brand ml-3" href="#">${data.results['0'].name.first} ${data.results['0'].name.last}</a>
                `
            
            photo.innerHTML = `
                <img src="${data.results['0'].picture.large}" width="150px" alt="" class="img-fluid rounded-circle">
            `
            dataUser.innerHTML = `
                <div class="text-center">
                    <p>${data.results['0'].name.first} ${data.results['0'].name.last}</p>
                    <p>${data.results['0'].location.city}, ${data.results['0'].location.country}</p>
                    <p>${data.results['0'].email}</p>
                    <p>${data.results['0'].phone}</p>
                </div>
                ` 
        })
    }
    get();