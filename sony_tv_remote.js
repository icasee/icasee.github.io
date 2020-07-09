if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'sony_tv_remote'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'sony_tv_remote'.");
}if (typeof this['kotlinx-html-js'] === 'undefined') {
  throw new Error("Error loading module 'sony_tv_remote'. Its dependency 'kotlinx-html-js' was not found. Please, check whether 'kotlinx-html-js' is loaded prior to 'sony_tv_remote'.");
}var sony_tv_remote = function (_, Kotlin, $module$kotlinx_html_js) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var lazy = Kotlin.kotlin.lazy_klfg04$;
  var trimIndent = Kotlin.kotlin.text.trimIndent_pdl1vz$;
  var print = Kotlin.kotlin.io.print_s8jyv4$;
  var Unit = Kotlin.kotlin.Unit;
  var get_create = $module$kotlinx_html_js.kotlinx.html.dom.get_create_4wc2mh$;
  var set_onClickFunction = $module$kotlinx_html_js.kotlinx.html.js.set_onClickFunction_pszlq2$;
  var get_indices = Kotlin.kotlin.collections.get_indices_m7z4lg$;
  var step = Kotlin.kotlin.ranges.step_xsgg7u$;
  var enumEncode = $module$kotlinx_html_js.kotlinx.html.attributes.enumEncode_m4whry$;
  var attributesMapOf = $module$kotlinx_html_js.kotlinx.html.attributesMapOf_alerag$;
  var BUTTON_init = $module$kotlinx_html_js.kotlinx.html.BUTTON;
  var visitTag = $module$kotlinx_html_js.kotlinx.html.visitTag_xwv8ym$;
  var attributesMapOf_0 = $module$kotlinx_html_js.kotlinx.html.attributesMapOf_jyasbz$;
  var TD_init = $module$kotlinx_html_js.kotlinx.html.TD;
  var visitTagAndFinalize = $module$kotlinx_html_js.kotlinx.html.visitTagAndFinalize_g9qte5$;
  var TR_init = $module$kotlinx_html_js.kotlinx.html.TR;
  var TABLE_init = $module$kotlinx_html_js.kotlinx.html.TABLE;
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_287e2$;
  function visit$lambda(closure$block) {
    return function ($receiver) {
      closure$block($receiver);
      return Unit;
    };
  }
  function button$lambda($receiver) {
    return Unit;
  }
  function visitAndFinalize$lambda(closure$block) {
    return function ($receiver) {
      closure$block($receiver);
      return Unit;
    };
  }
  function td$lambda($receiver) {
    return Unit;
  }
  function visitAndFinalize$lambda_0(closure$block) {
    return function ($receiver) {
      closure$block($receiver);
      return Unit;
    };
  }
  function tr$lambda($receiver) {
    return Unit;
  }
  function visitAndFinalize$lambda_1(closure$block) {
    return function ($receiver) {
      closure$block($receiver);
      return Unit;
    };
  }
  function table$lambda($receiver) {
    return Unit;
  }
  function Dict(key, value) {
    this.key = key;
    this.value = value;
  }
  Object.defineProperty(Dict.prototype, 'clazz', {
    get: function () {
      return window.atob(this.key);
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
  var SONY_TV_URL_PREFIX;
  var SONY_TV_IP;
  var SONY_TV_URL_SUFFIX;
  var SONY_TV_PSK_KEY;
  function req$lambda() {
    return new XMLHttpRequest();
  }
  var req;
  function get_req() {
    return req.value;
  }
  function sendCommand(code) {
    var url = SONY_TV_URL_PREFIX + SONY_TV_IP + SONY_TV_URL_SUFFIX;
    var data = trimIndent('\n' + '<?xml version=' + '"' + '1.0' + '"' + '?>' + '\n' + '      <s:Envelope xmlns:s=' + '"' + 'http://schemas.xmlsoap.org/soap/envelope/' + '"' + ' s:encodingStyle=' + '"' + 'http://schemas.xmlsoap.org/soap/encoding/' + '"' + '>' + '\n' + '        <s:Body>' + '\n' + '          <u:X_SendIRCC xmlns:u=' + '"' + 'urn:schemas-sony-com:service:IRCC:1' + '"' + '>' + '\n' + '            <IRCCCode>' + code + '<\/IRCCCode>' + '\n' + '          <\/u:X_SendIRCC>' + '\n' + '        <\/s:Body>' + '\n' + '      <\/s:Envelope>        ' + '\n' + '    ');
    print('31, url => ' + url + ', code => ' + code);
    var $receiver = get_req();
    $receiver.open('POST', url, true);
    $receiver.setRequestHeader('Content-Type', 'text/xml; charset=UTF-8');
    $receiver.setRequestHeader('SOAPAction', '"urn:schemas-sony-com:service:IRCC:1#X_SendIRCC"');
    $receiver.setRequestHeader('X-Auth-PSK', SONY_TV_PSK_KEY);
    $receiver.send(data);
  }
  function main$lambda$lambda(it) {
    print('24, onreadystatechange => ' + it);
    return Unit;
  }
  function main$lambda$lambda$lambda$lambda(closure$dict) {
    return function (it) {
      sendCommand(closure$dict.value);
      return Unit;
    };
  }
  function main$lambda$lambda$lambda(closure$dict) {
    return function ($receiver) {
      set_onClickFunction($receiver, main$lambda$lambda$lambda$lambda(closure$dict));
      return Unit;
    };
  }
  function main$lambda$lambda_0(closure$dict) {
    return function ($receiver) {
      var classes = closure$dict.clazz;
      var block = main$lambda$lambda$lambda(closure$dict);
      visitTag(new BUTTON_init(attributesMapOf(['formenctype', null != null ? enumEncode(null) : null, 'formmethod', null != null ? enumEncode(null) : null, 'name', null, 'type', null != null ? enumEncode(null) : null, 'class', classes]), $receiver.consumer), visit$lambda(block));
      return Unit;
    };
  }
  function main() {
    var $receiver = get_req();
    $receiver.timeout = 3000;
    $receiver.onreadystatechange = main$lambda$lambda;
    var root = document.getElementById('root');
    var $receiver_0 = get_create(document);
    var wrap = visitTagAndFinalize(new TABLE_init(attributesMapOf_0('class', null), $receiver_0), $receiver_0, visitAndFinalize$lambda_1(table$lambda));
    var $receiver_1 = get_create(document);
    var row = {v: visitTagAndFinalize(new TR_init(attributesMapOf_0('class', null), $receiver_1), $receiver_1, visitAndFinalize$lambda_0(tr$lambda))};
    var tmp$;
    tmp$ = get_commands().iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      var $receiver_2 = get_create(document);
      var td = visitTagAndFinalize(new TD_init(attributesMapOf_0('class', null), $receiver_2), $receiver_2, visitAndFinalize$lambda(main$lambda$lambda_0(element)));
      row.v.appendChild(td);
      if (row.v.childElementCount === 3) {
        wrap.appendChild(row.v);
        var $receiver_3 = get_create(document);
        row.v = visitTagAndFinalize(new TR_init(attributesMapOf_0('class', null), $receiver_3), $receiver_3, visitAndFinalize$lambda_0(tr$lambda));
      }}
    root != null ? root.appendChild(wrap) : null;
    var $receiver_4 = localStorage;
    $receiver_4.setItem('SONY_TV_URL_PREFIX', SONY_TV_URL_PREFIX);
    $receiver_4.setItem('SONY_TV_IP', SONY_TV_IP);
    $receiver_4.setItem('SONY_TV_URL_SUFFIX', SONY_TV_URL_SUFFIX);
    $receiver_4.setItem('SONY_TV_PSK_KEY', SONY_TV_PSK_KEY);
  }
  function commands$lambda() {
    var $receiver = ArrayList_init();
    kc($receiver, trimIndent('["dHYgbGFyZ2Ugd2hpdGU=","AAAAAQAAAAEAAAAkAw==","bjEgbm9uZQ==","==","dHZwb3dlciBsYXJnZSByZWQ=","AAAAAQAAAAEAAAAVAw==","bnVtMSBsYXJnZSB3aGl0ZQ==","AAAAAQAAAAEAAAAAAw==","bnVtMiBsYXJnZSB3aGl0ZQ==","AAAAAQAAAAEAAAABAw==","bnVtMyBsYXJnZSB3aGl0ZQ==","AAAAAQAAAAEAAAACAw==","bnVtNCBsYXJnZSB3aGl0ZQ==","AAAAAQAAAAEAAAADAw==","bnVtNSBsYXJnZSB3aGl0ZQ==","AAAAAQAAAAEAAAAEAw==","bnVtNiBsYXJnZSB3aGl0ZQ==","AAAAAQAAAAEAAAAFAw==","bnVtNyBsYXJnZSB3aGl0ZQ==","AAAAAQAAAAEAAAAGAw==","bnVtOCBsYXJnZSB3aGl0ZQ==","AAAAAQAAAAEAAAAHAw==","bnVtOSBsYXJnZSB3aGl0ZQ==","AAAAAQAAAAEAAAAIAw==","aG9tZSByZWQ=","AAAAAQAAAAEAAABgAw==","bnVtMCBsYXJnZSB3aGl0ZQ==","AAAAAQAAAAEAAAAJAw==","bmV0ZmxpeCByZWQ=","AAAAAgAAABoAAAB8Aw==","dm9sdW1ldXAgbGFyZ2Ugd2hpdGU=","AAAAAQAAAAEAAAASAw==","bXV0ZSBsYXJnZSB3aGl0ZQ==","AAAAAQAAAAEAAAAUAw==","Y2hhbm5lbHVwIGxhcmdlIHdoaXRl","AAAAAQAAAAEAAAAQAw==","dm9sdW1lZG93biBsYXJnZSBibHVl","AAAAAQAAAAEAAAATAw==","bjIgbm9uZQ==","==","Y2hhbm5lbGRvd24gbGFyZ2UgYmx1ZQ==","AAAAAQAAAAEAAAARAw==","bjMgbm9uZQ==","==","dXAgbGFyZ2UgYmxhY2s=","AAAAAQAAAAEAAAB0Aw==","bjQgbm9uZQ==","==","bGVmdCBsYXJnZSBibGFjaw==","AAAAAQAAAAEAAAA0Aw==","ZHBhZGNlbnRlciBsYXJnZSBibGFjaw==","AAAAAgAAAJcAAABKAw==","cmlnaHQgbGFyZ2UgYmxhY2s=","AAAAAQAAAAEAAAAzAw==","cmV0dXJuIHdoaXRl","AAAAAgAAAJcAAAAjAw==","ZG93biBsYXJnZSBibGFjaw==","AAAAAQAAAAEAAAB1Aw==","ZXhpdCB3aGl0ZQ==","AAAAAQAAAAEAAABjAw==","cGF1c2UgbGFyZ2Ugd2hpdGU=","AAAAAgAAAJcAAAAZAw==","cGxheSBsYXJnZSB3aGl0ZQ==","AAAAAgAAAJcAAAAaAw==","c3RvcCBsYXJnZSB3aGl0ZQ==","AAAAAgAAAJcAAAAYAw=="]'));
    return $receiver;
  }
  var commands;
  function get_commands() {
    return commands.value;
  }
  function appendTo($receiver, parent) {
    if ($receiver.childElementCount === 3) {
      parent.appendChild($receiver.cloneNode(true));
      removeAll($receiver);
    }}
  function kc($receiver, dataString) {
    var tmp$;
    var words = JSON.parse(dataString);
    tmp$ = step(get_indices(words), 2).iterator();
    while (tmp$.hasNext()) {
      var x = tmp$.next();
      $receiver.add_11rb$(create(words, x));
    }
  }
  function removeAll($receiver) {
    var tmp$;
    while ($receiver.firstChild != null) {
      if ((tmp$ = $receiver.lastChild) != null) {
        $receiver.removeChild(tmp$);
      }}
  }
  function create($receiver, index) {
    var key = $receiver[index];
    var value = $receiver[index + 1 | 0];
    return new Dict(key, value);
  }
  _.Dict = Dict;
  Object.defineProperty(_, 'SONY_TV_URL_PREFIX', {
    get: function () {
      return SONY_TV_URL_PREFIX;
    }
  });
  Object.defineProperty(_, 'SONY_TV_IP', {
    get: function () {
      return SONY_TV_IP;
    }
  });
  Object.defineProperty(_, 'SONY_TV_URL_SUFFIX', {
    get: function () {
      return SONY_TV_URL_SUFFIX;
    }
  });
  Object.defineProperty(_, 'SONY_TV_PSK_KEY', {
    get: function () {
      return SONY_TV_PSK_KEY;
    }
  });
  Object.defineProperty(_, 'req', {
    get: get_req
  });
  _.sendCommand_61zpoe$ = sendCommand;
  $$importsForInline$$['kotlinx-html-js'] = $module$kotlinx_html_js;
  _.main = main;
  Object.defineProperty(_, 'commands', {
    get: get_commands
  });
  _.appendTo_76ravt$ = appendTo;
  _.kc_z6h86f$ = kc;
  _.removeAll_y4uc6z$ = removeAll;
  _.create_zd1hjz$ = create;
  var tmp$, tmp$_0, tmp$_1, tmp$_2;
  SONY_TV_URL_PREFIX = (tmp$ = localStorage.getItem('SONY_TV_URL_PREFIX')) != null ? tmp$ : 'http://';
  SONY_TV_IP = (tmp$_0 = localStorage.getItem('SONY_TV_IP')) != null ? tmp$_0 : '192.168.31.211';
  SONY_TV_URL_SUFFIX = (tmp$_1 = localStorage.getItem('SONY_TV_URL_SUFFIX')) != null ? tmp$_1 : '/sony/IRCC';
  SONY_TV_PSK_KEY = (tmp$_2 = localStorage.getItem('SONY_TV_PSK_KEY')) != null ? tmp$_2 : 'pass1258';
  req = lazy(req$lambda);
  commands = lazy(commands$lambda);
  main();
  Kotlin.defineModule('sony_tv_remote', _);
  return _;
}(typeof sony_tv_remote === 'undefined' ? {} : sony_tv_remote, kotlin, this['kotlinx-html-js']);
