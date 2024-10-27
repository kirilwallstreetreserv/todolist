const button = document.querySelector('.input > button'); //  Или  '.input button'
        const input = document.querySelector('.input > input'); // Или '.input input'
        const list = document.querySelector('.todo');
    
        button.addEventListener("click", () => {
         if (input.value.trim() !== "") { 
           const deleteBtn = document.createElement("button");
           deleteBtn.innerText = 'delete';
           deleteBtn.classList.add('delete');
           const li = document.createElement('li');
           li.className = 'task';
           li.innerText = input.value;
           list.appendChild(li);
           li.appendChild(deleteBtn);
           input.value = '';
           deleteBtn.addEventListener('click', () => {
             li.remove();
             li.classList.add("deleted"); 
           });
         } else {
           // Создаем элемент для сообщения
           const alertMessage = document.createElement("div"); 
           alertMessage.className = "alert";
           alertMessage.innerText = 'Enter smth digga';
           alertMessage.style.color = 'red'; 
       
           // Вставляем сообщение перед списком
           list.parentNode.insertBefore(alertMessage, list); 
       
           // Удаляем сообщение через 3 секунды
           setTimeout(() => {
             alertMessage.remove();
           }, 1500); 
         }
       });

     