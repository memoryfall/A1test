﻿function Login(){
    var account=$("#LoginAccout").val();
    var pass=$("#LoginPassword").val();
    if(account==""||pass==""){
        alert("�������������û���Ϣ");
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
                        var sqlExcute = 'create table UserInfo(u_Account nvarchar(50) not null unique,u_Password nvarchar(50),TenantId int,UserId int,RoleId int)';
                        createTable(DBname, DBid, sqlExcute, createTableCallback);
                        count += 1;
                    }
                    if (count == 2) {
                        
                        var sqlExcute = 'insert into UserInfo values(' + "'" + account + "','" + pass + "'," + data.Data.TenantId + "," + data.Data.UserId + "," + data.Data.RoleId + ")";
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
                    
                    appcan.window.open({
                        name:'index',
                        data:'index.html',
                        aniId:2
                    })
                }else{
                    alert("��¼��Ϣ������˶�");
                }
            },
            error:function(xhr,type){
                alert("����ʱ����������");
            },
            offline:true
        })
    }
}
//=================================??????????????
function cbCreatDB(opid,type,data){
    if(data==0){
        alert("????????");
        
    }else{
        alert("????????");
    }
}
//=================================????????????
function createTableCallback(opid,type,data){
    if(data==0){
        alert("???????");
    }else{
        alert('???????');
    }
}
//================================?????????????
function insertDataCallback(opid,type,data){
    if(data==0){
        alert("??????????");
    }else{
        alert("??????????");
    }
}
//===============================???????????
function selectDataCallback(opid,type,value){
   
    if (type == 1) {
        var jsonList = eval("(" + value + ")");
        if (jsonList.length == 0) {
            alert("?????");
        }
        for (var i = 0; i < jsonList.length; i++) {
            for(var key in jsonList[i]){
                alert(key+":"+jsonList[i][key]);
            }
        }
    } else {
        alert("???????");
    }

}
