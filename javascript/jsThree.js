$(function(){
    var nDate=document.getElementById("nowDate");
    var fullDate=new Date();
    var mm=fullDate.getMonth()+1;
    var dd=fullDate.getDate();
    var year=fullDate.getFullYear();
    nDate.textContent=dd+" / "+mm+" / "+year;
})