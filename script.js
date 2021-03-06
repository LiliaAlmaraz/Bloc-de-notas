var li = document.getElementById("sab");

var contenedor2 = document.getElementsByClassName("contenedor2")[0];
var contenedor1 = document.getElementsByClassName("contenedor1")[0];

var i = 0;
var j=0;
var y=0;

const colorSwitch = document.querySelector('.theme-switch input[type="checkbox"]');

li.addEventListener("click", function(){
    crearNota();
})


function crearNota(){
    var noteText= document.getElementById("note-text").value;
    var title = document.getElementById("titulo").value;
    var cat = document.getElementById("sselect")
    var disp = cat.options[cat.selectedIndex].text;
    console.log(disp)
    console.log(title)
    
    if (noteText != ''){

        if(title !=''){

            var node0 = document.createElement("div");
            var nodeT = document.createElement("h1");
            var node1 = document.createElement("h1");
            node1.innerHTML=noteText;
            nodeT.innerHTML=title;
            nodeT.setAttribute("style", "color: rgba(31, 31, 30, 0.774)58, 153, 145); padding:1rem;")
            node1.setAttribute("style", "width:13rem; height: 12rem; font-size: 15px; padding:1rem; overflow: hidden; border: #00000023 solid 2px; border-radius: 15px; margin-top:1rem; margin-left:2rem; box-shadow:0px 10px 24px 0px rgba(0,0,0,0.6)")
            //console.log(margin());
            //console.log(rotate());
            //console.log(color());
            node1.style.transform = rotate();
            node1.style.transform = margin();
    
            if(disp == 'Escuela'){
                node1.style.background = "#f70071"
                node1.style.color="#fff"
            }
            if (disp == 'Personal'){
                node1.style.background = "#f7bfd8"
            }
            if (disp == 'Familia'){
                node1.style.background = "#fdeaf2"
            }
    
    
            function switchColors(e){
                if (e.target.checked){
                    document.documentElement.setAttribute('data-theme','dark');
                    
                    nodeT.style.color="#fff"

                    if(disp == 'Escuela'){
                        node1.style.background = "#286e8b"
                        node1.style.color="#fff"
                    }
                    if (disp == 'Personal'){
                        node1.style.background = "#72c8f1"
                    }
                    if (disp == 'Familia'){
                        node1.style.background = "#c9e9fc"
                    }
            
                }else{
                    document.documentElement.setAttribute('data-theme', 'light');
                    
                    nodeT.style.color="#000"

                    if(disp == 'Escuela'){
                        node1.style.background = "#f70071"
                        node1.style.color="#fff"
                    }
                    if (disp == 'Personal'){
                        node1.style.background = "#f7bfd8"
                    }
                    if (disp == 'Familia'){
                        node1.style.background = "#fdeaf2"
                    }
                }
            }
            colorSwitch.addEventListener('change', switchColors, false); 
    

            node0.appendChild(nodeT)
            node0.appendChild(node1);
        
            contenedor2.insertAdjacentElement("beforeend",node0);
        
            node0.addEventListener("mouseenter", function(){
                node0.style.transform="scale(1)"
            })
            node0.addEventListener("dblclick",function(){
                node0.remove();
            })
            
            document.getElementById("note-text").value = ''; 
            document.getElementById("titulo").value=''   

        }
        else{
            alert("No hay titulo")
        }
    }
    else{
        alert("No hay texto")
    }

}
function margin(){
    var random_margin = ["-5px","1px", "5px", "10px","15px","20px"];
  
    return random_margin[Math.floor(Math.random() * random_margin.length)];
  }
  
  function rotate(){
    var random_degree = ["rotate(6deg)","rotate(1deg)","rotate(-4deg)","rotate(-2deg)", "rotate(-10deg)"];
  
    return random_degree[Math.floor(Math.random() * random_degree.length)];
  }
