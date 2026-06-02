window.addEventListener('DOMContentLoaded', () => {

        /* Форма с «ошибками» */
    const emailInput = document.getElementById("active__email");
    const submitBtn = document.getElementById("active__submitBtn");
    const formMessage = document.getElementById("active__formMessage");

    submitBtn.addEventListener('click', () => {  
        emailInput.addEventListener('focus', () => {
        formMessage.textContent = "Еще попытка? 😁";
    });
        
        const cleanEmail = emailInput.value.trim();  
        const parts = cleanEmail.split("@");              

        if (!cleanEmail) {                         
            formMessage.textContent = "📧 Email отправлен";
            formMessage.classList.add("active__formMessage");
        }
        else if (!cleanEmail.includes("@")) {       
            formMessage.textContent = "📍 Email должен содержать '@'";
            formMessage.classList.add("active__formMessage");
        }
        else if (parts.length !== 2) {                
            formMessage.textContent = "📍 Email должен содержать один @";
            formMessage.classList.add("active__formMessage");
        }
        else if (!parts[0]) {                          
            console.error("Нет локальной части");
            formMessage.textContent = "📍 Email должен содержать локальную часть";
            formMessage.classList.add("active__formMessage");
        }
        else if (!parts[1]) {                         
            console.error("Нет доменной части");
            formMessage.textContent = "📍 Email должен содержать доменную часть";
            formMessage.classList.add("active__formMessage");
        }
        else if (!parts[1].includes(".")) {          
            formMessage.textContent = "📍 После @ должна быть точка";
            formMessage.classList.add("active__formMessage");
        }
        else if (parts[1].startsWith(".")){         
            formMessage.textContent = "📍 Домен не должен начинается с точки";
            formMessage.classList.add("active__formMessage");
        }
        else if (parts[1].endsWith(".")) {              
            formMessage.textContent = "📍 Домен не должен заканчивается точкой";
            formMessage.classList.add("active__formMessage");
        }
        else if (parts[1].includes("..")) {
            formMessage.textContent = "📍 Домен не должен содержать две точки подряд";
            formMessage.classList.add("active__formMessage");
        }
        else if (cleanEmail.includes(" ")) {             
            formMessage.textContent = "📍 Email не должен содержать пробелы";
            formMessage.classList.add("active__formMessage");
        }
        else {
            formMessage.textContent = "Email успешно отправлен 🎉";
            formMessage.classList.add("active__formMessage");  
            emailInput.value = "";
        }
    });

    /* Чекбокс */
    const correctAnswers = [2, 3, 4, 5, 8, 10];  

    const checkBtn = document.getElementById("testing__checkbox-btn"); 
    const checkMessage = document.getElementById("check__res"); 


        /* Ф-ция получения значения выбранного чекбокса */
    function getSelectedValues() {    
        const question = document.querySelectorAll('input[name="question1"]:checked');  
        return Array.from(question).map(item => Number(item.value));        
    };

        /*  Ф-ция подсветки чекбоксов  */
    function highlightAnswers(showMissed = false) {  

        const allCheckboxes = document.querySelectorAll('input[name="question1"]');    

        allCheckboxes.forEach(input => {
            const label = input.closest("label"); 

        /* Получаем данные о чекбоксе  ↓  */        
            const value = Number(input.value); 
            const isChecked = input.checked;     
            const isCorrect = correctAnswers.includes(value); 

        label.classList.remove("correct", "wrong", "missed"); 

        /* Применяем новый стиль в зависимости от состояния  ↓  */
            if (isChecked && isCorrect) {          
                label.classList.add("correct");
            } 
            else if (isChecked && !isCorrect) {    
                label.classList.add("wrong");
            }
            else if (showMissed && !isChecked && isCorrect) {    
                label.classList.add("missed");
            }
        })
    };

        /* Ф-ция очистки от выделеных чекбоксов */
    function clearHighlights() {
        document
            .querySelectorAll(".testing__checkbox-label")
            .forEach(label => {
                label.classList.remove(
                    "correct", 
                    "wrong", 
                    "missed"
                );
            });
    };

        /* Очистка чекбоксов от выделенных при повторном нажатии на чекбокс*/
    document
        .querySelectorAll('input[name="question1"]')
        .forEach(input => { 

            input.addEventListener('change', () => {  
                clearHighlights();                    
                checkMessage.textContent = "";
            }); 
        });

    checkBtn.addEventListener('click', function() {  

        const selected =  getSelectedValues(); 
        
        if (selected.length === 0) {                                    
            checkMessage.textContent = "Выберите варианты ответов";
            return;
        } 

        highlightAnswers(true); 

            /* 4.  Показываем результат */
        const correctSelected = selected.filter(val =>  
            correctAnswers.includes(val)   
        );
        const excess = selected.filter(val => !correctAnswers.includes(val)); 
        if (correctSelected.length === correctAnswers.length && excess.length === 0 ) { 
             checkMessage.textContent = "Идеально! 6 из 6 🎉";
        }
        else {
        checkMessage.textContent =
            `Верно: ${correctSelected.length} из ${correctAnswers.length}`;
        }
    });

});