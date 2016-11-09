# typeOf
'Fix' typeof function

### Reference
https://javascriptweblog.wordpress.com/2011/08/08/fixing-the-javascript-typeof-operator/

### default typeof function
Undefined  >  “undefined“

Null  >  “object“

Boolean  >  “boolean“

Number  >  “number“

String  >  “string“

Object (native and not callable)  >  “object“

Object (native or host and callable)  >  “function“

Object (host and not callable)  >  Implementation-defined

### this type of function

Undefined  >  “undefined“

Null  >  “null“

Boolean  >  “boolean“

Number  >  “number“

String  >  “string“

NaN  >  “number”

Object (native and not callable)  >  “object“

Object (native or host and callable)  >  “function“
