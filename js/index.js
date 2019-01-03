var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();var _templateObject = _taggedTemplateLiteral(['\n  height: 100%;\n  width: 100%;\n  pointer-events: none;\n  flex: 1 0 ', 'rem;\n'], ['\n  height: 100%;\n  width: 100%;\n  pointer-events: none;\n  flex: 1 0 ', 'rem;\n']),_templateObject2 = _taggedTemplateLiteral(['\n  isolation: isolate;\n  perspective: 1px;\n  position: relative;\n  display: inline-block;\n  height: ', 'rem;\n  width: ', 'rem;\n  margin: 0 0.5em;\n  padding: 0;\n  border: none;\n  background: transparent;\n  font-family: ', ';\n  font-size: 1rem;\n  text-align: center;\n  text-decoration: none;\n  letter-spacing: 0.125em;\n  cursor: pointer;\n  appearance: none;\n\n  &::before {\n    content: \'\';\n    z-index: -1;\n    position: absolute;\n    bottom: 0;\n    left: 0;\n    height: 1px;\n    width: 100%;\n    background-color: ', ';\n    opacity: 0;\n    transition: opacity 0.2s ease;\n  }\n\n  &::after {\n    content: \'\';\n    z-index: 2;\n    position: absolute;\n    top: 0;\n    left: 0;\n    height: 100%;\n    width: 100%;\n    background: ', ';\n    transform-origin: 50% 50%;\n    transform: ', ';\n    transition: transform 0.2s ease;\n    mix-blend-mode: difference;\n  }\n\n  &:focus {\n    outline: none;\n\n    &::before {\n      opacity: ', ';\n    }\n\n    &:active::before {\n      opacity: 0;\n    }\n  }\n'], ['\n  isolation: isolate;\n  perspective: 1px;\n  position: relative;\n  display: inline-block;\n  height: ', 'rem;\n  width: ', 'rem;\n  margin: 0 0.5em;\n  padding: 0;\n  border: none;\n  background: transparent;\n  font-family: ', ';\n  font-size: 1rem;\n  text-align: center;\n  text-decoration: none;\n  letter-spacing: 0.125em;\n  cursor: pointer;\n  appearance: none;\n\n  &::before {\n    content: \'\';\n    z-index: -1;\n    position: absolute;\n    bottom: 0;\n    left: 0;\n    height: 1px;\n    width: 100%;\n    background-color: ', ';\n    opacity: 0;\n    transition: opacity 0.2s ease;\n  }\n\n  &::after {\n    content: \'\';\n    z-index: 2;\n    position: absolute;\n    top: 0;\n    left: 0;\n    height: 100%;\n    width: 100%;\n    background: ', ';\n    transform-origin: 50% 50%;\n    transform: ', ';\n    transition: transform 0.2s ease;\n    mix-blend-mode: difference;\n  }\n\n  &:focus {\n    outline: none;\n\n    &::before {\n      opacity: ', ';\n    }\n\n    &:active::before {\n      opacity: 0;\n    }\n  }\n']),_templateObject3 = _taggedTemplateLiteral(['\n  color: ', ';\n  user-select: none;\n  opacity: ', ';\n  transition: opacity 0.2s ease;\n'], ['\n  color: ', ';\n  user-select: none;\n  opacity: ', ';\n  transition: opacity 0.2s ease;\n']),_templateObject4 = _taggedTemplateLiteral(['\n  display: flex;\n  justify-content: center;\n  flex: 0 0 auto;\n  overflow: hidden;\n'], ['\n  display: flex;\n  justify-content: center;\n  flex: 0 0 auto;\n  overflow: hidden;\n']),_templateObject5 = _taggedTemplateLiteral(['\n  padding: ', ';\n  flex: 1 0 0;\n  border: none;\n  text-align: center;\n  background: transparent;\n  font-family: ', ';\n  text-decoration: none;\n  cursor: pointer;\n  color: ', ';\n  appearance: none;\n\n  &:focus {\n    outline: none;\n  }\n'], ['\n  padding: ', ';\n  flex: 1 0 0;\n  border: none;\n  text-align: center;\n  background: transparent;\n  font-family: ', ';\n  text-decoration: none;\n  cursor: pointer;\n  color: ', ';\n  appearance: none;\n\n  &:focus {\n    outline: none;\n  }\n']),_templateObject6 = _taggedTemplateLiteral(['\n  margin-bottom: ', 'rem;\n  font-size: 1.5rem;\n  font-weight: ', ';\n  line-height: 1.5;\n'], ['\n  margin-bottom: ', 'rem;\n  font-size: 1.5rem;\n  font-weight: ', ';\n  line-height: 1.5;\n']),_templateObject7 = _taggedTemplateLiteral(['\n  font-size: 0.75rem;\n  font-weight: ', ';\n  line-height: 1.3333;\n  letter-spacing: 0.125em;\n  text-transform: uppercase;\n'], ['\n  font-size: 0.75rem;\n  font-weight: ', ';\n  line-height: 1.3333;\n  letter-spacing: 0.125em;\n  text-transform: uppercase;\n']),_templateObject8 = _taggedTemplateLiteral(['\n  display: flex;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  flex: 0 0 auto;\n  width: 100%;\n  max-width: ', 'rem;\n  margin: 0 auto;\n  padding: ', 'rem 0;\n  color: ', ';\n'], ['\n  display: flex;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  flex: 0 0 auto;\n  width: 100%;\n  max-width: ', 'rem;\n  margin: 0 auto;\n  padding: ', 'rem 0;\n  color: ', ';\n']),_templateObject9 = _taggedTemplateLiteral(['\n  margin: 0;\n  padding-top: ', 'rem;\n  font-size: 0.875rem;\n  font-weight: ', ';\n  letter-spacing: 0.0625rem;\n  text-transform: uppercase;\n  text-align: center;\n'], ['\n  margin: 0;\n  padding-top: ', 'rem;\n  font-size: 0.875rem;\n  font-weight: ', ';\n  letter-spacing: 0.0625rem;\n  text-transform: uppercase;\n  text-align: center;\n']),_templateObject10 = _taggedTemplateLiteral(['\n  html {\n    box-sizing: border-box;\n  }\n\n  *,\n  *:before,\n  *:after {\n    box-sizing: inherit;\n  }\n\n  html,\n  body {\n    min-height: 100vh;\n  }\n\n  body {\n    display: flex; \n    margin: 0;\n    padding: 0;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    background-color: ', ';\n    color: ', ';\n    font-family: \'Roboto Mono\', monospace;\n    font-weight: 400;\n    font-size: 14px;\n    -moz-osx-font-smoothing: grayscale;\n    -webkit-font-smoothing: antialiased;\n  }\n\n  #root {\n    height: 100%;\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    flex: 1 1 100%;\n  }\n'], ['\n  html {\n    box-sizing: border-box;\n  }\n\n  *,\n  *:before,\n  *:after {\n    box-sizing: inherit;\n  }\n\n  html,\n  body {\n    min-height: 100vh;\n  }\n\n  body {\n    display: flex; \n    margin: 0;\n    padding: 0;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    background-color: ', ';\n    color: ', ';\n    font-family: \'Roboto Mono\', monospace;\n    font-weight: 400;\n    font-size: 14px;\n    -moz-osx-font-smoothing: grayscale;\n    -webkit-font-smoothing: antialiased;\n  }\n\n  #root {\n    height: 100%;\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    flex: 1 1 100%;\n  }\n']);function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self, call) {if (!self) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call && (typeof call === "object" || typeof call === "function") ? call : self;}function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;}function _taggedTemplateLiteral(strings, raw) {return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));}function _asyncToGenerator(fn) {return function () {var gen = fn.apply(this, arguments);return new Promise(function (resolve, reject) {function step(key, arg) {try {var info = gen[key](arg);var value = info.value;} catch (error) {reject(error);return;}if (info.done) {resolve(value);} else {return Promise.resolve(value).then(function (value) {step("next", value);}, function (err) {step("throw", err);});}}return step("next");});};} /* -----------------------
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           * IMPORTS
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           * --------------------- */var _React =





React,Component = _React.Component,createRef = _React.createRef,Fragment = _React.Fragment,PureComponent = _React.PureComponent;var

css =





styled.css,injectGlobal = styled.injectGlobal,keyframes = styled.keyframes,ThemeProvider = styled.ThemeProvider,withTheme = styled.withTheme,styled = styled.default;var _d =








d3,easeCubicOut = _d.easeCubicOut,extent = _d.extent,interpolatePath = _d.interpolatePath,line = _d.line,scaleLinear = _d.scaleLinear,scaleTime = _d.scaleTime,select = _d.select;

/* -----------------------
                                                                                                                                                                                   * THEME
                                                                                                                                                                                   * --------------------- */
var PIXEL_SCALE = 4;
var scale = PIXEL_SCALE / 16;

var breakpoint = {
  up: {
    xl: 1440,
    lg: 1024,
    md: 768,
    sm: 576 },

  down: {
    lg: 1439,
    md: 1023,
    sm: 767,
    xs: 575 } };



var color = {
  bg: '#1ECF81',
  text: '#fff' };


var font = {
  primary: '\'Roboto Mono\', monospace' };


var fontWeight = {
  black: '900',
  bold: '700',
  semibold: '600',
  medium: '500',
  regular: '400',
  light: '300',
  extralight: '200' };


var spacing = {
  xsmall: scale,
  small: scale * 2,
  medium: scale * 4,
  large: scale * 8,
  xlarge: scale * 16 };


var theme = {
  breakpoint: breakpoint,
  color: color,
  font: font,
  fontWeight: fontWeight,
  scale: scale,
  spacing: spacing };


/* -----------------------
                      * DATA CONSTANTS
                      * --------------------- */
var API_BASE = 'https://www.coinbase.com/api/v2/prices/';
var API_HISTORY = 'historic?period=';
var API_SPOT = 'spot';
var COIN_OPTIONS = [
'BTC',
'BCH',
'ETH',
'LTC'];

var PERIOD_OPTIONS = [
{
  value: 'hour',
  label: '1H' },

{
  value: 'day',
  label: '1D' },

{
  value: 'week',
  label: '1W' },

{
  value: 'month',
  label: '1M' },

{
  value: 'year',
  label: '1Y' },

{
  value: 'all',
  label: 'ALL' }];



/* -----------------------
                   * UTILS
                   * --------------------- */
var formatValueHistory = function formatValueHistory(prices) {return (
    prices.
    map(function (p) {return {
        price: Number(p.price),
        time: new Date(p.time) };}).

    sort(function (a, b) {return a.time - b.time;}));};

var scalePrices = function scalePrices(
data,
height,
width)




{var paddingTop = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;var paddingBottom = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;var paddingLeft = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;var paddingRight = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : 0;
  var priceToY = scaleLinear().
  range([height - paddingBottom, paddingTop]).
  domain(extent(data, function (d) {return d.price;}));

  var timeToX = scaleTime().
  range([paddingLeft, width - paddingRight]).
  domain(extent(data, function (d) {return d.time;}));

  return data.map(function (_ref) {var price = _ref.price,time = _ref.time;return {
      price: priceToY(price),
      time: timeToX(time) };});

};

var lineFromPrices = line().
x(function (d) {return d.time;}).
y(function (d) {return d.price;});

var NUMBER_REG = /\B(?=(\d{3})+(?!\d))/g;

var getSign = function getSign(price, hidePlus) {
  if (!hidePlus && price > 0) {
    return '+';
  }

  if (price < 0) {
    return '-';
  }

  return '';
};

var formatNumberString = function formatNumberString(
price)



{var symbol = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';var hidePlus = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;var symbolAfter = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  if (typeof price === 'number') {
    var sign = getSign(price, hidePlus);
    var string = Math.abs(price).toFixed(2);
    var parts = string.split('.');
    parts[0] = parts[0].replace(NUMBER_REG, ',');
    return '' + sign + (symbolAfter ? '' : symbol) + parts.join('.') + (symbolAfter ? symbol : '');
  }

  return null;
};

var deriveValueDelta = function deriveValueDelta(
currentValue,
valueHistory)
{
  if (
  typeof currentValue === 'number' &&
  Array.isArray(valueHistory) &&
  valueHistory.length > 0 &&
  valueHistory[0].price)
  {
    return currentValue - valueHistory[0].price;
  }

  return null;
};

var derivePercentDelta = function derivePercentDelta(
currentValue,
valueHistory)
{
  if (
  Array.isArray(valueHistory) &&
  valueHistory.length > 0 &&
  valueHistory[0].price)
  {
    return (
      (currentValue - valueHistory[0].price) /
      Math.abs(valueHistory[0].price) *
      100 || 0);

  }

  return null;
};


/* -----------------------
   * DATA FETCHING
   * --------------------- */
var fetchValueHistory = function () {var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(coin, period) {var d, prices;return regeneratorRuntime.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:_context.next = 2;return (
              fetch('' + API_BASE + coin + '-USD/' + API_HISTORY + period).then(function (r) {return r.json();}));case 2:d = _context.sent;
            prices = d && d.data && d.data.prices;if (!(

            Array.isArray(prices) && prices.length > 0)) {_context.next = 6;break;}return _context.abrupt('return',
            formatValueHistory(prices));case 6:throw (


              new Error('invalid price data returned'));case 7:case 'end':return _context.stop();}}}, _callee, undefined);}));return function fetchValueHistory(_x8, _x9) {return _ref2.apply(this, arguments);};}();


var fetchCurrentValue = function () {var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(coin) {var d, spot;return regeneratorRuntime.wrap(function _callee2$(_context2) {while (1) {switch (_context2.prev = _context2.next) {case 0:_context2.next = 2;return (
              fetch('' + API_BASE + coin + '-USD/' + API_SPOT).then(function (r) {return r.json();}));case 2:d = _context2.sent;
            spot = d && d.data && d.data.amount;if (!(

            typeof spot === 'string')) {_context2.next = 6;break;}return _context2.abrupt('return',
            Number(spot));case 6:throw (


              new Error('invalid spot data returned'));case 7:case 'end':return _context2.stop();}}}, _callee2, undefined);}));return function fetchCurrentValue(_x10) {return _ref3.apply(this, arguments);};}();


/* -----------------------
                                                                                                                                                                                                                   * COMPONENT: <Line />
                                                                                                                                                                                                                   * --------------------- */
var LINE_DUMMY = Array(2).
fill().
map(function (a, i) {return { price: 0, time: new Date(2010 + i) };});
var PADDING = 24;
var TRANSITION_DURATION = 500;

var safePrices = function safePrices(prices) {return (
    Array.isArray(prices) && prices.length > 1 ? prices : LINE_DUMMY);};

var Svg = styled.svg(_templateObject,



function (_ref4) {var theme = _ref4.theme;return theme.scale * 40;});var


LineBase = function (_PureComponent) {_inherits(LineBase, _PureComponent);function LineBase() {var _ref5;var _temp, _this, _ret;_classCallCheck(this, LineBase);for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {args[_key] = arguments[_key];}return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref5 = LineBase.__proto__ || Object.getPrototypeOf(LineBase)).call.apply(_ref5, [this].concat(args))), _this), _this.
    pathRef = createRef(), _this.
    svgRef = createRef(), _this.

































    handleResize = function () {
      if (_this.svgRef && _this.svgRef.current) {var _this$svgRef$current$ =
        _this.svgRef.current.getBoundingClientRect(),height = _this$svgRef$current$.height,width = _this$svgRef$current$.width;
        _this.height = height;
        _this.width = width;

        _this.updatePath();
      }
    }, _this.

    updatePath = function () {var
      prices = _this.props.prices;

      var d = lineFromPrices(
      scalePrices(safePrices(prices), _this.height, _this.width, PADDING, PADDING));


      _this.path.
      transition().
      duration(TRANSITION_DURATION).
      ease(easeCubicOut).
      attrTween('d', interpolatePath.bind(null, _this.d, d));

      _this.d = d;
    }, _temp), _possibleConstructorReturn(_this, _ret);}_createClass(LineBase, [{ key: 'componentDidMount', value: function componentDidMount() {if (this.pathRef && this.pathRef.current && this.svgRef && this.svgRef.current) {var _svgRef$current$getBo = this.svgRef.current.getBoundingClientRect(),height = _svgRef$current$getBo.height,width = _svgRef$current$getBo.width;var prices = this.props.prices;this.path = select(this.pathRef.current);this.height = height;this.width = width;var d = lineFromPrices(scalePrices(safePrices(prices), height, width, PADDING, PADDING));this.path.attr('d', d);this.d = d;window.addEventListener('resize', this.handleResize);}} }, { key: 'componentDidUpdate', value: function componentDidUpdate() {this.updatePath();} }, { key: 'componentWillUnmount', value: function componentWillUnmount() {window.removeEventListener('resize', this.handleResize);} }, { key: 'render', value: function render()

    {
      return (
        React.createElement(Svg, { innerRef: this.svgRef },
          React.createElement('path', { fill: 'none', ref: this.pathRef, stroke: this.props.theme.color.text, strokeWidth: '1.5' })));


    } }]);return LineBase;}(PureComponent);


var Line = withTheme(LineBase);

/* -----------------------
                                * COMPONENT: <PeriodSwitcher />
                                * --------------------- */
var PeriodButton = styled.button(_templateObject2,




function (_ref6) {var theme = _ref6.theme;return theme.spacing.large;},
function (_ref7) {var theme = _ref7.theme;return theme.spacing.large;},




function (_ref8) {var theme = _ref8.theme;return theme.font.primary;},















function (_ref9) {var theme = _ref9.theme;return theme.color.text;},












function (_ref10) {var theme = _ref10.theme;return theme.color.text;},

function (_ref11) {var active = _ref11.active;return (
    active ? 'scale3d(1, 1, 1)' : 'scale3d(1, 0, 1)');},








function (_ref12) {var active = _ref12.active;return active ? 0 : 0.75;});








var PeriodText = styled.span(_templateObject3,
function (_ref13) {var theme = _ref13.theme;return theme.color.text;},

function (_ref14) {var active = _ref14.active;return active ? 1 : 0.75;});var



PeriodItem = function (_PureComponent2) {_inherits(PeriodItem, _PureComponent2);function PeriodItem() {var _ref15;var _temp2, _this2, _ret2;_classCallCheck(this, PeriodItem);for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {args[_key2] = arguments[_key2];}return _ret2 = (_temp2 = (_this2 = _possibleConstructorReturn(this, (_ref15 = PeriodItem.__proto__ || Object.getPrototypeOf(PeriodItem)).call.apply(_ref15, [this].concat(args))), _this2), _this2.







    handleClick = function (e) {var _this2$props =
      _this2.props,onClick = _this2$props.onClick,value = _this2$props.value;
      if (typeof onClick === 'function') {
        onClick(e, value);
      }
    }, _temp2), _possibleConstructorReturn(_this2, _ret2);}_createClass(PeriodItem, [{ key: 'render', value: function render()

    {var _props =
      this.props,active = _props.active,children = _props.children;
      return (
        React.createElement(PeriodButton, { active: active, onClick: this.handleClick },
          React.createElement(PeriodText, { active: active }, children)));


    } }]);return PeriodItem;}(PureComponent);PeriodItem.defaultProps = { active: false, children: null, onClick: null, value: null };


var PeriodSwitcherWrapper = styled.div(_templateObject4);var






PeriodSwitcher = function (_PureComponent3) {_inherits(PeriodSwitcher, _PureComponent3);function PeriodSwitcher() {_classCallCheck(this, PeriodSwitcher);return _possibleConstructorReturn(this, (PeriodSwitcher.__proto__ || Object.getPrototypeOf(PeriodSwitcher)).apply(this, arguments));}_createClass(PeriodSwitcher, [{ key: 'render', value: function render()






    {var _props2 =
      this.props,onChange = _props2.onChange,options = _props2.options,value = _props2.value;

      return (
        React.createElement(PeriodSwitcherWrapper, null,
          Array.isArray(options) &&
          options.map(function (o) {return (
              React.createElement(PeriodItem, {
                  active: value === o.value,
                  key: o.value,
                  onClick: onChange,
                  value: o.value },

                o.label));})));




    } }]);return PeriodSwitcher;}(PureComponent);


/* -----------------------
                                                  * COMPONENT: <Overview />
                                                  * --------------------- */PeriodSwitcher.defaultProps = { onChange: null, options: [], value: null };
var OverviewItemButton = styled.button(_templateObject5,
function (_ref16) {var theme = _ref16.theme;return (
    theme.spacing.small + 'rem ' + theme.spacing.medium + 'rem');},




function (_ref17) {var theme = _ref17.theme;return theme.font.primary;},


function (_ref18) {var theme = _ref18.theme;return theme.color.text;});







var Value = styled.div(_templateObject6,
function (_ref19) {var theme = _ref19.theme;return theme.spacing.small;},

function (_ref20) {var theme = _ref20.theme;return theme.fontWeight.medium;});



var Label = styled.div(_templateObject7,

function (_ref21) {var theme = _ref21.theme;return theme.fontWeight.medium;});





var OverviewItem = function OverviewItem(_ref22) {var children = _ref22.children,label = _ref22.label,onClick = _ref22.onClick;return (
    React.createElement(OverviewItemButton, { onClick: onClick },
      React.createElement(Value, null, children || React.createElement(Fragment, null, '\xA0')),
      React.createElement(Label, null, label)));};



OverviewItem.defaultProps = {
  children: null,
  label: '',
  onClick: null };


var OverviewWrapper = styled.div(_templateObject8,





function (_ref23) {var theme = _ref23.theme;return theme.scale * 148;},

function (_ref24) {var theme = _ref24.theme;return theme.spacing.large;},
function (_ref25) {var theme = _ref25.theme;return theme.color.text;});var


Overview = function (_PureComponent4) {_inherits(Overview, _PureComponent4);function Overview() {var _ref26;var _temp3, _this4, _ret3;_classCallCheck(this, Overview);for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {args[_key3] = arguments[_key3];}return _ret3 = (_temp3 = (_this4 = _possibleConstructorReturn(this, (_ref26 = Overview.__proto__ || Object.getPrototypeOf(Overview)).call.apply(_ref26, [this].concat(args))), _this4), _this4.
    state = {
      calcPercentage: false }, _this4.


    togglePercentage = function () {
      _this4.setState(function (prevState) {return {
          calcPercentage: !prevState.calcPercentage };});

    }, _temp3), _possibleConstructorReturn(_this4, _ret3);}_createClass(Overview, [{ key: 'render', value: function render()

    {var _props3 =
      this.props,coin = _props3.coin,currentValue = _props3.currentValue,cycleCoinIndex = _props3.cycleCoinIndex,valueHistory = _props3.valueHistory;var
      calcPercentage = this.state.calcPercentage;
      var delta = calcPercentage ?
      formatNumberString(derivePercentDelta(currentValue, valueHistory), '%', false, true) :
      formatNumberString(deriveValueDelta(currentValue, valueHistory), '$');

      return (
        React.createElement(OverviewWrapper, null,
          React.createElement(OverviewItem, { onClick: this.props.cycleCoinIndex, label: coin + ' Price' },
            formatNumberString(currentValue, '$', true)),

          React.createElement(OverviewItem, { onClick: this.togglePercentage, label: (calcPercentage ? 'Percent' : 'Price') + ' Change' },
            delta)));



    } }]);return Overview;}(PureComponent);


/* -----------------------
                                            * COMPONENT: <Heading />
                                            * --------------------- */
var Heading = styled.h1(_templateObject9,

function (_ref27) {var theme = _ref27.theme;return theme.spacing.large * 1.5;},

function (_ref28) {var theme = _ref28.theme;return theme.fontWeight.medium;});





/* -----------------------
                                                                               * COMPONENT: <CryptoChart />
                                                                               * --------------------- */var
CryptoChart = function (_PureComponent5) {_inherits(CryptoChart, _PureComponent5);function CryptoChart() {var _ref29,_this6 = this;var _temp4, _this5, _ret4;_classCallCheck(this, CryptoChart);for (var _len4 = arguments.length, args = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {args[_key4] = arguments[_key4];}return _ret4 = (_temp4 = (_this5 = _possibleConstructorReturn(this, (_ref29 = CryptoChart.__proto__ || Object.getPrototypeOf(CryptoChart)).call.apply(_ref29, [this].concat(args))), _this5), _this5.
    state = {
      coinIndex: 0,
      currentValue: null,
      period: PERIOD_OPTIONS[0].value,
      valueHistory: [] }, _this5.






    cycleCoinIndex = function () {
      _this5.setState(function (prevState) {return {
          coinIndex: (prevState.coinIndex + 1) % COIN_OPTIONS.length };},
      _this5.fetchData);
    }, _this5.

    setPeriod = function (e, period) {
      _this5.setState({ period: period }, _this5.fetchData);
    }, _this5.





    fetchData = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {var _this5$state, coinIndex, period, currentValue, valueHistory;return regeneratorRuntime.wrap(function _callee3$(_context3) {while (1) {switch (_context3.prev = _context3.next) {case 0:
              clearTimeout(_this5.fetchTimeout);_this5$state =
              _this5.state, coinIndex = _this5$state.coinIndex, period = _this5$state.period;_context3.prev = 2;_context3.next = 5;return (


                fetchCurrentValue(COIN_OPTIONS[coinIndex]));case 5:currentValue = _context3.sent;_context3.next = 8;return (
                fetchValueHistory(COIN_OPTIONS[coinIndex], period));case 8:valueHistory = _context3.sent;
              _this5.setState({ currentValue: currentValue, valueHistory: valueHistory });_context3.next = 15;break;case 12:_context3.prev = 12;_context3.t0 = _context3['catch'](2);

              console.warn(_context3.t0);case 15:


              _this5.fetchTimeout = setTimeout(_this5.fetchData, 30000);case 16:case 'end':return _context3.stop();}}}, _callee3, _this6, [[2, 12]]);})), _temp4), _possibleConstructorReturn(_this5, _ret4);}_createClass(CryptoChart, [{ key: 'componentDidMount', value: function componentDidMount() {this.fetchData();} }, { key: 'componentWillUnmount', value: function componentWillUnmount() {clearTimeout(this.fetchTimeout);} }, { key: 'render', value: function render()


    {var _state =
      this.state,coinIndex = _state.coinIndex,currentValue = _state.currentValue,period = _state.period,valueHistory = _state.valueHistory;

      return (
        React.createElement(Fragment, null,
          React.createElement(Heading, null, 'Gnet Cryptocurrency Tracker'),
          React.createElement(Overview, {
            coin: COIN_OPTIONS[coinIndex],
            cycleCoinIndex: this.cycleCoinIndex,
            currentValue: currentValue,
            valueHistory: valueHistory }),

          React.createElement(PeriodSwitcher, {
            onChange: this.setPeriod,
            options: PERIOD_OPTIONS,
            value: period }),

          React.createElement(Line, { prices: valueHistory })));


    } }]);return CryptoChart;}(PureComponent);


/* -----------------------
                                               * COMPONENT: <App />
                                               * --------------------- */
var App = function App() {return (
    React.createElement(ThemeProvider, { theme: theme },
      React.createElement(CryptoChart, null)));};



/* -----------------------
                                                  * GLOBAL STYLES
                                                  * --------------------- */
injectGlobal(_templateObject10,






















theme.color.bg,
theme.color.text);
















/* -----------------------
                   * MOUNT/RENDER
                   * --------------------- */
var app = document.createElement('div');
app.setAttribute('id', 'root');
document.body.appendChild(app);
ReactDOM.render(React.createElement(App, null), app);