var Name =  Number(document.getElementById('lname').value);
var examount = Number(document.getElementById('expenseamount').value);
var balamount = 0;
var gfg = document.querySelector(".gfg")
 
var del = (element) => {
    examount -= Number(document.getElementById(`expenvl${element}`).innerText);
    document.getElementById('expenseprice').innerText = examount;
    balamount += Number(document.getElementById(`expenvl${element}`).innerText);
    document.getElementById('balanceprice').innerText = balamount;
    document.getElementById(`vl${element}`).innerText = "";
    document.getElementById(`exitem${element}`).innerText = "";
    document.getElementById(`icon${element}`).innerHTML = "";
}

function pr() {
    Name += Number(document.getElementById('lname').value);
    document.getElementById('budjetprice').innerText = Name;
    balamount += Number(document.getElementById('lname').value);
    document.getElementById('balanceprice').innerText = balamount;
    document.getElementById('lname').value = "";
}

var edit = (element) => {
    examount -= Number(document.getElementById(`expenvl${element}`).innerText);
    document.getElementById('expenseprice').innerText = examount;
    balamount += Number(document.getElementById(`expenvl${element}`).innerText);
    document.getElementById('balanceprice').innerText = balamount;
    document.getElementById("expenseobj").value = document.getElementById(`exitem${element}`).innerText;
    document.getElementById("expenseamount").value = document.getElementById(`expenvl${element}`).innerText;
    document.getElementById(`vl${element}`).innerText = "";
    document.getElementById(`exitem${element}`).innerText = "";
    document.getElementById(`icon${element}`).innerHTML = "";
}

var numclick = 0
function expenseclick() {
    let expenseval =  document.getElementById("expenseamount").value;
    let warning = document.getElementById("warning");
    if (expenseval != "") {
        numclick++
        am(numclick)
        warning.innerText = "";
    }
    else{
        warning.innerText = " Enter expense and expense amount first ";
    }
}

function am(element) {
        var expenseitemadd = document.getElementById("expenseitemadd");
        expenseitemadd.innerHTML += `<div id="exitem${element}"> </div>`;
        var expenseamountadd = document.getElementById("expenseamountadd");
        expenseamountadd.innerHTML += `<div id="vl${element}"> $ <span id="expenvl${element}"></span></div>`;
        var iconadd = document.getElementById("iconadd");
        iconadd.innerHTML += `<div class="icon" id="icon${element}"><span class="editicon"><i class="fas fa-pen-square" onclick="edit(${element})"></i></span>
        <i class="fas fa-trash" onclick="del(${element})"></i></div>`;
        document.getElementById(`exitem${element}`).innerText = document.getElementById("expenseobj").value;
        document.getElementById(`expenvl${element}`).innerText = document.getElementById("expenseamount").value;
        examount += Number(document.getElementById("expenseamount").value);
        document.getElementById('expenseprice').innerText = examount;
        balamount -= Number(document.getElementById("expenseamount").value);
        document.getElementById('balanceprice').innerText = balamount;
        document.getElementById("expenseobj").value = "";
        document.getElementById("expenseamount").value = "";
        gfg.scrollTo(0,gfg.scrollHeight);
}