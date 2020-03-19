function _defineProperty(o, t, n) {
    return (
        t in o
            ? Object.defineProperty(o, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (o[t] = n),
        o
    );
}
function _classCallCheck(o, t) {
    if (!(o instanceof t))
        throw new TypeError('Cannot call a class as a function');
}
function _defineProperties(o, t) {
    for (var n = 0; n < t.length; n++) {
        var i = t[n];
        (i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            'value' in i && (i.writable = !0),
            Object.defineProperty(o, i.key, i);
    }
}
function _createClass(o, t, n) {
    return (
        t && _defineProperties(o.prototype, t), n && _defineProperties(o, n), o
    );
}
(window.webpackJsonp = window.webpackJsonp || []).push([
    [27],
    {
        s1jK: function(o, t, n) {
            'use strict';
            n.r(t),
                n.d(t, 'ion_button', function() {
                    return s;
                }),
                n.d(t, 'ion_icon', function() {
                    return p;
                });
            var i,
                e = n('imtE'),
                r = (n('AfW+'), n('aiEM')),
                a = n('Dl6n'),
                s = (function() {
                    function o(t) {
                        var n = this;
                        _classCallCheck(this, o),
                            Object(e.k)(this, t),
                            (this.inItem = !1),
                            (this.inListHeader = !1),
                            (this.inToolbar = !1),
                            (this.buttonType = 'button'),
                            (this.disabled = !1),
                            (this.routerDirection = 'forward'),
                            (this.strong = !1),
                            (this.type = 'button'),
                            (this.handleClick = function(o) {
                                if ('button' === n.type)
                                    Object(a.d)(n.href, o, n.routerDirection);
                                else if (Object(r.g)(n.el)) {
                                    var t = n.el.closest('form');
                                    if (t) {
                                        o.preventDefault();
                                        var i = document.createElement(
                                            'button'
                                        );
                                        (i.type = n.type),
                                            (i.style.display = 'none'),
                                            t.appendChild(i),
                                            i.click(),
                                            i.remove();
                                    }
                                }
                            }),
                            (this.onFocus = function() {
                                n.ionFocus.emit();
                            }),
                            (this.onBlur = function() {
                                n.ionBlur.emit();
                            }),
                            (this.ionFocus = Object(e.e)(this, 'ionFocus', 7)),
                            (this.ionBlur = Object(e.e)(this, 'ionBlur', 7));
                    }
                    return (
                        _createClass(
                            o,
                            [
                                {
                                    key: 'componentWillLoad',
                                    value: function() {
                                        (this.inToolbar = !!this.el.closest(
                                            'ion-buttons'
                                        )),
                                            (this.inListHeader = !!this.el.closest(
                                                'ion-list-header'
                                            )),
                                            (this.inItem =
                                                !!this.el.closest('ion-item') ||
                                                !!this.el.closest(
                                                    'ion-item-divider'
                                                ));
                                    },
                                },
                                {
                                    key: 'render',
                                    value: function() {
                                        var o,
                                            t = Object(e.d)(this),
                                            n = this.buttonType,
                                            i = this.type,
                                            r = this.disabled,
                                            s = this.rel,
                                            c = this.target,
                                            l = this.size,
                                            d = this.href,
                                            u = this.color,
                                            b = this.expand,
                                            h = this.hasIconOnly,
                                            f = this.shape,
                                            p = this.strong,
                                            v =
                                                void 0 === l && this.inItem
                                                    ? 'small'
                                                    : l,
                                            g = void 0 === d ? 'button' : 'a',
                                            m =
                                                'button' === g
                                                    ? { type: i }
                                                    : {
                                                          download: this
                                                              .download,
                                                          href: d,
                                                          rel: s,
                                                          target: c,
                                                      },
                                            y = this.fill;
                                        return (
                                            void 0 === y &&
                                                (y =
                                                    this.inToolbar ||
                                                    this.inListHeader
                                                        ? 'clear'
                                                        : 'solid'),
                                            Object(e.i)(
                                                e.a,
                                                {
                                                    onClick: this.handleClick,
                                                    'aria-disabled': r
                                                        ? 'true'
                                                        : null,
                                                    class: Object.assign(
                                                        Object.assign(
                                                            {},
                                                            Object(a.a)(u)
                                                        ),
                                                        ((o = {}),
                                                        _defineProperty(
                                                            o,
                                                            t,
                                                            !0
                                                        ),
                                                        _defineProperty(
                                                            o,
                                                            n,
                                                            !0
                                                        ),
                                                        _defineProperty(
                                                            o,
                                                            ''
                                                                .concat(n, '-')
                                                                .concat(b),
                                                            void 0 !== b
                                                        ),
                                                        _defineProperty(
                                                            o,
                                                            ''
                                                                .concat(n, '-')
                                                                .concat(v),
                                                            void 0 !== v
                                                        ),
                                                        _defineProperty(
                                                            o,
                                                            ''
                                                                .concat(n, '-')
                                                                .concat(f),
                                                            void 0 !== f
                                                        ),
                                                        _defineProperty(
                                                            o,
                                                            ''
                                                                .concat(n, '-')
                                                                .concat(y),
                                                            !0
                                                        ),
                                                        _defineProperty(
                                                            o,
                                                            ''.concat(
                                                                n,
                                                                '-strong'
                                                            ),
                                                            p
                                                        ),
                                                        _defineProperty(
                                                            o,
                                                            'in-toolbar',
                                                            Object(a.c)(
                                                                'ion-toolbar',
                                                                this.el
                                                            )
                                                        ),
                                                        _defineProperty(
                                                            o,
                                                            'in-toolbar-color',
                                                            Object(a.c)(
                                                                'ion-toolbar[color]',
                                                                this.el
                                                            )
                                                        ),
                                                        _defineProperty(
                                                            o,
                                                            'button-has-icon-only',
                                                            h
                                                        ),
                                                        _defineProperty(
                                                            o,
                                                            'button-disabled',
                                                            r
                                                        ),
                                                        _defineProperty(
                                                            o,
                                                            'ion-activatable',
                                                            !0
                                                        ),
                                                        _defineProperty(
                                                            o,
                                                            'ion-focusable',
                                                            !0
                                                        ),
                                                        o)
                                                    ),
                                                },
                                                Object(e.i)(
                                                    g,
                                                    Object.assign({}, m, {
                                                        class: 'button-native',
                                                        disabled: r,
                                                        onFocus: this.onFocus,
                                                        onBlur: this.onBlur,
                                                        part: 'button',
                                                    }),
                                                    Object(e.i)(
                                                        'span',
                                                        {
                                                            class:
                                                                'button-inner',
                                                            part:
                                                                'button-inner',
                                                        },
                                                        Object(e.i)('slot', {
                                                            name: 'icon-only',
                                                        }),
                                                        Object(e.i)('slot', {
                                                            name: 'start',
                                                        }),
                                                        Object(e.i)(
                                                            'slot',
                                                            null
                                                        ),
                                                        Object(e.i)('slot', {
                                                            name: 'end',
                                                        })
                                                    ),
                                                    'md' === t &&
                                                        Object(e.i)(
                                                            'ion-ripple-effect',
                                                            {
                                                                type: this
                                                                    .rippleType,
                                                            }
                                                        )
                                                )
                                            )
                                        );
                                    },
                                },
                                {
                                    key: 'hasIconOnly',
                                    get: function() {
                                        return !!this.el.querySelector(
                                            'ion-icon[slot="icon-only"]'
                                        );
                                    },
                                },
                                {
                                    key: 'rippleType',
                                    get: function() {
                                        return (void 0 === this.fill ||
                                            'clear' === this.fill) &&
                                            this.hasIconOnly &&
                                            this.inToolbar
                                            ? 'unbounded'
                                            : 'bounded';
                                    },
                                },
                                {
                                    key: 'el',
                                    get: function() {
                                        return Object(e.f)(this);
                                    },
                                },
                            ],
                            [
                                {
                                    key: 'style',
                                    get: function() {
                                        return ':host{--overflow:hidden;--ripple-color:currentColor;--border-width:initial;--border-color:initial;--border-style:initial;--color-activated:var(--color);--color-focused:var(--color);--color-hover:var(--color);--box-shadow:none;display:inline-block;width:auto;color:var(--color);font-family:var(--ion-font-family,inherit);text-align:center;text-decoration:none;text-overflow:ellipsis;white-space:nowrap;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;vertical-align:top;vertical-align:-webkit-baseline-middle;pointer-events:auto;-webkit-font-kerning:none;font-kerning:none}:host(.button-disabled){cursor:default;opacity:.5;pointer-events:none}:host(.button-solid){--background:var(--ion-color-primary,#3880ff);--color:var(--ion-color-primary-contrast,#fff)}:host(.button-outline){--border-color:var(--ion-color-primary,#3880ff)}:host(.button-clear),:host(.button-outline){--background:transparent;--color:var(--ion-color-primary,#3880ff)}:host(.button-clear){--border-width:0}:host(.button-block){display:block}:host(.button-block) .button-native{margin-left:0;margin-right:0;display:block;width:100%;clear:both;contain:content}:host(.button-block) .button-native:after{clear:both}:host(.button-full){display:block}:host(.button-full) .button-native{margin-left:0;margin-right:0;display:block;width:100%;contain:content}:host(.button-full:not(.button-round)) .button-native{border-radius:0;border-right-width:0;border-left-width:0}.button-native{border-radius:var(--border-radius);-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;display:block;position:relative;width:100%;height:100%;-webkit-transition:var(--transition);transition:var(--transition);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);outline:none;background:var(--background);line-height:1;-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);contain:layout style;cursor:pointer;opacity:var(--opacity);overflow:var(--overflow);z-index:0;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-appearance:none;-moz-appearance:none;appearance:none}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.button-native{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}.button-native::-moz-focus-inner{border:0}.button-inner{display:-ms-flexbox;display:flex;position:relative;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%;z-index:1}::slotted(ion-icon){font-size:1.4em;pointer-events:none}::slotted(ion-icon[slot=start]){margin-left:-.3em;margin-right:.3em;margin-top:0;margin-bottom:0}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){::slotted(ion-icon[slot=start]){margin-left:unset;margin-right:unset;-webkit-margin-start:-.3em;margin-inline-start:-.3em;-webkit-margin-end:.3em;margin-inline-end:.3em}}::slotted(ion-icon[slot=end]){margin-left:.3em;margin-right:-.2em;margin-top:0;margin-bottom:0}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){::slotted(ion-icon[slot=end]){margin-left:unset;margin-right:unset;-webkit-margin-start:.3em;margin-inline-start:.3em;-webkit-margin-end:-.2em;margin-inline-end:-.2em}}::slotted(ion-icon[slot=icon-only]){font-size:1.8em}ion-ripple-effect{color:var(--ripple-color)}.button-native:after{left:0;right:0;top:0;bottom:0;position:absolute;content:"";opacity:0}:host(.ion-activated){color:var(--color-activated)}:host(.ion-activated) .button-native:after{background:var(--background-activated);opacity:var(--background-activated-opacity)}:host(.ion-focused){color:var(--color-focused)}:host(.ion-focused) .button-native:after{background:var(--background-focused);opacity:var(--background-focused-opacity)}@media (any-hover:hover){:host(:hover){color:var(--color-hover)}:host(:hover) .button-native:after{background:var(--background-hover);opacity:var(--background-hover-opacity)}}:host(.button-solid.ion-color) .button-native{background:var(--ion-color-base);color:var(--ion-color-contrast)}:host(.button-outline.ion-color) .button-native{border-color:var(--ion-color-base)}:host(.button-clear.ion-color) .button-native,:host(.button-outline.ion-color) .button-native{background:transparent;color:var(--ion-color-base)}:host(.in-toolbar:not(.ion-color):not(.in-toolbar-color)) .button-native{color:var(--ion-toolbar-color,var(--color))}:host(.button-outline.in-toolbar:not(.ion-color):not(.in-toolbar-color)) .button-native{border-color:var(--ion-toolbar-color,var(--color,var(--border-color)))}:host(.button-solid.in-toolbar:not(.ion-color):not(.in-toolbar-color)) .button-native{background:var(--ion-toolbar-color,var(--background));color:var(--ion-toolbar-background,var(--color))}:host{--border-radius:10px;--padding-top:0;--padding-bottom:0;--padding-start:1em;--padding-end:1em;--transition:background-color,opacity 100ms linear;margin-left:2px;margin-right:2px;margin-top:4px;margin-bottom:4px;height:2.8em;font-size:16px;font-weight:500;letter-spacing:-.03em}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){:host{margin-left:unset;margin-right:unset;-webkit-margin-start:2px;margin-inline-start:2px;-webkit-margin-end:2px;margin-inline-end:2px}}:host(.button-solid){--background-activated:var(--ion-color-primary-shade,#3171e0);--background-focused:var(--ion-color-primary-shade,#3171e0);--background-hover:var(--ion-color-primary-tint,#4c8dff);--background-activated-opacity:1;--background-focused-opacity:1;--background-hover-opacity:1}:host(.button-outline){--border-radius:10px;--border-width:1px;--border-style:solid;--background-activated:var(--ion-color-primary,#3880ff);--background-focused-opacity:.1;--color-activated:var(--ion-color-primary-contrast,#fff)}:host(.button-clear),:host(.button-outline){--background-focused:var(--ion-color-primary,#3880ff);--background-hover:transparent}:host(.button-clear){--background-activated:transparent;--background-focused-opacity:.1;font-size:17px;font-weight:400;letter-spacing:0}:host(.button-large){--border-radius:12px;--padding-top:0;--padding-start:1em;--padding-end:1em;--padding-bottom:0;height:2.8em;font-size:20px}:host(.button-small){--border-radius:6px;--padding-top:0;--padding-start:0.9em;--padding-end:0.9em;--padding-bottom:0;height:2.1em;font-size:13px}:host(.button-round){--border-radius:64px;--padding-top:0;--padding-start:26px;--padding-end:26px;--padding-bottom:0}:host(.button-strong){font-weight:600}:host(.button-clear.ion-activated){opacity:.4}:host(.button-outline.ion-activated.ion-color) .button-native{color:var(--ion-color-contrast)}:host(.button-outline.ion-activated.ion-color) .button-native:after{background:var(--ion-color-base)}:host(.button-solid.ion-color.ion-activated) .button-native:after{background:var(--ion-color-shade)}:host(.button-clear.ion-focused.ion-color) .button-native,:host(.button-outline.ion-focused.ion-color) .button-native{color:var(--ion-color-base)}:host(.button-clear.ion-focused.ion-color) .button-native:after,:host(.button-outline.ion-focused.ion-color) .button-native:after{background:var(--ion-color-base)}:host(.button-solid.ion-color.ion-focused) .button-native:after{background:var(--ion-color-shade)}@media (any-hover:hover){:host(.button-clear:hover),:host(.button-outline:hover){opacity:.6}:host(.button-clear.ion-color:hover) .button-native,:host(.button-outline.ion-color:hover) .button-native{color:var(--ion-color-base)}:host(.button-clear.ion-color:hover) .button-native:after,:host(.button-outline.ion-color:hover) .button-native:after{background:transparent}:host(.button-solid.ion-color:hover) .button-native:after{background:var(--ion-color-tint)}:host(:hover.button-solid.in-toolbar:not(.ion-color):not(.in-toolbar-color)) .button-native:after{background:#fff;opacity:.1}}';
                                    },
                                },
                            ]
                        ),
                        o
                    );
                })(),
                c = function(o, t, n, i, e) {
                    return (
                        (n = 'ios' === (n && b(n)) ? 'ios' : 'md'),
                        i && 'ios' === n
                            ? (o = b(i))
                            : e && 'md' === n
                            ? (o = b(e))
                            : (o || !t || d(t) || (o = t), u(o) && (o = b(o))),
                        u(o) && '' !== o.trim()
                            ? '' !== o.replace(/[a-z]|-|\d/gi, '')
                                ? null
                                : o
                            : null
                    );
                },
                l = function(o) {
                    return u(o) && ((o = o.trim()), d(o)) ? o : null;
                },
                d = function(o) {
                    return o.length > 0 && /(\/|\.)/.test(o);
                },
                u = function(o) {
                    return 'string' == typeof o;
                },
                b = function(o) {
                    return o.toLowerCase();
                },
                h = new Map(),
                f = new Map(),
                p = (function() {
                    function o(t) {
                        _classCallCheck(this, o),
                            Object(e.k)(this, t),
                            (this.isVisible = !1),
                            (this.mode = v()),
                            (this.lazy = !1);
                    }
                    return (
                        _createClass(
                            o,
                            [
                                {
                                    key: 'connectedCallback',
                                    value: function() {
                                        var o = this;
                                        this.waitUntilVisible(
                                            this.el,
                                            '50px',
                                            function() {
                                                (o.isVisible = !0),
                                                    o.loadIcon();
                                            }
                                        );
                                    },
                                },
                                {
                                    key: 'disconnectedCallback',
                                    value: function() {
                                        this.io &&
                                            (this.io.disconnect(),
                                            (this.io = void 0));
                                    },
                                },
                                {
                                    key: 'waitUntilVisible',
                                    value: function(o, t, n) {
                                        var i = this;
                                        if (
                                            this.lazy &&
                                            'undefined' != typeof window &&
                                            window.IntersectionObserver
                                        ) {
                                            var e = (this.io = new window.IntersectionObserver(
                                                function(o) {
                                                    o[0].isIntersecting &&
                                                        (e.disconnect(),
                                                        (i.io = void 0),
                                                        n());
                                                },
                                                { rootMargin: t }
                                            ));
                                            e.observe(o);
                                        } else n();
                                    },
                                },
                                {
                                    key: 'loadIcon',
                                    value: function() {
                                        var o = this;
                                        if (this.isVisible) {
                                            var t = (function(o) {
                                                var t,
                                                    n = l(o.src);
                                                if (n) return n;
                                                if (
                                                    (n = c(
                                                        o.name,
                                                        o.icon,
                                                        o.mode,
                                                        o.ios,
                                                        o.md
                                                    ))
                                                )
                                                    return (
                                                        (t = n),
                                                        (function() {
                                                            if (
                                                                'undefined' ==
                                                                typeof window
                                                            )
                                                                return new Map();
                                                            if (!i) {
                                                                var o = window;
                                                                (o.Ionicons =
                                                                    o.Ionicons ||
                                                                    {}),
                                                                    (i = o.Ionicons.map =
                                                                        o
                                                                            .Ionicons
                                                                            .map ||
                                                                        new Map());
                                                            }
                                                            return i;
                                                        })().get(t) ||
                                                            Object(e.j)(
                                                                'svg/'.concat(
                                                                    t,
                                                                    '.svg'
                                                                )
                                                            )
                                                    );
                                                if (o.icon) {
                                                    if ((n = l(o.icon)))
                                                        return n;
                                                    if ((n = l(o.icon[o.mode])))
                                                        return n;
                                                }
                                                return null;
                                            })(this);
                                            t &&
                                                (h.has(t)
                                                    ? (this.svgContent = h.get(
                                                          t
                                                      ))
                                                    : (function(o) {
                                                          var t = f.get(o);
                                                          if (!t) {
                                                              if (
                                                                  'undefined' ==
                                                                  typeof fetch
                                                              )
                                                                  return (
                                                                      h.set(
                                                                          o,
                                                                          ''
                                                                      ),
                                                                      Promise.resolve()
                                                                  );
                                                              (t = fetch(
                                                                  o
                                                              ).then(function(
                                                                  t
                                                              ) {
                                                                  if (t.ok)
                                                                      return t
                                                                          .text()
                                                                          .then(
                                                                              function(
                                                                                  t
                                                                              ) {
                                                                                  h.set(
                                                                                      o,
                                                                                      (function(
                                                                                          o
                                                                                      ) {
                                                                                          if (
                                                                                              o &&
                                                                                              'undefined' !=
                                                                                                  typeof document
                                                                                          ) {
                                                                                              var t = document.createElement(
                                                                                                  'div'
                                                                                              );
                                                                                              t.innerHTML = o;
                                                                                              for (
                                                                                                  var n =
                                                                                                      t
                                                                                                          .childNodes
                                                                                                          .length -
                                                                                                      1;
                                                                                                  n >=
                                                                                                  0;
                                                                                                  n--
                                                                                              )
                                                                                                  'svg' !==
                                                                                                      t.childNodes[
                                                                                                          n
                                                                                                      ].nodeName.toLowerCase() &&
                                                                                                      t.removeChild(
                                                                                                          t
                                                                                                              .childNodes[
                                                                                                              n
                                                                                                          ]
                                                                                                      );
                                                                                              var i =
                                                                                                  t.firstElementChild;
                                                                                              if (
                                                                                                  i &&
                                                                                                  'svg' ===
                                                                                                      i.nodeName.toLowerCase()
                                                                                              ) {
                                                                                                  var e =
                                                                                                      i.getAttribute(
                                                                                                          'class'
                                                                                                      ) ||
                                                                                                      '';
                                                                                                  if (
                                                                                                      (i.setAttribute(
                                                                                                          'class',
                                                                                                          (
                                                                                                              e +
                                                                                                              ' s-ion-icon'
                                                                                                          ).trim()
                                                                                                      ),
                                                                                                      (function o(
                                                                                                          t
                                                                                                      ) {
                                                                                                          if (
                                                                                                              1 ===
                                                                                                              t.nodeType
                                                                                                          ) {
                                                                                                              if (
                                                                                                                  'script' ===
                                                                                                                  t.nodeName.toLowerCase()
                                                                                                              )
                                                                                                                  return !1;
                                                                                                              for (
                                                                                                                  var n = 0;
                                                                                                                  n <
                                                                                                                  t
                                                                                                                      .attributes
                                                                                                                      .length;
                                                                                                                  n++
                                                                                                              ) {
                                                                                                                  var i =
                                                                                                                      t
                                                                                                                          .attributes[
                                                                                                                          n
                                                                                                                      ]
                                                                                                                          .value;
                                                                                                                  if (
                                                                                                                      u(
                                                                                                                          i
                                                                                                                      ) &&
                                                                                                                      0 ===
                                                                                                                          i
                                                                                                                              .toLowerCase()
                                                                                                                              .indexOf(
                                                                                                                                  'on'
                                                                                                                              )
                                                                                                                  )
                                                                                                                      return !1;
                                                                                                              }
                                                                                                              for (
                                                                                                                  var e = 0;
                                                                                                                  e <
                                                                                                                  t
                                                                                                                      .childNodes
                                                                                                                      .length;
                                                                                                                  e++
                                                                                                              )
                                                                                                                  if (
                                                                                                                      !o(
                                                                                                                          t
                                                                                                                              .childNodes[
                                                                                                                              e
                                                                                                                          ]
                                                                                                                      )
                                                                                                                  )
                                                                                                                      return !1;
                                                                                                          }
                                                                                                          return !0;
                                                                                                      })(
                                                                                                          i
                                                                                                      ))
                                                                                                  )
                                                                                                      return t.innerHTML;
                                                                                              }
                                                                                          }
                                                                                          return '';
                                                                                      })(
                                                                                          t
                                                                                      )
                                                                                  );
                                                                              }
                                                                          );
                                                                  h.set(o, '');
                                                              })),
                                                                  f.set(o, t);
                                                          }
                                                          return t;
                                                      })(t).then(function() {
                                                          return (o.svgContent = h.get(
                                                              t
                                                          ));
                                                      }));
                                        }
                                        if (!this.ariaLabel) {
                                            var n = c(
                                                this.name,
                                                this.icon,
                                                this.mode,
                                                this.ios,
                                                this.md
                                            );
                                            n &&
                                                (this.ariaLabel = n.replace(
                                                    /\-/g,
                                                    ' '
                                                ));
                                        }
                                    },
                                },
                                {
                                    key: 'render',
                                    value: function() {
                                        var o,
                                            t = this.mode || 'md',
                                            n =
                                                this.flipRtl ||
                                                (this.ariaLabel &&
                                                    (this.ariaLabel.indexOf(
                                                        'arrow'
                                                    ) > -1 ||
                                                        this.ariaLabel.indexOf(
                                                            'chevron'
                                                        ) > -1) &&
                                                    !1 !== this.flipRtl);
                                        return Object(e.i)(
                                            e.a,
                                            {
                                                role: 'img',
                                                class: Object.assign(
                                                    Object.assign(
                                                        _defineProperty(
                                                            {},
                                                            t,
                                                            !0
                                                        ),
                                                        g(this.color)
                                                    ),
                                                    ((o = {}),
                                                    _defineProperty(
                                                        o,
                                                        'icon-'.concat(
                                                            this.size
                                                        ),
                                                        !!this.size
                                                    ),
                                                    _defineProperty(
                                                        o,
                                                        'flip-rtl',
                                                        !!n &&
                                                            'rtl' ===
                                                                this.el
                                                                    .ownerDocument
                                                                    .dir
                                                    ),
                                                    o)
                                                ),
                                            },
                                            this.svgContent
                                                ? Object(e.i)('div', {
                                                      class: 'icon-inner',
                                                      innerHTML: this
                                                          .svgContent,
                                                  })
                                                : Object(e.i)('div', {
                                                      class: 'icon-inner',
                                                  })
                                        );
                                    },
                                },
                                {
                                    key: 'el',
                                    get: function() {
                                        return Object(e.f)(this);
                                    },
                                },
                            ],
                            [
                                {
                                    key: 'assetsDirs',
                                    get: function() {
                                        return ['svg'];
                                    },
                                },
                                {
                                    key: 'watchers',
                                    get: function() {
                                        return {
                                            name: ['loadIcon'],
                                            src: ['loadIcon'],
                                            icon: ['loadIcon'],
                                        };
                                    },
                                },
                                {
                                    key: 'style',
                                    get: function() {
                                        return ':host{display:inline-block;width:1em;height:1em;contain:strict;fill:currentColor;-webkit-box-sizing:content-box!important;box-sizing:content-box!important}:host .ionicon{stroke:currentColor}.ionicon-fill-none{fill:none}.ionicon-stroke-width{stroke-width:32px;stroke-width:var(--ionicon-stroke-width,32px)}.icon-inner,.ionicon,svg{display:block;height:100%;width:100%}:host(.flip-rtl) .icon-inner{-webkit-transform:scaleX(-1);transform:scaleX(-1)}:host(.icon-small){font-size:18px!important}:host(.icon-large){font-size:32px!important}:host(.ion-color){color:var(--ion-color-base)!important}:host(.ion-color-primary){--ion-color-base:var(--ion-color-primary,#3880ff)}:host(.ion-color-secondary){--ion-color-base:var(--ion-color-secondary,#0cd1e8)}:host(.ion-color-tertiary){--ion-color-base:var(--ion-color-tertiary,#f4a942)}:host(.ion-color-success){--ion-color-base:var(--ion-color-success,#10dc60)}:host(.ion-color-warning){--ion-color-base:var(--ion-color-warning,#ffce00)}:host(.ion-color-danger){--ion-color-base:var(--ion-color-danger,#f14141)}:host(.ion-color-light){--ion-color-base:var(--ion-color-light,#f4f5f8)}:host(.ion-color-medium){--ion-color-base:var(--ion-color-medium,#989aa2)}:host(.ion-color-dark){--ion-color-base:var(--ion-color-dark,#222428)}';
                                    },
                                },
                            ]
                        ),
                        o
                    );
                })(),
                v = function() {
                    return (
                        ('undefined' != typeof document &&
                            document.documentElement.getAttribute('mode')) ||
                        'md'
                    );
                },
                g = function(o) {
                    return o
                        ? _defineProperty(
                              { 'ion-color': !0 },
                              'ion-color-'.concat(o),
                              !0
                          )
                        : null;
                };
        },
    },
]);
