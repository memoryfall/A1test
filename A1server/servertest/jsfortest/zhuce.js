var email,name,password,repwd;
function rejist(){
    var Email=$("#email").val();
    var Name=$("#name").val();
    var passWord=$("#password").val();
    var rePwd=$("#rePwd").val();
    if(Email==""||Name==""||passWord==""||rePwd==""){
        alert("请完善用户信息！");
    }else if(passWord!=rePwd){
        alert("两次输入的密码不一致！");
    }else{
         var mydata={userName:Name,userPass:passWord};
         
       appcan.request.ajax({
            type:'POST',
            // url:'http://192.168.100.139/A1WebSite/webapi',
            url:'http://localhost:32591/api/test/post',
            // data:{
                // Method:'Login',
                // LoginAccout:'ss',
                // LoginPassword:'sss'
            // },
            data:mydata,
            dataType:'json',
            timeout:300,
            success:function(data){
               if(data==true){
                   alert("注册成功！");           
                   appcan.window.open({
                   name:'logintest',
                   data:'logintest.html',
                   aniId:2,
                   })
               }
                 //createDB();
                 // createTable();
                  //transaction();
                  //insertData(Email,Name,passWord,rePwd);
                  
                 // updateData(Email,Name,passWord,rePwd);
                 // selectData();
                 // closeDataBase();
                // createDB();
                // createTable();
             // alert(data);
            },
            error:function(xhr,type){
                alert("网络连接错误！");
                // createDB();
                // createTable();
                // transaction();
                // transaction();
                //insertData(Email,Name,passWord,rePwd);
                //selectData();
                // updateData(Email,Name,passWord,rePwd);
                //selectData();
                // closeDataBase();
            },
            offline:true
        })
    }
}
function initData(){
    // createDB();
    // selectData();
//    
}
function createDB(){
    
    uexDataBaseMgr.openDataBase('dbtest',5);
     uexDataBaseMgr.cbOpenDataBase=createDBCallback;
}
function createDBCallback(opid,type,data){
    if(data==0){
        alert("数据库打开成功！");
    }else{
        alert("数据库打开失败！");
    }
}
function createTable(){
    var sql='create table test(id int primary key,email nvarchar(20),name nvarchar(20),pwd nvarchar(20),repwd nvarchar(20))';
    uexDataBaseMgr.executeSql('dbtest',5,sql);
     uexDataBaseMgr.cbExecuteSql=createTableCallback;
}
function createTableCallback(opid,type,data){
    if(data==0){
        alert("表创建成功！");
    }else{
        alert("表创建失败！");
    }
}
function insertData(email,name,password,repwd){
    var sql='insert into test values('+1+",'"+email+"','"+name+"','"+password+"','"+repwd+"')";
    uexDataBaseMgr.executeSql('test',5,sql);
     uexDataBaseMgr.cbExecuteSql=insertDataCallback;
}
function insertDataCallback(opid,type,data){
    if(data==0){
        alert("插入数据成功");
    }else{
        alert("插入数据失败！");
    }
}

function updateData(email, name, password, repwd) {
    var sql = 'update test set email=' + "'" + email + "',name='" + name + "',pwd='" + password + "',repwd='" + repwd + "' where id=1";
    uexDataBaseMgr.executeSql('dbtest', 5, sql);
     uexDataBaseMgr.cbExecuteSql = updateDataCallBack;
}

function updateDataCallBack(opid,type,data){
        if(data == 0){
            alert("数据更新成功！");
        }else{
            alert("数据更新失败！");
        }     
    }

function selectData(){
        var sql = "SELECT * FROM test";
        uexDataBaseMgr.selectSql('dbtest',5,sql);
        uexDataBaseMgr.cbSelectSql = selectDataCallBack;
    }
    function selectDataCallBack(opid,type,value){
            if(type == 1){
                var jsonList=eval("("+value+")");
                if(jsonList.length == 0){
                    alert("无数据");
                 }
                 //else{
                    // document.getElementById("email").value=jsonList[0]["email"];
                    // document.getElementById("name").value=jsonList[0]["name"];
                    // document.getElementById("password").value=jsonList[0]["pwd"];
                    // document.getElementById("rePwd").value=jsonList[0]["repwd"];
                // }
                 for(var i=0;i<jsonList.length;i++){
 　　　　               for(var key in jsonList[i]){
         　　         alert("key："+key+",value："+jsonList[i][key]); 
                    }   
                } 
            }else{
                alert("查询失败！");
            }
    }
function transaction(){
    uexDataBaseMgr.transaction('dbtest',5,inFunc)
}
function inFunc(){
    var sql='delete from test';
    uexDataBaseMgr.executeSql('dbtest',5,sql);
    uexDataBaseMgr.cbTransaction=transactionCallback;
}
function transactionCallback(opid,type,data){
    if(data==0){
        alert("清空成功");
    }else{
        alert("清空失败");
    }
}
function closeDataBase() {
     uexDataBaseMgr.closeDataBase('dbtest', 5);
     uexDataBaseMgr.cbCloseDataBase = cbCloseDataBase;
     
}

function cbCloseDataBase(opid, type, data) {
    if (data == 0) {
        alert("数据库关闭成功！");
    } else {
        alert("数据库关闭失败！");
    }
}