function addItem() {
  var folderName = document.getElementById("folderName").value;
  var quantity = document.getElementById("quantity").value;
  var content = document.getElementById("content").value;
  
  if (folderName && quantity && content) {
      var table = document.getElementById("table");
      var row = table.insertRow(-1);
      var cell1 = row.insertCell(0);
      cell1.innerHTML = folderName + " --- [" + quantity + "] " + content;
      
      // Очистить инпуты
      document.getElementById("folderName").value = "";
      document.getElementById("quantity").value = "";
      document.getElementById("content").value = "";
  } else {
      alert("Пожалуйста, заполните все поля.");
  }
}

function copyRowToClipboard() {
  var table = document.getElementById("table");
  if (table.rows.length > 1) {
      var rowIndex = table.rows.length - 1;
      var rowText = table.rows[rowIndex].cells[0].textContent;
      navigator.clipboard.writeText(rowText).then(function() {
          // alert("Строка скопирована в буфер обмена: " + rowText);
      }).catch(function(err) {
          console.error('Не удалось скопировать: ', err);
      });
  } else {
      alert("Таблица пуста.");
  }
}

var copyButton = document.getElementById("copyButton");
copyButton.addEventListener("click", copyRowToClipboard);
