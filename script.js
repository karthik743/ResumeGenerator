function addnewwefield() {

    let newnode = document.createElement('textarea');
    newnode.classList.add('form-control');
    newnode.classList.add('wefield');
    newnode.classList.add("mt-2");
    newnode.setAttribute("rows", 3);
    newnode.setAttribute('placeholder', "enter here");

    let weob = document.getElementById("we");
    let weaddbuttonob = document.getElementById("weaddbutton");

    weob.insertBefore(newnode, weaddbuttonob);

}
function addnewaqfield() {
    let newnode = document.createElement('textarea');
    newnode.classList.add('form-control');
    newnode.classList.add('aqfield');
    newnode.classList.add("mt-2");
    newnode.setAttribute("rows", 3);
    newnode.setAttribute('placeholder', "enter here");

    let aqob = document.getElementById("aq");
    let aqaddbuttonob = document.getElementById("aqaddbutton");

    aqob.insertBefore(newnode, aqaddbuttonob);

}

function generatecv() {

    let namefield = document.getElementById("namefield").value;
    let namet1 = document.getElementById("namet1");
    namet1.innerHTML = namefield;

    document.getElementById("namet2").innerHTML = namefield;

    document.getElementById("contactt").innerHTML = document.getElementById("contactfield").value;

    document.getElementById("addresst").innerHTML = document.getElementById("addressfield").value;

    document.getElementById("linkt").innerHTML = document.getElementById("linkedinfield").value;

    document.getElementById("gitt").innerHTML = document.getElementById("githubfield").value;

    document.getElementById("objectivet").innerHTML = document.getElementById("objectivefield").value;

    let wes=document.getElementsByClassName("wefield");
    let str='';

    for(let e of wes)
    {
        str=str+`<li> ${e.value}</li>`;
    }
    document.getElementById("wet").innerHTML=str;



    let aqs=document.getElementsByClassName("aqfield");
    let str1='';

    for(let e of aqs)
    {
        str1=str1+`<li> ${e.value}</li>`;
    }
    document.getElementById("aqt").innerHTML=str1;


    document.getElementById("cv-form").style.display="none";
    document.getElementById("cv-template").style.display="block";

}

function printcv()
{
    window.print();
}
