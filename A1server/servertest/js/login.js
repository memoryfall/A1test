var name,password;
function Login(){
    var userName=$("#uid").val();
    var userPwd=$("#upwd").val();
    if(userName==""||userPwd==""){
        alert("请将信息填写完整！");
    }else{
        // var url="http://localhost:32591/api/test/get";
        // appcan.request.getJSON(url,{name:userName,password:userPwd},function(data){
            // if(data==true){
                // alert("登陆成功！");
                // appcan.window.open({
                    // name:'main',
                    // data:'main.html',
                    // aniId:2,
                // })
            // }else{
               // alert("登录失败！");
            // }
        // })
         appcan.request.ajax({
            type:'GET',
            url:'http://localhost:32591/api/test/get',
            data:{
                name:userName,
                password:userPwd,
            },
            dataType:'json',
            timeout:300,
            success:function(data){
               if(data==true){
                   alert("登录成功！");
                   appcan.window.open({
                       name:'main',
                       data:'main.html',
                       aniId:2,
                   })
               }else{
                   alert("登录失败！");
               }
            },
            error:function(xhr,type){
                alert("网络错误！");
            },
            offline:true
        })
    }
}
// function initUser(){
//     
// }
// function createDB(){
    // uexDataBaseMgr.openDataBase('userinfo',1);
    // uexDataBaseMgr.cbOpenDataBase=cbOpenDataBase;
// }
// function cbOpenDataBase(opid,type,data){
    // if(data==0){
        // alert("打开数据库成功!");
    // }else{
        // alert("数据库打开失败!");
    // }
// }
function insertData(name,password){
    var sql='insert into user values('+"'"+name+"','"+password+"')";
    uexDataBaseMgr.executeSql('userinfo',1,sql);
    uexDataBaseMgr.cbExecuteSql=insertDataCallback;
}
function insertDataCallback(opid,type,data){
    if(data==0){
        alert("插入数据成功");
    }else{
        alert("插入数据失败！");
    }
}
// function createTable(){
    // var sql='create table user(name nvarchar(20),password nvarchar(20))';
    // uexDataBaseMgr.executeSql('userinfo',1,sql);
    // uexDataBaseMgr.cbExecuteSql=createTableCallback;
// }
// function createTableCallback(opid,type,data){
    // if(data==0){
        // alert("创建表成功");
    // }else{
        // alert("创建表失败！");
    // }
// }
function transaction(){
    uexDataBaseMgr.transaction('userinfo',1,inFunc)
}
function inFunc(){
    var sql='delete from user';
    uexDataBaseMgr.executeSql('userinfo',1,sql);
    uexDataBaseMgr.cbTransaction=transactionCallback;
}
function transactionCallback(opid,type,data){
    if(data==0){
        alert("清空成功");
    }else{
        alert("清空失败");
    }
}
// function selectData(){
        // var sql = "SELECT * FROM user";
        // uexDataBaseMgr.selectSql('userinfo',1,sql);
        // uexDataBaseMgr.cbSelectSql = selectDataCallback;
    // }
// function selectDataCallback(opid,type,value){
    // if(type==1){
        // var jsonList=eval("("+value+")");
        // if(jsonList.length==0){
            // alert("无数据");
        // }
        // for(var i=0;i<jsonList.length;i++){
             // for(var key in jsonList[i]){
                 // alert(key+":"+jsonList[i][key]);
                // }
            // }
//         
    // }else{
            // alert("查询失败!");
        // }
// }
// function closeDataBase(){
        // uexDataBaseMgr.closeDataBase('userinfo',1);
        // uexDataBaseMgr.cbCloseDataBase = cbCloseDataBase;
    // }
    // function cbCloseDataBase(opid,type,data){
        // if(data == 0){
            // alert("数据库关闭成功！");
        // }else{
            // alert("数据库关闭失败！");
        // }
    // };
// function goToRejist(){
    // appcan.window.open({
        // name:'rejist',
        // data:'rejist.html',
        // aniId:2,
    // })
// }
// function initNewUser(){
    // // var newName=appcan.locStorage.val('NAME');
    // // var newPassword=appcan.locStorage.val('PASSWORD');
//   
// }
// function MissingPwd(){
    // appcan.window.open({
        // name:'password',
        // data:'password.html',
        // aniId:2
    // })
// }
