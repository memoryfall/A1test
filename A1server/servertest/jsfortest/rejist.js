function Rejist(){
    var newName=$("#newId").val();
    var newPassword=$("#newPwd").val();
    var newPasswordt=$("#confimPwd").val();
    if(newName==""||newPassword==""||newPasswordt==""){
        alert("请输入完整的注册信息");
    }
    else if(newPassword!=newPasswordt){
        alert("两次填写的密码不一致！");
    }else{
        appcan.request.ajax({
            type:'GET',
            url:'http://localhost:2137/WebService1.asmx/insertUser',
            data:{
                name:newName,
                password:newPassword,
            },
            dataType:'json',
            timeout:300,
            success:function(data){
                if(data.user[0]["status"]=="true"){
                    alert("注册成功！");
                    // appcan.locStorage.setVal('NAME',newName);
                    // appcan.locStorage.setVal('PASSWORD',newPassword);
                    appcan.window.open({
                        name:'logintest',
                        data:'logintest.html',
                        aniId:2,
                    })
                }else if(data.user[0]["status"]=="exits"){
                    alert("此用户名已存在，请重新输入!");
                }else{
                    alert("注册失败！");
                }
            },
            error:function(xhr,type){
                alert("ajax error");
            },
            offline:true
        })
    }
    
}
