const colorSwitch1 = document.querySelector('.theme-switch input[type="checkbox"]');
function switchColors(e){
    if (e.target.checked){
        document.documentElement.setAttribute('data-theme','dark');

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
colorSwitch1.addEventListener('change', switchColors, false); 