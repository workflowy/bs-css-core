// Generated by BUCKLESCRIPT VERSION 2.1.0, PLEASE EDIT WITH CARE
'use strict';

var List       = require("bs-platform/lib/js/list.js");
var Block      = require("bs-platform/lib/js/block.js");
var Js_dict    = require("bs-platform/lib/js/js_dict.js");
var Pervasives = require("bs-platform/lib/js/pervasives.js");

function makeDict(ruleset) {
  var toJs = function (rule) {
    switch (rule.tag | 0) {
      case 1 : 
          return /* tuple */[
                  rule[0],
                  makeDict(rule[1])
                ];
      case 0 : 
      case 2 : 
          return /* tuple */[
                  rule[0],
                  rule[1]
                ];
      
    }
  };
  return Js_dict.fromList(List.map(toJs, ruleset));
}

function join(sep, strings) {
  var _acc = "";
  var _param = strings;
  while(true) {
    var param = _param;
    var acc = _acc;
    if (param) {
      var match = param[1];
      var x = param[0];
      if (match) {
        _param = /* :: */[
          match[0],
          match[1]
        ];
        _acc = acc + (x + sep);
        continue ;
        
      } else {
        return acc + x;
      }
    } else {
      return acc;
    }
  };
}

var style = makeDict;

function keyframes(keyframes$1) {
  return Js_dict.fromList(List.map((function (param) {
                    return /* tuple */[
                            param[0],
                            makeDict(param[1])
                          ];
                  }), keyframes$1));
}

function empty() {
  return style(/* [] */0);
}

function important(v) {
  switch (v.tag | 0) {
    case 0 : 
        return /* Property */Block.__(0, [
                  v[0],
                  v[1] + " !important"
                ]);
    case 1 : 
    case 2 : 
        return v;
    
  }
}

function rgb(r, g, b) {
  return "rgb(" + (String(r) + (", " + (String(g) + (", " + (String(b) + ")")))));
}

function rgba(r, g, b, a) {
  return "rgba(" + (String(r) + (", " + (String(g) + (", " + (String(b) + (", " + (String(a) + ")")))))));
}

function hex(v) {
  return "#" + v;
}

function px(i) {
  return "" + (String(i) + "px");
}

function pct(i) {
  return "" + (String(i) + "%");
}

function rem(i) {
  return "" + (String(i) + "rem");
}

function em(i) {
  return "" + (String(i) + "em");
}

function cm(i) {
  return "" + (String(i) + "cm");
}

function mm(i) {
  return "" + (String(i) + "mm");
}

function vh(i) {
  return "" + (String(i) + "vh");
}

function vw(i) {
  return "" + (String(i) + "vw");
}

function rad(i) {
  return "" + (String(i) + "rad");
}

function deg(i) {
  return "" + (String(i) + "deg");
}

function turn(i) {
  return "" + (String(i) + "turn");
}

function unsafe(name, value) {
  return /* Property */Block.__(0, [
            name,
            value
          ]);
}

function visibility(v) {
  return /* Property */Block.__(0, [
            "visibility",
            v !== 0 ? "hidden" : "visible"
          ]);
}

function opacity(v) {
  return /* Property */Block.__(0, [
            "opacity",
            "" + (String(v) + "")
          ]);
}

function backgroundImage(url) {
  return /* Property */Block.__(0, [
            "backgroundImage",
            "url(" + (url + ")")
          ]);
}

function backgroundAttachment(v) {
  var tmp;
  switch (v) {
    case 0 : 
        tmp = "scroll";
        break;
    case 1 : 
        tmp = "fixed";
        break;
    case 2 : 
        tmp = "local";
        break;
    case 3 : 
        tmp = "initial";
        break;
    
  }
  return /* Property */Block.__(0, [
            "backgroundAttachment",
            tmp
          ]);
}

function backgroundColor(param) {
  return /* Property */Block.__(0, [
            "backgroundColor",
            param
          ]);
}

function backgroundSize(v) {
  var tmp;
  if (typeof v === "number") {
    tmp = v ? "contain" : "cover";
  } else {
    switch (v.tag | 0) {
      case 0 : 
          tmp = v[0];
          break;
      case 1 : 
          tmp = "auto " + v[0];
          break;
      case 2 : 
          tmp = v[0] + (" " + v[1]);
          break;
      
    }
  }
  return /* Property */Block.__(0, [
            "backgroundSize",
            tmp
          ]);
}

function backgroundPosition(v) {
  var tmp;
  switch (v) {
    case 0 : 
        tmp = "top";
        break;
    case 1 : 
        tmp = "bottom";
        break;
    case 2 : 
        tmp = "left";
        break;
    case 3 : 
        tmp = "right";
        break;
    case 4 : 
        tmp = "center";
        break;
    
  }
  return /* Property */Block.__(0, [
            "backgroundPosition",
            tmp
          ]);
}

function backgroundRepeat(v) {
  var tmp;
  switch (v) {
    case 0 : 
        tmp = "repeat-x";
        break;
    case 1 : 
        tmp = "repeat-y";
        break;
    case 2 : 
        tmp = "repeat";
        break;
    case 3 : 
        tmp = "space";
        break;
    case 4 : 
        tmp = "round";
        break;
    case 5 : 
        tmp = "no-repeat";
        break;
    
  }
  return /* Property */Block.__(0, [
            "backgroundRepeat",
            tmp
          ]);
}

function background(v) {
  var tmp;
  tmp = typeof v === "number" ? "none" : (
      v.tag ? "url(" + (String(v[0]) + ")") : v[0]
    );
  return /* Property */Block.__(0, [
            "background",
            tmp
          ]);
}

function color(param) {
  return /* Property */Block.__(0, [
            "color",
            param
          ]);
}

function fontFamily(param) {
  return /* Property */Block.__(0, [
            "fontFamily",
            param
          ]);
}

function fontSize(param) {
  return /* Property */Block.__(0, [
            "fontSize",
            param
          ]);
}

function fontStyle(v) {
  var tmp;
  switch (v) {
    case 0 : 
        tmp = "normal";
        break;
    case 1 : 
        tmp = "italic";
        break;
    case 2 : 
        tmp = "oblique";
        break;
    
  }
  return /* Property */Block.__(0, [
            "fontStyle",
            tmp
          ]);
}

function fontWeight(v) {
  var tmp;
  switch (v) {
    case 0 : 
        tmp = "normal";
        break;
    case 1 : 
        tmp = "bold";
        break;
    case 2 : 
        tmp = "100";
        break;
    case 3 : 
        tmp = "200";
        break;
    case 4 : 
        tmp = "300";
        break;
    case 5 : 
        tmp = "400";
        break;
    case 6 : 
        tmp = "500";
        break;
    case 7 : 
        tmp = "600";
        break;
    case 8 : 
        tmp = "700";
        break;
    case 9 : 
        tmp = "800";
        break;
    case 10 : 
        tmp = "900";
        break;
    
  }
  return /* Property */Block.__(0, [
            "fontWeight",
            tmp
          ]);
}

function textShadow(x, y, color) {
  return /* Property */Block.__(0, [
            "textShadow",
            "" + (String(x) + (" " + (String(y) + (" " + (String(color) + "")))))
          ]);
}

function textIndent(param) {
  return /* Property */Block.__(0, [
            "textIndent",
            param
          ]);
}

function textAlign(v) {
  var tmp;
  switch (v) {
    case 0 : 
        tmp = "auto";
        break;
    case 1 : 
        tmp = "left";
        break;
    case 2 : 
        tmp = "right";
        break;
    case 3 : 
        tmp = "center";
        break;
    case 4 : 
        tmp = "justify";
        break;
    
  }
  return /* Property */Block.__(0, [
            "textAlign",
            tmp
          ]);
}

function textDecoration(v) {
  var tmp;
  tmp = typeof v === "number" ? "none" : (
      v.tag ? "underline wavy " + v[0] : "underline " + v[0]
    );
  return /* Property */Block.__(0, [
            "textDecoration",
            tmp
          ]);
}

function textTransform(v) {
  var tmp;
  switch (v) {
    case 0 : 
        tmp = "none";
        break;
    case 1 : 
        tmp = "uppercase";
        break;
    case 2 : 
        tmp = "lowercase";
        break;
    case 3 : 
        tmp = "capitalize";
        break;
    case 4 : 
        tmp = "full-width";
        break;
    
  }
  return /* Property */Block.__(0, [
            "textTransform",
            tmp
          ]);
}

function lineHeight(param) {
  return /* Property */Block.__(0, [
            "lineHeight",
            param
          ]);
}

function letterSpacing(param) {
  return /* Property */Block.__(0, [
            "letterSpacing",
            param
          ]);
}

function borderStyleToString(s) {
  switch (s) {
    case 0 : 
        return "none";
    case 1 : 
        return "hidden";
    case 2 : 
        return "solid";
    case 3 : 
        return "dotted";
    case 4 : 
        return "dashed";
    case 5 : 
        return "double";
    
  }
}

function borderProp(name, width, style, color) {
  var styleString = borderStyleToString(style);
  return /* Property */Block.__(0, [
            name,
            "" + (String(width) + (" " + (String(styleString) + (" " + (String(color) + " ")))))
          ]);
}

function border(param, param$1, param$2) {
  return borderProp("border", param, param$1, param$2);
}

function borderTop(param, param$1, param$2) {
  return borderProp("borderTop", param, param$1, param$2);
}

function borderBottom(param, param$1, param$2) {
  return borderProp("borderBottom", param, param$1, param$2);
}

function borderLeft(param, param$1, param$2) {
  return borderProp("borderLeft", param, param$1, param$2);
}

function borderRight(param, param$1, param$2) {
  return borderProp("borderRight", param, param$1, param$2);
}

function borderWidth(param) {
  return /* Property */Block.__(0, [
            "borderWidth",
            param
          ]);
}

function borderTopWidth(param) {
  return /* Property */Block.__(0, [
            "borderTopWidth",
            param
          ]);
}

function borderBottomWidth(param) {
  return /* Property */Block.__(0, [
            "borderBottomWidth",
            param
          ]);
}

function borderLeftWidth(param) {
  return /* Property */Block.__(0, [
            "borderLeftWidth",
            param
          ]);
}

function borderRightWidth(param) {
  return /* Property */Block.__(0, [
            "borderRightWidth",
            param
          ]);
}

function borderStyle(style) {
  return /* Property */Block.__(0, [
            "borderStyle",
            borderStyleToString(style)
          ]);
}

function borderTopStyle(style) {
  return /* Property */Block.__(0, [
            "borderTopStyle",
            borderStyleToString(style)
          ]);
}

function borderBottomStyle(style) {
  return /* Property */Block.__(0, [
            "borderBottomStyle",
            borderStyleToString(style)
          ]);
}

function borderLeftStyle(style) {
  return /* Property */Block.__(0, [
            "borderLeftStyle",
            borderStyleToString(style)
          ]);
}

function borderRightStyle(style) {
  return /* Property */Block.__(0, [
            "borderRightStyle",
            borderStyleToString(style)
          ]);
}

function borderColor(color) {
  return /* Property */Block.__(0, [
            "borderColor",
            color
          ]);
}

function borderTopColor(color) {
  return /* Property */Block.__(0, [
            "borderTopColor",
            color
          ]);
}

function borderBottomColor(color) {
  return /* Property */Block.__(0, [
            "borderBottomColor",
            color
          ]);
}

function borderLeftColor(color) {
  return /* Property */Block.__(0, [
            "borderLeftColor",
            color
          ]);
}

function borderRightColor(color) {
  return /* Property */Block.__(0, [
            "borderRightColor",
            color
          ]);
}

function borderRadius(param) {
  return /* Property */Block.__(0, [
            "borderRadius",
            param
          ]);
}

function borderTopRightRadius(param) {
  return /* Property */Block.__(0, [
            "borderTopRightRadius",
            param
          ]);
}

function borderTopLeftRadius(param) {
  return /* Property */Block.__(0, [
            "borderTopLeftRadius",
            param
          ]);
}

function borderBottomRightRadius(param) {
  return /* Property */Block.__(0, [
            "borderBottomRightRadius",
            param
          ]);
}

function borderBottomLeftRadius(param) {
  return /* Property */Block.__(0, [
            "borderBottomLeftRadius",
            param
          ]);
}

function width(param) {
  return /* Property */Block.__(0, [
            "width",
            param
          ]);
}

function minWidth(param) {
  return /* Property */Block.__(0, [
            "minWidth",
            param
          ]);
}

function maxWidth(param) {
  return /* Property */Block.__(0, [
            "maxWidth",
            param
          ]);
}

function height(param) {
  return /* Property */Block.__(0, [
            "height",
            param
          ]);
}

function minHeight(param) {
  return /* Property */Block.__(0, [
            "minHeight",
            param
          ]);
}

function maxHeight(param) {
  return /* Property */Block.__(0, [
            "maxHeight",
            param
          ]);
}

function left(param) {
  return /* Property */Block.__(0, [
            "left",
            param
          ]);
}

function right(param) {
  return /* Property */Block.__(0, [
            "right",
            param
          ]);
}

function top(param) {
  return /* Property */Block.__(0, [
            "top",
            param
          ]);
}

function bottom(param) {
  return /* Property */Block.__(0, [
            "bottom",
            param
          ]);
}

function margin(param) {
  return /* Property */Block.__(0, [
            "margin",
            param
          ]);
}

function marginLeft(param) {
  return /* Property */Block.__(0, [
            "marginLeft",
            param
          ]);
}

function marginRight(param) {
  return /* Property */Block.__(0, [
            "marginRight",
            param
          ]);
}

function marginTop(param) {
  return /* Property */Block.__(0, [
            "marginTop",
            param
          ]);
}

function marginBottom(param) {
  return /* Property */Block.__(0, [
            "marginBottom",
            param
          ]);
}

function padding(param) {
  return /* Property */Block.__(0, [
            "padding",
            param
          ]);
}

function paddingLeft(param) {
  return /* Property */Block.__(0, [
            "paddingLeft",
            param
          ]);
}

function paddingRight(param) {
  return /* Property */Block.__(0, [
            "paddingRight",
            param
          ]);
}

function paddingTop(param) {
  return /* Property */Block.__(0, [
            "paddingTop",
            param
          ]);
}

function paddingBottom(param) {
  return /* Property */Block.__(0, [
            "paddingBottom",
            param
          ]);
}

function display(v) {
  var tmp;
  switch (v) {
    case 0 : 
        tmp = "block";
        break;
    case 1 : 
        tmp = "none";
        break;
    case 2 : 
        tmp = "inline";
        break;
    case 3 : 
        tmp = "flex";
        break;
    case 4 : 
        tmp = "grid";
        break;
    case 5 : 
        tmp = "subgrid";
        break;
    case 6 : 
        tmp = "contents";
        break;
    case 7 : 
        tmp = "table";
        break;
    case 8 : 
        tmp = "table-row";
        break;
    case 9 : 
        tmp = "table-cell";
        break;
    case 10 : 
        tmp = "table-column";
        break;
    case 11 : 
        tmp = "inline-block";
        break;
    case 12 : 
        tmp = "inline-table";
        break;
    case 13 : 
        tmp = "inline-flex";
        break;
    case 14 : 
        tmp = "inline-grid";
        break;
    
  }
  return /* Property */Block.__(0, [
            "display",
            tmp
          ]);
}

function position(v) {
  var tmp;
  switch (v) {
    case 0 : 
        tmp = "static";
        break;
    case 1 : 
        tmp = "relative";
        break;
    case 2 : 
        tmp = "absolute";
        break;
    case 3 : 
        tmp = "fixed";
        break;
    case 4 : 
        tmp = "sticky";
        break;
    
  }
  return /* Property */Block.__(0, [
            "position",
            tmp
          ]);
}

function boxSizing(v) {
  return /* Property */Block.__(0, [
            "boxSizing",
            v !== 0 ? "content-box" : "border-box"
          ]);
}

function overflow(o) {
  var tmp;
  switch (o) {
    case 0 : 
        tmp = "visible";
        break;
    case 1 : 
        tmp = "hidden";
        break;
    case 2 : 
        tmp = "scroll";
        break;
    case 3 : 
        tmp = "auto";
        break;
    
  }
  return /* Property */Block.__(0, [
            "overflow",
            tmp
          ]);
}

function overflowX(o) {
  var tmp;
  switch (o) {
    case 0 : 
        tmp = "visible";
        break;
    case 1 : 
        tmp = "hidden";
        break;
    case 2 : 
        tmp = "scroll";
        break;
    case 3 : 
        tmp = "auto";
        break;
    
  }
  return /* Property */Block.__(0, [
            "overflowX",
            tmp
          ]);
}

function overflowY(o) {
  var tmp;
  switch (o) {
    case 0 : 
        tmp = "visible";
        break;
    case 1 : 
        tmp = "hidden";
        break;
    case 2 : 
        tmp = "scroll";
        break;
    case 3 : 
        tmp = "auto";
        break;
    
  }
  return /* Property */Block.__(0, [
            "overflowY",
            tmp
          ]);
}

function zIndex(param) {
  return /* Property */Block.__(0, [
            "zIndex",
            Pervasives.string_of_int(param)
          ]);
}

function flex(param) {
  return /* Property */Block.__(0, [
            "flex",
            Pervasives.string_of_int(param)
          ]);
}

function flexBasis(param) {
  return /* Property */Block.__(0, [
            "flexBasis",
            Pervasives.string_of_int(param)
          ]);
}

function flexGrow(param) {
  return /* Property */Block.__(0, [
            "flexGrow",
            Pervasives.string_of_int(param)
          ]);
}

function flexShrink(param) {
  return /* Property */Block.__(0, [
            "flexShrink",
            Pervasives.string_of_int(param)
          ]);
}

function flexFlow(param) {
  return /* Property */Block.__(0, [
            "flexFlow",
            Pervasives.string_of_int(param)
          ]);
}

function order(param) {
  return /* Property */Block.__(0, [
            "order",
            Pervasives.string_of_int(param)
          ]);
}

function flexDirection(v) {
  var tmp;
  switch (v) {
    case 0 : 
        tmp = "row";
        break;
    case 1 : 
        tmp = "row-reverse";
        break;
    case 2 : 
        tmp = "column";
        break;
    case 3 : 
        tmp = "column-reverse";
        break;
    
  }
  return /* Property */Block.__(0, [
            "flexDirection",
            tmp
          ]);
}

function flexWrap(v) {
  return /* Property */Block.__(0, [
            "flexWrap",
            v !== 0 ? "no-wrap" : "wrap"
          ]);
}

function justifyToString(v) {
  switch (v) {
    case 0 : 
        return "flex-start";
    case 1 : 
        return "flex-end";
    case 2 : 
        return "center";
    case 3 : 
        return "stretch";
    case 4 : 
        return "space-around";
    case 5 : 
        return "space-between";
    
  }
}

function alignContent(v) {
  return /* Property */Block.__(0, [
            "alignContent",
            justifyToString(v)
          ]);
}

function alignmentToString(v) {
  switch (v) {
    case 0 : 
        return "flex-start";
    case 1 : 
        return "flex-end";
    case 2 : 
        return "center";
    case 3 : 
        return "stretch";
    case 4 : 
        return "baseline";
    
  }
}

function alignItems(v) {
  return /* Property */Block.__(0, [
            "alignItems",
            alignmentToString(v)
          ]);
}

function alignSelf(v) {
  return /* Property */Block.__(0, [
            "alignSelf",
            alignmentToString(v)
          ]);
}

function justifyContent(v) {
  return /* Property */Block.__(0, [
            "justifyContent",
            justifyToString(v)
          ]);
}

function shadow($staropt$star, $staropt$star$1, $staropt$star$2, $staropt$star$3, color) {
  var x = $staropt$star ? $staropt$star[0] : 0;
  var y = $staropt$star$1 ? $staropt$star$1[0] : 0;
  var blur = $staropt$star$2 ? $staropt$star$2[0] : 0;
  var spread = $staropt$star$3 ? $staropt$star$3[0] : 0;
  return "" + (String(x) + ("px " + (String(y) + ("px " + (String(blur) + ("px " + (String(spread) + ("px " + (String(color) + "")))))))));
}

function boxShadow(param) {
  return /* Property */Block.__(0, [
            "boxShadow",
            param
          ]);
}

function boxShadows(shadows) {
  return /* Property */Block.__(0, [
            "boxShadow",
            join(", ", shadows)
          ]);
}

function animationName(keyframes) {
  return /* Keyframes */Block.__(2, [
            "animationName",
            keyframes
          ]);
}

function animationDuration(ms) {
  return /* Property */Block.__(0, [
            "animationDuration",
            Pervasives.string_of_int(ms) + "ms"
          ]);
}

function animationDelay(ms) {
  return /* Property */Block.__(0, [
            "animationDelay",
            Pervasives.string_of_int(ms) + "ms"
          ]);
}

function animationDirection(v) {
  var tmp;
  switch (v) {
    case 0 : 
        tmp = "normal";
        break;
    case 1 : 
        tmp = "reverse";
        break;
    case 2 : 
        tmp = "alternate";
        break;
    case 3 : 
        tmp = "alternate-reverse";
        break;
    
  }
  return /* Property */Block.__(0, [
            "animationDirection",
            tmp
          ]);
}

function animationFillMode(v) {
  var tmp;
  switch (v) {
    case 0 : 
        tmp = "none";
        break;
    case 1 : 
        tmp = "forwards";
        break;
    case 2 : 
        tmp = "backwards";
        break;
    case 3 : 
        tmp = "both";
        break;
    
  }
  return /* Property */Block.__(0, [
            "animationFillMode",
            tmp
          ]);
}

function animationIterationCount(v) {
  return /* Property */Block.__(0, [
            "animationIterationCount",
            v ? Pervasives.string_of_int(v[0]) : "infinite"
          ]);
}

function animationPlayState(v) {
  return /* Property */Block.__(0, [
            "animationPlayState",
            v !== 0 ? "running" : "paused"
          ]);
}

function animationStepsToString(s) {
  if (s !== 0) {
    return "end";
  } else {
    return "start";
  }
}

function timingFunctionToString(v) {
  if (typeof v === "number") {
    switch (v) {
      case 0 : 
          return "ease";
      case 1 : 
          return "ease-in";
      case 2 : 
          return "ease-out";
      case 3 : 
          return "ease-in-out";
      case 4 : 
          return "linear";
      case 5 : 
          return "step-start";
      case 6 : 
          return "step-end";
      
    }
  } else {
    switch (v.tag | 0) {
      case 0 : 
          return "cubic-bezier(" + (String(v[0]) + (", " + (String(v[1]) + (", " + (String(v[2]) + (", " + (String(v[3]) + ")")))))));
      case 1 : 
          return "steps(" + (Pervasives.string_of_int(v[0]) + (", " + (animationStepsToString(v[1]) + ")")));
      case 2 : 
          return "frames(" + (String(v[0]) + ")");
      
    }
  }
}

function animationTimingFunction(v) {
  return /* Property */Block.__(0, [
            "animationTimingFunction",
            timingFunctionToString(v)
          ]);
}

function transitionDelay(param) {
  return /* Property */Block.__(0, [
            "transitionDelay",
            Pervasives.string_of_int(param)
          ]);
}

function transitionDuration(param) {
  return /* Property */Block.__(0, [
            "transitionDuration",
            Pervasives.string_of_int(param)
          ]);
}

function transitionProperty(param) {
  return /* Property */Block.__(0, [
            "transitionProperty",
            param
          ]);
}

function transitionTimingFunction(v) {
  var tmp;
  if (typeof v === "number") {
    switch (v) {
      case 0 : 
          tmp = "ease";
          break;
      case 1 : 
          tmp = "ease-in";
          break;
      case 2 : 
          tmp = "ease-out";
          break;
      case 3 : 
          tmp = "ease-in-out";
          break;
      case 4 : 
          tmp = "linear";
          break;
      case 5 : 
          tmp = "step-start";
          break;
      case 6 : 
          tmp = "step-end";
          break;
      
    }
  } else {
    switch (v.tag | 0) {
      case 0 : 
          tmp = "cubic-bezier(" + (String(v[0]) + (", " + (String(v[1]) + (", " + (String(v[2]) + (", " + (String(v[3]) + ")")))))));
          break;
      case 1 : 
          tmp = "steps(" + (Pervasives.string_of_int(v[0]) + (", " + (animationStepsToString(v[1]) + ")")));
          break;
      case 2 : 
          tmp = "frames(" + (String(v[0]) + ")");
          break;
      
    }
  }
  return /* Property */Block.__(0, [
            "transitionTimingFunction",
            tmp
          ]);
}

function transition($staropt$star, $staropt$star$1, $staropt$star$2, name) {
  var delay = $staropt$star ? $staropt$star[0] : 0;
  var duration = $staropt$star$1 ? $staropt$star$1[0] : 0;
  var timingFunction = $staropt$star$2 ? $staropt$star$2[0] : /* Ease */0;
  var func = timingFunctionToString(timingFunction);
  return /* Property */Block.__(0, [
            "transition",
            "" + (String(name) + (" " + (String(duration) + ("ms " + (String(func) + (" " + (String(delay) + "ms")))))))
          ]);
}

function transform(param) {
  return /* Property */Block.__(0, [
            "transform",
            param
          ]);
}

function transforms(transforms$1) {
  return /* Property */Block.__(0, [
            "transform",
            join(" ", transforms$1)
          ]);
}

function translate(x, y) {
  return "translate(" + (String(x) + (", " + (String(y) + ")")));
}

function translateX(x) {
  return "translateX(" + (String(x) + ")");
}

function translateY(y) {
  return "translateY(" + (String(y) + ")");
}

function translateZ(z) {
  return "translateZ(" + (String(z) + ")");
}

function translate3d(x, y, z) {
  return "translate(" + (String(x) + (" " + (String(y) + (", " + (String(z) + ")")))));
}

function scale(x, y) {
  return "scale(" + (String(x) + (", " + (String(y) + ")")));
}

function scale3d(x, y, z) {
  return "scale3d(" + (String(x) + (", " + (String(y) + (", " + (String(z) + ")")))));
}

function scaleX(x) {
  return "scaleX(" + (String(x) + ")");
}

function scaleY(y) {
  return "scaleY(" + (String(y) + ")");
}

function scaleZ(y) {
  return "scaleZ(" + (String(y) + ")");
}

function rotate(a) {
  return "rotate(" + (String(a) + ")");
}

function rotateX(a) {
  return "rotateX(" + (String(a) + ")");
}

function rotateY(a) {
  return "rotateY(" + (String(a) + ")");
}

function rotateZ(a) {
  return "rotateZ(" + (String(a) + ")");
}

function skew(ax, ay) {
  return "skew(" + (String(ax) + (", " + (String(ay) + "")));
}

function skewX(a) {
  return "skewX(" + (String(a) + "");
}

function skewY(a) {
  return "skewY(" + (String(a) + "");
}

function perspective(param) {
  return /* Property */Block.__(0, [
            "perspective",
            param
          ]);
}

function selector(name, rules) {
  return /* Selector */Block.__(1, [
            name,
            rules
          ]);
}

function hover(param) {
  return /* Selector */Block.__(1, [
            ":hover",
            param
          ]);
}

function disabled(param) {
  return /* Selector */Block.__(1, [
            ":disabled",
            param
          ]);
}

function required(param) {
  return /* Selector */Block.__(1, [
            ":required",
            param
          ]);
}

function readOnly(param) {
  return /* Selector */Block.__(1, [
            ":readOnly",
            param
          ]);
}

function focus(param) {
  return /* Selector */Block.__(1, [
            ":focus",
            param
          ]);
}

function active(param) {
  return /* Selector */Block.__(1, [
            ":active",
            param
          ]);
}

function visited(param) {
  return /* Selector */Block.__(1, [
            ":visited",
            param
          ]);
}

function link(param) {
  return /* Selector */Block.__(1, [
            ":link",
            param
          ]);
}

function firstChild(param) {
  return /* Selector */Block.__(1, [
            ":firstChild",
            param
          ]);
}

function firstOfType(param) {
  return /* Selector */Block.__(1, [
            ":firstOfType",
            param
          ]);
}

function lastChild(param) {
  return /* Selector */Block.__(1, [
            ":lastChild",
            param
          ]);
}

function lastOfType(param) {
  return /* Selector */Block.__(1, [
            ":lastOfType",
            param
          ]);
}

function children(param) {
  return /* Selector */Block.__(1, [
            " > *",
            param
          ]);
}

function media(query, rules) {
  return /* Selector */Block.__(1, [
            "@media " + query,
            rules
          ]);
}

function cursor(v) {
  return /* Property */Block.__(0, [
            "cursor",
            typeof v === "number" ? (
                v !== 0 ? "pointer" : "auto"
              ) : v[0]
          ]);
}

function outline(width, style, color) {
  var outlineStyle = borderStyleToString(style);
  return /* Property */Block.__(0, [
            "outline",
            "" + (String(width) + (" " + (String(outlineStyle) + (" " + (String(color) + "")))))
          ]);
}

function outlineStyle(v) {
  return /* Property */Block.__(0, [
            "outlineStyle",
            borderStyleToString(v)
          ]);
}

function outlineOffset(param) {
  return /* Property */Block.__(0, [
            "outlineOffset",
            param
          ]);
}

function outlineWidth(param) {
  return /* Property */Block.__(0, [
            "outlineWidth",
            param
          ]);
}

function outlineColor(param) {
  return /* Property */Block.__(0, [
            "outlineColor",
            param
          ]);
}

var zero = "0";

var white = "white";

var black = "black";

exports.rad                      = rad;
exports.deg                      = deg;
exports.turn                     = turn;
exports.style                    = style;
exports.keyframes                = keyframes;
exports.empty                    = empty;
exports.important                = important;
exports.px                       = px;
exports.pct                      = pct;
exports.rem                      = rem;
exports.em                       = em;
exports.vh                       = vh;
exports.vw                       = vw;
exports.cm                       = cm;
exports.mm                       = mm;
exports.zero                     = zero;
exports.rgb                      = rgb;
exports.rgba                     = rgba;
exports.hex                      = hex;
exports.white                    = white;
exports.black                    = black;
exports.unsafe                   = unsafe;
exports.visibility               = visibility;
exports.opacity                  = opacity;
exports.backgroundImage          = backgroundImage;
exports.backgroundAttachment     = backgroundAttachment;
exports.backgroundColor          = backgroundColor;
exports.backgroundSize           = backgroundSize;
exports.backgroundPosition       = backgroundPosition;
exports.backgroundRepeat         = backgroundRepeat;
exports.background               = background;
exports.color                    = color;
exports.fontFamily               = fontFamily;
exports.fontSize                 = fontSize;
exports.fontStyle                = fontStyle;
exports.fontWeight               = fontWeight;
exports.textDecoration           = textDecoration;
exports.textAlign                = textAlign;
exports.textIndent               = textIndent;
exports.textShadow               = textShadow;
exports.textTransform            = textTransform;
exports.letterSpacing            = letterSpacing;
exports.lineHeight               = lineHeight;
exports.border                   = border;
exports.borderTop                = borderTop;
exports.borderBottom             = borderBottom;
exports.borderLeft               = borderLeft;
exports.borderRight              = borderRight;
exports.borderWidth              = borderWidth;
exports.borderTopWidth           = borderTopWidth;
exports.borderBottomWidth        = borderBottomWidth;
exports.borderLeftWidth          = borderLeftWidth;
exports.borderRightWidth         = borderRightWidth;
exports.borderStyle              = borderStyle;
exports.borderTopStyle           = borderTopStyle;
exports.borderBottomStyle        = borderBottomStyle;
exports.borderLeftStyle          = borderLeftStyle;
exports.borderRightStyle         = borderRightStyle;
exports.borderColor              = borderColor;
exports.borderTopColor           = borderTopColor;
exports.borderBottomColor        = borderBottomColor;
exports.borderLeftColor          = borderLeftColor;
exports.borderRightColor         = borderRightColor;
exports.borderRadius             = borderRadius;
exports.borderTopLeftRadius      = borderTopLeftRadius;
exports.borderTopRightRadius     = borderTopRightRadius;
exports.borderBottomLeftRadius   = borderBottomLeftRadius;
exports.borderBottomRightRadius  = borderBottomRightRadius;
exports.width                    = width;
exports.minWidth                 = minWidth;
exports.maxWidth                 = maxWidth;
exports.height                   = height;
exports.minHeight                = minHeight;
exports.maxHeight                = maxHeight;
exports.left                     = left;
exports.right                    = right;
exports.top                      = top;
exports.bottom                   = bottom;
exports.margin                   = margin;
exports.marginLeft               = marginLeft;
exports.marginRight              = marginRight;
exports.marginTop                = marginTop;
exports.marginBottom             = marginBottom;
exports.padding                  = padding;
exports.paddingLeft              = paddingLeft;
exports.paddingRight             = paddingRight;
exports.paddingTop               = paddingTop;
exports.paddingBottom            = paddingBottom;
exports.display                  = display;
exports.position                 = position;
exports.boxSizing                = boxSizing;
exports.overflow                 = overflow;
exports.overflowX                = overflowX;
exports.overflowY                = overflowY;
exports.zIndex                   = zIndex;
exports.flex                     = flex;
exports.flexDirection            = flexDirection;
exports.flexBasis                = flexBasis;
exports.flexFlow                 = flexFlow;
exports.flexGrow                 = flexGrow;
exports.flexShrink               = flexShrink;
exports.flexWrap                 = flexWrap;
exports.alignContent             = alignContent;
exports.alignItems               = alignItems;
exports.alignSelf                = alignSelf;
exports.justifyContent           = justifyContent;
exports.order                    = order;
exports.shadow                   = shadow;
exports.boxShadow                = boxShadow;
exports.boxShadows               = boxShadows;
exports.animationDuration        = animationDuration;
exports.animationDelay           = animationDelay;
exports.animationDirection       = animationDirection;
exports.animationFillMode        = animationFillMode;
exports.animationIterationCount  = animationIterationCount;
exports.animationName            = animationName;
exports.animationPlayState       = animationPlayState;
exports.animationTimingFunction  = animationTimingFunction;
exports.transitionDelay          = transitionDelay;
exports.transitionDuration       = transitionDuration;
exports.transitionTimingFunction = transitionTimingFunction;
exports.transitionProperty       = transitionProperty;
exports.transition               = transition;
exports.transform                = transform;
exports.transforms               = transforms;
exports.translate                = translate;
exports.translateX               = translateX;
exports.translateY               = translateY;
exports.scale                    = scale;
exports.scaleX                   = scaleX;
exports.scaleY                   = scaleY;
exports.rotate                   = rotate;
exports.skew                     = skew;
exports.skewX                    = skewX;
exports.skewY                    = skewY;
exports.translate3d              = translate3d;
exports.translateZ               = translateZ;
exports.scale3d                  = scale3d;
exports.scaleZ                   = scaleZ;
exports.rotateX                  = rotateX;
exports.rotateY                  = rotateY;
exports.rotateZ                  = rotateZ;
exports.perspective              = perspective;
exports.selector                 = selector;
exports.link                     = link;
exports.disabled                 = disabled;
exports.required                 = required;
exports.readOnly                 = readOnly;
exports.focus                    = focus;
exports.visited                  = visited;
exports.active                   = active;
exports.hover                    = hover;
exports.firstChild               = firstChild;
exports.firstOfType              = firstOfType;
exports.lastChild                = lastChild;
exports.lastOfType               = lastOfType;
exports.children                 = children;
exports.media                    = media;
exports.cursor                   = cursor;
exports.outline                  = outline;
exports.outlineStyle             = outlineStyle;
exports.outlineOffset            = outlineOffset;
exports.outlineWidth             = outlineWidth;
exports.outlineColor             = outlineColor;
/* Js_dict Not a pure module */