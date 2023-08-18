(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.renderer = void 0;
var templator = __importStar(require("uralsjs-templator"));
var tags = __importStar(require("./tags"));
exports.renderer = __assign(__assign(__assign(__assign(__assign(__assign({}, templator.def.renderer), tags.gridGap.renderer), tags.overlayerGallery.renderer), tags.whiteForm.renderer), tags.screenColor.renderer), tags.screenPhoto.renderer);

},{"./tags":4,"uralsjs-templator":18}],2:[function(require,module,exports){
"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.def = exports.tags = void 0;
exports.tags = __importStar(require("./tags"));
exports.def = __importStar(require("./def"));

},{"./def":1,"./tags":4}],3:[function(require,module,exports){
"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.renderer = exports.literals = void 0;
var t = __importStar(require("uralsjs-templator"));
exports.literals = [
    'grid-gap-0',
    'grid-gap-5',
    'grid-gap-10',
    'grid-gap-20',
    'grid-gap-30'
];
exports.renderer = {};
exports.literals.forEach(function (l) {
    exports.renderer[l] = function (params, content) {
        var cls = params.class
            ? (params.class + ' d-grid ' + l)
            : ('d-grid ' + l);
        var paramsText = t.dsl
            .abstracts
            .record
            .render(__assign(__assign({}, params), { class: cls }));
        return "<div ".concat(paramsText, ">").concat(content, "</div>");
    };
});

},{"uralsjs-templator":18}],4:[function(require,module,exports){
"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.screenColor = exports.screenPhoto = exports.whiteForm = exports.overlayerGallery = exports.gridGap = void 0;
exports.gridGap = __importStar(require("./grid-gap"));
exports.overlayerGallery = __importStar(require("./overlayer-gallery"));
exports.whiteForm = __importStar(require("./white-form"));
exports.screenPhoto = __importStar(require("./screen-photo"));
exports.screenColor = __importStar(require("./screen-color"));

},{"./grid-gap":3,"./overlayer-gallery":5,"./screen-color":6,"./screen-photo":7,"./white-form":8}],5:[function(require,module,exports){
"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.renderer = exports.tag = void 0;
var t = __importStar(require("uralsjs-templator"));
exports.tag = 'overlayer-gallery';
exports.renderer = {
    'overlayer-gallery': function (params, content) {
        return t.tag.render(['div',
            { class: 'overlayer' },
            ['div', {
                    onclick: "this.closest('.overlayer').remove()",
                    class: "overlayer-bg"
                },
            ],
            ['div',
                { class: "gallery-container", "data-show": "0" },
                ['div',
                    {
                        class: "w-100 h-100",
                        onclick: "this.closest('.overlayer').remove()"
                    },
                    '&nbsp;'
                ],
                ['div',
                    {
                        class: "gallery-elem gallery-close",
                        onclick: "this.closest('.overlayer').remove()"
                    },
                    '<ion-icon name="close-outline"></ion-icon>'
                ],
                content
            ],
        ], t.def.renderer);
    }
};

},{"uralsjs-templator":18}],6:[function(require,module,exports){
"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.renderer = exports.literal = void 0;
var t = __importStar(require("uralsjs-templator"));
exports.literal = 'screen-color';
exports.renderer = {
    'screen-color': function (params, content) {
        var cls = params.class
            ? (params.class + ' screen dark-screen')
            : 'screen dark-screen';
        var paramsText = t.dsl
            .abstracts
            .record
            .render(__assign(__assign({}, params), { class: cls }));
        return "<div ".concat(paramsText, ">").concat(content, "</div>");
    }
};

},{"uralsjs-templator":18}],7:[function(require,module,exports){
"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.renderer = exports.tag = void 0;
var t = __importStar(require("uralsjs-templator"));
exports.tag = 'screen-photo';
exports.renderer = {
    'screen-photo': function (params, content) {
        var cls = params.class
            ? (params.class + ' screen')
            : 'screen';
        var photo = params['photo']
            ? (typeof params['photo'] === 'string'
                ? params['photo']
                : params['photo'].toString())
            : '';
        var paramsCorrected = __assign({}, params);
        if (params['photo']) {
            delete paramsCorrected[photo];
        }
        return t.tag.render(['div',
            paramsCorrected,
            ['div',
                { style: "position: absolute; height:100%; width:100%;" },
                ['div',
                    {
                        class: 'screen-sticky',
                        style: (photo.length > 0)
                            ? "background-image: url('".concat(photo, "');")
                            : ''
                    }
                ]
            ],
            content], t.def.renderer);
    }
};

},{"uralsjs-templator":18}],8:[function(require,module,exports){
"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.renderer = exports.tag = void 0;
var t = __importStar(require("uralsjs-templator"));
exports.tag = 'white-panel';
exports.renderer = {
    'white-panel': function (params, content) {
        var cls = params.class
            ? (params.class + ' white-panel p-3')
            : 'white-panel p-3';
        var paramsText = t.dsl
            .abstracts
            .record
            .render(__assign(__assign({}, params), { class: cls }));
        return "<div ".concat(paramsText, ">").concat(content, "</div>");
    }
};

},{"uralsjs-templator":18}],9:[function(require,module,exports){
"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var templator = __importStar(require("uralsjs-templator"));
var index = __importStar(require("../src"));
var page = templator.tag.typecheck(['screen-color',
    {},
    'Hahaha'
], index.def.renderer);
var render = function () {
    document.body.innerHTML = templator.tag.render(page, index.def.renderer);
};
render();

},{"../src":2,"uralsjs-templator":18}],10:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

/**
 * A `StructFailure` represents a single specific failure in validation.
 */

/**
 * `StructError` objects are thrown (or returned) when validation fails.
 *
 * Validation logic is design to exit early for maximum performance. The error
 * represents the first error encountered during validation. For more detail,
 * the `error.failures` property is a generator function that can be run to
 * continue validation and receive all the failures in the data.
 */
class StructError extends TypeError {
  constructor(failure, moreFailures) {
    const {
      message,
      ...rest
    } = failure;
    const {
      path
    } = failure;
    let failures;
    const msg = path.length === 0 ? message : "At path: " + path.join('.') + " -- " + message;
    super(msg);
    Object.assign(this, rest);
    this.name = this.constructor.name;

    this.failures = () => {
      if (!failures) {
        failures = [failure, ...moreFailures];
      }

      return failures;
    };
  }

}

/**
 * Check if a value is a plain object.
 */
function isPlainObject(value) {
  if (Object.prototype.toString.call(value) !== '[object Object]') {
    return false;
  }

  const prototype = Object.getPrototypeOf(value);
  return prototype === null || prototype === Object.prototype;
}
/**
 * Return a value as a printable string.
 */

function print(value) {
  return typeof value === 'string' ? JSON.stringify(value) : "" + value;
}
/**
 * Shifts (removes and returns) the first value from the `input` iterator.
 * Like `Array.prototype.shift()` but for an `Iterator`.
 */

function shiftIterator(input) {
  const {
    done,
    value
  } = input.next();
  return done ? undefined : value;
}
/**
 * Convert a validation result to an iterable of failures.
 */

function* toFailures(result, context) {
  if (typeof result === 'string') {
    yield context.fail({
      message: result
    });
  } else if (result === true) {
    return;
  } else if (result === false) {
    yield context.fail();
  } else {
    yield* result;
  }
}

function assign(...Structs) {
  const schemas = Structs.map(s => s.schema);
  const schema = Object.assign({}, ...schemas);
  return object(schema);
}
/**
 * Define a new struct type with a custom validation function.
 */

function define(name, validator) {
  return new Struct({
    type: name,
    schema: null,
    validator
  });
}
/**
 * Create a struct with dynamic, runtime validation.
 *
 * The callback will receive the value currently being validated, and must
 * return a struct object to validate it with. This can be useful to model
 * validation logic that changes based on its input.
 */

function dynamic(fn) {
  return define('dynamic', (value, ctx) => {
    return ctx.check(value, fn(value, ctx));
  });
}
/**
 * Create a struct with lazily evaluated validation.
 *
 * The first time validation is run with the struct, the callback will be called
 * and must return a struct object to use. This is useful for cases where you
 * want to have self-referential structs for nested data structures to avoid a
 * circular definition problem.
 */

function lazy(fn) {
  let s;
  return define('lazy', (value, ctx) => {
    if (!s) {
      s = fn();
    }

    return ctx.check(value, s);
  });
}
/**
 * Create a new struct based on an existing object struct, but excluding
 * specific properties.
 *
 * Like TypeScript's `Omit` utility.
 */

function omit(struct, keys) {
  const {
    schema
  } = struct;
  const subschema = { ...schema
  };

  for (const key of keys) {
    delete subschema[key];
  }

  return object(subschema);
}
/**
 * Create a new struct based on an existing object struct, but with all of its
 * properties allowed to be `undefined`.
 *
 * Like TypeScript's `Partial` utility.
 */

function partial(struct) {
  const schema = struct instanceof Struct ? { ...struct.schema
  } : { ...struct
  };

  for (const key in schema) {
    schema[key] = optional(schema[key]);
  }

  return object(schema);
}
/**
 * Create a new struct based on an existing object struct, but only including
 * specific properties.
 *
 * Like TypeScript's `Pick` utility.
 */

function pick(struct, keys) {
  const {
    schema
  } = struct;
  const subschema = {};

  for (const key of keys) {
    subschema[key] = schema[key];
  }

  return object(subschema);
}
/**
 * Define a new struct type with a custom validation function.
 *
 * @deprecated This function has been renamed to `define`.
 */

function struct(name, validator) {
  console.warn('superstruct@0.11 - The `struct` helper has been renamed to `define`.');
  return define(name, validator);
}

/**
 * Ensure that any value passes validation.
 */

function any() {
  return define('any', () => true);
}
function array(Element) {
  return new Struct({
    type: 'array',
    schema: Element,
    coercer: value => {
      return Element && Array.isArray(value) ? value.map(v => Element.coercer(v)) : value;
    },

    *validator(value, ctx) {
      if (!Array.isArray(value)) {
        yield ctx.fail("Expected an array value, but received: " + print(value));
      } else if (Element) {
        for (const [i, v] of value.entries()) {
          yield* ctx.check(v, Element, value, i);
        }
      }
    }

  });
}
/**
 * Ensure that a value is a boolean.
 */

function boolean() {
  return define('boolean', value => {
    return typeof value === 'boolean';
  });
}
/**
 * Ensure that a value is a valid `Date`.
 *
 * Note: this also ensures that the value is *not* an invalid `Date` object,
 * which can occur when parsing a date fails but still returns a `Date`.
 */

function date() {
  return define('date', value => {
    return value instanceof Date && !isNaN(value.getTime()) || "Expected a valid `Date` object, but received: " + print(value);
  });
}
function enums(values) {
  const schema = {};
  const description = values.map(v => print(v)).join();

  for (const key of values) {
    schema[key] = key;
  }

  return new Struct({
    type: 'enums',
    schema,
    validator: value => {
      return values.includes(value) || "Expected one of `" + description + "`, but received: " + print(value);
    }
  });
}
/**
 * Ensure that a value is a function.
 */

function func() {
  return define('func', value => {
    return typeof value === 'function' || "Expected a function, but received: " + print(value);
  });
}
/**
 * Ensure that a value is an instance of a specific class.
 */

function instance(Class) {
  return define('instance', value => {
    return value instanceof Class || "Expected a `" + Class.name + "` instance, but received: " + print(value);
  });
}
/**
 * Ensure that a value is an integer.
 */

function integer() {
  return define('integer', value => {
    return typeof value === 'number' && !isNaN(value) && Number.isInteger(value) || "Expected an integer, but received: " + print(value);
  });
}
function intersection(Structs) {
  return define('intersection', function* (value, ctx) {
    for (const S of Structs) {
      yield* ctx.check(value, S);
    }
  });
}
function literal(constant) {
  const description = print(constant);
  return define('literal', value => {
    return value === constant || "Expected the literal `" + description + "`, but received: " + print(value);
  });
}
function map(Key, Value) {
  return define('map', function* (value, ctx) {
    if (!(value instanceof Map)) {
      yield ctx.fail("Expected a `Map` object, but received: " + print(value));
    } else if (Key && Value) {
      for (const [k, v] of value.entries()) {
        yield* ctx.check(k, Key, value, k);
        yield* ctx.check(v, Value, value, k);
      }
    }
  });
}
/**
 * Ensure that no value ever passes validation.
 */

function never() {
  return define('never', () => false);
}
/**
 * Augment an existing struct to allow `null` values.
 */

function nullable(struct) {
  const {
    refiner
  } = struct;
  return new Struct({ ...struct,
    validator: (value, ctx) => {
      return value === null || ctx.check(value, struct);
    },
    refiner: function* (value, ctx) {
      if (value != null) {
        const c = { ...ctx,
          struct
        };
        yield* toFailures(refiner(value, c), c);
      }
    }
  });
}
/**
 * Ensure that a value is a number.
 */

function number() {
  return define('number', value => {
    return typeof value === 'number' && !isNaN(value) || "Expected a number, but received: " + print(value);
  });
}
function object(schema) {
  const knowns = schema ? Object.keys(schema) : [];
  const Never = never();
  return new Struct({
    type: 'object',
    schema: schema ? schema : null,

    *validator(value, ctx) {
      if (typeof value !== 'object' || value == null) {
        yield ctx.fail("Expected an object, but received: " + print(value));
      } else if (schema) {
        const unknowns = new Set(Object.keys(value));

        for (const key of knowns) {
          unknowns.delete(key);
          const Value = schema[key];
          const v = value[key];
          yield* ctx.check(v, Value, value, key);
        }

        for (const key of unknowns) {
          const v = value[key];
          yield* ctx.check(v, Never, value, key);
        }
      }
    },

    coercer: value => {
      if (!schema || typeof value !== 'object' || value == null) {
        return value;
      }

      const ret = {};
      const unknowns = new Set(Object.keys(value));

      for (const key of knowns) {
        unknowns.delete(key);
        const Value = schema[key];
        const v = value[key];
        ret[key] = Value.coercer(v);
      }

      for (const key of unknowns) {
        ret[key] = value[key];
      }

      return ret;
    }
  });
}
/**
 * Augment a struct to allow `undefined` values.
 */

function optional(struct) {
  const {
    refiner
  } = struct;
  return new Struct({ ...struct,
    validator: (value, ctx) => {
      return value === undefined || ctx.check(value, struct);
    },
    refiner: function* (value, ctx) {
      if (value != null) {
        const c = { ...ctx,
          struct
        };
        yield* toFailures(refiner(value, c), c);
      }
    }
  });
}
/**
 * Ensure that a value is an object with keys and values of specific types, but
 * without ensuring any specific shape of properties.
 *
 * Like TypeScript's `Record` utility.
 */

function record(Key, Value) {
  return define('record', function* (value, ctx) {
    if (typeof value !== 'object' || value == null) {
      yield ctx.fail("Expected an object, but received: " + print(value));
    } else {
      for (const k in value) {
        const v = value[k];
        yield* ctx.check(k, Key, value, k);
        yield* ctx.check(v, Value, value, k);
      }
    }
  });
}
/**
 * Ensure that a value is a `RegExp`.
 *
 * Note: this does not test the value against the regular expression! For that
 * you need to use the `pattern()` refinement.
 */

function regexp() {
  return define('regexp', value => {
    return value instanceof RegExp;
  });
}
function set(Element) {
  return define('set', function* (value, ctx) {
    if (!(value instanceof Set)) {
      yield ctx.fail("Expected a `Set` object, but received: " + print(value));
    } else if (Element) {
      for (const val of value) {
        yield* ctx.check(val, Element, value, val);
      }
    }
  });
}
/**
 * Ensure that a value is a string.
 */

function string() {
  return define('string', value => {
    return typeof value === 'string' || "Expected a string, but received: " + print(value);
  });
}
function tuple(Elements) {
  const Never = never();
  return define('tuple', function* (value, ctx) {
    if (!Array.isArray(value)) {
      yield ctx.fail("Expected an array, but received: " + print(value));
    } else {
      for (const [index, Element] of Elements.entries()) {
        const v = value[index];
        yield* ctx.check(v, Element, value, index);
      }

      if (value.length > Elements.length) {
        const index = Elements.length;
        const v = value[index];
        yield* ctx.check(v, Never, value, index);
      }
    }
  });
}
/**
 * Ensure that a value has a set of known properties of specific types.
 *
 * Note: Unrecognized properties are allowed and untouched. This is similar to
 * how TypeScript's structural typing works.
 */

function type(schema) {
  const keys = Object.keys(schema);
  return new Struct({
    type: 'type',
    schema,
    validator: function* (value, ctx) {
      if (typeof value !== 'object' || value == null) {
        yield ctx.fail("Expected an object, but received: " + print(value));
      } else {
        for (const key of keys) {
          const Value = schema[key];
          const v = value[key];
          yield* ctx.check(v, Value, value, key);
        }
      }
    }
  });
}
function union(Structs) {
  const description = Structs.map(s => s.type).join(' | ');
  return define('union', function* (value, ctx) {
    const failures = [];

    for (const S of Structs) {
      const [...array] = ctx.check(value, S);

      if (array.length === 0) {
        return;
      } else {
        failures.push(...array);
      }
    }

    yield ctx.fail("Expected the value to satisfy a union of `" + description + "`, but received: " + print(value));
    yield* failures;
  });
}
/**
 * Ensure that any value passes validation, without widening its type to `any`.
 */

function unknown() {
  return define('unknown', () => true);
}

/**
 * Augment a `Struct` to add an additional coercion step to its input.
 *
 * This allows you to transform input data before validating it, to increase the
 * likelihood that it passes validation—for example for default values, parsing
 * different formats, etc.
 *
 * Note: You must use `create(value, Struct)` on the value to have the coercion
 * take effect! Using simply `assert()` or `is()` will not use coercion.
 */

function coerce(struct, condition, coercer) {
  const fn = struct.coercer;
  return new Struct({ ...struct,
    coercer: value => {
      if (is(value, condition)) {
        return fn(coercer(value));
      } else {
        return fn(value);
      }
    }
  });
}
/**
 * Augment a struct to replace `undefined` values with a default.
 *
 * Note: You must use `create(value, Struct)` on the value to have the coercion
 * take effect! Using simply `assert()` or `is()` will not use coercion.
 */

function defaulted(S, fallback, options = {}) {
  const {
    strict
  } = options;
  return coerce(S, unknown(), x => {
    const f = typeof fallback === 'function' ? fallback() : fallback;

    if (x === undefined) {
      return f;
    }

    if (!strict && isPlainObject(x) && isPlainObject(f)) {
      const ret = { ...x
      };
      let changed = false;

      for (const key in f) {
        if (ret[key] === undefined) {
          ret[key] = f[key];
          changed = true;
        }
      }

      if (changed) {
        return ret;
      }
    }

    return x;
  });
}
/**
 * Augment a struct to mask its input to only properties defined in the struct.
 *
 * Note: You must use `create(value, Struct)` on the value to have the coercion
 * take effect! Using simply `assert()` or `is()` will not use coercion.
 */

function masked(struct) {
  return coerce(struct, unknown(), x => {
    if (typeof struct.schema !== 'object' || struct.schema == null || typeof x !== 'object' || x == null) {
      return x;
    } else {
      const ret = {};

      for (const key in struct.schema) {
        if (key in x) {
          ret[key] = x[key];
        }
      }

      return ret;
    }
  });
}
/**
 * Augment a struct to trim string inputs.
 *
 * Note: You must use `create(value, Struct)` on the value to have the coercion
 * take effect! Using simply `assert()` or `is()` will not use coercion.
 */

function trimmed(struct) {
  return coerce(struct, string(), x => x.trim());
}

/**
 * `Struct` objects encapsulate the validation logic for a specific type of
 * values. Once constructed, you use the `assert`, `is` or `validate` helpers to
 * validate unknown input data against the struct.
 */

class Struct {
  constructor(props) {
    this.type = props.type;
    this.schema = props.schema;

    this.coercer = props.coercer || (value => value);

    this.validator = props.validator || (() => []);

    this.refiner = props.refiner || (() => []);
  }
  /**
   * Assert that a value passes the struct's validation, throwing if it doesn't.
   */


  assert(value) {
    return assert(value, this);
  }
  /**
   * Create a value with the struct's coercion logic, then validate it.
   */


  create(value) {
    return create(value, this);
  }
  /**
   * Check if a value passes the struct's validation.
   */


  is(value) {
    return is(value, this);
  }
  /**
   * Mask a value, coercing and validating it, but returning only the subset of
   * properties defined by the struct's schema.
   */


  mask(value) {
    return mask(value, this);
  }
  /**
   * Validate a value with the struct's validation logic, returning a tuple
   * representing the result.
   *
   * You may optionally pass `true` for the `withCoercion` argument to coerce
   * the value before attempting to validate it. If you do, the result will
   * contain the coerced result when successful.
   */


  validate(value, options = {}) {
    return validate(value, this, options);
  }

}
/**
 * Assert that a value passes a `Struct`, throwing if it doesn't.
 */

function assert(value, struct) {
  const result = validate(value, struct);

  if (result[0]) {
    throw result[0];
  }
}
/**
 * Create a value with the coercion logic of `Struct` and validate it.
 */

function create(value, struct) {
  const ret = struct.coercer(value);
  assert(ret, struct);
  return ret;
}
/**
 * Mask a value, returning only the subset of properties defined by a Struct.
 */

function mask(value, struct) {
  const M = masked(struct);
  const ret = create(value, M);
  return ret;
}
/**
 * Check if a value passes a `Struct`.
 */

function is(value, struct) {
  const result = validate(value, struct);
  return !result[0];
}
/**
 * Validate a value against a `Struct`, returning an error if invalid.
 */

function validate(value, struct, options = {}) {
  if (options.coerce) {
    value = struct.coercer(value);
  }

  const failures = check(value, struct);
  const failure = shiftIterator(failures);

  if (failure) {
    const error = new StructError(failure, failures);
    return [error, undefined];
  } else {
    return [undefined, value];
  }
}
/**
 * Check a value against a `Struct`, returning an iterable of failures.
 */

function* check(value, struct, path = [], branch = []) {
  const ctx = {
    value,
    struct,
    branch,
    path,

    check(v, s, parent, key) {
      const p = parent !== undefined ? [...path, key] : path;
      const b = parent !== undefined ? [...branch, parent] : branch;
      return check(v, s, p, b);
    },

    fail(props = {}) {
      if (typeof props === 'string') {
        props = {
          message: props
        };
      }

      const {
        type
      } = struct;
      let {
        message,
        refinement
      } = props;

      if (!message) {
        message = "Expected a value of type `" + type + "`" + (refinement ? " with refinement `" + refinement + "`" : '') + (path.length ? " for `" + path.join('.') + "`" : '') + ", but received: `" + print(value) + "`";
      }

      return { ...props,
        value,
        type,
        refinement,
        message,
        key: path[path.length - 1],
        path,
        branch: [...branch, value]
      };
    }

  };
  const failures = toFailures(struct.validator(value, ctx), ctx);
  const failure = shiftIterator(failures);

  if (failure) {
    yield failure;
    yield* failures;
  } else {
    yield* toFailures(struct.refiner(value, ctx), ctx);
  }
}

/**
 * Ensure that a string, array, map, or set is empty.
 */

function empty(struct) {
  const expected = "Expected an empty " + struct.type;
  return refine(struct, 'empty', value => {
    if (value instanceof Map || value instanceof Set) {
      const {
        size
      } = value;
      return size === 0 || expected + " but received one with a size of `" + size + "`";
    } else {
      const {
        length
      } = value;
      return length === 0 || expected + " but received one with a length of `" + length + "`";
    }
  });
}
/**
 * Ensure that a number or date is below a threshold.
 */

function max(struct, threshold, options = {}) {
  const {
    exclusive
  } = options;
  return refine(struct, 'max', value => {
    return exclusive ? value < threshold : value <= threshold || "Expected a " + struct.type + " greater than " + (exclusive ? '' : 'or equal to ') + threshold + " but received `" + value + "`";
  });
}
/**
 * Ensure that a number or date is above a threshold.
 */

function min(struct, threshold, options = {}) {
  const {
    exclusive
  } = options;
  return refine(struct, 'min', value => {
    return exclusive ? value > threshold : value >= threshold || "Expected a " + struct.type + " greater than " + (exclusive ? '' : 'or equal to ') + threshold + " but received `" + value + "`";
  });
}
/**
 * Ensure that a string matches a regular expression.
 */

function pattern(struct, regexp) {
  return refine(struct, 'pattern', value => {
    return regexp.test(value) || "Expected a " + struct.type + " matching `/" + regexp.source + "/` but received \"" + value + "\"";
  });
}
/**
 * Ensure that a string, array, number, date, map, or set has a size (or length, or time) between `min` and `max`.
 */

function size(struct, min, max = min) {
  const expected = "Expected a " + struct.type;
  const of = min === max ? "of `" + min + "`" : "between `" + min + "` and `" + max + "`";
  return refine(struct, 'size', value => {
    if (typeof value === 'number' || value instanceof Date) {
      return min <= value && value <= max || expected + " " + of + " but received `" + value + "`";
    } else if (value instanceof Map || value instanceof Set) {
      const {
        size
      } = value;
      return min <= size && size <= max || expected + " with a size " + of + " but received one with a size of `" + size + "`";
    } else {
      const {
        length
      } = value;
      return min <= length && length <= max || expected + " with a length " + of + " but received one with a length of `" + length + "`";
    }
  });
}
/**
 * Augment a `Struct` to add an additional refinement to the validation.
 *
 * The refiner function is guaranteed to receive a value of the struct's type,
 * because the struct's existing validation will already have passed. This
 * allows you to layer additional validation on top of existing structs.
 */

function refine(struct, name, refiner) {
  const fn = struct.refiner;
  return new Struct({ ...struct,

    *refiner(value, ctx) {
      yield* toFailures(fn(value, ctx), ctx);

      for (const failure of toFailures(refiner(value, ctx), ctx)) {
        yield { ...failure,
          refinement: name
        };
      }
    }

  });
}

exports.Struct = Struct;
exports.StructError = StructError;
exports.any = any;
exports.array = array;
exports.assert = assert;
exports.assign = assign;
exports.boolean = boolean;
exports.coerce = coerce;
exports.create = create;
exports.date = date;
exports.defaulted = defaulted;
exports.define = define;
exports.dynamic = dynamic;
exports.empty = empty;
exports.enums = enums;
exports.func = func;
exports.instance = instance;
exports.integer = integer;
exports.intersection = intersection;
exports.is = is;
exports.lazy = lazy;
exports.literal = literal;
exports.map = map;
exports.mask = mask;
exports.masked = masked;
exports.max = max;
exports.min = min;
exports.never = never;
exports.nullable = nullable;
exports.number = number;
exports.object = object;
exports.omit = omit;
exports.optional = optional;
exports.partial = partial;
exports.pattern = pattern;
exports.pick = pick;
exports.record = record;
exports.refine = refine;
exports.regexp = regexp;
exports.set = set;
exports.size = size;
exports.string = string;
exports.struct = struct;
exports.trimmed = trimmed;
exports.tuple = tuple;
exports.type = type;
exports.union = union;
exports.unknown = unknown;
exports.validate = validate;


},{}],11:[function(require,module,exports){
"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.renderer = void 0;
var dsl = __importStar(require("./dsl"));
exports.renderer = __assign(__assign({}, dsl.singleTag.renderer), dsl.doubleTag.renderer);

},{"./dsl":16}],12:[function(require,module,exports){
"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.render = exports.record = void 0;
exports.record = __importStar(require("./record"));
exports.render = __importStar(require("./render"));

},{"./record":13,"./render":14}],13:[function(require,module,exports){
"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.render = exports.splash = exports.t = void 0;
var type = __importStar(require("superstruct"));
exports.t = type.record(type.string(), type.union([type.string(), type.number()]));
var splash = function (t1, t2) { return (__assign(__assign({}, t1), t2)); };
exports.splash = splash;
var render = function (t) { return Object
    .keys(t).map(function (k) { return ' ' + k + '="'
    + (typeof t[k] === 'string' ? t[k] : t[k].toString())
        .replace('"', '\\"') + '"'; })
    .join(''); };
exports.render = render;

},{"superstruct":10}],14:[function(require,module,exports){
"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.t = void 0;
var type = __importStar(require("superstruct"));
exports.t = type.func();

},{"superstruct":10}],15:[function(require,module,exports){
"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.renderer = exports.literals = void 0;
var a = __importStar(require("./abstracts"));
exports.literals = [
    'a',
    'abbr',
    'acronym',
    'address',
    'applet',
    'article',
    'aside',
    'audio',
    'b',
    'basefont',
    'bdi',
    'bdo',
    'big',
    'blockquote',
    'body',
    'button',
    'canvas',
    'caption',
    'center',
    'cite',
    'code',
    'colgroup',
    'data',
    'datalist',
    'dd',
    'del',
    'details',
    'dfn',
    'dialog',
    'dir',
    'div',
    'dl',
    'dt',
    'em',
    'fieldset',
    'figcaption',
    'figure',
    'font',
    'footer',
    'form',
    'frame',
    'frameset',
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'h6',
    'head',
    'header',
    'html',
    'i',
    'iframe',
    'ins',
    'kbd',
    'label',
    'li',
    'main',
    'map',
    'mark',
    'meter',
    'nav',
    'noframes',
    'noscript',
    'object',
    'ol',
    'optgroup',
    'option',
    'output',
    'p',
    'picture',
    'pre',
    'progress',
    'q',
    'rp',
    'rt',
    'ruby',
    's',
    'samp',
    'script',
    'section',
    'select',
    'small',
    'span',
    'strike',
    'strong',
    'style',
    'sub',
    'summary',
    'sup',
    'svg',
    'table',
    'tbody',
    'td',
    'template',
    'textarea',
    'tfoot',
    'th',
    'thead',
    'time',
    'title',
    'tr',
    'tt',
    'u',
    'ul',
    'var',
    'video',
];
exports.renderer = {};
exports.literals.forEach(function (l) {
    exports.renderer[l] = function (params, content) {
        return "<".concat(l).concat(a.record.render(params), ">").concat(content, "</").concat(l, ">");
    };
});

},{"./abstracts":12}],16:[function(require,module,exports){
"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.singleTag = exports.doubleTag = exports.abstracts = void 0;
exports.abstracts = __importStar(require("./abstracts"));
exports.doubleTag = __importStar(require("./double-tag"));
exports.singleTag = __importStar(require("./single-tag"));

},{"./abstracts":12,"./double-tag":15,"./single-tag":17}],17:[function(require,module,exports){
"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.renderer = exports.literals = void 0;
var a = __importStar(require("./abstracts"));
exports.literals = [
    '!DOCTYPE',
    'area',
    'base',
    'br',
    'col',
    'command',
    'embed',
    'hr',
    'img',
    'input',
    'keygen',
    'link',
    'meta',
    'param',
    'source',
    'track',
    'wbr',
];
exports.renderer = {};
exports.literals.forEach(function (l) {
    exports.renderer[l] = function (params, content) {
        return "<".concat(l).concat(a.record.render(params), ">");
    };
});

},{"./abstracts":12}],18:[function(require,module,exports){
"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.tag = exports.def = exports.dsl = void 0;
exports.dsl = __importStar(require("./dsl"));
exports.def = __importStar(require("./def"));
exports.tag = __importStar(require("./tag"));

},{"./def":11,"./dsl":16,"./tag":19}],19:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typecheck = exports.render = void 0;
var render = function (t, renderFuncs, deep) {
    if (deep === void 0) { deep = 0; }
    if (typeof t === 'string') {
        return t;
    }
    var childs = t.filter(function (v, i) { return i > 1; });
    var content = childs.map(function (tag) { return "\n" + ('  '.repeat(deep + 1))
        + (0, exports.render)(tag, renderFuncs, deep + 1); })
        .join("");
    return renderFuncs[t[0]]((t.length > 1 ? t[1] : {}), content);
};
exports.render = render;
var typecheck = function (t, renderFuncs) { return t; };
exports.typecheck = typecheck;

},{}]},{},[9]);
