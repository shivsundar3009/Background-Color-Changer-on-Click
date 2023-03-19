let btn = document.getElementById("button");

let colorHexCode = () => {
       let color = "0123456789ABCDEF";
       let hexCode = "#";

       for(i=0; i<6; i++){
        hexCode += color[Math.floor(Math.random() * 16)];
       }
       return hexCode;
}
 
console.log(colorHexCode());

 function changeRandomColor() {
    document.body.style.backgroundColor = colorHexCode();
}



btn.addEventListener("click", changeRandomColor)