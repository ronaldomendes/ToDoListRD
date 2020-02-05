const btnAdd = document.querySelector('#adicionar-tarefa')
const btnRemove = document.querySelectorAll('.botao-tarefa')
const novaTarefa = document.querySelector('#tarefas')
const msgTarefa = document.querySelector('#tarefa-digitada')

btnAdd.onclick = () => {
    const divCard = `
        <div class="col-md-4">
            <div class="card-tarefa">
                <div class="texto-tarefa text-wrap">
                    ${msgTarefa.value}
                </div>
                <div class="botao-tarefa">
                    <img src="./img/checkmark.png" alt="Finalizar tarefa" title="Finalizar tarefa" width="32">
                </div>
            </div>
        </div>`
        novaTarefa.innerHTML += divCard
        msgTarefa.value = ''
}

btnRemove[0].onclick = () => {
    console.log('clicou para remover')
}

