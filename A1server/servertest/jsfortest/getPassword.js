function getPwd(){
    var Name=$("#userId").val();
    if(Name==""){
        alert("请输入用户名！");
    }else{
        appcan.request.getJSON('http://192.168.100.139:8090/WebService1.asmx/getPassword',{name:Name},function(data){
            if(data.user[0]["status"]=="True"){
                alert("密码是：     "+data.user[0]["password"]+"\n\n\t\t\t请记住！");
            }else{
                alert("此用户不存在！");
            }
        })
    }
}
