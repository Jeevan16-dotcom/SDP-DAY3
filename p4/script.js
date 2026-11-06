function love(){
    const name1 = document.getElementById("name1").value;
    const name2 = document.getElementById("name2").value;
    const res = Math.floor(Math.random()*100);
    const par = document.getElementById("par");
    par.innerHTML =
    " the murder case after both marry"+" "+name1+" "+name2+" "+res +"%";


 if(res >=85){
    par.innerHTML = "give divorce";
 }else if(res >=65){
    par.innerHTML = "little danger";
 }else if(res >=45){
    par.innerHTML = "can convince";
 }else{
    par.innerHTML = "no  tension be haapy";
        }
}