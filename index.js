function desenharCartela() {

    const pai_div_cartela = document.getElementById('body_cartelas');


    const div_cartela = document.createElement('div');
    div_cartela.className = 'cartela';


    pai_div_cartela.appendChild(div_cartela);

    const h4_jogador = document.createElement('h4');
    h4_jogador.innerText = "Nome Jogador";

    div_cartela.appendChild(h4_jogador);

    const tabela = document.createElement('table');
    const thead = document.createElement('thead');
    const tbody = document.createElement('tbody');


    const thB = document.createElement('th')
    const thI = document.createElement('th')
    const thN = document.createElement('th')
    const thG = document.createElement('th')
    const thO = document.createElement('th')

    thB.innerText = 'B'
    thI.innerText = 'I'
    thN.innerText = 'N'
    thG.innerText = 'G'
    thO.innerText = 'O'

    thead.appendChild(thB)
    thead.appendChild(thI)
    thead.appendChild(thN)
    thead.appendChild(thG)
    thead.appendChild(thO)

    for (var i = 0; i < 5; i++) {
        const tr = document.createElement('tr');
        for (var j = 0; j < 5; j++) {
            const td = document.createElement('td');
            td.innerText = 'X';
            tr.appendChild(td);

        }
        tbody.appendChild(tr);
    }


    tabela.appendChild(thead)
    tabela.appendChild(tbody)


    div_cartela.appendChild(tabela)








}

