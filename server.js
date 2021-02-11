


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

class SuperAndNew{
constructor(img ,title){
  this.img=img;
  this.title=title;
}

}
class Highlights{
constructor (id,img,description){
this.id=id;
this.img=img;
this.description=description;

}


}




let sections=[];
let super2 =[];
let newcollection=[];
let highlights=[];
get_sections();
get_super_and_new("super");
get_super_and_new("newcollection");
get_highlights();
go();
//



// Read the file and print its contents.
// Make sure we got a filename on the command line.

// Read the file and print its contents.


function go(){
  const express=require ("express");
  const app=express();
  app.use(express.static('public'));
  app.use(express.static('public2'));

  app.set("view engine","ejs");

  app.listen(process.env.PORT||3000,function(){console.log("helloworld");});
  app.get("/",function(req,res){
  // res.sendFile("C:\\Users\\MSI\\baradie\\ind.html");
  res.render("test",{im:"/BedRoom.jpg",newcollection:newcollection,super2:super2,highlights:highlights})
  })


  // console.log(sections[0].items.length);


  app.get("/Livingrooms",function(req,res){
  // res.sendFile("C:\\Users\\MSI\\baradie\\bedrooms.html");
  res.render("test2",{
  sec:sections[1],



})})

  app.get("/CNC",function(req,res){
  // res.sendFile("C:\\Users\\MSI\\baradie\\bedrooms.html");
  res.render("test2",{
  sec:sections[2],
  })
  // res.redirect("/bedrooms.html");

  })


app.get("/Others",function(req,res){
// res.sendFile("C:\\Users\\MSI\\baradie\\bedrooms.html");
res.render("test2",{
sec:sections[3],
})
// res.redirect("/bedrooms.html");

})

app.get("/Saloons",function(req,res){
// res.sendFile("C:\\Users\\MSI\\baradie\\bedrooms.html");
res.render("test2",{
sec:sections[0],
})
// res.redirect("/bedrooms.html");

})
}


function get_sections (){
  var fs = require('fs');

    fs.readdir('public2/sections', (error, files) => {
        if (error) {
            console.error(error);
            return;
        }
        files.forEach(file => {
          console.log(file);
  var typeofsection=file;


  let items=[];

  var fs1 = require('fs');
    fs1.readdir('public2/sections/'+typeofsection, (error, files1) => {
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

  var tempimages=[];

  tempimages=  fs2.readdirSync('public2/sections/'+typeofsection+'/'+model+'/images');
  tempimages.forEach(file => {

    images.push('/sections/'+typeofsection+'/'+model+'/images/'+file);

  });
  /*, (error, files2) => {
  if (error) {
            console.error(error);
            return;
        }
        files2.forEach(file2 => {
  // console.log(file2);

  images.push('/'+typeofsection+'/'+model+'/images/'+file2);
  console.log(('pudscdcsdcsdc'));
        })
    })
*/

    try{
    description = fs2.readFileSync('public2/sections/'+typeofsection+'/'+model+'/الوصف.txt', 'UTF-8');
     // var lines = description.split(/\r?\n/);
     // lines.forEach((line) => {
     //         console.log(line);
     //    });
    }
    catch(err){
      console.log(error);
    }
       console.log(images[0]);
    items.push(new Item(model,description,description,description,description,images));




        })
    })

    sections.push(new Section(typeofsection,"/images/blackimage.jpg",items));

        })

    })

}



function get_highlights (){
  var fs = require('fs');
    fs.readdir('public2/highlights', (error, files) => {
        if (error) {
            console.error(error);
            return;
        }
        files.forEach(file => {
          console.log(file);
  var id=file;
  var fs2 = require('fs');


  var tempimage;

  tempimage=  fs2.readdirSync('public2/highlights/'+id+'/img');
  image=('/highlights/'+id+'/img/'+tempimage);




      var  description = fs.readFileSync('public2/highlights/'+id+'/الوصف.txt', 'UTF-8');
console.log(image);
          highlights.push(new Highlights(id,image,description));

  console.log (image);
  console.log(highlights.length);

        })

    })

}



function get_super_and_new(x){
  var fs = require('fs');

    fs.readdir('public2/'+x, (error, files) => {
        if (error) {
            console.error(error);
            return;
        }
        files.forEach(file => {


if (x==="super")
    super2.push(new SuperAndNew("/"+x+"/"+file,        file.substr(0, file.lastIndexOf('.'))));
else     newcollection.push(new SuperAndNew("/"+x+"/"+file,        file.substr(0, file.lastIndexOf('.'))));

console.log("public2/"+x+"/"+file);

        })

    })



}
