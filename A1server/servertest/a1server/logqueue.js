/* 
 * 用队列数据结构在本地locastorge上存储一个提交日志
 * 同步更新本地数据库中的数据
 * 定义其基本控制函数
 */
function Queue() {
        this.dataStore = [];
        this.In_Queue   = In_Queue;
        this.Out_Queue   = Out_Queue;
        this.first     = first;
        this.end       = end;
        this.toString  = toString;
        this.Empty_Queue     = Empty_Queue;
    }


function In_Queue(q,x){
    this.dataStore.push(element);
}//队尾添加一条log

function Out_Queue(){
    return this.dataStore.shift();
}//删除队头的log

function Empty_Queue(){
    if (this.dataStore.length == 0) {
            return true;
        } else {
            return false;
        }   
}//

// 可以使用如下方法读取队首和队尾的元素： //
function first() {
    return this.dataStore[0];
}

function end() {
    return this.dataStore[this.dataStore.length - 1];
}

// toString()方法显示队列内的所有元素 //

function toString() {
    var retStr = "";
    for (var i = 0; i < this.dataStore.length; ++i) {
        retStr += this.dataStore[i] + "\n";
    }
    return retStr;
}


