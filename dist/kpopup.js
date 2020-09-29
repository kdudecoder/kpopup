! function ()
{
	this.kpopup = function ()
	{
		arguments[0] && "object" == typeof arguments[0] && (this.options = function (n, e)
		{
			var t;
			for (t in e) Object.prototype.hasOwnProperty.call(e, t) && (n[t] = e[t]);
				return n
		}(
		{
			windowTitle: "",
			target: "",
			payload: {},
			width: 414,
			height: 640
		}, arguments[0]))
	}, 
	kpopup.prototype.open = function ()
	{
		if ("" == this.options.target) return alert("Invalid Target. Please try again!"), !1;
		var n = this.options.target,
		p = this.options.payload,
		e = null != window.screenLeft ? window.screenLeft : screen.left,
		t = null != window.screenTop ? window.screenTop : screen.top;
		var u = "";
		for (var k in p) {
			u += (u == '')? '?':'&';			
			u += k + "=" + encodeURIComponent(p[k]);
		}
		n = (n.slice(n.length - 1) == '/')?n.slice(0, n.length - 1):n;
		n+=u;
		width = window.innerWidth ? window.innerWidth : document.documentElement.clientWidth ? document.documentElement.clientWidth : screen.width, height = window.innerHeight ? window.innerHeight : document.documentElement.clientHeight ? document.documentElement.clientHeight : screen.height;
		var i = width / 2 - 207 + e,
		o = height / 2 - 320 + t,
		w = this.options.width,
		h = this.options.height,
		wt = this.options.windowTitle,
		r = window.open(n,wt,"scrollbars=yes,width="+w+",height="+h+",top="+o+",left="+i);
		window.focus && r.focus()
	}
}();