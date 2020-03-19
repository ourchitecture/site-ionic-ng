(window.webpackJsonp = window.webpackJsonp || []).push([
    [14],
    {
        'ct+p': function(n, t, e) {
            'use strict';
            e.r(t);
            var o = e('ofXK'),
                c = e('TEn/'),
                r = e('3Pt+'),
                i = e('tyNb'),
                a = e('fXoL');
            let b = (() => {
                class n {
                    constructor() {}
                }
                return (
                    (n.ɵfac = function(t) {
                        return new (t || n)();
                    }),
                    (n.ɵcmp = a.Db({
                        type: n,
                        selectors: [['app-home']],
                        decls: 11,
                        vars: 2,
                        consts: [
                            [3, 'translucent'],
                            [3, 'fullscreen'],
                            ['collapse', 'condense'],
                            ['size', 'large'],
                            ['id', 'container'],
                        ],
                        template: function(n, t) {
                            1 & n &&
                                (a.Mb(0, 'ion-header', 0),
                                a.Mb(1, 'ion-toolbar'),
                                a.Mb(2, 'ion-title'),
                                a.bc(3, ' Ourchitecture '),
                                a.Lb(),
                                a.Lb(),
                                a.Lb(),
                                a.Mb(4, 'ion-content', 1),
                                a.Mb(5, 'ion-header', 2),
                                a.Mb(6, 'ion-toolbar'),
                                a.Mb(7, 'ion-title', 3),
                                a.bc(8, 'Ourchitecture'),
                                a.Lb(),
                                a.Lb(),
                                a.Lb(),
                                a.Mb(9, 'div', 4),
                                a.bc(10, ' Welcome to Ourchitecture! '),
                                a.Lb(),
                                a.Lb()),
                                2 & n &&
                                    (a.Xb('translucent', !0),
                                    a.zb(4),
                                    a.Xb('fullscreen', !0));
                        },
                        directives: [c.c, c.f, c.e, c.b],
                        styles: [
                            '#container[_ngcontent-%COMP%]{text-align:center;position:absolute;left:0;right:0;top:50%;transform:translateY(-50%)}#container[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{font-size:20px;line-height:26px}#container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:16px;line-height:22px;color:#8c8c8c;margin:0}#container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none}ion-content[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%]{--background:translucent}',
                        ],
                    })),
                    n
                );
            })();
            e.d(t, 'HomePageModule', function() {
                return s;
            });
            let s = (() => {
                class n {}
                return (
                    (n.ɵmod = a.Hb({ type: n })),
                    (n.ɵinj = a.Gb({
                        factory: function(t) {
                            return new (t || n)();
                        },
                        imports: [
                            [
                                o.b,
                                r.a,
                                c.g,
                                i.i.forChild([{ path: '', component: b }]),
                            ],
                        ],
                    })),
                    n
                );
            })();
        },
    },
]);
