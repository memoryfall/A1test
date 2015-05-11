/*
 * 用本地的uexDataBaseMgr数据库存储用户输入的报表
 * ---------------或者暂时接受网上的同步更新报表？
 * 对数据库的增删改查等基本操作的函数定义
 * 
 */


var cText = 0;
var cJson = 1;
var cInt = 2;

    var dbName; 
    function createDB(){
        dbName = document.getElementById('name').value;
        uexDataBaseMgr.openDataBase(dbName,1);
        uexDataBaseMgr.cbOpenDataBase = createDBCallBack;
    }

    function createTable(){
        //var sql = "CREATE TABLE testTable (_id  INTEGER PRIMARY KEY,name TEXT)";

        uexDataBaseMgr.executeSql(dbName,1,document.getElementById('createTable').value);
        uexDataBaseMgr.cbExecuteSql = createTableCallBack;
    }
    function insertData(){
    //  var sql = "INSERT INTO testTable (name) VALUES ('this is test')";
        uexDataBaseMgr.executeSql(dbName,1,document.getElementById('insertData').value);
        uexDataBaseMgr.cbExecuteSql = insertDataCallBack;
    }
    function selectData(){
    //  var sql = "SELECT * FROM testTable";
        uexDataBaseMgr.selectSql(dbName,1,document.getElementById('selectData').value);
        uexDataBaseMgr.cbSelectSql = selectDataCallBack;
    }
    
    function updateData(){
    //  var sql = UPDATE testTable SET name='这是更改' WHERE _id = 1;
        uexDataBaseMgr.executeSql(dbName,1,document.getElementById('updateData').value);
        uexDataBaseMgr.cbExecuteSql = updateDataCallBack;
    }
    
    function transaction(){
        uexDataBaseMgr.transaction(dbName,1,inFunc);
        uexDataBaseMgr.cbTransaction = transactionCallBack;
        //uexDataBaseMgr.beginTransaction(1);
        //uexDataBaseMgr.cbBeginTransaction = beginTransactionCallBack;
        //drop table testTable是删除表；DELETE FROM testTable WHERE _id = 1删除第一项
    }





    function createDBCallBack(opid,type,data){
        switch(type){
            case cText:
                alert("uex.cText");
                break;
            case cJson:
              alert("uex.cJson");
                break;
            case cInt:
            if(opid == 1 &&type == 2&&data == 0){
                alert("数据库打开成功！");
            }else{
                 alert("数据库打开失败！");
            }
            break;
          default:
              alert("error"); 
      }
        
    };
    function insertDataCallBack(opid,type,data){
        switch(type){
            case cText:
                alert("uex.cText");
                break;
            case cJson:
              alert("uex.cJson");
                break;
            case cInt:
            if(opid == 1&&type == 2 &&data == 0){
                alert("数据插入成功！");
            }else{
                 alert("数据插入失败！");
            }
            break;
          default:
              alert("error");  
      }
    };


    function createTableCallBack(opid,type,data){
        switch(type){
            case cText:
                alert("uex.cText");
                break;
            case cJson:
              alert("uex.cJson");
                break;
            case cInt:
            if(opid == 1&&type == 2 &&data == 0){
                alert("表创建成功！");
            }else{
                 alert("表创建失败！");
            }
            break;
          default:
              alert("error");   
      }
            
    };
    function selectDataCallBack(opid,type,value){
        switch(type){
            case cText:
                alert("uex.cText");
                break;
            case cJson:
            if(opid == 1 && type == 1){
                var jsonList=eval("("+value+")");
              if(jsonList.length == 0){
                  alert("无数据");
              }
              for(var i=0;i<jsonList.length;i++){

 　　　　       for(var key in jsonList[i]){
         　　 alert("key："+key+",value："+jsonList[i][key]); 
                }
    
            } 
            }else{
                alert("查询失败！");
            }
            break;
          case cInt:
            alert("uex.cInt"); 
            break;
           
          default:
              alert("error");  

      }

    };

    function updateDataCallBack(opid,type,data){
        switch(type){
            case cText:
                alert("uex.cText");
                break;
            case cJson:
              alert("uex.cJson");
                break;
            case cInt:
            if(opid == 1&&type == 2 &&data == 0){
                alert("数据修改成功！");
            }else{
                 alert("数据修改失败！");
            }
            break;
          default:
              alert("error");  
      }
    };
    
    function inFunc(){
        uexDataBaseMgr.executeSql(dbName,1,document.getElementById('transactiontData').value);
        uexDataBaseMgr.cbExecuteSql = null;
    }

    function transactionCallBack(opid,type,data){
        switch(type){
            case cText:
                alert("uex.cText");
                break;
            case cJson:
              alert("uex.cJson");
                break;
            case cInt:
            if(opid == 1&&type == 2  &&data == 0){
                alert("事务提交成功！");
            }else{
                 alert("事务提交失败！");
            } 
            break;
          default:
              alert("error");  
      }
    };
    function closeDataBase(){
        uexDataBaseMgr.closeDataBase(dbName,1);
        uexDataBaseMgr.cbCloseDataBase = closeDataBaseCallBack;
    }
    function closeDataBaseCallBack(opid,type,data){
        switch(type){
            case cText:
                alert("uex.cText");
                break;
            case cJson:
              alert("uex.cJson");
                break;
            case cInt:
            if(opid == 1 &&type == 2&&data == 0){
                alert("数据库关闭成功！");
            }else{
                 alert("数据库关闭失败！");
            }
            break;
          default:
              alert("error");
      }
    };