(function ($) {
    $.fn.affix = function (_options) {
        if (this.data('affixInited')) {
            this.data('affixOptions').top = _options.top || 0
            checkScrollTop.call(this)
            return
        }
        this.data('affixInited', true)

        this.data('affixOptions', {
            top: _options.top || 0
        })

        $(window).on('scroll', checkScrollTop.bind(this))


        function checkScrollTop() {
            if ($(window).scrollTop() < this.data('affixOptions').top) {
                this.removeClass('affix-on')
            } else {
                this.addClass('affix-on')
            }
        }

        checkScrollTop.call(this)

    }
})(jQuery)
