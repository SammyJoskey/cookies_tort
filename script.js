
localStorage.getItem('area') ? area.value = 'Ваш город - ' + localStorage.getItem('area') : area.value = localStorage.getItem('area')

    area.oninput = () => {
      localStorage.setItem('area', area.value);

  }

function city () {
    if (localStorage.getItem('area') !== null) {
        $("textarea").replaceWith("<span>" + (area.value) + "</span>");
        document.querySelector('span').style.backgroundColor= 'yellow';
        document.querySelector('span').style.fontSize= '25px';
    }
}

$(document).ready(function() {
    console.log(area.value);
    load_saved();
    city ();
});


const opt1 = document.getElementById("option1");
const opt2 = document.getElementById("option2");
const opt3 = document.getElementById("option3");
const opt4 = document.getElementById("option4");
const opt5 = document.getElementById("option5");
const opt6 = document.getElementById("option6");


function StoreBoxes() {
    localStorage.setItem('option1', opt1.checked ? '1' : '0');
    localStorage.setItem('option2', opt2.checked ? '1' : '0');
    localStorage.setItem('option3', opt3.checked ? '1' : '0');
    localStorage.setItem('option4', opt4.checked ? '1' : '0');
    localStorage.setItem('option5', opt5.checked ? '1' : '0');
    localStorage.setItem('option6', opt6.checked ? '1' : '0');
    btn_save.setAttribute("disabled", "disabled");
        opt1.setAttribute("disabled", "disabled");
        opt2.setAttribute("disabled", "disabled");
        opt3.setAttribute("disabled", "disabled");
        opt4.setAttribute("disabled", "disabled");
        opt5.setAttribute("disabled", "disabled");
        opt6.setAttribute("disabled", "disabled");
    const output = document.getElementById("zag");
    output.innerHTML = "Выбор сделан";
    alert("Ваш выбор сделан!")
}




function delete_choice() {
    localStorage.removeItem('option1');
    localStorage.removeItem('option2');
    localStorage.removeItem('option3');
    localStorage.removeItem('option4');
    localStorage.removeItem('option5');
    localStorage.removeItem('option6');
}


function load_saved() {
    let savedOpt1 = localStorage.getItem('option1');
    let savedOpt2 = localStorage.getItem('option2');
    let savedOpt3 = localStorage.getItem('option3');
    let savedOpt4 = localStorage.getItem('option4');
    let savedOpt5 = localStorage.getItem('option5');
    let savedOpt6 = localStorage.getItem('option6');

    if (savedOpt1 == '1' | savedOpt2 == '1' | savedOpt3 == '1' | savedOpt4 == '1' | savedOpt5 == '1' | savedOpt6 == '1') {
        if (savedOpt1 == '1') {
            opt1.checked = true;
        }
        if (savedOpt2 == '1') {
            opt2.checked = true;
        }
        if (savedOpt3 == '1') {
            opt3.checked = true;
        }
        if (savedOpt4 == '1') {
            opt4.checked = true;
        }
        if (savedOpt5 == '1') {
            opt5.checked = true;
        }
        if (savedOpt6 == '1') {
            opt6.checked = true;
        }
        
        btn_save.setAttribute("disabled", "disabled");
        opt1.setAttribute("disabled", "disabled");
        opt2.setAttribute("disabled", "disabled");
        opt3.setAttribute("disabled", "disabled");
        opt4.setAttribute("disabled", "disabled");
        opt5.setAttribute("disabled", "disabled");
        opt6.setAttribute("disabled", "disabled");
        const output = document.getElementById("zag");
        output.innerHTML = "Выбор сделан";
    }
}
