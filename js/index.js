// Your code goes here
let busImage = document.querySelector(".intro img");
let mainContent = document.querySelector(".home");
let mContentImgs = document.querySelectorAll(".home img");
let textContent = document.querySelectorAll(".home .text-content");
let allParagraphs = document.querySelectorAll("p");
let body = document.querySelector("body");
let navLinks = document.querySelectorAll("a");
let footer = document.querySelector("footer");
let footerParagraph = document.querySelector("footer p");


navLinks.forEach((element) => {
    element.addEventListener('click', (event) => {
        
        event.preventDefault();
        
        
    });
});

navLinks.forEach((element) => {
    element.addEventListener('focus', (event) => {
        
        element.style.color = 'pink';
        
        
    });
});

navLinks.forEach((element) => {
    element.addEventListener('blur', (event) => {
        
        element.style.color = '#212529';
        
        
    });
});




busImage.addEventListener('mouseenter', (e) =>

    {busImage.style.transform = "scale(1.3,1.3)";}
);

busImage.addEventListener('mouseleave', (e) => {
    busImage.style.transform = "scale(1,1)";
});

mainContent.addEventListener('click', (e) => {
    
    if (mainContent.style.backgroundColor === 'white')
        mainContent.style.backgroundColor = 'red';
    else
    mainContent.style.backgroundColor = 'white';

});

mainContent.addEventListener('dblclick', (e) => {
    
    if (mainContent.style.backgroundColor === 'white' || mainContent.style.backgroundColor === 'red' )
        mainContent.style.backgroundColor = 'blue';
    else
    mainContent.style.backgroundColor = 'white';

});

textContent.forEach((element) => {
    element.addEventListener('mouseover', (event) => {
        
        element.style.color = "green"
     
        
    });
});

textContent.forEach((element) => {
    element.addEventListener('mouseout', (event) => {
        
        element.style.color = "black";
        
        
    });
});

mContentImgs.forEach((element) => {
    element.addEventListener('drag', (event) => {
        
        element.style.display = "none";
        
        
    });
});


mContentImgs.forEach((element) => {
    element.addEventListener('dragend', (event) => {
        
        element.style.display = "block";
        
        
    });
});

window.addEventListener('load', (e) => {

    body.style.backgroundColor = 'sandybrown'
})


footer.addEventListener('click', (e) => {


    alert("footer");
})

footerParagraph.addEventListener('click', (e) => {

    e.stopPropagation();
    alert("footer Paragraph");
})

