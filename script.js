const btnLogin = document.querySelector(".btn-login");
const form = document.querySelector("form");

/* Captar evento de click no btn Login*/
btnLogin.addEventListener("click", event =>{
    event.preventDefault();

    const fields = [...document.querySelectorAll(".input-block input")]
    /* Conferir se existem campos vazios*/
    fields.forEach(field=>{
        if(field.value ==="") form.classList.add("validate-error")

    });
    const formError = document.querySelector(".validate-error");
    
    /* Caso existirem, chamar a função nono*/
    if(formError){
        formError.addEventListener("animationend",event =>{
            if(event.animationName ==="nono"){
                formError.classList.remove("validate-error");
            }
        });

    }else{/* Esconder o formulário se não houverem campos vazios*/
        form.classList.add("form-hide");
    }

    

});

/* Esconder a rolagem*/
form.addEventListener("animationstart",event =>{
    if(event.animationName==="down"){
        document.querySelector("body").style.overflow ="hidden";
    }
});

/* Esconder o form após o evento acabar*/
form.addEventListener("animationend",(event) =>{
    if(event.animationName === "down")
    form.style.display = "none";
});
