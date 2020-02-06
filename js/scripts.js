const btnAdd = document.querySelector('#adicionar-tarefa')
const novaTarefa = document.querySelector('#tarefas')
const msgTarefa = document.querySelector('#tarefa-digitada')

// lista para salvar cada tarefa
let listaTarefas = localStorage.getItem('tarefa') ? JSON.parse(localStorage.getItem('tarefa')) : []

// adicionando o valor de cada tarefa no Local Storage
const salvarLocalStorage = (arrayTarefas) => {
    let tarefasJSON = JSON.stringify(arrayTarefas)
    localStorage.setItem('tarefa', tarefasJSON)
    // console.log('Lista de tarefas salva com sucesso!')
}

// mostrar todas as tarefas salvas na tela
const mostrarTarefasNaTela = (arrayTarefas) => {
    arrayTarefas.forEach((tarefa) => {
        const divCard =
            `<div class="col-md-4">
                <div class="card-tarefa">
                    <div class="texto-tarefa text-wrap overflow-auto">
                        ${tarefa}
                    </div>
                    <div class="botao-tarefa">
                        <img src="./img/checkmark.png" alt="Finalizar tarefa" title="Finalizar tarefa" width="32">
                    </div>
                </div>
            </div>`
        novaTarefa.insertAdjacentHTML('beforeend', divCard)
        const btnCheck = novaTarefa.lastElementChild.lastElementChild.lastElementChild
        btnCheck.onclick = (event) => {
            const boxTarefa = event.target.parentNode.parentNode.parentNode
            novaTarefa.removeChild(boxTarefa)

            listaTarefas = listaTarefas.filter((valor) => valor != tarefa)
            salvarLocalStorage(listaTarefas)
        }
    })
}

mostrarTarefasNaTela(listaTarefas)

const tarefaEnterClick = (event) => {
    if (event.keyCode === 13 || event.type === 'click') {
        if (msgTarefa.value != '') {
            listaTarefas.push(msgTarefa.value) // adicionando uma tarefa
            salvarLocalStorage(listaTarefas)
            const divCard =
                `<div class="col-md-4">
                    <div class="card-tarefa">
                        <div class="texto-tarefa text-wrap overflow-auto">
                            ${msgTarefa.value}
                        </div>
                        <div class="botao-tarefa">
                            <img src="./img/checkmark.png" alt="Finalizar tarefa" title="Finalizar tarefa" width="32">
                        </div>
                    </div>
                </div>`
            novaTarefa.insertAdjacentHTML('beforeend', divCard)

            // referência para acessar a classe "botao-tarefa"
            const btnCheck = novaTarefa.lastElementChild.lastElementChild.lastElementChild
            btnCheck.onclick = (event) => {
                // referência para acessar a classe "col-md-4"
                const boxTarefa = event.target.parentNode.parentNode.parentNode
                // removendo a div com a classe "col-md-4"
                novaTarefa.removeChild(boxTarefa)
                // comparando os valores da lista para exclusão
                listaTarefas = listaTarefas.filter((valor) => valor != msgTarefa.value)
                // salvando uma nova lista 
                salvarLocalStorage(listaTarefas)
            }
            msgTarefa.value = ''
        } else {
            alert('Preencha uma tarefa antes de clicar!')
        }
    }
}

msgTarefa.addEventListener('keypress', tarefaEnterClick)
btnAdd.addEventListener('click', tarefaEnterClick)