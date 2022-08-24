function contar (){
  var ini = document.getElementById('txti') 
  var fim = document.getElementById('txtf')
  var passo = document.getElementById('txtp')
  var res = document.getElementById('res')

  if (ini.value.length == '' || fim.value.length == '' || passo.value.length == ''){
    res.innerHTML = '<strong>Impossível contar!</strong>'
    //window.alert('[ERRO] Faltam dados!')
  } else {
    res.innerHTML = '<p><strong>Contando:</strong></p>'
    var i = Number(ini.value)
    var f = Number(fim.value)
    var p = Number(passo.value)
    if (p <= 0){
      window.alert('Passo inválido! Considerando PASSO 1')
      p = 1
    }
    if (i < f) {
      //Contagem crescente
      for (var c = i; c <= f; c += p){
        res.innerHTML += `${c} \u{1F525}`
      }
    } else {
      //Contagem decrescente
      for (var c = i; c >= f; c -= p){
        res.innerHTML += `${c} \u{1F525}`
      }
    }
    res.innerHTML += `\u{1F3C1}`
    
  }
}