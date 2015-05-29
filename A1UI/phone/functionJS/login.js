function Login(){
    var account=$("#LoginAccout").val();
    var pass=$("#LoginPassword").val();
    if(account==""||pass==""){
        alert("输入信息不完整，请重新输入！");
    }else{
        appcan.request.ajax({
            type:'POST',
            url:'http://180.153.139.167:8080/webapi',
            data:{
                Service:'Login',
                Method:'Read',
                Account:account,
                Password:pass
            },
            dataType:'json',
            timeout:300,
            success:function(data){                
                if (data.Error == "") {
                    var DBname = 'userInfo';
                    var DBid = 1;
                    var count = 1;
                    createDB(DBname, DBid, cbCreatDB);
                    if (count == 1) {
                        var sqlExcute = 'create table UserInfo(u_Account nvarchar(50) not null unique,u_Password nvarchar(50),TenantId nvarchar(50),UserId nvarchar(50),RoleId nvarchar(50))';
                        createTable(DBname, DBid, sqlExcute, createTableCallback);
                        count += 1;
                    }
                    if (count == 2) {
                        
                        var sqlExcute = 'insert into UserInfo values(' + "'" + account + "','" + pass + "','" + data.Data.TenantId + "','" + data.Data.UserId + "','" + data.Data.RoleId + "')";
                        insertData(DBname, DBid, sqlExcute, insertDataCallback);
                        count += 1;
                    }
                    if (count==3){
                        var sqlExcute='select * from userInfo';
                        selectData(DBname,DBid,sqlExcute,selectDataCallback);
                    }
                    localStorage.setItem("TenantId",data.Data.TenantId);
                    localStorage.setItem("UserId",data.Data.UserId);
                    localStorage.setItem("RoleId",data.Data.RoleId);
                    appcan.window.close(-1);
                    appcan.window.publish("main_window_fresh","");
                }else{
                    alert("输入的信息有误,请核对!");
                }
            },
            error:function(xhr,type){
                alert("网络错误！");
            },
            offline:true
        })
    }
}
//=================================创建数据库回调函数
function cbCreatDB(opid,type,data){
    if(data==0){
        alert("数据库打开成功");
        
    }else{
        alert("数据库打开失败");
    }
}
//=================================创建表回调函数
function createTableCallback(opid,type,data){
    if(data==0){
        alert("表创建成功");
    }else{
        alert('表创建失败');
    }
}
//================================插入数据回调函数
function insertDataCallback(opid,type,data){
    if(data==0){
        alert("数据插入成功！");
    }else{
        alert("数据插入失败！");
    }
}
//===============================筛选数据回调函数
function selectDataCallback(opid,type,value){
   
    if (type == 1) {
        var jsonList = eval("(" + value + ")");
        if (jsonList.length == 0) {
            alert("无数据");
        }
        for (var i = 0; i < jsonList.length; i++) {
            for(var key in jsonList[i]){
                alert(key+":"+jsonList[i][key]);
            }
        }
    } else {
        alert("查询失败！");
    }

}
