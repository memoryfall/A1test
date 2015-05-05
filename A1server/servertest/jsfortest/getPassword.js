function getPwd(){
    var Name=$("#userId").val();
    if(Name==""){
        alert("请输入用户名！");
    }else{
        var url="http://localhost:2137/WebService1.asmx/Login";
        appcan.request.getJSON(url,{name:Name,password:'123',status:'1'},function(data){
            if(data.user[0]["status"]=="True"){
                alert("密码是：     "+data.user[0]["password"]+"\n\n\t\t\t请记住！");
            }else{
                alert("此用户不存在！");
            }
        })
    }
}
