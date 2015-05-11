function Scrollbar() {
    this.options = {
        total : 0, //数据总数
        pos : 0, //当前滚动位置
        itemSize : 20, //单项尺寸
        barsize : 350, //控件尺寸
    };
}

Scrollbar.prototype = (function() {
    function setOptions(options) {
        for (var attr in options) {
            this.options[attr] = options[attr];
        }
        Refresh(this);
    }

    function Refresh(_this) {
        if (!_this.created)
            return;
        //设置控件高度
        _this.bar.style.height = _this.options.barsize + "px";
        //设置内容高度
        var ch = _this.options.total * _this.options.itemSize;
        _this.content.style.height = ch + "px";
    }

    //获取滚动位置
    function getPos() {
        var top = this.bar.scrollTop;
        var pos = parseInt(top / this.options.itemSize);
        return pos;
    }

    //每页可展示的数据数量
    function getPageItems() {
        return this.options.size / this.options.itemSize;
    }

    //滚动事件响应
    function OnScroll(_this) {
        var pos = _this.getPos();
        if (pos == _this.options.pos)
            return;
        _this.options.pos = pos;
        _this.onScroll(pos);
    }

    //滚动条创建
    function CreateAt(dom) {
        var _this = this;
        var bar = document.createElement("div");
        var content = document.createElement("div");
        bar.appendChild(content);
        bar.style.width = "1em";
        bar.style.overflowY = "scroll";
        bar.style.overflowX = "hidden";
        if (bar.attachEvent) {
            bar.attachEvent("onscroll", function() {
                OnScroll(_this);
            });
        } else {
            //firefox兼容
            bar.addEventListener("scroll", function() {
                OnScroll(_this);
            }, false);
        }
        content.style.backgroundColor = "white";
        content.style.width = "10em";
        this.bar = bar;
        this.content = content;
        if ( typeof (dom) == "string") {
            dom = document.getElementById(dom);
        }
        dom.innerHTML = "";
        dom.appendChild(this.bar);
        this.created = true;
        Refresh(this);
    }

    return {
        setOptions : setOptions,
        CreateAt : CreateAt,
        getPos : getPos,
        getPageItems : getPageItems,
        onScroll : null
        //模拟滚动条事件
    };
})();
