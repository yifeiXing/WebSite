//cfg start


var CFG = function() {
    function e(e, t) {
        return e = e || 0,
        t = t || 300,
        function(i, p, a, g) {
            var s = p.cur + a.z - e;
            if (s >= -50) {
                var c = s / (t / a.speed);
                c > 1 && (c = 1),
                c < 0 && (c = 0),
                n.set(this, {
                    T3: {
                        opacity: 1 - c
                    }
                })
            }
        }
    }
    var t = {},
    i = function(e, t, i, p) {
        var n = [];
        e = $.isArray(e) ? e: [e];
        for (var a = 0; a < e.length; a++) n.push((p || "images") + "/" + (t ? t + "/": "") + e[a] + (/\.(jpg|gif|mp3|mp4)$/.test(e[a]) ? "": i ? "." + i: ".png"));
        return n
    };
    // t.all = [];
    // var p = ["bg.jpg", "m1", "stone1", "stone2", "stone3", "stone4", "stone5", "stone6", "stone7", "txt1", "arrow", "txt2", "txt3", "txt4", "yan1", "yan2", "guang2", "guang3", "light"];
    // Array.prototype.push.apply(t.all, i(p, "1")),
    // p = ["bg.jpg", "diqiu", "dot", "gts", "ws","jds","yyzs","girl3","xh","xh2","xh3","girl4", "girl5", "guang", "haishui", "huichen1", "huichen2", "starlight", "tengman4", "tengman5", "tengman", "txt1", "txt2", "txt3", "txt4", "yezi1", "yezi2", "yezi3", "yezi4", "yezi5", "yezi6", "yezi7", "yezi8"],
    // Array.prototype.push.apply(t.all, i(p, "2")),
    // p = ["bg.jpg", "clock", "cloud2", "cloud3", "cloud4", "crown", "deng", "gezi2", "gezi3", "girl1", "girl2", "girl3", "girl4", "girl6", "girl7", "girl8", "girl9", "girl10", "gongjian", "gongmen", "gongmen2", "haojiao", "huaban1", "huaban2", "huaban3", "huaban4", "huaban5", "huaban6", "huaban7", "huilang", "shuqin", "stage", "txt1", "txt2", "txt3", "zhuzi", "girls"],
    // Array.prototype.push.apply(t.all, i(p, "3")),
    // t.end = [],
    // p = ["logo", "btn", "vs", "txt", "restart"],
    // p.push(navigator.userAgent.match(/Android (.+); /) ? "bg1.jpg": "bg.jpg"),
    // Array.prototype.push.apply(t.end, i(p, "end")),
    // t.option = {};
    var n = TweenMax,
    a = 0,
    g = 9500,
    s = 121500,
    c = 40600; 
    return t.objs = {
        group1: {
            start: 0,
            type: "group",
            len: g + 500,
            child: {
                bg: {
                    img: "1/ysybg.jpg",
                    w: 800,
                    h: 800,
                    dir: 1,
                    len: g,
                    z: -1e4,
                    speed: 0.1,
                    s: 20
                },
                txt1: {
                    img: "1/txt1.png",
                    w: 357,
                    h: 69,
                    dir: 1,
                    z: 0,
                    speed: 1.5,
                    s: .5,
                    handle: e()
                },
                // arrow: {
                //     img: "1/arrow.png",
                //     w: 20,
                //     h: 30,
                //     y: -60,
                //     z: 0,
                //     speed: 1.5,
                //     s: .5,
                //     // mc: !0,
                //     vTiles: 1,
                //     hTiles: 3,
                //     duration: 500,
                //     handle: e()
                // },
                txt2: {
                    img: "1/txt2.png",
                    w: 356,
                    h: 69,
                    dir: 1,
                    z: -1200,
                    speed: 1,
                    s: .5,
                    effect: "opacity",
                    zlen: 1e3,
                    zdua: 800,
                    handle: e()
                },
                stones1: {
                    type: "particle",
                    size: 9,
                    rotate: 4,
                    z: -2500,
                    z1: -4500,
                    R: 200,
                    R1: 400,
                    start: 0,
                    len: 5e3,
                    effect: "opacity",
                    zlen: 3e3,
                    zdua: 800,
                    speed: 1,
                    img: [{
                        url: "1/stone1.png",
                        w: 297,
                        h: 236
                    },
                    {
                        url: "1/stone2.png",
                        w: 235,
                        h: 172
                    },
                    {
                        url: "1/stone3.png",
                        w: 297,
                        h: 236
                    },
                    {
                        url: "1/stone4.png",
                        w: 174,
                        h: 195
                    },
                    {
                        url: "1/stone8.png",
                        w: 179,
                        h: 190
                    }]
                },
                yans1: {
                    type: "particle",
                    size: 4,
                    rotate: 2,
                    z: -2700,
                    z1: -4300,
                    R: 100,
                    R1: 250,
                    start: 0,
                    len: 5e3,
                    effect: "opacity",
                    speed: 1,
                    img: [{
                        url: "1/yan1.png",
                        w: 368,
                        h: 355,
                        s: .65
                    },
                    {
                        url: "1/yan2.png",
                        w: 321,
                        h: 331,
                        s: .65
                    }]
                },
                txt3: {
                    img: "1/txt3.png",
                    w: 266,
                    h: 69,
                    dir: 1,
                    z: -4e3,
                    speed: 1,
                    s: .5,
                    effect: "opacity",
                    zlen: 1500,
                    zdua: 800,
                    handle: e()
                },
                stones2: {
                    type: "particle",
                    size: 9,
                    rotate: 2,
                    z: -5500,
                    z1: -7500,
                    R: 200,
                    R1: 400,
                    start: 0,
                    len: 8e3,
                    effect: "opacity",
                    zlen: 3e3,
                    zdua: 800,
                    img: [{
                        url: "1/stone5.png",
                        w: 175,
                        h: 150
                    },
                    {
                        url: "1/stone6.png",
                        w: 104,
                        h: 93
                    },
                    {
                        url: "1/stone7.png",
                        w: 60,
                        h: 55
                    },
                    {
                        url: "1/stone1.png",
                        w: 297,
                        h: 236
                    },
                    {
                        url: "1/stone9.png",
                        w: 157,
                        h: 184
                    }]
                },
                yans2: {
                    type: "particle",
                    size: 5,
                    rotate: 2,
                    z: -5700,
                    z1: -7300,
                    R: 50,
                    R1: 250,
                    start: 3e3,
                    len: 6e3,
                    effect: "opacity",
                    speed: 1,
                    img: [{
                        url: "1/yan1.png",
                        w: 368,
                        h: 355,
                        s: .65
                    },
                    {
                        url: "1/yan2.png",
                        w: 321,
                        h: 331,
                        s: .65
                    }]
                },
                txt4: {
                    img: "1/text4.png",
                    w: 267,
                    h: 27,
                    dir: 1,
                    z: -5e3,
                    speed: 1,
                    s: .5,
                    effect: "opacity",
                    zlen: 1500,
                    zdua: 800,
                    handle: e()
                },
                dy_logo: {
                    img: "2/dy_logo.png",
                    w: 400,
                    h: 400,
                    dir: 1,
                    z: -8e3,
                    speed: 1,
                    s: .5,
                    effect: "opacity",
                    zlen: 1500,
                    zdua: 800,
                    handle: e()
                },
                guang2: {
                    type: "group",
                    start: a + 5e3,
                    len: 6e3,
                    x: 0,
                    y: 0,
                    handle: function(e, t, i, p) {
                        n.set(this, {
                            T3: {
                                rotationZ: p * Math.PI / 1e4
                            }
                        })
                    },
                    child: {
                        g: {
                            img: "1/guang2.png",
                            w: 720,
                            h: 808,
                            dir: 1,
                            y: -60,
                            x: 80,
                            start: 4e3,
                            z: -8980,
                            speed: 1,
                            s: .7,
                            effect: "opacity",
                            zlen: 5e3,
                            zdua: 800,
                            handle: function(e, t, i, p) {
                                n.set(this, {
                                    T3: {
                                        rotate: p * Math.PI / 1e4
                                    }
                                })
                            }
                        }
                    }
                },
                guang3: {
                    img: "1/guang3.png",
                    w: 1e3,
                    h: 1e3,
                    dir: 1,
                    y: 0,
                    x: 0,
                    start: 4e3,
                    z: -9e3,
                    speed: 1,
                    s: .7,
                    effect: "opacity",
                    zlen: 5e3,
                    zdua: 800,
                    handle: function(e, t, i, p) {
                        n.set(this, {
                            T3: {
                                rotate: p * Math.PI / 5e3
                            }
                        })
                    }
                },
                lights: {
                    type: "particle",
                    size: 30,
                    rotate: 1,
                    z: -7e3,
                    z1: -8800,
                    R: 100,
                    R1: 300,
                    Rofs: Math.PI / 2,
                    start: 4e3,
                    len: 6e3,
                    effect: "opacity",
                    zdua: 3e3,
                    zlen: 800,
                    speed: 1,
                    img: [{
                        url: "1/light.png",
                        w: 3,
                        h: 50
                    }]
                },
                m1: {
                    img: "1/m1.png",
                    w: 461,
                    h: 577,
                    dir: 1,
                    y: -65,
                    start: 4e3,
                    z: -9e3,
                    speed: 1,
                    s: .8,
                    effect: "opacity",
                    zlen: 5e3,
                    zdua: 800
                },
                yans3: {
                    type: "particle",
                    size: 3,
                    rotate: 2,
                    y: -308,
                    x: 0,
                    z: -8900,
                    z1: -9100,
                    R: 0,
                    R1: 50,
                    start: 5e3,
                    len: 6e3,
                    effect: "opacity",
                    speed: 1,
                    img: [{
                        url: "1/yan1.png",
                        w: 467,
                        h: 541,
                        s: .35
                    },
                    {
                        url: "1/yan2.png",
                        w: 486,
                        h: 418,
                        s: .35
                    },
                    {
                        url: "1/yun1.png",
                        w: 340,
                        h: 183,
                        s: .35
                    }]
                }
            }
        },
        group2: {
            start: a += g,
            type: "group",
            len: s + 600,
            s:10,
            child: {
                bg: {
                    img: "2/bg.jpg",
                    w: 700,
                    h: 700,
                    dir: 1,
                    x:-350,
                    len: s,
                    z: -a - 1e4,
                    speed: .02,
                    s: 20
                },
                gts_text: {
                    img: "2/gds_text.png",
                    w: 676,
                    h: 275,
                    dir: 1,
                    y:-140,
                    z: -a - 100,
                    speed: .15,
                    s: .5,
                    effect: "opacity",
                    start: a + 0
                },
                gts: {
                    img: "2/gts.png",
                    w: 750,
                    h: 447,
                    dir: 1,
                    z: -a - 100,
                    speed: .15,
                    s: .5,
                    effect: "opacity",
                    start: a + 0
                },
                gq: {
                    img: "2/gq.png",
                    w: 355,
                    h:200,
                    x:100,
                    dir: 1,
                    z: -a - 900,
                    speed: .15,
                    s: 1.85,
                    s: .885,
                    effect: "opacity",
                    start: a + 0
                },
                gqk_text: {
                    img: "2/gqk_text.png",
                    w: 450,
                    h:190,
                    y:-220,
                    dir: 1,
                    z: -a - 1300,
                    speed: .15,
                    s: 1.85,
                    s: .885,
                    effect: "opacity",
                    start: a + 0
                },
                ws: {
                    img: "2/ws.png",
                    w: 715,
                    h: 352,
                    dir: 1,
                    x: -40,
                    y:-50,
                    z: -a - 1300,
                    speed: .15,
                    s: .5,
                    effect: "opacity",
                    start: a + 0
                },
                jds: {
                    img: "2/jds.png",
                    w: 682,
                    h: 816,
                    dir: 1,
                    x: -40,
                    z: -a - 2500,
                    speed: .15,
                    s: .5,
                    effect: "opacity",
                    start: a + 0
                },
                jds_text: {
                    img: "2/jds_text.png",
                    w: 699,
                    h: 277,
                    dir: 1,
                    y: -230,
                    z: -a - 2500,
                    speed: .15,
                    s: .5,
                    effect: "opacity",
                    start: a + 0
                },
                yan1s: {
                    img: "2/yan1s.png",
                    w: 726,
                    h: 593,
                    dir: 1,
                    x: -40,
                    z: -a - 1900,
                    speed: .15,
                    s: .5,
                    effect: "opacity",
                    start: a + 0
                },
                yan2s: {
                    img: "2/huichen2.png",
                    w: 409,
                    h: 473,
                    dir: 1,
                    x: 80,
                    z: -a - 2100,
                    speed: .15,
                    s: .5,
                    effect: "opacity",
                    start: a + 0
                },
                xh: {
                    img: "2/xh.png",
                    w: 186,
                    h: 180,
                    dir: 1,
                    x: 80,
                    y: 80,
                    z: -a - 2100,
                    speed: .15,
                    s: .5,
                    effect: "opacity",
                    start: a + 0
                },
                xh2: {
                    img: "2/xh2.png",
                    w: 65,
                    h: 85,
                    dir: 1,
                    x: -100,
                    y: 80,
                    z: -a - 2150,
                    speed: .15,
                    s: .5,
                    effect: "opacity",
                    start: a + 0
                },
                xh3: {
                    img: "2/xh3.png",
                    w: 137,
                    h: 104,
                    dir: 1,
                    x: -115,
                    y: 0,
                    z: -a - 2200,
                    speed: .15,
                    s: .5,
                    effect: "opacity",
                    start: a + 0
                },
                yyzs: {
                    img: "2/yyzs.png",
                    w: 622,
                    h: 688,
                    dir: 1,
                    y:-70,
                    z: -a - 3700,
                    speed: .15,
                    s: .5,
                    effect: "opacity",
                    start: a + 0
                },
                yyzs_text: {
                    img: "2/yyzs_text.png",
                    w: 686,
                    h: 278,
                    dir: 1,
                    y:-200,
                    z: -a - 3500,
                    speed: .15,
                    s: .5,
                    effect: "opacity",
                    start: a + 0
                },
                yf: {
                    img: "2/yf.png",
                    w: 523,
                    h: 298,
                    y:120,
                    dir: 1,
                    z: -a - 3300,
                    speed: .15,
                    s: .5,
                    effect: "opacity",
                    start: a + 0
                },
                yyy: {
                    img: "2/yyy.png",
                    w: 629,
                    h:392,
                    x:-180,
                    y:100,
                    dir: 1,
                    z: -a - 3350,
                    speed: .15,
                    s: .5,
                    effect: "opacity",
                    start: a + 0
                },
                yyy2: {
                    img: "2/yyy2.png",
                    w: 690,
                    h:363,
                    x:180,
                    y:100,
                    dir: 1,
                    z: -a - 3250,
                    speed: .15,
                    s: .5,
                    effect: "opacity",
                    start: a + 0
                },
                ttnk: {
                    img: "2/ttnk.png",
                    w: 701,
                    h:721,
                    dir: 1,
                    z: -a - 4900,
                    speed: .15,
                    s: .5,
                    effect: "opacity",
                    start: a + 0
                },
                ttnk_text: {
                    img: "2/ttnk_text.png",
                    w: 681,
                    h:277,
                    dir: 1,
                    y:-190,
                    z: -a - 4900,
                    speed: .15,
                    s: .5,
                    effect: "opacity",
                    start: a + 0
                },
                hohc: {
                    img: "2/hogc.png",
                    w: 690,
                    h:344,
                    dir: 1,
                    y:80,
                    x:20,
                    z: -a - 4400,
                    speed: .15,
                    s: .5,
                    effect: "opacity",
                    start: a + 0
                },
                // wdnf: {
                //     img: "2/wdnf1.png",
                //     w: 627,
                //     h:208,
                //     dir: 1,
                //     z: -a - 6100,
                //     speed: .15,
                //     s: .5,
                //     effect: "opacity",
                //     start: a + 0
                // },
                hlbtr: {
                    img: "2/hlbtr.png",
                    w: 369,
                    h:1009,
                    dir: 1,
                    x:-100,
                    z: -a - 6600,
                    speed: .15,
                    s: .5,
                    effect: "opacity",
                    start: a + 0
                },
                hlbt: {
                    img: "2/hlbtl.png",
                    w: 436,
                    h:1047,
                    dir: 1,
                    x:100,
                    z: -a - 6500,
                    speed: .15,
                    s: .5,
                    effect: "opacity",
                    start: a + 0
                },
                hlbt_gc1: {
                    img: "2/hlbt_gc1.png",
                    w: 851,
                    h:721,
                    dir: 1,
                    x:-230,
                    z: -a - 6300,
                    speed: .15,
                    s: .5,
                    effect: "opacity",
                    start: a + 0
                },
                hlbt_gc2: {
                    img: "2/hlbt_gc2.png",
                    w: 761,
                    h:543,
                    dir: 1,
                    x:200,
                    z: -a - 6100,
                    speed: .15,
                    s: .5,
                    effect: "opacity",
                    start: a + 0
                },
                gz22: {
                    img: "2/gz22.png",
                    w:333,
                    h:251,
                    dir: 1,
                    x:0,
                    y:100,
                    z: -a - 5900,
                    speed: .15,
                    s: .5,
                    effect: "opacity",
                    start: a + 0
                },
                // hlbt_wz: {
                //     img: "2/hlbt_wz1.png",
                //     w: 531,
                //     h:216,
                //     dir: 1,
                //     z: -a - 5860,
                //     speed: .15,
                //     s: .5,
                //     effect: "opacity",
                //     start: a + 0
                // },
                hlbt_te: {
                    img: "2/hlbt_wz.png",
                    w: 531,
                    h:216,
                    y:-120,
                    dir: 1,
                    z: -a - 5850,
                    speed: .15,
                    s: .5,
                    effect: "opacity",
                    start: a + 0
                },
                // swqs: {
                //     img: "2/swqs.png",
                //     w: 750,
                //     h:644,
                //     dir: 1,
                //     y:-80,
                //     z: -a - 9000,
                //     speed: .15,
                //     s: .5,
                //     start: a + 0
                // },
                // lz1: {
                //     img: "2/lz1.png",
                //     w: 680,
                //     h:578,
                //     dir: 1,
                //     y:-100,
                //     z: -a - 8600,
                //     speed: .15,
                //     s: .5,
                //     start: a + 0
                // },
                // lz2: {
                //     img: "2/lz2.png",
                //     w: 481,
                //     h:339,
                //     dir: 1,
                //     y:180,
                //     x:-40,
                //     z: -a - 9400,
                //     speed: .15,
                //     s: .5,
                //     start: a + 0
                // },
                // swss_text: {
                //     img: "2/swss_text.png",
                //     w: 641,
                //     h:268,
                //     dir: 1,
                //     y:-140,
                //     z: -a - 8600,
                //     speed: .15,
                //     s: .5,
                //     start: a + 0
                // },
                czr: {
                    img: "2/czr.png",
                    w: 140,
                    h:330,
                    x:-130,
                    dir: 1,
                    z: -a - 8100,
                    speed: .15,
                    s: .5,
                    effect: "opacity",
                    start: a + 0
                },
                czr_gc: {
                    img: "2/czgc.png",
                    w: 1157,
                    h:972,
                    x:-130,
                    dir: 1,
                    z: -a - 7300,
                    speed: .15,
                    s: .5,
                    effect: "opacity",
                    start: a + 0
                },
                czr_gc2: {
                    img: "2/czgc2.png",
                    w: 1500,
                    h:1553,
                    x:100,
                    dir: 1,
                    z: -a - 7300,
                    speed: .15,
                    s: .5,
                    effect: "opacity",
                    start: a + 0
                },
                czr2: {
                    img: "2/czr2.png",
                    w: 234,
                    h:409,
                    x:80,
                    dir: 1,
                    z: -a -7900,
                    speed: .15,
                    s: .5,
                    effect: "opacity",
                    start: a + 0
                },
                car: {
                    img: "2/car.png",
                    w: 325,
                    h:202,
                    dir: 1,
                    x:90,
                    y:10,
                    z: -a - 8200,
                    speed: .15,
                    s: .5,
                    effect: "opacity",
                    start: a + 0
                },
                zycz_text: {
                    img: "2/zycz_text.png",
                    w: 628,
                    h:268,
                    dir: 1,
                    y:-180,
                    z: -a - 7800,
                    speed: .15,
                    s: .5,
                    effect: "opacity",
                    start: a + 0
                },
                bxjg: {
                    img: "2/bxjg.png",
                    w: 749,
                    h:756,
                    dir: 1,
                    y:25,
                    z: -a - 9600,
                    speed: .15,
                    s: .5,
                    effect: "opacity",
                    start: a + 0
                },
                gcjg: {
                    img: "2/gcjg.png",
                    w: 1248,
                    h:968,
                    y:75,
                    x:90,
                    dir: 1,
                    z: -a - 9100,
                    speed: .15,
                    s: .5,
                    effect: "opacity",
                    start: a + 0
                },
                bxjg_text: {
                    img: "2/bxjg_text.png",
                    w: 632,
                    h:268,
                    y:-175,
                    dir: 1,
                    z: -a - 9000,
                    speed: .15,
                    s: .5,
                    effect: "opacity",
                    start: a + 0
                },
                zl_hc: {
                    img: "2/huichen2.png",
                    w: 524,
                    h:488,
                    x:-150,
                    dir: 1,
                    z: -a - 10000,
                    speed: .15,
                    s: .5,
                    effect: "opacity",
                    start: a + 0
                },
                zl_hc2: {
                    img: "2/huichen1.png",
                    w: 524,
                    h:488,
                    x:150,
                    dir: 1,
                    z: -a - 10200,
                    speed: .15,
                    s: .5,
                    effect: "opacity",
                    start: a + 0
                },
                zl_dhuy: {
                    img: "2/dhy2.png",
                    w: 343,
                    h:150,
                    x:150,
                    dir: 1,
                    z: -a - 10200,
                    speed: .15,
                    s: .5,
                    effect: "opacity",
                    start: a + 0
                },
                zl_dhuy: {
                    img: "2/dhy2.png",
                    w: 343,
                    h:150,
                    x:-150,
                    dir: 1,
                    z: -a - 10300,
                    speed: .15,
                    s: .5,
                    effect: "opacity",
                    start: a + 0
                },
                zl_dhuy: {
                    img: "2/dhy2.png",
                    w: 343,
                    h:150,
                    x:-120,
                    y:-50,
                    dir: 1,
                    z: -a - 10300,
                    speed: .15,
                    s: .5,
                    effect: "opacity",
                    start: a + 0
                },
                zl: {
                    img: "2/zl.png",
                    w: 1463,
                    h:1064,
                    x:-20,
                    dir: 1,
                    z: -a - 10800,
                    speed: .15,
                    s: .5,
                    effect: "opacity",
                    start: a + 0
                },
                jjh: {
                    img: "2/jjh.png",
                    w: 850,
                    h:814,
                    dir: 1,
                    z: -a - 12300,
                    speed: .15,
                    s: .5,
                    effect: "opacity",
                    start: a + 0
                },
                jjh2: {
                    img: "2/jjh2.png",
                    w: 573,
                    h:425,
                    y:40,
                    x:-15,
                    dir: 1,
                    z: -a - 12400,
                    speed: .15,
                    s: .5,
                    effect: "opacity",
                    start: a + 0
                },
                jjh_text: {
                    img: "2/jjh_text.png",
                    w: 652,
                    h:268,
                    y:-300,
                    dir: 1,
                    z: -a - 12300,
                    speed: .15,
                    s: .5,
                    effect: "opacity",
                    start: a + 0
                },
                szw: {
                    img: "2/szw.png",
                    w: 750,
                    h:496,
                    x:90,
                    y:30,
                    dir: 1,
                    z: -a - 13700,
                    speed: .15,
                    s: .5,
                    effect: "opacity",
                    start: a + 0
                },
                szw2: {
                    img: "2/szw2.png",
                    w: 1175,
                    h:842,
                    x:-190,
                    y:30,
                    dir: 1,
                    z: -a - 14000,
                    speed: .15,
                    s: .5,
                    effect: "opacity",
                    start: a + 0
                },
                szwy: {
                    img: "2/szwy.png",
                    w: 709,
                    h:191,
                    x:-5,
                    y:100,
                    dir: 1,
                    z: -a - 14400,
                    speed: .15,
                    s: .5,
                    effect: "opacity",
                    start: a + 0
                },
                szwy_yy: {
                    img: "2/dhy2.png",
                    w: 343,
                    h:150,
                    x:-150,
                    y:100,
                    dir: 1,
                    z: -a - 13200,
                    speed: .15,
                    s: .5,
                    effect: "opacity",
                    start: a + 0
                },
                szwy_yy22: {
                    img: "2/dhy2.png",
                    w: 343,
                    h:150,
                    x:-130,
                    y:0,
                    dir: 1,
                    z: -a - 13300,
                    speed: .15,
                    s: .5,
                    effect: "opacity",
                    start: a + 0
                },
                szwy_yy23: {
                    img: "2/dhy2.png",
                    w: 343,
                    h:150,
                    x:100,
                    y:50,
                    dir: 1,
                    z: -a - 13500,
                    speed: .15,
                    s: .5,
                    effect: "opacity",
                    start: a + 0
                },
                szwy_yy2: {
                    img: "2/huichen2.png",
                    w: 409,
                    h:473,
                    x:150,
                    y:80,
                    dir: 1,
                    z: -a - 13200,
                    speed: .15,
                    s: .5,
                    effect: "opacity",
                    start: a + 0
                },
                szwy_yy3: {
                    img: "2/huichen1.png",
                    w: 524,
                    h:188,
                    x:-150,
                    y:40,
                    dir: 1,
                    z: -a - 12500,
                    speed: .15,
                    s: .5,
                    effect: "opacity",
                    start: a + 0
                },
                szwy_yy4: {
                    img: "2/huichen1.png",
                    w: 524,
                    h:188,
                    dir: 1,
                    z: -a - 12500,
                    speed: .15,
                    s: .5,
                    effect: "opacity",
                    start: a + 0
                },
                szwy_yy5: {
                    img: "2/huichen1.png",
                    w: 524,
                    h:188,
                    y:-50,
                    dir: 1,
                    z: -a - 12800,
                    speed: .15,
                    s: .5,
                    effect: "opacity",
                    start: a + 0
                },
                szw_text: {
                    img: "2/szw_text.png",
                    w: 656,
                    h:268,
                    y:-160,
                    dir: 1,
                    z: -a -13500,
                    speed: .15,
                    s: .5,
                    effect: "opacity",
                    start: a + 0
                },
                trw: {
                    img: "2/trw.png",
                    w: 594,
                    h:556,
                    y:30,
                    dir: 1,
                    z: -a - 15200,
                    speed: .15,
                    s: .5,
                    effect: "opacity",
                    start: a + 0
                },
                xhh: {
                    img: "2/xhh.png",
                    w: 708,
                    h:249,
                    y:30,
                    dir: 1,
                    z: -a - 14500,
                    speed: .15,
                    s: .5,
                    effect: "opacity",
                    start: a + 0
                },
                ttv: {
                    img: "2/ttv.png",
                    w: 680,
                    h:886,
                    y:80,
                    dir: 1,
                    z: -a - 15300,
                    speed: .15,
                    s: .5,
                    effect: "opacity",
                    start: a + 0
                },
                tmm_text: {
                    img: "2/tmm_text.png",
                    w: 637,
                    h:268,
                    y:-160,
                    dir: 1,
                    z: -a - 15000,
                    speed: .15,
                    s: .5,
                    effect: "opacity",
                    start: a + 0
                },
                huichen22: {
                    img: "2/huichen2.png",
                    w: 409,
                    h:473,
                    dir: 1,
                    z: -a - 14500,
                    speed: .15,
                    s: .5,
                    effect: "opacity",
                    start: a + 0
                },
                dhyvf: {
                    img: "2/dhy2.png",
                    w: 343,
                    h:150,
                    y:160,
                    x:50,
                    dir: 1,
                    z: -a - 14500,
                    speed: .15,
                    s: .5,
                    effect: "opacity",
                    start: a + 0
                },
                dhyvff: {
                    img: "2/dhy2.png",
                    w: 343,
                    h:150,
                    y:130,
                    x:40,
                    dir: 1,
                    z: -a - 14700,
                    speed: .15,
                    s: .5,
                    effect: "opacity",
                    start: a + 0
                },
                dhyvfff: {
                    img: "2/dhy2.png",
                    w: 343,
                    h:150,
                    y:-100,
                    x:40,
                    dir: 1,
                    z: -a - 14500,
                    speed: .15,
                    s: .5,
                    effect: "opacity",
                    start: a + 0
                },
                dhyvffff: {
                    img: "2/huichen2.png",
                    w: 409,
                    h:473,
                    y:-100,
                    x:40,
                    dir: 1,
                    z: -a - 14600,
                    speed: .15,
                    s: .5,
                    effect: "opacity",
                    start: a + 0
                },
                hfqfly: {
                    img: "2/fly.png",
                    w: 819,
                    h:780,
                    y:130,
                    x:200,
                    dir: 1,
                    z: -a - 16100,
                    speed: .15,
                    s: .5,
                    effect: "opacity",
                    start: a + 0
                },
                hfqgcl: {
                    img: "2/hfq_gcl.png",
                    w: 1252,
                    h:731,
                    y:30,
                    x:-200,
                    dir: 1,
                    z: -a - 16800,
                    speed: .15,
                    s: .5,
                    effect: "opacity",
                    start: a + 0
                },
                hfq: {
                    img: "2/hfq.png",
                    w: 1310,
                    h:993,
                    y:30,
                    dir: 1,
                    z: -a - 17600,
                    speed: .15,
                    s: .5,
                    effect: "opacity",
                    start: a + 0
                },
                dhyvffffgh: {
                    img: "2/huichen2.png",
                    w: 409,
                    h:473,
                    y:-100,
                    x:40,
                    dir: 1,
                    z: -a - 17400,
                    speed: .15,
                    s: .5,
                    effect: "opacity",
                    start: a + 0
                },
                dhyvffjh: {
                    img: "2/dhy2.png",
                    w: 343,
                    h:150,
                    y:130,
                    x:40,
                    dir: 1,
                    z: -a - 16500,
                    speed: .15,
                    s: .5,
                    effect: "opacity",
                    start: a + 0
                },
                dhyvffffku: {
                    img: "2/huichen1.png",
                    w: 524,
                    h:488,
                    y:100,
                    x:90,
                    dir: 1,
                    z: -a - 17000,
                    speed: .15,
                    s: .5,
                    effect: "opacity",
                    start: a + 0
                },
                dhyvffffghhk: {
                    img: "2/huichen2.png",
                    w: 409,
                    h:473,
                    y:100,
                    x:-100,
                    dir: 1,
                    z: -a - 16200,
                    speed: .15,
                    s: .5,
                    effect: "opacity",
                    start: a + 0
                },
                dhyvffjhkk: {
                    img: "2/dhy2.png",
                    w: 343,
                    h:150,
                    y:150,
                    x:-80,
                    dir: 1,
                    z: -a - 16400,
                    speed: .15,
                    s: .5,
                    effect: "opacity",
                    start: a + 0
                },
                dhyvffffkukk: {
                    img: "2/huichen1.png",
                    w: 524,
                    h:488,
                    y:-120,
                    x:-60,
                    dir: 1,
                    z: -a - 15800,
                    speed: .15,
                    s: .5,
                    effect: "opacity",
                    start: a + 0
                },

                dhyvffffkokk: {
                    img: "2/huichen1.png",
                    w: 524,
                    h:488,
                    y:-130,
                    x:100,
                    dir: 1,
                    z: -a - 15900,
                    speed: .15,
                    s: .5,
                    effect: "opacity",
                    start: a + 0
                },
                hfq_text: {
                    img: "2/hfq_text.png",
                    w: 640,
                    h:268,
                    y:-160,
                    dir: 1,
                    z: -a - 17000,
                    speed: .15,
                    s: .5,
                    effect: "opacity",
                    start: a + 0
                },
                // jjdh: {
                //     img: "2/jjdh.png",
                //     w: 714,
                //     h:397,
                //     y:60,
                //     dir: 1,
                //     z: -a - 21000,
                //     speed: .15,
                //     s: .5,
                //     start: a + 0
                // },
                // dhy: {
                //     img: "2/dhy.png",
                //     w: 750,
                //     h:216,
                //     y:-30,
                //     dir: 1,
                //     z: -a - 20600,
                //     speed: .15,
                //     s: .5,
                //     start: a + 0
                // },
                // dhy2: {
                //     img: "2/dhy2.png",
                //     w: 343,
                //     h:150,
                //     y:380,
                //     x:250,
                //     dir: 1,
                //     z: -a - 20400,
                //     speed: .15,
                //     s: .5,
                //     start: a + 0
                // },
                // jjdh_text: {
                //     img: "2/jjdh_text.png",
                //     w: 635,
                //     h:270,
                //     y:-150,
                //     dir: 1,
                //     z: -a - 20300,
                //     speed: .15,
                //     s: .5,
                //     start: a + 0
                // },
                // lmoy: {
                //     img: "2/lmoy.png",
                //     w: 1176,
                //     h:336,
                //     y:-40,
                //     dir: 1,
                //     z: -a - 22900,
                //     speed: .15,
                //     s: .5,
                //     start: a + 0
                // },
                // lmo: {
                //     img: "2/lmo.png",
                //     w: 462,
                //     h:421,
                //     dir: 1,
                //     y:52,
                //     z: -a - 22500,
                //     speed: .15,
                //     s: .5,
                //     start: a + 0
                // },
                // lmo_text: {
                //     img: "2/lmo_text.png",
                //     w: 639,
                //     h:270,
                //     dir: 1,
                //     y:-150,
                //     z: -a - 22500,
                //     speed: .15,
                //     s: .5,
                //     start: a + 0
                // },
                // txt1: {
                //     // img: "2/txt1.png",
                //     w: 619,
                //     h: 208,
                //     dir: 1,
                //     offset: 1e3,
                //     z: -a - 100,
                //     speed: 1,
                //     s: .5,
                //     effect: "opacity",
                //     zlen: 1e3,
                //     zdua: 500,
                //     handle: e()
                // },
                dot1s: {
                    type: "particle",
                    size: 40,
                    rotate: 1,
                    z: -a - 300,
                    z1: -a - 2500,
                    R: 100,
                    R1: 300,
                    Rofs: Math.PI / 2,
                    start: a,
                    len: 5e3,
                    effect: "opacity",
                    zdua: 2990,
                    zlen: 3e3,
                    speed: 1,
                    img: [{
                        url: "2/dot.png",
                        w: 3,
                        h: 25
                    }]
                },
                dot2s: {
                    type: "particle",
                    size: 40,
                    rotate: 1,
                    z: -a - 2500,
                    z1: -a - 4700,
                    R: 100,
                    R1: 300,
                    Rofs: Math.PI / 2,
                    start: a,
                    len: 5e3,
                    effect: "opacity",
                    zdua: 2990,
                    zlen: 3e3,
                    speed: 1,
                    img: [{
                        url: "2/dot.png",
                        w: 3,
                        h: 25
                    }]
                },
                dot3s: {
                    type: "particle",
                    size: 40,
                    rotate: 1,
                    z: -a - 4700,
                    z1: -a - 5500,
                    R: 100,
                    R1: 300,
                    Rofs: Math.PI / 2,
                    start: -a - 3500,
                    len: 5e3,
                    effect: "opacity",
                    zdua: 2990,
                    zlen: 3e3,
                    speed: 1,
                    img: [{
                        url: "2/dot.png",
                        w: 3,
                        h: 25
                    }]
                },
                dot3s: {
                    type: "particle",
                    size: 40,
                    rotate: 1,
                    z: -a - 5500,
                    z1: -a - 7500,
                    R: 100,
                    R1: 300,
                    Rofs: Math.PI / 2,
                    start: -a - 3500,
                    len: 5e3,
                    effect: "opacity",
                    zdua: 2990,
                    zlen: 3e3,
                    speed: 1,
                    img: [{
                        url: "2/dot.png",
                        w: 3,
                        h: 25
                    }]
                },
                // txt2: {
                //     // img: "2/txt2.png",
                //     w: 278,
                //     h: 33,
                //     dir: 1,
                //     z: -a - 30e3,
                //     speed: 1,
                //     s: .5,
                //     effect: "opacity",
                //     zlen: 2e3,
                //     zdua: 800,
                //     handle: e()
                // },
                // leafs: {
                //     type: "particle",
                //     size: 30,
                //     rotate: 2,
                //     x: 0,
                //     y: 0,
                //     z: -a - 1000,
                //     z1: -a - 1250,
                //     zofs: 50,
                //     R: 100,
                //     R1: 400,
                //     len: 1e3,
                //     speed: 1,
                //     s: .5,
                //     effect: "opacity",
                //     img: [{
                //         url: "2/yezi1.png",
                //         w: 70,
                //         h: 71
                //     },
                //     {
                //         url: "2/yezi2.png",
                //         w: 92,
                //         h: 95
                //     },
                //     {
                //         url: "2/yezi3.png",
                //         w: 97,
                //         h: 76
                //     },
                //     {
                //         url: "2/yezi4.png",
                //         w: 80,
                //         h: 65
                //     },
                //     {
                //         url: "2/yezi5.png",
                //         w: 74,
                //         h: 62
                //     },
                //     {
                //         url: "2/yezi6.png",
                //         w: 45,
                //         h: 80
                //     },
                //     {
                //         url: "2/yezi7.png",
                //         w: 54,
                //         h: 77
                //     },
                //     {
                //         url: "2/yezi8.png",
                //         w: 67,
                //         h: 67
                //     }]
                // },
                huichen: {
                    type: "particle",
                    size: 10,
                    rotate: 2,
                    len: 7800,
                    z: -a - 2300,
                    z1: -a - 5e3,
                    R: 80,
                    R1: 200,
                    effect: "opacity",
                    zlen: 3e3,
                    zdua: 800,
                    speed: 1,
                    s: .5,
                    img: [{
                        url: "2/huichen1.png",
                        w: 524,
                        h: 488
                    },
                    {
                        url: "2/huichen2.png",
                        w: 409,
                        h: 473
                    }]
                },
                huichen2: {
                    type: "particle",
                    size: 10,
                    rotate: 2,
                    len: 7800,
                    z: -a - 9500,
                    z1: -a - 10e3,
                    R: 80,
                    R1: 200,
                    effect: "opacity",
                    zlen: 3e3,
                    zdua: 800,
                    speed: 0.2,
                    s: .5,
                    img: [{
                        url: "2/huichen1.png",
                        w: 524,
                        h: 488
                    },
                    {
                        url: "2/huichen2.png",
                        w: 409,
                        h: 473
                    }]
                },
                // txt3: {
                //     // img: "2/txt4.png",
                //     w: 242,
                //     h: 74,
                //     z: -a - 5700,
                //     speed: 1,
                //     s: .5,
                //     effect: "opacity",
                //     zlen: 3e3,
                //     zdua: 800,
                //     handle: e()
                // },
                // light1: {
                //     img: "2/guang.png",
                //     w: 784,
                //     h: 736,
                //     start: a + 2800,
                //     z: -a - 5800,
                //     speed: 1,
                //     s: .75,
                //     effect: "opacity",
                //     zlen: 3e3,
                //     zdua: 1500,
                //     handle: function(e, t, i, p) {
                //         var a = Power2.easeIn.getRatio((p - 2500) / 1e3);
                //         n.set(this, {
                //             T3: {
                //                 rotate: -(1 - p / 3e3) * (Math.PI / 2),
                //                 x: p < 2500 ? 0 : 150 * a,
                //                 y: p < 2500 ? 0 : 150 * -a
                //             }
                //         })
                //     }
                // },
                // dy_logo: {
                //     img: "2/dy_logo.png",
                //     w: 400,
                //     h: 400,
                //     start: a + 2800,
                //     z: -a - 5820,
                //     speed: 1,
                //     s: .75,
                //     effect: "opacity",
                //     zlen: 3e3,
                //     zdua: 1500,
                //     handle: function(e, t, i, p) {
                //         var a = Power2.easeIn.getRatio((p - 2500) / 1e3);
                //         n.set(this, {
                //             T3: {
                //                 x: p < 2500 ? 0 : 150 * a,
                //                 y: p < 2500 ? 0 : 150 * -a
                //             }
                //         })
                //     }
                // },
                // model1: function() {
                //     var e = 7500,
                //     t = 3e3,
                //     i = 6e3;
                //     return {
                //         type: "group",
                //         start: a + t,
                //         len: i,
                //         child: {
                //             m3: {
                //                 img: "2/girl3.png",
                //                 w: 177,
                //                 h: 442,
                //                 dir: 1,
                //                 x: -130,
                //                 y: -50,
                //                 z: -a - e - 200,
                //                 speed: 1,
                //                 s: .75,
                //                 effect: "opacity"
                //             },
                //             m4: {
                //                 img: "2/girl4.png",
                //                 w: 347,
                //                 h: 542,
                //                 dir: 1,
                //                 x: 100,
                //                 y: 100,
                //                 z: -a - e - 400,
                //                 s: .85,
                //                 effect: "opacity"
                //             },
                //             y1: {
                //                 img: "2/tengman.png",
                //                 w: 697,
                //                 h: 719,
                //                 x: 0,
                //                 y: 0,
                //                 dir: 1,
                //                 z: -a - e - 500,
                //                 s: 1.8,
                //                 effect: "opacity"
                //             }
                //         }
                //     }
                // } (),
                huichen1: {
                    type: "particle",
                    size: 5,
                    rotate: 2,
                    len: 7800,
                    start: a + 5500,
                    z: -a - 8500,
                    z1: -a - 9500,
                    R: 50,
                    R1: 100,
                    effect: "opacity",
                    zlen: 3e3,
                    zdua: 800,
                    speed: 1,
                    s: .65,
                    img: [{
                        url: "2/huichen1.png",
                        w: 524,
                        h: 488
                    },
                    {
                        url: "2/huichen2.png",
                        w: 409,
                        h: 473
                    }]
                },
                model2: function() {
                    var e = 11500,
                    t = 8e3,
                    i = 6e3;
                    return {
                        type: "group",
                        start: a + t,
                        len: i,
                        child: {
                            m5: {
                                // img: "2/girl5.png",
                                w: 570,
                                h: 494,
                                dir: 1,
                                x: 30,
                                y: 0,
                                z: -a - e - 100,
                                s: 1,
                                effect: "opacity",
                                zdua: 1200
                            },
                            y1: {
                                // img: "2/tengman4.png",
                                w: 552,
                                h: 633,
                                x: -320,
                                y: 300,
                                r: 2.8 * Math.PI / 4,
                                z: -a - e - 350,
                                s: 1.2,
                                effect: "opacity",
                                zdua: 1200
                            },
                            y2: {
                                // img: "2/tengman5.png",
                                w: 498,
                                h: 526,
                                x: 270,
                                y: 300,
                                r: 1.5 * Math.PI / 4,
                                z: -a - e - 350,
                                s: 1.2,
                                effect: "opacity",
                                zdua: 1200
                            },
                            y3: {
                                // img: "2/tengman4.png",
                                w: 498,
                                h: 526,
                                x: 270,
                                y: -250,
                                r: 7 * Math.PI / 4,
                                z: -a - e - 350,
                                s: 1.4,
                                effect: "opacity",
                                zdua: 1200
                            },
                            y4: {
                                // img: "2/tengman5.png",
                                w: 498,
                                h: 526,
                                x: -370,
                                y: -250,
                                r: .5 * Math.PI / 4,
                                dir: -1,
                                z: -a - e - 350,
                                s: 1.2,
                                effect: "opacity",
                                zdua: 1200
                            }
                        }
                    }
                } (),
                shape1: {
                    img: "2/starlight.png",
                    w: 750,
                    h: 750,
                    start: a + 7800,
                    z: -a - 121000,
                    effect: "opacity",
                    s: 1,
                    zlen: 5e3,
                    handle: function(e, t, i, p) {
                        n.set(this, {
                            T3: {
                                rotate: p * Math.PI / 7200
                            }
                        })
                    }
                }
            }
        },
        group3: {
            start: a += s,
            type: "group",
            len: c + 600,
            child: {
                 bg: {
                    img: "3/bg.jpg",
                    w: 600,
                    h: 900,
                    dir: 1,
                    z: -a - 1e4,
                    speed: .15,
                    s: 20,
                    y: -3e3,
                    len: s,
                    z: -a - 1e4,
                    speed: 0.03,
                    s: 20
                },
                m11: {
                    img: "3/xwz.png",
                    w: 331,
                    h: 70,
                    z: -a-3000/2.5,
                    s: .5,
                    speed: 0.2,
                    effect: "opacity"
                },
                m1: {
                    img: "3/cl.png",
                    w: 269,
                    h: 542,
                    z: -a-6000/2.5,
                    x: -70,
                    s: .5,
                    speed: 0.2,
                    effect: "opacity"
                },
                m2: {
                    img: "3/qq.png",
                    w: 222,
                    h: 480,
                    z: -a - 9000/2.5,
                    x: 70,
                    s: .6,
                    speed: 0.2,
                    effect: "opacity"
                },
                txt2: {
                    img: "3/zdy.png",
                    w: 418,
                    h: 690,
                    z: -a - 12000/2.5,
                    x: -70,
                    y: 0,
                    s: .5,
                    speed: 0.2,
                    effect: "opacity"
                },
                c1: {
                    img: "3/zylz.png",
                    w: 513,
                    h: 546,
                    z: -a - 15000/2.5,
                    x: -70,
                    s: .6,
                    speed: 0.2,
                    effect: "opacity"
                },
                txt: {
                    img: "3/ct.png",
                    w: 379,
                    h: 533,
                    z: -a - 18000/2.5,
                    x: 70,
                    s: .6,
                    speed: 0.2,
                    effect: "opacity",
                    handle: function(){setTimeout(function(){},900)}
                }
            }
        },
        // group3: {
        //     start: a += s,
        //     type: "group",
        //     len: c + 600,
        //     child: {
        //         bg: {
        //             img: "3/bg.jpg",
        //             w: 600,
        //             h: 900,
        //             dir: 1,
        //             z: -a - 1e4,
        //             speed: .15,
        //             s: 20,
        //             y: -3e3
        //             // handle: function(e, t, i, p) { /*去掉3背景*/
        //             //     var a = t.cur - 34e3;
        //             //     a > 0 ? n.set(this, {
        //             //         T3: {
        //             //             y: i.y + a / 3
        //             //         }
        //             //     }) : n.set(this, {
        //             //         T3: {
        //             //             y: i.y
        //             //         }
        //             //     })
        //             // }
        //         },
        //         scene1: function() {
        //             var t = 0,
        //             i = 4e3;
        //             return {
        //                 type: "group",
        //                 start: a + t,
        //                 len: i,
        //                 child: {
        //                     // clouds1: {
        //                     //     type: "particle",
        //                     //     size: 6,
        //                     //     rotate: 0,
        //                     //     x: 65,
        //                     //     y: -230,
        //                     //     z: -a - 700,
        //                     //     z1: -a - 2200,
        //                     //     zofs: 30,
        //                     //     R: 0,
        //                     //     R1: 50,
        //                     //     start: a,
        //                     //     len: 6e3,
        //                     //     speed: 1,
        //                     //     s: .5,
        //                     //     effect: "opacity",
        //                     //     img: [{
        //                     //         url: "3/cloud2.png",
        //                     //         w: 741,
        //                     //         h: 378
        //                     //     },
        //                     //     {
        //                     //         url: "3/cloud3.png",
        //                     //         w: 741,
        //                     //         h: 378
        //                     //     },
        //                     //     {
        //                     //         url: "3/cloud4.png",
        //                     //         w: 741,
        //                     //         h: 378
        //                     //     }]
        //                     // },
        //                     // clouds2: {
        //                     //     type: "particle",
        //                     //     size: 6,
        //                     //     rotate: 0,
        //                     //     x: -65,
        //                     //     y: -230,
        //                     //     z: -a - 800,
        //                     //     z1: -a - 2300,
        //                     //     zofs: 30,
        //                     //     R: 0,
        //                     //     R1: 50,
        //                     //     start: a,
        //                     //     len: 6e3,
        //                     //     speed: 1,
        //                     //     s: .5,
        //                     //     effect: "opacity",
        //                     //     img: [{
        //                     //         url: "3/cloud4.png",
        //                     //         w: 741,
        //                     //         h: 378
        //                     //     },
        //                     //     {
        //                     //         url: "3/cloud2.png",
        //                     //         w: 741,
        //                     //         h: 378
        //                     //     },
        //                     //     {
        //                     //         url: "3/cloud3.png",
        //                     //         w: 741,
        //                     //         h: 378
        //                     //     }]
        //                     // },
        //                     // dove1: {
        //                     //     img: "3/gezi2.png",
        //                     //     w: 187,
        //                     //     h: 220,
        //                     //     dir: -1,
        //                     //     z: -a - 500,
        //                     //     s: .75,
        //                     //     x: -150,
        //                     //     y: 100,
        //                     //     speed: 1.3,
        //                     //     effect: "opacity"
        //                     // },
        //                     // dove2: {
        //                     //     img: "3/gezi2.png",
        //                     //     w: 187,
        //                     //     h: 220,
        //                     //     dir: 1,
        //                     //     z: -a - 500,
        //                     //     s: .75,
        //                     //     x: 150,
        //                     //     y: 100,
        //                     //     speed: 1.3,
        //                     //     effect: "opacity"
        //                     // },
        //                     // zhuzi1: {
        //                     //     type: "particle",
        //                     //     size: 5,
        //                     //     rotate: 0,
        //                     //     x: 180,
        //                     //     y: -20,
        //                     //     z: -a - 800,
        //                     //     z1: -a - 2e3,
        //                     //     zofs: 0,
        //                     //     R: 0,
        //                     //     R1: 0,
        //                     //     start: a,
        //                     //     len: 3e3,
        //                     //     speed: 1,
        //                     //     s: .85,
        //                     //     effect: "opacity",
        //                     //     img: [{
        //                     //         url: "3/zhuzi.png",
        //                     //         w: 80,
        //                     //         h: 546
        //                     //     }]
        //                     // },
        //                     // zhuzi2: {
        //                     //     type: "particle",
        //                     //     size: 5,
        //                     //     rotate: 0,
        //                     //     x: -180,
        //                     //     y: -20,
        //                     //     z: -a - 800,
        //                     //     z1: -a - 2e3,
        //                     //     zofs: 1,
        //                     //     R: 0,
        //                     //     R1: 0,
        //                     //     start: a,
        //                     //     len: 3e3,
        //                     //     speed: 1,
        //                     //     s: .85,
        //                     //     effect: "opacity",
        //                     //     img: [{
        //                     //         url: "3/zhuzi.png",
        //                     //         w: 80,
        //                     //         h: 546
        //                     //     }]
        //                     // },
        //                     // cloud2: {
        //                     //     img: "3/cloud3.png",
        //                     //     w: 603,
        //                     //     h: 313,
        //                     //     z: -a - 300,
        //                     //     x: -50,
        //                     //     y: -230,
        //                     //     s: .55,
        //                     //     effect: "opacity"
        //                     // },
        //                     // cloud3: {
        //                     //     img: "3/cloud4.png",
        //                     //     w: 726,
        //                     //     h: 369,
        //                     //     z: -a - 450,
        //                     //     x: 50,
        //                     //     y: -80,
        //                     //     s: .55,
        //                     //     effect: "opacity"
        //                     // },
        //                     // cloud4: {
        //                     //     img: "3/cloud2.png",
        //                     //     w: 741,
        //                     //     h: 378,
        //                     //     z: -a - 620,
        //                     //     x: 0,
        //                     //     y: 120,
        //                     //     s: .6,
        //                     //     speed: 1.2,
        //                     //     effect: "opacity"
        //                     // },
        //                     // txt1: {
        //                     //     img: "3/txt1.png",
        //                     //     w: 278,
        //                     //     h: 77,
        //                     //     z: -a - 580,
        //                     //     x: 0,
        //                     //     y: 120,
        //                     //     s: .5,
        //                     //     speed: 1.2,
        //                     //     effect: "opacity",
        //                     //     handle: e()
        //                     // },
        //                      m11: {
        //                         img: "3/xwz.png",
        //                         w: 331,
        //                         h: 70,
        //                         z: -a,
        //                         s: .5,
        //                         speed: 1,
        //                         effect: "opacity"
        //                     },
        //                     m1: {
        //                         img: "3/cl.png",
        //                         w: 269,
        //                         h: 542,
        //                         z: -a-600,
        //                         x: -70,
        //                         s: .5,
        //                         speed: 1,
        //                         effect: "opacity"
        //                     },
        //                     // clock: {
        //                     //     img: "3/clock.png",
        //                     //     w: 245,
        //                     //     h: 240,
        //                     //     z: -a - 1800,
        //                     //     x: 0,
        //                     //     y: 340,
        //                     //     s: .8,
        //                     //     effect: "opacity"
        //                     // },
        //                     // haojiao: {
        //                     //     img: "3/haojiao.png",
        //                     //     w: 352,
        //                     //     h: 181,
        //                     //     z: -a - 1750,
        //                     //     x: 0,
        //                     //     y: -170,
        //                     //     s: .3,
        //                     //     effect: "opacity"
        //                     // },
        //                     // shuqin1: {
        //                     //     img: "3/shuqin.png",
        //                     //     w: 280,
        //                     //     h: 275,
        //                     //     z: -a - 2050,
        //                     //     x: -120,
        //                     //     y: -160,
        //                     //     s: .65,
        //                     //     effect: "opacity"
        //                     // },
        //                     // shuqin2: {
        //                     //     img: "3/shuqin.png",
        //                     //     w: 280,
        //                     //     h: 275,
        //                     //     dir: -1,
        //                     //     z: -a - 2050,
        //                     //     x: 120,
        //                     //     y: -160,
        //                     //     s: .65,
        //                     //     effect: "opacity"
        //                     // }
        //                 }
        //             }
        //         } (),
        //         scene2: function() {
        //             var e = 2e3,
        //             t = 0,
        //             i = 6e3,
        //             p = a;
        //             return console.log("_postemp+_pos+800", p + e + 800),
        //             {
        //                 type: "group",
        //                 start: a + t,
        //                 len: i,
        //                 child: {
        //                     m2: {
        //                         img: "3/qq.png",
        //                         w: 222,
        //                         h: 480,
        //                         z: -a - e,
        //                         x: 70,
        //                         s: .6,
        //                         speed: 1,
        //                         effect: "opacity"
        //                     },
        //                     // gate: {
        //                     //     img: "3/gongmen.png",
        //                     //     w: 540,
        //                     //     h: 619,
        //                     //     z: -a - e - 300,
        //                     //     x: 0,
        //                     //     y: 0,
        //                     //     s: .8,
        //                     //     effect: "opacity"
        //                     // },
        //                     // deng: {
        //                     //     img: "3/deng.png",
        //                     //     w: 600,
        //                     //     h: 194,
        //                     //     z: -a - e - 100,
        //                     //     x: 0,
        //                     //     y: 250,
        //                     //     s: .6,
        //                     //     effect: "opacity"
        //                     // },
        //                     // clouds1: {
        //                     //     type: "particle",
        //                     //     size: 4,
        //                     //     rotate: 0,
        //                     //     x: 80,
        //                     //     y: -130,
        //                     //     z: -a - e - 300,
        //                     //     z1: -a - e - 1300,
        //                     //     zofs: 0,
        //                     //     R: 0,
        //                     //     R1: 0,
        //                     //     start: a,
        //                     //     len: 6e3,
        //                     //     speed: 1,
        //                     //     s: .5,
        //                     //     effect: "opacity",
        //                     //     img: [{
        //                     //         url: "3/cloud2.png",
        //                     //         w: 741,
        //                     //         h: 378
        //                     //     },
        //                     //     {
        //                     //         url: "3/cloud3.png",
        //                     //         w: 741,
        //                     //         h: 378
        //                     //     },
        //                     //     {
        //                     //         url: "3/cloud4.png",
        //                     //         w: 741,
        //                     //         h: 378
        //                     //     }]
        //                     // },
        //                     // clouds2: {
        //                     //     type: "particle",
        //                     //     size: 4,
        //                     //     rotate: 0,
        //                     //     x: -80,
        //                     //     y: -130,
        //                     //     z: -a - e - 425,
        //                     //     z1: -a - e - 1425,
        //                     //     zofs: 0,
        //                     //     R: 0,
        //                     //     R1: 0,
        //                     //     start: a,
        //                     //     len: 6e3,
        //                     //     speed: 1,
        //                     //     s: .5,
        //                     //     effect: "opacity",
        //                     //     img: [{
        //                     //         url: "3/cloud4.png",
        //                     //         w: 741,
        //                     //         h: 378
        //                     //     },
        //                     //     {
        //                     //         url: "3/cloud2.png",
        //                     //         w: 741,
        //                     //         h: 378
        //                     //     },
        //                     //     {
        //                     //         url: "3/cloud3.png",
        //                     //         w: 741,
        //                     //         h: 378
        //                     //     }]
        //                     // },
        //                     // c1: {
        //                     //     img: "3/cloud3.png",
        //                     //     w: 603,
        //                     //     h: 313,
        //                     //     dir: -1,
        //                     //     z: -a - e - 650,
        //                     //     x: 100,
        //                     //     y: 100,
        //                     //     s: .35,
        //                     //     effect: "opacity"
        //                     // },
        //                     // c2: {
        //                     //     img: "3/cloud2.png",
        //                     //     w: 741,
        //                     //     h: 378,
        //                     //     z: -a - e - 550,
        //                     //     x: -80,
        //                     //     y: 120,
        //                     //     s: .35,
        //                     //     effect: "opacity"
        //                     // },
        //                     // huilang: {
        //                     //     img: "3/huilang.png",
        //                     //     w: 953,
        //                     //     h: 688,
        //                     //     z: -a - e - 1200,
        //                     //     x: 0,
        //                     //     y: 100,
        //                     //     s: .8,
        //                     //     effect: "opacity",
        //                     //     handle: function(e, t, i, p) {}
        //                     // },
        //                     // shuqin1: {
        //                     //     img: "3/shuqin.png",
        //                     //     w: 280,
        //                     //     h: 275,
        //                     //     z: -a - e - 650,
        //                     //     x: -80,
        //                     //     y: -80,
        //                     //     s: .3,
        //                     //     effect: "opacity"
        //                     // },
        //                     // shuqin2: {
        //                     //     img: "3/shuqin.png",
        //                     //     w: 280,
        //                     //     h: 275,
        //                     //     dir: -1,
        //                     //     z: -a - e - 650,
        //                     //     x: 80,
        //                     //     y: -80,
        //                     //     s: .3,
        //                     //     effect: "opacity"
        //                     // },
        //                     // gongjian1: {
        //                     //     img: "3/gongjian.png",
        //                     //     w: 211,
        //                     //     h: 246,
        //                     //     dir: -1,
        //                     //     z: -a - e - 700,
        //                     //     x: -80,
        //                     //     y: 80,
        //                     //     s: .35,
        //                     //     effect: "opacity"
        //                     // },
        //                     // gongjian2: {
        //                     //     img: "3/gongjian.png",
        //                     //     w: 211,
        //                     //     h: 246,
        //                     //     z: -a - e - 700,
        //                     //     x: 80,
        //                     //     y: 80,
        //                     //     s: .35,
        //                     //     effect: "opacity"
        //                     // },
        //                     // m3: {
        //                     //     img: "3/girl3.png",
        //                     //     w: 245,
        //                     //     h: 389,
        //                     //     z: -a - e - 750,
        //                     //     x: -50,
        //                     //     y: -60,
        //                     //     s: .35,
        //                     //     effect: "opacity"
        //                     // },
        //                     // m4: {
        //                     //     img: "3/girl4.png",
        //                     //     w: 257,
        //                     //     h: 379,
        //                     //     z: -a - e - 850,
        //                     //     x: 50,
        //                     //     y: -60,
        //                     //     s: .35,
        //                     //     effect: "opacity"
        //                     // },
        //                     // m5: {
        //                     //     img: "3/girl5.png",
        //                     //     w: 252,
        //                     //     h: 364,
        //                     //     z: -a - e - 950,
        //                     //     x: -30,
        //                     //     y: -20,
        //                     //     s: .35,
        //                     //     effect: "opacity"
        //                     // },
        //                     // m6: {
        //                     //     img: "3/girl6.png",
        //                     //     w: 318,
        //                     //     h: 218,
        //                     //     z: -a - e - 1100,
        //                     //     x: 10,
        //                     //     y: -10,
        //                     //     s: .25,
        //                     //     effect: "opacity"
        //                     // }
        //                 }
        //             }
        //         } (),
        //         scene3: function() {
        //             var t = 3300,
        //             i = 1e3,
        //             p = 6e3;
        //             return console.log(a + i, a + t),
        //             {
        //                 type: "group",
        //                 start: a + i,
        //                 len: p,
        //                 child: {
        //                     // gate: {
        //                     //     type: "particle",
        //                     //     size: 2,
        //                     //     rotate: 0,
        //                     //     x: 0,
        //                     //     y: 0,
        //                     //     z: -a - t - 1500,
        //                     //     z1: -a - t - 2e3,
        //                     //     zofs: 0,
        //                     //     R: 0,
        //                     //     R1: 0,
        //                     //     start: a + 2e3,
        //                     //     len: 4e3,
        //                     //     speed: 1,
        //                     //     s: .85,
        //                     //     effect: "opacity",
        //                     //     img: [{
        //                     //         url: "3/gongmen2.png",
        //                     //         w: 468,
        //                     //         h: 637
        //                     //     }]
        //                     // },
        //                     // cloud1: {
        //                     //     img: "3/cloud2.png",
        //                     //     w: 741,
        //                     //     h: 378,
        //                     //     z: -a - t - 620,
        //                     //     x: 0,
        //                     //     y: 0,
        //                     //     s: .6,
        //                     //     speed: 1,
        //                     //     effect: "opacity",
        //                     //     zlen: 2e3,
        //                     //     zdua: 500
        //                     // },
        //                     // cloud2: {
        //                     //     img: "3/cloud3.png",
        //                     //     w: 603,
        //                     //     h: 313,
        //                     //     z: -a - t - 2200,
        //                     //     x: -100,
        //                     //     y: 300,
        //                     //     s: .6,
        //                     //     speed: 1,
        //                     //     effect: "opacity"
        //                     // },
        //                     txt2: {
        //                         img: "3/zdy.png",
        //                         w: 418,
        //                         h: 690,
        //                         z: -a - t,
        //                         x: -70,
        //                         y: 0,
        //                         s: .5,
        //                         speed: 1,
        //                         effect: "opacity"
        //                     },
        //                     // crown: {
        //                     //     img: "3/crown.png",
        //                     //     w: 640,
        //                     //     h: 220,
        //                     //     z: -a - t - 1300,
        //                     //     x: 0,
        //                     //     y: 280,
        //                     //     s: .5,
        //                     //     speed: 1,
        //                     //     effect: "opacity",
        //                     //     zlen: 1500,
        //                     //     zdua: 500
        //                     // },
        //                     // clouds1: {
        //                     //     type: "particle",
        //                     //     size: 4,
        //                     //     rotate: 0,
        //                     //     x: 90,
        //                     //     y: -130,
        //                     //     z: -a - t - 750,
        //                     //     z1: -a - t - 2e3,
        //                     //     zofs: 0,
        //                     //     R: 0,
        //                     //     R1: 30,
        //                     //     start: a,
        //                     //     len: 6e3,
        //                     //     speed: 1,
        //                     //     s: .5,
        //                     //     effect: "opacity",
        //                     //     img: [{
        //                     //         url: "3/cloud2.png",
        //                     //         w: 741,
        //                     //         h: 378
        //                     //     },
        //                     //     {
        //                     //         url: "3/cloud3.png",
        //                     //         w: 741,
        //                     //         h: 378
        //                     //     },
        //                     //     {
        //                     //         url: "3/cloud4.png",
        //                     //         w: 741,
        //                     //         h: 378
        //                     //     }]
        //                     // },
        //                     // clouds2: {
        //                     //     type: "particle",
        //                     //     size: 4,
        //                     //     rotate: 0,
        //                     //     x: -90,
        //                     //     y: -130,
        //                     //     z: -a - t - 900,
        //                     //     z1: -a - t - 2150,
        //                     //     zofs: 100,
        //                     //     R: 0,
        //                     //     R1: 30,
        //                     //     start: a,
        //                     //     len: 6e3,
        //                     //     speed: 1,
        //                     //     s: .5,
        //                     //     effect: "opacity",
        //                     //     img: [{
        //                     //         url: "3/cloud4.png",
        //                     //         w: 741,
        //                     //         h: 378
        //                     //     },
        //                     //     {
        //                     //         url: "3/cloud2.png",
        //                     //         w: 741,
        //                     //         h: 378
        //                     //     },
        //                     //     {
        //                     //         url: "3/cloud3.png",
        //                     //         w: 741,
        //                     //         h: 378
        //                     //     }]
        //                     // }
        //                 }
        //             }
        //         } (),
        //         scene4: function() {
        //             var e = 5500,
        //             t = 4e3,
        //             i = 7e3;
        //             return {
        //                 type: "group",
        //                 start: a + t,
        //                 len: i,
        //                 child: {
        //                     // flowers: {
        //                     //     type: "particle",
        //                     //     size: 10,
        //                     //     rotate: 2,
        //                     //     x: 0,
        //                     //     y: 0,
        //                     //     z: -a - e - 300,
        //                     //     z1: -a - e - 1800,
        //                     //     zofs: 0,
        //                     //     R: 200,
        //                     //     R1: 300,
        //                     //     len: 7e3,
        //                     //     speed: 1,
        //                     //     s: .5,
        //                     //     effect: "opacity",
        //                     //     img: [{
        //                     //         url: "3/huaban1.png",
        //                     //         w: 163,
        //                     //         h: 152
        //                     //     },
        //                     //     {
        //                     //         url: "3/huaban2.png",
        //                     //         w: 73,
        //                     //         h: 153
        //                     //     },
        //                     //     {
        //                     //         url: "3/huaban3.png",
        //                     //         w: 179,
        //                     //         h: 107
        //                     //     },
        //                     //     {
        //                     //         url: "3/huaban4.png",
        //                     //         w: 138,
        //                     //         h: 117
        //                     //     },
        //                     //     {
        //                     //         url: "3/huaban5.png",
        //                     //         w: 87,
        //                     //         h: 73
        //                     //     },
        //                     //     {
        //                     //         url: "3/huaban6.png",
        //                     //         w: 77,
        //                     //         h: 78
        //                     //     },
        //                     //     {
        //                     //         url: "3/huaban7.png",
        //                     //         w: 109,
        //                     //         h: 44
        //                     //     }]
        //                     // },
        //                     c1: {
        //                         img: "3/zylz.png",
        //                         w: 513,
        //                         h: 546,
        //                         z: -a - e,
        //                         x: -70,
        //                         s: .6,
        //                         speed: 1,
        //                         effect: "opacity"
        //                     },
        //                     // c2: {
        //                     //     img: "3/cloud3.png",
        //                     //     w: 603,
        //                     //     h: 313,
        //                     //     z: -a - e - 1e3,
        //                     //     x: 150,
        //                     //     y: 50,
        //                     //     s: .6,
        //                     //     speed: 1,
        //                     //     effect: "opacity"
        //                     // },
        //                     // c3: {
        //                     //     img: "3/cloud4.png",
        //                     //     w: 726,
        //                     //     h: 399,
        //                     //     dir: -1,
        //                     //     z: -a - e - 700,
        //                     //     x: -50,
        //                     //     y: -150,
        //                     //     s: .6,
        //                     //     speed: 1,
        //                     //     effect: "opacity"
        //                     // },
        //                     // m1: {
        //                     //     img: "3/girl7.png",
        //                     //     w: 610,
        //                     //     h: 216,
        //                     //     z: -a - e - 730,
        //                     //     x: 0,
        //                     //     y: -40,
        //                     //     s: .6,
        //                     //     speed: 1,
        //                     //     effect: "opacity"
        //                     // },
        //                     // m2: {
        //                     //     img: "3/girl8.png",
        //                     //     w: 430,
        //                     //     h: 246,
        //                     //     z: -a - e - 1030,
        //                     //     x: -50,
        //                     //     y: 130,
        //                     //     s: .6,
        //                     //     speed: 1,
        //                     //     effect: "opacity"
        //                     // },
        //                     // doves: {
        //                     //     type: "particle",
        //                     //     size: 17,
        //                     //     rotate: 1,
        //                     //     x: 0,
        //                     //     y: -250,
        //                     //     avg: !0,
        //                     //     avgBy: 14,
        //                     //     sort: !0,
        //                     //     avgStart: 3 * Math.PI / 4,
        //                     //     avgOfs: 0,
        //                     //     avgDir: 1,
        //                     //     dis: !0,
        //                     //     z: -a - e - 1600,
        //                     //     z1: -a - e - 3100,
        //                     //     zofs: 0,
        //                     //     R: 100,
        //                     //     R1: 200,
        //                     //     Rofs: 2 * -Math.PI / 4,
        //                     //     len: 6e3,
        //                     //     speed: 1,
        //                     //     s: .35,
        //                     //     effect: "opacity",
        //                     //     img: [{
        //                     //         url: "3/gezi3.png",
        //                     //         w: 193,
        //                     //         h: 230
        //                     //     }]
        //                     // },
        //                     // cxx: {
        //                     //     img: "3/cloud2.png",
        //                     //     w: 741,
        //                     //     h: 378,
        //                     //     z: -a - e - 2e3,
        //                     //     x: 200,
        //                     //     y: 250,
        //                     //     s: .6,
        //                     //     speed: 1,
        //                     //     effect: "opacity"
        //                     // },
        //                     // c4: {
        //                     //     img: "3/cloud2.png",
        //                     //     w: 741,
        //                     //     h: 378,
        //                     //     z: -a - e - 1800,
        //                     //     x: -100,
        //                     //     y: 50,
        //                     //     s: .6,
        //                     //     speed: 1,
        //                     //     effect: "opacity"
        //                     // },
        //                     // c5: {
        //                     //     img: "3/cloud4.png",
        //                     //     w: 726,
        //                     //     h: 399,
        //                     //     dir: -1,
        //                     //     z: -a - e - 2300,
        //                     //     x: 100,
        //                     //     y: -250,
        //                     //     s: .6,
        //                     //     speed: 1,
        //                     //     effect: "opacity"
        //                     // },
        //                     // c6: {
        //                     //     img: "3/cloud2.png",
        //                     //     w: 741,
        //                     //     h: 378,
        //                     //     z: -a - e - 2500,
        //                     //     x: -100,
        //                     //     y: -150,
        //                     //     s: .6,
        //                     //     speed: 1,
        //                     //     effect: "opacity"
        //                     // },
        //                     // c7: {
        //                     //     img: "3/cloud3.png",
        //                     //     w: 603,
        //                     //     h: 313,
        //                     //     dir: -1,
        //                     //     z: -a - e - 2700,
        //                     //     x: 50,
        //                     //     y: 50,
        //                     //     s: .6,
        //                     //     speed: 1,
        //                     //     effect: "opacity"
        //                     // },
        //                     // c8: {
        //                     //     img: "3/cloud2.png",
        //                     //     w: 741,
        //                     //     h: 378,
        //                     //     z: -a - e - 3300,
        //                     //     x: -50,
        //                     //     y: -150,
        //                     //     s: .6,
        //                     //     speed: 1,
        //                     //     effect: "opacity"
        //                     // },
        //                     // m3: {
        //                     //     img: "3/girl9.png",
        //                     //     w: 761,
        //                     //     h: 478,
        //                     //     z: -a - e - 3400,
        //                     //     x: -50,
        //                     //     y: -100,
        //                     //     s: .5,
        //                     //     speed: 1,
        //                     //     effect: "opacity"
        //                     // },
        //                     // c9: {
        //                     //     img: "3/cloud3.png",
        //                     //     w: 603,
        //                     //     h: 313,
        //                     //     dir: -1,
        //                     //     z: -a - e - 3800,
        //                     //     x: 50,
        //                     //     y: 100,
        //                     //     s: .6,
        //                     //     speed: 1,
        //                     //     effect: "opacity"
        //                     // },
        //                     // m4: {
        //                     //     img: "3/girl10.png",
        //                     //     w: 709,
        //                     //     h: 421,
        //                     //     z: -a - e - 3700,
        //                     //     x: 30,
        //                     //     y: 140,
        //                     //     s: .45,
        //                     //     speed: 1,
        //                     //     effect: "opacity"
        //                     // }
        //                 }
        //             }
        //         } (),
        //         scene5: function() {
        //             var t = 9500,
        //             i = 6e3,
        //             p = 6e3;
        //             return {
        //                 type: "group",
        //                 start: a + i,
        //                 len: p,
        //                 child: {
        //                     // clouds: {
        //                     //     type: "particle",
        //                     //     size: 7,
        //                     //     rotate: 0,
        //                     //     x: 0,
        //                     //     y: 0,
        //                     //     avg: !0,
        //                     //     avgBy: 5,
        //                     //     sort: !1,
        //                     //     z: -a - t - 800,
        //                     //     z1: -a - t - 1300,
        //                     //     zofs: 100,
        //                     //     R: 100,
        //                     //     R1: 300,
        //                     //     dis: !0,
        //                     //     len: 6e3,
        //                     //     speed: 1,
        //                     //     s: .75,
        //                     //     effect: "opacity",
        //                     //     img: [{
        //                     //         url: "3/cloud4.png",
        //                     //         w: 726,
        //                     //         h: 369
        //                     //     },
        //                     //     {
        //                     //         url: "3/cloud2.png",
        //                     //         w: 741,
        //                     //         h: 378
        //                     //     },
        //                     //     {
        //                     //         url: "3/cloud3.png",
        //                     //         w: 603,
        //                     //         h: 313
        //                     //     }]
        //                     // },
        //                     txt: {
        //                         img: "3/ct.png",
        //                         w: 379,
        //                         h: 533,
        //                         z: -a - t,
        //                         x: 70,
        //                         s: .6,
        //                         speed: 1,
        //                         effect: "opacity",
        //                         handle: function(){setTimeout(function(){},900)}
        //                     },
        //                     // c1: {
        //                     //     img: "3/cloud2.png",
        //                     //     w: 741,
        //                     //     h: 378,
        //                     //     z: -a - t - 600,
        //                     //     x: 0,
        //                     //     y: -20,
        //                     //     s: .6,
        //                     //     speed: 1,
        //                     //     effect: "opacity"
        //                     // },
        //                     // stage: {
        //                     //     img: "3/stage.png",
        //                     //     w: 574,
        //                     //     h: 574,
        //                     //     y: 29,
        //                     //     x: 2,
        //                     //     z: -a - t - 2100,
        //                     //     s: 1.14,
        //                     //     speed: 1,
        //                     //     effect: "opacity"
        //                     // },
        //                     // girls: {
        //                     //     img: "3/girls.png",
        //                     //     w: 655,
        //                     //     h: 506,
        //                     //     z: -a - t - 2080,
        //                     //     s: .8,
        //                     //     speed: 1,
        //                     //     start: a + t,
        //                     //     effect: "opacity",
        //                     //     zlen: 1500,
        //                     //     zdua: 500,
        //                     //     x: -13,
        //                     //     y: -90
        //                     // }
        //                 }
        //             }
        //         } ()
        //     }
        // }
    },
    a += c,
    t.POS = a,
    t.movie = {},
    t.handle = function(e, t) {
        if (!this.option[e]) return null;
        var i = this.option[e];
        return {
            path: i[4],
            all: i[2],
            fra: i[3],
            start: i[8],
            sprite: i[5],
            row: i[6],
            last: i[7],
            width: i[0],
            height: i[1],
            speed: t || 15
        }
    },
    t
} (); !
function(n) {
    function e(n) {
        window.console && window.console.log ? window.console.log.apply(console, arguments) : window.opera && window.opera.postError && window.opera.postError(n)
    }
    var t, i, o = n(window),
    r = (n("body"), n(document), "ipad" == navigator.userAgent.toLowerCase().match(/ipad/i), navigator.platform.toLowerCase().indexOf("win") > -1, {
        line: Power0.easeNone,
        sini: Sine.easeIn,
        sino: Sine.easeOut,
        sinio: Sine.easeInOut,
        p1i: Power1.easeIn,
        p1o: Power1.easeOut,
        p1io: Power1.easeInOut,
        p2i: Power2.easeIn,
        p2o: Power2.easeOut,
        p2io: Power2.easeInOut,
        p4i: Power2.easeIn,
        p4o: Power2.easeOut,
        p4io: Power2.easeInOut,
        bi: Back.easeIn.config(1),
        bo: Back.easeOut.config(1),
        bio: Back.easeInOut.config(1),
        b2i: Back.easeIn.config(2),
        b2o: Back.easeOut.config(2),
        bio: Back.easeInOut.config(2),
        boi: Bounce.easeIn,
        boo: Bounce.easeOut,
        boio: Bounce.easeInOut,
        exi: Expo.easeIn,
        exo: Expo.easeOut,
        exio: Expo.easeInOut,
        eli: Elastic.easeIn,
        elo: Elastic.easeOut,
        elio: Elastic.easeInOut
    }),
    a = TweenMax;
    TimelineMax;
    $f = window.$f || {
        rh: function(e) {
            $f;
            t = o.width(),
            i = o.height(),
            n("#main").css({
                width: t,
                height: i
            }),
            n(".box").each(function(e, o) {
                var r = n(this).data("w"),
                a = n(this).data("pw"),
                s = n(this).data("h"),
                u = n(this).data("ph"),
                c = Math.min(!r || (_sw = a * t / 100) >= r ? 1 : _sw / r, !s || (_sh = u * i / 100) >= s ? 1 : _sh / s);
                TweenMax.set(this, {
                    scale: c
                })
            }),
            n(".sbg img,.sview").each(function(e, o) {
                var r = n(this).data("w"),
                a = n(this).data("h"),
                s = n(this).hasClass("contain") ? Math.min(t / (r || t), i / (a || i)) : Math.max(t / (r || t), i / (a || i));
                TweenMax.set(this, {
                    scale: s
                })
            })
        },
        orientationchange: function() {
            90 == window.orientation || window.orientation == -90 ? n(".pop-tip").stop(!0, !0).fadeIn(500) : n(".pop-tip").stop(!0, !0).fadeOut(500)
        },
        Render: function() {
            var t = this,
            i = {
                render: function(e, t, i) {
                    var o = document.createElement("audio"),
                    r = n(o);
                    return o.src = e,
                    o.preload = !0,
                    o.load(),
                    t && r.bind("ended",
                    function() {
                        this.currentTime = 0,
                        this.play()
                    }),
                    {
                        audio: r,
                        play: function(n, e) {
                            e && (o.currentTime = 0),
                            o.play()
                        },
                        pause: function(n, e) {
                            o.pause(),
                            e && (o.currentTime = 0)
                        },
                        destroy: function() {
                            r.remove()
                        },
                        load: function() {
                            o.load()
                        }
                    }
                },
                factory: function() {
                    var n = {};
                    return function(e, t, o) {
                        return n[e] || (n[e] = i.render(e + (e.indexOf(".mp3") > -1 ? "": ".mp3"), t, o), n[e].load()),
                        n[e]
                    }
                } ()
            },
            s = function(e) {
                var i, o, r, a = !1,
                s = '<video class="video-box" data-index="1" x-webkit-airplay="true" playsinline webkit-playsinline="true" preload="auto" src="<%=src%>"  poster="<%=poster%>"></video>',
                u = n.extend({
                    loop: !1,
                    poster: "",
                    show: !0,
                    hide: !0,
                    contain: !1,
                    parent: ".body-back"
                },
                window.CFG && CFG.movie && CFG.movie[e.name] || {},
                e);
                return {
                    sprite: null,
                    movie: null,
                    parent: null,
                    init: function() {
                        this.opt = u,
                        u.evt = "resize." + Math.round(1e6 * Math.random()),
                        this.parent = i = n(u.parent);
                        var e = t.render(s, {
                            src: u.src[0],
                            poster: u.src[1]
                        });
                        return this.sprite = o = n(e).appendTo(i),
                        this.movie = r = o[0],
                        this.render(),
                        this
                    },
                    render: function() {
                        var n = this;
                        o.css({
                            width: u.width,
                            height: u.height,
                            display: "block"
                        }),
                        o.bind("canplay",
                        function() {}),
                        o.one("ended",
                        function() { !! u.hide && n.hide(),
                            $f.isFunction(u.callback) && (u.context ? u.callback.call(u.context) : u.callback())
                        }),
                        o.one("playing",
                        function() {
                            $f.isFunction(u.play) && u.play()
                        }),
                        n.bind(),
                        u.show && n.show()
                    },
                    bind: function() {
                        n(window).bind(u.evt,
                        function() {
                            var n = i.width(),
                            e = i.height(),
                            t = u.contain ? Math.min(n / u.width, e / u.height) : Math.max(n / u.width, e / u.height),
                            r = u.width * t,
                            a = u.height * t;
                            o.css({
                                width: r,
                                height: a,
                                left: "50%",
                                top: "50%",
                                marginLeft: -r / 2,
                                marginTop: -a / 2
                            })
                        }).trigger(u.evt)
                    },
                    show: function() {
                        if (!a) {
                            a = !0;
                            return o.show(),
                            this
                        }
                    },
                    unbind: function() {
                        n(window).unbind(u.evt)
                    },
                    hide: function() {
                        a && (a = !1, r.pause(), o.remove())
                    }
                }
            },
            u = function(e, t) {
                var i, o, r, a = !1,
                e = n.extend({},
                e);
                return {
                    loader: null,
                    init: function() {
                        var n = this;
                        return r = e.complete,
                        e.complete = function(e, t, i) {
                            n.complete(),
                            $f.isFunction(r) && r(e, t, i)
                        },
                        t ? n.loadbypixi() : n.load(),
                        n
                    },
                    load: function() {
                        var n = this;
                        n.loader = o = $f.loader(e.dom, e.handle, e.complete, e.thread, e.arr),
                        o.load()
                    },
                    loadbypixi: function() {
                        var n = this;
                        n.loader = o = new PIXI.loaders.Loader,
                        o.add(e.arr || []),
                        o.on("progress",
                        function(n) {
                            var t = Math.floor(n.progress);
                            e.handle(n, t)
                        }),
                        o.on("complete",
                        function(n) {
                            e.complete(n)
                        }),
                        o.load()
                    },
                    loaded: !1,
                    complete: function() {
                        this.loaded = !0,
                        $f.isFunction(i) && i()
                    },
                    regist: function(n) {
                        this.loaded ? $f.isFunction(n) && n() : (i = n, a = !0)
                    }
                }
            }; !
            function() {
                for (var n = 0,
                e = ["ms", "moz", "webkit", "o"], t = 0; t < e.length && !window.requestAnimationFrame; ++t) window.requestAnimationFrame = window[e[t] + "RequestAnimationFrame"],
                window.cancelAnimationFrame = window[e[t] + "CancelAnimationFrame"] || window[e[t] + "CancelRequestAnimationFrame"];
                window.requestAnimationFrame || (window.requestAnimationFrame = function(e, t) {
                    var i = (new Date).getTime(),
                    o = Math.max(0, 16 - (i - n)),
                    r = window.setTimeout(function() {
                        e(i + o)
                    },
                    o);
                    return n = i + o,
                    r
                }),
                window.cancelAnimationFrame || (window.cancelAnimationFrame = function(n) {
                    clearTimeout(n)
                })
            } (),
            Array.prototype.filter || (Array.prototype.filter = function(n) {
                "use strict";
                if (void 0 === this || null === this) throw new TypeError;
                var e = Object(this),
                t = e.length >>> 0;
                if ("function" != typeof n) throw new TypeError;
                for (var i = [], o = arguments.length >= 2 ? arguments[1] : void 0, r = 0; r < t; r++) if (r in e) {
                    var a = e[r];
                    n.call(o, a, r, e) && i.push(a)
                }
                return i
            });
            var c, l, d, h, f, p = function() {
                var n, e = {},
                t = [],
                i = 0,
                o = 0,
                r = 0,
                a = 3,
                s = !1,
                u = {};
                return {
                    init: function(n) {
                        u = n || {},
                        t = u.list || [],
                        a = u.thread || a,
                        i = t.length;
                        for (var e = 0; e < (i < a ? i: a); e++) this.handle();
                        return 0 == i && this.complete(),
                        this
                    },
                    handle: function() {
                        r == i ? o != i || s || this.complete() : (this.load(t[r]), r++)
                    },
                    load: function(n, t) {
                        var r = this,
                        a = function() {
                            o++,
                            u.handle && u.handle(o, i),
                            r.handle()
                        };
                        return e[n] ? t || a() : e[n] = (new THREE.TextureLoader).load(n,
                        function() {
                            t || a()
                        }),
                        e[n]
                    },
                    complete: function() {
                        s = !0,
                        "function" == typeof u.complete && u.complete(),
                        "function" == typeof n && n()
                    },
                    list: function() {
                        return e
                    },
                    regist: function(e) {
                        this.loaded ? "function" == typeof e && e() : (n = e, show = !0)
                    }
                }
            },
            m = function() {
                var e, t, o;
                return {
                    init: function() {
                        var r = this;
                        e = n(".vload"),
                        $load = e.find(".load"),
                        o = e.find(".inner");
                        // l = d = i.factory("audio/bg.mp3?1", !0),
                        // h = i.factory("audio/end.mp3?1", !0),
                        // f = n('<div class="music"><span></span></div>');
                        // var a = function() {
                        //     f.appendTo("body"),
                        //     f.bind("touchstart",
                        //     function() {
                        //         f.hasClass("close") ? (f.removeClass("close"), l.play()) : (f.addClass("close"), l.pause())
                        //     })
                        // },
                        var s = (navigator.userAgent.indexOf("MQQBrowser") > -1, navigator.userAgent.match(/Android (.+); /)),
                        u = navigator.userAgent.match(/iPhone OS (.+) like Mac/),
                        m = u && 320 == window.screen.width && window.screen.height <= 480;
                        // if (s || m) return a(),
                        // f.hide(),
                        this.hide(),
                        w().init(),
                        void r.loadEnd();
                        // var v = setTimeout(function() {
                        //     v = null,
                        //     l.pause(),
                        //     l.audio.unbind("timeupdate"),
                        //     f.addClass("close"),
                        //     a()
                        // },
                        // 2e3);
                        // l.audio.one("timeupdate",
                        // function() {
                        //     v && (clearTimeout(v), v = null, a())
                        // }),
                        // l.play(),
                        c = t = p().init({
                            list: CFG.all,
                            handle: function(n, e) {
                                var t = Math.round(100 * n / e);
                                t < 100 && ($load.find(".numt").attr("class", "num numt num" + Math.floor(t / 10)), $load.find(".numu").attr("class", "num numu num" + Math.floor(t % 10)))
                            },
                            complete: function() {
                                setTimeout(function() {
                                    r.complete()
                                },
                                50),
                                r.loadEnd()
                            }
                        })
                    },
                    loadEnd: function() {
                        u({
                            dom: CFG.end
                        }).init()
                    },
                    render: function() {},
                    handle: function() {},
                    complete: function() {
                        var n = this;
                        n.hide(),
                        v().init()
                    },
                    hide: function() {
                        a.to(e, .5, {
                            opacity: 0,
                            onComplete: function() {
                                e.remove();
                            }
                        })
                    }
                }
            },
            w = function(e) {
                var i, r;
                return {
                    init: function() {
                        var e = this;
                        return this.elem = i = n(t.rendertpl("vvideo", {})).appendTo(".main"),
                        o.trigger("resize"),
                        e.show(),
                        this
                    },
                    show: function() {
                        var n = this;
                        a.from(i.show(), .5, {
                            opacity: 0
                        });
                        // r = s({
                        //     loop: !1,
                        //     show: !0,
                        //     hide: !1,
                        //     parent: i.find(".view"),
                        //     src: ["images/video/bg.jpg"],
                        //     width: 750,
                        //     height: 1334,
                        //     callback: function() {
                        //         n.hide(),
                        //         g().init(!0)
                        //     },
                        //     contain: !1
                        // }).init();
                        var e = i.find(".tip"),
                        t = i.find(".arrow"),
                        o = 0,
                        u = $f.progress({
                            dua: 500,
                            infi: !0,
                            callback: function() {
                                o++,
                                t.attr("class", "arrow a" + (o % 3 + 1))
                            }
                        }).init();
                        i.bind("touchend",
                        function() {
                            e.remove(),
                            u.stop()
                            //r.show()
                            // r.movie.play()
                        })
                    },
                    handle: function() {},
                    hide: function() {
                        a.to(i, .35, {
                            opacity: 0,
                            delay: 1,
                            onComplete: function() {
                                i.remove()
                            }
                        })
                    }
                }
            },
            v = function(i) {
                var s, u, l, d, h, f, p, m = 0,
                w = function(t, i, o) {
                    t = n.extend({
                        html: "",
                        cls: "",
                        x: 0,
                        y: 0,
                        z: 0,
                        r: 0,
                        w: 0,
                        h: 0,
                        s: 1,
                        dir: 1,
                        start: 0,
                        len: 0,
                        speed: 1,
                        overlay: !1,
                        opacity: 1,
                        index: 0,
                        name: "",
                        img: "",
                        offset: 1,
                        noTransform: !1,
                        type: "sprite",
                        size: 1,
                        z1: 0,
                        zofs: 100,
                        R: 0,
                        R1: 0,
                        Rofs: 0,
                        avg: !1,
                        sort: !1,
                        avgOfs: Math.PI / 12,
                        avgBy: 0,
                        avgStart: void 0,
                        avgDir: 0,
                        dis: !1,
                        disSort: !0,
                        disOfs: 0,
                        disDir: 0,
                        mc: !1,
                        hTiles: 1,
                        vTiles: 1,
                        duration: 100,
                        frames: null
                    },
                    t);
                    var r, s, u = !1,
                    l = [],
                    d = 0,
                    h = t.zlen || 3e3,
                    f = f || 800,
                    p = {
                        opacity: function(n) {
                            var e = -n.cur - r.position.z;
                            switch (!0) {
                            case e > h - d: r.visible = !1;
                                break;
                            case e <= h - d && e >= h - d - f: r.material.opacity = (h - d - e) / f,
                                r.visible = !0;
                                break;
                            default:
                                r.material.opacity = 1,
                                r.visible = !0
                            }
                        }
                    },
                    v = function(n, e, t, i, o) {
                        this.currentTile = 0,
                        this.durationTile = i,
                        this.currentTime = 0,
                        this.hTiles = e,
                        this.vTiles = t,
                        this.cntTiles = o || this.hTiles * this.vTiles,
                        n.wrapS = n.wrapT = THREE.RepeatWrapping,
                        n.repeat.set(1 / this.hTiles, 1 / this.vTiles),
                        this.update = function(e) {
                            for (this.currentTime += e; this.currentTime > this.durationTile;) {
                                this.currentTime -= this.durationTile,
                                this.currentTile++,
                                this.currentTile == this.cntTiles && (this.currentTile = 0);
                                var t = this.currentTile % this.hTiles;
                                n.offset.x = t / this.hTiles;
                                var i = Math.floor(this.currentTile / this.hTiles);
                                n.offset.y = i / this.vTiles
                            }
                        }
                    },
                    g = {};
                    return {
                        init: function(e) {
                            switch (g = e, !0) {
                            case !! t.child: u = !0,
                                this.elem = r = new THREE.Group,
                                n.each(t.child,
                                function(n, i) {
                                    i.name = n,
                                    i.start = i.start || t.start,
                                    l.push(w(i, r, !0).init(e))
                                });
                                break;
                            case "particle" == t.type: u = !0,
                                t.size = t.size || 0,
                                t.img = $f.isArray(t.img) ? t.img: [t.img],
                                this.elem = r = new THREE.Group;
                                for (var i = void 0 != t.avgStart ? t.avgStart: $f.random(0, 2 * Math.PI, !0), o = [], s = [], d = 0; d < t.size; d++) o[d] = d,
                                s[d] = Math.round((t.R1 - t.R) * (t.disDir ? d: t.size - d) / (t.size - 1 || 1)) + t.R;
                                t.sort || (o = $f.shuffleArray(o)),
                                t.disSort || (s = $f.shuffleArray(s));
                                for (var d = 0; d < t.size && t.img.length > 0; d++) {
                                    var h = $f.random( - t.zofs, t.zofs),
                                    f = t.dis ? s[d] + $f.random( - t.disOfs, t.disOfs) : $f.random(t.R, t.R1),
                                    p = t.avgBy || t.size,
                                    T = t.avg ? (t.avgDir ? 2 * Math.PI: 0) + (t.avgDir ? -1 : 1) * (2 * Math.PI * o[d] / p + $f.random( - t.avgOfs, t.avgOfs, !0)) + i: $f.random(0, 2 * Math.PI, !0),
                                    b = {},
                                    y = t.img[d % t.img.length];
                                    b = {
                                        x: t.x + Math.round(Math.cos(T) * f),
                                        y: t.y + Math.round(Math.sin(T) * f),
                                        z: t.z + (t.z1 - t.z) * d / (t.size > 1 ? t.size - 1 : 1) + h,
                                        img: y.url,
                                        w: y.w,
                                        h: y.h,
                                        r: (t.rotate ? 1 == t.rotate ? T: 2 * Math.random() * Math.PI: 0) + t.Rofs,
                                        effect: t.effect,
                                        zlen: t.zlen,
                                        zdua: t.zdua,
                                        speed: y.speed || t.speed,
                                        s: y.s || t.s,
                                        name: t.name + " child",
                                        start: t.start,
                                        handle: t.childHandle
                                    },
                                    l.push(w(b, r, !0).init(e))
                                }
                                break;
                            default:
                                var x = c.load($f.startWith(t.img, "data:image") ? t.img: "http://oiuim9fxi.bkt.clouddn.com/dist/images/" + t.img);
                                // var x = c.load($f.startWith(t.img, "data:image") ? t.img: "http://oiuim9fxi.bkt.clouddn.com/dist/images/" + t.img);
                                x.minFilter = THREE.LinearFilter;
                                var M = new THREE.SpriteMaterial({
                                    map: x
                                });
                                this.elem = r = new THREE.Sprite(M),
                                t.mc && (r.mc = new v(x, t.hTiles, t.vTiles, t.duration, t.frames)),
                                a.set(r, {
                                    T3: {
                                        x: t.x,
                                        y: t.y,
                                        z: t.z,
                                        scaleX: t.w * t.s * t.dir,
                                        scaleY: t.h * t.s,
                                        rotate: t.r
                                    }
                                })
                            }
                            return r.name = t.name,
                            m++,
                            this
                        },
                        elem: null,
                        option: function(e) {
                            return e && n.extend(t, e),
                            t
                        },
                        update: function(e) {
                            if (e.cur < t.start - t.offset || e.cur > (t.len ? t.len + t.start: 500 - r.position.z)) {
                                if (!s) return;
                                this.remove()
                            } else s || this.regist(),
                            this.handle(e),
                            u && n.each(l,
                            function(n, t) {
                                t.update(e)
                            })
                        },
                        handle: function(n) {
                            var e = n.cur - t.start;
                            1 != t.speed && a.set(r, {
                                T3: {
                                    z: t.z - (1 - t.speed) * e
                                }
                            }),
                            !!t.effect && !u && p[t.effect] && p[t.effect](n),
                            !!t.handle && t.handle.call(r, i, n, t, e),
                            t.mc && r.mc.update(1e3 * g.clock.getDelta())
                        },
                        regist: function() {
                            if(t.name=="txt1"){
                               Zepto(".arow").show();
                            }
                            return s = !0,
                            i.add(r),
                            e(".. " + t.name + " regist .."),
                            this
                        },
                        remove: function() {
                            if(t.name=="txt"){
                                    Zepto(".guang3").css({
                                    "width":"0%",
                                    "webkit-transform":"rotate(1080deg)"
                                    });
                                
                                Zepto("#form").css({
                                    "z-index":"999",
                                    "opacity":1
                                });

                            }
                            if (s) return i.remove(r),
                            s = !1,
                            e(".. " + t.name + " remove .."),
                            this
                        },
                        info: {}
                    }
                },
                v = function(t) {
                    var i, o, s, u, c,ca, l,re, d, h, f = {},fg={},
                    p = [],
                    v = {
                        cur: 0,
                        tar: 0,
                        end: 1e4,
                        sCur: 0,
                        sTar: 0,
                        sTemp: 0,
                        sMax: 60,
                        sMin: 1,
                        sOfs: 3,
                        sTime: 2
                    },
                    g = {
                        locked: !1,
                        stoped: !1
                    },
                    T = {
                        lat0: 0,
                        lat1: 0,
                        latMax: 30,
                        lon0: 0,
                        lon1: 0,
                        lonMax: 20,
                        x: 0,
                        y: 0
                    };
                    return {
                        init: function(n, t) {
                            s = n.scene,
                            c = ca = n.camera,
                            l = re = n.renderer,
                            o = n.stage,
                            u = new THREE.Group,
                            s.add(u),
                            this.clock = new THREE.Clock,
                            window.Stats;
                            for (var i in t) this.add(i, t[i]);
                            return e("I", m),
                            this
                        },
                        add: function(n, e, t) {
                            e.name = n,
                            fg[n] = f[n] = w(e, t || u).init({
                                clock: this.clock
                            })
                        },
                        get: function(n) {
                            return n ? f[n] : f
                        },
                        remove: function(n) {
                            var e = this.get(n);
                            e && (e.remove(), delete f[n])
                        },
                        start: function() {
                            var n, t, i, r, s, c, l = this,
                            d = "ontouchstart" in window,
                            f = d ? "touchstart.touchHandler": "mousedown.touchHandler",
                            p = d ? "touchmove.touchHandler": "mousemove.touchHandler",
                            m = d ? "touchend.touchHandler": "mouseup.touchHandler",
                            w = !1,
                            T = !0,
                            b = "pageX",
                            y = "pageY";

                            var raycaster = new THREE.Raycaster();
                            var mouse = new THREE.Vector3();

                            function onDocumentMouseDown( event ) {
                                event.preventDefault();
                                mouse.x = ( event.originalEvent.changedTouches[0].clientX / re.domElement.clientWidth ) * 2 - 1;
                                mouse.y = - ( event.originalEvent.changedTouches[0].clientY / re.domElement.clientHeight ) * 2 + 1;
                                raycaster.setFromCamera( mouse, ca );

                                var elemG1 = fg["group2"].elem.children;
                                // var elemG2 = fg["group2"].elem.children;
                                // var elemG3 = fg["group3"].elem.children;
                                // var elemG4 = fg["group4"].elem.children;
                                // elemG1.concat(elemG2).concat(elemG3).concat(elemG4);

                                var intersects = raycaster.intersectObjects(elemG1); 
                                if ( intersects.length > 0 ) {
                                    if ("jds" == intersects[0].object.name) {
                                        console.log('tap obj:'+ intersects[0].object.name);
                                    }
                                }
                            };

                            o.unbind(f).bind(f,
                            function(e) {
                                e.preventDefault(),
                                onDocumentMouseDown(e);

                                g.locked || (a.killTweensOf(u), w = !0, n = i = d ? e.originalEvent.changedTouches[0][b] : e[b], t = r = d ? e.originalEvent.changedTouches[0][y] : e[y], o.bind(p,
                                function(n, e) {
                                    if (n.preventDefault(), !g.locked && w) {
                                        s = d ? n.originalEvent.changedTouches[0][b] : n[b],
                                        c = d ? n.originalEvent.changedTouches[0][y] : n[y];
                                        var t = r - c;
                                        l.pos(Math.round(t)),
                                        i = s,
                                        r = c
                                    }
                                }).bind(m,
                                function(e) {
                                    w = !1,
                                    o.unbind(p).unbind(m),
                                    s = d ? e.originalEvent.changedTouches[0][b] : e[b],
                                    c = d ? e.originalEvent.changedTouches[0][y] : e[y],
                                    Math.abs(s - n) <= 10 && Math.abs(c - t) <= 10 ? l.pos(0, !0) : T && (T = !1, v.sTar = Math.abs(v.sTar) < 10 ? v.sTar: v.sTar > 0 ? 10 : -10)
                                }))
                            }),
                            h = !0,
                            l.render(),
                            e(v)
                        },
                        orienter: function() {
                            d = new Orienter;
                            var n = !1,
                            e = 0,
                            t = 0,
                            i = 0,
                            o = 0;
                            d.handler = function(r) {
                                n ? (i = r.lon - e, o = r.lat - t, Math.abs(i) > 180 && (i > 0 ? i -= 360 : i = 360 + i), Math.abs(i) >= 1 && (T.lon0 = r.g, T.lon0 = T.lon0 > T.lonMax ? T.lonMax: T.lon0 < -T.lonMax ? -T.lonMax: T.lon0, e = r.lon), Math.abs(o) >= 1 && (T.lat0 += o, T.lat0 = T.lat0 > T.latMax ? T.latMax: T.lat0 < -T.latMax ? -T.latMax: T.lat0, t = r.lat)) : (n = !0, e = r.lon, t = r.lat)
                            },
                            d.init()
                        },
                        play: function() {
                            this.unlock(),
                            this.render()
                        },
                        stop: function() {
                            a.killTweensOf(v),
                            a.killTweensOf(u),
                            v.tar = v.cur,
                            v.sTemp = v.sCur,
                            v.sCur = v.sTar = 0
                        },
                        lock: function() {
                            g.locked = !0,
                            this.stop(),
                            i && (cancelAnimationFrame(i), i = null)
                        },
                        unlock: function() {
                            g.locked = !1,
                            v.sCur = v.sTemp,
                            this.render()
                        },
                        pos: function(n, e) {
                            var t = this;
                            return void 0 == n ? v: void(e ? t.stop() : v.sTar = (n > 0 ? 1 : -1) * Math.min(Math.max(Math.abs(n / v.sOfs), v.sMin), v.sMax))
                        },
                        "goto": function(n, e) {
                            this.stop(),
                            a.to(u, e || 1, {
                                ease: r.p2io,
                                T3: {
                                    z: n
                                }
                            })
                        },
                        setEnd: function(n) {
                            v.end = n
                        },
                        _handleSubscribe: function(n) {
                            p = p.filter(function(e, t) {
                                return ! e.done && e.dir * n.cur > e.dir * e.pos ? (e.callback(), e.done = !0) : e.done && e.dir * n.cur < e.dir * e.pos && (e.done = !1),
                                !e.done || e.infi
                            })
                        },
                        subscribe: function(e) {
                            var t = n.extend({
                                pos: 0,
                                dir: 1,
                                done: !1,
                                infi: !1,
                                callback: null
                            },
                            e);
                            return t.unsubscribe = function() {
                                p = p.filter(function(n, t, i) {
                                    return n.callback != e.callback
                                })
                            },
                            p.push(t),
                            t
                        },
                        tip: function() {
                            this.$tip || (e("tiper", o.parent()), this.$tip = n('<div class="debug"></div>').appendTo(o.parent())),
                            this.$tip.text(v.tar + ":" + Math.round(v.cur))
                        },
                        render: function() {
                            var n = u.position.z + v.sTar * v.sTime;
                            n = n > v.end ? v.end: n < 0 ? 0 : n,
                            u.position.z = n,
                            v.cur = n;
                            for (var e in f) f[e].update(v);
                            l.render(s, c),
                            i = requestAnimationFrame(this.render.bind(this)),
                            v.cur == v.end && this.end()
                        },
                        end: function() {
                            var n = this;
                            n.destroy(),
                            t.callback && t.callback()
                        },
                        destroy: function() {
                            this.lock(),
                            d = null
                        }
                    }
                },
                T = {};
                return {
                    init: function() {
                        var e = this;
                        return this.elem = s = n(t.rendertpl("vstage", {})).appendTo(".main"),
                        u = s.find(".view"),
                        o.trigger("resize"),
                        e.show(),
                        this
                    },
                    show: function() {
                        var e = this;
                        s.show(),
                        d = new THREE.Scene,
                        h = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, .1, 1e5),
                        h.position.z = 500,
                        f = new THREE.WebGLRenderer({
                            alpha: !1
                        }),
                        f.setSize(window.innerWidth, window.innerHeight),
                        f.setClearColor(0),
                        f.setPixelRatio(window.devicePixelRatio),
                        u.append(f.domElement),
                        d.add(h),
                        h.position.set(0, 0, 500),
                        h.lookAt(new THREE.Vector3(0, 0, 0)),
                        l = v({
                            callback: function() {
                                e.end()
                            }
                        }).init({
                            scene: d,
                            camera: h,
                            renderer: f,
                            stage: u
                        },
                        n.extend(T, CFG.objs)),
                        l.setEnd(CFG.POS),
                        l.start(),
                        window.OBJ = l,
                        this.bind(),
                        p = g().init()
                    },
                    handle: function() {},
                    bind: function() {
                        o.bind("resize.three",
                        function() {
                            f.setSize(window.innerWidth, window.innerHeight),
                            h.aspect = window.innerWidth / window.innerHeight,
                            h.updateProjectionMatrix()
                        })
                    },
                    unbind: function() {
                        o.unbind(".three")
                    },
                    end: function() {
                        this.hide()
                    },
                    hide: function() {
                        this.unbind(),
                        s.remove()
                    }
                }
            },
            g = function(e) {
                var i, r;
                return {
                    init: function(e) {
                        var a = this;
                        return this.elem = i = n(t.rendertpl("vend", {
                            isAndroid: e
                        })).appendTo(".main"),
                        r = e,
                        o.trigger("resize"),
                        a.show(),
                        this
                    },
                    show: function() {
                        var n = this;
                        if (r && (d && d.pause(), f.show(), l = h, !f.hasClass("close"))) {
                            var e = setTimeout(function() {
                                e = null,
                                f.addClass("close"),
                                l.pause()
                            },
                            500);
                            l.audio.one("timeupdate",
                            function() {
                                e && (clearTimeout(e), e = null)
                            }),
                            h.play()
                        }
                        r ? (a.from(i.show(), 1, {
                            opacity: 0,
                            onComplete: function() {
                                n.handle()
                            }
                        }), a.from(i.find(".btn"), .75, {
                            y: 200,
                            opacity: 0,
                            elay: .5
                        })) : (i.show(), n.handle())
                    },
                    handle: function() {
                        i.find(".restart").one("tap",
                        function() {
                            window.location.reload()
                        })
                    },
                    hide: function() {
                        a.to(i, .35, {
                            opacity: 0,
                            onComplete: function() {
                                i.remove()
                            }
                        })
                    }
                }
            };
            m().init()
        },
        render: function(e, t) {
            var i = $f.template(n.trim(e));
            return i(t)
        },
        init: function() {
            var e = this;
            CSSPlugin.defaultTransformPerspective = 500,
            window.addEventListener("onorientationchange" in window ? "orientationchange": "resize", e.orientationchange, !1);
            for (var t in e) t.indexOf("Init") > 0 && e[t] != arguments.callee && n.isFunction(e[t]) && e[t]()
        },
        i_: function() {
            var n = this;
            o.resize(n.rh).trigger("resize"),
            n.Render()
        },
        random: function(n, e, t) {
            var i = Math.random() * (e - n);
            return n + (t ? i: Math.round(i))
        },
        rendertpl: function(e, t) {
            return this.render(n.trim(n("#" + e).text()), t)
        },
        render: function(e, t) {
            var i = $f.template(n.trim(e));
            return i(t)
        },
        TPL: function(n, e) {
            return n.replace(/\{([\w\.]*)\}/g,
            function(n, t) {
                for (var i = t.split("."), o = e[i.shift()], r = 0, a = i.length; r < a; r++) o = o[i[r]];
                return "undefined" != typeof o && null !== o ? o: ""
            })
        },
        startWith: function(n, e) {
            for (var t = "*.?+$^[](){}|\\/",
            i = e.split(""), o = 0; o < i.length; o++) t.indexOf(i[o]) > -1 && (i[o] = "\\" + i[o]);
            var r = new RegExp("^" + i.join(""));
            return r.test(n)
        },
        endWith: function(n, e) {
            for (var t = "*.?+$^[](){}|\\/",
            i = e.split(""), o = 0; o < i.length; o++) t.indexOf(i[o]) > -1 && (i[o] = "\\" + i[o]);
            e = i.join("");
            var r = new RegExp(e + "$");
            return r.test(n)
        },
        getUrlParam: function(n) {
            var e = new RegExp("(^|&)" + n + "=([^&]*)(&|$)"),
            t = window.location.search.substr(1).match(e);
            return null != t ? unescape(t[2]) : null
        },
        hash: function() {
            return location.hash ? location.hash.substr(1) : ""
        },
        shuffleArray: function(n) {
            for (var e, t, i = n.length; i; e = parseInt(Math.random() * i), t = n[--i], n[i] = n[e], n[e] = t);
            return n
        },
        sizeOf: function(n) {
            var e = 0;
            for (var t in n) e++;
            return e
        },
        objTostr: function(n, e, t) {
            var i = "";
            e = e ? e: "";
            var o = t ? "": " ";
            for (var r in n) i += e + r + o;
            return i
        },
        objTostrP: function(n, e, t, i) {
            var o = "";
            t = t ? t: "";
            var r = i ? "": " ";
            for (var a in n) o += t + n[a][e] + r;
            return o
        },
        is: function(n, e) {
            var t = Object.prototype.toString.call(e).slice(8, -1).toLowerCase();
            return void 0 !== e && null !== e && t === n.toLowerCase()
        },
        isFunction: function(n) {
            return this.is("function", n)
        },
        isObject: function(n) {
            return this.is("object", n)
        },
        isString: function(n) {
            return this.is("string", n)
        },
        isArray: function(n) {
            return this.is("array", n)
        },
        isBoolean: function(n) {
            return this.is("boolean", n)
        },
        isDate: function(n) {
            return this.is("date", n)
        },
        isNumber: function(n) {
            return this.is("number", n)
        },
        isUndefined: function(n) {
            return void 0 === n
        },
        isNull: function(n) {
            return null === n
        },
        isEmptyObject: function(n) {
            if (this.isObject(n)) {
                for (var e in n) return ! 1;
                return ! 0
            }
            return ! 1
        },
        isEmptyArray: function(n) {
            return this.isArray(n) && 0 == n.length
        },
        isNotEmptyArray: function(n) {
            return this.isArray(n) && n.length > 0
        },
        Sc: function(n, e, t) {
            var i = n + "=" + escape(e);
            if (! (void 0 != t) && (t = 24), t > 0) {
                var o = new Date,
                r = 3600 * t * 1e3;
                o.setTime(o.getTime() + r),
                i += "; expires=" + o.toGMTString()
            }
            document.cookie = i
        },
        Gc: function(n) {
            for (var e = document.cookie.split("; "), t = 0; t < e.length; t++) {
                var i = e[t].split("=");
                if (i[0] == n) return unescape(decodeURIComponent(i[1]))
            }
        },
        Dc: function(n) {
            var e = new Date;
            e.setTime(e.getTime() - 1e4),
            document.cookie = n + "=; expires=" + e.toGMTString()
        }
    },
    $f.loader = function(e, t, i, o, r) {
        var a = [],
        s = function(e) {
            var t = [],
            i = {};
            e.find("*:not(script)").each(function() {
                var e = "";
                if ("none" != n(this).css("background-image")) var e = n(this).css("background-image");
                else if ("undefined" != typeof n(this).attr("src") && "img" == this.tagName.toLowerCase()) var e = n(this).attr("src");
                e.indexOf(",") == -1 && (e = e.replace('url("', ""), e = e.replace("url(", ""), e = e.replace('")', ""), e = e.replace(")", ""), e.length > 0 && "none" != e && !i[e] && (i[e] = !0, t.push(e)))
            });
            return t
        };
        r = r || [],
        n.isArray(e) ? a = n.merge(e, r) : (a = s(n(e)), a = n.merge(a, r));
        var u, c, l = 0,
        d = 0,
        h = a.length,
        o = o || 3,
        f = !1,
        p = !1;
        return {
            load: function() {
                u = (new Date).getTime();
                for (var n = 0; n < (h < o ? h: o); n++) this.handler();
                return this
            },
            loading: function(n) {
                var e = this,
                i = function() {
                    d++,
                    $f.isFunction(t) && t(e, d, h),
                    e.handler()
                };
                if (!n) return void i();
                var o = new Image;
                o.onload = o.onerror = function() {
                    e.assets[n] = o,
                    i()
                },
                o.src = n
            },
            handler: function() {
                var e = this;
                return d >= h && !p ? (p = !0, c = (new Date).getTime(), n.isFunction(i) && i(e, h, h)) : !f && l < h && (e.loading(a[l]), l++),
                this
            },
            sleep: function() {
                f = !0
            },
            wakeup: function() {
                var n = this;
                f && (f = !1, n.handler())
            },
            assets: {}
        }
    },
    function() {
        for (var n = 0,
        e = ["ms", "moz", "webkit", "o"], t = 0; t < e.length && !window.requestAnimationFrame; ++t) window.requestAnimationFrame = window[e[t] + "RequestAnimationFrame"],
        window.cancelAnimationFrame = window[e[t] + "CancelAnimationFrame"] || window[e[t] + "CancelRequestAnimationFrame"];
        window.requestAnimationFrame || (window.requestAnimationFrame = function(e, t) {
            var i = (new Date).getTime(),
            o = Math.max(0, 16 - (i - n)),
            r = window.setTimeout(function() {
                e(i + o)
            },
            o);
            return n = i + o,
            r
        }),
        window.cancelAnimationFrame || (window.cancelAnimationFrame = function(n) {
            clearTimeout(n)
        })
    } (),
    $f.templateSettings = {
        evaluate: /<%([\s\S]+?)%>/g,
        interpolate: /<%=([\s\S]+?)%>/g,
        escape: /<%-([\s\S]+?)%>/g
    };
    var s = /(.)^/,
    u = {
        "'": "'",
        "\\": "\\",
        "\r": "r",
        "\n": "n",
        "\u2028": "u2028",
        "\u2029": "u2029"
    },
    c = /\\|'|\r|\n|\u2028|\u2029/g,
    l = function(n) {
        return "\\" + u[n]
    };
    $f.template = function(e, t, i, o) { ! i && o && (i = o),
        i = n.extend({},
        i, $f.templateSettings);
        var r = RegExp([(i.escape || s).source, (i.interpolate || s).source, (i.evaluate || s).source].join("|") + "|$", "g"),
        a = 0,
        u = "__p+='";
        e.replace(r,
        function(n, t, i, o, r) {
            return u += e.slice(a, r).replace(c, l),
            a = r + n.length,
            t ? u += "'+\n((__t=(" + t + "))==null?'':_.escape(__t))+\n'": i ? u += "'+\n((__t=(" + i + "))==null?'':__t)+\n'": o && (u += "';\n" + o + "\n__p+='"),
            n
        }),
        u += "';\n",
        i.variable || (u = "with(obj||{}){\n" + u + "}\n"),
        u = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + u + "return __p;\n";
        var d = [],
        h = [];
        t = t || {},
        !t.$f && (t.$f = $f);
        for (var f in t) d.push(f),
        h.push(t[f]);
        d.splice(0, 0, i.variable || "obj"),
        d.push(u);
        try {
            var p = Function.apply(this, d)
        } catch(m) {
            throw m.source = u,
            m
        }
        var w = function(e) {
            var t = n.merge([e], h);
            return p.apply(this, t)
        },
        v = i.variable || "obj";
        return w.source = "function(" + v + "){\n" + u + "}",
        w
    },
    $f.progress = function(e) {
        var t, i = null,
        o = function(e) {
            return n.extend({
                dua: 10,
                end: 100,
                start: 0,
                infi: !1
            },
            e)
        };
        return {
            init: function(n) {
                var i = this;
                return e = o(e),
                t = void 0 == n ? e.start: n,
                !!e.imd && i.handler(),
                i.start(),
                i
            },
            stop: function() {
                i && (clearInterval(i), i = null)
            },
            start: function(r, a) {
                var s = this;
                r && (r = o(r), e = n.extend(e, r)),
                void 0 == a || e.infi || (t = a),
                i || (i = window.setInterval(function() {
                    s.handler()
                },
                e.dua || 10))
            },
            complete: function() {
                var n = this;
                $f.isFunction(e.complete) && e.complete(t, e.end, e),
                n.stop()
            },
            handler: function() {
                var n = this;
                if ((e.infi || t !== e.end) && (t < e.end ? t++:t = e.start, $f.isFunction(e.callback) && e.callback(t, e.end, e)), !e.infi && t == e.end) return void n.complete()
            }
        }
    },
    window.wx_config && window.wxTool && wxTool.wxInit(window.wx_config || {},
    function() {
        wxTool.share(wxshare || {})
    }),
    n(function() {
        $f.i_()
    })
} ($);