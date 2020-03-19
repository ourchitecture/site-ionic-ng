function _defineProperty(e, t, r) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = r),
        e
    );
}
function _classCallCheck(e, t) {
    if (!(e instanceof t))
        throw new TypeError('Cannot call a class as a function');
}
function _defineProperties(e, t) {
    for (var r = 0; r < t.length; r++) {
        var n = t[r];
        (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            'value' in n && (n.writable = !0),
            Object.defineProperty(e, n.key, n);
    }
}
function _createClass(e, t, r) {
    return (
        t && _defineProperties(e.prototype, t), r && _defineProperties(e, r), e
    );
}
(window.webpackJsonp = window.webpackJsonp || []).push([
    [78],
    {
        nI0H: function(e, t, r) {
            'use strict';
            r.r(t),
                r.d(t, 'ion_spinner', function() {
                    return o;
                });
            var n = r('imtE'),
                i = r('AfW+'),
                s = r('Dl6n'),
                a = r('TMBv'),
                o = (function() {
                    function e(t) {
                        _classCallCheck(this, e),
                            Object(n.k)(this, t),
                            (this.paused = !1);
                    }
                    return (
                        _createClass(
                            e,
                            [
                                {
                                    key: 'getName',
                                    value: function() {
                                        var e = this.name || i.b.get('spinner'),
                                            t = Object(n.d)(this);
                                        return (
                                            e ||
                                            ('ios' === t ? 'lines' : 'circular')
                                        );
                                    },
                                },
                                {
                                    key: 'render',
                                    value: function() {
                                        var e,
                                            t = Object(n.d)(this),
                                            r = this.getName(),
                                            o = a.a[r] || a.a.lines,
                                            f =
                                                'number' ==
                                                    typeof this.duration &&
                                                this.duration > 10
                                                    ? this.duration
                                                    : o.dur,
                                            p = [];
                                        if (void 0 !== o.circles)
                                            for (var u = 0; u < o.circles; u++)
                                                p.push(l(o, f, u, o.circles));
                                        else if (void 0 !== o.lines)
                                            for (var m = 0; m < o.lines; m++)
                                                p.push(c(o, f, m, o.lines));
                                        return Object(n.i)(
                                            n.a,
                                            {
                                                class: Object.assign(
                                                    Object.assign(
                                                        {},
                                                        Object(s.a)(this.color)
                                                    ),
                                                    ((e = {}),
                                                    _defineProperty(e, t, !0),
                                                    _defineProperty(
                                                        e,
                                                        'spinner-'.concat(r),
                                                        !0
                                                    ),
                                                    _defineProperty(
                                                        e,
                                                        'spinner-paused',
                                                        !!this.paused ||
                                                            i.b.getBoolean(
                                                                '_testing'
                                                            )
                                                    ),
                                                    e)
                                                ),
                                                role: 'progressbar',
                                                style: o.elmDuration
                                                    ? {
                                                          animationDuration:
                                                              f + 'ms',
                                                      }
                                                    : {},
                                            },
                                            p
                                        );
                                    },
                                },
                            ],
                            [
                                {
                                    key: 'style',
                                    get: function() {
                                        return ':host{display:inline-block;position:relative;width:28px;height:28px;color:var(--color);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}:host(.ion-color){color:var(--ion-color-base)}svg{left:0;top:0;-webkit-transform-origin:center;transform-origin:center;position:absolute;width:100%;height:100%;-webkit-transform:translateZ(0);transform:translateZ(0)}:host-context([dir=rtl]) svg,[dir=rtl] svg{left:unset;right:unset;right:0;-webkit-transform-origin:calc(100% - center);transform-origin:calc(100% - center)}:host(.spinner-lines) line,:host(.spinner-lines-small) line{stroke-width:4px;stroke-linecap:round;stroke:currentColor}:host(.spinner-lines) svg,:host(.spinner-lines-small) svg{-webkit-animation:spinner-fade-out 1s linear infinite;animation:spinner-fade-out 1s linear infinite}:host(.spinner-bubbles) svg{-webkit-animation:spinner-scale-out 1s linear infinite;animation:spinner-scale-out 1s linear infinite;fill:currentColor}:host(.spinner-circles) svg{-webkit-animation:spinner-fade-out 1s linear infinite;animation:spinner-fade-out 1s linear infinite;fill:currentColor}:host(.spinner-crescent) circle{fill:transparent;stroke-width:4px;stroke-dasharray:128px;stroke-dashoffset:82px;stroke:currentColor}:host(.spinner-crescent) svg{-webkit-animation:spinner-rotate 1s linear infinite;animation:spinner-rotate 1s linear infinite}:host(.spinner-dots) circle{stroke-width:0;fill:currentColor}:host(.spinner-dots) svg{-webkit-animation:spinner-dots 1s linear infinite;animation:spinner-dots 1s linear infinite}:host(.spinner-circular){-webkit-animation:spinner-circular linear infinite;animation:spinner-circular linear infinite}:host(.spinner-circular) circle{-webkit-animation:spinner-circular-inner ease-in-out infinite;animation:spinner-circular-inner ease-in-out infinite;stroke:currentColor;stroke-dasharray:80px,200px;stroke-dashoffset:0px;stroke-width:5.6;fill:none}:host(.spinner-paused),:host(.spinner-paused) circle,:host(.spinner-paused) svg{-webkit-animation-play-state:paused;animation-play-state:paused}@-webkit-keyframes spinner-fade-out{0%{opacity:1}to{opacity:0}}@keyframes spinner-fade-out{0%{opacity:1}to{opacity:0}}@-webkit-keyframes spinner-scale-out{0%{-webkit-transform:scale(1);transform:scale(1)}to{-webkit-transform:scale(0);transform:scale(0)}}@keyframes spinner-scale-out{0%{-webkit-transform:scale(1);transform:scale(1)}to{-webkit-transform:scale(0);transform:scale(0)}}@-webkit-keyframes spinner-rotate{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes spinner-rotate{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@-webkit-keyframes spinner-dots{0%{-webkit-transform:scale(1);transform:scale(1);opacity:.9}50%{-webkit-transform:scale(.4);transform:scale(.4);opacity:.3}to{-webkit-transform:scale(1);transform:scale(1);opacity:.9}}@keyframes spinner-dots{0%{-webkit-transform:scale(1);transform:scale(1);opacity:.9}50%{-webkit-transform:scale(.4);transform:scale(.4);opacity:.3}to{-webkit-transform:scale(1);transform:scale(1);opacity:.9}}@-webkit-keyframes spinner-circular{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes spinner-circular{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@-webkit-keyframes spinner-circular-inner{0%{stroke-dasharray:1px,200px;stroke-dashoffset:0px}50%{stroke-dasharray:100px,200px;stroke-dashoffset:-15px}to{stroke-dasharray:100px,200px;stroke-dashoffset:-125px}}@keyframes spinner-circular-inner{0%{stroke-dasharray:1px,200px;stroke-dashoffset:0px}50%{stroke-dasharray:100px,200px;stroke-dashoffset:-15px}to{stroke-dasharray:100px,200px;stroke-dashoffset:-125px}}';
                                    },
                                },
                            ]
                        ),
                        e
                    );
                })(),
                l = function(e, t, r, i) {
                    var s = e.fn(t, r, i);
                    return (
                        (s.style['animation-duration'] = t + 'ms'),
                        Object(n.i)(
                            'svg',
                            {
                                viewBox: s.viewBox || '0 0 64 64',
                                style: s.style,
                            },
                            Object(n.i)('circle', {
                                transform: s.transform || 'translate(32,32)',
                                cx: s.cx,
                                cy: s.cy,
                                r: s.r,
                                style: e.elmDuration
                                    ? { animationDuration: t + 'ms' }
                                    : {},
                            })
                        )
                    );
                },
                c = function(e, t, r, i) {
                    var s = e.fn(t, r, i);
                    return (
                        (s.style['animation-duration'] = t + 'ms'),
                        Object(n.i)(
                            'svg',
                            {
                                viewBox: s.viewBox || '0 0 64 64',
                                style: s.style,
                            },
                            Object(n.i)('line', {
                                transform: 'translate(32,32)',
                                y1: s.y1,
                                y2: s.y2,
                            })
                        )
                    );
                };
        },
    },
]);
