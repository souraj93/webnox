!function() {
    "use strict";
    var d = {
        d: function(c, b) {
            for (var a in b)
                d.o(b, a) && !d.o(c, a) && Object.defineProperty(c, a, {
                    enumerable: !0,
                    get: b[a]
                })
        },
        o: function(a, b) {
            return Object.prototype.hasOwnProperty.call(a, b)
        },
        r: function(a) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(a, Symbol.toStringTag, {
                value: "Module"
            }),
            Object.defineProperty(a, "__esModule", {
                value: !0
            })
        }
    }, b = {}, n, e;
    function c(a) {
        if (this.formData = {},
        this.tree = {},
        !(a instanceof FormData))
            return this;
        this.formData = a;
        const b = ()=>{
            const a = new Map;
            return a.largestIndex = 0,
            a.set = function(b, c) {
                "" === b ? b = a.largestIndex++ : /^[0-9]+$/.test(b) && (b = parseInt(b),
                a.largestIndex <= b && (a.largestIndex = b + 1)),
                Map.prototype.set.call(a, b, c)
            }
            ,
            a
        }
        ;
        this.tree = b();
        const c = /^(?<name>[a-z][-a-z0-9_:]*)(?<array>(?:\[(?:[a-z][-a-z0-9_:]*|[0-9]*)\])*)/i;
        for (const [e,d] of this.formData) {
            const a = e.match(c);
            if (a)
                if ("" === a.groups.array)
                    this.tree.set(a.groups.name, d);
                else {
                    const c = [...a.groups.array.matchAll(/\[([a-z][-a-z0-9_:]*|[0-9]*)\]/gi)].map(([b,a])=>a);
                    c.unshift(a.groups.name);
                    const e = c.pop();
                    c.reduce((c,a)=>{
                        if (/^[0-9]+$/.test(a) && (a = parseInt(a)),
                        c.get(a)instanceof Map)
                            return c.get(a);
                        const d = b();
                        return c.set(a, d),
                        d
                    }
                    , this.tree).set(e, d)
                }
        }
    }
    d.r(b),
    d.d(b, {
        date: function() {
            return l
        },
        dayofweek: function() {
            return p
        },
        email: function() {
            return h
        },
        enum: function() {
            return o
        },
        file: function() {
            return A
        },
        maxdate: function() {
            return x
        },
        maxfilesize: function() {
            return z
        },
        maxitems: function() {
            return r
        },
        maxlength: function() {
            return t
        },
        maxnumber: function() {
            return v
        },
        mindate: function() {
            return w
        },
        minfilesize: function() {
            return y
        },
        minitems: function() {
            return q
        },
        minlength: function() {
            return s
        },
        minnumber: function() {
            return u
        },
        number: function() {
            return k
        },
        required: function() {
            return f
        },
        requiredfile: function() {
            return g
        },
        tel: function() {
            return j
        },
        time: function() {
            return m
        },
        url: function() {
            return i
        }
    }),
    c.prototype.entries = function() {
        return this.tree.entries()
    }
    ,
    c.prototype.get = function(a) {
        return this.tree.get(a)
    }
    ,
    c.prototype.getAll = function(a) {
        if (!this.has(a))
            return [];
        const b = a=>{
            const c = [];
            if (a instanceof Map)
                for (const [e,d] of a)
                    c.push(...b(d));
            else
                "" !== a && c.push(a);
            return c
        }
        ;
        return b(this.get(a))
    }
    ,
    c.prototype.has = function(a) {
        return this.tree.has(a)
    }
    ,
    c.prototype.keys = function() {
        return this.tree.keys()
    }
    ,
    c.prototype.values = function() {
        return this.tree.values()
    }
    ,
    n = c;
    function a({rule: a, field: b, error: c, ...d}) {
        this.rule = a,
        this.field = b,
        this.error = c,
        this.properties = d
    }
    const f = function(b) {
        if (0 === b.getAll(this.field).length)
            throw new a(this)
    }
      , g = function(b) {
        if (0 === b.getAll(this.field).length)
            throw new a(this)
    }
      , h = function(b) {
        if (!b.getAll(this.field).every(a=>{
            if ((a = a.trim()).length < 6)
                return !1;
            if (-1 === a.indexOf("@", 1))
                return !1;
            if (a.indexOf("@") !== a.lastIndexOf("@"))
                return !1;
            const [d,b] = a.split("@", 2);
            if (!/^[a-zA-Z0-9!#$%&\'*+\/=?^_`{|}~\.-]+$/.test(d))
                return !1;
            if (/\.{2,}/.test(b))
                return !1;
            if (/(?:^[ \t\n\r\0\x0B.]|[ \t\n\r\0\x0B.]$)/.test(b))
                return !1;
            const c = b.split(".");
            if (c.length < 2)
                return !1;
            for (const a of c) {
                if (/(?:^[ \t\n\r\0\x0B-]|[ \t\n\r\0\x0B-]$)/.test(a))
                    return !1;
                if (!/^[a-z0-9-]+$/i.test(a))
                    return !1
            }
            return !0
        }
        ))
            throw new a(this)
    }
      , i = function(b) {
        const c = b.getAll(this.field);
        if (!c.every(a=>{
            if ("" === (a = a.trim()))
                return !1;
            try {
                return (a=>-1 !== ["http", "https", "ftp", "ftps", "mailto", "news", "irc", "irc6", "ircs", "gopher", "nntp", "feed", "telnet", "mms", "rtsp", "sms", "svn", "tel", "fax", "xmpp", "webcal", "urn"].indexOf(a))(new URL(a).protocol.replace(/:$/, ""))
            } catch {
                return !1
            }
        }
        ))
            throw new a(this)
    }
      , j = function(b) {
        if (!b.getAll(this.field).every(a=>(a = (a = a.trim()).replaceAll(/[()/.*#\s-]+/g, ""),
        /^[+]?[0-9]+$/.test(a))))
            throw new a(this)
    }
      , k = function(b) {
        if (!b.getAll(this.field).every(a=>(a = a.trim(),
        !!/^[-]?[0-9]+(?:[eE][+-]?[0-9]+)?$/.test(a) || !!/^[-]?(?:[0-9]+)?[.][0-9]+(?:[eE][+-]?[0-9]+)?$/.test(a))))
            throw new a(this)
    }
      , l = function(b) {
        if (!b.getAll(this.field).every(a=>{
            if (a = a.trim(),
            !/^[0-9]{4,}-[0-9]{2}-[0-9]{2}$/.test(a))
                return !1;
            const b = new Date(a);
            return !Number.isNaN(b.valueOf())
        }
        ))
            throw new a(this)
    }
      , m = function(b) {
        if (!b.getAll(this.field).every(e=>{
            const a = e.trim().match(/^([0-9]{2})\:([0-9]{2})(?:\:([0-9]{2}))?$/);
            if (!a)
                return !1;
            const b = parseInt(a[1])
              , c = parseInt(a[2])
              , d = a[3] ? parseInt(a[3]) : 0;
            return 0 <= b && b <= 23 && 0 <= c && c <= 59 && 0 <= d && d <= 59
        }
        ))
            throw new a(this)
    }
      , A = function(b) {
        if (!b.getAll(this.field).every(a=>a instanceof File && this.accept?.some(b=>/^\.[a-z0-9]+$/i.test(b) ? a.name.toLowerCase().endsWith(b.toLowerCase()) : (c=>{
            const b = []
              , a = c.match(/^(?<toplevel>[a-z]+)\/(?<sub>[*]|[a-z0-9.+-]+)$/i);
            if (a) {
                const c = a.groups.toplevel.toLowerCase()
                  , d = a.groups.sub.toLowerCase();
                for (const [f,e] of (()=>{
                    const a = new Map;
                    return a.set("jpg|jpeg|jpe", "image/jpeg"),
                    a.set("gif", "image/gif"),
                    a.set("png", "image/png"),
                    a.set("bmp", "image/bmp"),
                    a.set("tiff|tif", "image/tiff"),
                    a.set("webp", "image/webp"),
                    a.set("ico", "image/x-icon"),
                    a.set("heic", "image/heic"),
                    a.set("asf|asx", "video/x-ms-asf"),
                    a.set("wmv", "video/x-ms-wmv"),
                    a.set("wmx", "video/x-ms-wmx"),
                    a.set("wm", "video/x-ms-wm"),
                    a.set("avi", "video/avi"),
                    a.set("divx", "video/divx"),
                    a.set("flv", "video/x-flv"),
                    a.set("mov|qt", "video/quicktime"),
                    a.set("mpeg|mpg|mpe", "video/mpeg"),
                    a.set("mp4|m4v", "video/mp4"),
                    a.set("ogv", "video/ogg"),
                    a.set("webm", "video/webm"),
                    a.set("mkv", "video/x-matroska"),
                    a.set("3gp|3gpp", "video/3gpp"),
                    a.set("3g2|3gp2", "video/3gpp2"),
                    a.set("txt|asc|c|cc|h|srt", "text/plain"),
                    a.set("csv", "text/csv"),
                    a.set("tsv", "text/tab-separated-values"),
                    a.set("ics", "text/calendar"),
                    a.set("rtx", "text/richtext"),
                    a.set("css", "text/css"),
                    a.set("htm|html", "text/html"),
                    a.set("vtt", "text/vtt"),
                    a.set("dfxp", "application/ttaf+xml"),
                    a.set("mp3|m4a|m4b", "audio/mpeg"),
                    a.set("aac", "audio/aac"),
                    a.set("ra|ram", "audio/x-realaudio"),
                    a.set("wav", "audio/wav"),
                    a.set("ogg|oga", "audio/ogg"),
                    a.set("flac", "audio/flac"),
                    a.set("mid|midi", "audio/midi"),
                    a.set("wma", "audio/x-ms-wma"),
                    a.set("wax", "audio/x-ms-wax"),
                    a.set("mka", "audio/x-matroska"),
                    a.set("rtf", "application/rtf"),
                    a.set("js", "application/javascript"),
                    a.set("pdf", "application/pdf"),
                    a.set("swf", "application/x-shockwave-flash"),
                    a.set("class", "application/java"),
                    a.set("tar", "application/x-tar"),
                    a.set("zip", "application/zip"),
                    a.set("gz|gzip", "application/x-gzip"),
                    a.set("rar", "application/rar"),
                    a.set("7z", "application/x-7z-compressed"),
                    a.set("exe", "application/x-msdownload"),
                    a.set("psd", "application/octet-stream"),
                    a.set("xcf", "application/octet-stream"),
                    a.set("doc", "application/msword"),
                    a.set("pot|pps|ppt", "application/vnd.ms-powerpoint"),
                    a.set("wri", "application/vnd.ms-write"),
                    a.set("xla|xls|xlt|xlw", "application/vnd.ms-excel"),
                    a.set("mdb", "application/vnd.ms-access"),
                    a.set("mpp", "application/vnd.ms-project"),
                    a.set("docx", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"),
                    a.set("docm", "application/vnd.ms-word.document.macroEnabled.12"),
                    a.set("dotx", "application/vnd.openxmlformats-officedocument.wordprocessingml.template"),
                    a.set("dotm", "application/vnd.ms-word.template.macroEnabled.12"),
                    a.set("xlsx", "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"),
                    a.set("xlsm", "application/vnd.ms-excel.sheet.macroEnabled.12"),
                    a.set("xlsb", "application/vnd.ms-excel.sheet.binary.macroEnabled.12"),
                    a.set("xltx", "application/vnd.openxmlformats-officedocument.spreadsheetml.template"),
                    a.set("xltm", "application/vnd.ms-excel.template.macroEnabled.12"),
                    a.set("xlam", "application/vnd.ms-excel.addin.macroEnabled.12"),
                    a.set("pptx", "application/vnd.openxmlformats-officedocument.presentationml.presentation"),
                    a.set("pptm", "application/vnd.ms-powerpoint.presentation.macroEnabled.12"),
                    a.set("ppsx", "application/vnd.openxmlformats-officedocument.presentationml.slideshow"),
                    a.set("ppsm", "application/vnd.ms-powerpoint.slideshow.macroEnabled.12"),
                    a.set("potx", "application/vnd.openxmlformats-officedocument.presentationml.template"),
                    a.set("potm", "application/vnd.ms-powerpoint.template.macroEnabled.12"),
                    a.set("ppam", "application/vnd.ms-powerpoint.addin.macroEnabled.12"),
                    a.set("sldx", "application/vnd.openxmlformats-officedocument.presentationml.slide"),
                    a.set("sldm", "application/vnd.ms-powerpoint.slide.macroEnabled.12"),
                    a.set("onetoc|onetoc2|onetmp|onepkg", "application/onenote"),
                    a.set("oxps", "application/oxps"),
                    a.set("xps", "application/vnd.ms-xpsdocument"),
                    a.set("odt", "application/vnd.oasis.opendocument.text"),
                    a.set("odp", "application/vnd.oasis.opendocument.presentation"),
                    a.set("ods", "application/vnd.oasis.opendocument.spreadsheet"),
                    a.set("odg", "application/vnd.oasis.opendocument.graphics"),
                    a.set("odc", "application/vnd.oasis.opendocument.chart"),
                    a.set("odb", "application/vnd.oasis.opendocument.database"),
                    a.set("odf", "application/vnd.oasis.opendocument.formula"),
                    a.set("wp|wpd", "application/wordperfect"),
                    a.set("key", "application/vnd.apple.keynote"),
                    a.set("numbers", "application/vnd.apple.numbers"),
                    a.set("pages", "application/vnd.apple.pages"),
                    a
                }
                )())
                    ("*" === d && e.startsWith(c + "/") || e === a[0]) && b.push(...f.split("|"))
            }
            return b
        }
        )(b).some(b=>(b = "." + b.trim(),
        a.name.toLowerCase().endsWith(b.toLowerCase()))))))
            throw new a(this)
    }
      , o = function(b) {
        if (!b.getAll(this.field).every(a=>this.accept?.some(b=>a === String(b))))
            throw new a(this)
    }
      , p = function(b) {
        if (!b.getAll(this.field).every(b=>{
            const c = 0 === (a = new Date(b).getDay()) ? 7 : a;
            var a;
            return this.accept?.some(a=>c === parseInt(a))
        }
        ))
            throw new a(this)
    }
      , q = function(b) {
        if (b.getAll(this.field).length < parseInt(this.threshold))
            throw new a(this)
    }
      , r = function(b) {
        const c = b.getAll(this.field);
        if (parseInt(this.threshold) < c.length)
            throw new a(this)
    }
      , s = function(c) {
        const d = c.getAll(this.field);
        let b = 0;
        if (d.forEach(a=>{
            "string" == typeof a && (b += a.length)
        }
        ),
        0 !== b && b < parseInt(this.threshold))
            throw new a(this)
    }
      , t = function(c) {
        const d = c.getAll(this.field);
        let b = 0;
        if (d.forEach(a=>{
            "string" == typeof a && (b += a.length)
        }
        ),
        parseInt(this.threshold) < b)
            throw new a(this)
    }
      , u = function(b) {
        if (!b.getAll(this.field).every(a=>!(parseFloat(a) < parseFloat(this.threshold))))
            throw new a(this)
    }
      , v = function(b) {
        if (!b.getAll(this.field).every(a=>!(parseFloat(this.threshold) < parseFloat(a))))
            throw new a(this)
    }
      , w = function(b) {
        if (!b.getAll(this.field).every(a=>(a = a.trim(),
        !(/^[0-9]{4,}-[0-9]{2}-[0-9]{2}$/.test(a) && /^[0-9]{4,}-[0-9]{2}-[0-9]{2}$/.test(this.threshold) && a < this.threshold))))
            throw new a(this)
    }
      , x = function(b) {
        if (!b.getAll(this.field).every(a=>(a = a.trim(),
        !(/^[0-9]{4,}-[0-9]{2}-[0-9]{2}$/.test(a) && /^[0-9]{4,}-[0-9]{2}-[0-9]{2}$/.test(this.threshold) && this.threshold < a))))
            throw new a(this)
    }
      , y = function(c) {
        const d = c.getAll(this.field);
        let b = 0;
        if (d.forEach(a=>{
            a instanceof File && (b += a.size)
        }
        ),
        b < parseInt(this.threshold))
            throw new a(this)
    }
      , z = function(c) {
        const d = c.getAll(this.field);
        let b = 0;
        if (d.forEach(a=>{
            a instanceof File && (b += a.size)
        }
        ),
        parseInt(this.threshold) < b)
            throw new a(this)
    };
    window.swv = {
        validators: b,
        validate: (f,g,h={})=>{
            const e = (f.rules ?? []).filter(({rule: a, ...c})=>"function" == typeof b[a] && ("function" != typeof b[a].matches || b[a].matches(c, h)));
            if (!e.length)
                return new Map;
            const c = new n(g)
              , d = e.reduce((d,g)=>{
                const {rule: f, ...e} = g;
                if (d.get(e.field)?.error)
                    return d;
                try {
                    b[f].call({
                        rule: f,
                        ...e
                    }, c)
                } catch (b) {
                    if (b instanceof a)
                        return d.set(e.field, b)
                }
                return d
            }
            , new Map);
            for (const a of c.keys())
                d.has(a) || d.set(a, {
                    validInputs: c.getAll(a)
                });
            return d
        }
        ,
        ...null !== (e = window.swv) && void 0 !== e ? e : {}
    }
}()
