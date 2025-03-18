'use strict';

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _wrapNativeSuper(t) { var r = "function" == typeof Map ? new Map() : void 0; return _wrapNativeSuper = function _wrapNativeSuper(t) { if (null === t || !_isNativeFunction(t)) return t; if ("function" != typeof t) throw new TypeError("Super expression must either be null or a function"); if (void 0 !== r) { if (r.has(t)) return r.get(t); r.set(t, Wrapper); } function Wrapper() { return _construct(t, arguments, _getPrototypeOf(this).constructor); } return Wrapper.prototype = Object.create(t.prototype, { constructor: { value: Wrapper, enumerable: !1, writable: !0, configurable: !0 } }), _setPrototypeOf(Wrapper, t); }, _wrapNativeSuper(t); }
function _construct(t, e, r) { if (_isNativeReflectConstruct()) return Reflect.construct.apply(null, arguments); var o = [null]; o.push.apply(o, e); var p = new (t.bind.apply(t, o))(); return r && _setPrototypeOf(p, r.prototype), p; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _isNativeFunction(t) { try { return -1 !== Function.toString.call(t).indexOf("[native code]"); } catch (n) { return "function" == typeof t; } }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
customElements.define('compodoc-menu', /*#__PURE__*/function (_HTMLElement) {
  function _class() {
    var _this;
    _classCallCheck(this, _class);
    _this = _callSuper(this, _class);
    _this.isNormalMode = _this.getAttribute('mode') === 'normal';
    return _this;
  }
  _inherits(_class, _HTMLElement);
  return _createClass(_class, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      this.render(this.isNormalMode);
    }
  }, {
    key: "render",
    value: function render(isNormalMode) {
      var tp = lithtml.html("\n        <nav>\n            <ul class=\"list\">\n                <li class=\"title\">\n                    <a href=\"index.html\" data-type=\"index-link\">ordering-app documentation</a>\n                </li>\n\n                <li class=\"divider\"></li>\n                ".concat(isNormalMode ? "<div id=\"book-search-input\" role=\"search\"><input type=\"text\" placeholder=\"Type to search\"></div>" : '', "\n                <li class=\"chapter\">\n                    <a data-type=\"chapter-link\" href=\"index.html\"><span class=\"icon ion-ios-home\"></span>Getting started</a>\n                    <ul class=\"links\">\n                        <li class=\"link\">\n                            <a href=\"overview.html\" data-type=\"chapter-link\">\n                                <span class=\"icon ion-ios-keypad\"></span>Overview\n                            </a>\n                        </li>\n                        <li class=\"link\">\n                            <a href=\"index.html\" data-type=\"chapter-link\">\n                                <span class=\"icon ion-ios-paper\"></span>README\n                            </a>\n                        </li>\n                                <li class=\"link\">\n                                    <a href=\"dependencies.html\" data-type=\"chapter-link\">\n                                        <span class=\"icon ion-ios-list\"></span>Dependencies\n                                    </a>\n                                </li>\n                                <li class=\"link\">\n                                    <a href=\"properties.html\" data-type=\"chapter-link\">\n                                        <span class=\"icon ion-ios-apps\"></span>Properties\n                                    </a>\n                                </li>\n                    </ul>\n                </li>\n                    <li class=\"chapter modules\">\n                        <a data-type=\"chapter-link\" href=\"modules.html\">\n                            <div class=\"menu-toggler linked\" data-bs-toggle=\"collapse\" ").concat(isNormalMode ? 'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"', ">\n                                <span class=\"icon ion-ios-archive\"></span>\n                                <span class=\"link-name\">Modules</span>\n                                <span class=\"icon ion-ios-arrow-down\"></span>\n                            </div>\n                        </a>\n                        <ul class=\"links collapse \" ").concat(isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"', ">\n                            <li class=\"link\">\n                                <a href=\"modules/AuthModule.html\" data-type=\"entity-link\" >AuthModule</a>\n                                    <li class=\"chapter inner\">\n                                        <div class=\"simple menu-toggler\" data-bs-toggle=\"collapse\" ").concat(isNormalMode ? 'data-bs-target="#controllers-links-module-AuthModule-4455ef1363abec37c9e1200ba451dd9f392574875bbedb340599e7bc79eace9b19d1ccb5f27c7ec0070b6fb0aacfcde7be62abe0211335422c322b9d03743c6c"' : 'data-bs-target="#xs-controllers-links-module-AuthModule-4455ef1363abec37c9e1200ba451dd9f392574875bbedb340599e7bc79eace9b19d1ccb5f27c7ec0070b6fb0aacfcde7be62abe0211335422c322b9d03743c6c"', ">\n                                            <span class=\"icon ion-md-swap\"></span>\n                                            <span>Controllers</span>\n                                            <span class=\"icon ion-ios-arrow-down\"></span>\n                                        </div>\n                                        <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="controllers-links-module-AuthModule-4455ef1363abec37c9e1200ba451dd9f392574875bbedb340599e7bc79eace9b19d1ccb5f27c7ec0070b6fb0aacfcde7be62abe0211335422c322b9d03743c6c"' : 'id="xs-controllers-links-module-AuthModule-4455ef1363abec37c9e1200ba451dd9f392574875bbedb340599e7bc79eace9b19d1ccb5f27c7ec0070b6fb0aacfcde7be62abe0211335422c322b9d03743c6c"', ">\n                                            <li class=\"link\">\n                                                <a href=\"controllers/AuthController.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >AuthController</a>\n                                            </li>\n                                        </ul>\n                                    </li>\n                                <li class=\"chapter inner\">\n                                    <div class=\"simple menu-toggler\" data-bs-toggle=\"collapse\" ").concat(isNormalMode ? 'data-bs-target="#injectables-links-module-AuthModule-4455ef1363abec37c9e1200ba451dd9f392574875bbedb340599e7bc79eace9b19d1ccb5f27c7ec0070b6fb0aacfcde7be62abe0211335422c322b9d03743c6c"' : 'data-bs-target="#xs-injectables-links-module-AuthModule-4455ef1363abec37c9e1200ba451dd9f392574875bbedb340599e7bc79eace9b19d1ccb5f27c7ec0070b6fb0aacfcde7be62abe0211335422c322b9d03743c6c"', ">\n                                        <span class=\"icon ion-md-arrow-round-down\"></span>\n                                        <span>Injectables</span>\n                                        <span class=\"icon ion-ios-arrow-down\"></span>\n                                    </div>\n                                    <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="injectables-links-module-AuthModule-4455ef1363abec37c9e1200ba451dd9f392574875bbedb340599e7bc79eace9b19d1ccb5f27c7ec0070b6fb0aacfcde7be62abe0211335422c322b9d03743c6c"' : 'id="xs-injectables-links-module-AuthModule-4455ef1363abec37c9e1200ba451dd9f392574875bbedb340599e7bc79eace9b19d1ccb5f27c7ec0070b6fb0aacfcde7be62abe0211335422c322b9d03743c6c"', ">\n                                        <li class=\"link\">\n                                            <a href=\"injectables/AuthService.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >AuthService</a>\n                                        </li>\n                                        <li class=\"link\">\n                                            <a href=\"injectables/JwtStrategy.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >JwtStrategy</a>\n                                        </li>\n                                        <li class=\"link\">\n                                            <a href=\"injectables/LocalStrategy.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >LocalStrategy</a>\n                                        </li>\n                                    </ul>\n                                </li>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/AuthModule.html\" data-type=\"entity-link\" >AuthModule</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/BillingModule.html\" data-type=\"entity-link\" >BillingModule</a>\n                                    <li class=\"chapter inner\">\n                                        <div class=\"simple menu-toggler\" data-bs-toggle=\"collapse\" ").concat(isNormalMode ? 'data-bs-target="#controllers-links-module-BillingModule-0a51f13a4167d31dca8583716f2eb6c83ad7a1add64b5c943c6980cb0875b29fd5840ce7d7e161a3ba30a95dd17e2acc28373584db3f85a79687ae495d005a1c"' : 'data-bs-target="#xs-controllers-links-module-BillingModule-0a51f13a4167d31dca8583716f2eb6c83ad7a1add64b5c943c6980cb0875b29fd5840ce7d7e161a3ba30a95dd17e2acc28373584db3f85a79687ae495d005a1c"', ">\n                                            <span class=\"icon ion-md-swap\"></span>\n                                            <span>Controllers</span>\n                                            <span class=\"icon ion-ios-arrow-down\"></span>\n                                        </div>\n                                        <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="controllers-links-module-BillingModule-0a51f13a4167d31dca8583716f2eb6c83ad7a1add64b5c943c6980cb0875b29fd5840ce7d7e161a3ba30a95dd17e2acc28373584db3f85a79687ae495d005a1c"' : 'id="xs-controllers-links-module-BillingModule-0a51f13a4167d31dca8583716f2eb6c83ad7a1add64b5c943c6980cb0875b29fd5840ce7d7e161a3ba30a95dd17e2acc28373584db3f85a79687ae495d005a1c"', ">\n                                            <li class=\"link\">\n                                                <a href=\"controllers/BillingController.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >BillingController</a>\n                                            </li>\n                                        </ul>\n                                    </li>\n                                <li class=\"chapter inner\">\n                                    <div class=\"simple menu-toggler\" data-bs-toggle=\"collapse\" ").concat(isNormalMode ? 'data-bs-target="#injectables-links-module-BillingModule-0a51f13a4167d31dca8583716f2eb6c83ad7a1add64b5c943c6980cb0875b29fd5840ce7d7e161a3ba30a95dd17e2acc28373584db3f85a79687ae495d005a1c"' : 'data-bs-target="#xs-injectables-links-module-BillingModule-0a51f13a4167d31dca8583716f2eb6c83ad7a1add64b5c943c6980cb0875b29fd5840ce7d7e161a3ba30a95dd17e2acc28373584db3f85a79687ae495d005a1c"', ">\n                                        <span class=\"icon ion-md-arrow-round-down\"></span>\n                                        <span>Injectables</span>\n                                        <span class=\"icon ion-ios-arrow-down\"></span>\n                                    </div>\n                                    <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="injectables-links-module-BillingModule-0a51f13a4167d31dca8583716f2eb6c83ad7a1add64b5c943c6980cb0875b29fd5840ce7d7e161a3ba30a95dd17e2acc28373584db3f85a79687ae495d005a1c"' : 'id="xs-injectables-links-module-BillingModule-0a51f13a4167d31dca8583716f2eb6c83ad7a1add64b5c943c6980cb0875b29fd5840ce7d7e161a3ba30a95dd17e2acc28373584db3f85a79687ae495d005a1c"', ">\n                                        <li class=\"link\">\n                                            <a href=\"injectables/BillingService.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >BillingService</a>\n                                        </li>\n                                    </ul>\n                                </li>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/DatabaseModule.html\" data-type=\"entity-link\" >DatabaseModule</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/OrdersModule.html\" data-type=\"entity-link\" >OrdersModule</a>\n                                    <li class=\"chapter inner\">\n                                        <div class=\"simple menu-toggler\" data-bs-toggle=\"collapse\" ").concat(isNormalMode ? 'data-bs-target="#controllers-links-module-OrdersModule-bde0f521f93011110f486b13b6f9674b8ce8a6d2fd8c3b19df53c7d2ec1d42825c6dd6da4d2ab49b5f46eee4d5feb6abf760b074c7d186a69c15985c7d92fb0b"' : 'data-bs-target="#xs-controllers-links-module-OrdersModule-bde0f521f93011110f486b13b6f9674b8ce8a6d2fd8c3b19df53c7d2ec1d42825c6dd6da4d2ab49b5f46eee4d5feb6abf760b074c7d186a69c15985c7d92fb0b"', ">\n                                            <span class=\"icon ion-md-swap\"></span>\n                                            <span>Controllers</span>\n                                            <span class=\"icon ion-ios-arrow-down\"></span>\n                                        </div>\n                                        <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="controllers-links-module-OrdersModule-bde0f521f93011110f486b13b6f9674b8ce8a6d2fd8c3b19df53c7d2ec1d42825c6dd6da4d2ab49b5f46eee4d5feb6abf760b074c7d186a69c15985c7d92fb0b"' : 'id="xs-controllers-links-module-OrdersModule-bde0f521f93011110f486b13b6f9674b8ce8a6d2fd8c3b19df53c7d2ec1d42825c6dd6da4d2ab49b5f46eee4d5feb6abf760b074c7d186a69c15985c7d92fb0b"', ">\n                                            <li class=\"link\">\n                                                <a href=\"controllers/OrdersController.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >OrdersController</a>\n                                            </li>\n                                        </ul>\n                                    </li>\n                                <li class=\"chapter inner\">\n                                    <div class=\"simple menu-toggler\" data-bs-toggle=\"collapse\" ").concat(isNormalMode ? 'data-bs-target="#injectables-links-module-OrdersModule-bde0f521f93011110f486b13b6f9674b8ce8a6d2fd8c3b19df53c7d2ec1d42825c6dd6da4d2ab49b5f46eee4d5feb6abf760b074c7d186a69c15985c7d92fb0b"' : 'data-bs-target="#xs-injectables-links-module-OrdersModule-bde0f521f93011110f486b13b6f9674b8ce8a6d2fd8c3b19df53c7d2ec1d42825c6dd6da4d2ab49b5f46eee4d5feb6abf760b074c7d186a69c15985c7d92fb0b"', ">\n                                        <span class=\"icon ion-md-arrow-round-down\"></span>\n                                        <span>Injectables</span>\n                                        <span class=\"icon ion-ios-arrow-down\"></span>\n                                    </div>\n                                    <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="injectables-links-module-OrdersModule-bde0f521f93011110f486b13b6f9674b8ce8a6d2fd8c3b19df53c7d2ec1d42825c6dd6da4d2ab49b5f46eee4d5feb6abf760b074c7d186a69c15985c7d92fb0b"' : 'id="xs-injectables-links-module-OrdersModule-bde0f521f93011110f486b13b6f9674b8ce8a6d2fd8c3b19df53c7d2ec1d42825c6dd6da4d2ab49b5f46eee4d5feb6abf760b074c7d186a69c15985c7d92fb0b"', ">\n                                        <li class=\"link\">\n                                            <a href=\"injectables/OrdersRepository.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >OrdersRepository</a>\n                                        </li>\n                                        <li class=\"link\">\n                                            <a href=\"injectables/OrdersService.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >OrdersService</a>\n                                        </li>\n                                    </ul>\n                                </li>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/RmqModule.html\" data-type=\"entity-link\" >RmqModule</a>\n                                <li class=\"chapter inner\">\n                                    <div class=\"simple menu-toggler\" data-bs-toggle=\"collapse\" ").concat(isNormalMode ? 'data-bs-target="#injectables-links-module-RmqModule-47221f7cf294aae706fc9354ded936cc5aa7402a0b0c4c567a36bbfd4731b0e79c8318c738ec0f17669195b7f94c535c0db66665d42f4500ef67e4c373fc3b8f"' : 'data-bs-target="#xs-injectables-links-module-RmqModule-47221f7cf294aae706fc9354ded936cc5aa7402a0b0c4c567a36bbfd4731b0e79c8318c738ec0f17669195b7f94c535c0db66665d42f4500ef67e4c373fc3b8f"', ">\n                                        <span class=\"icon ion-md-arrow-round-down\"></span>\n                                        <span>Injectables</span>\n                                        <span class=\"icon ion-ios-arrow-down\"></span>\n                                    </div>\n                                    <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="injectables-links-module-RmqModule-47221f7cf294aae706fc9354ded936cc5aa7402a0b0c4c567a36bbfd4731b0e79c8318c738ec0f17669195b7f94c535c0db66665d42f4500ef67e4c373fc3b8f"' : 'id="xs-injectables-links-module-RmqModule-47221f7cf294aae706fc9354ded936cc5aa7402a0b0c4c567a36bbfd4731b0e79c8318c738ec0f17669195b7f94c535c0db66665d42f4500ef67e4c373fc3b8f"', ">\n                                        <li class=\"link\">\n                                            <a href=\"injectables/RmqService.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >RmqService</a>\n                                        </li>\n                                    </ul>\n                                </li>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/UsersModule.html\" data-type=\"entity-link\" >UsersModule</a>\n                                    <li class=\"chapter inner\">\n                                        <div class=\"simple menu-toggler\" data-bs-toggle=\"collapse\" ").concat(isNormalMode ? 'data-bs-target="#controllers-links-module-UsersModule-4ae09c2e2a54f6549febb1d6908cdf65639d4d3877a2233d2f59a042f978bd5a66e089cc6d92647ac45dd699773441302815dd43c2909db7597683c6166747d1"' : 'data-bs-target="#xs-controllers-links-module-UsersModule-4ae09c2e2a54f6549febb1d6908cdf65639d4d3877a2233d2f59a042f978bd5a66e089cc6d92647ac45dd699773441302815dd43c2909db7597683c6166747d1"', ">\n                                            <span class=\"icon ion-md-swap\"></span>\n                                            <span>Controllers</span>\n                                            <span class=\"icon ion-ios-arrow-down\"></span>\n                                        </div>\n                                        <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="controllers-links-module-UsersModule-4ae09c2e2a54f6549febb1d6908cdf65639d4d3877a2233d2f59a042f978bd5a66e089cc6d92647ac45dd699773441302815dd43c2909db7597683c6166747d1"' : 'id="xs-controllers-links-module-UsersModule-4ae09c2e2a54f6549febb1d6908cdf65639d4d3877a2233d2f59a042f978bd5a66e089cc6d92647ac45dd699773441302815dd43c2909db7597683c6166747d1"', ">\n                                            <li class=\"link\">\n                                                <a href=\"controllers/UsersController.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >UsersController</a>\n                                            </li>\n                                        </ul>\n                                    </li>\n                                <li class=\"chapter inner\">\n                                    <div class=\"simple menu-toggler\" data-bs-toggle=\"collapse\" ").concat(isNormalMode ? 'data-bs-target="#injectables-links-module-UsersModule-4ae09c2e2a54f6549febb1d6908cdf65639d4d3877a2233d2f59a042f978bd5a66e089cc6d92647ac45dd699773441302815dd43c2909db7597683c6166747d1"' : 'data-bs-target="#xs-injectables-links-module-UsersModule-4ae09c2e2a54f6549febb1d6908cdf65639d4d3877a2233d2f59a042f978bd5a66e089cc6d92647ac45dd699773441302815dd43c2909db7597683c6166747d1"', ">\n                                        <span class=\"icon ion-md-arrow-round-down\"></span>\n                                        <span>Injectables</span>\n                                        <span class=\"icon ion-ios-arrow-down\"></span>\n                                    </div>\n                                    <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="injectables-links-module-UsersModule-4ae09c2e2a54f6549febb1d6908cdf65639d4d3877a2233d2f59a042f978bd5a66e089cc6d92647ac45dd699773441302815dd43c2909db7597683c6166747d1"' : 'id="xs-injectables-links-module-UsersModule-4ae09c2e2a54f6549febb1d6908cdf65639d4d3877a2233d2f59a042f978bd5a66e089cc6d92647ac45dd699773441302815dd43c2909db7597683c6166747d1"', ">\n                                        <li class=\"link\">\n                                            <a href=\"injectables/UsersRepository.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >UsersRepository</a>\n                                        </li>\n                                        <li class=\"link\">\n                                            <a href=\"injectables/UsersService.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >UsersService</a>\n                                        </li>\n                                    </ul>\n                                </li>\n                            </li>\n                </ul>\n                </li>\n                        <li class=\"chapter\">\n                            <div class=\"simple menu-toggler\" data-bs-toggle=\"collapse\" ").concat(isNormalMode ? 'data-bs-target="#controllers-links"' : 'data-bs-target="#xs-controllers-links"', ">\n                                <span class=\"icon ion-md-swap\"></span>\n                                <span>Controllers</span>\n                                <span class=\"icon ion-ios-arrow-down\"></span>\n                            </div>\n                            <ul class=\"links collapse \" ").concat(isNormalMode ? 'id="controllers-links"' : 'id="xs-controllers-links"', ">\n                                <li class=\"link\">\n                                    <a href=\"controllers/AuthController.html\" data-type=\"entity-link\" >AuthController</a>\n                                </li>\n                                <li class=\"link\">\n                                    <a href=\"controllers/BillingController.html\" data-type=\"entity-link\" >BillingController</a>\n                                </li>\n                                <li class=\"link\">\n                                    <a href=\"controllers/OrdersController.html\" data-type=\"entity-link\" >OrdersController</a>\n                                </li>\n                                <li class=\"link\">\n                                    <a href=\"controllers/UsersController.html\" data-type=\"entity-link\" >UsersController</a>\n                                </li>\n                            </ul>\n                        </li>\n                    <li class=\"chapter\">\n                        <div class=\"simple menu-toggler\" data-bs-toggle=\"collapse\" ").concat(isNormalMode ? 'data-bs-target="#classes-links"' : 'data-bs-target="#xs-classes-links"', ">\n                            <span class=\"icon ion-ios-paper\"></span>\n                            <span>Classes</span>\n                            <span class=\"icon ion-ios-arrow-down\"></span>\n                        </div>\n                        <ul class=\"links collapse \" ").concat(isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"', ">\n                            <li class=\"link\">\n                                <a href=\"classes/AbstractDocument.html\" data-type=\"entity-link\" >AbstractDocument</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/AbstractRepository.html\" data-type=\"entity-link\" >AbstractRepository</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/CreateOrderDto.html\" data-type=\"entity-link\" >CreateOrderDto</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/CreateUserDto.html\" data-type=\"entity-link\" >CreateUserDto</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/JwtAuthGuard.html\" data-type=\"entity-link\" >JwtAuthGuard</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/LocalAuthGuard.html\" data-type=\"entity-link\" >LocalAuthGuard</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/Order.html\" data-type=\"entity-link\" >Order</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/User.html\" data-type=\"entity-link\" >User</a>\n                            </li>\n                        </ul>\n                    </li>\n                        <li class=\"chapter\">\n                            <div class=\"simple menu-toggler\" data-bs-toggle=\"collapse\" ").concat(isNormalMode ? 'data-bs-target="#injectables-links"' : 'data-bs-target="#xs-injectables-links"', ">\n                                <span class=\"icon ion-md-arrow-round-down\"></span>\n                                <span>Injectables</span>\n                                <span class=\"icon ion-ios-arrow-down\"></span>\n                            </div>\n                            <ul class=\"links collapse \" ").concat(isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"', ">\n                                <li class=\"link\">\n                                    <a href=\"injectables/AuthService.html\" data-type=\"entity-link\" >AuthService</a>\n                                </li>\n                                <li class=\"link\">\n                                    <a href=\"injectables/BillingService.html\" data-type=\"entity-link\" >BillingService</a>\n                                </li>\n                                <li class=\"link\">\n                                    <a href=\"injectables/JwtStrategy.html\" data-type=\"entity-link\" >JwtStrategy</a>\n                                </li>\n                                <li class=\"link\">\n                                    <a href=\"injectables/LocalStrategy.html\" data-type=\"entity-link\" >LocalStrategy</a>\n                                </li>\n                                <li class=\"link\">\n                                    <a href=\"injectables/OrdersRepository.html\" data-type=\"entity-link\" >OrdersRepository</a>\n                                </li>\n                                <li class=\"link\">\n                                    <a href=\"injectables/OrdersService.html\" data-type=\"entity-link\" >OrdersService</a>\n                                </li>\n                                <li class=\"link\">\n                                    <a href=\"injectables/RmqService.html\" data-type=\"entity-link\" >RmqService</a>\n                                </li>\n                                <li class=\"link\">\n                                    <a href=\"injectables/UsersRepository.html\" data-type=\"entity-link\" >UsersRepository</a>\n                                </li>\n                                <li class=\"link\">\n                                    <a href=\"injectables/UsersService.html\" data-type=\"entity-link\" >UsersService</a>\n                                </li>\n                            </ul>\n                        </li>\n                    <li class=\"chapter\">\n                        <div class=\"simple menu-toggler\" data-bs-toggle=\"collapse\" ").concat(isNormalMode ? 'data-bs-target="#guards-links"' : 'data-bs-target="#xs-guards-links"', ">\n                            <span class=\"icon ion-ios-lock\"></span>\n                            <span>Guards</span>\n                            <span class=\"icon ion-ios-arrow-down\"></span>\n                        </div>\n                        <ul class=\"links collapse \" ").concat(isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"', ">\n                            <li class=\"link\">\n                                <a href=\"guards/JwtAuthGuard.html\" data-type=\"entity-link\" >JwtAuthGuard</a>\n                            </li>\n                        </ul>\n                    </li>\n                    <li class=\"chapter\">\n                        <div class=\"simple menu-toggler\" data-bs-toggle=\"collapse\" ").concat(isNormalMode ? 'data-bs-target="#interfaces-links"' : 'data-bs-target="#xs-interfaces-links"', ">\n                            <span class=\"icon ion-md-information-circle-outline\"></span>\n                            <span>Interfaces</span>\n                            <span class=\"icon ion-ios-arrow-down\"></span>\n                        </div>\n                        <ul class=\"links collapse \" ").concat(isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"', ">\n                            <li class=\"link\">\n                                <a href=\"interfaces/RmqModuleOptions.html\" data-type=\"entity-link\" >RmqModuleOptions</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/TokenPayload.html\" data-type=\"entity-link\" >TokenPayload</a>\n                            </li>\n                        </ul>\n                    </li>\n                    <li class=\"chapter\">\n                        <div class=\"simple menu-toggler\" data-bs-toggle=\"collapse\" ").concat(isNormalMode ? 'data-bs-target="#miscellaneous-links"' : 'data-bs-target="#xs-miscellaneous-links"', ">\n                            <span class=\"icon ion-ios-cube\"></span>\n                            <span>Miscellaneous</span>\n                            <span class=\"icon ion-ios-arrow-down\"></span>\n                        </div>\n                        <ul class=\"links collapse \" ").concat(isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"', ">\n                            <li class=\"link\">\n                                <a href=\"miscellaneous/functions.html\" data-type=\"entity-link\">Functions</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"miscellaneous/variables.html\" data-type=\"entity-link\">Variables</a>\n                            </li>\n                        </ul>\n                    </li>\n                    <li class=\"chapter\">\n                        <a data-type=\"chapter-link\" href=\"coverage.html\"><span class=\"icon ion-ios-stats\"></span>Documentation coverage</a>\n                    </li>\n                    <li class=\"divider\"></li>\n                    <li class=\"copyright\">\n                        Documentation generated using <a href=\"https://compodoc.app/\" target=\"_blank\" rel=\"noopener noreferrer\">\n                            <img data-src=\"images/compodoc-vectorise.png\" class=\"img-responsive\" data-type=\"compodoc-logo\">\n                        </a>\n                    </li>\n            </ul>\n        </nav>\n        "));
      this.innerHTML = tp.strings;
    }
  }]);
}(/*#__PURE__*/_wrapNativeSuper(HTMLElement)));