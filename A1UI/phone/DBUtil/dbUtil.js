
function createDB(DBname,DBid,cbCreateDB){
    uexDataBaseMgr.openDataBase(DBname,DBid);
    uexDataBaseMgr.cbOpenDataBase=cbCreateDB;
}


// function openDataBaseCallback(opid,type,data){
    // if(data==0){//���ݿⴴ���ɹ�
//         
    // }else{
//         
    // }
// }

//====================================�ر����ݿ�
function closeDB(DBname, DBid,cbCloseDataBase){
     uexDataBaseMgr.closeDataBase(DBname, DBid);
     uexDataBaseMgr.cbCloseDataBase = cbCloseDataBase;
}


//=======================================������
function createTable(DBname,DBid,sqlExcute,createTableCallback){
    var sql=sqlExcute;
    uexDataBaseMgr.executeSql(DBname,DBid,sql);
    uexDataBaseMgr.cbExecuteSql=createTableCallback;
}

// function createTableCallback(opid,type,data){
    // if(data==0){//�����ɹ�
//         
    // }else{
//         
    // }
// }

//=========================================��������
function insertData(DBname,DBid,sqlExcute,insertDataCallback){
    var sql=sqlExcute;
    uexDataBaseMgr.executeSql(DBname,DBid,sql);
    uexDataBaseMgr.cbExecuteSql=insertDataCallback;
}

// function insertDataCallback(opid,type,data){
    // if(data==0){//���ݲ���ɹ�
//         
    // }else{
//         
    // }
// }

//==========================================ѡ������
function selectData(DBname,DBid,sqlExcute,selectDataCallback){
    var sql=sqlExcute;
    uexDataBaseMgr.selectSql(DBname,DBid,sql);
    uexDataBaseMgr.cbSelectSql=selectDataCallback;
}

// function selectDataCallback(opid,type,value){
    // if(type==1){//ѡ������ɹ�
//         
    // }else{
//         
    // }
// }

//===========================================ɾ������
function deleteData(DBname,DBid,sqlExcute,deleteDataCallcak){
    var sql=sqlExcute;
    uexDataBaseMgr.selectSql(DBname,DBid,sql);
    uexDataBaseMgr.cbExecuteSql=deleteDataCallcak;
}

//��������ɾ  ��
function transaction(DBname,DBid,sqlExcute,excuteCallbacks){
    var sql=sqlExcute;
    uexDataBaseMgr.selectSql(DBname,DBid,sql);
    uexDataBaseMgr.cbExecuteSql=excuteCallbacks;
}

