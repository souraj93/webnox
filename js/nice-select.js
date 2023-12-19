(function(a) {
    a.fn.niceSelect = function(b) {
        if (typeof b == 'string')
            return b == 'update' ? this.each(function() {
                var d = a(this)
                  , b = a(this).next('.nice-select')
                  , e = b.hasClass('open');
                b.length && (b.remove(),
                c(d),
                e && d.next().trigger('click'))
            }) : b == 'destroy' ? (this.each(function() {
                var c = a(this)
                  , b = a(this).next('.nice-select');
                b.length && (b.remove(),
                c.css('display', ''))
            }),
            a('.nice-select').length == 0 && a(document).off('.nice_select')) : console.log('Method "' + b + '" does not exist.'),
            this;
        this.hide(),
        this.each(function() {
            var b = a(this);
            b.next().hasClass('nice-select') || c(b)
        });
        function c(b) {
            var c, e, d;
            b.after(a('<div></div>').addClass('nice-select').addClass(b.attr('class') || '').addClass(b.attr('disabled') ? 'disabled' : '').attr('tabindex', b.attr('disabled') ? null : '0').html('<span class="current"></span><ul class="list"></ul>')),
            c = b.next(),
            e = b.find('option'),
            d = b.find('option:selected'),
            c.find('.current').html(d.data('display') || d.text()),
            e.each(function(e) {
                var b = a(this)
                  , d = b.data('display');
                c.find('ul').append(a('<li></li>').attr('data-value', b.val()).attr('data-display', d || null).addClass('option' + (b.is(':selected') ? ' selected' : '') + (b.is(':disabled') ? ' disabled' : '')).html(b.text()))
            })
        }
        a(document).off('.nice_select'),
        a(document).on('click.nice_select', '.nice-select', function(c) {
            var b = a(this);
            a('.nice-select').not(b).removeClass('open'),
            b.toggleClass('open'),
            b.hasClass('open') ? (b.find('.option'),
            b.find('.focus').removeClass('focus'),
            b.find('.selected').addClass('focus')) : b.focus()
        }),
        a(document).on('click.nice_select', function(b) {
            a(b.target).closest('.nice-select').length === 0 && a('.nice-select').removeClass('open').find('.option')
        }),
        a(document).on('click.nice_select', '.nice-select .option:not(.disabled)', function(e) {
            var b = a(this), c = b.closest('.nice-select'), d;
            c.find('.selected').removeClass('selected'),
            b.addClass('selected'),
            d = b.data('display') || b.text(),
            c.find('.current').text(d),
            c.prev('select').val(b.data('value')).trigger('change')
        }),
        a(document).on('keydown.nice_select', '.nice-select', function(c) {
            var b = a(this), d = a(b.find('.focus') || b.find('.list .option.selected')), e, f;
            if (c.keyCode == 32 || c.keyCode == 13)
                return b.hasClass('open') ? d.trigger('click') : b.trigger('click'),
                !1;
            if (c.keyCode == 40)
                return b.hasClass('open') ? (e = d.nextAll('.option:not(.disabled)').first(),
                e.length > 0 && (b.find('.focus').removeClass('focus'),
                e.addClass('focus'))) : b.trigger('click'),
                !1;
            if (c.keyCode == 38)
                return b.hasClass('open') ? (f = d.prevAll('.option:not(.disabled)').first(),
                f.length > 0 && (b.find('.focus').removeClass('focus'),
                f.addClass('focus'))) : b.trigger('click'),
                !1;
            if (c.keyCode == 27)
                b.hasClass('open') && b.trigger('click');
            else if (c.keyCode == 9)
                if (b.hasClass('open'))
                    return !1
        });
        var d = document.createElement('a').style;
        return d.cssText = 'pointer-events:auto',
        d.pointerEvents !== 'auto' && a('html').addClass('no-csspointerevents'),
        this
    }
}
)(jQuery)
