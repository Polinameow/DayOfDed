/* Описание скрипта
код, который будет проверять содержимое текстового поля на наличие фрагмента "код 2025". В зависимости от результата проверки, 
будет выводиться соответствующее сообщение в окне оповещения при нахождении "Письмо отправлено!", при отсутствии - "Код введён неверный! Пройди квест для получения кода!", 
и в любом случае после щелчка по кнопке - очищаться все текстовые поля формы.
 */

// Получаем элементы
const button = document.querySelector(".btn");
const textarea = document.getElementById("exampleFormControlTextarea1");
const inputField = document.getElementById("exampleFormControlInput1");

// Добавляем обработчик события клика
button.addEventListener("click", function () {
  // Получаем текст из текстового поля
  const userInput = inputField.value;

  // Проверяем наличие фрагмента "код 2025"
  if (userInput.includes("код 2025")) {
    alert("Письмо отправлено!");
    
  } else {
    alert("Код введён неверный! Пройди квест для получения кода!");
  }

  // Очищаем текстовые поля
  inputField.value = "";
  textarea.value = "";
});
