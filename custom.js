          "use strict"

   var add=document.querySelector('.btn');
  add.addEventListener('click',()=>{
     var input=document.querySelector('.gett').value;
     var text=document.createTextNode(text);
     console.log(text);
     var newLi=document.createElement('li');
     newLi.appendChild(text);
     var newItem=document.querySelector('.olItem');
     newItem.appendChild(newLi);

  }};


const imageInput = document.querySelector(".posts");
let uploadedImage = "";

imageInput.addEventListener("change", function () {
    const reader = new FileReader();
    reader.addEventListener("load", () => {
        uploadedImage = reader.result;
        document.querySelector(".play").style.backgroundImage = `url(${uploadedImage})`
    })
    reader.readAsDataURL(this.files[0])
});

document.getElementById("Img").addEventListener("change", function () {
    var file = this.files[0];
    var Link = URL.createObjectURL(file);
 
    var details = "";
    details += file.name + "<br/>";
    details += file.type + "<br/>";
    details += Math.floor(file.size / 1024) + "kb";
 
    var createImg = `<img src="${Link}" alt = "" />`;
    //preview image
    document.getElementById("ShowImg").innerHTML = createImg;
    //display image details
    document.getElementById("ImgDetails").innerHTML = details;
 
 });

 alert('ok');



