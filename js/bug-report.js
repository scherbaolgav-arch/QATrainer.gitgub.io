window.addEventListener('DOMContentLoaded', () => {

    let currentTask = 0;  

    const taskTitle = document.getElementById("taskTitle");
    const taskDescription = document.getElementById("taskDescription");

    const responseSummary = document.getElementById("responseSummary");
    const responseSteps = document.getElementById("responseSteps");
    const responseActual = document.getElementById("responseActual");
    const responseExpected = document.getElementById("responseExpected");
    const nextTaskBtn = document.getElementById("next-task__btn");
    const prevTaskBtn = document.getElementById("prev-task__btn");


    const bugTasks = [
        {
            title: "Баг №1",
            description: "При пустом Email система показывает сообщение 'Email успешно отправлен'",
            summary: "Email успешно отправляется при пустом поле",
            steps: [
                "Открыть страницу",
                "Не вводить Email",
                "Нажать Отправить"
            ],
            actual: "Появляется сообщение об успешной отправке",
            expected: [
                "Должна отображаться ошибка",
                "Поле обязательно для заполнения"
            ]
        },
        {
            title: "Баг №2",
            description: "Кнопка не реагирует на клик",
            summary: "Кнопка отправки не реагирует на клик",
            steps: [
                "Открыть страницу",
                "Ввести валидный email",
                "Нажать Отправить"
            ],
            actual: "Ничего не происходит",
            expected: [
                "Форма должна отправиться"
            ]
        }
    ];

        /* Ф-ция отрисовки Задачи и 'Эталонного ответа' */
    function renderTask() {

        taskTitle.textContent =
            bugTasks[currentTask].title;
        taskDescription.textContent =
            bugTasks[currentTask].description;

        responseSummary.textContent = bugTasks[currentTask].summary;
        responseSteps.innerHTML = ""; 
        bugTasks[currentTask].steps.forEach(step => {
            const li = document.createElement("li");
            li.textContent = step;
            responseSteps.append(li);
        });
        responseActual.textContent = bugTasks[currentTask].actual;
        responseExpected.innerHTML = "";
        bugTasks[currentTask].expected.forEach(item => {
            const li = document.createElement("li");
            li.textContent = item;
            responseExpected.append(li);
        });
    };

        /*  '← Предыдущее задание'/'Следующее задание →' */
    nextTaskBtn.addEventListener('click', () => {
        currentTask++;

        if (currentTask >= bugTasks.length) {
            currentTask = 0;
        }
        renderTask();
    });

    prevTaskBtn.addEventListener('click', () => {
        currentTask--;

        if (currentTask < 0) {
            currentTask = bugTasks.length - 1;
        }
        renderTask();
    });

    renderTask();

        /* Показать/Скрыть 'Эталонный ответ' */
    const showBtn = document.getElementById("response__submitBtn");
    const response = document.querySelector(".response__result");

    showBtn.addEventListener('click', () => {
        response.classList.toggle("is-visible");

        if (response.classList.contains("is-visible")) {
            showBtn.textContent = "Скрыть пример";
        } else {
            showBtn.textContent = "Проверь себя";
        }
    });

});