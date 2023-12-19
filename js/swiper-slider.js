(function(d) {
    const a = document.querySelector('.swiper-hero-progress')
      , b = document.getElementById("style-fraction")
      , e = document.querySelectorAll(".pxl-slider-item")
      , f = e.length;
    if (b) {
        const a = document.createElement("span");
        a.classList.add('slidenumber'),
        a.textContent = `1 `,
        b.appendChild(a);
        const c = document.createElement("span");
        c.classList.add('totalslides'),
        c.textContent = `/ ${f}`,
        b.appendChild(c)
    }
    const c = document.querySelector(".slidenumber")
      , g = function(e, b) {
        var k = elementorFrontend.config.breakpoints, g = e.find(".pxl-slider-container"), i, d, j, f;
        if (g.length == 0)
            return !1;
        i = g.data(),
        d = i.settings,
        j = i.customdot,
        f = {
            direction: d.slide_direction,
            effect: d.slide_mode,
            wrapperClass: 'pxl-slider-wrapper',
            speed: 500,
            slideClass: 'pxl-slider-item',
            slidesPerView: 1,
            slidesPerGroup: 1,
            slidesPerColumn: 1,
            spaceBetween: 30,
            navigation: {
                nextEl: e.find(".pxl-slider-arrow-next"),
                prevEl: e.find(".pxl-slider-arrow-prev")
            },
            pagination: {
                type: d.dots_style,
                el: e.find('.pxl-slider-dots'),
                clickable: !0,
                modifierClass: 'pxl-slider-pagination-',
                bulletClass: 'pxl-slider-pagination-bullet',
                formatFractionCurrent: function(a) {
                    return ('0' + a).slice(-2)
                },
                formatFractionTotal: function(a) {
                    return ('0' + a).slice(-2)
                },
                renderFraction: function(a, b) {
                    return '<span class="' + a + '"></span>' + '<span class="divider">/</span>' + '<span class="' + b + '"></span>'
                },
                renderCustom: function(c, d, a, b) {
                    return a + ' of ' + b
                }
            },
            speed: d.speed,
            watchSlidesProgress: !0,
            watchSlidesVisibility: !0,
            autoplay: {
                delay: d.delay,
                disableOnInteraction: d.pause_on_interaction
            },
            on: {
                setTransition: function(c) {
                    for (var a = this, b = 0; b < a.slides.length; b++)
                        a.slides[b].querySelector(".pxl-slide-bg").style.transform = a.activeIndex === b ? "scale(1)" : "scale(0.9)",
                        a.slides[b].style.transition = a.params.speed + "ms"
                },
                init: function(a) {
                    elementorFrontend.waypoint(e.find('.pxl-animate'), function() {
                        var c = b(this)
                          , a = c.data('settings');
                        typeof a.animation != 'undefined' && setTimeout(function() {
                            c.removeClass('pxl-invisible').addClass('wow animated ' + a.animation)
                        }, a.animation_delay)
                    }),
                    h(this)
                },
                slideChangeTransitionStart: function(d) {
                    var c = this.activeIndex
                      , a = this.slides.eq(c);
                    e.find('.pxl-elementor-animate').each(function() {
                        var a = b(this).data('settings');
                        typeof a._animation != 'undefined' && b(this).removeClass('wow animated ' + a._animation).addClass('elementor-invisible')
                    }),
                    a.find('.pxl-elementor-animate').each(function() {
                        var c = b(this)
                          , a = c.data('settings');
                        typeof a._animation != 'undefined' && setTimeout(function() {
                            c.removeClass('elementor-invisible').addClass('wow animated ' + a._animation)
                        }, a._animation_delay)
                    }),
                    e.find('.swiper-slide .pxl-animate').each(function() {
                        var a = b(this).data('settings');
                        b(this).removeClass('wow animated ' + a.animation).addClass('pxl-invisible')
                    }),
                    a.find('.pxl-animate').each(function() {
                        var a = b(this)
                          , c = a.data('settings');
                        setTimeout(function() {
                            a.removeClass('pxl-invisible').addClass('wow animated ' + c.animation)
                        }, c.animation_delay)
                    }),
                    h(this)
                },
                slideChange: function(g) {
                    var f = this.activeIndex
                      , d = this.slides.eq(f);
                    c && (c.textContent = `${this.realIndex + 1} `),
                    a.style.animation = "none",
                    a.offsetWidth,
                    a.style.animation = null,
                    e.find('.pxl-elementor-animate').each(function() {
                        var a = b(this).data('settings');
                        typeof a._animation != 'undefined' && b(this).removeClass('wow animated ' + a._animation).addClass('elementor-invisible')
                    }),
                    d.find('.pxl-elementor-animate').each(function() {
                        var c = b(this)
                          , a = c.data('settings');
                        typeof a._animation != 'undefined' && setTimeout(function() {
                            c.removeClass('elementor-invisible').addClass('wow animated ' + a._animation)
                        }, a._animation_delay)
                    }),
                    e.find('.swiper-slide .pxl-animate').each(function() {
                        var a = b(this).data('settings');
                        b(this).removeClass('wow animated ' + a.animation).addClass('pxl-invisible')
                    }),
                    d.find('.pxl-animate').each(function() {
                        var a = b(this)
                          , c = a.data('settings');
                        setTimeout(function() {
                            a.removeClass('pxl-invisible').addClass('wow animated ' + c.animation)
                        }, c.animation_delay)
                    }),
                    h(this)
                }
            },
            autoHeight: !0
        },
        d.center_mode == 'true' && (f.centeredSlides = !0),
        d.loop === 'true' && (f.loop = !0),
        d.autoplay === 'true' ? f.autoplay = {
            delay: d.delay,
            disableOnInteraction: d.pause_on_interaction
        } : f.autoplay = !1,
        d.slide_mode === 'cube' && (f.cubeEffect = {
            shadow: !1,
            slideShadows: !1,
            shadowOffset: 0,
            shadowScale: 0
        }),
        d.slide_mode === 'coverflow' && (f.centeredSlides = !0,
        f.coverflowEffect = {
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: !1
        }),
        g.each(function(e, h) {
            var c, a;
            b(this).closest('.pxl-sliders-wrap').find('.pxl-sliders-thumbs').length > 0 && (c = new Swiper(b(this).closest('.pxl-sliders-wrap').find('.pxl-sliders-thumbs'),{
                spaceBetween: 0,
                slidesPerView: 3
            }),
            f.thumbs = {
                swiper: c
            }),
            a = new Swiper(g,f),
            d.autoplay === 'true' && d.pause_on_hover === 'true' && b(this).on({
                mouseenter: function() {
                    this.swiper.autoplay.stop()
                },
                mouseleave: function() {
                    this.swiper.autoplay.start()
                }
            }),
            b("#play-slider").click(function() {
                a.autoplay.start()
            }),
            b("#pause-slider").click(function() {
                a.autoplay.stop()
            })
        });
        function h(a) {
            var d = a.activeIndex
              , c = a.slides.eq(d);
            c.find('.pxl-ken-burns').length > 0 && (b('.pxl-slide-bg').removeClass('pxl-ken-burns--active'),
            c.find('.pxl-slide-bg').addClass('pxl-ken-burns--active'))
        }
    };
    d(window).on('elementor/frontend/init', function() {
        elementorFrontend.hooks.addAction('frontend/element_ready/pxl_slider.default', g)
    })
}
)(jQuery)
