function populateUFs(){
  const ufSelect = document.querySelector("select[name=uf]")

  fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados").then(res => res.json() ).then( states => {
    for( const state of states){
      ufSelect.innerHTML += `<option value="${state.id}">${state.nome}</option>`
    }
  })
}
populateUFs()

  function getCities(event){
    const citySelect = document.querySelector("select[name=city]")
    const stateInput = document.querySelector("select[name=state]")
    const ufValue = event.target.value


    
    const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufValue}/municipios`


    citySelect.innerHTML = "<option value>Selecione a cidade</option>"
    citySelect.disabled = true
    fetch(url).then(res => res.json() ).then( cities => {
      
    for( const city of cities){
      citySelect.innerHTML += `<option value="${city.nome}">${city.nome}</option>`
    }
    citySelect.disabled = false
  })
  }

  document.querySelector("select[name=uf]").addEventListener("change", getCities)

  //items de coleta
  //pegar todos os li
  const itemsToCollect = document.querySelectorAll('.items-grid li')

  for (const item of itemsToCollect){
    item.addEventListener("click", handleSelectedItem)
  }

  const collectedItems = document.querySelector("input[name=items]")
  
  let selectedItems = []

  function handleSelectedItem(event){
    const itemLi = event.target
    //adicionar ou remover uma classe 
    itemLi.classList.toggle("selected")

    const itemId = itemLi.dataset.id
    //console.log('ITEM ID: ', itemId)
    

    //verificar se existem items selecionados, se sim
    //pegar os items selecionados

    const alreadySelected = selectedItems.findIndex(item =>{
      const itemFound = item == itemId  //será true ou false
      return itemFound
    })
    
    //se ja estiver selecionado, tirar da seleção
    if(alreadySelected >= 0){
      //tirar da seleção
      const filteredItems = selectedItems.filter(item => {
        const itemIsDifferent = item != itemId //false
        return itemIsDifferent
      })

      selectedItems = filteredItems
    }else{
      //se não estiver selecionado, adicionar a seleção
      
      selectedItems.push(itemId)
    }

    //console.log('selectedItems: ', selectedItems)
  
    //atualizar o campo escondido com os items selecionados
    collectedItems.value = selectedItems
    
  }