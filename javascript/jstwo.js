$(function () {
    /*Связываем переменную с кнопкой
    Создаем массив путей картинок для слайдера
    Инициализиуем счетчик массива
    */
    var but = document.getElementById('tk');
    var butTwo = document.getElementById('tk2');
    var butThree=document.getElementById('tk3');
    var butFour=document.getElementById('tk4');
    var projOne = ["media/images/proj/1.png", "media/images/proj/2.png"];
    var projTwo = ["media/images/proj/6.png", "media/images/proj/7.png"];
    var projThree = ["media/images/proj/org/1.jpg", "media/images/proj/org/2.jpg"];
    var projFour = ["media/images/proj/fss/1.jpg", "media/images/proj/fss/2.jpg"];
    var numImg = 0;
    var idOne="#fproj";
    var idTwo="#fprojTwo";
    var idThree="#fprojThree";
    var idFour="#fprojFour";
    /* Слайдер.*/
    function slider(mas, button, idSlide) {
        /*При нажатии на кнопку, срабатывает функция
        которая блокирует последующие нажатия кнопки до скрытия очередной картинки
        дабы избежать многократное нажатие*/
        // but.disabled = true;
        button.disabled = true;
        /*Анимация скрытия картинки с последующей ее заменой на очередную.
        Там же производится отключение кнопки на время анимации
        */
        $(idSlide).fadeOut(2000, function () {

            $(idSlide).attr('src', mas[numImg]);
            // but.disabled = false;
            button.disabled = false;

        });
        /* Появление картинки */
        $(idSlide).fadeIn(1000);
        /* При достижении конца массива, обнуляем счетчик, чтобы начать перебор заново */
        if (numImg == mas.length - 1) {

            numImg = 0;

        } else {

            numImg++;

        }
        /*Отладка*/
        console.log(numImg + " = " + mas[numImg]);
    }
    /* Обработчик нажатия кнопки, вызывающий функцию Слайдер */
    but.addEventListener('click', function () {
        slider(projOne, but,idOne);
    });
    butTwo.addEventListener('click', function () {
        slider(projTwo, butTwo, idTwo);
    });
    butThree.addEventListener('click', function () {
        slider(projThree, butThree,idThree);
    });
    butFour.addEventListener('click', function () {
        slider(projFour, butFour, idFour);
    });
})