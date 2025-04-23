function atualizaNota() {
    let nota = document.getElementById('nota').value;
    document.getElementById('nota-atual').innerText = nota;
}

document.getElementById('nota').addEventListener('change', atualizaNota);
atualizaNota();