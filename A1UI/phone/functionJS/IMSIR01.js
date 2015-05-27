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

                var IMSIR01Info=new Array(data.Data.DataTable.length);
                // alert(IMSIR01Info.length);
                
                for(var i=0;i<data.Data.DataTable.length;i++){
                   
                    IMSIR01Info[i]={
                        "title":data.Data.DataTable[i].DEA002,
                        "describe":data.Data.DataTable[i].AvgCost,
                        "subTitle":data.Data.DataTable[i].StockLack,
                        "subDescribe":data.Data.DataTable[i].StockCost,
                        "url":"IMSIR02.html",
                        "id":i,
                    }
                     
                }
                    var listData = [];
                    for (var i = 0,
                        len = IMSIR01Info.length; i < len; i++) {
                        var list = {
                            name : "Edit",
                            title :IMSIR01Info[i].title,
                            describe : IMSIR01Info[i].describe,
                            subTitle : IMSIR01Info[i].subTitle,
                            subDescribe:IMSIR01Info[i].subDescribe,
                            url:"IMSIR02.html",
                            id:i,
                        }
                        listData.push(list);
                    }
                   
                      localStorage.setItem('listData',JSON.stringify(listData));
//                       
                     // appcan.window.open({
                         // name:"ss",
                         // data:"IMSIR01.html",
                     // })
                    
                     // var SS=JSON.parse(localStorage.getItem('listData'));
                     // alert(SS);
                     // appcan.window.open({
                         // name:'ss',
                         // data:""
                     // })
                     
                   
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


    })
}

