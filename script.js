var li = document.getElementById("sab");

var contenedor2 = document.getElementsByClassName("contenedor2")[0];
var contenedor1 = document.getElementsByClassName("contenedor1")[0];

var cat = document.getElementsByName("select")

var i = 0;
var j=0;
var y=0;

li.addEventListener("click", function(){
    crearNota();
})


function crearNota(){
    var noteText= document.getElementById("note-text").value;

    var node0 = document.createElement("div");
    var node1 = document.createElement("h1");

    node1.innerHTML=noteText;
    node1.setAttribute("style", "width:13rem; height: 12rem; font-size: 15px; padding:1rem; overflow: hidden; border: #00000023 solid 2px; border-radius: 25px; margin-top:1rem; box-shadow:0px 10px 24px 0px rgba(0,0,0,0.6)")
    console.log(margin());
    console.log(rotate());
    console.log(color());
    node1.style.background = color();
    node1.style.transform = rotate();
    node1.style.transform = margin();
    node0.appendChild(node1);

    contenedor2.insertAdjacentElement("beforeend",node0);

    node0.addEventListener("mouseenter", function(){
        node0.style.transform="scale(1)"
    })
    node0.addEventListener("dblclick",function(){
        node0.remove();
    })

    document.getElementById("note-text").value = ' ';
}
function margin(){
    var random_margin= ["-5px","-2px","1px","10px", "15px","20px"];

    if (j>random_margin.length - 1){
        j=0;
    }
    return random_margin[j++]
}
function rotate(){
    var random_rot = ["rotate(3deg)","rotate(1deg)","rotate(-1deg)","rotate(-3deg)","rotate(5deg)","rotate(-10deg)",]
    if (y>random_rot.length - 1){
        y=0;
    }
    return random_rot[y++]
}
function color(){
    var random_color= ["#eb9ac0", "#f3aacb", "#f7bfd8","#fdeaf2"];
    
    if (i>random_color.length - 1){
        i=0;
    }
    
    return random_color[i++]
}
