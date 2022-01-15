window.onload = function () {
    SmoothScroll({
        // Время скролла 400 = 0.4 секунды
        animationTime    : 800,
        // Размер шага в пикселях
        stepSize         : 75,
        // Ускорение
        accelerationDelta : 30,
        // Максимальное ускорение
        accelerationMax   : 2,
        // Поддержка клавиатуры
        keyboardSupport   : true,
        // Шаг скролла стрелками на клавиатуре в пикселях
        arrowScroll       : 50,

        pulseAlgorithm   : true,
        pulseScale       : 4,
        pulseNormalize   : 1,

        // Поддержка тачпада
        touchpadSupport   : true,
    })

    AOS.init();
    var ProgressBarOptions = {
        strokeWidth: 2.5,
        borderRadius: 3,
        easing: 'easeInOut',
        duration: 1400,
        color: '#FF7939',
        trailColor: '#EAEAEA',
        trailWidth: 5,
        svgStyle: {width: '100%', height: 'auto'},
        text: {
            autoStyleContainer: true
        },
        step: (state, bar) => {
            bar.setText(Math.round(bar.value() * 100) + ' %');
        }
    }
    var bar1 = new ProgressBar.Line('#teacher-skills__bar-1', ProgressBarOptions);
    var bar2 = new ProgressBar.Line('#teacher-skills__bar-2', ProgressBarOptions);
    var bar3 = new ProgressBar.Line('#teacher-skills__bar-3', ProgressBarOptions);
    let is_animated1 = false;
    let is_animated2 = false;
    let is_animated3 = false;
    $(window).scroll(function () {
        if (($(window).scrollTop() > $('#teacher-skills__bar-1').offset().top - $(window).height() + 200) && (!is_animated1)) {
            bar1.animate(0.97);
            is_animated1 = true;
        }
        if (($(window).scrollTop() > $('#teacher-skills__bar-2').offset().top - $(window).height() + 200) && (!is_animated2)) {
            bar2.animate(0.95);
            is_animated2 = true;
        }
        if (($(window).scrollTop() > $('#teacher-skills__bar-3').offset().top - $(window).height() + 200) && (!is_animated3)) {
            bar3.animate(1.0);
            is_animated3 = true;
        }
    });
    $('a[href^="#"]').on('click', function () {
        let href = $(this).attr('href');

        $('html, body').animate({
            scrollTop: $(href).offset().top
        }, {
            duration: 1000,   // по умолчанию «400»
            easing: "swing" // по умолчанию «swing»
        });

        return false;
    });
}
