function Request(strName) {
    var strHref = window.document.location.href;
    var intPos = strHref.indexOf("?");
    var strRight = strHref.substr(intPos + 1);

    var arrTmp = strRight.split("&");
    for (var i = 0; i < arrTmp.length; i++) {
        var arrTemp = arrTmp[i].split("=");

        if (arrTemp[0].toUpperCase() == strName.toUpperCase())
            return arrTemp[1];
    }
    return "";
}

var Rtext = Request("shopid");
var data = [];
//创建一万条示例数据
for (var i = 0; i < 10; i++) {
    var row = {
        id : i,
        ShopType : "微店" + i,
        shopname : "卖卖东东的小店" + i,
        shopkeeper : "罗四维" + i,
        Email : "1231@wqrw" + i,
        mobilephone : "1111111111" + i,
        telephone : "1111111" + i,
        Addressonline : "www.adsa.asd" + i,
        FAX : "qweji" + i,
        Address : "阿克苏点卡" + i,
        city : "上海" + i,
        version : "<span style='color:green;'>" + i + "</span>",
        name : "陕西高原红富士苹果…",
        text : "<span style='color:green;'>" + i + "</span><br/><span style='color:red;'>" + i + "</span>",
        data : "<span style='color:green;'>" + i + "</span><br/><span style='color:red;'>" + i + "</span>",
    };
    data.push(row);
}
document.getElementById("ShopType").innerHTML = data[Rtext]["ShopType"];
document.getElementById("DAA002").value = data[9]["shopname"];
document.getElementById("DAA011").value = data[9]["shopkeeper"];
document.getElementById("DAA010").value = data[9]["Email"];
document.getElementById("DAA013").value = data[9]["mobilephone"];
document.getElementById("DAA008").value = data[9]["telephone"];
document.getElementById("DAA018").value = data[9]["Addressonline"];
document.getElementById("DAA009").value = data[9]["FAX"];
document.getElementById("DAA006").value = data[9]["Address"];
document.getElementById("DAA004").value = data[9]["city"];

