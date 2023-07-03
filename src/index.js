import dataFilms from './datas.js'

const adminAccess = document.getElementById('admin-access')
const adminSide = document.getElementById('admin-side')
const brand = document.getElementById('brand')
const btnLogin = document.getElementById('btn-login')
const btnRegister = document.getElementById('btn-register')
const btnSend = document.getElementById('btn-send')
const category = document.getElementById('category')
const categoryAction = document.getElementById('category-action')
const categoryAdventure = document.getElementById('category-adventure')
const categoryAnimation = document.getElementById('category-animation')
const categoryComedy = document.getElementById('category-comedy')
const categoryDocumentary = document.getElementById('category-documentary')
const categoryDrama = document.getElementById('category-drama')
const categoryFantasy = document.getElementById('category-fantasy')
const categoryHorror = document.getElementById('category-horror')
const categoryScienceFiction = document.getElementById('category-science-fiction')
const categorySport = document.getElementById('category-sport')
const categoryRomance = document.getElementById('category-romance')
const categoryThriller = document.getElementById('category-thriller')
const exit = document.getElementById('exit')
const filmCards = document.getElementById('film-card')
const groupCards = document.getElementById('group-cards')
const inforTitle = document.getElementById('top-infor-title')
const login = document.getElementById('login')
const loginSection = document.getElementById('login-section')
const main = document.getElementById('main')
const newClassification = document.getElementById('new-classification')
const newDebut = document.getElementById('new-debut')
const newDirection = document.getElementById('new-direction')
const newDistributor = document.getElementById('new-distributor')
const newDuration = document.getElementById('new-duration')
const newImg = document.getElementById('new-img')
const newGenre = document.getElementById('new-genre')
const newOrigin = document.getElementById('new-origin')
const newPassword = document.getElementById('new-password')
const newPasswordConfirm = document.getElementById('new-password2')
const newScript = document.getElementById('new-script')
const newSynopsis = document.getElementById('new-sinopse')
const newTitle = document.getElementById('new-title')
const newUser = document.getElementById('new-user')
const newYear = document.getElementById('new-year')
const options = document.getElementById('options')
const optionCreate = document.getElementById('option-create')
const optionDelete = document.getElementById('option-delete')
const optionsSection = document.getElementById('options-section')
const optionUpdate = document.getElementById('option-update')
const password = document.getElementById('password-text')
const register = document.getElementById('register')
const registerSection = document.getElementById('register-section')
const selectedFilm = document.getElementById('selected-film')
const start = document.getElementById('start')
const tableCreate = document.getElementById('table-create')
const tableBodyFilms = document.getElementById('table-body-films')
const tableHeadFilms = document.getElementById('thead-head-films')
const tableListFilms = document.getElementById('table-list-films')
const topInfor = document.getElementById('top-infor')
const user = document.getElementById('user-text')

let arrayFilms = []
let arrayUsers = []
let elementsArray
let idUpdate
let optionKey
let optionsArrayFilms
let startUser = {
    user: '1',
    password: '1'
}
arrayFilms = dataFilms(arrayFilms)
arrayUsers.push(startUser)

btnRegister.addEventListener('click', () => {
    if (newPassword.value === newPasswordConfirm.value && newUser.value != '') {
        let auxUser = {
            user: newUser.value,
            password: newPassword.value
        }
        arrayUsers.push(auxUser)
        newUser.value = ''
        newPassword.value = ''
        newPasswordConfirm.value = ''
        alert('Novo administrador cadastrado!')
    }
    else
        alert('Dados inválidos para cadastro')
})
start.addEventListener('click', () => {
    startPage()
})
brand.addEventListener('click', () => {
    startPage()
})
login.addEventListener('click', () => {
    selectedFilm.classList.add('display-off')
    groupCards.classList.remove('display-off')
    inforTitle.innerText = 'Entre com user e senha'
    main.classList.add('display-off')
    loginSection.classList.remove('display-off')
    registerSection.classList.add('display-off')
})
register.addEventListener('click', () => {
    selectedFilm.classList.add('display-off')
    groupCards.classList.remove('display-off')
    inforTitle.innerText = 'Entre com os dados'
    main.classList.add('display-off')
    loginSection.classList.add('display-off')
    registerSection.classList.remove('display-off')
})
optionDelete.addEventListener('click', () => {
    clearOptions()
    buildTableOptions(2)
    deleteFilm()
})
categoryAction.addEventListener('click', () => {
    resetTags()
    let existFilms = false
    filmCards.innerHTML = ''
    categoryAction.classList.add('list-selected')

    for (let i = 0; i < arrayFilms.length; i++) {
        if (arrayFilms[i].genre.includes("Ação")) {
            tagFilms(i)
            existFilms = true
        }
    }
    if (!existFilms)
        filmCards.innerHTML = `<span>Não há filmes para essa categoria</span>`
    inforTitle.innerText = `${categoryAction.innerText}`
})
categoryAnimation.addEventListener('click', () => {
    resetTags()
    let existFilms = false
    filmCards.innerHTML = ''
    categoryAnimation.classList.add('list-selected')

    for (let i = 0; i < arrayFilms.length; i++) {
        if (arrayFilms[i].genre.includes("Animação")) {
            tagFilms(i)
            existFilms = true
        }
    }
    if (!existFilms)
        filmCards.innerHTML = `<span>Não há filmes para essa categoria</span>`
    inforTitle.innerText = `${categoryAnimation.innerText}`
})
categoryAdventure.addEventListener('click', () => {
    resetTags()
    let existFilms = false
    filmCards.innerHTML = ''
    categoryAdventure.classList.add('list-selected')

    for (let i = 0; i < arrayFilms.length; i++) {
        if (arrayFilms[i].genre.includes("Aventura")) {
            tagFilms(i)
            existFilms = true
        }
    }
    if (!existFilms)
        filmCards.innerHTML = `<span>Não há filmes para essa categoria</span>`
    inforTitle.innerText = `${categoryAdventure.innerText}`
})
categoryComedy.addEventListener('click', () => {
    resetTags()
    let existFilms = false
    filmCards.innerHTML = ''
    categoryComedy.classList.add('list-selected')

    for (let i = 0; i < arrayFilms.length; i++) {
        if (arrayFilms[i].genre.includes("Comédia")) {
            tagFilms(i)
            existFilms = true
        }
    }
    if (!existFilms)
        filmCards.innerHTML = `<span>Não há filmes para essa categoria</span>`
    inforTitle.innerText = `${categoryComedy.innerText}`
})
categoryDocumentary.addEventListener('click', () => {
    resetTags()
    let existFilms = false
    filmCards.innerHTML = ''
    categoryDocumentary.classList.add('list-selected')

    for (let i = 0; i < arrayFilms.length; i++) {
        if (arrayFilms[i].genre.includes("Documentário")) {
            tagFilms(i)
            existFilms = true
        }
    }
    if (!existFilms)
        filmCards.innerHTML = `<span>Não há filmes para essa categoria</span>`
    inforTitle.innerText = `${categoryDocumentary.innerText}`
})
categoryDrama.addEventListener('click', () => {
    resetTags()
    let existFilms = false
    filmCards.innerHTML = ''
    categoryDrama.classList.add('list-selected')

    for (let i = 0; i < arrayFilms.length; i++) {
        if (arrayFilms[i].genre.includes("Drama")) {
            tagFilms(i)
            existFilms = true
        }
    }
    if (!existFilms)
        filmCards.innerHTML = `<span>Não há filmes para essa categoria</span>`
    inforTitle.innerText = `${categoryDrama.innerText}`
})
categorySport.addEventListener('click', () => {
    resetTags()
    let existFilms = false
    filmCards.innerHTML = ''
    categorySport.classList.add('list-selected')

    for (let i = 0; i < arrayFilms.length; i++) {
        if (arrayFilms[i].genre.includes("Esporte")) {
            tagFilms(i)
            existFilms = true
        }
    }
    if (!existFilms)
        filmCards.innerHTML = `<span>Não há filmes para essa categoria</span>`
    inforTitle.innerText = `${categorySport.innerText}`
})
categoryFantasy.addEventListener('click', () => {
    resetTags()
    let existFilms = false
    filmCards.innerHTML = ''
    categoryFantasy.classList.add('list-selected')

    for (let i = 0; i < arrayFilms.length; i++) {
        if (arrayFilms[i].genre.includes("Fantasia")) {
            tagFilms(i)
            existFilms = true
        }
    }
    if (!existFilms)
        filmCards.innerHTML = `<span>Não há filmes para essa categoria</span>`
    inforTitle.innerText = `${categoryFantasy.innerText}`
})
categoryScienceFiction.addEventListener('click', () => {
    resetTags()
    let existFilms = false
    filmCards.innerHTML = ''
    categoryScienceFiction.classList.add('list-selected')

    for (let i = 0; i < arrayFilms.length; i++) {
        if (arrayFilms[i].genre.includes("Ficção Científica")) {
            tagFilms(i)
            existFilms = true
        }
    }
    if (!existFilms)
        filmCards.innerHTML = `<span>Não há filmes para essa categoria</span>`
    inforTitle.innerText = `${categoryScienceFiction.innerText}`
})
categoryRomance.addEventListener('click', () => {
    resetTags()
    let existFilms = false
    filmCards.innerHTML = ''
    categoryRomance.classList.add('list-selected')

    for (let i = 0; i < arrayFilms.length; i++) {
        if (arrayFilms[i].genre.includes("Romance")) {
            tagFilms(i)
            existFilms = true
        }
    }
    if (!existFilms)
        filmCards.innerHTML = `<span>Não há filmes para essa categoria</span>`
    inforTitle.innerText = `${categoryRomance.innerText}`
})
categoryThriller.addEventListener('click', () => {
    resetTags()
    let existFilms = false
    filmCards.innerHTML = ''
    categoryThriller.classList.add('list-selected')

    for (let i = 0; i < arrayFilms.length; i++) {
        if (arrayFilms[i].genre.includes("Suspense")) {
            tagFilms(i)
            existFilms = true
        }
    }
    if (!existFilms)
        filmCards.innerHTML = `<span>Não há filmes para essa categoria</span>`
    inforTitle.innerText = `${categoryThriller.innerText}`
})
categoryHorror.addEventListener('click', () => {
    resetTags()
    let existFilms = false
    filmCards.innerHTML = ''
    categoryHorror.classList.add('list-selected')

    for (let i = 0; i < arrayFilms.length; i++) {
        if (arrayFilms[i].genre.includes("Terror")) {
            tagFilms(i)
            existFilms = true
        }
    }
    if (!existFilms)
        filmCards.innerHTML = `<span>Não há filmes para essa categoria</span>`
    inforTitle.innerText = `${categoryHorror.innerText}`
})
btnLogin.addEventListener('click', () => {
    let key = false
    for (let i = 0; i < arrayUsers.length; i++) {
        if (arrayUsers[i].user === user.value && arrayUsers[i].password === password.value) {
            inforTitle.innerText = 'Bem-vindo Administrador'
            inforTitle.style.color = '#00E7FF'
            user.value = ''
            password.value = ''
            adminAccess.classList.add('display-off')
            loginSection.classList.add('display-off')
            registerSection.classList.add('display-off')
            optionsSection.classList.remove('display-off')
            login.classList.add('display-off')
            adminSide.classList.remove('display-off')
            key = true
            break
        }
    }
    if (key == false) {
        inforTitle.innerText = 'user ou Senha Incorretos'
        inforTitle.style.color = 'red'
    }
})
exit.addEventListener('click', () => {
    login.classList.remove('display-off')
    adminSide.classList.add('display-off')
    adminAccess.classList.remove('display-off')
    startPage()
})
options.addEventListener('click', () => {
    inforTitle.innerText = 'Bem-vindo Administrador'
    optionsSection.classList.remove('display-off')
    selectedFilm.classList.add('display-off')
    main.classList.add('display-off')
})
optionCreate.addEventListener('click', () => {
    clearOptions()
    inforTitle.innerText = 'Adicionar Cartaz'
    optionCreate.classList.add('list-selected')
    tableCreate.classList.remove('display-off')
    clearFormEdit()
    optionKey = 'create'
})
optionUpdate.addEventListener('click', () => {
    clearOptions()
    buildTableOptions(1)
    tableListFilms.classList.remove('display-off')
    optionKey = 'update'

    optionsArrayFilms.forEach(function (element) {
        element.addEventListener("click", function () {
            for (let i = 0; i < arrayFilms.length; i++) {
                let auxGenre = ''
                for (let k = 0; k < arrayFilms[i].genre.length; k++) {
                    auxGenre += `${arrayFilms[i].genre[k]}`
                }
                if (element.childNodes[0].innerText == arrayFilms[i].id) {
                    tableCreate.classList.remove('display-off')
                    tableListFilms.classList.add('display-off')
                    newTitle.value = arrayFilms[i].title
                    newDebut.value = arrayFilms[i].debut
                    newGenre.value = auxGenre
                    newDuration.value = arrayFilms[i].duration
                    newOrigin.value = arrayFilms[i].origin
                    newDirection.value = arrayFilms[i].direction
                    newScript.value = arrayFilms[i].script
                    newDistributor.value = arrayFilms[i].distributor
                    newYear.value = arrayFilms[i].year
                    newSynopsis.value = arrayFilms[i].synopsis
                    newImg.value = arrayFilms[i].img
                    idUpdate = i
                }
            }
        })
    })
})
btnSend.addEventListener('click', () => {
    if (newTitle.value != '' && newDebut.value != '' && newGenre.value != ''
        && newDuration.value != '' && newOrigin.value != '' && newDirection.value != ''
        && newScript.value != '' && newDistributor.value != '' && newClassification.value != ''
        && newYear.value != '' && newSynopsis.value != '' && newImg.value != '') {
        if (optionKey == 'update') {
            arrayFilms[idUpdate] = {
                id: arrayFilms[idUpdate].id,
                title: newTitle.value,
                debut: newDebut.value,
                genre: newGenre.value,
                duration: newDuration.value + ' min',
                origin: newOrigin.value,
                direction: newDirection.value,
                script: newScript.value,
                distributor: newDistributor.value,
                classification: newClassification.value + ' anos',
                year: newYear.value,
                synopsis: newSynopsis.value,
                img: newImg.value
            }
            alert('Cartaz atualizado')
        }
        else if (optionKey = 'create') {
            let item = {
                id: arrayFilms.length + 1,
                title: newTitle.value,
                debut: newDebut.value,
                genre: newGenre.value,
                duration: newDuration.value,
                origin: newOrigin.value,
                direction: newDirection.value,
                script: newScript.value,
                distributor: newDistributor.value,
                classification: newClassification.value,
                year: newYear.value,
                synopsis: newSynopsis.value,
                img: newImg.value
            }
            arrayFilms.push(item)
            alert('Cartaz adicionado')
            tableCreate.classList.add('display-off')
        }
        clearFormEdit()
    }
    else
        alert('Todos os campos precisam ser preenchidos')
    clearOptions()
})
function buildTableOptions(key) {
    if (key === 1) {
        optionUpdate.classList.add('list-selected')
        inforTitle.innerText = 'Atualizar Cartaz'
        tableHeadFilms.classList.remove('thead-delete')
        tableHeadFilms.classList.add('thead-update')
        tableBodyFilms.classList.remove('tbody-delete')
        tableBodyFilms.classList.add('tbody-update')
    }
    else {
        tableListFilms.classList.remove('display-off')
        optionDelete.classList.add('list-selected')
        inforTitle.innerText = 'Deletar Cartaz'
        tableHeadFilms.classList.remove('thead-update')
        tableHeadFilms.classList.add('thead-delete')
        tableBodyFilms.classList.remove('tbody-update')
        tableBodyFilms.classList.add('tbody-delete')
    }
    tableHeadFilms.innerHTML = ''
    tableHeadFilms.innerHTML = `<tr>
        <th scope="col">ID</th>
        <th scope="col">Nome</th>
        <th scope="col">Estréia</th>
        <th scope="col">Gênero</th>
        <th scope="col">Duração</th>
        <th scope="col">Origem</th>
        <th scope="col">Direção</th>
        <th scope="col">Roteiro</th>
        <th scope="col">Distribuidor</th>
        <th scope="col">Classificação</th>
        <th scope="col">Ano</th>
        <th scope="col">Sinópse</th>
        <th scope="col">Imagem</th>
    </tr>`
    tableBodyFilms.innerHTML = ''
    for (let i = 0; i < arrayFilms.length; i++) {
        let auxGenre = ''
        for (let k = 0; k < arrayFilms[i].genre.length; k++) {
            auxGenre += `${arrayFilms[i].genre[k]}`
        }
        tableBodyFilms.innerHTML +=
            `<td>${arrayFilms[i].id}</td>
        <td>${arrayFilms[i].title}</td>
        <td>${arrayFilms[i].debut}</td>        
        <td>${auxGenre}</td>        
        <td>${arrayFilms[i].duration + ' min'}</td>
        <td>${arrayFilms[i].origin}</td>
        <td>${arrayFilms[i].direction}</td>
        <td>${arrayFilms[i].script}</td>
        <td>${arrayFilms[i].distributor}</td>
        <td>${arrayFilms[i].classification}</td>
        <td>${arrayFilms[i].year}</td>
        <td>${arrayFilms[i].synopsis}</td>
        <td><img src="${arrayFilms[i].img}" alt="capa filme"></td>`
    }
    optionsArrayFilms = document.querySelectorAll('tr')
}
function deleteFilm() {
    optionsArrayFilms.forEach(function (element) {
        element.addEventListener("click", function () {
            for (let i = 0; i < arrayFilms.length; i++) {
                if (element.childNodes[0].innerText == arrayFilms[i].id) {
                    alert(`Filme ${arrayFilms[i].title} será deletado!`)
                    arrayFilms.splice(i, 1)
                    buildTableOptions(2)
                    deleteFilm()
                }
            }
        })
    })
}
function clearOptions() {
    optionCreate.classList.remove('list-selected')
    optionUpdate.classList.remove('list-selected')
    optionDelete.classList.remove('list-selected')
    tableCreate.classList.add('display-off')
    tableListFilms.classList.add('display-off')
}
function fullGroupFilms() {
    filmCards.innerHTML = ''
    for (let i = 0; i < arrayFilms.length; i++) {
        filmCards.innerHTML += `<div id="${arrayFilms[i].id}" class="card">
        <img src="${arrayFilms[i].img}" alt="imagem card">
        <h2>${arrayFilms[i].title}</h2>
        <p>${arrayFilms[i].classification}</p>`
    }
    elementsArray = document.querySelectorAll(".card")
    chooseFilm()
}
function tagFilms(i) {
    filmCards.innerHTML += `<div id="${arrayFilms[i].id}" class="card">
        <img src="${arrayFilms[i].img}" alt="imagem card">
        <h2>${arrayFilms[i].title}</h2>
        <p>${arrayFilms[i].classification}</p>`
    elementsArray = document.querySelectorAll(".card")
    chooseFilm()
}
function startPage() {
    loginSection.classList.add('display-off')
    registerSection.classList.add('display-off')
    inforTitle.style.color = '#00E7FF'
    topInfor.classList.remove('display-off')
    main.classList.remove('display-off')
    selectedFilm.classList.add('display-off')
    groupCards.classList.remove('display-off')
    inforTitle.innerText = 'Veja todos os filmes que estão em cartaz nas principais salas de cinema do Brasil'
    resetTags()
    category.classList.remove('display-off')
    filmCards.innerHTML = ''
    fullGroupFilms()
    optionsSection.classList.add('display-off')
    clearOptions()
    tableHeadFilms.innerHTML = ''
    tableBodyFilms.innerHTML = ''
}
function chooseFilm() {
    elementsArray.forEach(function (element) {
        element.addEventListener("click", function () {
            for (let i = 0; i < arrayFilms.length; i++) {
                if (element.id == arrayFilms[i].id) {
                    selectedFilm.innerHTML = `<div id="${arrayFilms[i].id}" class="card-full">
                        <img src=${arrayFilms[i].img} alt="imagem card">
                        <ul id="card-full-details"> 
                            <li>
                                <span>Estréia:</span>
                                <span>${arrayFilms[i].debut}</span>
                            </li>
                            <li>
                                <span>Gênero:</span>
                                <span>${arrayFilms[i].genre}</span >
                            </li >
                            <li>
                                <span>Duração:</span>
                                <span>${arrayFilms[i].duration + ' min'}</span>
                            </li>
                            <li>
                                <span>Origem:</span>
                                <span>${arrayFilms[i].origin}</span>
                            </li>
                            <li>
                                <span>Direção:</span>
                                <span>${arrayFilms[i].direction}</span>
                            </li>
                            <li>
                                <span>Roteiro:</span>
                                <span>${arrayFilms[i].script}</span>
                            </li>
                            <li>
                                <span>Distribuidor:</span>
                                <span>${arrayFilms[i].distributor}</span>
                            </li>
                            <li>
                                <span>Classificação:</span>
                                <span>${arrayFilms[i].classification}</span>
                            </li>
                            <li>
                                <span>Ano:</span>
                                <span>${arrayFilms[i].year}</span>
                            </li>
                            <li>
                                <span>Sinopse:</span>
                                <span>${arrayFilms[i].synopsis}</span>
                            </li>
                        </ul >
                    </div >`
                    category.classList.add('display-off')
                    selectedFilm.classList.remove('display-off')
                    groupCards.classList.add('display-off')
                    inforTitle.innerText = `${arrayFilms[i].title}`
                }
            }
        })
    })
}
function clearFormEdit() {
    newTitle.value = ''
    newDebut.value = ''
    newGenre.value = ''
    newDuration.value = ''
    newOrigin.value = ''
    newDirection.value = ''
    newScript.value = ''
    newDistributor.value = ''
    newClassification.value = ''
    newYear.value = ''
    newSynopsis.value = ''
    newImg.value = ''
}
function resetTags() {
    categoryAction.classList.remove('list-selected')
    categoryAdventure.classList.remove('list-selected')
    categoryAnimation.classList.remove('list-selected')
    categoryComedy.classList.remove('list-selected')
    categoryDocumentary.classList.remove('list-selected')
    categoryDrama.classList.remove('list-selected')
    categorySport.classList.remove('list-selected')
    categoryFantasy.classList.remove('list-selected')
    categoryScienceFiction.classList.remove('list-selected')
    categoryRomance.classList.remove('list-selected')
    categoryThriller.classList.remove('list-selected')
    categoryHorror.classList.remove('list-selected')
    selectedFilm.innerHTML = ''
}
fullGroupFilms()
