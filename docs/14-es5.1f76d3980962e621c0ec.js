function _classCallCheck(n, t) {
    if (!(n instanceof t))
        throw new TypeError('Cannot call a class as a function');
}
(window.webpackJsonp = window.webpackJsonp || []).push([
    [14],
    {
        'ct+p': function(n, t, e) {
            'use strict';
            e.r(t);
            var o,
                c = e('ofXK'),
                i = e('TEn/'),
                r = e('3Pt+'),
                a = e('tyNb'),
                s = e('fXoL'),
                l =
                    (((o = function n() {
                        _classCallCheck(this, n);
                    }).ɵfac = function(n) {
                        return new (n || o)();
                    }),
                    (o.ɵcmp = s.Db({
                        type: o,
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
                                (s.Mb(0, 'ion-header', 0),
                                s.Mb(1, 'ion-toolbar'),
                                s.Mb(2, 'ion-title'),
                                s.bc(3, ' Ourchitecture '),
                                s.Lb(),
                                s.Lb(),
                                s.Lb(),
                                s.Mb(4, 'ion-content', 1),
                                s.Mb(5, 'ion-header', 2),
                                s.Mb(6, 'ion-toolbar'),
                                s.Mb(7, 'ion-title', 3),
                                s.bc(8, 'Ourchitecture'),
                                s.Lb(),
                                s.Lb(),
                                s.Lb(),
                                s.Mb(9, 'div', 4),
                                s.bc(10, ' Welcome to Ourchitecture! '),
                                s.Lb(),
                                s.Lb()),
                                2 & n &&
                                    (s.Xb('translucent', !0),
                                    s.zb(4),
                                    s.Xb('fullscreen', !0));
                        },
                        directives: [i.c, i.f, i.e, i.b],
                        styles: [
                            '#container[_ngcontent-%COMP%]{text-align:center;position:absolute;left:0;right:0;top:50%;transform:translateY(-50%)}#container[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{font-size:20px;line-height:26px}#container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:16px;line-height:22px;color:#8c8c8c;margin:0}#container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none}ion-content[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%]{--background:translucent}',
                        ],
                    })),
                    o);
            e.d(t, 'HomePageModule', function() {
                return u;
            });
            var b,
                u =
                    (((b = function n() {
                        _classCallCheck(this, n);
                    }).ɵmod = s.Hb({ type: b })),
                    (b.ɵinj = s.Gb({
                        factory: function(n) {
                            return new (n || b)();
                        },
                        imports: [
                            [
                                c.b,
                                r.a,
                                i.g,
                                a.i.forChild([{ path: '', component: l }]),
                            ],
                        ],
                    })),
                    b);
        },
    },
]);
