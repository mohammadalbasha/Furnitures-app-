const express=require ("express");
const app=express();
app.use(express.static('public'));
app.use(express.static('public2'));

app.set("view engine","ejs");

app.listen(process.env.PORT||3000,function(){console.log("helloworld");});
app.get("/",function(req,res){
// res.sendFile("C:\\Users\\MSI\\baradie\\ind.html");
res.render("test",{im:"/BedRoom.jpg"})
})



class Item{
constructor(model,quality,description,price,disaccount,images=[]){
  this.model=model;
  this.quality=quality;
  this.description=description;
  this.price=price;
  this.disaccount=disaccount;
  this.images=images;

}}
class Section{

constructor(page_type,background,items=[]) {
this.page_type=page_type;
this.background=background;
this.items=items;


}


}




// for (var i=0;i<7;i++)
// items.push(new Item("ItalianModel","خشب زان فاخر","15000","مليون ونص","ثلاثية مفردة ",["/images/mountain.png","/BedRoom.jpg","/BedRoom.jpg","/images/mountain.png","/BedRoom.jpg","/BedRoom.jpg","/BedRoom.jpg","/BedRoom.jpg"]));
// items.push(new Item("turkishModel","خشب زان فاخر","15000","مليون ونص","ثلاثية مفردة ",["/BedRoom.jpg","/BedRoom.jpg","/BedRoom.jpg","/BedRoom.jpg","/BedRoom.jpg","/BedRoom.jpg","/BedRoom.jpg"]));
//
// for (var i=0;i<3;i++)
// sections.push(new Section("غرف النوم","/images/blackimage.jpg",items));
//

var filename = 'kaka.txt';

var fs = require('fs');
let sections=[];


  fs.readdir('public2', (error, files) => {
      if (error) {
          console.error(error);
          return;
      }
      files.forEach(file => {
        console.log(file);
var typeofsection=file;


let items=[];

var fs1 = require('fs');
  fs1.readdir('public2/'+typeofsection, (error, files1) => {
      if (error) {
          console.error(error);
          return;
      }
      files1.forEach(file1 => {
        console.log(file1);
var model=file1;
var images=[];
var description;
var price ;
var disaccount;
var quality;
var fs2 = require('fs');


  fs2.readdir('public2/'+typeofsection+'/'+model+'/images', (error, files2) => {
      if (error) {
          console.error(error);
          return;
      }
      files2.forEach(file2 => {
// console.log(file2);

images.push('/'+typeofsection+'/'+model+'/images/'+file2);
// console.log(('public2/'+typeofsection+'/'+model+'/images/'+file2));
      })
  })


  try{
  description = fs2.readFileSync('public2/'+typeofsection+'/'+model+'/الوصف.txt', 'UTF-8');
   // var lines = description.split(/\r?\n/);
   // lines.forEach((line) => {
   //         console.log(line);
   //    });
  }
  catch(err){
    console.log(error);
  }
console.log(description);
  items.push(new Item(model,description,description,description,description,images));




      })
  })

  sections.push(new Section(typeofsection,"/images/blackimage.jpg",items));

      })

  })



//



// console.log(sections[0].items.length);

app.get("/bedrooms.html",function(req,res){
// res.sendFile("C:\\Users\\MSI\\baradie\\bedrooms.html");
res.render("test2",{
sec:sections[0],

})
// res.redirect("/bedrooms.html");

})

app.get("/cnc.html",function(req,res){
// res.sendFile("C:\\Users\\MSI\\baradie\\bedrooms.html");
res.render("test2",{
sec:sections[0],

})
// res.redirect("/bedrooms.html");

})
// Read the file and print its contents.
// Make sure we got a filename on the command line.

// Read the file and print its contents.
