document.asyncReady(function () {
    function themeClass(haClass, adClass, rmClass, blur, rmSecendClass) {
        const timeBlur = setTimeout(function () {
            $('body').removeClass('animation-blur');
        }, 500);
        $('body').hasClass(haClass);
        $('body').addClass(adClass);
        $('body').removeClass(rmClass);
        $('body').addClass(blur);
        $('body').removeClass(rmSecendClass);
        timeBlur();
        clearTimeout(timeBlur);
    }
    $('#on').on('click', () => {
        themeClass('', 'dark-theme', 'white-theme', 'animation-blur', 'mixed');
    });
    $('#na').on('click', () => {
        themeClass('', 'mixed', 'white-theme', 'animation-blur', 'dark-theme');
    });
    $('#off').on('click', () => {
        themeClass('', 'white-theme', 'mixed', 'animation-blur', 'dark-theme');
    });

    if ($('body').hasClass('mixed')) {
        $('body').removeClass('dark-theme');
    } else {
        $('#change-theme').on('click', () => {
            if ($('body').hasClass('dark-theme')) {
                themeClass('dark-theme', 'white-theme', 'dark-theme', 'animation-blur');
            } else {
                themeClass('white-theme', 'dark-theme', 'animation-blur', 'animation-blur');
            }
        });
    }
});
