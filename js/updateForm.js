function initUpdateForm() {

console.log("Форма инициализирована");
const commentBtn = document.querySelector(".comment__form-btn");
const commentInput = document.getElementById("form-inputComment");
const commentForm = document.querySelector(".comment__form");   
const toast = document.querySelector(".toast"); 
    

    commentForm.addEventListener('submit', (event) => {
        event.preventDefault(); 

    commentInput.classList.remove("active__form");

    commentInput.addEventListener('focus', () => {
        commentInput.classList.remove("active__form");
    });

    const cleanComment = commentInput.value.trim();  
   
   

    if (!cleanComment) {                                     
        commentInput.classList.add("active__form");
        return;
    }

        console.log(`
            Вы оставили комментарий:
                ${cleanComment}; 👀
            Ваше мнение дорого нам!
        `)
    showToast();    
    });

    
    function showToast() {
        toast.classList.add("active");

        setTimeout(() => {
            toast.classList.remove("active");
        }, 3000);
    };
console.log(commentInput);
console.log(commentForm);
console.log(toast);
};
