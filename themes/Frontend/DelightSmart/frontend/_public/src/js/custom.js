document.asyncReady(function () {
    $('#change-theme').on('click', () => {
        const timeBlur = setTimeout(function () {
            $('body').removeClass('animation-blur');
        }, 500);
        if($('body').hasClass('dark-them')) {
            $('body').addClass('white-theme');
            $('body').removeClass('dark-them');
            $('body').addClass('animation-blur');
            timeBlur();
            clearTimeout(timeBlur);
        } else {
            $('body').removeClass('white-theme');
            $('body').addClass('dark-them');
            $('body').removeClass('animation-blur');
            $('body').addClass('animation-blur');
            timeBlur();
            clearTimeout(timeBlur);
        }
    });
});