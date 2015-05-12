/*! appcan v0.1.3 |  from 3g2win.com */
appcan.define("listview", function(a, b, c) {
    var d = '<li class="ubb ub bc-border bc-text ub-ac lis" <%if(group){%>data-group="<%=group%>"<%}%> <%if(data.id){%>id="<%=data.id%>"<%}%> data-index="<%=index%>"><%if(option.hasCheckbox && option.align=="left"){%><div class="checkbox umar-r"><input type="checkbox" class="uabs ub-con" ></div><%}%><%if(option.hasRadiobox && option.align=="left"){%><div class="radiobox umar-r" name=""><input type="radio" class="uabs ub-con" name="lv_radio_<%=option.id%>"></div><%}%><%if(option.hasIcon && data.icon){%><div class="<%if(option.hasSmallIcon){%>lis-icon-ss<%}else{%>lis-icon-s<%}%> ub-img" style="background-image:url(<%=data.icon%>)"></div><%}%><div class="lv_title ub-f1 marg-l ub ub-ver ut-m line<%=option.multiLine%>"><%=data.title%></div><%if(option.hasSubTitle){%><div class="tx-r sc-text ulev-1 umar-r lv_subTitle"><%=data.subTitle%></div><%}%><%if(option.hasControl && data.switchBtn){%><div class="switch uba bc-border <%if(data.switchBtn.mini){%>switch-mini<%}%>" data-checked="<%=data.switchBtn.value%>"><div class="switch-btn sc-bg-active "></div></div><%}%><%if(option.hasAngle && !(option.hasControl && data.switchBtn)){%><div class="fa fa-angle-right ulev2 sc-text"></div><%}%><%if(option.hasCheckbox && option.align=="right"){%><div class="checkbox  umar-l"><input type="checkbox" class="uabs ub-con"></div><%}%><%if(option.hasRadiobox && option.align=="right"){%><div class="radiobox umar-l"><input type="radio" class="uabs ub-con" name="lv_radio_<%=option.id%>"></div><%}%></li>',
        e = '<li id="lv_group_<%=data.groupId%>" class="ubb ub bc-border bc-text sc-bg-active ub-ac lis group" data-index="<%=index%>"><%=data.title%></li>',
        f = '<li style="border-top: 1px solid #9F9F9F; margin-top:-1px"' 
        + '<%if(data.id){%>' 
        + 'id="<%=data.id%>"<%}%> ' 
        + 'class="ubb ub bc-border t-bla ub-ac lis" ' 
        + 'data-index="<%=index%>">' 
        + '<%if(option.hasCheckbox && option.align=="left"){%>' 
        + '<div class="checkbox umar-r">' 
        + '<input type="checkbox" class="uabs ub-con" ></div><%}%>' 
        + '<%if(option.hasRadiobox && option.align=="left"){%>' 
        + '<div class="radiobox umar-r" name="">' 
        + '<input type="radio" class="uabs ub-con" name="lv_radio_<%=option.id%>"></div><%}%>' 
        + '<%if(option.hasIcon && data.icon){%>' 
        + '<ul class="ub ub ub-ver"><li class="">' 
        + '<div class="lis-icon ub-img" style="background-image:url(<%=data.icon%>)"></div>' 
        + '<div class="ulev-1 bc-text umar-t">' 
        + '<%=data.icontitle%></div></li></ul><%}%>' 
        + '<ul class="ub-f1 ub ub-pj ub-ac">' 
        + '<%if(option.hasId){%><ul class="ub ub-ver marg-l" style="padding:0 .5em 0 0;">' 
        + '<li class="bc-text ub ub-ver ut-m line<%=option.multiLine%>">' 
        + '<%=data.id%></li>' 
        + '<%if(data.note){%>' 
        + '<li class="ulev-2 sc-text1 uinn3"><%=data.note%>' 
        + '</li><%}%></ul><%}%>' 
        + '<ul class="ub-f1 ub ub-ver marg-l">' 
        + '<li class="bc-text ub ub-ver ut-m line<%=option.multiLine%>">' 
        + '<%=data.title%></li><%if(data.describe){%>' 
        + '<li class="ulev-1 sc-text1 uinn3"><%=data.describe%>' 
        + '</li><%}%>' 
        + '<%if(data.note){%>' 
        + '<li class="ulev-2 sc-text1 uinn3"><%=data.note%></li><%}%>' 
        + '</ul><%if(option.hasSubTitle){%>' 
        + '<ul class="ub ub-ver ub-ae umar-r"><%if(data.subTitle){%>' 
        + '<li class="bc-text lv_subTitle"><%=data.subTitle%></li><%}%>' 
        + '<%if(data.subDescribe){%><li class="ulev-1 sc-text1 uinn3">' 
        + '<%=data.subDescribe%></li><%}%><%if(data.subNote){%>' 
        + '<li class="ulev-2 sc-text1 uinn3"><%=data.subNote%></li><%}%>' 
        + '</ul><%}%><%if(option.hasControl && data.switchBtn){%>' 
        + '<div class="switch uba bc-border <%if(data.switchBtn.mini){%>' 
        + 'switch-mini<%}%>" data-checked="<%=data.switchBtn.value%>">' 
        + '<div class="switch-btn sc-bg-active "></div></div><%}%>' 
        + '<%if(option.hasAngle && !(option.hasControl && data.switchBtn)){%>' 
        + '<li class="fa fa-angle-right ulev2"></li><%}%>' 
        + '<%if(option.hasCheckbox && option.align=="right"){%>' 
        + '<div class="checkbox  umar-l">' 
        + '<input type="checkbox" class="uabs ub-con"></div><%}%>' 
        + '<%if(option.hasRadiobox && option.align=="right"){%>' 
        + '<div class="radiobox umar-l">' 
        + '<input type="radio" class="uabs ub-con" name="lv_radio_<%=option.id%>"></div><%}%>' 
        + '</ul></li>',
        g = appcan.view.template(d),
        h = appcan.view.template(e),
        i = appcan.view.template(f),
        j = 1;
    function k() {
        return "ontouchstart" in window ?
        void 0 : !0
    }

    function l(b) {
        appcan.extend(this, appcan.eventEmitter);
        var c = this;
        c.option = a.extend({
            selector : "body",
            type : "thinLine",
            hasIcon : !0,
            hasAngle : !0,
            hasSubTitle : !1,
            hasTouchEffect : !0,
            hasCheckbox : !1,
            hasRadiobox : !1,
            hasControl : !1,
            hasGroup : !1,
            align : "left",
            multiLine : 1,
            touchClass : "sc-bg-active",
            id : j++
        }, b, !0), c.ele = a(c.option.selector), c.option.data && c.set(data)
    }


    l.prototype = {
        buildListview : function(b, c) {
            var d = a("<ul style='overflow:hidden'></ul>"),
                e = this,
                f = "thinLine" == e.option.type ? g : i;
            for (var h in b) {
                var j = a(f({
                    data : b[h],
                    option : e.option,
                    index : h,
                    group : c
                }));
                j[0].lv_data = b[h], j.on("tap", function(a) {
                    e.itemClick(a)
                }), j.on(k() ? "mousedown" : "touchstart", function(a) {
                    e.touchItem(a)
                }), j.on("longTap", function(a) {
                    e.longTapItem(a)
                }), j.on("cancleTap", function(a) {
                    e.longTapItem(a)
                }), (e.option.hasCheckbox || e.option.hasRadiobox) && j.find("input").on("change", function(a) {
                    j[0].lv_data.checked = a.currentTarget.checked, e.option.hasCheckbox && e.emit("checkbox:change", e, j, j[0].lv_data), e.option.hasRadiobox && e.emit("radio:change", e, j, j[0].lv_data)
                }), d.append(j)
            }
            var l = a(".switch", d);
            return appcan.switchBtn(l, function(a, b) {
                var c = a.parent();
                c[0].lv_data.switchBtn.value = b, e.emit("switch:change", e, c, c[0].lv_data)
            }), d
        },
        buildGroupview : function(b) {
            var c = this,
                d = a("<ul></ul>");
            for (var e in b) {
                var f = a(h({
                    data : b[e],
                    option : c.option,
                    index : e
                }));
                d.append(f), d.append(c.buildListview(b[e].items, e))
            }
            return d
        },
        add : function(a, b) {
            var c = this,
                d = c.buildListview(a);
            if (b || 1 == b)
                c.ele.append(d);
            else {
                var e = c.ele.children().first();
                e.prepend(d)
            }
            return c
        },
        set : function(a) {
            var b = this,
                c;
            return c = b.option.hasGroup ? b.buildGroupview(a) : b.buildListview(a), b.ele.html(c), b
        },
        itemClick : function(b) {
            var c = this,
                d = a(b.currentTarget);
            if (this.emit("click", c, d, d[0].lv_data, a(b.target)), d.removeClass(this.option.touchClass), c.option.hasCheckbox) {
                if (a(b.target).is("input[type=checkbox]"))
                    return;
                var e = d.find("input");
                e[0].checked = !e[0].checked
            }
            if (c.option.hasRadiobox) {
                if (a(b.target).is("input[type=radio]"))
                    return;
                var f = d.find("input");
                f[0].checked = !0
            }
        },
        touchItem : function(b) {
            if (this.option.hasTouchEffect) {
                var c = this,
                    d = a(b.currentTarget);
                if (d[0].lv_data.switchBtn && c.option.hasControl)
                    return;
                d.addClass(c.option.touchClass), setTimeout(function() {
                    d.removeClass(c.option.touchClass)
                }, 300)
            }
        },
        longTapItem : function(b) {
            if (this.option.hasTouchEffect) {
                var c = a(b.currentTarget);
                c.removeClass(this.option.touchClass)
            }
        },
        updateItem : function(b, c, d) {
            switch(c) {
            case"title":
                a(".lv_title", b).html(d);
                break;
            case"subTitle":
                a(".lv_subTitle", b).html(d)
            }
        }
    }, c.exports = function(a) {
        return new l(a)
    }
});
