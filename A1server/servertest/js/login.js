function Login(){
    var userName=$("#uid").val();
    var userPwd=$("#upwd").val();
    if(userName==""||userPwd==""){
        alert("请将信息填写完整！");
    }else{
        var url="http://192.168.100.139:8090/WebService1.asmx/Login";
        appcan.request.getJSON(url,{name:userName,password:userPwd},function(data){
            if(data.user[0]["status"]=="True"){
                alert("登录成功！");
                appcan.window.open({
                    name:'main',
                    data:'main.html',
                    aniId:2,
                })
            }else{
                alert("登陆失败，请核对信息是否正确！");
            }
        })
    }
}

function goToRejist(){
    appcan.window.open({
        name:'rejist',
        data:'rejist.html',
        aniId:2,
    })
}
function initNewUser(){
    // var newName=appcan.locStorage.val('NAME');
    // var newPassword=appcan.locStorage.val('PASSWORD');
   
}
function MissingPwd(){
    appcan.window.open({
        name:'password',
        data:'password.html',
        aniId:2
    })
}
