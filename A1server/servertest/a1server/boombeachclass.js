/*
 * 定义各种报表类
 */

var boombeachtest=function(name,data1,data2) {
   this.name=name;
   this.data1=data1;
   this.data2=data2;
   
   //this.Priority=setPriority();
   this.print=function() {
     alert(this.name + " " + this.data1+ " " + this.data2);
   }
 }; 