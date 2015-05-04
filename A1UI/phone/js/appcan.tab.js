/*! appcan v0.1.6 |  from 3g2win.com */
appcan.define("tab", function(a, b, c) {
    var d = '<div class="ulev-1 ub ub-f1" data-index="<%=index%>">    <div class="ub-f1 ub ub-ver item ub-ac sc-text-tab">    <%if(option.hasIcon){%><div class="ub-f1 fa <%=data.icon%> fa-2x tx-c"></div><%}%>    <%if(option.hasLabel){%><div class="ulev tx-c"><%=data.label%></div><%}%>    </div>    <%if(option.hasBadge && data.badge){%><div class="ulev bc-text-head sc-bg-alert tab_badge" id="<%="badge_"+index%>"><%=data.badge%></div><%}%>    </div>',
        e = appcan.view.template(d);
    function f(b) {
        appcan.extend(this, appcan.eventEmitter);
        var c = this;
        c.option = a.extend({
            selector : null,
            hasIcon : !0,
            hasLabel : !0,
            hasAnim : !0,
            hasBadge : !0,
            itemName : "TAB" + parseInt(10 * Math.random()),
            index : 0
        }, b, !0), c.option.selector && c.option.data && (c.ele = a(c.option.selector), c.option.data && c.set(c.option.data, c.option.index))
    }
    f.prototype = {
        focusAnim : function(b, c) {
            var d = this;
            if (d.option.hasAnim) {
                var e = window.getComputedStyle(d.ele[0], null),
                    f = parseInt(parseInt(e.width) / d.itemCount);
                d.focus = d.focus || a('<div class="focus utra bc-head"></div>'), d.focus.css("width", f), d.focus.css("-webkit-transform", "translateX(" + b * f + "px)"), c && c.append(d.focus)
            }
        },
        focusText : function(b) {
            var c = this;
            if (!(c.option.hasAnim && c.option.hasIcon && c.option.hasLabel)) {
                var d = a(".item", c.ele);
                d.length && (d.removeClass("sc-text-active"), a(d[b]).addClass("sc-text-active"))
            }
        },
        set : function(b, c) {
            var d = this;
            d.itemCount = b.length, d.focus && (d.focus = null), d.ele.empty();
            var f = a('<div class="uf t-bla ub" ></div>');
            d.option.hasIcon && d.option.hasLabel ? f.addClass("tab_m") : d.option.hasLabel ? f.addClass("tab_l") : d.option.hasIcon && f.addClass("tab_i"), d.focusAnim(c, f);
            for (var g in b) {
                var h = a(e({
                    data : b[g],
                    option : d.option,
                    index : g
                }));
                h.on("tap", function(a) {
                    d.itemClick(a)
                }), f.append(h)
            }
            return d.ele.append(f), d.focusText(c), d
        },
        badge : function(b, c) {
            a("#badge_" + b, self.ele).html(c)
        },
        itemClick : function(b) {
            var c = this,
                d = a(b.currentTarget),
                e = parseInt(d.attr("data-index"));
            c.focusAnim(e), c.focusText(e), this.emit("click", this, d, e)
        },
        moveTo : function(a) {
            var b = this;
            b.focusAnim(a), b.focusText(a)
        }
    }, c.exports = function(a) {
        return new f(a)
    }
}); 