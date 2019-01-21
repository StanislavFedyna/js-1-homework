const renderTable = (columns, rows) =>{
  let table = '';
  
  //Crating columns and rows
  for(let r = 0; r < rows; r++){
    table += '<tr>'
    for(let c = 0; c < columns; c++){
      table += '<td>' + '</td>'
    }
    '</tr>'
  }
    //Render to the page
    document.write('<table>' + table + '</table>')
    
    // Numbering
    let tdElements = document.querySelectorAll('td');
      for(let i = 0; i < tdElements.length; i++){
     tdElements[i].textContent = i + 1;
   }
    
    //Delegation for table 
    let tableEvent = document.querySelector('table');
    tableEvent.addEventListener('click', showNumber);
    
    function showNumber(event){
      let target = event.target;
      alert(target.textContent)
    }
}

renderTable(3,5)
  
