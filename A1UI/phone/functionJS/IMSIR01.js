function IMSIR01() {
    appcan.request.ajax({
        type : 'POST',
        url : 'http://180.153.139.167:8080/webapi',
        data : {
            Service : 'IMSIR01',
            Method : 'Read',
            TenantId : '275922051219',
            UserId : '47',
            RoleId : '000',
        },
        dataType : 'json',
        timeout : 300,
        success : function(data) {
            if (data.Error == "") {
                
            } else {
                alert("输入的信息有误,请核对!");
            }
        },
        error : function(xhr, type) {
            alert("网络错误！");
        },
        offline : true
    })
}

