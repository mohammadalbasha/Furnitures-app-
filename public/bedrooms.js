



//
// function myFunction(imgs) {
// // Get the expanded image
// var expandImg = document.getElementById("expandedImg");
// // Get the image text
// var imgText = document.getElementById("imgtext");
// // Use the same src in the expanded image as the image being clicked on from the grid
// expandImg.src = imgs.src;
// // Use the value of the alt attribute of the clickable image as text inside the expanded image
// imgText.innerHTML = imgs.alt;
// // Show the container element (hidden with CSS)
// expandImg.parentElement.style.display = "block";
// }



               class Image {
                 constructor(imgsrc) {
                   this.imgsrc=imgsrc;
                 }
               }

               let img1=new Image("C:\\Users\\MSI\\Documents\\web-development\\training\\images\\icon.png");
               let img2=new Image ("C:\\Users\\MSI\\Documents\\web-development\\training\\images\\mountain.png");

               console.log(img1.imgsrc);
               // document.getElementById("test1").src=img1.imgsrc;



class Bedroom{
constructor(mainimg,images=[],quality,description){
this.img=mainimg;
this.images=images;
this.quality=quality;
this.description=description;
}
};

var vimg=[6];
for (var i=0;i<6;i++)
vimg[i]="C:\\Users\\MSI\\Documents\\web-development\\training\\images\\icon.png";

let bdr=new Bedroom("C:\\Users\\MSI\\Documents\\web-development\\training\\images\\icon.png",vimg,"super","خشب زان");


// // document.getElementById("bdr").innerHTML="<img src="+bdr.img+">"+"<p>"+bdr.quality+"</p>";
// ``
//                document.getElementById("test2").innerHTML=" <img src='C:\\Users\\MSI\\Documents\\web-development\\training\\images\\mountain.png' alt='Nature' onclick='myFunction(this);'>";
//




                              //

                              //  div.className = "column";
                              //
                              //  div.innerHTML = " <img src='C:\Users\MSI\Documents\web-development\training\images\room.jpg' alt='Nature' onclick='myFunction(this);'> ";
                              //
                              //
                              //
                              //  document.getElementById("test2").appendChild(div);
