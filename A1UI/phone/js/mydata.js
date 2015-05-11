var data = [];
        //创建一万条示例数据
        for (var i = 0; i < 100; i++) {
            var row = {
                id : i,
                shop:"微店"+i,
                version : "<span style='color:green;'>" + i + "</span>",
                name : "陕西高原红富士苹果…",
                text : "<span style='color:green;'>" + i + "</span><br/><span style='color:red;'>" + i + "</span>",
                data : "<span style='color:green;'>" + i + "</span><br/><span style='color:red;'>" + i + "</span>",
            };
            data.push(row);
        }
document.getElementById("shop").innerHTML = data[9]["shop"];
document.getElementById("shop").innerHTML = data[9]["shop"];