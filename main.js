var images = ["https://drive.google.com/file/d/16mvYYLSIvsK0D7P2RCCShBrFjx7KOSSd/view",
"https://drive.google.com/file/d/1pryrfZtiGgl_Q9IjG3ZmEqdHox003QoR/view",
"https://drive.google.com/file/d/17wMoFvWOPB8i2HBtArFhX-zcSwAYcPlv/view",
"https://drive.google.com/file/d/1r6Yg63-aqS0ERnWPDjF7J-TIODl4hVcx/view"
];
var names = ["Amit Gupta",
"Uma Gupta",
"Aastha Gupta",
"Rishabh Gupta"
];
var i=0;
function Nextslide(){
i++;
var members=4
if(i>members)
{
i=0;
}
var updatedImage=images[i];
var updatedName=names[i];
document.getElementById("image1").src=updatedImage;
document.getElementById("name1").innerHTML=updatedName;
}