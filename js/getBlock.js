fetch("header.html")
    .then(response => response.text())
    .then(data => {
        document.querySelector(".header-placeholder").outerHTML = data; 
        initBurgerMenu();
    });   

fetch("comment.html")
    .then(response => response.text())
    .then(data => {
        document.querySelector(".comment-placeholder").outerHTML = data; 
        initUpdateForm();
    }); 

fetch("footer.html")
    .then(response => response.text())
    .then(data => {
        document.querySelector(".footer-placeholder").outerHTML = data; 
    });