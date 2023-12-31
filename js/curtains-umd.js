function _get(e, t, i) {
    return (_get = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function(e, t, i) {
        var r = _superPropBase(e, t);
        if (r) {
            var s = Object.getOwnPropertyDescriptor(r, t);
            return s.get ? s.get.call(i) : s.value
        }
    }
    )(e, t, i || e)
}
function _superPropBase(e, t) {
    for (; !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = _getPrototypeOf(e)); )
        ;
    return e
}
function _inherits(e, t) {
    if ("function" != typeof t && null !== t)
        throw new TypeError("Super expression must either be null or a function");
    e.prototype = Object.create(t && t.prototype, {
        constructor: {
            value: e,
            writable: !0,
            configurable: !0
        }
    }),
    t && _setPrototypeOf(e, t)
}
function _setPrototypeOf(e, t) {
    return (_setPrototypeOf = Object.setPrototypeOf || function(e, t) {
        return e.__proto__ = t,
        e
    }
    )(e, t)
}
function _createSuper(e) {
    var t = _isNativeReflectConstruct();
    return function() {
        var i, r = _getPrototypeOf(e);
        if (t) {
            var s = _getPrototypeOf(this).constructor;
            i = Reflect.construct(r, arguments, s)
        } else
            i = r.apply(this, arguments);
        return _possibleConstructorReturn(this, i)
    }
}
function _possibleConstructorReturn(e, t) {
    if (t && ("object" === _typeof(t) || "function" == typeof t))
        return t;
    if (void 0 !== t)
        throw new TypeError("Derived constructors may only return object or undefined");
    return _assertThisInitialized(e)
}
function _assertThisInitialized(e) {
    if (void 0 === e)
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e
}
function _isNativeReflectConstruct() {
    if ("undefined" == typeof Reflect || !Reflect.construct)
        return !1;
    if (Reflect.construct.sham)
        return !1;
    if ("function" == typeof Proxy)
        return !0;
    try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}
        ))),
        !0
    } catch (e) {
        return !1
    }
}
function _getPrototypeOf(e) {
    return (_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
        return e.__proto__ || Object.getPrototypeOf(e)
    }
    )(e)
}
function _classCallCheck(e, t) {
    if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function")
}
function _defineProperties(e, t) {
    for (var i = 0; i < t.length; i++) {
        var r = t[i];
        r.enumerable = r.enumerable || !1,
        r.configurable = !0,
        "value"in r && (r.writable = !0),
        Object.defineProperty(e, r.key, r)
    }
}
function _createClass(e, t, i) {
    return t && _defineProperties(e.prototype, t),
    i && _defineProperties(e, i),
    e
}
function _typeof(e) {
    return (_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e
    }
    : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    }
    )(e)
}
!function(e, t) {
    "object" === ("undefined" == typeof exports ? "undefined" : _typeof(exports)) && "undefined" != typeof module ? t(exports) : "function" == typeof define && define.amd ? define(["exports"], t) : t((e = "undefined" != typeof globalThis ? globalThis : e || self).window = e.window || {})
}(this, (function(e) {
    "use strict";
    var t = 0;
    function i() {
        if (!(t > 100)) {
            if (100 === t)
                console.warn("Curtains: too many warnings thrown, stop logging.");
            else {
                var e = Array.prototype.slice.call(arguments);
                console.warn.apply(console, e)
            }
            t++
        }
    }
    function r() {
        var e = Array.prototype.slice.call(arguments);
        console.error.apply(console, e)
    }
    function s() {
        return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (function(e) {
            var t = 16 * Math.random() | 0;
            return ("x" === e ? t : 3 & t | 8).toString(16).toUpperCase()
        }
        ))
    }
    function n(e) {
        return 0 == (e & e - 1)
    }
    var a = function() {
        function e(t) {
            if (_classCallCheck(this, e),
            this.type = "Scene",
            t && "Renderer" === t.type) {
                if (!t.gl)
                    return void r(this.type + ": Renderer WebGL context is undefined", t)
            } else
                r(this.type + ": Renderer not passed as first argument", t);
            this.renderer = t,
            this.gl = t.gl,
            this.initStacks()
        }
        return _createClass(e, [{
            key: "initStacks",
            value: function() {
                this.stacks = {
                    pingPong: [],
                    renderTargets: [],
                    opaque: [],
                    transparent: [],
                    renderPasses: [],
                    scenePasses: []
                }
            }
        }, {
            key: "resetPlaneStacks",
            value: function() {
                this.stacks.pingPong = [],
                this.stacks.renderTargets = [],
                this.stacks.opaque = [],
                this.stacks.transparent = [];
                for (var e = 0; e < this.renderer.planes.length; e++)
                    this.addPlane(this.renderer.planes[e])
            }
        }, {
            key: "resetShaderPassStacks",
            value: function() {
                this.stacks.scenePasses = [],
                this.stacks.renderPasses = [];
                for (var e = 0; e < this.renderer.shaderPasses.length; e++)
                    this.renderer.shaderPasses[e].index = e,
                    this.renderer.shaderPasses[e]._isScenePass ? this.stacks.scenePasses.push(this.renderer.shaderPasses[e]) : this.stacks.renderPasses.push(this.renderer.shaderPasses[e]);
                0 === this.stacks.scenePasses.length && (this.renderer.state.scenePassIndex = null)
            }
        }, {
            key: "addToRenderTargetsStack",
            value: function(e) {
                var t = this.renderer.planes.filter((function(t) {
                    return "PingPongPlane" !== t.type && t.target && t.uuid !== e.uuid
                }
                ))
                  , i = -1;
                if (e.target._depth) {
                    for (var r = t.length - 1; r >= 0; r--)
                        if (t[r].target.uuid === e.target.uuid) {
                            i = r + 1;
                            break
                        }
                } else
                    i = t.findIndex((function(t) {
                        return t.target.uuid === e.target.uuid
                    }
                    ));
                i = Math.max(0, i),
                t.splice(i, 0, e),
                e.target._depth ? (t.sort((function(e, t) {
                    return e.index - t.index
                }
                )),
                t.sort((function(e, t) {
                    return t.renderOrder - e.renderOrder
                }
                ))) : (t.sort((function(e, t) {
                    return t.index - e.index
                }
                )),
                t.sort((function(e, t) {
                    return e.renderOrder - t.renderOrder
                }
                ))),
                t.sort((function(e, t) {
                    return e.target.index - t.target.index
                }
                )),
                this.stacks.renderTargets = t
            }
        }, {
            key: "addToRegularPlaneStack",
            value: function(e) {
                for (var t = this.renderer.planes.filter((function(t) {
                    return "PingPongPlane" !== t.type && !t.target && t._transparent === e._transparent && t.uuid !== e.uuid
                }
                )), i = -1, r = t.length - 1; r >= 0; r--)
                    if (t[r]._geometry.definition.id === e._geometry.definition.id) {
                        i = r + 1;
                        break
                    }
                return i = Math.max(0, i),
                t.splice(i, 0, e),
                t.sort((function(e, t) {
                    return e.index - t.index
                }
                )),
                t
            }
        }, {
            key: "addPlane",
            value: function(e) {
                if ("PingPongPlane" === e.type)
                    this.stacks.pingPong.push(e);
                else if (e.target)
                    this.addToRenderTargetsStack(e);
                else if (e._transparent) {
                    var t = this.addToRegularPlaneStack(e);
                    t.sort((function(e, t) {
                        return t.relativeTranslation.z - e.relativeTranslation.z
                    }
                    )),
                    t.sort((function(e, t) {
                        return t.renderOrder - e.renderOrder
                    }
                    )),
                    this.stacks.transparent = t
                } else {
                    var i = this.addToRegularPlaneStack(e);
                    i.sort((function(e, t) {
                        return t.renderOrder - e.renderOrder
                    }
                    )),
                    this.stacks.opaque = i
                }
            }
        }, {
            key: "removePlane",
            value: function(e) {
                "PingPongPlane" === e.type ? this.stacks.pingPong = this.stacks.pingPong.filter((function(t) {
                    return t.uuid !== e.uuid
                }
                )) : e.target ? this.stacks.renderTargets = this.stacks.renderTargets.filter((function(t) {
                    return t.uuid !== e.uuid
                }
                )) : e._transparent ? this.stacks.transparent = this.stacks.transparent.filter((function(t) {
                    return t.uuid !== e.uuid
                }
                )) : this.stacks.opaque = this.stacks.opaque.filter((function(t) {
                    return t.uuid !== e.uuid
                }
                ))
            }
        }, {
            key: "setPlaneRenderOrder",
            value: function(e) {
                if ("ShaderPass" === e.type)
                    this.sortShaderPassStack(e._isScenePass ? this.stacks.scenePasses : this.stacks.renderPasses);
                else if ("PingPongPlane" === e.type)
                    return;
                if (e.target)
                    e.target._depth ? (this.stacks.renderTargets.sort((function(e, t) {
                        return e.index - t.index
                    }
                    )),
                    this.stacks.renderTargets.sort((function(e, t) {
                        return t.renderOrder - e.renderOrder
                    }
                    ))) : (this.stacks.renderTargets.sort((function(e, t) {
                        return t.index - e.index
                    }
                    )),
                    this.stacks.renderTargets.sort((function(e, t) {
                        return e.renderOrder - t.renderOrder
                    }
                    ))),
                    this.stacks.renderTargets.sort((function(e, t) {
                        return e.target.index - t.target.index
                    }
                    ));
                else {
                    var t = e._transparent ? this.stacks.transparent : this.stacks.opaque
                      , i = this.stacks.scenePasses.find((function(e, t) {
                        return e._isScenePass && !e._depth && 0 === t
                    }
                    ));
                    !this.renderer.depth || i ? (t.sort((function(e, t) {
                        return t.index - e.index
                    }
                    )),
                    e._transparent && t.sort((function(e, t) {
                        return e.relativeTranslation.z - t.relativeTranslation.z
                    }
                    )),
                    t.sort((function(e, t) {
                        return e.renderOrder - t.renderOrder
                    }
                    ))) : (t.sort((function(e, t) {
                        return e.index - t.index
                    }
                    )),
                    e._transparent && t.sort((function(e, t) {
                        return t.relativeTranslation.z - e.relativeTranslation.z
                    }
                    )),
                    t.sort((function(e, t) {
                        return t.renderOrder - e.renderOrder
                    }
                    )))
                }
            }
        }, {
            key: "addShaderPass",
            value: function(e) {
                e._isScenePass ? (this.stacks.scenePasses.push(e),
                this.sortShaderPassStack(this.stacks.scenePasses)) : (this.stacks.renderPasses.push(e),
                this.sortShaderPassStack(this.stacks.renderPasses))
            }
        }, {
            key: "removeShaderPass",
            value: function(e) {
                this.resetShaderPassStacks()
            }
        }, {
            key: "sortShaderPassStack",
            value: function(e) {
                e.sort((function(e, t) {
                    return e.index - t.index
                }
                )),
                e.sort((function(e, t) {
                    return e.renderOrder - t.renderOrder
                }
                ))
            }
        }, {
            key: "enableShaderPass",
            value: function() {
                this.stacks.scenePasses.length && 0 === this.stacks.renderPasses.length && this.renderer.planes.length && (this.renderer.state.scenePassIndex = 0,
                this.renderer.bindFrameBuffer(this.stacks.scenePasses[0].target))
            }
        }, {
            key: "drawRenderPasses",
            value: function() {
                this.stacks.scenePasses.length && this.stacks.renderPasses.length && this.renderer.planes.length && (this.renderer.state.scenePassIndex = 0,
                this.renderer.bindFrameBuffer(this.stacks.scenePasses[0].target));
                for (var e = 0; e < this.stacks.renderPasses.length; e++)
                    this.stacks.renderPasses[e]._startDrawing(),
                    this.renderer.clearDepth()
            }
        }, {
            key: "drawScenePasses",
            value: function() {
                for (var e = 0; e < this.stacks.scenePasses.length; e++)
                    this.stacks.scenePasses[e]._startDrawing()
            }
        }, {
            key: "drawPingPongStack",
            value: function() {
                for (var e = 0; e < this.stacks.pingPong.length; e++) {
                    var t = this.stacks.pingPong[e];
                    t && t._startDrawing()
                }
            }
        }, {
            key: "drawStack",
            value: function(e) {
                for (var t = 0; t < this.stacks[e].length; t++) {
                    var i = this.stacks[e][t];
                    i && i._startDrawing()
                }
            }
        }, {
            key: "draw",
            value: function() {
                this.drawPingPongStack(),
                this.enableShaderPass(),
                this.drawStack("renderTargets"),
                this.drawRenderPasses(),
                this.renderer.setBlending(!1),
                this.drawStack("opaque"),
                this.stacks.transparent.length && (this.renderer.setBlending(!0),
                this.drawStack("transparent")),
                this.drawScenePasses()
            }
        }]),
        e
    }()
      , o = function() {
        function e() {
            _classCallCheck(this, e),
            this.geometries = [],
            this.clear()
        }
        return _createClass(e, [{
            key: "clear",
            value: function() {
                this.textures = [],
                this.programs = []
            }
        }, {
            key: "getGeometryFromID",
            value: function(e) {
                return this.geometries.find((function(t) {
                    return t.id === e
                }
                ))
            }
        }, {
            key: "addGeometry",
            value: function(e, t, i) {
                this.geometries.push({
                    id: e,
                    vertices: t,
                    uvs: i
                })
            }
        }, {
            key: "isSameShader",
            value: function(e, t) {
                return 0 === e.localeCompare(t)
            }
        }, {
            key: "getProgramFromShaders",
            value: function(e, t) {
                var i = this;
                return this.programs.find((function(r) {
                    return i.isSameShader(r.vsCode, e) && i.isSameShader(r.fsCode, t)
                }
                ))
            }
        }, {
            key: "addProgram",
            value: function(e) {
                this.programs.push(e)
            }
        }, {
            key: "getTextureFromSource",
            value: function(e) {
                var t = "string" == typeof e ? e : e.src;
                return this.textures.find((function(e) {
                    return e.source && e.source.src === t
                }
                ))
            }
        }, {
            key: "addTexture",
            value: function(e) {
                this.getTextureFromSource(e.source) || this.textures.push(e)
            }
        }, {
            key: "removeTexture",
            value: function(e) {
                this.textures = this.textures.filter((function(t) {
                    return t.uuid !== e.uuid
                }
                ))
            }
        }]),
        e
    }()
      , h = function() {
        function e() {
            _classCallCheck(this, e),
            this.clear()
        }
        return _createClass(e, [{
            key: "clear",
            value: function() {
                this.queue = []
            }
        }, {
            key: "add",
            value: function(e) {
                var t = this
                  , i = arguments.length > 1 && void 0 !== arguments[1] && arguments[1]
                  , r = {
                    callback: e,
                    keep: i,
                    timeout: null
                };
                return r.timeout = setTimeout((function() {
                    t.queue.push(r)
                }
                ), 0),
                r
            }
        }, {
            key: "execute",
            value: function() {
                var e = this;
                this.queue.map((function(t) {
                    t.callback && t.callback(),
                    clearTimeout(e.queue.timeout)
                }
                )),
                this.queue = this.queue.filter((function(e) {
                    return e.keep
                }
                ))
            }
        }]),
        e
    }()
      , l = function() {
        function e(t) {
            var r = t.alpha
              , s = t.antialias
              , n = t.premultipliedAlpha
              , a = t.depth
              , o = t.failIfMajorPerformanceCaveat
              , h = t.preserveDrawingBuffer
              , l = t.stencil
              , u = t.container
              , d = t.pixelRatio
              , c = t.renderingScale
              , p = t.production
              , f = t.onError
              , g = t.onSuccess
              , _ = t.onContextLost
              , m = t.onContextRestored
              , v = t.onDisposed
              , y = t.onSceneChange;
            _classCallCheck(this, e),
            this.type = "Renderer",
            this.alpha = r,
            this.antialias = s,
            this.premultipliedAlpha = n,
            this.depth = a,
            this.failIfMajorPerformanceCaveat = o,
            this.preserveDrawingBuffer = h,
            this.stencil = l,
            this.container = u,
            this.pixelRatio = d,
            this._renderingScale = c,
            this.production = p,
            this.onError = f,
            this.onSuccess = g,
            this.onContextLost = _,
            this.onContextRestored = m,
            this.onDisposed = v,
            this.onSceneChange = y,
            this.initState(),
            this.canvas = document.createElement("canvas");
            var x = {
                alpha: this.alpha,
                premultipliedAlpha: this.premultipliedAlpha,
                antialias: this.antialias,
                depth: this.depth,
                failIfMajorPerformanceCaveat: this.failIfMajorPerformanceCaveat,
                preserveDrawingBuffer: this.preserveDrawingBuffer,
                stencil: this.stencil
            };
            if (this.gl = this.canvas.getContext("webgl2", x),
            this._isWebGL2 = !!this.gl,
            this.gl || (this.gl = this.canvas.getContext("webgl", x) || this.canvas.getContext("experimental-webgl", x)),
            !this.gl)
                return this.production || i(this.type + ": WebGL context could not be created"),
                this.state.isActive = !1,
                void (this.onError && this.onError());
            this.onSuccess && this.onSuccess(),
            this.initRenderer()
        }
        return _createClass(e, [{
            key: "initState",
            value: function() {
                this.state = {
                    isActive: !0,
                    isContextLost: !0,
                    drawingEnabled: !0,
                    forceRender: !1,
                    currentProgramID: null,
                    currentGeometryID: null,
                    forceBufferUpdate: !1,
                    depthTest: null,
                    blending: null,
                    cullFace: null,
                    frameBufferID: null,
                    scenePassIndex: null,
                    activeTexture: null,
                    unpackAlignment: null,
                    flipY: null,
                    premultiplyAlpha: null
                }
            }
        }, {
            key: "initCallbackQueueManager",
            value: function() {
                this.nextRender = new h
            }
        }, {
            key: "initRenderer",
            value: function() {
                this.planes = [],
                this.renderTargets = [],
                this.shaderPasses = [],
                this.state.isContextLost = !1,
                this.state.maxTextureSize = this.gl.getParameter(this.gl.MAX_TEXTURE_SIZE),
                this.initCallbackQueueManager(),
                this.setBlendFunc(),
                this.setDepthFunc(),
                this.setDepthTest(!0),
                this.cache = new o,
                this.scene = new a(this),
                this.getExtensions(),
                this._contextLostHandler = this.contextLost.bind(this),
                this.canvas.addEventListener("webglcontextlost", this._contextLostHandler, !1),
                this._contextRestoredHandler = this.contextRestored.bind(this),
                this.canvas.addEventListener("webglcontextrestored", this._contextRestoredHandler, !1)
            }
        }, {
            key: "getExtensions",
            value: function() {
                this.extensions = [],
                this._isWebGL2 ? (this.extensions.EXT_color_buffer_float = this.gl.getExtension("EXT_color_buffer_float"),
                this.extensions.OES_texture_float_linear = this.gl.getExtension("OES_texture_float_linear"),
                this.extensions.EXT_texture_filter_anisotropic = this.gl.getExtension("EXT_texture_filter_anisotropic"),
                this.extensions.WEBGL_lose_context = this.gl.getExtension("WEBGL_lose_context")) : (this.extensions.OES_vertex_array_object = this.gl.getExtension("OES_vertex_array_object"),
                this.extensions.OES_texture_float = this.gl.getExtension("OES_texture_float"),
                this.extensions.OES_texture_float_linear = this.gl.getExtension("OES_texture_float_linear"),
                this.extensions.OES_texture_half_float = this.gl.getExtension("OES_texture_half_float"),
                this.extensions.OES_texture_half_float_linear = this.gl.getExtension("OES_texture_half_float_linear"),
                this.extensions.EXT_texture_filter_anisotropic = this.gl.getExtension("EXT_texture_filter_anisotropic"),
                this.extensions.OES_element_index_uint = this.gl.getExtension("OES_element_index_uint"),
                this.extensions.OES_standard_derivatives = this.gl.getExtension("OES_standard_derivatives"),
                this.extensions.EXT_sRGB = this.gl.getExtension("EXT_sRGB"),
                this.extensions.WEBGL_depth_texture = this.gl.getExtension("WEBGL_depth_texture"),
                this.extensions.WEBGL_draw_buffers = this.gl.getExtension("WEBGL_draw_buffers"),
                this.extensions.WEBGL_lose_context = this.gl.getExtension("WEBGL_lose_context"))
            }
        }, {
            key: "contextLost",
            value: function(e) {
                var t = this;
                this.state.isContextLost = !0,
                this.state.isActive && (e.preventDefault(),
                this.nextRender.add((function() {
                    return t.onContextLost && t.onContextLost()
                }
                )))
            }
        }, {
            key: "restoreContext",
            value: function() {
                this.state.isActive && (this.initState(),
                this.gl && this.extensions.WEBGL_lose_context ? this.extensions.WEBGL_lose_context.restoreContext() : (this.gl || this.production ? this.extensions.WEBGL_lose_context || this.production || i(this.type + ": Could not restore the context because the restore context extension is not defined") : i(this.type + ": Could not restore the context because the context is not defined"),
                this.onError && this.onError()))
            }
        }, {
            key: "isContextexFullyRestored",
            value: function() {
                for (var e = !0, t = 0; t < this.renderTargets.length; t++) {
                    this.renderTargets[t].textures[0]._canDraw || (e = !1);
                    break
                }
                if (e)
                    for (var i = 0; i < this.planes.length; i++) {
                        if (!this.planes[i]._canDraw) {
                            e = !1;
                            break
                        }
                        for (var r = 0; r < this.planes[i].textures.length; r++)
                            if (!this.planes[i].textures[r]._canDraw) {
                                e = !1;
                                break
                            }
                    }
                if (e)
                    for (var s = 0; s < this.shaderPasses.length; s++) {
                        if (!this.shaderPasses[s]._canDraw) {
                            e = !1;
                            break
                        }
                        for (var n = 0; n < this.shaderPasses[s].textures.length; n++)
                            if (!this.shaderPasses[s].textures[n]._canDraw) {
                                e = !1;
                                break
                            }
                    }
                return e
            }
        }, {
            key: "contextRestored",
            value: function() {
                var e = this;
                this.getExtensions(),
                this.setBlendFunc(),
                this.setDepthFunc(),
                this.setDepthTest(!0),
                this.cache.clear(),
                this.scene.initStacks();
                for (var t = 0; t < this.renderTargets.length; t++)
                    this.renderTargets[t]._restoreContext();
                for (var i = 0; i < this.planes.length; i++)
                    this.planes[i]._restoreContext();
                for (var r = 0; r < this.shaderPasses.length; r++)
                    this.shaderPasses[r]._restoreContext();
                var s = this.nextRender.add((function() {
                    e.isContextexFullyRestored() && (s.keep = !1,
                    e.state.isContextLost = !1,
                    e.onContextRestored && e.onContextRestored(),
                    e.onSceneChange(),
                    e.needRender())
                }
                ), !0)
            }
        }, {
            key: "setPixelRatio",
            value: function(e) {
                this.pixelRatio = e
            }
        }, {
            key: "setSize",
            value: function() {
                if (this.gl) {
                    var e = this.container.getBoundingClientRect();
                    this._boundingRect = {
                        width: e.width * this.pixelRatio,
                        height: e.height * this.pixelRatio,
                        top: e.top * this.pixelRatio,
                        left: e.left * this.pixelRatio
                    };
                    var t = !!navigator.userAgent.match(/Version\/[\d\.]+.*Safari/)
                      , i = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
                    if (t && i) {
                        this._boundingRect.top = function(e) {
                            for (var t = 0; e && !isNaN(e.offsetTop); )
                                t += e.offsetTop - e.scrollTop,
                                e = e.offsetParent;
                            return t
                        }(this.container) * this.pixelRatio
                    }
                    this.canvas.style.width = Math.floor(this._boundingRect.width / this.pixelRatio) + "px",
                    this.canvas.style.height = Math.floor(this._boundingRect.height / this.pixelRatio) + "px",
                    this.canvas.width = Math.floor(this._boundingRect.width * this._renderingScale),
                    this.canvas.height = Math.floor(this._boundingRect.height * this._renderingScale),
                    this.gl.viewport(0, 0, this.gl.drawingBufferWidth, this.gl.drawingBufferHeight)
                }
            }
        }, {
            key: "resize",
            value: function() {
                for (var e = 0; e < this.planes.length; e++)
                    this.planes[e]._canDraw && this.planes[e].resize();
                for (var t = 0; t < this.shaderPasses.length; t++)
                    this.shaderPasses[t]._canDraw && this.shaderPasses[t].resize();
                for (var i = 0; i < this.renderTargets.length; i++)
                    this.renderTargets[i].resize();
                this.needRender()
            }
        }, {
            key: "clear",
            value: function() {
                this.gl.clear(this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT)
            }
        }, {
            key: "clearDepth",
            value: function() {
                this.gl.clear(this.gl.DEPTH_BUFFER_BIT)
            }
        }, {
            key: "clearColor",
            value: function() {
                this.gl.clear(this.gl.COLOR_BUFFER_BIT)
            }
        }, {
            key: "bindFrameBuffer",
            value: function(e, t) {
                var i = null;
                e ? (i = e.index) !== this.state.frameBufferID && (this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, e._frameBuffer),
                this.gl.viewport(0, 0, e._size.width, e._size.height),
                e._shouldClear && !t && this.clear()) : null !== this.state.frameBufferID && (this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, null),
                this.gl.viewport(0, 0, this.gl.drawingBufferWidth, this.gl.drawingBufferHeight)),
                this.state.frameBufferID = i
            }
        }, {
            key: "setDepthTest",
            value: function(e) {
                e && !this.state.depthTest ? (this.state.depthTest = e,
                this.gl.enable(this.gl.DEPTH_TEST)) : !e && this.state.depthTest && (this.state.depthTest = e,
                this.gl.disable(this.gl.DEPTH_TEST))
            }
        }, {
            key: "setDepthFunc",
            value: function() {
                this.gl.depthFunc(this.gl.LEQUAL)
            }
        }, {
            key: "setBlending",
            value: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                e && !this.state.blending ? (this.state.blending = e,
                this.gl.enable(this.gl.BLEND)) : !e && this.state.blending && (this.state.blending = e,
                this.gl.disable(this.gl.BLEND))
            }
        }, {
            key: "setBlendFunc",
            value: function() {
                this.gl.enable(this.gl.BLEND),
                this.premultipliedAlpha ? this.gl.blendFuncSeparate(this.gl.ONE, this.gl.ONE_MINUS_SRC_ALPHA, this.gl.ONE, this.gl.ONE_MINUS_SRC_ALPHA) : this.gl.blendFuncSeparate(this.gl.SRC_ALPHA, this.gl.ONE_MINUS_SRC_ALPHA, this.gl.ONE, this.gl.ONE_MINUS_SRC_ALPHA)
            }
        }, {
            key: "setFaceCulling",
            value: function(e) {
                if (this.state.cullFace !== e)
                    if (this.state.cullFace = e,
                    "none" === e)
                        this.gl.disable(this.gl.CULL_FACE);
                    else {
                        var t = "front" === e ? this.gl.FRONT : this.gl.BACK;
                        this.gl.enable(this.gl.CULL_FACE),
                        this.gl.cullFace(t)
                    }
            }
        }, {
            key: "useProgram",
            value: function(e) {
                null !== this.state.currentProgramID && this.state.currentProgramID === e.id || (this.gl.useProgram(e.program),
                this.state.currentProgramID = e.id)
            }
        }, {
            key: "removePlane",
            value: function(e) {
                this.gl && (this.planes = this.planes.filter((function(t) {
                    return t.uuid !== e.uuid
                }
                )),
                this.scene.removePlane(e),
                e = null,
                this.gl && this.clear(),
                this.onSceneChange())
            }
        }, {
            key: "removeRenderTarget",
            value: function(e) {
                if (this.gl) {
                    for (var t = this.planes.find((function(t) {
                        return "PingPongPlane" !== t.type && t.target && t.target.uuid === e.uuid
                    }
                    )), i = 0; i < this.planes.length; i++)
                        this.planes[i].target && this.planes[i].target.uuid === e.uuid && (this.planes[i].target = null);
                    this.renderTargets = this.renderTargets.filter((function(t) {
                        return t.uuid !== e.uuid
                    }
                    ));
                    for (var r = 0; r < this.renderTargets.length; r++)
                        this.renderTargets[r].index = r;
                    e = null,
                    this.gl && this.clear(),
                    t && this.scene.resetPlaneStacks(),
                    this.onSceneChange()
                }
            }
        }, {
            key: "removeShaderPass",
            value: function(e) {
                this.gl && (this.shaderPasses = this.shaderPasses.filter((function(t) {
                    return t.uuid !== e.uuid
                }
                )),
                this.scene.removeShaderPass(e),
                e = null,
                this.gl && this.clear(),
                this.onSceneChange())
            }
        }, {
            key: "enableDrawing",
            value: function() {
                this.state.drawingEnabled = !0
            }
        }, {
            key: "disableDrawing",
            value: function() {
                this.state.drawingEnabled = !1
            }
        }, {
            key: "needRender",
            value: function() {
                this.state.forceRender = !0
            }
        }, {
            key: "render",
            value: function() {
                this.gl && (this.clear(),
                this.state.currentGeometryID = null,
                this.scene.draw())
            }
        }, {
            key: "deletePrograms",
            value: function() {
                for (var e = 0; e < this.cache.programs.length; e++) {
                    var t = this.cache.programs[e];
                    this.gl.deleteProgram(t.program)
                }
            }
        }, {
            key: "dispose",
            value: function() {
                var e = this;
                if (this.gl) {
                    for (this.state.isActive = !1; this.planes.length > 0; )
                        this.removePlane(this.planes[0]);
                    for (; this.shaderPasses.length > 0; )
                        this.removeShaderPass(this.shaderPasses[0]);
                    for (; this.renderTargets.length > 0; )
                        this.removeRenderTarget(this.renderTargets[0]);
                    var t = this.nextRender.add((function() {
                        0 === e.planes.length && 0 === e.shaderPasses.length && 0 === e.renderTargets.length && (t.keep = !1,
                        e.deletePrograms(),
                        e.clear(),
                        e.canvas.removeEventListener("webgllost", e._contextLostHandler, !1),
                        e.canvas.removeEventListener("webglrestored", e._contextRestoredHandler, !1),
                        e.gl && e.extensions.WEBGL_lose_context && e.extensions.WEBGL_lose_context.loseContext(),
                        e.canvas.width = e.canvas.width,
                        e.gl = null,
                        e.container.removeChild(e.canvas),
                        e.container = null,
                        e.canvas = null,
                        e.onDisposed && e.onDisposed())
                    }
                    ), !0)
                }
            }
        }]),
        e
    }()
      , u = function() {
        function e() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
              , i = t.xOffset
              , r = void 0 === i ? 0 : i
              , s = t.yOffset
              , n = void 0 === s ? 0 : s
              , a = t.lastXDelta
              , o = void 0 === a ? 0 : a
              , h = t.lastYDelta
              , l = void 0 === h ? 0 : h
              , u = t.shouldWatch
              , d = void 0 === u || u
              , c = t.onScroll
              , p = void 0 === c ? function() {}
            : c;
            _classCallCheck(this, e),
            this.xOffset = r,
            this.yOffset = n,
            this.lastXDelta = o,
            this.lastYDelta = l,
            this.shouldWatch = d,
            this.onScroll = p,
            this.handler = this.scroll.bind(this, !0),
            this.shouldWatch && window.addEventListener("scroll", this.handler, {
                passive: !0
            })
        }
        return _createClass(e, [{
            key: "scroll",
            value: function() {
                this.updateScrollValues(window.pageXOffset, window.pageYOffset)
            }
        }, {
            key: "updateScrollValues",
            value: function(e, t) {
                var i = this.xOffset;
                this.xOffset = e,
                this.lastXDelta = i - this.xOffset;
                var r = this.yOffset;
                this.yOffset = t,
                this.lastYDelta = r - this.yOffset,
                this.onScroll && this.onScroll(this.lastXDelta, this.lastYDelta)
            }
        }, {
            key: "dispose",
            value: function() {
                this.shouldWatch && window.removeEventListener("scroll", this.handler, {
                    passive: !0
                })
            }
        }]),
        e
    }()
      , d = function() {
        function e() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
              , r = t.container
              , s = t.alpha
              , n = void 0 === s || s
              , a = t.premultipliedAlpha
              , o = void 0 !== a && a
              , h = t.antialias
              , l = void 0 === h || h
              , u = t.depth
              , d = void 0 === u || u
              , c = t.failIfMajorPerformanceCaveat
              , p = void 0 === c || c
              , f = t.preserveDrawingBuffer
              , g = void 0 !== f && f
              , _ = t.stencil
              , m = void 0 !== _ && _
              , v = t.autoResize
              , y = void 0 === v || v
              , x = t.autoRender
              , b = void 0 === x || x
              , k = t.watchScroll
              , R = void 0 === k || k
              , P = t.pixelRatio
              , w = void 0 === P ? window.devicePixelRatio || 1 : P
              , T = t.renderingScale
              , S = void 0 === T ? 1 : T
              , C = t.production
              , E = void 0 !== C && C;
            _classCallCheck(this, e),
            this.type = "Curtains",
            this._autoResize = y,
            this._autoRender = b,
            this._watchScroll = R,
            this.pixelRatio = w,
            S = isNaN(S) ? 1 : parseFloat(S),
            this._renderingScale = Math.max(.25, Math.min(1, S)),
            this.premultipliedAlpha = o,
            this.alpha = n,
            this.antialias = l,
            this.depth = d,
            this.failIfMajorPerformanceCaveat = p,
            this.preserveDrawingBuffer = g,
            this.stencil = m,
            this.production = E,
            this.errors = !1,
            r ? this.setContainer(r) : this.production || i(this.type + ": no container provided in the initial parameters. Use setContainer() method to set one later and initialize the WebGL context")
        }
        return _createClass(e, [{
            key: "setContainer",
            value: function(e) {
                if (e)
                    if ("string" == typeof e)
                        if (e = document.getElementById(e))
                            this.container = e;
                        else {
                            var t = document.createElement("div");
                            t.setAttribute("id", "curtains-canvas"),
                            document.body.appendChild(t),
                            this.container = t,
                            this.production || i('Curtains: no valid container HTML element or ID provided, created a div with "curtains-canvas" ID instead')
                        }
                    else
                        e instanceof Element && (this.container = e);
                else {
                    var r = document.createElement("div");
                    r.setAttribute("id", "curtains-canvas"),
                    document.body.appendChild(r),
                    this.container = r,
                    this.production || i('Curtains: no valid container HTML element or ID provided, created a div with "curtains-canvas" ID instead')
                }
                this._initCurtains()
            }
        }, {
            key: "_initCurtains",
            value: function() {
                this.planes = [],
                this.renderTargets = [],
                this.shaderPasses = [],
                this._initRenderer(),
                this.gl && (this._initScroll(),
                this._setSize(),
                this._addListeners(),
                this.container.appendChild(this.canvas),
                this._animationFrameID = null,
                this._autoRender && this._animate())
            }
        }, {
            key: "_initRenderer",
            value: function() {
                var e = this;
                this.renderer = new l({
                    alpha: this.alpha,
                    antialias: this.antialias,
                    premultipliedAlpha: this.premultipliedAlpha,
                    depth: this.depth,
                    failIfMajorPerformanceCaveat: this.failIfMajorPerformanceCaveat,
                    preserveDrawingBuffer: this.preserveDrawingBuffer,
                    stencil: this.stencil,
                    container: this.container,
                    pixelRatio: this.pixelRatio,
                    renderingScale: this._renderingScale,
                    production: this.production,
                    onError: function() {
                        return e._onRendererError()
                    },
                    onSuccess: function() {
                        return e._onRendererSuccess()
                    },
                    onContextLost: function() {
                        return e._onRendererContextLost()
                    },
                    onContextRestored: function() {
                        return e._onRendererContextRestored()
                    },
                    onDisposed: function() {
                        return e._onRendererDisposed()
                    },
                    onSceneChange: function() {
                        return e._keepSync()
                    }
                }),
                this.gl = this.renderer.gl,
                this.canvas = this.renderer.canvas
            }
        }, {
            key: "restoreContext",
            value: function() {
                this.renderer.restoreContext()
            }
        }, {
            key: "_animate",
            value: function() {
                this.render(),
                this._animationFrameID = window.requestAnimationFrame(this._animate.bind(this))
            }
        }, {
            key: "enableDrawing",
            value: function() {
                this.renderer.enableDrawing()
            }
        }, {
            key: "disableDrawing",
            value: function() {
                this.renderer.disableDrawing()
            }
        }, {
            key: "needRender",
            value: function() {
                this.renderer.needRender()
            }
        }, {
            key: "nextRender",
            value: function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                return this.renderer.nextRender.add(e, t)
            }
        }, {
            key: "clear",
            value: function() {
                this.renderer && this.renderer.clear()
            }
        }, {
            key: "clearDepth",
            value: function() {
                this.renderer && this.renderer.clearDepth()
            }
        }, {
            key: "clearColor",
            value: function() {
                this.renderer && this.renderer.clearColor()
            }
        }, {
            key: "isWebGL2",
            value: function() {
                return !!this.gl && this.renderer._isWebGL2
            }
        }, {
            key: "render",
            value: function() {
                this.renderer.nextRender.execute(),
                (this.renderer.state.drawingEnabled || this.renderer.state.forceRender) && (this.renderer.state.forceRender && (this.renderer.state.forceRender = !1),
                this._onRenderCallback && this._onRenderCallback(),
                this.renderer.render())
            }
        }, {
            key: "_addListeners",
            value: function() {
                this._resizeHandler = null,
                this._autoResize && (this._resizeHandler = this.resize.bind(this, !0),
                window.addEventListener("resize", this._resizeHandler, !1))
            }
        }, {
            key: "setPixelRatio",
            value: function(e, t) {
                this.pixelRatio = parseFloat(Math.max(e, 1)) || 1,
                this.renderer.setPixelRatio(e),
                this.resize(t)
            }
        }, {
            key: "_setSize",
            value: function() {
                this.renderer.setSize(),
                this._scrollManager.shouldWatch && (this._scrollManager.xOffset = window.pageXOffset,
                this._scrollManager.yOffset = window.pageYOffset)
            }
        }, {
            key: "getBoundingRect",
            value: function() {
                return this.renderer._boundingRect
            }
        }, {
            key: "resize",
            value: function(e) {
                var t = this;
                this.gl && (this._setSize(),
                this.renderer.resize(),
                this.nextRender((function() {
                    t._onAfterResizeCallback && e && t._onAfterResizeCallback()
                }
                )))
            }
        }, {
            key: "_initScroll",
            value: function() {
                var e = this;
                this._scrollManager = new u({
                    xOffset: window.pageXOffset,
                    yOffset: window.pageYOffset,
                    lastXDelta: 0,
                    lastYDelta: 0,
                    shouldWatch: this._watchScroll,
                    onScroll: function(t, i) {
                        return e._updateScroll(t, i)
                    }
                })
            }
        }, {
            key: "_updateScroll",
            value: function(e, t) {
                for (var i = 0; i < this.planes.length; i++)
                    this.planes[i].watchScroll && this.planes[i].updateScrollPosition(e, t);
                this.renderer.needRender(),
                this._onScrollCallback && this._onScrollCallback()
            }
        }, {
            key: "updateScrollValues",
            value: function(e, t) {
                this._scrollManager.updateScrollValues(e, t)
            }
        }, {
            key: "getScrollDeltas",
            value: function() {
                return {
                    x: this._scrollManager.lastXDelta,
                    y: this._scrollManager.lastYDelta
                }
            }
        }, {
            key: "getScrollValues",
            value: function() {
                return {
                    x: this._scrollManager.xOffset,
                    y: this._scrollManager.yOffset
                }
            }
        }, {
            key: "_keepSync",
            value: function() {
                this.planes = this.renderer.planes,
                this.shaderPasses = this.renderer.shaderPasses,
                this.renderTargets = this.renderer.renderTargets
            }
        }, {
            key: "lerp",
            value: function(e, t, i) {
                return function(e, t, i) {
                    return (1 - i) * e + i * t
                }(e, t, i)
            }
        }, {
            key: "onAfterResize",
            value: function(e) {
                return e && (this._onAfterResizeCallback = e),
                this
            }
        }, {
            key: "onError",
            value: function(e) {
                return e && (this._onErrorCallback = e),
                this
            }
        }, {
            key: "_onRendererError",
            value: function() {
                var e = this;
                setTimeout((function() {
                    e._onErrorCallback && !e.errors && e._onErrorCallback(),
                    e.errors = !0
                }
                ), 0)
            }
        }, {
            key: "onSuccess",
            value: function(e) {
                return e && (this._onSuccessCallback = e),
                this
            }
        }, {
            key: "_onRendererSuccess",
            value: function() {
                var e = this;
                setTimeout((function() {
                    e._onSuccessCallback && e._onSuccessCallback()
                }
                ), 0)
            }
        }, {
            key: "onContextLost",
            value: function(e) {
                return e && (this._onContextLostCallback = e),
                this
            }
        }, {
            key: "_onRendererContextLost",
            value: function() {
                this._onContextLostCallback && this._onContextLostCallback()
            }
        }, {
            key: "onContextRestored",
            value: function(e) {
                return e && (this._onContextRestoredCallback = e),
                this
            }
        }, {
            key: "_onRendererContextRestored",
            value: function() {
                this._onContextRestoredCallback && this._onContextRestoredCallback()
            }
        }, {
            key: "onRender",
            value: function(e) {
                return e && (this._onRenderCallback = e),
                this
            }
        }, {
            key: "onScroll",
            value: function(e) {
                return e && (this._onScrollCallback = e),
                this
            }
        }, {
            key: "dispose",
            value: function() {
                this.renderer.dispose()
            }
        }, {
            key: "_onRendererDisposed",
            value: function() {
                this._animationFrameID && window.cancelAnimationFrame(this._animationFrameID),
                this._resizeHandler && window.removeEventListener("resize", this._resizeHandler, !1),
                this._scrollManager && this._scrollManager.dispose()
            }
        }]),
        e
    }()
      , c = function() {
        function e(t, i, s) {
            if (_classCallCheck(this, e),
            this.type = "Uniforms",
            t && "Renderer" === t.type) {
                if (!t.gl)
                    return void r(this.type + ": Renderer WebGL context is undefined", t)
            } else
                r(this.type + ": Renderer not passed as first argument", t);
            if (this.renderer = t,
            this.gl = t.gl,
            this.program = i,
            this.uniforms = {},
            s)
                for (var n in s) {
                    var a = s[n];
                    this.uniforms[n] = {
                        name: a.name,
                        type: a.type,
                        value: a.value.clone && "function" == typeof a.value.clone ? a.value.clone() : a.value,
                        update: null
                    }
                }
        }
        return _createClass(e, [{
            key: "handleUniformSetting",
            value: function(e) {
                switch (e.type) {
                case "1i":
                    e.update = this.setUniform1i.bind(this);
                    break;
                case "1iv":
                    e.update = this.setUniform1iv.bind(this);
                    break;
                case "1f":
                    e.update = this.setUniform1f.bind(this);
                    break;
                case "1fv":
                    e.update = this.setUniform1fv.bind(this);
                    break;
                case "2i":
                    e.update = this.setUniform2i.bind(this);
                    break;
                case "2iv":
                    e.update = this.setUniform2iv.bind(this);
                    break;
                case "2f":
                    e.update = this.setUniform2f.bind(this);
                    break;
                case "2fv":
                    e.update = this.setUniform2fv.bind(this);
                    break;
                case "3i":
                    e.update = this.setUniform3i.bind(this);
                    break;
                case "3iv":
                    e.update = this.setUniform3iv.bind(this);
                    break;
                case "3f":
                    e.update = this.setUniform3f.bind(this);
                    break;
                case "3fv":
                    e.update = this.setUniform3fv.bind(this);
                    break;
                case "4i":
                    e.update = this.setUniform4i.bind(this);
                    break;
                case "4iv":
                    e.update = this.setUniform4iv.bind(this);
                    break;
                case "4f":
                    e.update = this.setUniform4f.bind(this);
                    break;
                case "4fv":
                    e.update = this.setUniform4fv.bind(this);
                    break;
                case "mat2":
                    e.update = this.setUniformMatrix2fv.bind(this);
                    break;
                case "mat3":
                    e.update = this.setUniformMatrix3fv.bind(this);
                    break;
                case "mat4":
                    e.update = this.setUniformMatrix4fv.bind(this);
                    break;
                default:
                    this.renderer.production || i(this.type + ": This uniform type is not handled : ", e.type)
                }
            }
        }, {
            key: "setInternalFormat",
            value: function(e) {
                "Vec2" === e.value.type ? (e._internalFormat = "Vec2",
                e.lastValue = e.value.clone()) : "Vec3" === e.value.type ? (e._internalFormat = "Vec3",
                e.lastValue = e.value.clone()) : "Mat4" === e.value.type ? (e._internalFormat = "Mat4",
                e.lastValue = e.value.clone()) : "Quat" === e.value.type ? (e._internalFormat = "Quat",
                e.lastValue = e.value.clone()) : Array.isArray(e.value) ? (e._internalFormat = "array",
                e.lastValue = Array.from(e.value)) : e.value.constructor === Float32Array ? (e._internalFormat = "mat",
                e.lastValue = e.value) : (e._internalFormat = "float",
                e.lastValue = e.value)
            }
        }, {
            key: "setUniforms",
            value: function() {
                if (this.uniforms)
                    for (var e in this.uniforms) {
                        var t = this.uniforms[e];
                        t.location = this.gl.getUniformLocation(this.program, t.name),
                        t._internalFormat || this.setInternalFormat(t),
                        t.type || ("Vec2" === t._internalFormat ? t.type = "2f" : "Vec3" === t._internalFormat ? t.type = "3f" : "Mat4" === t._internalFormat ? t.type = "mat4" : "array" === t._internalFormat ? 4 === t.value.length ? (t.type = "4f",
                        this.renderer.production || i(this.type + ": No uniform type declared for " + t.name + ", applied a 4f (array of 4 floats) uniform type")) : 3 === t.value.length ? (t.type = "3f",
                        this.renderer.production || i(this.type + ": No uniform type declared for " + t.name + ", applied a 3f (array of 3 floats) uniform type")) : 2 === t.value.length && (t.type = "2f",
                        this.renderer.production || i(this.type + ": No uniform type declared for " + t.name + ", applied a 2f (array of 2 floats) uniform type")) : "mat" === t._internalFormat ? 16 === t.value.length ? (t.type = "mat4",
                        this.renderer.production || i(this.type + ": No uniform type declared for " + t.name + ", applied a mat4 (4x4 matrix array) uniform type")) : 9 === t.value.length ? (t.type = "mat3",
                        this.renderer.production || i(this.type + ": No uniform type declared for " + t.name + ", applied a mat3 (3x3 matrix array) uniform type")) : 4 === t.value.length && (t.type = "mat2",
                        this.renderer.production || i(this.type + ": No uniform type declared for " + t.name + ", applied a mat2 (2x2 matrix array) uniform type")) : (t.type = "1f",
                        this.renderer.production || i(this.type + ": No uniform type declared for " + t.name + ", applied a 1f (float) uniform type"))),
                        this.handleUniformSetting(t),
                        t.update && t.update(t)
                    }
            }
        }, {
            key: "updateUniforms",
            value: function() {
                if (this.uniforms)
                    for (var e in this.uniforms) {
                        var t = this.uniforms[e]
                          , i = !1;
                        "Vec2" === t._internalFormat || "Vec3" === t._internalFormat || "Quat" === t._internalFormat ? t.value.equals(t.lastValue) || (i = !0,
                        t.lastValue.copy(t.value)) : t.value.length ? JSON.stringify(t.value) !== JSON.stringify(t.lastValue) && (i = !0,
                        t.lastValue = Array.from(t.value)) : t.value !== t.lastValue && (i = !0,
                        t.lastValue = t.value),
                        i && t.update && t.update(t)
                    }
            }
        }, {
            key: "setUniform1i",
            value: function(e) {
                this.gl.uniform1i(e.location, e.value)
            }
        }, {
            key: "setUniform1iv",
            value: function(e) {
                this.gl.uniform1iv(e.location, e.value)
            }
        }, {
            key: "setUniform1f",
            value: function(e) {
                this.gl.uniform1f(e.location, e.value)
            }
        }, {
            key: "setUniform1fv",
            value: function(e) {
                this.gl.uniform1fv(e.location, e.value)
            }
        }, {
            key: "setUniform2i",
            value: function(e) {
                "Vec2" === e._internalFormat ? this.gl.uniform2i(e.location, e.value.x, e.value.y) : this.gl.uniform2i(e.location, e.value[0], e.value[1])
            }
        }, {
            key: "setUniform2iv",
            value: function(e) {
                "Vec2" === e._internalFormat ? this.gl.uniform2iv(e.location, [e.value.x, e.value.y]) : this.gl.uniform2iv(e.location, e.value)
            }
        }, {
            key: "setUniform2f",
            value: function(e) {
                "Vec2" === e._internalFormat ? this.gl.uniform2f(e.location, e.value.x, e.value.y) : this.gl.uniform2f(e.location, e.value[0], e.value[1])
            }
        }, {
            key: "setUniform2fv",
            value: function(e) {
                "Vec2" === e._internalFormat ? this.gl.uniform2fv(e.location, [e.value.x, e.value.y]) : this.gl.uniform2fv(e.location, e.value)
            }
        }, {
            key: "setUniform3i",
            value: function(e) {
                "Vec3" === e._internalFormat ? this.gl.uniform3i(e.location, e.value.x, e.value.y, e.value.z) : this.gl.uniform3i(e.location, e.value[0], e.value[1], e.value[2])
            }
        }, {
            key: "setUniform3iv",
            value: function(e) {
                "Vec3" === e._internalFormat ? this.gl.uniform3iv(e.location, [e.value.x, e.value.y, e.value.z]) : this.gl.uniform3iv(e.location, e.value)
            }
        }, {
            key: "setUniform3f",
            value: function(e) {
                "Vec3" === e._internalFormat ? this.gl.uniform3f(e.location, e.value.x, e.value.y, e.value.z) : this.gl.uniform3f(e.location, e.value[0], e.value[1], e.value[2])
            }
        }, {
            key: "setUniform3fv",
            value: function(e) {
                "Vec3" === e._internalFormat ? this.gl.uniform3fv(e.location, [e.value.x, e.value.y, e.value.z]) : this.gl.uniform3fv(e.location, e.value)
            }
        }, {
            key: "setUniform4i",
            value: function(e) {
                "Quat" === e._internalFormat ? this.gl.uniform4i(e.location, e.value.elements[0], e.value.elements[1], e.value.elements[2], e.value[3]) : this.gl.uniform4i(e.location, e.value[0], e.value[1], e.value[2], e.value[3])
            }
        }, {
            key: "setUniform4iv",
            value: function(e) {
                "Quat" === e._internalFormat ? this.gl.uniform4iv(e.location, [e.value.elements[0], e.value.elements[1], e.value.elements[2], e.value[3]]) : this.gl.uniform4iv(e.location, e.value)
            }
        }, {
            key: "setUniform4f",
            value: function(e) {
                "Quat" === e._internalFormat ? this.gl.uniform4f(e.location, e.value.elements[0], e.value.elements[1], e.value.elements[2], e.value[3]) : this.gl.uniform4f(e.location, e.value[0], e.value[1], e.value[2], e.value[3])
            }
        }, {
            key: "setUniform4fv",
            value: function(e) {
                "Quat" === e._internalFormat ? this.gl.uniform4fv(e.location, [e.value.elements[0], e.value.elements[1], e.value.elements[2], e.value[3]]) : this.gl.uniform4fv(e.location, e.value)
            }
        }, {
            key: "setUniformMatrix2fv",
            value: function(e) {
                this.gl.uniformMatrix2fv(e.location, !1, e.value)
            }
        }, {
            key: "setUniformMatrix3fv",
            value: function(e) {
                this.gl.uniformMatrix3fv(e.location, !1, e.value)
            }
        }, {
            key: "setUniformMatrix4fv",
            value: function(e) {
                "Mat4" === e._internalFormat ? this.gl.uniformMatrix4fv(e.location, !1, e.value.elements) : this.gl.uniformMatrix4fv(e.location, !1, e.value)
            }
        }]),
        e
    }()
      , p = "\nprecision mediump float;\n".replace(/\n/g, "")
      , f = "\nattribute vec3 aVertexPosition;\nattribute vec2 aTextureCoord;\n".replace(/\n/g, "")
      , g = "\nvarying vec3 vVertexPosition;\nvarying vec2 vTextureCoord;\n".replace(/\n/g, "")
      , _ = (p + f + g + "\nuniform mat4 uMVMatrix;\nuniform mat4 uPMatrix;\n\nvoid main() {\n    vTextureCoord = aTextureCoord;\n    vVertexPosition = aVertexPosition;\n    \n    gl_Position = uPMatrix * uMVMatrix * vec4(aVertexPosition, 1.0);\n}\n").replace(/\n/g, "")
      , m = (p + g + "\nvoid main() {\n    gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);\n}\n").replace(/\n/g, "")
      , v = (p + f + g + "\nvoid main() {\n    vTextureCoord = aTextureCoord;\n    vVertexPosition = aVertexPosition;\n    \n    gl_Position = vec4(aVertexPosition, 1.0);\n}\n").replace(/\n/g, "")
      , y = (p + g + "\nuniform sampler2D uRenderTexture;\n\nvoid main() {\n    gl_FragColor = texture2D(uRenderTexture, vTextureCoord);\n}\n").replace(/\n/g, "")
      , x = 0
      , b = function() {
        function e(t) {
            var s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
              , n = s.parent
              , a = s.vertexShader
              , o = s.fragmentShader;
            if (_classCallCheck(this, e),
            this.type = "Program",
            t && "Renderer" === t.type) {
                if (!t.gl)
                    return void r(this.type + ": Renderer WebGL context is undefined", t)
            } else
                r(this.type + ": Renderer not passed as first argument", t);
            this.renderer = t,
            this.gl = this.renderer.gl,
            this.parent = n,
            this.defaultVsCode = "Plane" === this.parent.type ? _ : v,
            this.defaultFsCode = "Plane" === this.parent.type ? m : y,
            a ? this.vsCode = a : (this.renderer.production || "Plane" !== this.parent.type || i(this.parent.type + ": No vertex shader provided, will use a default one"),
            this.vsCode = this.defaultVsCode),
            o ? this.fsCode = o : (this.renderer.production || i(this.parent.type + ": No fragment shader provided, will use a default one"),
            this.fsCode = this.defaultFsCode),
            this.compiled = !0,
            this.setupProgram()
        }
        return _createClass(e, [{
            key: "createShader",
            value: function(e, t) {
                var s = this.gl.createShader(t);
                if (this.gl.shaderSource(s, e),
                this.gl.compileShader(s),
                !this.renderer.production && !this.gl.getShaderParameter(s, this.gl.COMPILE_STATUS)) {
                    for (var n = t === this.gl.VERTEX_SHADER ? "vertex shader" : "fragment shader", a = this.gl.getShaderSource(s).split("\n"), o = 0; o < a.length; o++)
                        a[o] = o + 1 + ": " + a[o];
                    return a = a.join("\n"),
                    i(this.type + ": Errors occurred while compiling the", n, ":\n", this.gl.getShaderInfoLog(s)),
                    r(a),
                    i(this.type + ": Will use a default", n),
                    this.createShader(t === this.gl.VERTEX_SHADER ? this.defaultVsCode : this.defaultFsCode, t)
                }
                return s
            }
        }, {
            key: "useNewShaders",
            value: function() {
                this.vertexShader = this.createShader(this.vsCode, this.gl.VERTEX_SHADER),
                this.fragmentShader = this.createShader(this.fsCode, this.gl.FRAGMENT_SHADER),
                this.vertexShader && this.fragmentShader || this.renderer.production || i(this.type + ": Unable to find or compile the vertex or fragment shader")
            }
        }, {
            key: "setupProgram",
            value: function() {
                var e = this.renderer.cache.getProgramFromShaders(this.vsCode, this.fsCode);
                e ? (this.vertexShader = e.vertexShader,
                this.fragmentShader = e.fragmentShader,
                this.activeUniforms = e.activeUniforms,
                this.activeAttributes = e.activeAttributes,
                this.createProgram()) : (this.useNewShaders(),
                this.compiled && (this.createProgram(),
                this.renderer.cache.addProgram(this)))
            }
        }, {
            key: "createProgram",
            value: function() {
                if (x++,
                this.id = x,
                this.program = this.gl.createProgram(),
                this.gl.attachShader(this.program, this.vertexShader),
                this.gl.attachShader(this.program, this.fragmentShader),
                this.gl.linkProgram(this.program),
                !this.renderer.production && !this.gl.getProgramParameter(this.program, this.gl.LINK_STATUS))
                    return i(this.type + ": Unable to initialize the shader program: " + this.gl.getProgramInfoLog(this.program)),
                    i(this.type + ": Will use default vertex and fragment shaders"),
                    this.vertexShader = this.createShader(this.defaultVsCode, this.gl.VERTEX_SHADER),
                    this.fragmentShader = this.createShader(this.defaultFsCode, this.gl.FRAGMENT_SHADER),
                    void this.createProgram();
                if (this.gl.deleteShader(this.vertexShader),
                this.gl.deleteShader(this.fragmentShader),
                !this.activeUniforms || !this.activeAttributes) {
                    this.activeUniforms = {
                        textures: [],
                        textureMatrices: []
                    };
                    for (var e = this.gl.getProgramParameter(this.program, this.gl.ACTIVE_UNIFORMS), t = 0; t < e; t++) {
                        var r = this.gl.getActiveUniform(this.program, t);
                        r.type === this.gl.SAMPLER_2D && this.activeUniforms.textures.push(r.name),
                        r.type === this.gl.FLOAT_MAT4 && "uMVMatrix" !== r.name && "uPMatrix" !== r.name && this.activeUniforms.textureMatrices.push(r.name)
                    }
                    this.activeAttributes = [];
                    for (var s = this.gl.getProgramParameter(this.program, this.gl.ACTIVE_ATTRIBUTES), n = 0; n < s; n++) {
                        var a = this.gl.getActiveAttrib(this.program, n);
                        this.activeAttributes.push(a.name)
                    }
                }
            }
        }, {
            key: "createUniforms",
            value: function(e) {
                this.uniformsManager = new c(this.renderer,this.program,e),
                this.setUniforms()
            }
        }, {
            key: "setUniforms",
            value: function() {
                this.renderer.useProgram(this),
                this.uniformsManager.setUniforms()
            }
        }, {
            key: "updateUniforms",
            value: function() {
                this.renderer.useProgram(this),
                this.uniformsManager.updateUniforms()
            }
        }]),
        e
    }()
      , k = function() {
        function e(t) {
            var i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
              , s = (i.program,
            i.width)
              , n = void 0 === s ? 1 : s
              , a = i.height
              , o = void 0 === a ? 1 : a;
            if (_classCallCheck(this, e),
            this.type = "Geometry",
            t && "Renderer" === t.type) {
                if (!t.gl)
                    return void r(this.type + ": Renderer WebGL context is undefined", t)
            } else
                r(this.type + ": Renderer not passed as first argument", t);
            this.renderer = t,
            this.gl = this.renderer.gl,
            this.definition = {
                id: n * o + n,
                width: n,
                height: o
            },
            this.setDefaultAttributes(),
            this.setVerticesUVs()
        }
        return _createClass(e, [{
            key: "restoreContext",
            value: function(e) {
                this.program = null,
                this.setDefaultAttributes(),
                this.setVerticesUVs(),
                this.setProgram(e)
            }
        }, {
            key: "setDefaultAttributes",
            value: function() {
                this.attributes = {
                    vertexPosition: {
                        name: "aVertexPosition",
                        size: 3,
                        isActive: !1
                    },
                    textureCoord: {
                        name: "aTextureCoord",
                        size: 3,
                        isActive: !1
                    }
                }
            }
        }, {
            key: "setVerticesUVs",
            value: function() {
                var e = this.renderer.cache.getGeometryFromID(this.definition.id);
                e ? (this.attributes.vertexPosition.array = e.vertices,
                this.attributes.textureCoord.array = e.uvs) : (this.computeVerticesUVs(),
                this.renderer.cache.addGeometry(this.definition.id, this.attributes.vertexPosition.array, this.attributes.textureCoord.array))
            }
        }, {
            key: "setProgram",
            value: function(e) {
                this.program = e,
                this.initAttributes(),
                this.renderer._isWebGL2 ? (this._vao = this.gl.createVertexArray(),
                this.gl.bindVertexArray(this._vao)) : this.renderer.extensions.OES_vertex_array_object && (this._vao = this.renderer.extensions.OES_vertex_array_object.createVertexArrayOES(),
                this.renderer.extensions.OES_vertex_array_object.bindVertexArrayOES(this._vao)),
                this.initializeBuffers()
            }
        }, {
            key: "initAttributes",
            value: function() {
                for (var e in this.attributes) {
                    if (this.attributes[e].isActive = this.program.activeAttributes.includes(this.attributes[e].name),
                    !this.attributes[e].isActive)
                        return;
                    this.attributes[e].location = this.gl.getAttribLocation(this.program.program, this.attributes[e].name),
                    this.attributes[e].buffer = this.gl.createBuffer(),
                    this.attributes[e].numberOfItems = this.definition.width * this.definition.height * this.attributes[e].size * 2
                }
            }
        }, {
            key: "computeVerticesUVs",
            value: function() {
                this.attributes.vertexPosition.array = [],
                this.attributes.textureCoord.array = [];
                for (var e = this.attributes.vertexPosition.array, t = this.attributes.textureCoord.array, i = 0; i < this.definition.height; i++)
                    for (var r = i / this.definition.height, s = 0; s < this.definition.width; s++) {
                        var n = s / this.definition.width;
                        t.push(n),
                        t.push(r),
                        t.push(0),
                        e.push(2 * (n - .5)),
                        e.push(2 * (r - .5)),
                        e.push(0),
                        t.push(n + 1 / this.definition.width),
                        t.push(r),
                        t.push(0),
                        e.push(2 * (n + 1 / this.definition.width - .5)),
                        e.push(2 * (r - .5)),
                        e.push(0),
                        t.push(n),
                        t.push(r + 1 / this.definition.height),
                        t.push(0),
                        e.push(2 * (n - .5)),
                        e.push(2 * (r + 1 / this.definition.height - .5)),
                        e.push(0),
                        t.push(n),
                        t.push(r + 1 / this.definition.height),
                        t.push(0),
                        e.push(2 * (n - .5)),
                        e.push(2 * (r + 1 / this.definition.height - .5)),
                        e.push(0),
                        t.push(n + 1 / this.definition.width),
                        t.push(r),
                        t.push(0),
                        e.push(2 * (n + 1 / this.definition.width - .5)),
                        e.push(2 * (r - .5)),
                        e.push(0),
                        t.push(n + 1 / this.definition.width),
                        t.push(r + 1 / this.definition.height),
                        t.push(0),
                        e.push(2 * (n + 1 / this.definition.width - .5)),
                        e.push(2 * (r + 1 / this.definition.height - .5)),
                        e.push(0)
                    }
            }
        }, {
            key: "initializeBuffers",
            value: function() {
                if (this.attributes) {
                    for (var e in this.attributes) {
                        if (!this.attributes[e].isActive)
                            return;
                        this.gl.enableVertexAttribArray(this.attributes[e].location),
                        this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.attributes[e].buffer),
                        this.gl.bufferData(this.gl.ARRAY_BUFFER, new Float32Array(this.attributes[e].array), this.gl.STATIC_DRAW),
                        this.gl.vertexAttribPointer(this.attributes[e].location, this.attributes[e].size, this.gl.FLOAT, !1, 0, 0)
                    }
                    this.renderer.state.currentGeometryID = this.definition.id
                }
            }
        }, {
            key: "bindBuffers",
            value: function() {
                if (this._vao)
                    this.renderer._isWebGL2 ? this.gl.bindVertexArray(this._vao) : this.renderer.extensions.OES_vertex_array_object.bindVertexArrayOES(this._vao);
                else
                    for (var e in this.attributes) {
                        if (!this.attributes[e].isActive)
                            return;
                        this.gl.enableVertexAttribArray(this.attributes[e].location),
                        this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.attributes[e].buffer),
                        this.gl.vertexAttribPointer(this.attributes[e].location, this.attributes[e].size, this.gl.FLOAT, !1, 0, 0)
                    }
                this.renderer.state.currentGeometryID = this.definition.id
            }
        }, {
            key: "draw",
            value: function() {
                this.gl.drawArrays(this.gl.TRIANGLES, 0, this.attributes.vertexPosition.numberOfItems)
            }
        }, {
            key: "dispose",
            value: function() {
                for (var e in this._vao && (this.renderer._isWebGL2 ? this.gl.deleteVertexArray(this._vao) : this.renderer.extensions.OES_vertex_array_object.deleteVertexArrayOES(this._vao)),
                this.attributes) {
                    if (!this.attributes[e].isActive)
                        return;
                    this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.attributes[e].buffer),
                    this.gl.bufferData(this.gl.ARRAY_BUFFER, 1, this.gl.STATIC_DRAW),
                    this.gl.deleteBuffer(this.attributes[e].buffer)
                }
                this.attributes = null,
                this.renderer.state.currentGeometryID = null
            }
        }]),
        e
    }()
      , R = function() {
        function e() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new Float32Array([1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]);
            _classCallCheck(this, e),
            this.type = "Mat4",
            this.elements = t
        }
        return _createClass(e, [{
            key: "setFromArray",
            value: function(e) {
                for (var t = 0; t < this.elements.length; t++)
                    this.elements[t] = e[t];
                return this
            }
        }, {
            key: "copy",
            value: function(e) {
                var t = e.elements;
                return this.elements[0] = t[0],
                this.elements[1] = t[1],
                this.elements[2] = t[2],
                this.elements[3] = t[3],
                this.elements[4] = t[4],
                this.elements[5] = t[5],
                this.elements[6] = t[6],
                this.elements[7] = t[7],
                this.elements[8] = t[8],
                this.elements[9] = t[9],
                this.elements[10] = t[10],
                this.elements[11] = t[11],
                this.elements[12] = t[12],
                this.elements[13] = t[13],
                this.elements[14] = t[14],
                this.elements[15] = t[15],
                this
            }
        }, {
            key: "clone",
            value: function() {
                return (new e).copy(this)
            }
        }, {
            key: "multiply",
            value: function(t) {
                var i = this.elements
                  , r = t.elements
                  , s = new e;
                return s.elements[0] = r[0] * i[0] + r[1] * i[4] + r[2] * i[8] + r[3] * i[12],
                s.elements[1] = r[0] * i[1] + r[1] * i[5] + r[2] * i[9] + r[3] * i[13],
                s.elements[2] = r[0] * i[2] + r[1] * i[6] + r[2] * i[10] + r[3] * i[14],
                s.elements[3] = r[0] * i[3] + r[1] * i[7] + r[2] * i[11] + r[3] * i[15],
                s.elements[4] = r[4] * i[0] + r[5] * i[4] + r[6] * i[8] + r[7] * i[12],
                s.elements[5] = r[4] * i[1] + r[5] * i[5] + r[6] * i[9] + r[7] * i[13],
                s.elements[6] = r[4] * i[2] + r[5] * i[6] + r[6] * i[10] + r[7] * i[14],
                s.elements[7] = r[4] * i[3] + r[5] * i[7] + r[6] * i[11] + r[7] * i[15],
                s.elements[8] = r[8] * i[0] + r[9] * i[4] + r[10] * i[8] + r[11] * i[12],
                s.elements[9] = r[8] * i[1] + r[9] * i[5] + r[10] * i[9] + r[11] * i[13],
                s.elements[10] = r[8] * i[2] + r[9] * i[6] + r[10] * i[10] + r[11] * i[14],
                s.elements[11] = r[8] * i[3] + r[9] * i[7] + r[10] * i[11] + r[11] * i[15],
                s.elements[12] = r[12] * i[0] + r[13] * i[4] + r[14] * i[8] + r[15] * i[12],
                s.elements[13] = r[12] * i[1] + r[13] * i[5] + r[14] * i[9] + r[15] * i[13],
                s.elements[14] = r[12] * i[2] + r[13] * i[6] + r[14] * i[10] + r[15] * i[14],
                s.elements[15] = r[12] * i[3] + r[13] * i[7] + r[14] * i[11] + r[15] * i[15],
                s
            }
        }, {
            key: "getInverse",
            value: function() {
                var t = this.elements
                  , i = new e
                  , r = i.elements
                  , s = t[0]
                  , n = t[1]
                  , a = t[2]
                  , o = t[3]
                  , h = t[4]
                  , l = t[5]
                  , u = t[6]
                  , d = t[7]
                  , c = t[8]
                  , p = t[9]
                  , f = t[10]
                  , g = t[11]
                  , _ = t[12]
                  , m = t[13]
                  , v = t[14]
                  , y = t[15]
                  , x = s * l - n * h
                  , b = s * u - a * h
                  , k = s * d - o * h
                  , R = n * u - a * l
                  , P = n * d - o * l
                  , w = a * d - o * u
                  , T = c * m - p * _
                  , S = c * v - f * _
                  , C = c * y - g * _
                  , E = p * v - f * m
                  , M = p * y - g * m
                  , A = f * y - g * v
                  , F = x * A - b * M + k * E + R * C - P * S + w * T;
                return F ? (F = 1 / F,
                r[0] = (l * A - u * M + d * E) * F,
                r[1] = (a * M - n * A - o * E) * F,
                r[2] = (m * w - v * P + y * R) * F,
                r[3] = (f * P - p * w - g * R) * F,
                r[4] = (u * C - h * A - d * S) * F,
                r[5] = (s * A - a * C + o * S) * F,
                r[6] = (v * k - _ * w - y * b) * F,
                r[7] = (c * w - f * k + g * b) * F,
                r[8] = (h * M - l * C + d * T) * F,
                r[9] = (n * C - s * M - o * T) * F,
                r[10] = (_ * P - m * k + y * x) * F,
                r[11] = (p * k - c * P - g * x) * F,
                r[12] = (l * S - h * E - u * T) * F,
                r[13] = (s * E - n * S + a * T) * F,
                r[14] = (m * b - _ * R - v * x) * F,
                r[15] = (c * R - p * b + f * x) * F,
                i) : null
            }
        }, {
            key: "scale",
            value: function(e) {
                var t = this.elements;
                return t[0] *= e.x,
                t[1] *= e.x,
                t[2] *= e.x,
                t[3] *= e.x,
                t[4] *= e.y,
                t[5] *= e.y,
                t[6] *= e.y,
                t[7] *= e.y,
                t[8] *= e.z,
                t[9] *= e.z,
                t[10] *= e.z,
                t[11] *= e.z,
                this
            }
        }, {
            key: "compose",
            value: function(e, t, i) {
                var r = this.elements
                  , s = t.elements[0]
                  , n = t.elements[1]
                  , a = t.elements[2]
                  , o = t.elements[3]
                  , h = s + s
                  , l = n + n
                  , u = a + a
                  , d = s * h
                  , c = s * l
                  , p = s * u
                  , f = n * l
                  , g = n * u
                  , _ = a * u
                  , m = o * h
                  , v = o * l
                  , y = o * u
                  , x = i.x
                  , b = i.y
                  , k = i.z;
                return r[0] = (1 - (f + _)) * x,
                r[1] = (c + y) * x,
                r[2] = (p - v) * x,
                r[3] = 0,
                r[4] = (c - y) * b,
                r[5] = (1 - (d + _)) * b,
                r[6] = (g + m) * b,
                r[7] = 0,
                r[8] = (p + v) * k,
                r[9] = (g - m) * k,
                r[10] = (1 - (d + f)) * k,
                r[11] = 0,
                r[12] = e.x,
                r[13] = e.y,
                r[14] = e.z,
                r[15] = 1,
                this
            }
        }, {
            key: "composeFromOrigin",
            value: function(e, t, i, r) {
                var s = this.elements
                  , n = t.elements[0]
                  , a = t.elements[1]
                  , o = t.elements[2]
                  , h = t.elements[3]
                  , l = n + n
                  , u = a + a
                  , d = o + o
                  , c = n * l
                  , p = n * u
                  , f = n * d
                  , g = a * u
                  , _ = a * d
                  , m = o * d
                  , v = h * l
                  , y = h * u
                  , x = h * d
                  , b = i.x
                  , k = i.y
                  , R = i.z
                  , P = r.x
                  , w = r.y
                  , T = r.z
                  , S = (1 - (g + m)) * b
                  , C = (p + x) * b
                  , E = (f - y) * b
                  , M = (p - x) * k
                  , A = (1 - (c + m)) * k
                  , F = (_ + v) * k
                  , O = (f + y) * R
                  , D = (_ - v) * R
                  , z = (1 - (c + g)) * R;
                return s[0] = S,
                s[1] = C,
                s[2] = E,
                s[3] = 0,
                s[4] = M,
                s[5] = A,
                s[6] = F,
                s[7] = 0,
                s[8] = O,
                s[9] = D,
                s[10] = z,
                s[11] = 0,
                s[12] = e.x + P - (S * P + M * w + O * T),
                s[13] = e.y + w - (C * P + A * w + D * T),
                s[14] = e.z + T - (E * P + F * w + z * T),
                s[15] = 1,
                this
            }
        }]),
        e
    }()
      , P = function() {
        function e() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0
              , i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : t;
            _classCallCheck(this, e),
            this.type = "Vec2",
            this._x = t,
            this._y = i
        }
        return _createClass(e, [{
            key: "x",
            get: function() {
                return this._x
            },
            set: function(e) {
                var t = e !== this._x;
                this._x = e,
                t && this._onChangeCallback && this._onChangeCallback()
            }
        }, {
            key: "y",
            get: function() {
                return this._y
            },
            set: function(e) {
                var t = e !== this._y;
                this._y = e,
                t && this._onChangeCallback && this._onChangeCallback()
            }
        }, {
            key: "onChange",
            value: function(e) {
                return e && (this._onChangeCallback = e),
                this
            }
        }, {
            key: "set",
            value: function(e, t) {
                return this._x = e,
                this._y = t,
                this
            }
        }, {
            key: "add",
            value: function(e) {
                return this._x += e.x,
                this._y += e.y,
                this
            }
        }, {
            key: "addScalar",
            value: function(e) {
                return this._x += e,
                this._y += e,
                this
            }
        }, {
            key: "sub",
            value: function(e) {
                return this._x -= e.x,
                this._y -= e.y,
                this
            }
        }, {
            key: "subScalar",
            value: function(e) {
                return this._x -= e,
                this._y -= e,
                this
            }
        }, {
            key: "multiply",
            value: function(e) {
                return this._x *= e.x,
                this._y *= e.y,
                this
            }
        }, {
            key: "multiplyScalar",
            value: function(e) {
                return this._x *= e,
                this._y *= e,
                this
            }
        }, {
            key: "copy",
            value: function(e) {
                return this._x = e.x,
                this._y = e.y,
                this
            }
        }, {
            key: "clone",
            value: function() {
                return new e(this._x,this._y)
            }
        }, {
            key: "sanitizeNaNValuesWith",
            value: function(e) {
                return this._x = isNaN(this._x) ? e.x : parseFloat(this._x),
                this._y = isNaN(this._y) ? e.y : parseFloat(this._y),
                this
            }
        }, {
            key: "max",
            value: function(e) {
                return this._x = Math.max(this._x, e.x),
                this._y = Math.max(this._y, e.y),
                this
            }
        }, {
            key: "min",
            value: function(e) {
                return this._x = Math.min(this._x, e.x),
                this._y = Math.min(this._y, e.y),
                this
            }
        }, {
            key: "equals",
            value: function(e) {
                return this._x === e.x && this._y === e.y
            }
        }, {
            key: "normalize",
            value: function() {
                var e = this._x * this._x + this._y * this._y;
                return e > 0 && (e = 1 / Math.sqrt(e)),
                this._x *= e,
                this._y *= e,
                this
            }
        }, {
            key: "dot",
            value: function(e) {
                return this._x * e.x + this._y * e.y
            }
        }]),
        e
    }()
      , w = function() {
        function e() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0
              , i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : t
              , r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : t;
            _classCallCheck(this, e),
            this.type = "Vec3",
            this._x = t,
            this._y = i,
            this._z = r
        }
        return _createClass(e, [{
            key: "x",
            get: function() {
                return this._x
            },
            set: function(e) {
                var t = e !== this._x;
                this._x = e,
                t && this._onChangeCallback && this._onChangeCallback()
            }
        }, {
            key: "y",
            get: function() {
                return this._y
            },
            set: function(e) {
                var t = e !== this._y;
                this._y = e,
                t && this._onChangeCallback && this._onChangeCallback()
            }
        }, {
            key: "z",
            get: function() {
                return this._z
            },
            set: function(e) {
                var t = e !== this._z;
                this._z = e,
                t && this._onChangeCallback && this._onChangeCallback()
            }
        }, {
            key: "onChange",
            value: function(e) {
                return e && (this._onChangeCallback = e),
                this
            }
        }, {
            key: "set",
            value: function(e, t, i) {
                return this._x = e,
                this._y = t,
                this._z = i,
                this
            }
        }, {
            key: "add",
            value: function(e) {
                return this._x += e.x,
                this._y += e.y,
                this._z += e.z,
                this
            }
        }, {
            key: "addScalar",
            value: function(e) {
                return this._x += e,
                this._y += e,
                this._z += e,
                this
            }
        }, {
            key: "sub",
            value: function(e) {
                return this._x -= e.x,
                this._y -= e.y,
                this._z -= e.z,
                this
            }
        }, {
            key: "subScalar",
            value: function(e) {
                return this._x -= e,
                this._y -= e,
                this._z -= e,
                this
            }
        }, {
            key: "multiply",
            value: function(e) {
                return this._x *= e.x,
                this._y *= e.y,
                this._z *= e.z,
                this
            }
        }, {
            key: "multiplyScalar",
            value: function(e) {
                return this._x *= e,
                this._y *= e,
                this._z *= e,
                this
            }
        }, {
            key: "copy",
            value: function(e) {
                return this._x = e.x,
                this._y = e.y,
                this._z = e.z,
                this
            }
        }, {
            key: "clone",
            value: function() {
                return new e(this._x,this._y,this._z)
            }
        }, {
            key: "sanitizeNaNValuesWith",
            value: function(e) {
                return this._x = isNaN(this._x) ? e.x : parseFloat(this._x),
                this._y = isNaN(this._y) ? e.y : parseFloat(this._y),
                this._z = isNaN(this._z) ? e.z : parseFloat(this._z),
                this
            }
        }, {
            key: "max",
            value: function(e) {
                return this._x = Math.max(this._x, e.x),
                this._y = Math.max(this._y, e.y),
                this._z = Math.max(this._z, e.z),
                this
            }
        }, {
            key: "min",
            value: function(e) {
                return this._x = Math.min(this._x, e.x),
                this._y = Math.min(this._y, e.y),
                this._z = Math.min(this._z, e.z),
                this
            }
        }, {
            key: "equals",
            value: function(e) {
                return this._x === e.x && this._y === e.y && this._z === e.z
            }
        }, {
            key: "normalize",
            value: function() {
                var e = this._x * this._x + this._y * this._y + this._z * this._z;
                return e > 0 && (e = 1 / Math.sqrt(e)),
                this._x *= e,
                this._y *= e,
                this._z *= e,
                this
            }
        }, {
            key: "dot",
            value: function(e) {
                return this._x * e.x + this._y * e.y + this._z * e.z
            }
        }, {
            key: "applyMat4",
            value: function(e) {
                var t = this._x
                  , i = this._y
                  , r = this._z
                  , s = e.elements
                  , n = s[3] * t + s[7] * i + s[11] * r + s[15];
                return n = n || 1,
                this._x = (s[0] * t + s[4] * i + s[8] * r + s[12]) / n,
                this._y = (s[1] * t + s[5] * i + s[9] * r + s[13]) / n,
                this._z = (s[2] * t + s[6] * i + s[10] * r + s[14]) / n,
                this
            }
        }, {
            key: "applyQuat",
            value: function(e) {
                var t = this._x
                  , i = this._y
                  , r = this._z
                  , s = e.elements[0]
                  , n = e.elements[1]
                  , a = e.elements[2]
                  , o = e.elements[3]
                  , h = o * t + n * r - a * i
                  , l = o * i + a * t - s * r
                  , u = o * r + s * i - n * t
                  , d = -s * t - n * i - a * r;
                return this._x = h * o + d * -s + l * -a - u * -n,
                this._y = l * o + d * -n + u * -s - h * -a,
                this._z = u * o + d * -a + h * -n - l * -s,
                this
            }
        }, {
            key: "project",
            value: function(e) {
                return this.applyMat4(e.viewMatrix).applyMat4(e.projectionMatrix),
                this
            }
        }, {
            key: "unproject",
            value: function(e) {
                return this.applyMat4(e.projectionMatrix.getInverse()).applyMat4(e.worldMatrix),
                this
            }
        }]),
        e
    }()
      , T = new P
      , S = new w
      , C = new R
      , E = function() {
        function e(t) {
            var i = this
              , n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
              , a = n.isFBOTexture
              , o = void 0 !== a && a
              , h = n.fromTexture
              , l = void 0 !== h && h
              , u = n.loader
              , d = n.sampler
              , c = n.floatingPoint
              , p = void 0 === c ? "none" : c
              , f = n.premultiplyAlpha
              , g = void 0 !== f && f
              , _ = n.anisotropy
              , m = void 0 === _ ? 1 : _
              , v = n.generateMipmap
              , y = void 0 === v ? null : v
              , x = n.wrapS
              , b = n.wrapT
              , k = n.minFilter
              , w = n.magFilter;
            if (_classCallCheck(this, e),
            this.type = "Texture",
            (t = t && t.renderer || t) && "Renderer" === t.type) {
                if (!t.gl)
                    return void (t.production || r(this.type + ": Unable to create a " + this.type + " because the Renderer WebGL context is not defined"))
            } else
                r(this.type + ": Renderer not passed as first argument", t);
            if (this.renderer = t,
            this.gl = this.renderer.gl,
            this.uuid = s(),
            this._globalParameters = {
                unpackAlignment: 4,
                flipY: !o,
                premultiplyAlpha: !1,
                shouldPremultiplyAlpha: g,
                floatingPoint: p,
                type: this.gl.UNSIGNED_BYTE,
                internalFormat: this.gl.RGBA,
                format: this.gl.RGBA
            },
            this.parameters = {
                anisotropy: m,
                generateMipmap: y,
                wrapS: x || this.gl.CLAMP_TO_EDGE,
                wrapT: b || this.gl.CLAMP_TO_EDGE,
                minFilter: k || this.gl.LINEAR,
                magFilter: w || this.gl.LINEAR,
                _shouldUpdate: !0
            },
            this._initState(),
            this.sourceType = o ? "fbo" : "empty",
            this._useCache = !0,
            this._samplerName = d,
            this._sampler = {
                isActive: !1,
                isTextureBound: !1,
                texture: this.gl.createTexture()
            },
            this._textureMatrix = {
                matrix: new R,
                isActive: !1
            },
            this._size = {
                width: 1,
                height: 1
            },
            this.scale = new P(1),
            this.scale.onChange((function() {
                return i.resize()
            }
            )),
            this.offset = new P,
            this.offset.onChange((function() {
                return i.resize()
            }
            )),
            this._loader = u,
            this._sourceLoaded = !1,
            this._uploaded = !1,
            this._willUpdate = !1,
            this.shouldUpdate = !1,
            this._forceUpdate = !1,
            this.userData = {},
            this._canDraw = !1,
            l)
                return this._copyOnInit = !0,
                void (this._copiedFrom = l);
            this._copyOnInit = !1,
            this._initTexture()
        }
        return _createClass(e, [{
            key: "_initState",
            value: function() {
                this._state = {
                    anisotropy: 1,
                    generateMipmap: !1,
                    wrapS: null,
                    wrapT: null,
                    minFilter: null,
                    magFilter: this.gl.LINEAR
                }
            }
        }, {
            key: "_initTexture",
            value: function() {
                this.gl.bindTexture(this.gl.TEXTURE_2D, this._sampler.texture),
                "empty" === this.sourceType && (this._globalParameters.flipY = !1,
                this._updateGlobalTexParameters(),
                this.gl.texImage2D(this.gl.TEXTURE_2D, 0, this.gl.RGBA, 1, 1, 0, this.gl.RGBA, this.gl.UNSIGNED_BYTE, new Uint8Array([0, 0, 0, 255])),
                this._canDraw = !0)
            }
        }, {
            key: "_restoreFromTexture",
            value: function() {
                this._copyOnInit || this._initTexture(),
                this._parent && (this._setTextureUniforms(),
                this._setSize()),
                this.copy(this._copiedFrom),
                this._canDraw = !0
            }
        }, {
            key: "_restoreContext",
            value: function() {
                var e = this;
                if (this._canDraw = !1,
                this._sampler.texture = this.gl.createTexture(),
                this._sampler.isActive = !1,
                this._sampler.isTextureBound = !1,
                this._textureMatrix.isActive = !1,
                this._initState(),
                this._state.generateMipmap = !1,
                this.parameters._shouldUpdate = !0,
                this._copiedFrom)
                    var t = this.renderer.nextRender.add((function() {
                        e._copiedFrom._canDraw && (e._restoreFromTexture(),
                        t.keep = !1)
                    }
                    ), !0);
                else
                    this._initTexture(),
                    this._parent && this._setParent(),
                    this.source && (this.setSource(this.source),
                    "image" === this.sourceType ? this.renderer.cache.addTexture(this) : this.needUpdate()),
                    this._canDraw = !0
            }
        }, {
            key: "addParent",
            value: function(e) {
                !e || "Plane" !== e.type && "PingPongPlane" !== e.type && "ShaderPass" !== e.type && "RenderTarget" !== e.type ? this.renderer.production || i(this.type + ": cannot add texture as a child of ", e, " because it is not a valid parent") : (this._parent = e,
                this.index = this._parent.textures.length,
                this._parent.textures.push(this),
                this._setParent())
            }
        }, {
            key: "_setParent",
            value: function() {
                var e = this;
                if (this._sampler.name = this._samplerName || "uSampler" + this.index,
                this._textureMatrix.name = this._samplerName ? this._samplerName + "Matrix" : "uTextureMatrix" + this.index,
                this._parent._program) {
                    if (!this._parent._program.compiled)
                        return void (this.renderer.production || i(this.type + ": Unable to create the texture because the program is not valid"));
                    if (this._setTextureUniforms(),
                    this._copyOnInit) {
                        var t = this.renderer.nextRender.add((function() {
                            e._copiedFrom._canDraw && e._copiedFrom._uploaded && (e.copy(e._copiedFrom),
                            t.keep = !1)
                        }
                        ), !0);
                        return
                    }
                    this.source ? this._parent.loader && this._parent.loader._addSourceToParent(this.source, this.sourceType) : this._size = {
                        width: this._parent._boundingRect.document.width,
                        height: this._parent._boundingRect.document.height
                    },
                    this._setSize()
                } else
                    "RenderTarget" === this._parent.type && (this._size = {
                        width: this._parent._size && this._parent._size.width || this.renderer._boundingRect.width,
                        height: this._parent._size && this._parent._size.height || this.renderer._boundingRect.height
                    },
                    this._upload(),
                    this._updateTexParameters(),
                    this._canDraw = !0)
            }
        }, {
            key: "hasParent",
            value: function() {
                return !!this._parent
            }
        }, {
            key: "_setTextureUniforms",
            value: function() {
                for (var e = this, t = this._parent._program.activeUniforms, i = 0; i < t.textures.length; i++) {
                    if (t.textures[i] === this._sampler.name)
                        this._sampler.isActive = !0,
                        this.renderer.useProgram(this._parent._program),
                        this._sampler.location = this.gl.getUniformLocation(this._parent._program.program, this._sampler.name),
                        t.textureMatrices.find((function(t) {
                            return t === e._textureMatrix.name
                        }
                        )) && (this._textureMatrix.isActive = !0,
                        this._textureMatrix.location = this.gl.getUniformLocation(this._parent._program.program, this._textureMatrix.name)),
                        this.gl.uniform1i(this._sampler.location, this.index)
                }
            }
        }, {
            key: "copy",
            value: function(e) {
                e && "Texture" === e.type ? (this._globalParameters = Object.assign({}, e._globalParameters),
                this._state = Object.assign({}, e._state),
                this.parameters.generateMipmap = e.parameters.generateMipmap,
                this._state.generateMipmap = null,
                this._size = e._size,
                !this._sourceLoaded && e._sourceLoaded && this._onSourceLoadedCallback && this._onSourceLoadedCallback(),
                this._sourceLoaded = e._sourceLoaded,
                !this._uploaded && e._uploaded && this._onSourceUploadedCallback && this._onSourceUploadedCallback(),
                this._uploaded = e._uploaded,
                this.sourceType = e.sourceType,
                this.source = e.source,
                this._videoFrameCallbackID = e._videoFrameCallbackID,
                this._sampler.texture = e._sampler.texture,
                this._copiedFrom = e,
                !this._parent || !this._parent._program || this._canDraw && this._textureMatrix.matrix || (this._setSize(),
                this._canDraw = !0),
                this._updateTexParameters(),
                this.renderer.needRender()) : this.renderer.production || i(this.type + ": Unable to set the texture from texture:", e)
            }
        }, {
            key: "setSource",
            value: function(e) {
                var t = this;
                this._sourceLoaded || this.renderer.nextRender.add((function() {
                    return t._onSourceLoadedCallback && t._onSourceLoadedCallback()
                }
                ));
                var r = "IMG" === e.tagName.toUpperCase() ? "image" : e.tagName.toLowerCase();
                if ("video" !== r && "canvas" !== r || (this._useCache = !1),
                this._useCache) {
                    var s = this.renderer.cache.getTextureFromSource(e);
                    if (s && s.uuid !== this.uuid)
                        return this._uploaded || (this.renderer.nextRender.add((function() {
                            return t._onSourceUploadedCallback && t._onSourceUploadedCallback()
                        }
                        )),
                        this._uploaded = !0),
                        this.copy(s),
                        void this.resize()
                }
                if ("empty" === this.sourceType || this.sourceType !== r)
                    if ("video" === r)
                        this._willUpdate = !1,
                        this.shouldUpdate = !0;
                    else if ("canvas" === r)
                        this._willUpdate = !0,
                        this.shouldUpdate = !0;
                    else {
                        if ("image" !== r)
                            return void (this.renderer.production || i(this.type + ": this HTML tag could not be converted into a texture:", e.tagName));
                        this._willUpdate = !1,
                        this.shouldUpdate = !1
                    }
                this.source = e,
                this.sourceType = r,
                this._size = {
                    width: this.source.naturalWidth || this.source.width || this.source.videoWidth,
                    height: this.source.naturalHeight || this.source.height || this.source.videoHeight
                },
                this._sourceLoaded = !0,
                this.gl.bindTexture(this.gl.TEXTURE_2D, this._sampler.texture),
                this.resize(),
                this._globalParameters.flipY = !0,
                this._globalParameters.premultiplyAlpha = this._globalParameters.shouldPremultiplyAlpha,
                "image" === this.sourceType && (this.parameters.generateMipmap = this.parameters.generateMipmap || null === this.parameters.generateMipmap,
                this.parameters._shouldUpdate = this.parameters.generateMipmap,
                this._state.generateMipmap = !1,
                this._upload()),
                this.renderer.needRender()
            }
        }, {
            key: "_updateGlobalTexParameters",
            value: function() {
                this.renderer.state.unpackAlignment !== this._globalParameters.unpackAlignment && (this.gl.pixelStorei(this.gl.UNPACK_ALIGNMENT, this._globalParameters.unpackAlignment),
                this.renderer.state.unpackAlignment = this._globalParameters.unpackAlignment),
                this.renderer.state.flipY !== this._globalParameters.flipY && (this.gl.pixelStorei(this.gl.UNPACK_FLIP_Y_WEBGL, this._globalParameters.flipY),
                this.renderer.state.flipY = this._globalParameters.flipY),
                this.renderer.state.premultiplyAlpha !== this._globalParameters.premultiplyAlpha && (this.gl.pixelStorei(this.gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, this._globalParameters.premultiplyAlpha),
                this.renderer.state.premultiplyAlpha = this._globalParameters.premultiplyAlpha),
                "half-float" === this._globalParameters.floatingPoint ? this.renderer._isWebGL2 && this.renderer.extensions.EXT_color_buffer_float ? (this._globalParameters.internalFormat = this.gl.RGBA16F,
                this._globalParameters.type = this.gl.HALF_FLOAT) : this.renderer.extensions.OES_texture_half_float ? this._globalParameters.type = this.renderer.extensions.OES_texture_half_float.HALF_FLOAT_OES : this.renderer.production || i(this.type + ": could not use half-float textures because the extension is not available") : "float" === this._globalParameters.floatingPoint && (this.renderer._isWebGL2 && this.renderer.extensions.EXT_color_buffer_float ? (this._globalParameters.internalFormat = this.gl.RGBA16F,
                this._globalParameters.type = this.gl.FLOAT) : this.renderer.extensions.OES_texture_float ? this._globalParameters.type = this.renderer.extensions.OES_texture_half_float.FLOAT : this.renderer.production || i(this.type + ": could not use float textures because the extension is not available"))
            }
        }, {
            key: "_updateTexParameters",
            value: function() {
                this.index && this.renderer.state.activeTexture !== this.index && this._bindTexture(),
                this.parameters.wrapS !== this._state.wrapS && (this.renderer._isWebGL2 || n(this._size.width) && n(this._size.height) || (this.parameters.wrapS = this.gl.CLAMP_TO_EDGE),
                this.parameters.wrapS !== this.gl.REPEAT && this.parameters.wrapS !== this.gl.CLAMP_TO_EDGE && this.parameters.wrapS !== this.gl.MIRRORED_REPEAT && (this.renderer.production || i(this.type + ": Wrong wrapS value", this.parameters.wrapS, "for this texture:", this, "\ngl.CLAMP_TO_EDGE wrapping will be used instead"),
                this.parameters.wrapS = this.gl.CLAMP_TO_EDGE),
                this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_WRAP_S, this.parameters.wrapS),
                this._state.wrapS = this.parameters.wrapS),
                this.parameters.wrapT !== this._state.wrapT && (this.renderer._isWebGL2 || n(this._size.width) && n(this._size.height) || (this.parameters.wrapT = this.gl.CLAMP_TO_EDGE),
                this.parameters.wrapT !== this.gl.REPEAT && this.parameters.wrapT !== this.gl.CLAMP_TO_EDGE && this.parameters.wrapT !== this.gl.MIRRORED_REPEAT && (this.renderer.production || i(this.type + ": Wrong wrapT value", this.parameters.wrapT, "for this texture:", this, "\ngl.CLAMP_TO_EDGE wrapping will be used instead"),
                this.parameters.wrapT = this.gl.CLAMP_TO_EDGE),
                this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_WRAP_T, this.parameters.wrapT),
                this._state.wrapT = this.parameters.wrapT),
                this.parameters.generateMipmap && !this._state.generateMipmap && this.source && (this.renderer._isWebGL2 || n(this._size.width) && n(this._size.height) ? this.gl.generateMipmap(this.gl.TEXTURE_2D) : this.parameters.generateMipmap = !1,
                this._state.generateMipmap = this.parameters.generateMipmap),
                this.parameters.minFilter !== this._state.minFilter && (this.renderer._isWebGL2 || n(this._size.width) && n(this._size.height) || (this.parameters.minFilter = this.gl.LINEAR),
                this.parameters.generateMipmap || null === this.parameters.generateMipmap || (this.parameters.minFilter = this.gl.LINEAR),
                this.parameters.minFilter !== this.gl.LINEAR && this.parameters.minFilter !== this.gl.NEAREST && this.parameters.minFilter !== this.gl.NEAREST_MIPMAP_NEAREST && this.parameters.minFilter !== this.gl.LINEAR_MIPMAP_NEAREST && this.parameters.minFilter !== this.gl.NEAREST_MIPMAP_LINEAR && this.parameters.minFilter !== this.gl.LINEAR_MIPMAP_LINEAR && (this.renderer.production || i(this.type + ": Wrong minFilter value", this.parameters.minFilter, "for this texture:", this, "\ngl.LINEAR filtering will be used instead"),
                this.parameters.minFilter = this.gl.LINEAR),
                this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_MIN_FILTER, this.parameters.minFilter),
                this._state.minFilter = this.parameters.minFilter),
                this.parameters.magFilter !== this._state.magFilter && (this.renderer._isWebGL2 || n(this._size.width) && n(this._size.height) || (this.parameters.magFilter = this.gl.LINEAR),
                this.parameters.magFilter !== this.gl.LINEAR && this.parameters.magFilter !== this.gl.NEAREST && (this.renderer.production || i(this.type + ": Wrong magFilter value", this.parameters.magFilter, "for this texture:", this, "\ngl.LINEAR filtering will be used instead"),
                this.parameters.magFilter = this.gl.LINEAR),
                this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_MAG_FILTER, this.parameters.magFilter),
                this._state.magFilter = this.parameters.magFilter);
                var e = this.renderer.extensions.EXT_texture_filter_anisotropic;
                if (e && this.parameters.anisotropy !== this._state.anisotropy) {
                    var t = this.gl.getParameter(e.MAX_TEXTURE_MAX_ANISOTROPY_EXT);
                    this.parameters.anisotropy = Math.max(1, Math.min(this.parameters.anisotropy, t)),
                    this.gl.texParameterf(this.gl.TEXTURE_2D, e.TEXTURE_MAX_ANISOTROPY_EXT, this.parameters.anisotropy),
                    this._state.anisotropy = this.parameters.anisotropy
                }
            }
        }, {
            key: "setWrapS",
            value: function(e) {
                this.parameters.wrapS !== e && (this.parameters.wrapS = e,
                this.parameters._shouldUpdate = !0)
            }
        }, {
            key: "setWrapT",
            value: function(e) {
                this.parameters.wrapT !== e && (this.parameters.wrapT = e,
                this.parameters._shouldUpdate = !0)
            }
        }, {
            key: "setMinFilter",
            value: function(e) {
                this.parameters.minFilter !== e && (this.parameters.minFilter = e,
                this.parameters._shouldUpdate = !0)
            }
        }, {
            key: "setMagFilter",
            value: function(e) {
                this.parameters.magFilter !== e && (this.parameters.magFilter = e,
                this.parameters._shouldUpdate = !0)
            }
        }, {
            key: "setAnisotropy",
            value: function(e) {
                e = isNaN(e) ? this.parameters.anisotropy : e,
                this.parameters.anisotropy !== e && (this.parameters.anisotropy = e,
                this.parameters._shouldUpdate = !0)
            }
        }, {
            key: "needUpdate",
            value: function() {
                this._forceUpdate = !0
            }
        }, {
            key: "_videoFrameCallback",
            value: function() {
                var e = this;
                this._willUpdate = !0,
                this.source.requestVideoFrameCallback((function() {
                    return e._videoFrameCallback()
                }
                ))
            }
        }, {
            key: "_upload",
            value: function() {
                var e = this;
                this._updateGlobalTexParameters(),
                this.source ? this.gl.texImage2D(this.gl.TEXTURE_2D, 0, this._globalParameters.internalFormat, this._globalParameters.format, this._globalParameters.type, this.source) : "fbo" === this.sourceType && this.gl.texImage2D(this.gl.TEXTURE_2D, 0, this._globalParameters.internalFormat, this._size.width, this._size.height, 0, this._globalParameters.format, this._globalParameters.type, this.source || null),
                this._uploaded || (this.renderer.nextRender.add((function() {
                    return e._onSourceUploadedCallback && e._onSourceUploadedCallback()
                }
                )),
                this._uploaded = !0)
            }
        }, {
            key: "_getSizes",
            value: function() {
                if ("fbo" === this.sourceType)
                    return {
                        parentWidth: this._parent._boundingRect.document.width,
                        parentHeight: this._parent._boundingRect.document.height,
                        sourceWidth: this._parent._boundingRect.document.width,
                        sourceHeight: this._parent._boundingRect.document.height,
                        xOffset: 0,
                        yOffset: 0
                    };
                var e = this._parent.scale ? T.set(this._parent.scale.x, this._parent.scale.y) : T.set(1, 1)
                  , t = this._parent._boundingRect.document.width * e.x
                  , i = this._parent._boundingRect.document.height * e.y
                  , r = this._size.width
                  , s = this._size.height
                  , n = r / s
                  , a = t / i
                  , o = 0
                  , h = 0;
                return a > n ? h = Math.min(0, i - t * (1 / n)) : a < n && (o = Math.min(0, t - i * n)),
                {
                    parentWidth: t,
                    parentHeight: i,
                    sourceWidth: r,
                    sourceHeight: s,
                    xOffset: o,
                    yOffset: h
                }
            }
        }, {
            key: "setScale",
            value: function(e) {
                e.type && "Vec2" === e.type ? (e.sanitizeNaNValuesWith(this.scale).max(T.set(.001, .001)),
                e.equals(this.scale) || (this.scale.copy(e),
                this.resize())) : this.renderer.production || i(this.type + ": Cannot set scale because the parameter passed is not of Vec2 type:", e)
            }
        }, {
            key: "setOffset",
            value: function(e) {
                e.type && "Vec2" === e.type ? (e.sanitizeNaNValuesWith(this.offset),
                e.equals(this.offset) || (this.offset.copy(e),
                this.resize())) : this.renderer.production || i(this.type + ": Cannot set offset because the parameter passed is not of Vec2 type:", scale)
            }
        }, {
            key: "_setSize",
            value: function() {
                if (this._parent && this._parent._program) {
                    var e = this._getSizes();
                    this._updateTextureMatrix(e)
                }
            }
        }, {
            key: "resize",
            value: function() {
                "fbo" === this.sourceType ? (this._size = {
                    width: this._parent._size && this._parent._size.width || this._parent._boundingRect.document.width,
                    height: this._parent._size && this._parent._size.height || this._parent._boundingRect.document.height
                },
                this._copiedFrom || (this.gl.bindTexture(this.gl.TEXTURE_2D, this._sampler.texture),
                this.gl.texImage2D(this.gl.TEXTURE_2D, 0, this._globalParameters.internalFormat, this._size.width, this._size.height, 0, this._globalParameters.format, this._globalParameters.type, null))) : this.source && (this._size = {
                    width: this.source.naturalWidth || this.source.width || this.source.videoWidth,
                    height: this.source.naturalHeight || this.source.height || this.source.videoHeight
                }),
                this._setSize()
            }
        }, {
            key: "_updateTextureMatrix",
            value: function(e) {
                var t = S.set(e.parentWidth / (e.parentWidth - e.xOffset), e.parentHeight / (e.parentHeight - e.yOffset), 1);
                t.x /= this.scale.x,
                t.y /= this.scale.y,
                this._textureMatrix.matrix = C.setFromArray([t.x, 0, 0, 0, 0, t.y, 0, 0, 0, 0, 1, 0, (1 - t.x) / 2 + this.offset.x, (1 - t.y) / 2 + this.offset.y, 0, 1]),
                this._updateMatrixUniform()
            }
        }, {
            key: "_updateMatrixUniform",
            value: function() {
                this._textureMatrix.isActive && (this.renderer.useProgram(this._parent._program),
                this.gl.uniformMatrix4fv(this._textureMatrix.location, !1, this._textureMatrix.matrix.elements))
            }
        }, {
            key: "_onSourceLoaded",
            value: function(e) {
                this.setSource(e),
                "image" === this.sourceType && this.renderer.cache.addTexture(this)
            }
        }, {
            key: "_bindTexture",
            value: function() {
                this._canDraw && (this.renderer.state.activeTexture !== this.index && (this.gl.activeTexture(this.gl.TEXTURE0 + this.index),
                this.renderer.state.activeTexture = this.index),
                this.gl.bindTexture(this.gl.TEXTURE_2D, this._sampler.texture),
                this._sampler.isTextureBound || (this._sampler.isTextureBound = !!this.gl.getParameter(this.gl.TEXTURE_BINDING_2D),
                this._sampler.isTextureBound && this.renderer.needRender()))
            }
        }, {
            key: "_draw",
            value: function() {
                this._sampler.isActive && (this._bindTexture(),
                "video" === this.sourceType && this.source && !this._videoFrameCallbackID && this.source.readyState >= this.source.HAVE_CURRENT_DATA && !this.source.paused && (this._willUpdate = !0),
                (this._forceUpdate || this._willUpdate && this.shouldUpdate) && (this._state.generateMipmap = !1,
                this._upload()),
                "video" === this.sourceType && (this._willUpdate = !1),
                this._forceUpdate = !1),
                this.parameters._shouldUpdate && (this._updateTexParameters(),
                this.parameters._shouldUpdate = !1)
            }
        }, {
            key: "onSourceLoaded",
            value: function(e) {
                return e && (this._onSourceLoadedCallback = e),
                this
            }
        }, {
            key: "onSourceUploaded",
            value: function(e) {
                return e && (this._onSourceUploadedCallback = e),
                this
            }
        }, {
            key: "_dispose",
            value: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                "video" === this.sourceType || "image" === this.sourceType && !this.renderer.state.isActive ? (this._loader && this._loader._removeSource(this),
                this.source = null) : "canvas" === this.sourceType && (this.source.width = this.source.width,
                this.source = null),
                this._parent = null;
                var t = this.gl && !this._copiedFrom && (e || "image" !== this.sourceType || !this.renderer.state.isActive);
                t && (this._canDraw = !1,
                this.renderer.cache.removeTexture(this),
                this.gl.activeTexture(this.gl.TEXTURE0 + this.index),
                this.gl.bindTexture(this.gl.TEXTURE_2D, null),
                this.gl.deleteTexture(this._sampler.texture))
            }
        }]),
        e
    }()
      , M = function() {
        function e(t) {
            var i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "anonymous";
            if (_classCallCheck(this, e),
            this.type = "TextureLoader",
            (t = t && t.renderer || t) && "Renderer" === t.type) {
                if (!t.gl)
                    return void r(this.type + ": Renderer WebGL context is undefined", t)
            } else
                r(this.type + ": Renderer not passed as first argument", t);
            this.renderer = t,
            this.gl = this.renderer.gl,
            this.crossOrigin = i,
            this.elements = []
        }
        return _createClass(e, [{
            key: "_addElement",
            value: function(e, t, i, r) {
                var s = {
                    source: e,
                    texture: t,
                    load: this._sourceLoaded.bind(this, e, t, i),
                    error: this._sourceLoadError.bind(this, e, r)
                };
                return this.elements.push(s),
                s
            }
        }, {
            key: "_sourceLoadError",
            value: function(e, t, i) {
                t && t(e, i)
            }
        }, {
            key: "_sourceLoaded",
            value: function(e, t, i) {
                var r = this;
                t._sourceLoaded || (t._onSourceLoaded(e),
                this._parent && (this._increment && this._increment(),
                this.renderer.nextRender.add((function() {
                    return r._parent._onLoadingCallback && r._parent._onLoadingCallback(t)
                }
                ))),
                i && i(t))
            }
        }, {
            key: "_getSourceType",
            value: function(e) {
                var t;
                return "string" == typeof e ? null !== e.match(/\.(jpeg|jpg|jfif|pjpeg|pjp|gif|bmp|png|webp|svg|avif|apng)$/) ? t = "image" : null !== e.match(/\.(webm|mp4|mpg|mpeg|avi|ogg|ogm|ogv|mov|av1)$/) && (t = "video") : "IMG" === e.tagName.toUpperCase() ? t = "image" : "VIDEO" === e.tagName.toUpperCase() ? t = "video" : "CANVAS" === e.tagName.toUpperCase() && (t = "canvas"),
                t
            }
        }, {
            key: "_createImage",
            value: function(e) {
                if ("string" != typeof e && e.hasAttribute("crossOrigin"))
                    return e;
                var t = new Image;
                return t.crossOrigin = this.crossOrigin,
                "string" == typeof e ? t.src = e : (t.src = e.src,
                e.hasAttribute("data-sampler") && t.setAttribute("data-sampler", e.getAttribute("data-sampler"))),
                t
            }
        }, {
            key: "_createVideo",
            value: function(e) {
                if ("string" == typeof e || null === e.getAttribute("crossOrigin")) {
                    var t = document.createElement("video");
                    return t.crossOrigin = this.crossOrigin,
                    "string" == typeof e ? t.src = e : (t.src = e.src,
                    e.hasAttribute("data-sampler") && t.setAttribute("data-sampler", e.getAttribute("data-sampler"))),
                    t
                }
                return e
            }
        }, {
            key: "loadSource",
            value: function(e, t, i, r) {
                switch (this._getSourceType(e)) {
                case "image":
                    this.loadImage(e, t, i, r);
                    break;
                case "video":
                    this.loadVideo(e, t, i, r);
                    break;
                case "canvas":
                    this.loadCanvas(e, t, i);
                    break;
                default:
                    this._sourceLoadError(e, r, "this source could not be converted into a texture: " + e)
                }
            }
        }, {
            key: "loadSources",
            value: function(e, t, i, r) {
                for (var s = 0; s < e.length; s++)
                    this.loadSource(e[s], t, i, r)
            }
        }, {
            key: "loadImage",
            value: function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
                  , i = arguments.length > 2 ? arguments[2] : void 0
                  , r = arguments.length > 3 ? arguments[3] : void 0
                  , s = this.renderer.cache.getTextureFromSource(e)
                  , n = Object.assign({}, t);
                if (this._parent && (n = Object.assign(n, this._parent._texturesOptions)),
                n.loader = this,
                s) {
                    n.sampler = "string" != typeof e && e.hasAttribute("data-sampler") ? e.getAttribute("data-sampler") : n.sampler,
                    n.fromTexture = s;
                    var a = new E(this.renderer,n);
                    return this._sourceLoaded(s.source, a, i),
                    void (this._parent && this._addToParent(a, s.source, "image"))
                }
                var o = this._createImage(e);
                n.sampler = o.hasAttribute("data-sampler") ? o.getAttribute("data-sampler") : n.sampler;
                var h = new E(this.renderer,n)
                  , l = this._addElement(o, h, i, r);
                o.complete ? this._sourceLoaded(o, h, i) : o.decode ? o.decode().then(this._sourceLoaded.bind(this, o, h, i)).catch((function() {
                    o.addEventListener("load", l.load, !1),
                    o.addEventListener("error", l.error, !1)
                }
                )) : (o.addEventListener("load", l.load, !1),
                o.addEventListener("error", l.error, !1)),
                this._parent && this._addToParent(h, o, "image")
            }
        }, {
            key: "loadImages",
            value: function(e, t, i, r) {
                for (var s = 0; s < e.length; s++)
                    this.loadImage(e[s], t, i, r)
            }
        }, {
            key: "loadVideo",
            value: function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
                  , i = arguments.length > 2 ? arguments[2] : void 0
                  , r = arguments.length > 3 ? arguments[3] : void 0
                  , s = this._createVideo(e);
                s.preload = !0,
                s.muted = !0,
                s.loop = !0,
                s.setAttribute("playsinline", ""),
                s.crossOrigin = this.crossOrigin;
                var n = Object.assign({}, t);
                this._parent && (n = Object.assign(t, this._parent._texturesOptions)),
                n.loader = this,
                n.sampler = s.hasAttribute("data-sampler") ? s.getAttribute("data-sampler") : n.sampler;
                var a = new E(this.renderer,n)
                  , o = this._addElement(s, a, i, r);
                s.addEventListener("canplaythrough", o.load, !1),
                s.addEventListener("error", o.error, !1),
                s.readyState >= s.HAVE_FUTURE_DATA && i && this._sourceLoaded(s, a, i),
                s.load(),
                this._addToParent && this._addToParent(a, s, "video"),
                "requestVideoFrameCallback"in HTMLVideoElement.prototype && (o.videoFrameCallback = a._videoFrameCallback.bind(a),
                a._videoFrameCallbackID = s.requestVideoFrameCallback(o.videoFrameCallback))
            }
        }, {
            key: "loadVideos",
            value: function(e, t, i, r) {
                for (var s = 0; s < e.length; s++)
                    this.loadVideo(e[s], t, i, r)
            }
        }, {
            key: "loadCanvas",
            value: function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
                  , i = arguments.length > 2 ? arguments[2] : void 0
                  , r = Object.assign({}, t);
                this._parent && (r = Object.assign(t, this._parent._texturesOptions)),
                r.loader = this,
                r.sampler = e.hasAttribute("data-sampler") ? e.getAttribute("data-sampler") : r.sampler;
                var s = new E(this.renderer,r);
                this._addElement(e, s, i, null),
                this._sourceLoaded(e, s, i),
                this._parent && this._addToParent(s, e, "canvas")
            }
        }, {
            key: "loadCanvases",
            value: function(e, t, i) {
                for (var r = 0; r < e.length; r++)
                    this.loadCanvas(e[r], t, i)
            }
        }, {
            key: "_removeSource",
            value: function(e) {
                var t = this.elements.find((function(t) {
                    return t.texture.uuid === e.uuid
                }
                ));
                t && ("image" === e.sourceType ? t.source.removeEventListener("load", t.load, !1) : "video" === e.sourceType && (t.videoFrameCallback && e._videoFrameCallbackID && t.source.cancelVideoFrameCallback(e._videoFrameCallbackID),
                t.source.removeEventListener("canplaythrough", t.load, !1),
                t.source.pause(),
                t.source.removeAttribute("src"),
                t.source.load()),
                t.source.removeEventListener("error", t.error, !1))
            }
        }]),
        e
    }()
      , A = function(e) {
        _inherits(r, e);
        var t = _createSuper(r);
        function r(e, s) {
            var n, a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, o = a.sourcesLoaded, h = void 0 === o ? 0 : o, l = a.sourcesToLoad, u = void 0 === l ? 0 : l, d = a.complete, c = void 0 !== d && d, p = a.onComplete, f = void 0 === p ? function() {}
            : p;
            return _classCallCheck(this, r),
            (n = t.call(this, e, s.crossOrigin)).type = "PlaneTextureLoader",
            n._parent = s,
            "Plane" !== n._parent.type && "PingPongPlane" !== n._parent.type && "ShaderPass" !== n._parent.type && (i(n.type + ": Wrong parent type assigned to this loader"),
            n._parent = null),
            n.sourcesLoaded = h,
            n.sourcesToLoad = u,
            n.complete = c,
            n.onComplete = f,
            n
        }
        return _createClass(r, [{
            key: "_setLoaderSize",
            value: function(e) {
                var t = this;
                this.sourcesToLoad = e,
                0 === this.sourcesToLoad && (this.complete = !0,
                this.renderer.nextRender.add((function() {
                    return t.onComplete && t.onComplete()
                }
                )))
            }
        }, {
            key: "_increment",
            value: function() {
                var e = this;
                this.sourcesLoaded++,
                this.sourcesLoaded >= this.sourcesToLoad && !this.complete && (this.complete = !0,
                this.renderer.nextRender.add((function() {
                    return e.onComplete && e.onComplete()
                }
                )))
            }
        }, {
            key: "_addSourceToParent",
            value: function(e, t) {
                if ("image" === t) {
                    var i = this._parent.images;
                    !i.find((function(t) {
                        return t.src === e.src
                    }
                    )) && i.push(e)
                } else if ("video" === t) {
                    var r = this._parent.videos;
                    !r.find((function(t) {
                        return t.src === e.src
                    }
                    )) && r.push(e)
                } else if ("canvas" === t) {
                    var s = this._parent.canvases;
                    !s.find((function(t) {
                        return t.isSameNode(e)
                    }
                    )) && s.push(e)
                }
            }
        }, {
            key: "_addToParent",
            value: function(e, t, i) {
                this._addSourceToParent(t, i),
                this._parent && e.addParent(this._parent)
            }
        }]),
        r
    }(M)
      , F = function() {
        function e(t) {
            var i = this
              , s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "Mesh"
              , n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}
              , a = n.vertexShaderID
              , o = n.fragmentShaderID
              , h = n.vertexShader
              , l = n.fragmentShader
              , u = n.uniforms
              , d = void 0 === u ? {} : u
              , c = n.widthSegments
              , p = void 0 === c ? 1 : c
              , f = n.heightSegments
              , g = void 0 === f ? 1 : f
              , _ = n.renderOrder
              , m = void 0 === _ ? 0 : _
              , v = n.depthTest
              , y = void 0 === v || v
              , x = n.cullFace
              , R = void 0 === x ? "back" : x
              , P = n.texturesOptions
              , w = void 0 === P ? {} : P
              , T = n.crossOrigin
              , S = void 0 === T ? "anonymous" : T;
            if (_classCallCheck(this, e),
            this.type = s,
            (t = t && t.renderer || t) && "Renderer" === t.type || (r(this.type + ": Curtains not passed as first argument or Curtains Renderer is missing", t),
            setTimeout((function() {
                i._onErrorCallback && i._onErrorCallback()
            }
            ), 0)),
            this.renderer = t,
            this.gl = this.renderer.gl,
            !this.gl)
                return this.renderer.production || r(this.type + ": Unable to create a " + this.type + " because the Renderer WebGL context is not defined"),
                void setTimeout((function() {
                    i._onErrorCallback && i._onErrorCallback()
                }
                ), 0);
            this._canDraw = !1,
            this.renderOrder = m,
            this._depthTest = y,
            this.cullFace = R,
            "back" !== this.cullFace && "front" !== this.cullFace && "none" !== this.cullFace && (this.cullFace = "back"),
            this.textures = [],
            this._texturesOptions = Object.assign({
                premultiplyAlpha: !1,
                anisotropy: 1,
                floatingPoint: "none",
                wrapS: this.gl.CLAMP_TO_EDGE,
                wrapT: this.gl.CLAMP_TO_EDGE,
                minFilter: this.gl.LINEAR,
                magFilter: this.gl.LINEAR
            }, w),
            this.crossOrigin = S,
            !h && a && document.getElementById(a) && (h = document.getElementById(a).innerHTML),
            !l && o && document.getElementById(o) && (l = document.getElementById(o).innerHTML),
            this._initMesh(),
            p = parseInt(p),
            g = parseInt(g),
            this._geometry = new k(this.renderer,{
                width: p,
                height: g
            }),
            this._program = new b(this.renderer,{
                parent: this,
                vertexShader: h,
                fragmentShader: l
            }),
            this._program.compiled ? (this._program.createUniforms(d),
            this.uniforms = this._program.uniformsManager.uniforms,
            this._geometry.setProgram(this._program),
            this.renderer.onSceneChange()) : this.renderer.nextRender.add((function() {
                return i._onErrorCallback && i._onErrorCallback()
            }
            ))
        }
        return _createClass(e, [{
            key: "_initMesh",
            value: function() {
                var e = this;
                this.uuid = s(),
                this.loader = new A(this.renderer,this,{
                    sourcesLoaded: 0,
                    initSourcesToLoad: 0,
                    complete: !1,
                    onComplete: function() {
                        e._onReadyCallback && e._onReadyCallback(),
                        e.renderer.needRender()
                    }
                }),
                this.images = [],
                this.videos = [],
                this.canvases = [],
                this.userData = {},
                this._canDraw = !0
            }
        }, {
            key: "_restoreContext",
            value: function() {
                this._canDraw = !1,
                this._matrices && (this._matrices = null),
                this._program = new b(this.renderer,{
                    parent: this,
                    vertexShader: this._program.vsCode,
                    fragmentShader: this._program.fsCode
                }),
                this._program.compiled && (this._geometry.restoreContext(this._program),
                this._program.createUniforms(this.uniforms),
                this.uniforms = this._program.uniformsManager.uniforms,
                this._programRestored())
            }
        }, {
            key: "setRenderTarget",
            value: function(e) {
                e && "RenderTarget" === e.type ? ("Plane" === this.type && this.renderer.scene.removePlane(this),
                this.target = e,
                "Plane" === this.type && this.renderer.scene.addPlane(this)) : this.renderer.production || i(this.type + ": Could not set the render target because the argument passed is not a RenderTarget class object", e)
            }
        }, {
            key: "setRenderOrder",
            value: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                (e = isNaN(e) ? this.renderOrder : parseInt(e)) !== this.renderOrder && (this.renderOrder = e,
                this.renderer.scene.setPlaneRenderOrder(this))
            }
        }, {
            key: "createTexture",
            value: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
                  , t = new E(this.renderer,Object.assign(e, this._texturesOptions));
                return t.addParent(this),
                t
            }
        }, {
            key: "addTexture",
            value: function(e) {
                e && "Texture" === e.type ? e.addParent(this) : this.renderer.production || i(this.type + ": cannot add ", e, " to this " + this.type + " because it is not a valid texture")
            }
        }, {
            key: "loadSources",
            value: function(e) {
                for (var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, i = arguments.length > 2 ? arguments[2] : void 0, r = arguments.length > 3 ? arguments[3] : void 0, s = 0; s < e.length; s++)
                    this.loadSource(e[s], t, i, r)
            }
        }, {
            key: "loadSource",
            value: function(e) {
                var t = this
                  , r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
                  , s = arguments.length > 2 ? arguments[2] : void 0
                  , n = arguments.length > 3 ? arguments[3] : void 0;
                this.loader.loadSource(e, Object.assign(r, this._texturesOptions), (function(e) {
                    s && s(e)
                }
                ), (function(e, r) {
                    t.renderer.production || i(t.type + ": this HTML tag could not be converted into a texture:", e.tagName),
                    n && n(e, r)
                }
                ))
            }
        }, {
            key: "loadImage",
            value: function(e) {
                var t = this
                  , r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
                  , s = arguments.length > 2 ? arguments[2] : void 0
                  , n = arguments.length > 3 ? arguments[3] : void 0;
                this.loader.loadImage(e, Object.assign(r, this._texturesOptions), (function(e) {
                    s && s(e)
                }
                ), (function(e, r) {
                    t.renderer.production || i(t.type + ": There has been an error:\n", r, "\nwhile loading this image:\n", e),
                    n && n(e, r)
                }
                ))
            }
        }, {
            key: "loadVideo",
            value: function(e) {
                var t = this
                  , r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
                  , s = arguments.length > 2 ? arguments[2] : void 0
                  , n = arguments.length > 3 ? arguments[3] : void 0;
                this.loader.loadVideo(e, Object.assign(r, this._texturesOptions), (function(e) {
                    s && s(e)
                }
                ), (function(e, r) {
                    t.renderer.production || i(t.type + ": There has been an error:\n", r, "\nwhile loading this video:\n", e),
                    n && n(e, r)
                }
                ))
            }
        }, {
            key: "loadCanvas",
            value: function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
                  , i = arguments.length > 2 ? arguments[2] : void 0;
                this.loader.loadCanvas(e, Object.assign(t, this._texturesOptions), (function(e) {
                    i && i(e)
                }
                ))
            }
        }, {
            key: "loadImages",
            value: function(e) {
                for (var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, i = arguments.length > 2 ? arguments[2] : void 0, r = arguments.length > 3 ? arguments[3] : void 0, s = 0; s < e.length; s++)
                    this.loadImage(e[s], t, i, r)
            }
        }, {
            key: "loadVideos",
            value: function(e) {
                for (var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, i = arguments.length > 2 ? arguments[2] : void 0, r = arguments.length > 3 ? arguments[3] : void 0, s = 0; s < e.length; s++)
                    this.loadVideo(e[s], t, i, r)
            }
        }, {
            key: "loadCanvases",
            value: function(e) {
                for (var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, i = arguments.length > 2 ? arguments[2] : void 0, r = 0; r < e.length; r++)
                    this.loadCanvas(e[r], t, i)
            }
        }, {
            key: "playVideos",
            value: function() {
                for (var e = this, t = 0; t < this.textures.length; t++) {
                    var r = this.textures[t];
                    if ("video" === r.sourceType) {
                        var s = r.source.play();
                        void 0 !== s && s.catch((function(t) {
                            e.renderer.production || i(e.type + ": Could not play the video : ", t)
                        }
                        ))
                    }
                }
            }
        }, {
            key: "_draw",
            value: function() {
                this.renderer.setDepthTest(this._depthTest),
                this.renderer.setFaceCulling(this.cullFace),
                this._program.updateUniforms(),
                this._geometry.bindBuffers(),
                this.renderer.state.forceBufferUpdate = !1;
                for (var e = 0; e < this.textures.length; e++)
                    if (this.textures[e]._draw(),
                    this.textures[e]._sampler.isActive && !this.textures[e]._sampler.isTextureBound)
                        return;
                this._geometry.draw(),
                this.renderer.state.activeTexture = null,
                this._onAfterRenderCallback && this._onAfterRenderCallback()
            }
        }, {
            key: "onError",
            value: function(e) {
                return e && (this._onErrorCallback = e),
                this
            }
        }, {
            key: "onLoading",
            value: function(e) {
                return e && (this._onLoadingCallback = e),
                this
            }
        }, {
            key: "onReady",
            value: function(e) {
                return e && (this._onReadyCallback = e),
                this
            }
        }, {
            key: "onRender",
            value: function(e) {
                return e && (this._onRenderCallback = e),
                this
            }
        }, {
            key: "onAfterRender",
            value: function(e) {
                return e && (this._onAfterRenderCallback = e),
                this
            }
        }, {
            key: "remove",
            value: function() {
                this._canDraw = !1,
                this.target && this.renderer.bindFrameBuffer(null),
                this._dispose(),
                "Plane" === this.type ? this.renderer.removePlane(this) : "ShaderPass" === this.type && (this.target && (this.target._shaderPass = null,
                this.target.remove(),
                this.target = null),
                this.renderer.removeShaderPass(this))
            }
        }, {
            key: "_dispose",
            value: function() {
                if (this.gl) {
                    this._geometry && this._geometry.dispose(),
                    this.target && "ShaderPass" === this.type && (this.renderer.removeRenderTarget(this.target),
                    this.textures.shift());
                    for (var e = 0; e < this.textures.length; e++)
                        this.textures[e]._dispose();
                    this.textures = []
                }
            }
        }]),
        e
    }()
      , O = new P
      , D = new P
      , z = function(e) {
        _inherits(r, e);
        var t = _createSuper(r);
        function r(e, s) {
            var n, a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "DOMMesh", o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}, h = o.widthSegments, l = o.heightSegments, u = o.renderOrder, d = o.depthTest, c = o.cullFace, p = o.uniforms, f = o.vertexShaderID, g = o.fragmentShaderID, _ = o.vertexShader, m = o.fragmentShader, v = o.texturesOptions, y = o.crossOrigin;
            return _classCallCheck(this, r),
            f = f || s && s.getAttribute("data-vs-id"),
            g = g || s && s.getAttribute("data-fs-id"),
            (n = t.call(this, e, a, {
                widthSegments: h,
                heightSegments: l,
                renderOrder: u,
                depthTest: d,
                cullFace: c,
                uniforms: p,
                vertexShaderID: f,
                fragmentShaderID: g,
                vertexShader: _,
                fragmentShader: m,
                texturesOptions: v,
                crossOrigin: y
            })).gl ? (n.htmlElement = s,
            n.htmlElement && 0 !== n.htmlElement.length || n.renderer.production || i(n.type + ": The HTML element you specified does not currently exists in the DOM"),
            n._setDocumentSizes(),
            n) : _possibleConstructorReturn(n)
        }
        return _createClass(r, [{
            key: "_setDocumentSizes",
            value: function() {
                var e = this.htmlElement.getBoundingClientRect();
                this._boundingRect || (this._boundingRect = {}),
                this._boundingRect.document = {
                    width: e.width * this.renderer.pixelRatio,
                    height: e.height * this.renderer.pixelRatio,
                    top: e.top * this.renderer.pixelRatio,
                    left: e.left * this.renderer.pixelRatio
                }
            }
        }, {
            key: "getBoundingRect",
            value: function() {
                return {
                    width: this._boundingRect.document.width,
                    height: this._boundingRect.document.height,
                    top: this._boundingRect.document.top,
                    left: this._boundingRect.document.left,
                    right: this._boundingRect.document.left + this._boundingRect.document.width,
                    bottom: this._boundingRect.document.top + this._boundingRect.document.height
                }
            }
        }, {
            key: "resize",
            value: function() {
                var e = this;
                this._setDocumentSizes(),
                "Plane" === this.type && (this.setPerspective(this.camera.fov, this.camera.near, this.camera.far),
                this._setWorldSizes(),
                this._applyWorldPositions());
                for (var t = 0; t < this.textures.length; t++)
                    this.textures[t].resize();
                this.renderer.nextRender.add((function() {
                    return e._onAfterResizeCallback && e._onAfterResizeCallback()
                }
                ))
            }
        }, {
            key: "mouseToPlaneCoords",
            value: function(e) {
                var t = this.scale ? this.scale : D.set(1, 1)
                  , i = O.set((this._boundingRect.document.width - this._boundingRect.document.width * t.x) / 2, (this._boundingRect.document.height - this._boundingRect.document.height * t.y) / 2)
                  , r = this._boundingRect.document.width * t.x / this.renderer.pixelRatio
                  , s = this._boundingRect.document.height * t.y / this.renderer.pixelRatio
                  , n = (this._boundingRect.document.top + i.y) / this.renderer.pixelRatio
                  , a = (this._boundingRect.document.left + i.x) / this.renderer.pixelRatio;
                return O.set((e.x - a) / r * 2 - 1, 1 - (e.y - n) / s * 2)
            }
        }, {
            key: "onAfterResize",
            value: function(e) {
                return e && (this._onAfterResizeCallback = e),
                this
            }
        }]),
        r
    }(F)
      , L = function() {
        function e() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
              , i = t.fov
              , r = void 0 === i ? 50 : i
              , s = t.near
              , n = void 0 === s ? .1 : s
              , a = t.far
              , o = void 0 === a ? 150 : a
              , h = t.width
              , l = t.height
              , u = t.pixelRatio
              , d = void 0 === u ? 1 : u;
            _classCallCheck(this, e),
            this.position = new w,
            this.projectionMatrix = new R,
            this.worldMatrix = new R,
            this.viewMatrix = new R,
            this._shouldUpdate = !1,
            this.setSize(),
            this.setPerspective(r, n, o, h, l, d)
        }
        return _createClass(e, [{
            key: "setFov",
            value: function(e) {
                e = isNaN(e) ? this.fov : parseFloat(e),
                (e = Math.max(1, Math.min(e, 179))) !== this.fov && (this.fov = e,
                this.setPosition(),
                this._shouldUpdate = !0),
                this.setCSSPerspective()
            }
        }, {
            key: "setNear",
            value: function(e) {
                e = isNaN(e) ? this.near : parseFloat(e),
                (e = Math.max(e, .01)) !== this.near && (this.near = e,
                this._shouldUpdate = !0)
            }
        }, {
            key: "setFar",
            value: function(e) {
                e = isNaN(e) ? this.far : parseFloat(e),
                (e = Math.max(e, 50)) !== this.far && (this.far = e,
                this._shouldUpdate = !0)
            }
        }, {
            key: "setPixelRatio",
            value: function(e) {
                e !== this.pixelRatio && (this._shouldUpdate = !0),
                this.pixelRatio = e
            }
        }, {
            key: "setSize",
            value: function(e, t) {
                e === this.width && t === this.height || (this._shouldUpdate = !0),
                this.width = e,
                this.height = t
            }
        }, {
            key: "setPerspective",
            value: function(e, t, i, r, s, n) {
                this.setPixelRatio(n),
                this.setSize(r, s),
                this.setFov(e),
                this.setNear(t),
                this.setFar(i),
                this._shouldUpdate && this.updateProjectionMatrix()
            }
        }, {
            key: "setPosition",
            value: function() {
                this.position.set(0, 0, 1),
                this.worldMatrix.setFromArray([1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, this.position.x, this.position.y, this.position.z, 1]),
                this.viewMatrix = this.viewMatrix.copy(this.worldMatrix).getInverse()
            }
        }, {
            key: "setCSSPerspective",
            value: function() {
                this.CSSPerspective = Math.pow(Math.pow(this.width / (2 * this.pixelRatio), 2) + Math.pow(this.height / (2 * this.pixelRatio), 2), .5) / Math.tan(.5 * this.fov * Math.PI / 180)
            }
        }, {
            key: "getScreenRatiosFromFov",
            value: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0
                  , t = this.position.z;
                e < t ? e -= t : e += t;
                var i = this.fov * Math.PI / 180
                  , r = 2 * Math.tan(i / 2) * Math.abs(e);
                return {
                    width: r * this.width / this.height,
                    height: r
                }
            }
        }, {
            key: "updateProjectionMatrix",
            value: function() {
                var e = this.width / this.height
                  , t = this.near * Math.tan(Math.PI / 180 * .5 * this.fov)
                  , i = 2 * t
                  , r = e * i
                  , s = -.5 * r
                  , n = s + r
                  , a = t - i
                  , o = 2 * this.near / (n - s)
                  , h = 2 * this.near / (t - a)
                  , l = (n + s) / (n - s)
                  , u = (t + a) / (t - a)
                  , d = -(this.far + this.near) / (this.far - this.near)
                  , c = -2 * this.far * this.near / (this.far - this.near);
                this.projectionMatrix.setFromArray([o, 0, 0, 0, 0, h, 0, 0, l, u, d, -1, 0, 0, c, 0])
            }
        }, {
            key: "forceUpdate",
            value: function() {
                this._shouldUpdate = !0
            }
        }, {
            key: "cancelUpdate",
            value: function() {
                this._shouldUpdate = !1
            }
        }]),
        e
    }()
      , U = function() {
        function e() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new Float32Array([0, 0, 0, 1])
              , i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "XYZ";
            _classCallCheck(this, e),
            this.type = "Quat",
            this.elements = t,
            this.axisOrder = i
        }
        return _createClass(e, [{
            key: "setFromArray",
            value: function(e) {
                return this.elements[0] = e[0],
                this.elements[1] = e[1],
                this.elements[2] = e[2],
                this.elements[3] = e[3],
                this
            }
        }, {
            key: "setAxisOrder",
            value: function(e) {
                switch (e = e.toUpperCase()) {
                case "XYZ":
                case "YXZ":
                case "ZXY":
                case "ZYX":
                case "YZX":
                case "XZY":
                    this.axisOrder = e;
                    break;
                default:
                    this.axisOrder = "XYZ"
                }
                return this
            }
        }, {
            key: "copy",
            value: function(e) {
                return this.elements = e.elements,
                this.axisOrder = e.axisOrder,
                this
            }
        }, {
            key: "clone",
            value: function() {
                return (new e).copy(this)
            }
        }, {
            key: "equals",
            value: function(e) {
                return this.elements[0] === e.elements[0] && this.elements[1] === e.elements[1] && this.elements[2] === e.elements[2] && this.elements[3] === e.elements[3] && this.axisOrder === e.axisOrder
            }
        }, {
            key: "setFromVec3",
            value: function(e) {
                var t = .5 * e.x
                  , i = .5 * e.y
                  , r = .5 * e.z
                  , s = Math.cos(t)
                  , n = Math.cos(i)
                  , a = Math.cos(r)
                  , o = Math.sin(t)
                  , h = Math.sin(i)
                  , l = Math.sin(r);
                return "XYZ" === this.axisOrder ? (this.elements[0] = o * n * a + s * h * l,
                this.elements[1] = s * h * a - o * n * l,
                this.elements[2] = s * n * l + o * h * a,
                this.elements[3] = s * n * a - o * h * l) : "YXZ" === this.axisOrder ? (this.elements[0] = o * n * a + s * h * l,
                this.elements[1] = s * h * a - o * n * l,
                this.elements[2] = s * n * l - o * h * a,
                this.elements[3] = s * n * a + o * h * l) : "ZXY" === this.axisOrder ? (this.elements[0] = o * n * a - s * h * l,
                this.elements[1] = s * h * a + o * n * l,
                this.elements[2] = s * n * l + o * h * a,
                this.elements[3] = s * n * a - o * h * l) : "ZYX" === this.axisOrder ? (this.elements[0] = o * n * a - s * h * l,
                this.elements[1] = s * h * a + o * n * l,
                this.elements[2] = s * n * l - o * h * a,
                this.elements[3] = s * n * a + o * h * l) : "YZX" === this.axisOrder ? (this.elements[0] = o * n * a + s * h * l,
                this.elements[1] = s * h * a + o * n * l,
                this.elements[2] = s * n * l - o * h * a,
                this.elements[3] = s * n * a - o * h * l) : "XZY" === this.axisOrder && (this.elements[0] = o * n * a - s * h * l,
                this.elements[1] = s * h * a - o * n * l,
                this.elements[2] = s * n * l + o * h * a,
                this.elements[3] = s * n * a + o * h * l),
                this
            }
        }]),
        e
    }()
      , I = new P
      , N = new w
      , V = new w
      , B = new w
      , W = new w
      , G = new w
      , X = new w
      , j = new w
      , H = new w
      , Y = new U
      , q = new w(.5,.5,0)
      , Q = new w
      , Z = new w
      , K = new w
      , J = new w
      , $ = new P
      , ee = function(e) {
        _inherits(r, e);
        var t = _createSuper(r);
        function r(e, i) {
            var s, n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, a = n.widthSegments, o = n.heightSegments, h = n.renderOrder, l = n.depthTest, u = n.cullFace, d = n.uniforms, c = n.vertexShaderID, p = n.fragmentShaderID, f = n.vertexShader, g = n.fragmentShader, _ = n.texturesOptions, m = n.crossOrigin, v = n.alwaysDraw, y = void 0 !== v && v, x = n.visible, b = void 0 === x || x, k = n.transparent, R = void 0 !== k && k, P = n.drawCheckMargins, w = void 0 === P ? {
                top: 0,
                right: 0,
                bottom: 0,
                left: 0
            } : P, T = n.autoloadSources, S = void 0 === T || T, C = n.watchScroll, E = void 0 === C || C, M = n.fov, A = void 0 === M ? 50 : M;
            return _classCallCheck(this, r),
            (s = t.call(this, e, i, "Plane", {
                widthSegments: a,
                heightSegments: o,
                renderOrder: h,
                depthTest: l,
                cullFace: u,
                uniforms: d,
                vertexShaderID: c,
                fragmentShaderID: p,
                vertexShader: f,
                fragmentShader: g,
                texturesOptions: _,
                crossOrigin: m
            })).gl ? (s.index = s.renderer.planes.length,
            s.target = null,
            s.alwaysDraw = y,
            s._shouldDraw = !0,
            s.visible = b,
            s._transparent = R,
            s.drawCheckMargins = w,
            s.autoloadSources = S,
            s.watchScroll = E,
            s._updateMVMatrix = !1,
            s.camera = new L({
                fov: A,
                width: s.renderer._boundingRect.width,
                height: s.renderer._boundingRect.height,
                pixelRatio: s.renderer.pixelRatio
            }),
            s._program.compiled && (s._initPlane(),
            s.renderer.scene.addPlane(_assertThisInitialized(s)),
            s.renderer.planes.push(_assertThisInitialized(s))),
            s) : _possibleConstructorReturn(s)
        }
        return _createClass(r, [{
            key: "_programRestored",
            value: function() {
                this.target && this.setRenderTarget(this.renderer.renderTargets[this.target.index]),
                this._initMatrices(),
                this.setPerspective(this.camera.fov, this.camera.near, this.camera.far),
                this._setWorldSizes(),
                this._applyWorldPositions(),
                this.renderer.scene.addPlane(this);
                for (var e = 0; e < this.textures.length; e++)
                    this.textures[e]._parent = this,
                    this.textures[e]._restoreContext();
                this._canDraw = !0
            }
        }, {
            key: "_initPlane",
            value: function() {
                this._initTransformValues(),
                this._initPositions(),
                this.setPerspective(this.camera.fov, this.camera.near, this.camera.far),
                this._initSources()
            }
        }, {
            key: "_initTransformValues",
            value: function() {
                var e = this;
                this.rotation = new w,
                this.rotation.onChange((function() {
                    return e._applyRotation()
                }
                )),
                this.quaternion = new U,
                this.relativeTranslation = new w,
                this.relativeTranslation.onChange((function() {
                    return e._setTranslation()
                }
                )),
                this._translation = new w,
                this.scale = new w(1),
                this.scale.onChange((function() {
                    e.scale.z = 1,
                    e._applyScale()
                }
                )),
                this.transformOrigin = new w(.5,.5,0),
                this.transformOrigin.onChange((function() {
                    e._setWorldTransformOrigin(),
                    e._updateMVMatrix = !0
                }
                ))
            }
        }, {
            key: "resetPlane",
            value: function(e) {
                this._initTransformValues(),
                this._setWorldTransformOrigin(),
                null !== e && e ? (this.htmlElement = e,
                this.resize()) : e || this.renderer.production || i(this.type + ": You are trying to reset a plane with a HTML element that does not exist. The old HTML element will be kept instead.")
            }
        }, {
            key: "removeRenderTarget",
            value: function() {
                this.target && (this.renderer.scene.removePlane(this),
                this.target = null,
                this.renderer.scene.addPlane(this))
            }
        }, {
            key: "_initPositions",
            value: function() {
                this._initMatrices(),
                this._setWorldSizes(),
                this._applyWorldPositions()
            }
        }, {
            key: "_initMatrices",
            value: function() {
                var e = new R;
                this._matrices = {
                    world: {
                        matrix: e
                    },
                    modelView: {
                        name: "uMVMatrix",
                        matrix: e,
                        location: this.gl.getUniformLocation(this._program.program, "uMVMatrix")
                    },
                    projection: {
                        name: "uPMatrix",
                        matrix: e,
                        location: this.gl.getUniformLocation(this._program.program, "uPMatrix")
                    },
                    modelViewProjection: {
                        matrix: e
                    }
                }
            }
        }, {
            key: "_setPerspectiveMatrix",
            value: function() {
                this.camera._shouldUpdate && (this.renderer.useProgram(this._program),
                this.gl.uniformMatrix4fv(this._matrices.projection.location, !1, this._matrices.projection.matrix.elements)),
                this.camera.cancelUpdate()
            }
        }, {
            key: "setPerspective",
            value: function(e, t, i) {
                this.camera.setPerspective(e, t, i, this.renderer._boundingRect.width, this.renderer._boundingRect.height, this.renderer.pixelRatio),
                this.renderer.state.isContextLost && this.camera.forceUpdate(),
                this._matrices.projection.matrix = this.camera.projectionMatrix,
                this.camera._shouldUpdate && (this._setWorldSizes(),
                this._applyWorldPositions(),
                this._translation.z = this.relativeTranslation.z / this.camera.CSSPerspective),
                this._updateMVMatrix = this.camera._shouldUpdate
            }
        }, {
            key: "_setMVMatrix",
            value: function() {
                this._updateMVMatrix && (this._matrices.world.matrix = this._matrices.world.matrix.composeFromOrigin(this._translation, this.quaternion, this.scale, this._boundingRect.world.transformOrigin),
                this._matrices.world.matrix.scale({
                    x: this._boundingRect.world.width,
                    y: this._boundingRect.world.height,
                    z: 1
                }),
                this._matrices.modelView.matrix.copy(this._matrices.world.matrix),
                this._matrices.modelView.matrix.elements[14] -= this.camera.position.z,
                this._matrices.modelViewProjection.matrix = this._matrices.projection.matrix.multiply(this._matrices.modelView.matrix),
                this.alwaysDraw || this._shouldDrawCheck(),
                this.renderer.useProgram(this._program),
                this.gl.uniformMatrix4fv(this._matrices.modelView.location, !1, this._matrices.modelView.matrix.elements)),
                this._updateMVMatrix = !1
            }
        }, {
            key: "_setWorldTransformOrigin",
            value: function() {
                this._boundingRect.world.transformOrigin = new w((2 * this.transformOrigin.x - 1) * this._boundingRect.world.width,-(2 * this.transformOrigin.y - 1) * this._boundingRect.world.height,this.transformOrigin.z)
            }
        }, {
            key: "_documentToWorldSpace",
            value: function(e) {
                return V.set(e.x * this.renderer.pixelRatio / this.renderer._boundingRect.width * this._boundingRect.world.ratios.width, -e.y * this.renderer.pixelRatio / this.renderer._boundingRect.height * this._boundingRect.world.ratios.height, e.z)
            }
        }, {
            key: "_setWorldSizes",
            value: function() {
                var e = this.camera.getScreenRatiosFromFov();
                this._boundingRect.world = {
                    width: this._boundingRect.document.width / this.renderer._boundingRect.width * e.width / 2,
                    height: this._boundingRect.document.height / this.renderer._boundingRect.height * e.height / 2,
                    ratios: e
                },
                this._setWorldTransformOrigin()
            }
        }, {
            key: "_setWorldPosition",
            value: function() {
                var e = this._boundingRect.document.width / 2 + this._boundingRect.document.left
                  , t = this._boundingRect.document.height / 2 + this._boundingRect.document.top
                  , i = this.renderer._boundingRect.width / 2 + this.renderer._boundingRect.left
                  , r = this.renderer._boundingRect.height / 2 + this.renderer._boundingRect.top;
                this._boundingRect.world.top = (r - t) / this.renderer._boundingRect.height * this._boundingRect.world.ratios.height,
                this._boundingRect.world.left = (e - i) / this.renderer._boundingRect.width * this._boundingRect.world.ratios.width
            }
        }, {
            key: "setScale",
            value: function(e) {
                e.type && "Vec2" === e.type ? (e.sanitizeNaNValuesWith(this.scale).max(I.set(.001, .001)),
                e.x === this.scale.x && e.y === this.scale.y || (this.scale.set(e.x, e.y, 1),
                this._applyScale())) : this.renderer.production || i(this.type + ": Cannot set scale because the parameter passed is not of Vec2 type:", e)
            }
        }, {
            key: "_applyScale",
            value: function() {
                for (var e = 0; e < this.textures.length; e++)
                    this.textures[e].resize();
                this._updateMVMatrix = !0
            }
        }, {
            key: "setRotation",
            value: function(e) {
                e.type && "Vec3" === e.type ? (e.sanitizeNaNValuesWith(this.rotation),
                e.equals(this.rotation) || (this.rotation.copy(e),
                this._applyRotation())) : this.renderer.production || i(this.type + ": Cannot set rotation because the parameter passed is not of Vec3 type:", e)
            }
        }, {
            key: "_applyRotation",
            value: function() {
                this.quaternion.setFromVec3(this.rotation),
                this._updateMVMatrix = !0
            }
        }, {
            key: "setTransformOrigin",
            value: function(e) {
                e.type && "Vec3" === e.type ? (e.sanitizeNaNValuesWith(this.transformOrigin),
                e.equals(this.transformOrigin) || (this.transformOrigin.copy(e),
                this._setWorldTransformOrigin(),
                this._updateMVMatrix = !0)) : this.renderer.production || i(this.type + ": Cannot set transform origin because the parameter passed is not of Vec3 type:", e)
            }
        }, {
            key: "_setTranslation",
            value: function() {
                var e = N.set(0, 0, 0);
                this.relativeTranslation.equals(e) || (e = this._documentToWorldSpace(this.relativeTranslation)),
                this._translation.set(this._boundingRect.world.left + e.x, this._boundingRect.world.top + e.y, this.relativeTranslation.z / this.camera.CSSPerspective),
                this._updateMVMatrix = !0
            }
        }, {
            key: "setRelativeTranslation",
            value: function(e) {
                e.type && "Vec3" === e.type ? (e.sanitizeNaNValuesWith(this.relativeTranslation),
                e.equals(this.relativeTranslation) || (this.relativeTranslation.copy(e),
                this._setTranslation())) : this.renderer.production || i(this.type + ": Cannot set translation because the parameter passed is not of Vec3 type:", e)
            }
        }, {
            key: "_applyWorldPositions",
            value: function() {
                this._setWorldPosition(),
                this._setTranslation()
            }
        }, {
            key: "updatePosition",
            value: function() {
                this._setDocumentSizes(),
                this._applyWorldPositions()
            }
        }, {
            key: "updateScrollPosition",
            value: function(e, t) {
                (e || t) && (this._boundingRect.document.top += t * this.renderer.pixelRatio,
                this._boundingRect.document.left += e * this.renderer.pixelRatio,
                this._applyWorldPositions())
            }
        }, {
            key: "_getIntersection",
            value: function(e, t) {
                for (var i = t.clone().sub(e), r = e.clone(); r.z > -1; )
                    r.add(i);
                return r
            }
        }, {
            key: "_getNearPlaneIntersections",
            value: function(e, t, i) {
                var r = this._matrices.modelViewProjection.matrix;
                if (1 === i.length)
                    0 === i[0] ? (t[0] = this._getIntersection(t[1], j.set(.95, 1, 0).applyMat4(r)),
                    t.push(this._getIntersection(t[3], H.set(-1, -.95, 0).applyMat4(r)))) : 1 === i[0] ? (t[1] = this._getIntersection(t[0], j.set(-.95, 1, 0).applyMat4(r)),
                    t.push(this._getIntersection(t[2], H.set(1, -.95, 0).applyMat4(r)))) : 2 === i[0] ? (t[2] = this._getIntersection(t[3], j.set(-.95, -1, 0).applyMat4(r)),
                    t.push(this._getIntersection(t[1], H.set(1, .95, 0).applyMat4(r)))) : 3 === i[0] && (t[3] = this._getIntersection(t[2], j.set(.95, -1, 0).applyMat4(r)),
                    t.push(this._getIntersection(t[0], H.set(-1, .95, 0).applyMat4(r))));
                else if (2 === i.length)
                    0 === i[0] && 1 === i[1] ? (t[0] = this._getIntersection(t[3], j.set(-1, -.95, 0).applyMat4(r)),
                    t[1] = this._getIntersection(t[2], H.set(1, -.95, 0).applyMat4(r))) : 1 === i[0] && 2 === i[1] ? (t[1] = this._getIntersection(t[0], j.set(-.95, 1, 0).applyMat4(r)),
                    t[2] = this._getIntersection(t[3], H.set(-.95, -1, 0).applyMat4(r))) : 2 === i[0] && 3 === i[1] ? (t[2] = this._getIntersection(t[1], j.set(1, .95, 0).applyMat4(r)),
                    t[3] = this._getIntersection(t[0], H.set(-1, .95, 0).applyMat4(r))) : 0 === i[0] && 3 === i[1] && (t[0] = this._getIntersection(t[1], j.set(.95, 1, 0).applyMat4(r)),
                    t[3] = this._getIntersection(t[2], H.set(.95, -1, 0).applyMat4(r)));
                else if (3 === i.length) {
                    for (var s = 0, n = 0; n < e.length; n++)
                        i.includes(n) || (s = n);
                    t = [t[s]],
                    0 === s ? (t.push(this._getIntersection(t[0], j.set(-.95, 1, 0).applyMat4(r))),
                    t.push(this._getIntersection(t[0], H.set(-1, .95, 0).applyMat4(r)))) : 1 === s ? (t.push(this._getIntersection(t[0], j.set(.95, 1, 0).applyMat4(r))),
                    t.push(this._getIntersection(t[0], H.set(1, .95, 0).applyMat4(r)))) : 2 === s ? (t.push(this._getIntersection(t[0], j.set(.95, -1, 0).applyMat4(r))),
                    t.push(this._getIntersection(t[0], H.set(1, -.95, 0).applyMat4(r)))) : 3 === s && (t.push(this._getIntersection(t[0], j.set(-.95, -1, 0).applyMat4(r))),
                    t.push(this._getIntersection(t[0], H.set(-1.95, 0).applyMat4(r))))
                } else
                    for (var a = 0; a < e.length; a++)
                        t[a][0] = 1e4,
                        t[a][1] = 1e4;
                return t
            }
        }, {
            key: "_getWorldCoords",
            value: function() {
                for (var e = [B.set(-1, 1, 0), W.set(1, 1, 0), G.set(1, -1, 0), X.set(-1, -1, 0)], t = [], i = [], r = 0; r < e.length; r++) {
                    var s = e[r].applyMat4(this._matrices.modelViewProjection.matrix);
                    t.push(s),
                    Math.abs(s.z) > 1 && i.push(r)
                }
                i.length && (t = this._getNearPlaneIntersections(e, t, i));
                for (var n = 1 / 0, a = -1 / 0, o = 1 / 0, h = -1 / 0, l = 0; l < t.length; l++) {
                    var u = t[l];
                    u.x < n && (n = u.x),
                    u.x > a && (a = u.x),
                    u.y < o && (o = u.y),
                    u.y > h && (h = u.y)
                }
                return {
                    top: h,
                    right: a,
                    bottom: o,
                    left: n
                }
            }
        }, {
            key: "_computeWebGLBoundingRect",
            value: function() {
                var e = this._getWorldCoords()
                  , t = {
                    top: 1 - (e.top + 1) / 2,
                    right: (e.right + 1) / 2,
                    bottom: 1 - (e.bottom + 1) / 2,
                    left: (e.left + 1) / 2
                };
                t.width = t.right - t.left,
                t.height = t.bottom - t.top,
                this._boundingRect.worldToDocument = {
                    width: t.width * this.renderer._boundingRect.width,
                    height: t.height * this.renderer._boundingRect.height,
                    top: t.top * this.renderer._boundingRect.height + this.renderer._boundingRect.top,
                    left: t.left * this.renderer._boundingRect.width + this.renderer._boundingRect.left,
                    right: t.left * this.renderer._boundingRect.width + this.renderer._boundingRect.left + t.width * this.renderer._boundingRect.width,
                    bottom: t.top * this.renderer._boundingRect.height + this.renderer._boundingRect.top + t.height * this.renderer._boundingRect.height
                }
            }
        }, {
            key: "getWebGLBoundingRect",
            value: function() {
                return this._matrices.modelViewProjection ? (this._boundingRect.worldToDocument && !this.alwaysDraw || this._computeWebGLBoundingRect(),
                this._boundingRect.worldToDocument) : this._boundingRect.document
            }
        }, {
            key: "_getWebGLDrawRect",
            value: function() {
                return this._computeWebGLBoundingRect(),
                {
                    top: this._boundingRect.worldToDocument.top - this.drawCheckMargins.top,
                    right: this._boundingRect.worldToDocument.right + this.drawCheckMargins.right,
                    bottom: this._boundingRect.worldToDocument.bottom + this.drawCheckMargins.bottom,
                    left: this._boundingRect.worldToDocument.left - this.drawCheckMargins.left
                }
            }
        }, {
            key: "_shouldDrawCheck",
            value: function() {
                var e = this
                  , t = this._getWebGLDrawRect();
                Math.round(t.right) <= this.renderer._boundingRect.left || Math.round(t.left) >= this.renderer._boundingRect.left + this.renderer._boundingRect.width || Math.round(t.bottom) <= this.renderer._boundingRect.top || Math.round(t.top) >= this.renderer._boundingRect.top + this.renderer._boundingRect.height ? this._shouldDraw && (this._shouldDraw = !1,
                this.renderer.nextRender.add((function() {
                    return e._onLeaveViewCallback && e._onLeaveViewCallback()
                }
                ))) : (this._shouldDraw || this.renderer.nextRender.add((function() {
                    return e._onReEnterViewCallback && e._onReEnterViewCallback()
                }
                )),
                this._shouldDraw = !0)
            }
        }, {
            key: "isDrawn",
            value: function() {
                return this._canDraw && this.visible && (this._shouldDraw || this.alwaysDraw)
            }
        }, {
            key: "enableDepthTest",
            value: function(e) {
                this._depthTest = e
            }
        }, {
            key: "_initSources",
            value: function() {
                var e = 0;
                if (this.autoloadSources) {
                    var t = this.htmlElement.getElementsByTagName("img")
                      , i = this.htmlElement.getElementsByTagName("video")
                      , r = this.htmlElement.getElementsByTagName("canvas");
                    t.length && this.loadImages(t),
                    i.length && this.loadVideos(i),
                    r.length && this.loadCanvases(r),
                    e = t.length + i.length + r.length
                }
                this.loader._setLoaderSize(e),
                this._canDraw = !0
            }
        }, {
            key: "_startDrawing",
            value: function() {
                this._canDraw && (this._onRenderCallback && this._onRenderCallback(),
                this.target ? this.renderer.bindFrameBuffer(this.target) : null === this.renderer.state.scenePassIndex && this.renderer.bindFrameBuffer(null),
                this._setPerspectiveMatrix(),
                this._setMVMatrix(),
                (this.alwaysDraw || this._shouldDraw) && this.visible && this._draw())
            }
        }, {
            key: "mouseToPlaneCoords",
            value: function(e) {
                if (Y.setAxisOrder(this.quaternion.axisOrder),
                Y.equals(this.quaternion) && q.equals(this.transformOrigin))
                    return _get(_getPrototypeOf(r.prototype), "mouseToPlaneCoords", this).call(this, e);
                var t = {
                    x: e.x / (this.renderer._boundingRect.width / this.renderer.pixelRatio) * 2 - 1,
                    y: 2 * (1 - e.y / (this.renderer._boundingRect.height / this.renderer.pixelRatio)) - 1
                }
                  , i = this.camera.position.clone()
                  , s = Q.set(t.x, t.y, -.5);
                s.unproject(this.camera),
                s.sub(i).normalize();
                var n = Z.set(0, 0, -1);
                n.applyQuat(this.quaternion).normalize();
                var a = J.set(0, 0, 0)
                  , o = n.dot(s);
                if (Math.abs(o) >= 1e-4) {
                    var h = this._matrices.world.matrix.getInverse().multiply(this.camera.viewMatrix)
                      , l = this._boundingRect.world.transformOrigin.clone().add(this._translation)
                      , u = K.set(this._translation.x - l.x, this._translation.y - l.y, this._translation.z - l.z);
                    u.applyQuat(this.quaternion),
                    l.add(u);
                    var d = n.dot(l.clone().sub(i)) / o;
                    a.copy(i.add(s.multiplyScalar(d))),
                    a.applyMat4(h)
                } else
                    a.set(1 / 0, 1 / 0, 1 / 0);
                return $.set(a.x, a.y)
            }
        }, {
            key: "onReEnterView",
            value: function(e) {
                return e && (this._onReEnterViewCallback = e),
                this
            }
        }, {
            key: "onLeaveView",
            value: function(e) {
                return e && (this._onLeaveViewCallback = e),
                this
            }
        }]),
        r
    }(z)
      , te = function() {
        function e(t) {
            var i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
              , n = i.shaderPass
              , a = i.depth
              , o = void 0 !== a && a
              , h = i.clear
              , l = void 0 === h || h
              , u = i.maxWidth
              , d = i.maxHeight
              , c = i.minWidth
              , p = void 0 === c ? 1024 : c
              , f = i.minHeight
              , g = void 0 === f ? 1024 : f
              , _ = i.texturesOptions
              , m = void 0 === _ ? {} : _;
            if (_classCallCheck(this, e),
            this.type = "RenderTarget",
            (t = t && t.renderer || t) && "Renderer" === t.type) {
                if (!t.gl)
                    return void (t.production || r(this.type + ": Unable to create a " + this.type + " because the Renderer WebGL context is not defined"))
            } else
                r(this.type + ": Renderer not passed as first argument", t);
            this.renderer = t,
            this.gl = this.renderer.gl,
            this.index = this.renderer.renderTargets.length,
            this._shaderPass = n,
            this._depth = o,
            this._shouldClear = l,
            this._maxSize = {
                width: u ? Math.min(this.renderer.state.maxTextureSize / 4, u) : this.renderer.state.maxTextureSize / 4,
                height: d ? Math.min(this.renderer.state.maxTextureSize / 4, d) : this.renderer.state.maxTextureSize / 4
            },
            this._minSize = {
                width: p * this.renderer.pixelRatio,
                height: g * this.renderer.pixelRatio
            },
            m = Object.assign({
                sampler: "uRenderTexture",
                isFBOTexture: !0,
                premultiplyAlpha: !1,
                anisotropy: 1,
                generateMipmap: !1,
                floatingPoint: "none",
                wrapS: this.gl.CLAMP_TO_EDGE,
                wrapT: this.gl.CLAMP_TO_EDGE,
                minFilter: this.gl.LINEAR,
                magFilter: this.gl.LINEAR
            }, m),
            this._texturesOptions = m,
            this.userData = {},
            this.uuid = s(),
            this.renderer.renderTargets.push(this),
            this.renderer.onSceneChange(),
            this._initRenderTarget()
        }
        return _createClass(e, [{
            key: "_initRenderTarget",
            value: function() {
                this._setSize(),
                this.textures = [],
                this._createFrameBuffer()
            }
        }, {
            key: "_restoreContext",
            value: function() {
                this._setSize(),
                this._createFrameBuffer()
            }
        }, {
            key: "_setSize",
            value: function() {
                this._shaderPass && this._shaderPass._isScenePass ? this._size = {
                    width: this.renderer._boundingRect.width,
                    height: this.renderer._boundingRect.height
                } : this._size = {
                    width: Math.min(this._maxSize.width, Math.max(this._minSize.width, this.renderer._boundingRect.width)),
                    height: Math.min(this._maxSize.height, Math.max(this._minSize.height, this.renderer._boundingRect.height))
                }
            }
        }, {
            key: "resize",
            value: function() {
                this._shaderPass && (this._setSize(),
                this.textures[0].resize(),
                this.renderer.bindFrameBuffer(this, !0),
                this._depth && this._bindDepthBuffer(),
                this.renderer.bindFrameBuffer(null))
            }
        }, {
            key: "_bindDepthBuffer",
            value: function() {
                this._depthBuffer && (this.gl.bindRenderbuffer(this.gl.RENDERBUFFER, this._depthBuffer),
                this.gl.renderbufferStorage(this.gl.RENDERBUFFER, this.gl.DEPTH_COMPONENT16, this._size.width, this._size.height),
                this.gl.framebufferRenderbuffer(this.gl.FRAMEBUFFER, this.gl.DEPTH_ATTACHMENT, this.gl.RENDERBUFFER, this._depthBuffer))
            }
        }, {
            key: "_createFrameBuffer",
            value: function() {
                (this._frameBuffer = this.gl.createFramebuffer(),
                this.renderer.bindFrameBuffer(this, !0),
                this.textures.length) ? (this.textures[0]._parent = this,
                this.textures[0]._restoreContext()) : new E(this.renderer,this._texturesOptions).addParent(this);
                this.gl.framebufferTexture2D(this.gl.FRAMEBUFFER, this.gl.COLOR_ATTACHMENT0, this.gl.TEXTURE_2D, this.textures[0]._sampler.texture, 0),
                this._depth && (this._depthBuffer = this.gl.createRenderbuffer(),
                this._bindDepthBuffer()),
                this.renderer.bindFrameBuffer(null)
            }
        }, {
            key: "getTexture",
            value: function() {
                return this.textures[0]
            }
        }, {
            key: "remove",
            value: function() {
                this._shaderPass ? this.renderer.production || i(this.type + ": You're trying to remove a RenderTarget attached to a ShaderPass. You should remove that ShaderPass instead:", this._shaderPass) : (this._dispose(),
                this.renderer.removeRenderTarget(this))
            }
        }, {
            key: "_dispose",
            value: function() {
                this._frameBuffer && (this.gl.deleteFramebuffer(this._frameBuffer),
                this._frameBuffer = null),
                this._depthBuffer && (this.gl.deleteRenderbuffer(this._depthBuffer),
                this._depthBuffer = null),
                this.textures[0]._dispose(),
                this.textures = []
            }
        }]),
        e
    }()
      , ie = function(e) {
        _inherits(i, e);
        var t = _createSuper(i);
        function i(e) {
            var r, s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, n = s.widthSegments, a = s.heightSegments, o = s.renderOrder, h = s.depthTest, l = s.cullFace, u = s.uniforms, d = s.vertexShaderID, c = s.fragmentShaderID, p = s.vertexShader, f = s.fragmentShader, g = s.texturesOptions, _ = s.crossOrigin, m = s.depth, v = void 0 !== m && m, y = s.clear, x = void 0 === y || y, b = s.renderTarget;
            return _classCallCheck(this, i),
            n = 1,
            a = 1,
            l = "back",
            (r = t.call(this, e, e.container, "ShaderPass", {
                widthSegments: n,
                heightSegments: a,
                renderOrder: o,
                depthTest: h,
                cullFace: l,
                uniforms: u,
                vertexShaderID: d,
                fragmentShaderID: c,
                vertexShader: p,
                fragmentShader: f,
                texturesOptions: g,
                crossOrigin: _
            })).gl ? (r._isScenePass = !0,
            r.index = r.renderer.shaderPasses.length,
            r._depth = v,
            r._shouldClear = x,
            r.target = b,
            r.target && (r._isScenePass = !1,
            r._shouldClear = r.target._shouldClear),
            r._program.compiled && (r._initShaderPass(),
            r.renderer.shaderPasses.push(_assertThisInitialized(r)),
            r.renderer.nextRender.add((function() {
                r.renderer.scene.addShaderPass(_assertThisInitialized(r))
            }
            ))),
            r) : _possibleConstructorReturn(r)
        }
        return _createClass(i, [{
            key: "_programRestored",
            value: function() {
                this.renderer.scene.addShaderPass(this);
                for (var e = 0; e < this.textures.length; e++)
                    this.textures[e]._parent = this,
                    this.textures[e]._restoreContext();
                this._canDraw = !0
            }
        }, {
            key: "_initShaderPass",
            value: function() {
                this.target ? (this.setRenderTarget(this.target),
                this.target._shaderPass = this) : this._createFrameBuffer(),
                new E(this.renderer,{
                    sampler: "uRenderTexture",
                    isFBOTexture: !0,
                    fromTexture: this.target.getTexture()
                }).addParent(this),
                this.loader._setLoaderSize(0),
                this._canDraw = !0,
                this.renderer.needRender()
            }
        }, {
            key: "_createFrameBuffer",
            value: function() {
                var e = new te(this.renderer,{
                    shaderPass: this,
                    clear: this._shouldClear,
                    depth: this._depth,
                    texturesOptions: this._texturesOptions
                });
                this.setRenderTarget(e)
            }
        }, {
            key: "_startDrawing",
            value: function() {
                this._canDraw && (this._onRenderCallback && this._onRenderCallback(),
                this._isScenePass ? this.renderer.state.scenePassIndex + 1 < this.renderer.scene.stacks.scenePasses.length ? (this.renderer.bindFrameBuffer(this.renderer.scene.stacks.scenePasses[this.renderer.state.scenePassIndex + 1].target),
                this.renderer.state.scenePassIndex++) : this.renderer.bindFrameBuffer(null) : null === this.renderer.state.scenePassIndex && this.renderer.bindFrameBuffer(null),
                this.renderer.state.forceBufferUpdate = !0,
                this._draw())
            }
        }]),
        i
    }(z)
      , re = function(e) {
        _inherits(i, e);
        var t = _createSuper(i);
        function i(e, r) {
            var s, n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, a = n.sampler, o = void 0 === a ? "uPingPongTexture" : a, h = n.widthSegments, l = n.heightSegments, u = n.renderOrder, d = n.depthTest, c = n.cullFace, p = n.uniforms, f = n.vertexShaderID, g = n.fragmentShaderID, _ = n.vertexShader, m = n.fragmentShader, v = n.texturesOptions, y = n.crossOrigin, x = n.alwaysDraw, b = n.visible, k = n.transparent, R = n.drawCheckMargins, P = n.autoloadSources, w = n.watchScroll, T = n.fov;
            if (_classCallCheck(this, i),
            d = !1,
            P = !1,
            !(s = t.call(this, e, r, {
                widthSegments: h,
                heightSegments: l,
                renderOrder: u,
                depthTest: d,
                cullFace: c,
                uniforms: p,
                vertexShaderID: f,
                fragmentShaderID: g,
                vertexShader: _,
                fragmentShader: m,
                texturesOptions: v,
                crossOrigin: y,
                alwaysDraw: x,
                visible: b,
                transparent: k,
                drawCheckMargins: R,
                autoloadSources: P,
                watchScroll: w,
                fov: T
            })).gl)
                return _possibleConstructorReturn(s);
            s.renderer.scene.removePlane(_assertThisInitialized(s)),
            s.type = "PingPongPlane",
            s.renderer.scene.addPlane(_assertThisInitialized(s)),
            s.readPass = new te(e,{
                depth: !1,
                clear: !1,
                texturesOptions: v
            }),
            s.writePass = new te(e,{
                depth: !1,
                clear: !1,
                texturesOptions: v
            }),
            s.createTexture({
                sampler: o
            });
            var S = 0;
            return s.readPass.getTexture().onSourceUploaded((function() {
                S++,
                s._checkIfReady(S)
            }
            )),
            s.writePass.getTexture().onSourceUploaded((function() {
                S++,
                s._checkIfReady(S)
            }
            )),
            s.setRenderTarget(s.readPass),
            s._onRenderCallback = function() {
                s.readPass && s.writePass && s.textures[0] && s.textures[0]._uploaded && s.setRenderTarget(s.writePass),
                s._onPingPongRenderCallback && s._onPingPongRenderCallback()
            }
            ,
            s._onAfterRenderCallback = function() {
                s.readPass && s.writePass && s.textures[0] && s.textures[0]._uploaded && s._swapPasses(),
                s._onPingPongAfterRenderCallback && s._onPingPongAfterRenderCallback()
            }
            ,
            s
        }
        return _createClass(i, [{
            key: "_checkIfReady",
            value: function(e) {
                var t = this;
                2 === e && this.renderer.nextRender.add((function() {
                    t.textures[0].copy(t.target.getTexture())
                }
                ))
            }
        }, {
            key: "_swapPasses",
            value: function() {
                var e = this.readPass;
                this.readPass = this.writePass,
                this.writePass = e,
                this.textures[0].copy(this.readPass.getTexture())
            }
        }, {
            key: "getTexture",
            value: function() {
                return this.textures[0]
            }
        }, {
            key: "onRender",
            value: function(e) {
                return e && (this._onPingPongRenderCallback = e),
                this
            }
        }, {
            key: "onAfterRender",
            value: function(e) {
                return e && (this._onPingPongAfterRenderCallback = e),
                this
            }
        }, {
            key: "remove",
            value: function() {
                this.target = null,
                this.renderer.bindFrameBuffer(null),
                this.writePass && (this.writePass.remove(),
                this.writePass = null),
                this.readPass && (this.readPass.remove(),
                this.readPass = null),
                _get(_getPrototypeOf(i.prototype), "remove", this).call(this)
            }
        }]),
        i
    }(ee)
      , se = function(e) {
        _inherits(i, e);
        var t = _createSuper(i);
        function i(e) {
            var r, s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, n = s.renderOrder, a = s.depthTest, o = s.texturesOptions, h = s.crossOrigin, l = s.depth, u = s.clear, d = s.renderTarget;
            _classCallCheck(this, i);
            var c = "\n            precision mediump float;\n            \n            varying vec3 vVertexPosition;\n            varying vec2 vTextureCoord;\n        \n            uniform sampler2D uRenderTexture;\n            \n            uniform vec2 uResolution;\n            \n            #define FXAA_REDUCE_MIN   (1.0/128.0)\n            #define FXAA_REDUCE_MUL   (1.0/8.0)\n            #define FXAA_SPAN_MAX     8.0\n            \n            void main() {\n                vec2 res = 1.0 / uResolution;\n            \n                vec3 rgbNW = texture2D(uRenderTexture, (vTextureCoord.xy + vec2(-1.0, -1.0) * res)).xyz;\n                vec3 rgbNE = texture2D(uRenderTexture, (vTextureCoord.xy + vec2(1.0, -1.0) * res)).xyz;\n                vec3 rgbSW = texture2D(uRenderTexture, (vTextureCoord.xy + vec2(-1.0, 1.0) * res)).xyz;\n                vec3 rgbSE = texture2D(uRenderTexture, (vTextureCoord.xy + vec2(1.0, 1.0) * res)).xyz;\n                vec4 rgbaM = texture2D(uRenderTexture, vTextureCoord.xy * res);\n                vec3 rgbM = rgbaM.xyz;\n                vec3 luma = vec3(0.299, 0.587, 0.114);\n            \n                float lumaNW = dot(rgbNW, luma);\n                float lumaNE = dot(rgbNE, luma);\n                float lumaSW = dot(rgbSW, luma);\n                float lumaSE = dot(rgbSE, luma);\n                float lumaM  = dot(rgbM,  luma);\n                float lumaMin = min(lumaM, min(min(lumaNW, lumaNE), min(lumaSW, lumaSE)));\n                float lumaMax = max(lumaM, max(max(lumaNW, lumaNE) , max(lumaSW, lumaSE)));\n            \n                vec2 dir;\n                dir.x = -((lumaNW + lumaNE) - (lumaSW + lumaSE));\n                dir.y = ((lumaNW + lumaSW) - (lumaNE + lumaSE));\n            \n                float dirReduce = max((lumaNW + lumaNE + lumaSW + lumaSE) * (0.25 * FXAA_REDUCE_MUL), FXAA_REDUCE_MIN);\n            \n                float rcpDirMin = 1.0 / (min(abs(dir.x), abs(dir.y)) + dirReduce);\n                dir = min(vec2(FXAA_SPAN_MAX, FXAA_SPAN_MAX),\n                      max(vec2(-FXAA_SPAN_MAX, -FXAA_SPAN_MAX),\n                            dir * rcpDirMin)) * res;\n                vec4 rgbA = (1.0/2.0) * (\n                texture2D(uRenderTexture, vTextureCoord.xy + dir * (1.0/3.0 - 0.5)) +\n                texture2D(uRenderTexture, vTextureCoord.xy + dir * (2.0/3.0 - 0.5)));\n                vec4 rgbB = rgbA * (1.0/2.0) + (1.0/4.0) * (\n                texture2D(uRenderTexture, vTextureCoord.xy + dir * (0.0/3.0 - 0.5)) +\n                texture2D(uRenderTexture, vTextureCoord.xy + dir * (3.0/3.0 - 0.5)));\n                float lumaB = dot(rgbB, vec4(luma, 0.0));\n            \n                if ((lumaB < lumaMin) || (lumaB > lumaMax)) {\n                    gl_FragColor = rgbA;\n                } else {\n                    gl_FragColor = rgbB;\n                }\n            }\n        "
              , p = {
                resolution: {
                    name: "uResolution",
                    type: "2f",
                    value: [0, 0]
                }
            };
            return (r = t.call(this, e, {
                fragmentShader: c,
                uniforms: p,
                renderOrder: n,
                depthTest: a,
                texturesOptions: o,
                crossOrigin: h,
                depth: l,
                clear: u,
                renderTarget: d
            })).gl ? (r.uniforms.resolution.value = [r.renderer._boundingRect.width, r.renderer._boundingRect.height],
            r._onAfterResizeCallback = function() {
                r.uniforms.resolution.value = [r.renderer._boundingRect.width, r.renderer._boundingRect.height],
                r._onFXAAPassAfterResizeCallback && r._onFXAAPassAfterResizeCallback()
            }
            ,
            r) : _possibleConstructorReturn(r)
        }
        return _createClass(i, [{
            key: "onAfterResize",
            value: function(e) {
                return e && (this._onFXAAPassAfterResizeCallback = e),
                this
            }
        }]),
        i
    }(ie);
    e.Curtains = d,
    e.FXAAPass = se,
    e.Mat4 = R,
    e.PingPongPlane = re,
    e.Plane = ee,
    e.Quat = U,
    e.RenderTarget = te,
    e.ShaderPass = ie,
    e.Texture = E,
    e.TextureLoader = M,
    e.Vec2 = P,
    e.Vec3 = w,
    Object.defineProperty(e, "__esModule", {
        value: !0
    })
}
));
