(function(a) {
    function b(b) {
        elementorFrontend.waypoint(b.find('.pxl-animate'), function() {
            var c = a(this)
              , b = c.data('settings');
            typeof b != 'undefined' && typeof b.animation != 'undefined' ? setTimeout(function() {
                c.removeClass('pxl-invisible').addClass('animated ' + b.animation)
            }, b.animation_delay) : setTimeout(function() {
                c.removeClass('pxl-invisible').addClass('animated fadeInUp')
            }, 300)
        }),
        elementorFrontend.waypoint(b.find('.pxl-divider.animated'), function() {
            a(this).addClass('pxl-animated')
        }),
        elementorFrontend.waypoint(b.find('.pxl-bd-anm'), function() {
            a(this).addClass('pxl-animated')
        }),
        elementorFrontend.waypoint(b.find('.pxl-hd-bd-left'), function() {
            a(this).addClass('pxl-animated')
        }),
        elementorFrontend.waypoint(b.find('.pxl-hd-bd-right'), function() {
            a(this).addClass('pxl-animated')
        }),
        elementorFrontend.waypoint(b.find('.pxl-section-line-item'), function() {
            a(this).addClass('pxl-animated')
        }),
        elementorFrontend.waypoint(b.find('.pxl-image-wg.move-from-left'), function() {
            a(this).addClass('pxl-animated')
        }),
        elementorFrontend.waypoint(b.find('.pxl-image-wg.move-from-right'), function() {
            a(this).addClass('pxl-animated')
        }),
        elementorFrontend.waypoint(b.find('.pxl-image-wg.skew-in'), function() {
            a(this).addClass('pxl-animated')
        }),
        elementorFrontend.waypoint(b.find('.pxl-wg-move-from-left>.elementor-widget-container'), function() {
            a(this).addClass('pxl-animated')
        }),
        elementorFrontend.waypoint(b.find('.pxl-wg-move-from-right>.elementor-widget-container'), function() {
            a(this).addClass('pxl-animated')
        }),
        a(document).ajaxComplete(function(c, d, e) {
            "use strict";
            elementorFrontend.waypoint(b.find('.pxl-bd-anm'), function() {
                a(this).addClass('pxl-animated')
            }),
            elementorFrontend.waypoint(b.find('.layout-portfolio-list-1 .grid-item .item-title'), function() {
                a(this).addClass('pxl-animated')
            })
        })
    }
    function c(b) {
        gsap.registerPlugin(ScrollTrigger);
        const d = gsap.utils.toArray('img')
          , c = ()=>{
            document.body.style.overflow = 'auto',
            gsap.utils.toArray(b.find('.pxl-horizontal-scroll .scroll-trigger')).forEach((b,f)=>{
                var d, e;
                const c = b;
                d = c.scrollWidth * -1,
                e = 0,
                a(b).closest('.pxl-horizontal-scroll').hasClass('revesal') && (d = '100%',
                e = (c.scrollWidth - b.offsetWidth) * -1),
                gsap.fromTo(c, {
                    x: d
                }, {
                    x: e,
                    scrollTrigger: {
                        trigger: b,
                        scrub: .5
                    }
                })
            }
            )
        }
        ;
        c()
    }
    function d() {
        a('.pxl-menu-primary2 li.menu-item-has-children').append('<span class="pxl-menu-toggle style2">+</span>'),
        a('.pxl-menu-primary2 li.menu-item-has-children .sub-menu').css('display', 'none'),
        a('.pxl-menu-toggle.style2').on('click', function() {
            if (a(this).hasClass('active')) {
                a(this).text('+'),
                a(this).closest('ul').find('.pxl-menu-toggle.style2.active').toggleClass('active'),
                a(this).closest('ul').find('.sub-menu.active').toggleClass('active').slideToggle();
                const b = a(this).siblings('a').outerHeight();
                a(this).css('height', b + 'px')
            } else {
                a(this).closest('ul').find('.pxl-menu-toggle.style2.active').toggleClass('active'),
                a(this).closest('ul').find('.sub-menu.active').toggleClass('active').slideToggle(),
                a(this).toggleClass('active'),
                a(this).parent().find('> .sub-menu').toggleClass('active'),
                a(this).parent().find('> .sub-menu').slideToggle(),
                a(this).text('-');
                const b = a(this).siblings('a').outerHeight();
                a(this).css('height', b + 'px')
            }
        })
    }
    function e(b) {
        if (b.find('.pxl-text-img-wrap').length <= 0)
            return;
        var d = 0
          , e = 0;
        b.find('.pxl-text-img-wrap .content-inner').mousemove(function(b) {
            var c = a(this).offset();
            d = b.pageX - c.left,
            e = b.pageY - c.top
        }),
        b.find('.pxl-text-img-wrap ul>li').on("mouseenter", function() {
            a(this).removeClass('deactive').addClass('active');
            var b = a(this).attr('data-target');
            a(this).closest('.content-inner').find(b).removeClass('deactive').addClass('active')
        }),
        b.find('.pxl-text-img-wrap ul>li').on("mouseleave", function() {
            a(this).addClass('deactive').removeClass('active');
            var b = a(this).attr('data-target');
            a(this).closest('.content-inner').find(b).addClass('deactive').removeClass('active')
        });
        const c = {
            x: window.innerWidth / 2,
            y: window.innerHeight / 2
        }
          , f = gsap.quickSetter(b.find('.pxl-text-img-wrap .content-inner'), "css")
          , g = gsap.quickSetter(b.find('.pxl-text-img-wrap .content-inner'), "css");
        gsap.ticker.add(()=>{
            const b = .15
              , a = 1 - Math.pow(.85, gsap.ticker.deltaRatio());
            c.x += (d - c.x) * a,
            c.y += (e - c.y) * a,
            f({
                "--pxl-mouse-x": `${c.x}px`
            }),
            g({
                "--pxl-mouse-y": `${c.y}px`
            })
        }
        )
    }
    function f(b) {
        elementorFrontend.waypoint(b.find('.pxl-progress-bar'), function() {
            a(this).progressbar()
        }),
        elementorFrontend.waypoint(b.find('.pxl-progressbar.circle'), function() {
            var a = b.find(".pxl-progressbar-container")
              , i = b.find(".pxl-progressbar-inner")
              , c = a.data("settings")
              , e = c.circle_percent
              , f = c.circle_number
              , g = c.prefix
              , h = c.suffix
              , d = c.speed;
            e > 100 && (e = 100),
            a.prop({
                percent: 0
            }).animate({
                percent: f
            }, {
                duration: d,
                easing: 'linear',
                step: function(b) {
                    var c = 100 - b
                      , d = b + 8;
                    a.find(".js-progress-bar").css('stroke-dashoffset', c),
                    a.find(".js-progress-bar1").css('stroke-dashoffset', d)
                }
            }),
            i.prop({
                counter: 0
            }).animate({
                counter: f
            }, {
                duration: d,
                easing: 'linear',
                step: function(b) {
                    a.find(".progress-percentage").text(g + Math.ceil(b) + h)
                }
            })
        })
    }
    function g(c) {
        var b = c.find(".pxl-split-text");
        if (b.length == 0)
            return;
        gsap.registerPlugin(SplitText),
        b.each(function(c, b) {
            b.split = new SplitText(b,{
                type: "lines,words,chars",
                linesClass: "split-line"
            }),
            gsap.set(b, {
                perspective: 400
            }),
            a(b).hasClass('split-in-fade') && gsap.set(b.split.chars, {
                opacity: 0,
                ease: "Back.easeOut"
            }),
            a(b).hasClass('split-in-right') && gsap.set(b.split.chars, {
                opacity: 0,
                x: "50",
                ease: "Back.easeOut"
            }),
            a(b).hasClass('split-in-left') && gsap.set(b.split.chars, {
                opacity: 0,
                x: "-50",
                ease: "circ.out"
            }),
            a(b).hasClass('split-in-up') && gsap.set(b.split.chars, {
                opacity: 0,
                y: "80",
                ease: "circ.out"
            }),
            a(b).hasClass('split-in-down') && gsap.set(b.split.chars, {
                opacity: 0,
                y: "-80",
                ease: "circ.out"
            }),
            a(b).hasClass('split-in-rotate') && gsap.set(b.split.chars, {
                opacity: 0,
                rotateX: "50deg",
                ease: "circ.out"
            }),
            a(b).hasClass('split-in-scale') && gsap.set(b.split.chars, {
                opacity: 0,
                scale: "0.5",
                ease: "circ.out"
            }),
            b.anim = gsap.to(b.split.chars, {
                scrollTrigger: {
                    trigger: b,
                    toggleActions: "restart pause resume reverse",
                    start: "top 90%"
                },
                x: "0",
                y: "0",
                rotateX: "0",
                scale: 1,
                opacity: 1,
                duration: .8,
                stagger: .02
            })
        })
    }
    function h() {
        a(document).ready(function() {
            const a = document.querySelectorAll('.pxl-mask-bg-parallax');
            a.forEach(a=>{
                const b = a.getAttribute('data-color');
                if (b) {
                    const {x: c, y: d, z: e} = JSON.parse(b)
                      , f = `linear-gradient(${e}deg, ${c}, ${d})`;
                    a.style.background = f
                }
            }
            )
        })
    }
    function i() {
        class b {
            constructor(a) {
                this.canvas = a.canvas,
                this.webGLCurtain = new Curtains({
                    container: this.canvas,
                    watchScroll: !1,
                    pixelRatio: Math.min(1.5, window.devicePixelRatio)
                }),
                this.planeElement = a.planeElement,
                this.mouse = {
                    x: 0,
                    y: 0
                },
                this.params = {
                    vertexShader: document.getElementById("vs").textContent,
                    fragmentShader: document.getElementById("fs").textContent,
                    widthSegments: 40,
                    heightSegments: 40,
                    uniforms: {
                        time: {
                            name: "uTime",
                            type: "1f",
                            value: 0
                        },
                        mousepos: {
                            name: "uMouse",
                            type: "2f",
                            value: [0, 0]
                        },
                        resolution: {
                            name: "uReso",
                            type: "2f",
                            value: [innerWidth, innerHeight]
                        },
                        progress: {
                            name: "uProgress",
                            type: "1f",
                            value: 0
                        }
                    }
                },
                this.initPlane()
            }
            initPlane() {
                this.plane = new Plane(this.webGLCurtain,this.planeElement,this.params),
                this.plane && this.plane.onReady(()=>{
                    this.update(),
                    this.initEvent()
                }
                )
            }
            update() {
                this.plane.onRender(()=>{
                    this.plane.uniforms.time.value += .01,
                    this.plane.uniforms.resolution.value = [innerWidth, innerHeight]
                }
                )
            }
            initEvent() {
                this.planeElement.addEventListener("mouseenter", ()=>{
                    gsap.to(this.plane.uniforms.progress, .8, {
                        value: 1
                    })
                }
                ),
                this.planeElement.addEventListener("mouseout", ()=>{
                    gsap.to(this.plane.uniforms.progress, .8, {
                        value: 0
                    })
                }
                )
            }
        }
        a('.pxl-case-grid.layout3 .pxl-grid-item').each(function() {
            const c = a(this)
              , d = c.find('.image-front').height();
            c.find('.canvas canvas').css('height', d + 'px');
            const e = c.data('initialized');
            if (!e) {
                c.data('initialized', !0);
                const a = c.find('.canvas')[0]
                  , d = c.find('.item--image')[0];
                new b({
                    canvas: a,
                    planeElement: d
                })
            }
        })
    }
    function j() {
        var e = 0, g = 0, b = 0, f = 0, c = 0, h = 0, i = 0, j = 0, d, k;
        a(document).on("mousemove", function(b) {
            c = b.clientX,
            h = a(window).width() - c,
            i = b.clientY,
            j = a(window).height() - i
        }),
        a('.cursor-map-target').mousemove(function(c) {
            var d = a(this).offset();
            b = c.pageX - d.left,
            f = c.pageY - d.top
        }),
        d = a('.pxl-map-wrap').width(),
        k = a('.pxl-map-wrap').height(),
        TweenMax.to({}, .01, {
            repeat: -1,
            onRepeat: function() {
                var h, i;
                e += b - e,
                g += f - g,
                a('.pxl-map-wrap').length > 0 && (h = e - d / 2 - d,
                c < h * -1 + b && (h = e + d / 2),
                i = g - d / 2,
                a(window).innerWidth() <= 767 && (h = c * -1 + b + 15,
                i = k * -1 + f - 15),
                TweenMax.set(a('.pxl-map-wrap:not(.clicked)'), {
                    css: {
                        left: h,
                        top: i
                    }
                }))
            }
        }),
        a('.cursor-map-target').on("mouseenter", function() {
            a(this).find(".pxl-map-wrap").removeClass("deactive").addClass("active")
        }),
        a('.cursor-map-target').on("mouseleave", function() {
            a(this).find(".pxl-map-wrap").removeClass("active").addClass("deactive")
        }),
        a(document).on('mousedown', '.cursor-map-target.show-popup', function() {
            var e, i, d, g;
            a(this).find(".pxl-map-wrap").addClass("clicked"),
            e = 0,
            i = 0,
            d = a(window).width() / 2,
            g = a(window).height() / 1.8,
            h < d / 2 && (e = d / -2 + b + 15),
            j < g / 2 && (i = g / -2 + f + 30),
            c < d / 2 && (e = d / 2 - 15),
            a(window).innerWidth() <= 767 && (e = c * -1 + b + 30,
            d = a(window).width() - 60,
            g = a(window).height() - 200),
            a(this).find(".pxl-map-wrap").css({
                left: e,
                top: i,
                width: d,
                height: g
            }),
            a(".pxl-cursor-map").addClass('hide')
        }),
        a(document).on('mouseout', '.pxl-map-wrap', function() {
            a(this).removeClass("clicked"),
            a(".pxl-cursor-map").removeClass('hide'),
            a(this).css({
                width: d,
                height: k
            })
        })
    }
    a(window).on('elementor/frontend/init', function() {
        elementorFrontend.hooks.addAction('frontend/element_ready/global', function(a) {
            b(a)
        }),
        elementorFrontend.hooks.addAction('frontend/element_ready/pxl_horizontal_scroll.default', function(a) {
            c(a)
        }),
        a(window).innerWidth() >= 1200 && j(),
        elementorFrontend.hooks.addAction('frontend/element_ready/pxl_text_image.default', function(a) {
            e(a)
        }),
        elementorFrontend.hooks.addAction('frontend/element_ready/pxl_progressbar.default', function(a) {
            f(a)
        }),
        elementorFrontend.hooks.addAction('frontend/element_ready/pxl_post_grid.default', function(a) {
            i(a)
        }),
        elementorFrontend.hooks.addAction('frontend/element_ready/pxl_heading.default', function(a) {
            g(a)
        }),
        d(),
        h()
    })
}
)(jQuery)
