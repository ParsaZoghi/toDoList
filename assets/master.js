let _addBtn = document.querySelector('main>section>section>button')
let _titleInput = document.getElementById('inputField')

function _btnEnable() {
    if (_titleInput.value != 0) {
        _addBtn.disabled = false
        for (let j = 0; j < _ul.childElementCount; j++) {
            document.getElementsByClassName('editBtn')[j].disabled = false
        }
    }
    else {
        _addBtn.disabled = true
        for (let _j = 0; _j < _ul.childElementCount; _j++) {
            document.getElementsByClassName('editBtn')[_j].disabled = true
        }
    }
}

function _clearInput() {
    _titleInput.value = ''
}

let i = 0
let _li = document.getElementsByTagName('li')
let _ul = document.getElementById('taskContainer')

function _newTask() {
    _ul.appendChild(document.createElement('li')).setAttribute('class', 'on')
    _ul.style.paddingBottom = '20px'

    _li[i].style.borderBottom = '1px solid #343450'
    _li[i].appendChild(document.createElement('section'))

    document.querySelector('.on>section:nth-of-type(1)').appendChild(document.createElement('input'))
    document.getElementsByTagName('input')[i + 1].setAttribute('type', 'checkbox')

    document.querySelector('.on>section:nth-of-type(1)').appendChild(document.createElement('label')).innerHTML = _titleInput.value

    _li[i].appendChild(document.createElement('section'))

    document.querySelector('.on>section:nth-of-type(2)').appendChild(document.createElement('button'))
    document.querySelector('.on>section:nth-of-type(2)>button:nth-of-type(1)').classList.add('editBtn')
    document.querySelector('.on>section:nth-of-type(2)>button:nth-of-type(1)').addEventListener('click', _edit)
    document.querySelector('.on>section:nth-of-type(2)>button:nth-of-type(1)').appendChild(document.createElement('i'))
    document.querySelector('.on>section:nth-of-type(2)>button:nth-of-type(1)>i').classList.add('bi', 'bi-pencil')

    document.querySelector('.on>section:nth-of-type(2)').appendChild(document.createElement('button'))
    document.querySelector('.on>section:nth-of-type(2)>button:nth-of-type(2)').addEventListener('click', _remove)
    document.querySelector('.on>section:nth-of-type(2)>button:nth-of-type(2)').appendChild(document.createElement('i'))
    document.querySelector('.on>section:nth-of-type(2)>button:nth-of-type(2)>i').classList.add('bi', 'bi-eraser')

    function _edit() {
        this.parentElement.parentElement.children[0].children[1].innerHTML = _titleInput.value
        _clearInput()
        _btnEnable()
    }

    function _remove() {
        this.parentElement.parentElement.style.display = 'none'
    }

    i++

    document.getElementsByTagName('li')[i - 1].setAttribute('class', 'off')

    _clearInput()
    _btnEnable()
}

