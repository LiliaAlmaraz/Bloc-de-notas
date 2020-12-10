const colorSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
function switchColors(e){
    if (e.target.checked){
        document.documentElement.setAttribute('data-theme','dark');
    }else{
        document.documentElement.setAttribute('data-theme', 'light');
    }
}
colorSwitch.addEventListener('change', switchColors, false); 