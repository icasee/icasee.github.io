if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'fcj_word'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'fcj_word'.");
}if (typeof this['kotlinx-html-js'] === 'undefined') {
  throw new Error("Error loading module 'fcj_word'. Its dependency 'kotlinx-html-js' was not found. Please, check whether 'kotlinx-html-js' is loaded prior to 'fcj_word'.");
}var fcj_word = function (_, Kotlin, $module$kotlinx_html_js) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var trimIndent = Kotlin.kotlin.text.trimIndent_pdl1vz$;
  var lazy = Kotlin.kotlin.lazy_klfg04$;
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_287e2$;
  var toInt = Kotlin.kotlin.text.toInt_6ic1pp$;
  var equals = Kotlin.equals;
  var takeLast = Kotlin.kotlin.text.takeLast_6ic1pp$;
  var numberToInt = Kotlin.numberToInt;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var NoSuchElementException_init = Kotlin.kotlin.NoSuchElementException;
  var Math_0 = Math;
  var shuffle = Kotlin.kotlin.collections.shuffle_vvxzk3$;
  var get_indices = Kotlin.kotlin.collections.get_indices_m7z4lg$;
  var step = Kotlin.kotlin.ranges.step_xsgg7u$;
  var throwCCE = Kotlin.throwCCE;
  var toInt_0 = Kotlin.kotlin.text.toInt_pdl1vz$;
  var get_create = $module$kotlinx_html_js.kotlinx.html.dom.get_create_4wc2mh$;
  var Unit = Kotlin.kotlin.Unit;
  var println = Kotlin.kotlin.io.println_s8jyv4$;
  var set_id = $module$kotlinx_html_js.kotlinx.html.set_id_ueiko3$;
  var toString = Kotlin.toString;
  var set_onClickFunction = $module$kotlinx_html_js.kotlinx.html.js.set_onClickFunction_pszlq2$;
  var toString_0 = Kotlin.kotlin.text.toString_dqglrj$;
  var toString_1 = Kotlin.kotlin.text.toString_if0zpk$;
  var attributesMapOf = $module$kotlinx_html_js.kotlinx.html.attributesMapOf_jyasbz$;
  var DIV_init = $module$kotlinx_html_js.kotlinx.html.DIV;
  var visitTagAndFinalize = $module$kotlinx_html_js.kotlinx.html.visitTagAndFinalize_g9qte5$;
  var SPAN_init = $module$kotlinx_html_js.kotlinx.html.SPAN;
  var visitTag = $module$kotlinx_html_js.kotlinx.html.visitTag_xwv8ym$;
  var BR_init = $module$kotlinx_html_js.kotlinx.html.BR;
  var enumEncode = $module$kotlinx_html_js.kotlinx.html.attributes.enumEncode_m4whry$;
  var attributesMapOf_0 = $module$kotlinx_html_js.kotlinx.html.attributesMapOf_alerag$;
  var BUTTON_init = $module$kotlinx_html_js.kotlinx.html.BUTTON;
  var TD_init = $module$kotlinx_html_js.kotlinx.html.TD;
  var TR_init = $module$kotlinx_html_js.kotlinx.html.TR;
  var TABLE_init = $module$kotlinx_html_js.kotlinx.html.TABLE;
  var IMG_init = $module$kotlinx_html_js.kotlinx.html.IMG;
  var SOURCE_init = $module$kotlinx_html_js.kotlinx.html.SOURCE;
  var AUDIO_init = $module$kotlinx_html_js.kotlinx.html.AUDIO;
  function keys$lambda() {
    var $receiver = ArrayList_init();
    kc($receiver, trimIndent('["Q", "\u624B", "W", "\u7530", "E", "\u6C34", "R", "\u53E3", "T", "\u5EFF", "Y", "\u535C", "U", "\u5C71", "I", "\u6208", "O", "\u4EBA", "P", "\u5FC3", "2R", "BR", "A", "\u65E5", "S", "\u5C38", "D", "\u6728", "F", "\u706B", "G", "\u571F", "H", "\u7AF9", "J", "\u5341", "K", "\u5927", "L", "\u4E2D", "2R", "BR", "X", "\u96E3", "C", "\u91D1", "V", "\u5973", "SPACE", "\u7A7A\u767D\u9375", "B", "\u6708", "N", "\u5F13", "M", "\u4E00"]'));
    return $receiver;
  }
  var keys;
  function get_keys() {
    return keys.value;
  }
  function Dict(key, value) {
    this.key = key;
    this.value = value;
    this.code = 'xxx';
  }
  Object.defineProperty(Dict.prototype, 'id', {
    get: function () {
      return toInt(this.key, 36);
    }
  });
  Object.defineProperty(Dict.prototype, 'quick', {
    get: function () {
      var $receiver = get_keys();
      var first$result;
      first$break: do {
        var tmp$;
        tmp$ = $receiver.iterator();
        while (tmp$.hasNext()) {
          var element = tmp$.next();
          if (equals(element.key, this.value.substring(0, 1))) {
            first$result = element;
            break first$break;
          }}
        throw new NoSuchElementException_init('Collection contains no element matching the predicate.');
      }
       while (false);
      var first = first$result.value;
      var $receiver_0 = get_keys();
      var first$result_0;
      first$break: do {
        var tmp$_0;
        tmp$_0 = $receiver_0.iterator();
        while (tmp$_0.hasNext()) {
          var element_0 = tmp$_0.next();
          if (equals(element_0.key, takeLast(this.value, 1))) {
            first$result_0 = element_0;
            break first$break;
          }}
        throw new NoSuchElementException_init('Collection contains no element matching the predicate.');
      }
       while (false);
      var last = first$result_0.value;
      return first + last;
    }
  });
  Object.defineProperty(Dict.prototype, 'store', {
    get: function () {
      var x = this.id / 500.0;
      var end = numberToInt(Math_0.ceil(x) * 500);
      var start = end - 499 | 0;
      return start.toString() + '-' + end + '/' + this.id;
    }
  });
  Dict.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Dict',
    interfaces: []
  };
  Dict.prototype.component1 = function () {
    return this.key;
  };
  Dict.prototype.component2 = function () {
    return this.value;
  };
  Dict.prototype.copy_puj7f4$ = function (key, value) {
    return new Dict(key === void 0 ? this.key : key, value === void 0 ? this.value : value);
  };
  Dict.prototype.toString = function () {
    return 'Dict(key=' + Kotlin.toString(this.key) + (', value=' + Kotlin.toString(this.value)) + ')';
  };
  Dict.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.key) | 0;
    result = result * 31 + Kotlin.hashCode(this.value) | 0;
    return result;
  };
  Dict.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.key, other.key) && Kotlin.equals(this.value, other.value)))));
  };
  function easy$lambda() {
    var $receiver = ArrayList_init();
    kc($receiver, trimIndent('["EC","MG","1ZP","EI","4V","MM","1T2","RA","Q","MY","17X","ME","SH","UJ","3V","NL","OC","DO","V9","AP","70","VE","6A","KR","85","EN","1FV","GG","2H5","TB","221","HM","TR","IM","1R","MJ","WO","ER","8W","MF","2J","OM","GW","RE","UI","QR","1J7","DG","LD","EG","WT","EI","9K","OG","BC","WR","1R5","CJ","WM","ED","2N","OY","159","QR","133","KG","XR","MB","189","UF","N9","JJ","TG","PA","SG","UW","DM","EV","7Y","JD","7U","DJ","2E0","DF","2XB","CR","VC","BB","UC","QW","84","EJ","7V","DM","8V","MR","1JQ","JD","16N","DM","3G","HG","1W4","LP","IP","SE","L1","EA","O9","YF","6F","RC","IH","JD","152","WP","2CN","CO","M7","PW","N2","MT","3I","KI","1IV","AV","TE","PG","108","AN","AV","HR","1M","MM","Q2","HR","WR","EW","8J","LW","1DG","OA","UF","QR","N7","RO","1BD","TR","118","OD","FP","OW","VU","DJ","7M","QC","ON","OA","TB","LP","FG","OD","13J","VK","VO","DE","GR","RG","LB","EL","165","DM","CV","PA","FQ","OG","IV","UE","12K","RC","VJ","DD","5R","UU","7R","AM","4L","KK","10J","QB","W1","WD","1OK","BK","L4","ED","CT","AJ","8U","OK","DW","FD","C9","UN","6S","SR","WL","ER","TK","PR","X9","FF","SC","SU","9O","OK","1HO","PB","L7","EK","WG","EA","AX","JK","1HX","TP","T4","VN","GV","RK","7W","DU","WX","ET","1B1","WB","WC","ER","TD","PM","1GG","JV","EE","HR","3H","HK","IB","VP","DG","EJ","17T","EC","X1","EP","AT","GR","P","MM","BA","WK","JO","IT","41","JE","1AW","JB","4P","IK","175","WP","4E","PP","7J","PH","BO","KN","VS","DG","14W","PF","12J","RR","1HZ","WP","2G","OJ","ML","BJ","CW","PA","YS","BE","34","OP","QU","WR","4","MN","10U","OB","1GR","SB","X4","EG","4Q","MG","LA","EI","7K","IH","15K","QA","6B","LK","D1","DY","F9","OR","57","OJ","VK","DF","RH","VM","2BY","DB","AW","HR","3J","MK","J3","IP","3","JU","15","HJ","LT","ME","6D","PR","16E","DR","I6","VE","I1","BV","V1","AB","C3","JV","8P","HA","9I","OD","JY","QI","SX","IR","8","MM","X5","ER","66","GI","S8","FR","1V1","UB","16F","DW","127","RG","1DC","HA","KK","DG","UQ","QL","DE","EM","15V","AD","HF","WD","1E8","OA","2K","ON","14M","IP","1R8","CN","VX","DW","UO","QU","GP","RD","1BQ","TW","U7","QR","1AZ","LB","EK","LI","V0","AA","9P","OL","TP","PP","1ZI","ED","RF","HV","DT","MA","QB","RD","GJ","HR","1GY","UB","3TB","CI","13I","VV","CQ","QR","A6","OG","IR","SP","Y5","OR","RT","VP","15E","QV","8Y","HD","7I","NI","16U","ED","40","QU","7N","QN","WF","EI","V6","AK","1AV","BL","5E","OU","PM","YJ","6V","WO","1PD","TR","19","JM","MB","IK","56","OG","4Y","PT","9N","OI","OF","OG","FC","OR","HV","OG","1AI","TK","1YM","DB","8C","MI","ZF","TP","1JT","YD","167","DA","D2","HD","VF","DA","NT","WG","BU","VR","IN","FB","4U","BM","VB","TA","17Q","EA","S1","JM","8F","TM","4A","NO","QD","RR","BE","GG","DP","KF","QX","GM","GI","HR","6E","RC","CZ","KB","1BO","TU","GT","RR","B2","RG","I4","VK","RO","VR","1UD","VA","CN","IJ","HM","GF","C7","FK","TF","PI","X8","BF"]'));
    return $receiver;
  }
  var easy;
  function get_easy() {
    return easy.value;
  }
  function words$lambda() {
    var $receiver = ArrayList_init();
    $receiver.addAll_brywnq$(get_easy());
    $receiver.addAll_brywnq$(get_normal());
    shuffle($receiver);
    return $receiver;
  }
  var words;
  function get_words() {
    return words.value;
  }
  function kc($receiver, dataString) {
    var tmp$;
    var words = JSON.parse(dataString);
    tmp$ = step(get_indices(words), 2).iterator();
    while (tmp$.hasNext()) {
      var x = tmp$.next();
      $receiver.add_11rb$(new Dict(words[x], words[x + 1 | 0]));
    }
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
  function visit$lambda(closure$block) {
    return function ($receiver) {
      closure$block($receiver);
      return Unit;
    };
  }
  function span$lambda($receiver) {
    return Unit;
  }
  function visit$lambda_0(closure$block) {
    return function ($receiver) {
      closure$block($receiver);
      return Unit;
    };
  }
  function br$lambda($receiver) {
    return Unit;
  }
  function visit$lambda_1(closure$block) {
    return function ($receiver) {
      closure$block($receiver);
      return Unit;
    };
  }
  function button$lambda($receiver) {
    return Unit;
  }
  function visit$lambda_2(closure$block) {
    return function ($receiver) {
      closure$block($receiver);
      return Unit;
    };
  }
  function div$lambda_0($receiver) {
    return Unit;
  }
  function visit$lambda_3(closure$block) {
    return function ($receiver) {
      closure$block($receiver);
      return Unit;
    };
  }
  function td$lambda($receiver) {
    return Unit;
  }
  function visit$lambda_4(closure$block) {
    return function ($receiver) {
      closure$block($receiver);
      return Unit;
    };
  }
  function tr$lambda($receiver) {
    return Unit;
  }
  function visit$lambda_5(closure$block) {
    return function ($receiver) {
      closure$block($receiver);
      return Unit;
    };
  }
  function table$lambda($receiver) {
    return Unit;
  }
  function visit$lambda_6(closure$block) {
    return function ($receiver) {
      closure$block($receiver);
      return Unit;
    };
  }
  function img$lambda($receiver) {
    return Unit;
  }
  function visit$lambda_7(closure$block) {
    return function ($receiver) {
      closure$block($receiver);
      return Unit;
    };
  }
  function source$lambda($receiver) {
    return Unit;
  }
  function visit$lambda_8(closure$block) {
    return function ($receiver) {
      closure$block($receiver);
      return Unit;
    };
  }
  function audio$lambda($receiver) {
    return Unit;
  }
  var index;
  var imageUrl;
  var audioUrl;
  function get_currentWord() {
    return get_words().get_za3lpa$(index);
  }
  function get_image() {
    var tmp$;
    return Kotlin.isType(tmp$ = document.querySelector('div.wrap>img'), HTMLElement) ? tmp$ : throwCCE();
  }
  function get_source() {
    return document.querySelector('source');
  }
  function get_audio() {
    var tmp$;
    return Kotlin.isType(tmp$ = document.querySelector('audio'), HTMLAudioElement) ? tmp$ : throwCCE();
  }
  function get_text() {
    return document.querySelector('div.text');
  }
  var inputText;
  function get_inputText() {
    var tmp$, tmp$_0;
    return (tmp$_0 = (tmp$ = get_text()) != null ? tmp$.innerHTML : null) != null ? tmp$_0 : '';
  }
  function set_inputText(value) {
    var tmp$;
    inputText = value;
    (tmp$ = get_text()) != null ? (tmp$.innerHTML = value) : null;
  }
  function value($receiver) {
    var tmp$, tmp$_0;
    return (tmp$_0 = (tmp$ = localStorage.getItem($receiver)) != null ? toInt_0(tmp$) : null) != null ? tmp$_0 : 0;
  }
  function value_0($receiver, d) {
    var tmp$;
    var value_0 = value($receiver) + d | 0;
    (tmp$ = document.querySelector('td.' + $receiver)) != null ? (tmp$.innerHTML = value_0.toString()) : null;
    localStorage.setItem($receiver, value_0.toString());
  }
  function main$lambda($receiver) {
    addHeader($receiver);
    addWord($receiver);
    addKeyboard($receiver);
    addGuide($receiver, 'guideRight');
    addGuide($receiver, 'guideLeft');
    addAudio($receiver);
    return Unit;
  }
  function main$lambda_0() {
    onReady();
    return Unit;
  }
  function main(args) {
    setupKeyListener();
    var root = document.getElementById('root');
    var $receiver = get_create(document);
    var div = visitTagAndFinalize(new DIV_init(attributesMapOf('class', 'container'), $receiver), $receiver, visitAndFinalize$lambda(main$lambda));
    root != null ? root.appendChild(div) : null;
    println('69, baseUrl=' + get_easy());
    println('69, baseUrl=' + get_keys());
    window.setTimeout(main$lambda_0, 10);
  }
  function onReady() {
    var tmp$, tmp$_0, tmp$_1;
    set_inputText('');
    (tmp$ = get_image()) != null ? (tmp$.setAttribute('src', imageUrl + '/' + get_currentWord().store + '.PNG'), Unit) : null;
    (tmp$_0 = get_source()) != null ? (tmp$_0.setAttribute('src', audioUrl + '/' + get_currentWord().store + '.MP3'), Unit) : null;
    (tmp$_1 = get_audio()) != null ? (tmp$_1.load(), Unit) : null;
  }
  function onKeyEnterPress() {
    if (equals(get_inputText(), get_currentWord().quick)) {
      value_0('correct', 1);
      value_0('reward', 1);
    } else {
      value_0('wrong', 1);
      window.alert('\u6B63\u78BA\u7B54\u6848:' + get_currentWord().quick);
    }
    index = index + 1 | 0;
    value_0('current', 1);
    onReady();
  }
  function setupKeyListener$lambda(it) {
    if (Kotlin.isType(it, KeyboardEvent)) {
      console.log(57, it.code, it);
      switch (it.code) {
        case 'Backspace':
          var size = get_inputText().length;
          if (size > 0) {
            var $receiver = get_inputText();
            var endIndex = size - 1 | 0;
            set_inputText($receiver.substring(0, endIndex));
          }
          break;
        case 'Space':
        case 'Enter':
          onKeyEnterPress();
          break;
        case 'Shift':
          window.alert('yy');
          break;
        default:var key = document.getElementById(it.code);
          if (Kotlin.isType(key, HTMLElement)) {
            key.click();
          }
          break;
      }
    }return Unit;
  }
  function setupKeyListener() {
    document.addEventListener('keydown', setupKeyListener$lambda);
  }
  function addKeyboard$lambda$lambda$lambda$lambda$lambda(closure$dict) {
    return function (it) {
      var tmp$, tmp$_0;
      if (equals(closure$dict.key, 'SPACE'))
        onKeyEnterPress();
      else
        (tmp$_0 = get_text()) != null ? (tmp$_0.innerHTML = toString((tmp$ = get_text()) != null ? tmp$.innerHTML : null) + closure$dict.value) : null;
      return Unit;
    };
  }
  function addKeyboard$lambda$lambda$lambda$lambda$lambda_0(closure$dict) {
    return function ($receiver) {
      $receiver.unaryPlus_pdl1vz$(closure$dict.value);
      return Unit;
    };
  }
  function addKeyboard$lambda$lambda$lambda$lambda(closure$dict) {
    return function ($receiver) {
      set_id($receiver, 'Key' + closure$dict.key);
      $receiver.unaryPlus_pdl1vz$(closure$dict.key);
      set_onClickFunction($receiver, addKeyboard$lambda$lambda$lambda$lambda$lambda(closure$dict));
      var block = addKeyboard$lambda$lambda$lambda$lambda$lambda_0(closure$dict);
      visitTag(new SPAN_init(attributesMapOf('class', null), $receiver.consumer), visit$lambda(block));
      return Unit;
    };
  }
  function addKeyboard$lambda$lambda($receiver) {
    var tmp$;
    tmp$ = get_keys().iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      if (element.id === 99) {
        visitTag(new BR_init(attributesMapOf('class', null), $receiver.consumer), visit$lambda_0(br$lambda));
      } else {
        visitTag(new BUTTON_init(attributesMapOf_0(['formenctype', null != null ? enumEncode(null) : null, 'formmethod', null != null ? enumEncode(null) : null, 'name', null, 'type', null != null ? enumEncode(null) : null, 'class', null]), $receiver.consumer), visit$lambda_1(addKeyboard$lambda$lambda$lambda$lambda(element)));
      }
    }
    return Unit;
  }
  function addKeyboard$lambda($receiver) {
    visitTag(new DIV_init(attributesMapOf('class', 'wrap'), $receiver.consumer), visit$lambda_2(addKeyboard$lambda$lambda));
    return Unit;
  }
  function addKeyboard($receiver) {
    visitTag(new DIV_init(attributesMapOf('class', 'keyboard'), $receiver.consumer), visit$lambda_2(addKeyboard$lambda));
  }
  function getKeyCode() {
    var a = Kotlin.Long.fromNumber((new Date()).getTime());
    var b = 25;
    var d = '8' + takeLast(a.toString(), 3);
    var e = toString_0(toInt_0(d + b), 35);
    var f = toString_1(a, 35);
    return (e + 'z' + f).toUpperCase();
  }
  function addHeader$lambda$lambda$lambda$lambda$lambda$lambda(closure$d) {
    return function ($receiver) {
      $receiver.unaryPlus_pdl1vz$(closure$d.toString());
      return Unit;
    };
  }
  function addHeader$lambda$lambda$lambda$lambda$lambda$lambda_0(it) {
    if (window.confirm('\u4F60\u662F\u5426\u7528300\u7A4D\u5206\u63DB\u53D625\u5206\u9418\uFF1F')) {
      if (value('reward') > 300) {
        window.alert(getKeyCode());
        value_0('reward', -300);
      }}return Unit;
  }
  function addHeader$lambda$lambda$lambda$lambda$lambda(closure$d, closure$name) {
    return function ($receiver) {
      var block = addHeader$lambda$lambda$lambda$lambda$lambda$lambda(closure$d);
      visitTag(new SPAN_init(attributesMapOf('class', null), $receiver.consumer), visit$lambda(block));
      if (equals(closure$name, 'reward')) {
        set_onClickFunction($receiver, addHeader$lambda$lambda$lambda$lambda$lambda$lambda_0);
      }return Unit;
    };
  }
  function addHeader$lambda$lambda$lambda($receiver) {
    var $receiver_0 = ['current', 'correct', 'wrong', 'reward'];
    var tmp$;
    for (tmp$ = 0; tmp$ !== $receiver_0.length; ++tmp$) {
      var element = $receiver_0[tmp$];
      var d = value(element);
      visitTag(new TD_init(attributesMapOf('class', element), $receiver.consumer), visit$lambda_3(addHeader$lambda$lambda$lambda$lambda$lambda(d, element)));
    }
    return Unit;
  }
  function addHeader$lambda$lambda($receiver) {
    visitTag(new TR_init(attributesMapOf('class', null), $receiver.consumer), visit$lambda_4(addHeader$lambda$lambda$lambda));
    return Unit;
  }
  function addHeader$lambda$lambda_0($receiver) {
    $receiver.src = './table.png';
    return Unit;
  }
  function addHeader$lambda($receiver) {
    visitTag(new TABLE_init(attributesMapOf('class', null), $receiver.consumer), visit$lambda_5(addHeader$lambda$lambda));
    visitTag(new IMG_init(attributesMapOf_0(['alt', null, 'src', null, 'class', 'table']), $receiver.consumer), visit$lambda_6(addHeader$lambda$lambda_0));
    return Unit;
  }
  function addHeader($receiver) {
    visitTag(new DIV_init(attributesMapOf('class', 'header'), $receiver.consumer), visit$lambda_2(addHeader$lambda));
  }
  function addWord$lambda$lambda($receiver) {
    visitTag(new IMG_init(attributesMapOf_0(['alt', null, 'src', null, 'class', null]), $receiver.consumer), visit$lambda_6(img$lambda));
    visitTag(new DIV_init(attributesMapOf('class', 'text'), $receiver.consumer), visit$lambda_2(div$lambda_0));
    return Unit;
  }
  function addWord$lambda($receiver) {
    visitTag(new DIV_init(attributesMapOf('class', 'wrap'), $receiver.consumer), visit$lambda_2(addWord$lambda$lambda));
    return Unit;
  }
  function addWord($receiver) {
    visitTag(new DIV_init(attributesMapOf('class', 'word'), $receiver.consumer), visit$lambda_2(addWord$lambda));
  }
  function addAudio$lambda$lambda($receiver) {
    $receiver.type = 'audio/mpeg';
    $receiver.unaryPlus_pdl1vz$('Your browser does not support the audio element.');
    return Unit;
  }
  function addAudio$lambda($receiver) {
    $receiver.controls = true;
    visitTag(new SOURCE_init(attributesMapOf('class', null), $receiver.consumer), visit$lambda_7(addAudio$lambda$lambda));
    return Unit;
  }
  function addAudio($receiver) {
    visitTag(new AUDIO_init(attributesMapOf('class', null), $receiver.consumer), visit$lambda_8(addAudio$lambda));
  }
  function addGuide$lambda(closure$s) {
    return function ($receiver) {
      set_id($receiver, closure$s);
      return Unit;
    };
  }
  function addGuide($receiver, s) {
    visitTag(new DIV_init(attributesMapOf('class', 'guide'), $receiver.consumer), visit$lambda_2(addGuide$lambda(s)));
  }
  function normal$lambda() {
    var $receiver = ArrayList_init();
    kc($receiver, trimIndent('["2E6","OF","38U","YR","38V","YF","3WD","DW","2CO","GO","3VT","BP","F","SM","23P","TO","9X","OS","SV","II","1SI","MN","45I","TM","231","BU","20W","MU","XM","KM","27G","GR","3LA","TV","UP","QS","2C","YN","15B","QM","3LO","SK","1Z1","ED","142","HB","1XP","QF","25M","YG","3UW","WK","42G","OV","15L","QC","8O","NO","3DH","QW","2TT","SQ","1HN","PL","1KA","ER","YR","BB","1QU","YU","16T","ED","3EB","DK","2LB","TC","SS","GJ","396","CV","2KR","HG","WK","EE","1UI","VR","1PM","LJ","24","IO","12Q","SC","G","KS","1HB","IG","14O","NP","OV","OT","4C","MI","2HU","TR","1MN","IM","1WB","PV","28X","VB","119","OR","2O7","TP","4D2","YK","12F","RN","1GH","JR","204","EN","1KN","EE","YX","BS","2OU","YL","4G","HP","4DE","HA","3HN","BG","CF","IM","Z3","OR","1GD","VL","23","QJ","1IN","YK","SK","HB","79","SS","3C6","SE","24C","LK","203","EB","1LV","KB","3AL","OM","19O","MT","N","KI","3DF","QS","A8","MB","19K","HU","3KK","MA","3F2","EJ","4X","OM","1PO","LK","2DO","EK","1PL","LL","2M2","SG","FB","OM","1RT","JN","2CK","FD","14K","HR","11T","JS","2XU","AL","2FE","BD","1NS","OK","1P6","TR","RC","KR","2NQ","BE","1OI","BK","151","VP","3L4","MV","3SC","YD","1D7","MC","2ZS","RA","WS","ER","2NC","VF","1E3","OQ","1QD","MC","433","WG","1BE","TR","31H","MP","3ZJ","BO","FK","OI","FE","ON","2MC","RF","3PL","NF","NB","MV","2CI","DE","3L9","TG","1AX","LB","241","LP","1LS","KY","2B","TT","1QP","YR","T8","HG","YL","BV","1OG","BU","1HR","PR","1A8","VI","1LX","KH","2R5","NF","2G3","HR","39","TJ","WE","EJ","E7","BN","1AL","MV","1H4","UO","2OS","TK","2JX","MD","2FH","MB","1GN","JJ","5F","VO","18G","KV","1UP","JE","29S","HG","3CG","IL","U3","QY","3EJ","SO","RK","VM","12H","RR","1VI","LV","K","NK","FL","OR","1RL","ON","3ZW","TJ","GM","OR","45J","TX","1JW","MD","12R","YV","2Q1","EK","2XN","CR","1TT","FG","7H","LN","3B0","YN","1TU","GJ","2TO","TO","2IZ","BR","1DU","OR","87","IE","1RP","YR","1PX","YP","V","NO","1RV","OQ","1HK","PJ","S","CL","3M3","NA","104","SL","5X","PU","1C3","YJ","15O","JK","2KT","MG","11Q","KN","QL","RI","1QS","YK","1V6","UF","W","ON","3HZ","TI","YN","TU","3BL","RM","1O","SU","1FD","RK","2D0","EH","KZ","YH","2SZ","YD","3IM","LJ","ZJ","TM","3FJ","VK","XO","KR","3J1","YG","13W","ST","PG","YN","U4","QM","18M","MA","G1","BN","1HI","MP","3Q4","FU","2YS","GE","7","NN","3E7","DF","3JU","RI","3KL","MJ","1NE","JF","1JM","DU","28Q","OG","1XL","QU","HS","GS","4K4","SO","474","YG","4FN","DV","3BJ","RF","405","TL","46N","CC","9Q","OM","29","MI","1BF","TR","489","GM","2G8","VR","3BS","NG","CD","OQ","1YJ","DH","3LN","SP","11L","BN","1EP","AN","1FS","GB","1ZD","ED","1CB","GY","3NK","PP","NA","YJ","2H9","TE","3ZH","BR","2FD","ET","XT","MU","3TR","BG","222","HM","4M8","CC","3DY","AE","3XW","KU","2W","UK","1WM","PJ","1J2","BK","41H","YV","27K","RN","2F5","KM","2J8","GV","K6","QO","1SU","SR","3UG","SR","2K8","CM","2P","IU","Q3","HR","FA","OB","5H","RU","LJ","EN","23I","TN","13A","TV","AY","NR","3B9","RB","BN","KS","11R","TN","2A5","PU","2WZ","YN","2WY","YW","2FN","HB","2XL","CI","X0","ER","42U","WR","1V8","UR","1EG","BC","2LU","YN","2A8","PG","205","EC","2LR","OG","36B","AJ","2TV","BH","3NM","PG","4KV","YV","6Q","SR","14S","PI","2F4","KT","EN","YV","3F1","EA","UN","QS","P4","TC","2C5","DM","BI","GD","2NU","IP","3U0","TB","28U","VU","11B","OE","1CL","YR","1US","JU","2BB","FK","2FG","MU","PX","BE","1XM","QA","3W6","QX","3D","HE","3JC","BI","15C","QN","25G","YT","266","NI","2DH","EB","2BP","OA","TO","PM","2AV","QX","17P","ER","NP","RU","48F","HP","3ES","EU","1ZN","EP","LF","EU","2D6","EH","4AT","RA","Q7","RD","2KD","AD","2MR","WC","1H9","IJ","M4","MO","JE","PI","LH","EE","XU","MK","VZ","DS","31L","PH","F2","OQ","3BR","GM","1U9","DV","3OR","DI","3FB","VE","1XT","FK","JN","HI","30S","JH","471","OE","GD","SL","1T4","RE","HQ","GM","F1","OQ","12","MU","44V","HX","V2","AL","IK","JI","3N","IU","D","HN","2O9","YP","1UC","SV","3D7","YP","1BX","HN","UU","QT","36R","TO","3AZ","SH","3LQ","SR","AF","PN","2BO","AF","1G5","VV","243","LR","2I2","LR","UK","QH","ZU","YL","1LN","YW","2N2","GR","RW","YV","1U0","GG","1CS","YL","4DD","HI","I5","VS","15J","QR","1PW","YI","42","YK","325","FT","1EA","OR","1XX","JK","1UV","SI","L5","EK","1AC","VI","3A4","OT","1MQ","IR","1JU","YD","2OF","QE","1Q6","YU","2UE","TB","2AZ","QB","G7","RN","MW","NG","O8","YM","8R","BT","28S","GT","13O","JB","1G1","VK","1BM","TU","19F","BH","3N3","BG","HA","RN","3ZP","SB","358","HT","2B1","QK","1MI","MJ","333","EE","286","RI","HB","SR","36J","YB","3EA","DR","5J","BT","2AO","QH","3AT","OP","1FI","RR","3KH","NL","1UK","VB","260","AH","3N5","SG","2K9","CU","3VX","JC","4IL","CI","M8","WS","3MB","WG","2L1","MC","U6","QK","1N2","HH","SO","LR","271","UN","8S","BU","1DA","OV","1CZ","NA","1QV","YR","338","EL","3Z2","VC","KI","DH","2ON","QR","AL","PK","1BK","TI","1P7","TD","12P","RO","3VP","UC","5B","OD","M0","HD","GN","RU","NL","ML","QM","RU","403","TA","11P","JN","2H3","ON","38O","YL","4B","YM","1X8","QU","1U3","SG","15Z","AR","1YG","YG","LY","VF","48O","AC","1PF","TR","1PN","LJ","RV","VI","3FD","GF","1TA","RK","UR","QI","2PT","AO","1XR","BK","43G","QP","43D","QE","18V","WV","1CH","YA","1XK","QB","YQ","BE","2LN","OC","1BB","TR","3XA","FR","166","DT","2KH","AK","1FP","RN","1DP","OU","2R3","FD","32","PM","1SD","ON","EM","HN","2R0","FG","2P3","OA","32P","DR","284","RG","3O3","QM","1I7","QK","3IX","YA","17E","EU","25C","YR","200","EG","30Z","TI","1ET","VN","EJ","TK","1N3","QD","1H3","UE","2ZG","GR","1JZ","OD","1F4","MR","1P9","TG","1ID","QG","13Q","JG","H8","RO","1WJ","PB","VG","DU","UM","QR","1X1","QO","1QB","BI","3A6","SK","4B6","CF","1UG","VU","4HW","DG","2QM","ET","RS","VF","MP","TD","QS","RL","7B","YB","FT","CU","1Q2","YJ","2OZ","AE","1GI","JB","4CP","BP","2MO","RI","26T","OO","291","JW","T3","NI","3ZZ","TW","AE","MN","1F5","QR","HK","GY","2WU","YQ","42E","WC","1MC","ME","2KB","AA","2KU","MG","35O","VD","4DZ","LI","1JX","MA","P9","DN","39Y","DC","1AK","MI","114","OB","RG","JV","8G","HM","2LO","OC","1W7","OP","2GQ","LX","3K","QO","1WZ","QY","14C","NJ","46K","CC","2HW","LG","2VS","YG","30K","VF","1B7","TU","GF","AL","2BU","TB","3BV","VD","3DZ","JA","3VZ","JQ","1W8","PH","2Q","MU","1C8","YC","3T2","YQ","1IH","QO","MC","HU","11E","OR","RI","VT","438","SI","3AO","OO","3M","FH","49Z","BV","M1","KF","23H","TH","330","MO","2N6","HK","2BR","CA","22O","VU","18K","MT","12D","RN","3W0","QR","1QN","YD","3LK","OD","31Y","QK","2R7","TF","11M","CN","219","WC","341","SF","43J","BO","VD","BE","3MA","HE","SB","SG","3DN","QC","146","IE","FV","JU","4FQ","EG","112","ON","1DS","OM","19E","AU","QG","RL","OO","OT","3DO","QK","BT","VI","2CE","DQ","1PA","TA","JP","QU","2N0","GC","1ST","SR","B4","RB","2I","OL","14","PI","10V","ON","3IE","LW","2Z","PH","22E","VM","9U","OO","2M8","RD","135","QK","ZO","QV","2W4","BB","11O","FN","1VN","IF","97","OH","2W3","BJ","6","KN","B1","RI","34R","MR","1WC","PJ","2MV","GM","1CE","BJ","3KR","CU","1VR","BH","2FL","HJ","GO","RH","3ER","EG","X","PD","R1","GL","3V0","OC","1DW","OR","20K","YF","4HY","EP","1DI","OC","31X","QA","28E","GH","1XB","QG","13H","VT","E8","BS","3I4","TI","1LY","KK","RX","HD","OW","OV","G2","FN","31Z","QG","JT","QE","Z5","TH","1WD","PD","1RA","AO","AD","MN","3T1","YC","1UT","JE","AU","HR","QF","RR","ZI","TS","1YQ","DT","UH","QD","2NX","PI","1U1","GR","GZ","RH","1IP","FJ","G9","BS","3GY","FB","2QO","AF","3DA","IQ","2JT","HL","1X5","QM","2LF","BU","M9","HP","3IR","YR","3MO","MR","2UC","TG","2X","CH","1GM","JR","2WK","JJ","19W","HF","YA","IG","2VT","YA","3O","SO","2G7","NN","2WS","YJ","4GI","YJ","2K5","CB","192","KU","25Y","CI","1HM","PU","KQ","DD","29N","IN","21D","KI","I8","VV","26U","OD","22Q","WF","Z0","YB","3AY","ON","NG","YV","3O9","MA","1RJ","OE","1F7","RC","28H","GU","1YA","AV","1XW","IK","208","EE","2OQ","QB","TH","PP","QK","RR","17V","EU","19H","BU","4HT","VN","ZT","YE","2G6","MD","1O4","QT","4BO","YC","337","EH","1GL","JR","1BL","TR","BK","KG","2QD","EF","16J","DB","2CF","DC","LQ","EK","5M","HY","3R","VS","1AH","OM","27Y","RN","3P1","ED","ST","IM","1WW","QD","1GT","SV","1ED","OR","2AL","FQ","QI","RM","HC","YR","2OI","QS","OT","OC","1GP","HI","12A","RU","A2","FU","8Q","DE","2S","CI","GS","RL","41F","YJ","1YD","LM","11I","AU","47S","HI","4DU","TC","1P4","TS","8H","BQ","2CB","DR","QP","RP","5A","OK","3OW","EK","2OK","QR","2UA","TR","41O","CR","1FN","RB","S5","JO","1S7","OE","2JN","YR","H4","RB","1H","NC","185","FS","11C","OR","2TM","SQ","2G0","HQ","30","PH","1IT","AI","2LM","OH","DJ","EJ","6C","MR","ZL","YU","46Z","BG","47B","JC","13","SI","28","MM","AA","IE","2ZD","MK","4O","HQ","27O","RJ","31I","PE","2BM","AB","OE","OI","3V3","OA","2NJ","JJ","JR","QK","19J","FU","2OE","QU","2NR","DP","1U4","TG","1AN","SL","D3","HD","1NO","VU","2BS","QA","1C0","LP","VM","DE","2HM","TD","3I6","TJ","FJ","OF","KT","DU","22F","VQ","27J","RM","2ZH","RO","3BO","GC","XJ","LE","183","FU","14H","HA","CU","KA","JI","SP","XG","HU","6N","RL","2O6","TP","1CM","YW","259","YB","OK","OK","30V","JE","33E","EF","90","YT","2QG","EM","272","HN","JV","QL","1K7","ER","2IJ","YS","1BH","TR","2T2","HL","49B","NM","1KS","FR","137","YK","5W","PK","1EK","IR","1EM","IE","L9","EB","43F","QL","2PZ","EB","3N7","KW","P2","BC","2MZ","GR","27T","RG","K9","QK","2JG","RP","4BB","CM","2AC","PN","1JP","JD","73","JP","48I","PV","2BX","DP","33C","EF","TC","OP","X6","ET","1AE","VU","2AB","PE","2QW","FG","1IU","AR","3PC","FF","1SZ","AR","K8","QJ","1ZO","EK","2QA","ER","1R6","CC","D9","YP","29W","AP","1F2","IR","12V","GS","3O0","QO","R2","GJ","1XD","QG","1MA","OS","362","VG","23V","TG","283","RJ","2Z2","OO","CE","TT","13K","VK","1TG","RG","3ST","JN","3VV","IP","1OQ","MK","1PE","TK","2A1","JP","1W6","OP","1HG","HP","43X","EE","2C8","DF","1WN","PJ","2D8","EU","3KT","CJ","1ZU","EU","F7","ON","2MX","GI","1LG","MD","3B","MU","8Z","JC","161","QA","1ME","MO","22L","VR","Q6","RY","R6","GT","B5","RD","1JR","MD","1VP","NV","25R","YL","1C7","NC","3NU","QO","1VJ","IO","KF","SK","2GR","BJ","PK","HJ","1DB","TU","498","RK","2ZL","RL","273","JN","2JY","MM","3KB","YF","33Q","EV","131","MG","111","OO","11Z","CL","2YE","MC","KL","DH","2RY","KR","339","EC","1VB","UG","2KC","AB","DF","ED","1MZ","HO","3EC","DE","14P","PV","24U","BE","C0","JI","NQ","SL","KM","DK","23L","TT","QZ","GY","PY","SE","2FX","HR","V3","AT","1NH","VH","WI","EO","2HA","TJ","1D","ND","3BF","RL","15T","AM","3DS","QG","59","OP","1KZ","MF","3AB","HJ","K3","QN","1EV","YN","22C","FT","4F","HU","Y8","MI","S6","JU","1SM","TS","KA","QM","3J7","YF","VA","HA","3GW","HN","2F0","KP","1CP","IL","148","NQ","10D","NP","4BE","CU","10A","HJ","1J5","DV","1P","SU","16","EI","WQ","EN","48J","DQ","AJ","FS","3A0","HR","13S","GI","2AX","QM","39D","CR","55","OI","P5","IN","FF","OL","2YJ","OU","31O","PL","3L3","MB","115","OK","1T1","OR","YH","JM","G6","PN","182","FB","24O","YJ","13N","JR","2P2","AA","10X","OF","3WX","EC","1IY","AW","31Q","PC","2HO","TB","2EY","HW","1X6","QO","IC","VS","31","PI","F6","OS","1LC","KG","310","SV","3S1","YU","2NS","HP","17S","EJ","GA","GS","30J","VF","44E","KP","5U","KR","B9","RI","C","HO","UG","QI","1OM","IP","2U1","BE","DX","VF","1DH","ON","U8","QT","10B","NM","11","YV","2Y5","MW","KD","MK","T9","CP","6Y","LK","1WF","PV","MI","BI","2K0","CH","2F3","KR","2WT","YQ","17U","EQ","2V","BN","ND","YJ","42L","NQ","1YH","DJ","XN","KO","DC","EI","2DG","EM","1PG","TU","31W","QV","191","KE","VI","DI","XD","FN","26R","OI","CM","IS","1BJ","TU","2AW","QE","454","VX","2KV","OD","44T","HA","80","WI","1WX","QD","2JZ","AG","Y0","HI","2OY","AJ","1DJ","OR","12O","RK","12L","RK","2AA","PB","3TO","NO","21K","OT","20B","ED","FM","OR","3KI","TL","1E4","OB","JU","QO","2BD","TK","1K6","EH","3ET","EH","2MP","RP","26W","OJ","4EO","OU","48N","AE","1IC","QU","1S4","ON","3TG","CV","2DT","EU","33Y","FP","8B","YI","2HV","YM","14Q","PR","38H","GJ","V4","AL","2Z6","OG","FZ","II","3V5","RA","7A","KB","9W","ON","1H5","TM","1SX","IH","1OB","BR","1QM","YV","SF","OU","EO","MW","3KF","FL","13E","VN","25N","YR","1J1","LA","2JK","JW","199","PA","321","QK","1LO","YO","1RR","HI","18Z","KU","1Y0","OK","2NA","VO","KJ","DI","2Q4","EJ","20L","KK","2F","ON","2KS","KG","1S1","OK","19Y","HJ","3D6","TP","34P","BW","23S","TR","2BT","JB","O2","TC","1OL","FB","12E","RW","28W","VE","26M","IP","258","YL","4C4","BF","1XQ","QV","225","HW","1MK","MU","2NV","OP","235","BD","1PQ","GV","82","RP","2OL","QC","3Q","AU","14R","PU","15A","QR","7C","MJ","37G","LR","Y4","YU","2WA","RV","1XI","QU","14E","HV","1MX","HM","3DV","LK","D7","IO","1TS","WM","EI","NU","227","HI","2VV","YQ","19P","MO","MD","HI","HU","GM","CY","TW","1OP","HK","ZE","TL","3NQ","QW","1E2","OB","3ZV","TK","2D1","EV","2I8","LB","1DL","OJ","1CF","JN","1TH","RP","107","SV","V7","AH","1ZE","EG","A3","HU","MV","BU","10Y","OE","430","RA","3D9","GQ","3N4","GM","3WU","EF","1EN","IG","27U","RK","1JN","DO","K7","QN","2IF","YM","2JS","YG","1AU","BU","2BC","MK","3F5","EF","3JQ","RD","1HA","IG","SU","IO","3T9","CU","MR","TV","DI","EI","1UE","VJ","Q8","RS","2HQ","TD","3NT","QR","JQ","QH","2YC","CC","3VG","BV","1CQ","KL","PL","JS","2JI","RS","RB","KF","3PE","FU","1WV","QD","LC","EU","1LM","WQ","25B","YJ","4K","CK","4H7","II","1Z7","CO","53","HS","2FF","OT","6X","HO","PD","HN","1ZC","EP","1XG","QR","2N5","TG","3DE","QQ","19X","HH","ID","BD","1FK","RK","2AS","QE","33I","EK","150","PR","TI","PM","136","QK","1Z5","YD","100","HL","2OC","QU","1FY","ME","BM","NI","1TF","RR","45G","TF","N4","BC","297","YU","2IS","YG","41U","CM","Y3","JM","1UF","VA","MH","BJ","77","KM","L0","OI","43Q","DC","1UR","JA","1R7","CN","49E","KO","1BA","TH","37W","YP","M2","KG","2DY","ED","1WU","QE","202","EU","3OU","MM","SE","OU","4BC","CJ","3TS","MD","UX","YK","1DQ","OR","2EK","MU","3P","PU","4JE","QU","8A","KU","2ZQ","RR","YY","HB","W5","YE","2H8","TO","3EU","EW","1YS","DK","C1","JP","4GX","HC","QN","RN","3P7","EJ","1XV","HK","R3","GR","3NX","QJ","19I","DU","S4","JF","1Y2","OJ","3AK","OC","AN","SG","FS","OT","2RQ","FW","E9","OO","2D7","EM","1R3","MI","1I3","QJ","2P1","AE","2O8","WP","39K","AI","25H","YO","187","FI","2R","OB","1QC","BH","1JA","DR","PZ","YE","JW","QE","2NY","PC","3IW","YM","1SY","AE","38R","YV","2LS","MN","3EX","EB","10R","OD","4DS","TD","3E2","DD","1J6","DR","1ZR","EV","443","EP","NM","ML","3AP","OJ","L2","EU","RA","KU","1A","NI","1MY","HJ","3WJ","DO","13U","SG","1J0","MA","WY","EU","1VL","IB","3UB","OR","2MG","RR","LZ","HG","20C","EF","20G","FJ","1FB","RE","27P","RR","L6","EH","3W8","TQ","28A","RB","17G","ER","3W1","QF","TS","VI","1PJ","LI","1IS","AU","20H","FJ","HI","WU","3E6","DV","1VE","VD","38I","GB","4J","HO","3OP","DC","3S9","YA","MF","JN","32C","AM","FO","OO","33L","EO","3CX","PC","2HN","TU","LS","IE","35K","FJ","215","HM","29J","LW","3XH","FI","YI","JN","42A","MU","93","HI","1Q5","YU","1RE","NJ","25P","JL","3YJ","HJ","32W","FD","1ZT","EB","3XI","FD","3C5","SA","2TR","SG","H6","RH","E3","ML","2DQ","ED","OP","ON","H0","RU","2EM","MD","6L","RP","246","LM","3MM","YN","2D4","EJ","1PS","LW","5V","MS","2N9","VE","2SW","HG","37","HT","1V","DH","2B6","QJ","2BE","YK","36M","GG","3L","NU","2I6","LR","1WG","PU","YK","VL","1H2","UI","3MR","RW","NS","HD","EF","NQ","1XZ","OK","3MX","RD","BF","GL","4H4","TF","3RH","TW","226","HH","MN","YB","2QZ","FC","EY","YN","4A1","TW","304","GU","1K5","ED","1N1","HJ","1LW","KM","1V9","UG","2B9","QW","1SC","OC","1IE","QG","4IS","YC","36D","HQ","3D1","PJ","14L","HP","19N","MH","280","RK","2C3","DB","1J3","IB","1AP","BQ","14V","PR","15X","AO","XQ","VK","38Q","YU","EB","HU","3ZO","SB","WD","EE","1NA","HK","3OE","DI","MM","YB","26G","YJ","3ZE","HJ","1FH","RK","M5","IB","C2","JD","11G","YU","2LZ","TS","JB","HS","3LS","SG","BS","VD","40G","LJ","1TW","GM","3I7","TJ","CS","VK","7D","VS","PB","HN","JF","PK","6R","SR","2X1","YU","28Y","VD","25Q","YL","4JC","VP","3HQ","BK","1MT","IH","1XN","QJ","2RL","MH","1EQ","BN","1SK","HS","2AP","QO","12M","RQ","2Q0","EX","J9","MH","3CW","PQ","49M","HO","QY","GE","HZ","VG","2VK","YR","1A9","VM","2M7","RM","257","JO","323","QJ","26I","PC","1Q","LB","1RO","BB","4LI","EN","2AR","QJ","19Z","JK","I7","VT","171","MR","1YF","TA","307","TG","MO","IV","1A6","FD","1N7","YR","25L","YL","G4","HN","43Y","EI","25I","YM","1UX","ST","1B6","TM","21F","KG","426","AR","ZN","LH","3XF","FD","389","YO","XX","KO","3DP","QL","334","EO","4JS","TG","9L","OQ","Z","MD","13M","NO","181","FS","34B","MI","2P6","DH","3D4","SP","35J","FB","K1","QU","SM","LA","2TY","BG","247","LG","16I","DR","LG","EM","1P5","TN","U","HI","117","OY","1B5","TJ","1EZ","MF","3J2","YB","P3","TC","2FV","YG","30G","VK","2BN","AF","FI","OR","1VO","NI","DZ","TQ","3CN","CP","1PT","LU","3CE","IB","2L5","OO","1H7","IB","5S","MN","19L","HU","N8","HH","42D","JQ","1P0","TV","4W","MB","5I","YU","21O","BG","22N","VW","S7","JR","3C1","JW","XH","CU","2T0","JU","3CD","II","1M9","JC","43B","QC","3M0","HI","1JB","DD","1JL","DK","2DZ","BF","26D","MM","27R","RM","2H2","SB","198","HG","35","SC","3ED","DA","2YV","OA","1TL","RT","MG","HF","39J","AR","2H6","TD","BR","VD","3O5","AU","34U","MD","1LK","HW","1KJ","EL","3U8","YC","3NP","RI","2BF","LK","335","EE","2YZ","OG","1O5","SF","2DD","ER","3J4","YD","1C1","MV","2D3","EN","3KS","CB","1CT","MN","2RO","MB","3NC","YI","BZ","KD","21L","BV","1B3","HU","25U","CI","2TU","BM","1C4","YN","44Z","FG","98","OI","139","IV","2FZ","HI","35D","HR","CJ","PV","SW","IU","5D","OI","3BC","RX","7Z","MM","16V","KD","1PU","YV","1EL","IW","2CU","OF","4EK","CG","60","FQ","1CA","GL","1YB","AU","25F","YG","1UA","EV","Z8","TO","2BQ","TA","PF","SN","218","WR","12U","GR","E5","SJ","1Z4","OD","1I8","QO","1CV","HG","228","HT","2T6","HK","35Z","VO","19C","MT","IQ","SU","3AI","YX","15U","AS","GQ","RH","HO","GO","120","MD","DR","IQ","2JH","RU","1Z3","HD","3C4","JI","10H","OG","SD","BU","429","RG","6I","RS","1TV","GJ","2UJ","TD","1RQ","LN","1QG","HN","3Y","HS","3NN","PP","1CX","NV","2A3","MP","3SK","BW","22V","SA","2KG","AT","4IN","SC","O","JK","2LQ","OM","OA","YD","3W3","QO","17D","ER","428","DE","1FZ","BK","1CD","RC","WU","EI","3A","YY","7Q","HY","2FY","HB","2A0","IP","220","JG","1UN","JR","IS","SR","JJ","SP","B3","RP","15P","MK","12W","GS","4D","WJ","1SB","OV","3AQ","OI","1WL","PA","3IT","YF","5C","OD","6H","RS","UJ","QU","CI","PI","24J","YK","391","MR","4CI","RV","1S0","OK","3NW","QD","1D6","YA","3GP","HU","1KB","EV","3PA","EF","36Y","TR","3VY","YI","PE","MN","SJ","UP","43N","DN","179","ER","24F","BU","2M0","TS","J8","BH","274","ON","44C","SI","3H6","VE","15M","QT","1W3","HP","O4","BU","2TZ","BV","1AT","BM","1S6","OA","6W","NY","3BA","RC","1TO","RU","18X","WL","10O","YN","IL","JU","2O2","PU","44","HL","FX","OC","EL","HT","26J","NF","45","YS","VY","DN","3TW","MG","3PG","FT","1BT","LM","1PH","YK","3X9","EX","16S","DB","1NM","VB","3QD","ND","GY","RU","301","GG","2SE","YU","3KD","YA","XL","HH","2CQ","MI","42Q","HR","N1","CR","PN","YJ","3CI","NJ","1K1","OQ","1N","RU","GL","MR","27N","RR","1KU","FC","13G","VG","1JO","ED","1IB","QV","261","NW","11U","MS","2S9","BA","BV","VU","1VM","IE","30T","JK","2NK","IE","10T","OR","Z1","SO","1NQ","VK","1HD","HO","HR","GN","2L3","OE","1G","DI","3M1","HD","28F","GO","TL","PB","VQ","DU","3EH","VD","1HV","SP","3AC","MI","2DV","EI","2DM","ES","GC","VS","30X","JC","3QK","HD","IX","UN","289","RV","2ES","MP","JK","YP","3T6","CH","331","TO","58","OI","2EZ","LM","13T","SD","10W","OI","1K0","OV","1R4","MU","3CH","IC","1CO","YR","1X","BY","2KX","MK","2G4","HA","3K1","FJ","86","EU","254","RM","4HX","TO","MX","YR","2H","ON","FW","NU","YE","HL","BY","JD","2MS","EG","3EI","VD","2B7","QG","2QH","ER","1V3","UU","1UJ","VV","2V8","LD","DK","ED","4JU","VK","397","CR","3RG","TH","30E","KI","E","SH","AC","IN","RY","NT","1H0","UJ","2BJ","AL","YP","BU","2JQ","YE","19B","LT","3TF","CG","UZ","YY","1Q9","UT","49J","HI","BW","YV","T2","NO","3AW","HN","MT","LH","XK","HK","3BT","NG","4I2","WM","211","MG","340","IF","121","FE","1JJ","DG","31G","IP","2AE","PS","3SE","YB","CL","IM","2GY","BV","H5","RN","113","OK","1Z0","DJ","1VQ","QM","3HP","BH","2AM","HQ","155","HT","39T","YG","XA","FH","4AP","RU","1SQ","AP","KE","OK","2VU","YA","18O","MH","1ZW","EG","3NG","IP","28D","WQ","1Y3","JL","41K","MI","21C","KV","3JS","RA","11Y","JJ","3T5","MM"]'));
    return $receiver;
  }
  var normal;
  function get_normal() {
    return normal.value;
  }
  Object.defineProperty(_, 'keys', {
    get: get_keys
  });
  _.Dict = Dict;
  Object.defineProperty(_, 'easy', {
    get: get_easy
  });
  Object.defineProperty(_, 'words', {
    get: get_words
  });
  _.kc_z6h86f$ = kc;
  _.value_pdl1vz$ = value;
  _.value_6ic1pp$ = value_0;
  $$importsForInline$$['kotlinx-html-js'] = $module$kotlinx_html_js;
  _.main_kand9s$ = main;
  _.onReady = onReady;
  _.onKeyEnterPress = onKeyEnterPress;
  _.setupKeyListener = setupKeyListener;
  _.addKeyboard_6sikba$ = addKeyboard;
  _.getKeyCode = getKeyCode;
  _.addHeader_6sikba$ = addHeader;
  _.addWord_6sikba$ = addWord;
  _.addAudio_6sikba$ = addAudio;
  _.addGuide_4ygvh0$ = addGuide;
  Object.defineProperty(_, 'normal', {
    get: get_normal
  });
  keys = lazy(keys$lambda);
  easy = lazy(easy$lambda);
  words = lazy(words$lambda);
  index = 0;
  var tmp$, tmp$_0;
  imageUrl = (tmp$ = localStorage['imageUrl']) != null ? tmp$ : 'http://localhost/fcj_word/assets/quick_word';
  audioUrl = (tmp$_0 = localStorage['audioUrl']) != null ? tmp$_0 : 'http://localhost/fcj_word/assets/cantoness';
  inputText = '';
  normal = lazy(normal$lambda);
  main([]);
  Kotlin.defineModule('fcj_word', _);
  return _;
}(typeof fcj_word === 'undefined' ? {} : fcj_word, kotlin, this['kotlinx-html-js']);
