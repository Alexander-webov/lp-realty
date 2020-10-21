$(function () {

  $('.offers-slider').slick({
    prevArrow: '<button type="button" class="slick-btn slick-prev"><img src="img/arrow-prev.svg" alt=""></button>',
    nextArrow: '<button type="button" class="slick-btn slick-next"> <img src="img/arrow-next.svg" alt=""></button>',
    dots: true,
    fade: true,
    responsive: [{
        breakpoint: 768,
        settings: {
          dots: false,
        }
      },
      {
        breakpoint: 480,
        settings: {
          dots: false,
        }
      }
    ]
  });

  $('.mortgage-tabs a').click(function () {
    $(this).parents('.mortgage-box').find('.mortgage-items').addClass('hide');
    $('.mortgage-tab').parent().siblings().removeClass('active');
    let id = $(this).attr('href');
    $(id).removeClass('hide');
    $('.mortgage-tab').removeClass('active');
    $(this).addClass('active');
    return false;
  });

  $('.listDocs-item__top').on('click', function () {
    $(this).find('.listDocs-item__top-arrows').toggleClass('active');
    $(this).parent('.listDocs-item')
      .find('.listDocs-item__descr')
      .slideToggle(1000);

  });


  /* проггрес бар */
  let formName = $('.feedback-box__form-name');
  let formPhone = $('.feedback-box__form-tel');
  let formEmail = $('.feedback-box__form-email');
  let formChek = $('.feedback-box__form-check');


  $('.feedback-box__form').on('input', function () {
    if (formName.val().length > 2 &&
      formPhone.val() == '' &&
      formEmail.val() == '' ||
      formName.val() == '' &&
      formPhone.val().length > 2 &&
      formEmail.val() == '' ||
      formName.val() == '' &&
      formPhone.val() == '' &&
      formEmail.val().length > 2) {
      $('.feedback-box__title').text('Заполните контактную информацию (шаг 2 из 3)');
      $('.feedback-box__progress progress').val("33");


    } else if (formName.val().length > 2 &&
      formPhone.val().length > 2 &&
      formEmail.val() == '' ||
      formName.val().length > 2 &&
      formPhone.val() == '' &&
      formEmail.val().length > 2 ||
      formName.val() == '' &&
      formPhone.val().length > 2 &&
      formEmail.val().length > 2

    ) {
      $('.feedback-box__title').text('Заполните контактную информацию (шаг 3 из 3)');
      $('.feedback-box__progress progress').val("66");
    } else if (formName.val().length > 2 &&
      formPhone.val().length > 2 &&
      formEmail.val().length > 2
    ) {
      $('.feedback-box__title').text('Отлично! Примите условия. И отправьте заявку.');
      $('.feedback-box__progress progress').val("100");

    }
  });










  /* Калькулятор */
  let priceObject = $('#step1');
  let initialPayment = $('#step2');
  let percentBank = $('#step3');
  let term = $('#step4');
  $('#sum').on('input', function () {
    priceObject.text($('#sum').val() + ' руб.');
  });
  $('#price').on('input', function () {
    initialPayment.text($('#price').val() + ' руб.');
  });
  $('#percent').on('input', function () {
    percentBank.text($('#percent').val() + ' %');
  });
  $('#term').on('input', function () {
    term.text($('#term').val() + ' лет');
  });
  $('#resultBtn').on('click', function () {
    //sum1 = Цена объекта - Первоначальный взнос = остаток
    let sum1 = +$('#sum').val() - +$('#price').val();

    //sum2 = Цена объекта - Первоначальный взнос
    // = остаток / 12 месяцев
    let sum2 = sum1 / (+$('#term').val() * 12);
    //sum3 = Процентная ставка в цифрах
    let sum3 = sum2 / 100 * +$('#percent').val();
    // eжумесечный платеж
    let sum4 = sum2 + sum3;
    $('#calcResPlayment').text(parseInt(sum4));
    //итог переплаты  eжумесечный платеж * месяцев - стоимость объекта от которого мы вычли наш первый взнос
    let pereplata = sum4 * (+$('#term').val() * 12) - (+$('#sum').val() - +$('#price').val());
    $('#calcResOverpayment').text(parseInt(pereplata));
  });

  $('.btn-modal').magnificPopup({});

  $('.header-menu__burger').on('click', function () {
    $('.header-menu__list li').slideToggle()
  });



});