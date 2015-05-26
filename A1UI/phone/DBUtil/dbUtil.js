
function createDB(DBname,DBid,cbCreateDB){
    uexDataBaseMgr.openDataBase(DBname,DBid);
    uexDataBaseMgr.cbOpenDataBase=cbCreateDB;
}


// function openDataBaseCallback(opid,type,data){
    // if(data==0){//数据库创建成功
//         
    // }else{
//         
    // }
// }

//====================================关闭数据库
function closeDB(DBname, DBid,cbCloseDataBase){
     uexDataBaseMgr.closeDataBase(DBname, DBid);
     uexDataBaseMgr.cbCloseDataBase = cbCloseDataBase;
}


//=======================================创建表
function createTable(DBname,DBid,sqlExcute,createTableCallback){
    var sql=sqlExcute;
    uexDataBaseMgr.executeSql(DBname,DBid,sql);
    uexDataBaseMgr.cbExecuteSql=createTableCallback;
}

// function createTableCallback(opid,type,data){
    // if(data==0){//表创建成功
//         
    // }else{
//         
    // }
// }

//=========================================插入数据
function insertData(DBname,DBid,sqlExcute,insertDataCallback){
    var sql=sqlExcute;
    uexDataBaseMgr.executeSql(DBname,DBid,sql);
    uexDataBaseMgr.cbExecuteSql=insertDataCallback;
}

// function insertDataCallback(opid,type,data){
    // if(data==0){//数据插入成功
//         
    // }else{
//         
    // }
// }

//==========================================选择数据
function selectData(DBname,DBid,sqlExcute,selectDataCallback){
    var sql=sqlExcute;
    uexDataBaseMgr.selectSql(DBname,DBid,sql);
    uexDataBaseMgr.cbSelectSql=selectDataCallback;
}

// function selectDataCallback(opid,type,value){
    // if(type==1){//选择操作成功
//         
    // }else{
//         
    // }
// }

//===========================================删除数据
function deleteData(DBname,DBid,sqlExcute,deleteDataCallcak){
    var sql=sqlExcute;
    uexDataBaseMgr.selectSql(DBname,DBid,sql);
    uexDataBaseMgr.cbExecuteSql=deleteDataCallcak;
}

//事务，增，删  查
function transaction(DBname,DBid,sqlExcute,excuteCallbacks){
    var sql=sqlExcute;
    uexDataBaseMgr.selectSql(DBname,DBid,sql);
    uexDataBaseMgr.cbExecuteSql=excuteCallbacks;
}

