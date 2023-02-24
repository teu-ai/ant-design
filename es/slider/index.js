import _typeof from '@babel/runtime/helpers/esm/typeof';
import _defineProperty from '@babel/runtime/helpers/esm/defineProperty';
import _extends from '@babel/runtime/helpers/esm/extends';
import _slicedToArray from '@babel/runtime/helpers/esm/slicedToArray';
var __rest =
  (this && this.__rest) ||
  function (s, e) {
    var t = {};
    for (var p in s)
      if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === 'function')
      for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
          t[p[i]] = s[p[i]];
      }
    return t;
  };
import classNames from 'classnames';
import RcSlider from 'rc-slider';
import * as React from 'react';
import { ConfigContext } from '../config-provider';
import warning from '../_util/warning';
import SliderTooltip from './SliderTooltip';
var Slider = /*#__PURE__*/ React.forwardRef(function (props, ref) {
  var _React$useContext = React.useContext(ConfigContext),
    getPrefixCls = _React$useContext.getPrefixCls,
    direction = _React$useContext.direction,
    getPopupContainer = _React$useContext.getPopupContainer;
  var _React$useState = React.useState({}),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    opens = _React$useState2[0],
    setOpens = _React$useState2[1];
  var toggleTooltipOpen = function toggleTooltipOpen(index, open) {
    setOpens(function (prev) {
      return _extends(_extends({}, prev), _defineProperty({}, index, open));
    });
  };
  var getTooltipPlacement = function getTooltipPlacement(tooltipPlacement, vertical) {
    if (tooltipPlacement) {
      return tooltipPlacement;
    }
    if (!vertical) {
      return 'top';
    }
    return direction === 'rtl' ? 'left' : 'right';
  };
  var customizePrefixCls = props.prefixCls,
    range = props.range,
    className = props.className,
    restProps = __rest(props, ['prefixCls', 'range', 'className']);
  var prefixCls = getPrefixCls('slider', customizePrefixCls);
  var cls = classNames(
    className,
    _defineProperty({}, ''.concat(prefixCls, '-rtl'), direction === 'rtl'),
  );
  // make reverse default on rtl direction
  if (direction === 'rtl' && !restProps.vertical) {
    restProps.reverse = !restProps.reverse;
  }
  // Range config
  var _React$useMemo = React.useMemo(
      function () {
        if (!range) {
          return [false];
        }
        return _typeof(range) === 'object' ? [true, range.draggableTrack] : [true, false];
      },
      [range],
    ),
    _React$useMemo2 = _slicedToArray(_React$useMemo, 2),
    mergedRange = _React$useMemo2[0],
    draggableTrack = _React$useMemo2[1];
  // Warning for deprecated usage
  if (process.env.NODE_ENV !== 'production') {
    [
      ['tooltipPrefixCls', 'prefixCls'],
      ['getTooltipPopupContainer', 'getPopupContainer'],
      ['tipFormatter', 'formatter'],
      ['tooltipPlacement', 'placement'],
      ['tooltipVisible', 'open'],
    ].forEach(function (_ref) {
      var _ref2 = _slicedToArray(_ref, 2),
        deprecatedName = _ref2[0],
        newName = _ref2[1];
      process.env.NODE_ENV !== 'production'
        ? warning(
            !(deprecatedName in props),
            'Slider',
            '`'
              .concat(
                deprecatedName,
                '` is deprecated which will be removed in next major version, please use `tooltip.',
              )
              .concat(newName, '` instead.'),
          )
        : void 0;
    });
  }
  var handleRender = function handleRender(node, info) {
    var _a;
    var index = info.index,
      dragging = info.dragging;
    var rootPrefixCls = getPrefixCls();
    var _props$tooltip = props.tooltip,
      tooltip = _props$tooltip === void 0 ? {} : _props$tooltip,
      vertical = props.vertical;
    var tooltipProps = _extends(
      {
        formatter:
          (_a = props.tipFormatter) !== null && _a !== void 0
            ? _a
            : // eslint-disable-next-line func-names
              function (value) {
                return typeof value === 'number' ? value.toString() : '';
              },
        open: props.tooltipVisible,
        placement: props.tooltipPlacement,
        getPopupContainer: props.getTooltipPopupContainer,
      },
      tooltip,
    );
    var tooltipOpen = tooltipProps.open,
      tooltipPlacement = tooltipProps.placement,
      getTooltipPopupContainer = tooltipProps.getPopupContainer,
      customizeTooltipPrefixCls = tooltipProps.prefixCls,
      tipFormatter = tooltipProps.formatter;
    var isTipFormatter = tipFormatter ? opens[index] || dragging : false;
    var open = tooltipOpen || (tooltipOpen === undefined && isTipFormatter);
    var passedProps = _extends(_extends({}, node.props), {
      onMouseEnter: function onMouseEnter() {
        return toggleTooltipOpen(index, true);
      },
      onMouseLeave: function onMouseLeave() {
        return toggleTooltipOpen(index, false);
      },
    });
    var tooltipPrefixCls = getPrefixCls('tooltip', customizeTooltipPrefixCls);
    return /*#__PURE__*/ React.createElement(
      SliderTooltip,
      {
        prefixCls: tooltipPrefixCls,
        title: tipFormatter ? tipFormatter(info.value) : '',
        open: open,
        placement: getTooltipPlacement(tooltipPlacement, vertical),
        transitionName: ''.concat(rootPrefixCls, '-zoom-down'),
        key: index,
        overlayClassName: ''.concat(prefixCls, '-tooltip'),
        getPopupContainer: getTooltipPopupContainer || getPopupContainer,
      },
      /*#__PURE__*/ React.cloneElement(node, passedProps),
    );
  };
  return /*#__PURE__*/ React.createElement(
    RcSlider,
    _extends({}, restProps, {
      step: restProps.step,
      range: mergedRange,
      draggableTrack: draggableTrack,
      className: cls,
      ref: ref,
      prefixCls: prefixCls,
      handleRender: handleRender,
    }),
  );
});
if (process.env.NODE_ENV !== 'production') {
  Slider.displayName = 'Slider';
}
export default Slider;
