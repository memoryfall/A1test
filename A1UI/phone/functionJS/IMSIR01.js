function IMSIR01() {
    appcan.request.ajax({
        type : 'POST',
         url : 'http://180.153.139.167:8080/webapi',
        data : {
            Service : 'IMSIR01',
            Method : 'Read',
            TenantId : localStorage.getItem("TenantId"),
            UserId : localStorage.getItem("UserId"),
            RoleId : localStorage.getItem("RoleId"),
        },
        dataType : 'json',
        timeout : 300,
        success : function(data) {
           
            if (data.Error == "") {  
                var listData = [];
                var IMSIR01Info=new Array(data.Data.DataTable.length);                
                for(var i=0;i<data.Data.DataTable.length;i++){
                    IMSIR01Info[i]={
                        "name":"Edit",
                        "title":data.Data.DataTable[i].DEA002,
                        "icon":"../bear.jpg",
                        "describe":'<div>'+'平均成本:'+data.Data.DataTable[i].AvgCost+'</div>'
                                   +'<div>'+'库存数量:'+data.Data.DataTable[i].StockQuantity+'</div>'
                                   +'<div>'+'库存成本:'+data.Data.DataTable[i].StockCost+'</div>',
                        "url":"IMSIR01_detal.html",
                        "id":i,
                        "X1":data.Data.DataTable[i].X1,
                        "DEA002":data.Data.DataTable[i].DEA002,
                        "DEF003":data.Data.DataTable[i].DEF003,
                        "StockQuantity":data.Data.DataTable[i].StockQuantity,
                        "StockCost":data.Data.DataTable[i].StockCost,
                        "AvgCost":data.Data.DataTable[i].AvgCost,
                    }
                     listData.push(IMSIR01Info[i]);
                   
                }
                    //var listData = [];
                    // for (var i = 0,
                        // len = IMSIR01Info.length; i < len; i++) {
                        // var list = {
                            // name : "Edit",
                            // title :IMSIR01Info[i].title,
                            // describe : IMSIR01Info[i].describe,
                            // subTitle : IMSIR01Info[i].subTitle,
                            // subDescribe:IMSIR01Info[i].subDescribe,
                            // url:"IMSIR02.html",
                            // id:i,
                        // }
                        // listData.push(list);
                    // }
                   
                      localStorage.setItem('listData',JSON.stringify(listData));
                      //alert(JSON.parse(localStorage.getItem('listData')));
            } 
        },
        error : function(xhr, type) {
            alert("网络错误！");
        },
        offline : true
    })
}

