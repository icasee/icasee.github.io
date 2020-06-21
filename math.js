if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'app'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'app'.");
}if (typeof this['kotlinx-html-js'] === 'undefined') {
  throw new Error("Error loading module 'app'. Its dependency 'kotlinx-html-js' was not found. Please, check whether 'kotlinx-html-js' is loaded prior to 'app'.");
}var app = function (_, Kotlin, $module$kotlinx_html_js) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var toInt = Kotlin.kotlin.text.toInt_pdl1vz$;
  var throwCCE = Kotlin.throwCCE;
  var numberToInt = Kotlin.numberToInt;
  var get_create = $module$kotlinx_html_js.kotlinx.html.dom.get_create_4wc2mh$;
  var set_id = $module$kotlinx_html_js.kotlinx.html.set_id_ueiko3$;
  var Unit = Kotlin.kotlin.Unit;
  var equals = Kotlin.equals;
  var set_onSubmitFunction = $module$kotlinx_html_js.kotlinx.html.js.set_onSubmitFunction_pszlq2$;
  var InputType = $module$kotlinx_html_js.kotlinx.html.InputType;
  var println = Kotlin.kotlin.io.println_s8jyv4$;
  var takeLast = Kotlin.kotlin.text.takeLast_6ic1pp$;
  var toString = Kotlin.kotlin.text.toString_dqglrj$;
  var toString_0 = Kotlin.kotlin.text.toString_if0zpk$;
  var IntRange = Kotlin.kotlin.ranges.IntRange;
  var Pair = Kotlin.kotlin.Pair;
  var Math_0 = Math;
  var enumEncode = $module$kotlinx_html_js.kotlinx.html.attributes.enumEncode_m4whry$;
  var attributesMapOf = $module$kotlinx_html_js.kotlinx.html.attributesMapOf_alerag$;
  var INPUT_init = $module$kotlinx_html_js.kotlinx.html.INPUT;
  var visitTag = $module$kotlinx_html_js.kotlinx.html.visitTag_xwv8ym$;
  var attributesMapOf_0 = $module$kotlinx_html_js.kotlinx.html.attributesMapOf_jyasbz$;
  var H1_init = $module$kotlinx_html_js.kotlinx.html.H1;
  var FORM_init = $module$kotlinx_html_js.kotlinx.html.FORM;
  var SPAN_init = $module$kotlinx_html_js.kotlinx.html.SPAN;
  var DIV_init = $module$kotlinx_html_js.kotlinx.html.DIV;
  var visitTagAndFinalize = $module$kotlinx_html_js.kotlinx.html.visitTagAndFinalize_g9qte5$;
  var Random = Kotlin.kotlin.random.Random;
  var random = Kotlin.kotlin.ranges.random_xmiyix$;
  function visit$lambda(closure$block) {
    return function ($receiver) {
      closure$block($receiver);
      return Unit;
    };
  }
  function input$lambda($receiver) {
    return Unit;
  }
  function visit$lambda_0(closure$block) {
    return function ($receiver) {
      closure$block($receiver);
      return Unit;
    };
  }
  function h1$lambda($receiver) {
    return Unit;
  }
  function visit$lambda_1(closure$block) {
    return function ($receiver) {
      closure$block($receiver);
      return Unit;
    };
  }
  function form$lambda($receiver) {
    return Unit;
  }
  function visit$lambda_2(closure$block) {
    return function ($receiver) {
      closure$block($receiver);
      return Unit;
    };
  }
  function span$lambda($receiver) {
    return Unit;
  }
  function visitAndFinalize$lambda(closure$block) {
    return function ($receiver) {
      closure$block($receiver);
      return Unit;
    };
  }
  function div$lambda($receiver) {
    return Unit;
  }
  var timer;
  var answer;
  var score;
  var total;
  function get_question() {
    return document.getElementById('question');
  }
  function get_status() {
    return document.getElementById('status');
  }
  function get_text() {
    var tmp$;
    return Kotlin.isType(tmp$ = document.getElementById('text'), HTMLInputElement) ? tmp$ : throwCCE();
  }
  function get_power() {
    var x = score / total * 100;
    var b = numberToInt(Math_0.ceil(x));
    return Math_0.max(0, b);
  }
  function main$lambda$lambda($receiver) {
    set_id($receiver, 'question');
    $receiver.unaryPlus_pdl1vz$('\u6E96\u5099');
    return Unit;
  }
  function main$lambda$lambda$lambda(it) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    var $receiver = (tmp$ = get_text()) != null ? tmp$.value : null;
    if (!($receiver == null || $receiver.length === 0)) {
      if (equals((tmp$_0 = get_text()) != null ? tmp$_0.value : null, answer.toString())) {
        score = score + 1 | 0;
      } else {
        score = score - 1 | 0;
      }
      (tmp$_1 = get_status()) != null ? (tmp$_1.innerHTML = get_power().toString() + '%') : null;
      (tmp$_2 = get_text()) != null ? (tmp$_2.value = '') : null;
    }if (get_power() >= 100) {
      window.alert(getKeyCode());
      window.location.reload();
    }startGame();
    it.preventDefault();
    return Unit;
  }
  function main$lambda$lambda$lambda_0($receiver) {
    $receiver.autoComplete = false;
    set_id($receiver, 'text');
    return Unit;
  }
  function main$lambda$lambda_0($receiver) {
    set_onSubmitFunction($receiver, main$lambda$lambda$lambda);
    var type = InputType.text;
    visitTag(new INPUT_init(attributesMapOf(['type', type != null ? enumEncode(type) : null, 'formenctype', null != null ? enumEncode(null) : null, 'formmethod', null != null ? enumEncode(null) : null, 'name', null, 'class', null]), $receiver.consumer), visit$lambda(main$lambda$lambda$lambda_0));
    return Unit;
  }
  function main$lambda$lambda_1($receiver) {
    set_id($receiver, 'status');
    $receiver.unaryPlus_pdl1vz$('0');
    return Unit;
  }
  function main$lambda($receiver) {
    visitTag(new H1_init(attributesMapOf_0('class', null), $receiver.consumer), visit$lambda_0(main$lambda$lambda));
    visitTag(new FORM_init(attributesMapOf(['action', null, 'enctype', null != null ? enumEncode(null) : null, 'method', null != null ? enumEncode(null) : null, 'class', null]), $receiver.consumer), visit$lambda_1(main$lambda$lambda_0));
    visitTag(new SPAN_init(attributesMapOf_0('class', null), $receiver.consumer), visit$lambda_2(main$lambda$lambda_1));
    return Unit;
  }
  function main(args) {
    var root = document.getElementById('root');
    var $receiver = get_create(document);
    var div = visitTagAndFinalize(new DIV_init(attributesMapOf_0('class', 'container'), $receiver), $receiver, visitAndFinalize$lambda(main$lambda));
    root != null ? root.appendChild(div) : null;
    println('69, mathTotal=' + total);
  }
  function getKeyCode() {
    var a = Kotlin.Long.fromNumber((new Date()).getTime());
    var b = 10;
    var d = '8' + takeLast(a.toString(), 3);
    var e = toString(toInt(d + b), 35);
    var f = toString_0(a, 35);
    return (e + 'z' + f).toUpperCase();
  }
  function startGame$lambda() {
    showQuestion();
    return Unit;
  }
  function startGame() {
    showQuestion();
    window.clearTimeout(timer);
    timer = window.setTimeout(startGame$lambda, 15000);
  }
  function showQuestion() {
    var tmp$, tmp$_0;
    var a = random(new IntRange(1, 10), Random.Default);
    var b = random(new IntRange(1, 10), Random.Default);
    var c = random(new IntRange(10, 99), Random.Default);
    switch (random(new IntRange(0, 4), Random.Default)) {
      case 1:
        tmp$ = new Pair(a + b | 0, a.toString() + ' + ' + b);
        break;
      case 2:
        tmp$ = new Pair(c - b | 0, c.toString() + ' - ' + b);
        break;
      case 3:
        tmp$ = new Pair(Kotlin.imul(a, b), a.toString() + ' x ' + b);
        break;
      case 4:
        tmp$ = new Pair(Kotlin.imul(a, b) / a | 0, Kotlin.imul(a, b).toString() + ' \xF7 ' + a);
        break;
      default:tmp$ = new Pair((a + b | 0) % a, (a + b | 0).toString() + ' % ' + a);
        break;
    }
    var tmp$_1 = tmp$;
    var k = tmp$_1.component1()
    , z = tmp$_1.component2();
    answer = k;
    (tmp$_0 = get_question()) != null ? (tmp$_0.innerHTML = z) : null;
  }
  $$importsForInline$$['kotlinx-html-js'] = $module$kotlinx_html_js;
  _.main_kand9s$ = main;
  _.getKeyCode = getKeyCode;
  _.startGame = startGame;
  _.showQuestion = showQuestion;
  timer = 0;
  answer = 0;
  score = 0;
  var tmp$, tmp$_0;
  total = (tmp$_0 = (tmp$ = localStorage['mathTotal']) != null ? toInt(tmp$) : null) != null ? tmp$_0 : 20;
  main([]);
  Kotlin.defineModule('app', _);
  return _;
}(typeof app === 'undefined' ? {} : app, kotlin, this['kotlinx-html-js']);
