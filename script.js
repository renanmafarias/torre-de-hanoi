const saida = document.getElementById('saida');

function iniciar() {
  const numeroDiscos = + prompt('Insira o número de discos:');
  try {
    if (numeroDiscos !== 0 && !isNaN(numeroDiscos)) {
      executarAlgoritmo(numeroDiscos, 'A', 'C', 'B');
    }
    else {
      throw new Error('Não foi informado um número válido!');
    }
  }
  catch(e) {
    alert(e.message);
  }
}

function executarAlgoritmo(numeroDiscos, hasteOrigem, hasteDestino, hasteAuxiliar) {
  if (numeroDiscos === 1) {
    saida.innerHTML += `<li>Disco 1 movido da haste ${hasteOrigem} para a haste ${hasteDestino}</li>`;
    return;
  }
  executarAlgoritmo(numeroDiscos - 1, hasteOrigem, hasteAuxiliar, hasteDestino);
  saida.innerHTML += `<li>Disco ${numeroDiscos} movido da haste ${hasteOrigem} para a haste ${hasteDestino}</li>`;
  executarAlgoritmo(numeroDiscos - 1, hasteAuxiliar, hasteDestino, hasteOrigem);
}
