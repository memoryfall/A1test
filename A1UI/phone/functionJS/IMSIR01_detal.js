function showdetal(obj) {
    var topList=[];
    var midList=[];
    var butList=[];
    var topDetail = {
        "title" : obj.DEA002,
        "icon":obj.icon,
        "describe" : '<div>' + '商品编码:' + obj.X1 + '</div>' 
        + '<div>' + '型号名称:' + obj.DEF003 + '</div>' ,
    }
    var midDetail={
        "title" :'库存数量',
        "subTitle":obj.StockQuantity,
    }
    var butDetail01={
        "title" :'库存成本',
        "subTitle":obj.StockCost,
    }
    var butDetail02={
        "title" :'平均成本',
        "subTitle":obj.AvgCost,
    }
    topList.push(topDetail);
    midList.push(midDetail);
    butList.push(butDetail01);
    butList.push(butDetail02);
    
    localStorage.setItem('topList',JSON.stringify(topList));
    localStorage.setItem('midList',JSON.stringify(midList));
    localStorage.setItem('butList',JSON.stringify(butList));
    
}
