function lineChartOpen() {
    var x = 0;
    var y = 200;
    var w = 700;
    var h = 900;
    
    var data = [];
    var line = [];
    for (var i = 0; i < 10; i++) {
        var point = {
            x_value : i,
            y_value : Math.random() * (100 - 1) + 1
        }
        line.push(point);
    }
    var linestyle = {
        hasLines : true,
        hasPoints : true,
        shape : 0,
        isFilled : false,
        hasLabels : true,
        isCubic : false,
        hasLabelForSelected : false
    }
    var lines = {
        line : line,
        style : linestyle
    }
    data.push(lines);
    
    var style = {
        hasAxes : true,
        hasAxesNames : true
    }
    var json = {
        style : style,
        data : data
    };
    
    uexLineChart.open(x, y, w, h, JSON.stringify(json));
}

function liechartClose() {
    uexLineChart.close();
}

function setjsondata() {
    var data = [];
    var line = [];
    for (var i = 0; i < 10; i++) {
        var point = {
            x_value : i,
            y_value : Math.random() * (100 - 1) + 1
        }
        line.push(point);
    }
    var linestyle = {
        hasLines : true,
        hasPoints : true,
        shape : 0,
        isFilled : false,
        hasLabels : true,
        isCubic : false,
        hasLabelForSelected : false
    }
    var lines = {
        line : line,
        style : linestyle
    }
    data.push(lines);
    
    var style = {
        hasAxes : true,
        hasAxesNames : true
    }
    var json = {
        style : style,
        data : data
    };
    uexLineChart.setJsonData(JSON.stringify(json));
}

function setjsondatabyindex() {
    var index = 0;
    var style = {
        hasLines : true,
        hasPoints : true,
        shape : 0,
        isFilled : false,
        hasLabels : true,
        isCubic : false,
        hasLabelForSelected : false
    }
    var singledata = [];
    for (var i = 0; i < 10; i++) {
        var point = {
            x_value : i,
            y_value : Math.random() * (100 - 1) + 1
        }
        singledata.push(point);
    }
    var json = {
        singledata : singledata,
        style : style
    };
    uexLineChart.setJsonDataByIndex(index, JSON.stringify(json));
}

var styleflag = false;

var linestyleflag = false; 


function setlinestyle() {
    linestyleflag = !linestyleflag;
    var index = 0;
    var style;
    if (linestyleflag) {
        style = {
            hasLines : true,
            hasPoints : true,
            shape : 1,
            isFilled : true,
            hasLabels : true,
            isCubic : true,
            hasLabelForSelected : false
        }
    } else {
        style = {
            hasLines : true,
            hasPoints : true,
            shape : 0,
            isFilled : false,
            hasLabels : true,
            isCubic : false,
            hasLabelForSelected : false
        }
    }
    uexLineChart.setLineStyle(index, JSON.stringify(style));
    
}

function setstyle() {
    styleflag = !styleflag;
    var style;
    if (styleflag) {
        style = {
            hasAxes : true,
            hasAxesNames : false
        }
    } else {
        style = {
            hasAxes : true,
            hasAxesNames : true,
            Axis_Xname : 'X轴',
            Axis_Yname : 'Y轴'
        }
    }
    uexLineChart.setStyle(JSON.stringify(style));
}
