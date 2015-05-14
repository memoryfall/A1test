function rejist(){
    var email=$("#email").val();
    var name=$("#name").val();
    var password=$("#password").val();
    var rePwd=$("#rePwd").val();
    if(email==""||name==""||password==""||rePwd==""){
        alert("请完善用户信息！");
    }else{
        var user={
             
             userName:'lj',
             userPass:'lj',
        }
       appcan.request.ajax({
            type:'POST',
            url:'http://localhost:32591/api/test/post',
            data:{
                digiwinuser:user,
            },
            dataType:'text',
            timeout:300,
            success:function(data){
                alert(data);
            },
            error:function(xhr,type){
                alert("ajax error");
            },
            offline:true
        })
    }
}
