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
                alert("�������Ϣ����,��˶�!");
            }
        },
        error : function(xhr, type) {
            alert("�������");
        },
        offline : true
    })
}

