(function(a) {
    "use strict";
    var d = '', g = 0, c, b, e;
    a(window).on('load', function() {
        c = a(window).width(),
        q(),
        l(),
        f(),
        i(),
        j(),
        n(),
        p(),
        m(),
        h(),
        k()
    }),
    a(window).on('scroll', function() {
        b = a(window).scrollTop(),
        e = a(window).height(),
        c = a(window).width(),
        b < g ? d = 'up' : d = 'down',
        g = b,
        f(),
        i(),
        j()
    }),
    a(document).ready(function() {
        var p, n, m, k, l, h;
        a('.pxl-circle-svg svg').each(function() {
            var b = a(this).find('.linear-dot1'), d, c, e;
            b.length > 0 && (d = b.attr('id')),
            c = a(this).find('.linear-dot2'),
            c.length > 0 && (e = c.attr('id')),
            o(this, d, e)
        });
        const d = a('#website-url')
          , e = a('#user-email')
          , f = a('#submit-button')
          , b = a('#result-container');
        d.length && e.length && f.length && b.length && (g(),
        d.on('input', g),
        e.on('input', g),
        f.on('click', function() {
            const c = d.val().trim()
              , f = e.val().trim();
            c && f && (b.css('display', 'block'),
            b.html('Loading...'),
            a.ajax({
                url: `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${c}`,
                method: 'GET',
                dataType: 'json',
                success: function(a) {
                    const d = a.lighthouseResult.categories.performance.score * 100
                      , e = a.lighthouseResult.audits['first-contentful-paint'].displayValue
                      , f = a.lighthouseResult.audits['largest-contentful-paint'].displayValue
                      , g = a.lighthouseResult.audits['total-blocking-time'].displayValue;
                    b.html(`
                                SEO Score for ${c}: ${d}<br>
                                First Contentful Paint: ${e}<br>
                                Largest Contentful Paint: ${f}<br>
                                Total Blocking Time: ${g}
                                `)
                },
                error: function(a) {
                    b.html('Error loading data. Please try again later.'),
                    console.error('Error calling the SEO score API:', a)
                }
            }))
        }));
        function g() {
            const a = d.val().trim()
              , b = e.val().trim();
            a && b ? f.prop('disabled', !1) : f.prop('disabled', !0)
        }
        p = a('.pxl-header-elementor-main'),
        p.find('.pxl-menu-primary li').each(function() {
            var b = a(this).find('> ul.sub-menu');
            b.length == 1 && a(this).hover(function() {
                b.offset().left + b.width() > a(window).width() ? b.addClass('pxl-sub-reverse') : b.offset().left < 0 && b.addClass('pxl-sub-reverse')
            }, function() {
                b.removeClass('pxl-sub-reverse')
            })
        }),
        n = a('.pxl-img-text .pxl-img'),
        c < 1200 && n.removeAttr('data-parallax'),
        a('.pxl-header-menu li.menu-item-has-children, .pxl-nav-hidden li.menu-item-has-children, .pxl-menu-primary li.menu-item-has-children').append('<span class="pxl-menu-toggle"></span>'),
        a('.pxl-menu-toggle').on('click', function() {
            a(this).hasClass('active') ? (a(this).closest('ul').find('.pxl-menu-toggle.active').toggleClass('active'),
            a(this).closest('ul').find('.sub-menu.active').toggleClass('active').slideToggle()) : (a(this).closest('ul').find('.pxl-menu-toggle.active').toggleClass('active'),
            a(this).closest('ul').find('.sub-menu.active').toggleClass('active').slideToggle(),
            a(this).toggleClass('active'),
            a(this).parent().find('> .sub-menu').toggleClass('active'),
            a(this).parent().find('> .sub-menu').slideToggle())
        }),
        a("#pxl-nav-mobile").on('click', function() {
            a(this).toggleClass('active'),
            a('.pxl-header-menu').toggleClass('active')
        }),
        a(".pxl-menu-close, .pxl-header-menu-backdrop").on('click', function() {
            a(this).parents('.pxl-header-main').find('.pxl-header-menu').removeClass('active'),
            a('#pxl-nav-mobile').removeClass('active')
        }),
        a('.pxl-nice-select, .woocommerce .woocommerce-ordering .orderby, #wp-block-archives-1, #wp-block-categories-1').each(function() {
            a(this).niceSelect()
        }),
        a('.woocommerce div.product form.cart .variations select').each(function() {
            a(this).niceSelect()
        }),
        m = document.querySelectorAll('.woocommerce .nice-select'),
        m.forEach(function() {
            var b = a('.woocommerce .woocommerce-product-inner').width();
            a('.woocommerce .nice-select').css("min-width", b),
            a(window).resize(function() {
                var b = a('.woocommerce .woocommerce-product-inner').width();
                a('.woocommerce .nice-select').css("min-width", b)
            })
        }),
        a('.pxl-type-header-clip > .elementor-container').append('<div class="pxl-header-shape"><span></span></div>'),
        a('.pxl-scroll-top').click(function() {
            return a('html, body').animate({
                scrollTop: 0
            }, 800),
            !1
        }),
        a('.pxl-grid-masonry').each(function() {
            var b = 100
              , d = a(this).children().length
              , c = d - 1;
            a(this).find('> .pxl-grid-item > .wow').each(function(e, f) {
                a(this).css('animation-delay', b + 'ms'),
                c === e ? (b = 100,
                c = c + d) : b = b + 60
            })
        }),
        k = a('.pxl-video-player2'),
        k && a(this).find('iframe').addClass('parallax-inner'),
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
        }),
        a('.btn-video, .pxl-video-popup').magnificPopup({
            type: 'iframe',
            mainClass: 'mfp-fade',
            removalDelay: 160,
            preloader: !1,
            fixedContentPos: !1
        }),
        a('.comment-reply a').append('<i class="common icon-arrow-forward-ne1"></i>'),
        a('.pxl-page-title-default-bg').hasClass('pxl--parallax') && a(this).stellar(),
        a('.btn-hover').each(function() {
            a(this).hover(function() {
                a(this).parents('.item-feature').find('.btn-hover').removeClass('active'),
                a(this).addClass('active')
            })
        }),
        a('.pxl--widget-hover').each(function() {
            a(this).hover(function() {
                a(this).parents('.elementor-row').find('.pxl--widget-hover').removeClass('pxl--item-active'),
                a(this).parents('.elementor-container').find('.pxl--widget-hover').removeClass('pxl--item-active'),
                a(this).addClass('pxl--item-active')
            })
        }),
        a('.btn-plus-text').hover(function() {
            a(this).find('span').toggle(300)
        }),
        a(".pxl-nav-button").on('click', function() {
            a(this).toggleClass('active'),
            a(this).parent().find('.pxl-nav-wrap').toggle(400)
        }),
        l = a('.el-bounce, .pxl-image-effect1'),
        a.each(l, function(b, a) {
            j(a, 'bounce-active')
        });
        function j(b, d) {
            b = a(b);
            let c = 0;
            b.hasClass(d) ? i(function() {
                return c++,
                c == 2
            }, function() {
                c = 0,
                b.removeClass(d),
                j(b, d)
            }, 'Deactivate', 1e3) : i(function() {
                return c++,
                c == 3
            }, function() {
                c = 0,
                b.addClass(d),
                j(b, d)
            }, 'Activate', 1e3)
        }
        function i(c, d, a, b) {
            (a == null || a == '' || typeof a == 'undefined') && (a = 'Timeout'),
            (b == null || b == '' || typeof b == 'undefined') && (b = 100);
            var e = c();
            e ? d() : setTimeout(function() {
                console.log(a),
                i(c, d, a, b)
            }, b)
        }
        if (h = a('#comments .form-submit'),
        h && h.append('<span class="button-arrow-hover"><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none"><path d="M20.2202 0.845311L7.31632 0.646853C6.97468 0.647537 6.6511 0.782449 6.41528 1.02253C6.17946 1.26262 6.05027 1.58866 6.05552 1.93045C6.06078 2.27223 6.20007 2.60241 6.44339 2.84986C6.6867 3.09731 7.01458 3.24224 7.35641 3.25344L17.1136 3.4035L1.15375 19.3633C0.913059 19.604 0.780827 19.9335 0.786144 20.2792C0.79146 20.6249 0.933891 20.9585 1.1821 21.2068C1.43031 21.455 1.76397 21.5974 2.10968 21.6027C2.45539 21.608 2.78482 21.4758 3.02552 21.2351L18.9854 5.27527L19.1354 15.0325C19.1351 15.2055 19.1692 15.3779 19.2358 15.5396C19.3024 15.7014 19.4002 15.8492 19.5234 15.9745C19.6467 16.0998 19.7929 16.2001 19.9535 16.2695C20.1141 16.3389 20.286 16.376 20.4591 16.3786C20.6322 16.3813 20.803 16.3495 20.9616 16.285C21.1202 16.2205 21.2634 16.1247 21.3828 16.0031C21.5022 15.8815 21.5955 15.7366 21.6572 15.5769C21.7188 15.4171 21.7477 15.2456 21.742 15.0725L21.5436 2.16865C21.5382 1.82301 21.3958 1.48943 21.1476 1.24127C20.8994 0.993105 20.5659 0.850679 20.2202 0.845311Z" fill="#FDFDFD"/></svg><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none"><path d="M20.2202 0.845311L7.31632 0.646853C6.97468 0.647537 6.6511 0.782449 6.41528 1.02253C6.17946 1.26262 6.05027 1.58866 6.05552 1.93045C6.06078 2.27223 6.20007 2.60241 6.44339 2.84986C6.6867 3.09731 7.01458 3.24224 7.35641 3.25344L17.1136 3.4035L1.15375 19.3633C0.913059 19.604 0.780827 19.9335 0.786144 20.2792C0.79146 20.6249 0.933891 20.9585 1.1821 21.2068C1.43031 21.455 1.76397 21.5974 2.10968 21.6027C2.45539 21.608 2.78482 21.4758 3.02552 21.2351L18.9854 5.27527L19.1354 15.0325C19.1351 15.2055 19.1692 15.3779 19.2358 15.5396C19.3024 15.7014 19.4002 15.8492 19.5234 15.9745C19.6467 16.0998 19.7929 16.2001 19.9535 16.2695C20.1141 16.3389 20.286 16.376 20.4591 16.3786C20.6322 16.3813 20.803 16.3495 20.9616 16.285C21.1202 16.2205 21.2634 16.1247 21.3828 16.0031C21.5022 15.8815 21.5955 15.7366 21.6572 15.5769C21.7188 15.4171 21.7477 15.2456 21.742 15.0725L21.5436 2.16865C21.5382 1.82301 21.3958 1.48943 21.1476 1.24127C20.8994 0.993105 20.5659 0.850679 20.2202 0.845311Z" fill="#FDFDFD"/></svg></span>'),
        a('.pxl-image-tilt').length && (a('.pxl-image-tilt').parents('.elementor-top-section').addClass('pxl-image-tilt-active'),
        a('.pxl-image-tilt').each(function() {
            var b = a(this).data('maxtilt')
              , c = a(this).data('speedtilt')
              , d = a(this).data('perspectivetilt');
            VanillaTilt.init(this, {
                max: b,
                speed: c,
                perspective: d
            })
        })),
        a('.wpcf7-select').each(function() {
            var b = a(this), f = a(this).children('option').length, c, e, d, g;
            b.addClass('pxl-select-hidden'),
            b.wrap('<div class="pxl-select"></div>'),
            b.after('<div class="pxl-select-higthlight"></div>'),
            c = b.next('div.pxl-select-higthlight'),
            c.text(b.children('option').eq(0).text()),
            e = a('<ul />', {
                class: 'pxl-select-options'
            }).insertAfter(c);
            for (d = 0; d < f; d++)
                a('<li />', {
                    text: b.children('option').eq(d).text(),
                    rel: b.children('option').eq(d).val()
                }).appendTo(e);
            g = e.children('li'),
            c.click(function(b) {
                b.stopPropagation(),
                a('div.pxl-select-higthlight.active').not(this).each(function() {
                    a(this).removeClass('active').next('ul.pxl-select-options').addClass('pxl-select-lists-hide')
                }),
                a(this).toggleClass('active')
            }),
            g.click(function(d) {
                d.stopPropagation(),
                c.text(a(this).text()).removeClass('active'),
                b.val(a(this).attr('rel'))
            }),
            a(document).click(function() {
                c.removeClass('active')
            })
        }),
        a('#pxl-sidebar-area select').each(function() {
            var b = a(this), f = a(this).children('option').length, c, e, d, g;
            b.addClass('pxl-select-hidden'),
            b.wrap('<div class="pxl-select"></div>'),
            b.after('<div class="pxl-select-higthlight"></div>'),
            c = b.next('div.pxl-select-higthlight'),
            c.text(b.children('option').eq(0).text()),
            e = a('<ul />', {
                class: 'pxl-select-options'
            }).insertAfter(c);
            for (d = 0; d < f; d++)
                a('<li />', {
                    text: b.children('option').eq(d).text(),
                    rel: b.children('option').eq(d).val()
                }).appendTo(e);
            g = e.children('li'),
            c.click(function(b) {
                b.stopPropagation(),
                a('div.pxl-select-higthlight.active').not(this).each(function() {
                    a(this).removeClass('active').next('ul.pxl-select-options').addClass('pxl-select-lists-hide')
                }),
                a(this).toggleClass('active')
            }),
            g.click(function(d) {
                d.stopPropagation(),
                c.text(a(this).text()).removeClass('active'),
                b.val(a(this).attr('rel'))
            }),
            a(document).click(function() {
                c.removeClass('active')
            })
        }),
        a(document).ready(function() {
            var c = a('#preloader')
              , b = 0
              , d = performance.now()
              , e = 100 / (d / 1e3)
              , f = setInterval(function() {
                b += e,
                c.css('--pxl-clip', b),
                b >= 100 && clearInterval(f)
            }, 30)
        }),
        a('.pxl-title--typewriter').length) {
            function q(a, b) {
                a.length ? (a.eq(0).addClass('is-active'),
                a.eq(0).delay(3e3),
                a.eq(0).removeClass('is-active'),
                q(a.slice(1), b)) : b()
            }
            function r(a, b) {
                a.length ? (a.eq(0).addClass('is-active'),
                a.eq(0).delay(3e3).slideDown(3e3, function() {
                    a.eq(0).removeClass('is-active'),
                    r(a.slice(1), b)
                })) : b()
            }
            function s() {
                q(a('.pxl-title--typewriter .pxl-item--text'), function() {
                    r(a('.pxl-title--typewriter .pxl-item--text'), function() {
                        s()
                    })
                })
            }
            a(function() {
                s()
            })
        }
        a('.pxl-row-divider-angle-top').append('<svg class="pxl-row-angle" style="fill:#ffffff" xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 100 100" version="1.1" preserveAspectRatio="none" height="130px"><path stroke="" stroke-width="0" d="M0 100 L100 0 L200 100"></path></svg>'),
        setTimeout(function() {
            a('.md-align-center').parents('.rs-parallax-wrap').addClass('pxl-group-center')
        }, 300)
    });
    function o(q, m, r) {
        var u = window.innerWidth || document.documentElement.clientWidth, b, o, s, t, n, w, l, e, h, j, g, v, x, p, d, c, f;
        if (u <= 1200)
            return;
        if (b = Snap(q),
        !b)
            return;
        o = 13,
        s = b.filter(Snap.filter.shadow(0, 4, 30, 'rgba(0, 255, 255, 0.6)')).addClass('filter1'),
        t = b.filter(Snap.filter.shadow(0, 4, 30, 'rgba(0, 255, 255, 0.1)')).addClass('filter2'),
        n = b.circle(0, 0, o * 1),
        w = b.select('.pxl-circle-svg svg .' + m),
        n.attr({
            id: 'circle1',
            class: 'dot',
            fill: 'url(#' + m + ')'
        }),
        n.attr({
            filter: s
        }),
        l = b.circle(0, 0, o * 1),
        l.attr({
            id: 'circle2',
            class: 'dot',
            fill: 'url(#' + r + ')'
        }),
        l.attr({
            filter: t
        }),
        e = b.select('#circle1'),
        h = b.select('#circle2'),
        j = b.select('path').getTotalLength(),
        g = b.select('path').getTotalLength(),
        v = j * .7,
        x = g * .7,
        e.transform('t0,0'),
        h.transform('t0,0'),
        p = a(".pxl-carousel-inner,.pxl-swiper-arrow"),
        f = !1;
        function i(h) {
            var a, c;
            h ? (a = 0,
            c = j) : (a = g,
            c = 0),
            d = Snap.animate(a, c, function(c) {
                var a = b.select("path").getPointAtLength(c);
                e.attr({
                    cx: a.x,
                    cy: a.y
                })
            }, 15e3, function() {
                f || (e.transform('t0,0'),
                i(!0))
            })
        }
        function k(e) {
            var a, d;
            e ? (a = j,
            d = 0) : (a = 0,
            d = g),
            c = Snap.animate(a, d, function(c) {
                var a = b.select("path").getPointAtLength(g - c);
                h.attr({
                    cx: a.x,
                    cy: a.y
                })
            }, 15e3, function() {
                f || (h.transform('t0,0'),
                k(!1))
            })
        }
        p.on("mouseenter", function() {
            f = !0,
            d && d.pause(),
            c && c.pause()
        }),
        p.on("mouseleave", function() {
            f = !1,
            d && d.stop(),
            c && c.stop(),
            e.transform('t0,0'),
            h.transform('t0,0'),
            i(!0),
            k(!1)
        }),
        i(!0),
        k(!1)
    }
    function m() {
        'use strict';
        a(document).on('click', '.pxl-anchor.side-panel', function(b) {
            b.preventDefault(),
            b.stopPropagation();
            var c = a(this).attr('data-target');
            a(this).toggleClass('cliked'),
            a(c).toggleClass('open'),
            a('body').toggleClass('side-panel-open'),
            a('.pxl-overlay-drop').toggleClass('panel-open'),
            setTimeout(function() {
                a(document).find('.pxl-search-form input[name="s"]').focus(),
                a(document).find('.search-form input[name="s"]').focus()
            }, 1e3)
        }),
        a(document).on('click', '.custom-link.anchor', function(b) {
            b.preventDefault(),
            b.stopPropagation();
            var c = a(this).attr('data-target');
            a(this).toggleClass('cliked'),
            a(c).toggleClass('anchor-target-open'),
            a('.pxl-anchor-bg').toggleClass('anchor-bg-open')
        }),
        a('.pxl-menu-primary li').each(function() {
            var b = a(this).find('> ul.sub-menu');
            b.length == 1 && a(this).hover(function() {
                b.offset().left + b.width() > a(window).width() ? b.addClass('back') : b.offset().left < 0 && b.addClass('back')
            }, function() {
                b.removeClass('back')
            })
        })
    }
    function q() {
        a('#pxl-loadding').hasClass('style-text') ? (a('#pxl-loadding').addClass('hide'),
        a(".loading-text").addClass("fadeout")) : a(".pxl-loader").fadeOut("slow")
    }
    function k() {
        a(document).on('click', function(c) {
            var b = a(c.target)
              , d = '.btn-nav-mobile';
            !b.is(d) && b.closest('.pxl-hidden-template').length <= 0 && a('body').hasClass('side-panel-open') && (a('.btn-nav-mobile').removeClass('cliked'),
            a('.pxl-hidden-template').removeClass('open'),
            a('body').removeClass('side-panel-open'))
        }),
        a(document).on('click', '.pxl-close', function(b) {
            b.preventDefault(),
            b.stopPropagation(),
            a(this).closest('.pxl-hidden-template').toggleClass('open'),
            a('.btn-nav-mobile').removeClass('cliked'),
            a('body').toggleClass('side-panel-open')
        }),
        a('.pxl-widget-cart-overlay').click(function(b) {
            b.preventDefault(),
            a(this).parent().toggleClass('open'),
            a(this).parents('body').removeClass('ov-hidden')
        })
    }
    a('.pxl-swiper-arrow-custom').parents('.pxl-swiper-sliders').addClass('pxl--hide-arrow'),
    a('.pxl-navigation-carousel').parents('.elementor-section').addClass('pxl--hide-arrow'),
    setTimeout(function() {
        a('.pxl-swiper-arrow-custom.pxl-swiper-arrow-next').on('click', function() {
            a(this).parents('.pxl-swiper-sliders').find('.pxl-swiper-arrow-main.pxl-swiper-arrow-next').trigger('click')
        }),
        a('.pxl-swiper-arrow-custom.pxl-swiper-arrow-prev').on('click', function() {
            a(this).parents('.pxl-swiper-sliders').find('.pxl-swiper-arrow-main.pxl-swiper-arrow-prev').trigger('click')
        })
    }, 300),
    setTimeout(function() {
        a('.pxl-navigation-carousel .pxl-navigation-arrow-prev').on('click', function() {
            a(this).parents('.elementor-section').find('.pxl-swiper-arrow.pxl-swiper-arrow-prev').trigger('click')
        }),
        a('.pxl-navigation-carousel .pxl-navigation-arrow-next').on('click', function() {
            a(this).parents('.elementor-section').find('.pxl-swiper-arrow.pxl-swiper-arrow-next').trigger('click')
        })
    }, 300);
    function f() {
        a('#pxl-header-elementor').hasClass('is-sticky') && (b > 100 ? a('.pxl-header-elementor-sticky.pxl-sticky-stb').addClass('pxl-header-fixed') : a('.pxl-header-elementor-sticky.pxl-sticky-stb').removeClass('pxl-header-fixed'),
        d == 'up' && b > 100 ? a('.pxl-header-elementor-sticky.pxl-sticky-stt').addClass('pxl-header-fixed') : a('.pxl-header-elementor-sticky.pxl-sticky-stt').removeClass('pxl-header-fixed')),
        a('.pxl-header-elementor-sticky').parents('body').addClass('pxl-header-sticky')
    }
    function l() {
        var b = (a('#pxl-main').width() - 1620) / 2
          , d = (a('#pxl-main').width() - 1300) / 2;
        c > 1200 && (a('body:not(.rtl) .col-offset-left.elementor-column > .elementor-widget-wrap').css('padding-left', b + 'px'),
        a('body:not(.rtl) .col-offset-right.elementor-column > .elementor-widget-wrap').css('padding-right', b + 'px'),
        a('body:not(.rtl) .col-offset-left-1300px.elementor-column > .elementor-widget-wrap').css('padding-left', d + 'px'),
        a('body:not(.rtl) .col-offset-right-1300px.elementor-column > .elementor-widget-wrap').css('padding-right', d + 'px'),
        a('.rtl .col-offset-left.elementor-column > .elementor-widget-wrap').css('padding-right', b + 'px'),
        a('.rtl .col-offset-right.elementor-column > .elementor-widget-wrap').css('padding-left', b + 'px'),
        a('.rtl .col-offset-left-1300px.elementor-column > .elementor-widget-wrap').css('padding-right', d + 'px'),
        a('.rtl .col-offset-right-1300px.elementor-column > .elementor-widget-wrap').css('padding-left', d + 'px'))
    }
    function i() {
        b < e && a('.pxl-scroll-top').addClass('pxl-off').removeClass('pxl-on'),
        b > e && a('.pxl-scroll-top').addClass('pxl-on').removeClass('pxl-off')
    }
    function n() {
        a('#pxl-main .quantity').append('<span class="quantity-icon"><i class="quantity-down">-</i><i class="quantity-up">+</i></span>'),
        a('.quantity-up').on('click', function() {
            a(this).parents('.quantity').find('input[type="number"]').get(0).stepUp(),
            a(this).parents('.woocommerce-cart-form').find('.actions .button').removeAttr('disabled')
        }),
        a('.quantity-down').on('click', function() {
            a(this).parents('.quantity').find('input[type="number"]').get(0).stepDown(),
            a(this).parents('.woocommerce-cart-form').find('.actions .button').removeAttr('disabled')
        }),
        a('.woocommerce-cart-form .actions .button').removeAttr('disabled')
    }
    function h() {
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
    setTimeout(()=>{
        var a = document.querySelectorAll('.pxl-wobble');
        a.forEach(function(a) {
            a.addEventListener('mouseover', function() {
                var c, b, d;
                !a.classList.contains('animating') && !a.classList.contains('mouseover') && (a.classList.add('animating', 'mouseover'),
                c = a.innerText.split(''),
                setTimeout(function() {
                    a.classList.remove('animating')
                }, (c.length + 1) * 50),
                b = a.dataset.animation,
                b || (b = "pxl-jump"),
                a.innerText = '',
                c.forEach(function(b) {
                    b == " " && (b = "&nbsp;"),
                    a.innerHTML += '<span class="letter">' + b + '</span>'
                }),
                d = a.querySelectorAll('.letter'),
                d.forEach(function(a, c) {
                    setTimeout(function() {
                        a.classList.add(b)
                    }, 50 * c)
                }))
            }),
            a.addEventListener('mouseout', function() {
                a.classList.remove('mouseover')
            })
        })
    }
    , 100);
    function p() {
        var e = a('body .pxl-scroll-top'), b, c, d;
        e.length && (b = document.querySelector('.pxl-progress-circle path'),
        c = b.getTotalLength(),
        b.style.transition = b.style.WebkitTransition = 'none',
        b.style.strokeDasharray = c + ' ' + c,
        b.style.strokeDashoffset = c,
        b.getBoundingClientRect(),
        b.style.transition = b.style.WebkitTransition = 'stroke-dashoffset 10ms linear',
        d = function() {
            var d = a(window).scrollTop()
              , e = a(document).height() - a(window).height()
              , f = c - d * c / e;
            b.style.strokeDashoffset = f
        }
        ,
        d(),
        a(window).scroll(d))
    }
    function j() {
        setTimeout(function() {
            var b = a('.pxl-footer-fixed #pxl-footer-elementor').outerHeight() - 1;
            a('.pxl-footer-fixed #pxl-main').css('margin-bottom', b + 'px')
        }, 600)
    }
    a(document).ajaxComplete(function() {
        h()
    })
}
)(jQuery)
