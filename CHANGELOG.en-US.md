---
order: 6
title: Change Log
toc: false
timeline: true
---

`antd` strictly follows [Semantic Versioning 2.0.0](http://semver.org/).

#### Release Schedule

- Weekly release: patch version at the end of every week for routine bugfix (anytime for urgent bugfix).
- Monthly release: minor version at the end of every month for new features.
- Major version release is not included in this schedule for breaking change and new features.

---

## 4.24.7

`2022-12-30`

- π Fix Tabs slider that cannot resize. [#39867](https://github.com/ant-design/ant-design/pull/39867)
- π Fix Input text is missing when `suffix` is applied in Safari. [#39830](https://github.com/ant-design/ant-design/pull/39830) [@ifujustayup](https://github.com/ifujustayup)

## 4.24.6

`2022-12-26`

- π Dropdown support `autoAdjustOverflow`. [#39741](https://github.com/ant-design/ant-design/pull/39741)
- π Fix `justify` and `align` properties are not reactive for Row. [#39706](https://github.com/ant-design/ant-design/pull/39706) [@candy4290](https://github.com/candy4290)
- π Fix Drawer that could not be close with `open={false}`. [#39561](https://github.com/ant-design/ant-design/pull/39561)
- π Fix Divider `horizontal` align issue in flex layout. [#39334](https://github.com/ant-design/ant-design/pull/39334)
- π Fix `Dropdown` component dange and disabled style priority issue. [#39434](https://github.com/ant-design/ant-design/pull/39434) [@Wxh16144](https://github.com/Wxh16144)
- β¨οΈ Reset aria-label in Table column. [#39747](https://github.com/ant-design/ant-design/pull/39747) [@kiner-tang](https://github.com/kiner-tang)
- π Localization
  - πΊπΏ Add uz_UZ locale. [#39353](https://github.com/ant-design/ant-design/pull/39353) [@nodkz](https://github.com/nodkz)

## 4.24.5

`2022-12-05`

- π Fix Menu.Item with `disabled` not prevent a element clickable. [aa8d7f5](https://github.com/ant-design/ant-design/commit/aa8d7f5) [@δΊθ΄§ζΊε¨δΊΊ](https://github.com/δΊθ΄§ζΊε¨δΊΊ)
- π Tweak Popconfirm icon position when `title` have multiple lines. [#39027](https://github.com/ant-design/ant-design/pull/39027) [@justanotheranonymoususer](https://github.com/justanotheranonymoususer)
- π Fix Badge the color cannot be customized when `count` is `0`. [#39062](https://github.com/ant-design/ant-design/pull/39062) [@Wxh16144](https://github.com/Wxh16144)
- π Fix Card.Meta width is not 100%. [#39039](https://github.com/ant-design/ant-design/pull/39039) [@justanotheranonymoususer](https://github.com/justanotheranonymoususer)
- π Fix TimePicker pass to 'popupClassName' will display unexpected warning. [#39010](https://github.com/ant-design/ant-design/pull/39010) [@kiner-tang](https://github.com/kiner-tang)
- π Fix Steps set `size="small"` with progress not fully display. [#39103](https://github.com/ant-design/ant-design/pull/39103) [@Wxh16144](https://github.com/Wxh16144)

## 4.24.4

`2022-11-25`

- Space.Compact
  - π Optimize Space.Compact style when wrapping a single child component. [#38913](https://github.com/ant-design/ant-design/pull/38913) [@foryuki](https://github.com/foryuki)
  - π Optimize Space.Compact style when wrapping Modal, Dropdown, Drawer and other components. [#38887](https://github.com/ant-design/ant-design/pull/38887) [@foryuki](https://github.com/foryuki)
- π Mentions support `options` prop. [#38876](https://github.com/ant-design/ant-design/pull/38876) [@heiyu4585](https://github.com/heiyu4585)
- π Fix ConfigProvider that `componentDisabled` is not work. [#38886](https://github.com/ant-design/ant-design/pull/38886) [@lidianhao123](https://github.com/lidianhao123)
- π Fix Message that `onClose` didn't triggered when `duration` is `0`. [#38669](https://github.com/ant-design/ant-design/pull/38669) [@kiner-tang](https://github.com/kiner-tang)

## 4.24.3

`2022-11-17`

- π Fix Typography config `prefixCls` not working. [#38586](https://github.com/ant-design/ant-design/pull/38586) [@SavelevMatthew](https://github.com/SavelevMatthew)
- π Fix Table should not trigger sorter when pressing Enter in filter dropdown. [#38585](https://github.com/ant-design/ant-design/pull/38585)
- π Allow Modal pass `mousePosition` to control animation origin position. [#38584](https://github.com/ant-design/ant-design/pull/38584) [@kiner-tang](https://github.com/kiner-tang)
- π Fix Input.Search should not trigger `onSearch` while loading. [#38578](https://github.com/ant-design/ant-design/pull/38578) [@JackLiR8](https://github.com/JackLiR8)
- π Fix Breadcrumb throw wrong `overlay` deprecated warning. [#38567](https://github.com/ant-design/ant-design/pull/38567) [@li-jia-nan](https://github.com/li-jia-nan)

## 4.24.2

`2022-11-12`

- Image
  - π Image preview controls enter animation should not be zooming out. [#36456](https://github.com/ant-design/ant-design/pull/36456)
  - π Fix Image preview not showing error images. [#38112](https://github.com/ant-design/ant-design/pull/38112)
- Typography
  - π Fix Typography.Text `tooltip` do not display in List. [#38431](https://github.com/ant-design/ant-design/pull/38431) [@crazyair](https://github.com/crazyair)
  - π Fix Typography.Paragraph flash issue in some situations. [#38439](https://github.com/ant-design/ant-design/pull/38439) [@tinyfind](https://github.com/tinyfind)
- π Fix Menu SubMenu flick when collapse it. [#36636](https://github.com/ant-design/ant-design/issues/36636) [@JarvisArt](https://github.com/JarvisArt)
- π Fix RangePicker that `onBlur` gets triggered when selecting dates. [#38411](https://github.com/ant-design/ant-design/pull/38411) [@kiner-tang](https://github.com/kiner-tang)
- π Result should hide icon when it is falsy. [#38488](https://github.com/ant-design/ant-design/pull/38488)
- π Fix Dropdown.Button throws `overlay is deprecated` warning. [#38446](https://github.com/ant-design/ant-design/pull/38446) [@li-jia-nan](https://github.com/li-jia-nan)
- π Improve error message about multiple Form.Item children. [#38038](https://github.com/ant-design/ant-design/pull/38038) [@cincodenada](https://github.com/cincodenada)
- π  Resolve Tree circular import issue. [#38421](https://github.com/ant-design/ant-design/pull/38421) [@KotoriK](https://github.com/KotoriK)
- π Fix Affix shake issue when switching visible. [#38410](https://github.com/ant-design/ant-design/pull/38410) [@imoctopus](https://github.com/imoctopus)
- π Fix Pagination `simple` mode should support `showTotal` property. [#38399](https://github.com/ant-design/ant-design/pull/38399)
- π Fix Modal.confirm buttons should not be interactive when modal is hiding. [#38400](https://github.com/ant-design/ant-design/pull/38400)
- π Fix Radio.Group style problem using in Drawer `extra`. [#38385](https://github.com/ant-design/ant-design/pull/38385)
- β¨οΈ Fix Table `aria-label` contains `[object Object]`. [#38389](https://github.com/ant-design/ant-design/pull/38389) [@kiner-tang](https://github.com/kiner-tang)
- β¨οΈ Adds role progressbar to Progress component. [#38447](https://github.com/ant-design/ant-design/pull/38447) [@kpustakhod](https://github.com/kpustakhod)

## 4.24.1

`2022-11-04`

- π Revert [#38160](https://github.com/ant-design/ant-design/pull/38160) to fix Table render `column.title` not as expect. [#38383](https://github.com/ant-design/ant-design/pull/38383)
- π Alert add `@alert-padding-vertical` & `@alert-padding-horizontal` less variables. [#38369](https://github.com/ant-design/ant-design/pull/38369) [@imoctopus](https://github.com/imoctopus)
- π Fix Steps with customize Step `status` not work. [#38319](https://github.com/ant-design/ant-design/pull/38319) [@heiyu4585](https://github.com/heiyu4585)
- π Fix Popconfirm icon color get polluted. [#38355](https://github.com/ant-design/ant-design/pull/38355)
- π Fix Anchor missing dot style. [#38338](https://github.com/ant-design/ant-design/pull/38338) [@li-jia-nan](https://github.com/li-jia-nan)
- π Fix DatePicker missing `popupClassName` definition. [#38325](https://github.com/ant-design/ant-design/pull/38325) [@Cedong.Lee](https://github.com/Cedong.Lee)

## 4.24.0

`2022-11-01`

- π₯ Add new component Space.Compact used to replace Input.Group and Button.Group. [#37652](https://github.com/ant-design/ant-design/pull/37652) [@foryuki](https://github.com/foryuki)
- π The `disabled` property on components inside a Form will now take precedence over the `disabled` property of the Form. [#37628](https://github.com/ant-design/ant-design/pull/37628) [@kiner-tang](https://github.com/kiner-tang)
- π Add `text` config for editable Typograph, support enabling ellipsis and editable at the same time. [#37761](https://github.com/ant-design/ant-design/pull/37761) [@zheeeng](https://github.com/zheeeng)
- π Row `align` and `justify` support reponsive value. [#37860](https://github.com/ant-design/ant-design/pull/37860) [@kiner-tang](https://github.com/kiner-tang)
- π Image add `preview.scaleStep` prop to adjust the magnitude of zoom in and out and set the default `scaleOffset` to 0.5. [#37340](https://github.com/ant-design/ant-design/pull/37340) [@coldice945](https://github.com/coldice945)
- π Steps support `items`. [#37531](https://github.com/ant-design/ant-design/pull/37531) [@heiyu4585](https://github.com/heiyu4585)
- π Collapse supports `collapsible="icon"` to collapse by clicking icon. [#37566](https://github.com/ant-design/ant-design/pull/37566) [@Sheepeer](https://github.com/Sheepeer)
- π Input.Password supports `visibilityToggle={{ visible, onVisibleChange }}` so that you can manually control password display and hide. [#38216](https://github.com/ant-design/ant-design/pull/38216) [@MrHeer](https://github.com/MrHeer)
- π Breadcrumb added the `menu` property. [#37885](https://github.com/ant-design/ant-design/pull/37885) [@JarvisArt](https://github.com/JarvisArt)
- π Dropdown added the `menu` `dropdownRender` property, and deprecated the `overlay` property. [#37885](https://github.com/ant-design/ant-design/pull/37885) [@JarvisArt](https://github.com/JarvisArt)
- Table
  - π Table `filterDropdown` add close in argument to `close` filter dropdown only. [#37745](https://github.com/ant-design/ant-design/pull/37745) [@kiner-tang](https://github.com/kiner-tang)
  - π Fix Table `aria-label` contains `[object Object]`. [#38160](https://github.com/ant-design/ant-design/pull/38160) [@kiner-tang](https://github.com/kiner-tang)
- π Fix Tabs component not reading the `getPopupContainer` property of ConfigProvider. [#38238](https://github.com/ant-design/ant-design/pull/38238) [@ZH-seven](https://github.com/ZH-seven)
- π Fix Tooltip is broken when used in a disabled Menu.Item. [#38273](https://github.com/ant-design/ant-design/pull/38273)
- π Fix the issue of miscalculated transform-origin for Tooltip with `placement` values like `topRight` or `bottomLeft`. [#38159](https://github.com/ant-design/ant-design/pull/38159) [@strear](https://github.com/strear)
- π TimePicker remove redundant warning about using `popupClassName`. [#38190](https://github.com/ant-design/ant-design/pull/38190) [@kiner-tang](https://github.com/kiner-tang)
- π Fix nest Drawer with default `open` append document order issue. [#37767](https://github.com/ant-design/ant-design/pull/37767) [#37790](https://github.com/ant-design/ant-design/pull/37790)
- π Fix issue where numbers were not displayed when Badge set both `color` and `count`. [#37609](https://github.com/ant-design/ant-design/pull/37609) [@kiner-tang](https://github.com/kiner-tang)
- π Fix Progress zoom behavior in Safari. [#38301](https://github.com/ant-design/ant-design/pull/38301)
- Modal
  - π Fix Modal animation flush issue in React 18. [#38275](https://github.com/ant-design/ant-design/pull/38275)
  - π Fix Modal.method() not focus trigger after close. [#38275](https://github.com/ant-design/ant-design/pull/38275)
- Transfer
  - π Fix Transfer titles is undefined. [#38182](https://github.com/ant-design/ant-design/pull/38182) [@kiner-tang](https://github.com/kiner-tang)
  - π  Remove Transfer `defaultprops` spelling. [#38164](https://github.com/ant-design/ant-design/pull/38164) [#38154](https://github.com/ant-design/ant-design/pull/38154) [@li-jia-nan](https://github.com/li-jia-nan)
- π  Refactor Anchor to Function Component, some methods of obtaining `ref` and calling internal instance methods will invalid.. [#38265](https://github.com/ant-design/ant-design/pull/38265) [#37957](https://github.com/ant-design/ant-design/pull/37957) [@li-jia-nan](https://github.com/li-jia-nan) [@RexSkz](https://github.com/RexSkz)
- π  The layout of the Dropdown.Button component is implemented using Space.Compact instead. [#38090](https://github.com/ant-design/ant-design/pull/38090) [@foryuki](https://github.com/foryuki)
- π  Optimize the internal implementation of DirectoryTree Typography component. [#38184](https://github.com/ant-design/ant-design/pull/38184) [#38181](https://github.com/ant-design/ant-design/pull/38181) [@holazz](https://github.com/holazz) [#37716](https://github.com/ant-design/ant-design/pull/37716) [@zheeeng](https://github.com/zheeeng)
- π Fix TextArea custom border style not working when allowClear is enable. [#38101](https://github.com/ant-design/ant-design/pull/38101)
- π Fix Popconfirm style issue when icon={null}, now an additional span tag will be wrapped around the icon element. [#37384](https://github.com/ant-design/ant-design/pull/37384) [@edc-hui](https://github.com/edc-hui)
- π Fix Menu highlight style in compact mode. [#38223](https://github.com/ant-design/ant-design/pull/38223) [@messaooudi](https://github.com/messaooudi)
- Carousel
  - π Enlarge Carousel dots hover area for better experience. [#38257](https://github.com/ant-design/ant-design/pull/38257)
  - π Fix Carousel dots margin style not being reset. [#38100](https://github.com/ant-design/ant-design/pull/38100)
- TypeScript
  - π€ Mentions additionally exports MentionsRef. [#38028](https://github.com/ant-design/ant-design/pull/38028) [@simonwong](https://github.com/simonwong)
- π Localization
  - Add Transfer `titles` property internationalization configuration. [#38168](https://github.com/ant-design/ant-design/pull/38168) [@kiner-tang](https://github.com/kiner-tang)
  - Fix default Empty description text. [#38127](https://github.com/ant-design/ant-design/pull/38127) [@HelloBojack](https://github.com/HelloBojack)
  - π?πΉ Add missing `it_IT` locale. [#38108](https://github.com/ant-design/ant-design/pull/38108) [@ernestfolch](https://github.com/ernestfolch)
  - π«π· Add missing `fr_FR` locale. [#38072](https://github.com/ant-design/ant-design/pull/38072) [@smwhr](https://github.com/smwhr)

## 4.23.6

`2022-10-17`

- Table
  - π Fix Table with sticky header shadow style issue. [#38023](https://github.com/ant-design/ant-design/pull/38023) [@liuycy](https://github.com/liuycy)
  - π Fix Table with `ellipsis` missing `title` attribute. [416c61f](https://github.com/ant-design/ant-design/commit/416c61f)
- π Fix Breadcrumb not support number `0`. [#38006](https://github.com/ant-design/ant-design/pull/38006) [@li-jia-nan](https://github.com/li-jia-nan)
- Input
  - π Fix Input.TextArea render extra input node when enable `autoSize`. [#38050](https://github.com/ant-design/ant-design/pull/38050)
  - π Fix Input.Password that should not have value prop on input after click toggle icon. [#37900](https://github.com/ant-design/ant-design/pull/37900) [@linxianxi](https://github.com/linxianxi)
  - π Fix border style issues for Input.Search in RTL. [#37980](https://github.com/ant-design/ant-design/pull/37980) [@foryuki](https://github.com/foryuki)
- π Fix AutoComplete warning for unused `dropdownClassName`. [#37974](https://github.com/ant-design/ant-design/pull/37974) [@heiyu4585](https://github.com/heiyu4585)
- π Fix Typography with ellipsis that the computed `fontSize` style be calculated as empty string in some case. [#37928](https://github.com/ant-design/ant-design/pull/37928) [@zheeeng](https://github.com/zheeeng)
- π Fix editable Tabs add button missing in edge case. [#37937](https://github.com/ant-design/ant-design/pull/37937)
- π Fix RangePicker panel blink in some case. [#439](https://github.com/react-component/picker/pull/439)
- π  Refactor Spin with Function Component. [#37969](https://github.com/ant-design/ant-design/pull/37969) [@li-jia-nan](https://github.com/li-jia-nan)
- π  Refactor Statistic.Countdown with Function Component. [#37938](https://github.com/ant-design/ant-design/pull/37938) [@li-jia-nan](https://github.com/li-jia-nan)

## 4.23.5

`2022-10-10`

- π Fix Textarea with `autoSize` blink on the fist mount. [#37847](https://github.com/ant-design/ant-design/pull/37847)
- π Fix Input.Password `style={{ fontSize }}`not working. [#37898](https://github.com/ant-design/ant-design/pull/37898)
- π Fix Input.Textarea `style={{ resize: 'none' }}` is not working when `showCount` is applied. [#37855](https://github.com/ant-design/ant-design/pull/37855) [@kiner-tang](https://github.com/kiner-tang)
- π Fix Input.Search border style in RTL. [#37865](https://github.com/ant-design/ant-design/pull/37865) [@foryuki](https://github.com/foryuki)
- π·πΊ Fix Russian translation for Transfer.selectInvert. [#37858](https://github.com/ant-design/ant-design/pull/37858) [@svtslav](https://github.com/svtslav)
- π΅πΉ Add missing Portuguese translations. [#37857](https://github.com/ant-design/ant-design/pull/37857) [@ernestfolch](https://github.com/ernestfolch)
- β‘οΈ Update Table and Tree for improve state performance. [#37875](https://github.com/ant-design/ant-design/pull/37875) [@sunteago](https://github.com/sunteago)
- TypeScript
  - π€ Update type definition for a part of components. [#37861](https://github.com/ant-design/ant-design/pull/37861) [@zheeeng](https://github.com/zheeeng)

## 4.23.4

`2022-10-01`

- π Fix Typography ellipsis percision bug. [#37802](https://github.com/ant-design/ant-design/pull/37802) [@zheeeng](https://github.com/zheeeng)
- π Fix Input.Password that should not have value prop on input when inputing. [#37801](https://github.com/ant-design/ant-design/pull/37801) [@MadCcc](https://github.com/MadCcc)

## 4.23.3

`2022-09-27`

- π Tree `showLeafIcon` could accept ReactNode for a custom leaf icon.[#37144](https://github.com/ant-design/ant-design/pull/37144) [@xWiiLLz](https://github.com/xWiiLLz)
- π Uploader support Apple image format: heic, heif. [#37651](https://github.com/ant-design/ant-design/pull/37651) [@Johnny-young](https://github.com/Johnny-young)
- π Fix Typography `copyable.tooltip=false` still shows the copied tooltip. [#37754](https://github.com/ant-design/ant-design/pull/37754)
- π Fix Typography `ellipsis` not working correctly in some cases. [#37700](https://github.com/ant-design/ant-design/pull/37700) [@zheeeng](https://github.com/zheeeng)
- π Fix Divider shows `children` when in `vertical` mode. [#37697](https://github.com/ant-design/ant-design/pull/37697)
- π Fix Anchor `getCurrentAnchor` not updated. [#37644](https://github.com/ant-design/ant-design/pull/37644)
- π Fix Tabs `animated: true` missing tabPane animation. [#37642](https://github.com/ant-design/ant-design/pull/37642)
- π Fix Table `column.title` render function missing `filters` props. [#37629](https://github.com/ant-design/ant-design/pull/37629)
- π Fix Modal.confirm instance ref legacy config `visible: true` back to show not work. [#37613](https://github.com/ant-design/ant-design/pull/37613)
- π Fix the problem of rendering an empty element with styles when Badge not pass `text` property. [#37681](https://github.com/ant-design/ant-design/pull/37681) [@Wxh16144](https://github.com/Wxh16144)
- π Fix Button wave style not work in shadow dom. [#37677](https://github.com/ant-design/ant-design/pull/37677)
- π Remove Tab.TabPane outline style when focused. [#37638](https://github.com/ant-design/ant-design/pull/37638)
- TypeScript
  - π€ Update `FilterSearchType` definition for Table. [#37610](https://github.com/ant-design/ant-design/pull/37610) [@kiner-tang](https://github.com/kiner-tang)
- π Localization
  - π΅πΉ Add missing translations for 'Select all data' / 'Invert current page' for Transfer in pt_PT.[#37682](https://github.com/ant-design/ant-design/pull/37682) [@Dreamcreative](https://github.com/Dreamcreative), [#37701](https://github.com/ant-design/ant-design/pull/37701) [@hugobarragon](https://github.com/hugobarragon)

## 4.23.2

`2022-09-17`

- π Fix Card console warning when using `tabList` prop. [#37537](https://github.com/ant-design/ant-design/pull/37537) [@edc-hui](https://github.com/edc-hui)
- π Fix Table `filterSearch` is not executed when `filterMode="tree"`. [#37587](https://github.com/ant-design/ant-design/pull/37587) [@edc-hui](https://github.com/edc-hui)
- π Fix Tooltip should not replace children `className` when it's not a string type. [#37598](https://github.com/ant-design/ant-design/pull/37598)
- π Fix Tree that TreeNodes not aligned when draggable and some node is disabled. [#37534](https://github.com/ant-design/ant-design/pull/37534)
- TypeScript
  - π€ Replace deprecated `React.ReactChild` type. [#37551](https://github.com/ant-design/ant-design/pull/37551) [@bowen-wu](https://github.com/bowen-wu)

## 4.23.1

`2022-09-09`

- π Fix unable to close modal when using visible in `Modal.confirm().update`. [#37471](https://github.com/ant-design/ant-design/pull/37471) [@Aaron674092290](https://github.com/Aaron674092290)
- π Fix esbuild strict mode call `No matching export theme` error. [#37462](https://github.com/ant-design/ant-design/pull/37462)
- π Fix Switch background flush issue by reverting [#35103](https://github.com/ant-design/ant-design/pull/35103). [#37458](https://github.com/ant-design/ant-design/pull/37458)
- TypeScript
  - π€ InputNumber `value` add null type. [#37421](https://github.com/ant-design/ant-design/pull/37421) [@li-jia-nan](https://github.com/li-jia-nan)

## 4.23.0

`2022-09-04`

- π Tooltip support nested Fragment child nodes to display bubbles. [#37045](https://github.com/ant-design/ant-design/pull/37045) [@HQ-Lin](https://github.com/HQ-Lin)
- π Dropdown.Button support `danger` props. [#36810](https://github.com/ant-design/ant-design/pull/36810) [@nuintun](https://github.com/nuintun)
- π Input.TextArea add `value` parameter to `showCount.formatter`. [#36793](https://github.com/ant-design/ant-design/pull/36793) [@JarvisArt](https://github.com/JarvisArt)
- π Table support `expandable.columnTitle` now. [#36794](https://github.com/ant-design/ant-design/pull/36794) [@losgif](https://github.com/losgif)
- Deprecate `visible` in all components and change to `open`.
  - π  Dropdown changes `visible` to `open`. [#37232](https://github.com/ant-design/ant-design/pull/37232) [@yykoypj](https://github.com/yykoypj)
  - π  Modal changes `visible` to `open`. [#37084](https://github.com/ant-design/ant-design/pull/37084) [@yykoypj](https://github.com/yykoypj)
  - π  Drawer changes `visible` to `open`. [#37047](https://github.com/ant-design/ant-design/pull/37047) [@yykoypj](https://github.com/yykoypj)
  - π  Table changes `filterDropdownVisible` to `filterDropdownOpen`. [#37026](https://github.com/ant-design/ant-design/pull/37026) [@yykoypj](https://github.com/yykoypj)
  - π  Slider add `tooltip` prop for all props related with Tooltip. [#37000](https://github.com/ant-design/ant-design/pull/37000) [@yykoypj](https://github.com/yykoypj)
  - π  Tooltip Popover and Popconfirm change `visible` to `open`. [#37241](https://github.com/ant-design/ant-design/pull/37241) [@yykoypj](https://github.com/yykoypj)
  - π  Deprecate `visible` prop of Tag. [#36934](https://github.com/ant-design/ant-design/pull/36934) [@yykoypj](https://github.com/yykoypj)
- π  Deprecate `dropdownClassName` prop of all components and change to `popupClassName`. [#36880](https://github.com/ant-design/ant-design/pull/36880) [@heiyu4585](https://github.com/heiyu4585)
- π  Tabs support `items` props and origin jsx usage will be depreacted. [#36889](https://github.com/ant-design/ant-design/pull/36889)
- π Fix that some css variables are not consistent with less variables.
  - [#37064](https://github.com/ant-design/ant-design/pull/37064) [@TrickyPi](https://github.com/TrickyPi)
  - [#37304](https://github.com/ant-design/ant-design/pull/37304) [@peritot](https://github.com/peritot)
- π Fix Menu disabled item focus style. [#37332](https://github.com/ant-design/ant-design/pull/37332)
- π `@border-radius-sm` should not follow `@border-radius-base` by default. [#37309](https://github.com/ant-design/ant-design/pull/37309)
- π add `@slider-handle-margin-left` to custom type. [#37001](https://github.com/ant-design/ant-design/pull/37001) [@alanhaledc](https://github.com/alanhaledc)
- π Replace Tabs with fade switch motion to import switch experience. [#36943](https://github.com/ant-design/ant-design/pull/36943)
- β¨οΈ Improve Form validation accessibility experience. [#36762](https://github.com/ant-design/ant-design/pull/36762) [@VladimirOtroshchenko](https://github.com/VladimirOtroshchenko)
- π Add missing translations for filterCheckall in ru_RU. [#37311](https://github.com/ant-design/ant-design/pull/37311) [@HelLuv](https://github.com/HelLuv)
- π Add missing translations in `cs_CZ`. [#37388](https://github.com/ant-design/ant-design/pull/37388) [@ZdenekKrcal](https://github.com/ZdenekKrcal)

## 4.22.8

`2022-08-26`

- Table
  - π Add Table missing French `filterCheckAll` localization. [#37246](https://github.com/ant-design/ant-design/pull/37246) [@Mar-he](https://github.com/Mar-he)
  - π Improve Table sort panel accessibility experience. [#37167](https://github.com/ant-design/ant-design/pull/37167) [@dartamonov-vertex](https://github.com/dartamonov-vertex)
- π Optimize the button spacing of the Popconfirm component. [#37183](https://github.com/ant-design/ant-design/pull/37183) [@jiangmaniu](https://github.com/jiangmaniu)
- π Remove Card duplicate less style attribute definitions. [#37170](https://github.com/ant-design/ant-design/pull/37170) [@yanquanfahei](https://github.com/yanquanfahei)
- TypeScript
  - π€ Export Menu Item type declarations. [#36681](https://github.com/ant-design/ant-design/pull/36681) [@cravend](https://github.com/cravend)

## 4.22.7

`2022-08-21`

- π Fix Typography visible change some time Tooltip not work with ellipsis. [#37147](https://github.com/ant-design/ant-design/pull/37147)
- π Fix InputNumber that style cannot be customized with controls less variables. [#37070](https://github.com/ant-design/ant-design/pull/37070) [@coldice945](https://github.com/coldice945)

## 4.22.6

`2022-08-17`

- π Revert [#36710](https://github.com/ant-design/ant-design/pull/36710) to fix Table `onChange` argument `sorter` error in multiple columns sort.
- π Fix Drawer can not close when config `opacity` on the `maskStyle`. [#37100](https://github.com/ant-design/ant-design/pull/37100)

## 4.22.5

`2022-08-15`

- π­πΊ Form add defaultValidateMessages.i18n az_AZ language #23369. [#36967](https://github.com/ant-design/ant-design/pull/36967) [@YMiemie-cy](https://github.com/YMiemie-cy)
- π Popover remove Popover incorrect box-shadow. [#37030](https://github.com/ant-design/ant-design/pull/37030) [@jerrykingxyz](https://github.com/jerrykingxyz)
- π Fix Steps tail position bug when `labelPlacement="vertical"`. [#36996](https://github.com/ant-design/ant-design/pull/36996)
- π Removed exception error border for `Pagination`. [#36972](https://github.com/ant-design/ant-design/pull/36972) [@hydraZty](https://github.com/hydraZty)
- π Fix Upload trigger mistake files status when upload multiple files at same time in React 18. [#36968](https://github.com/ant-design/ant-design/pull/36968)
- TypeScript
  - π€ Fix type error of useWatch. [#37013](https://github.com/ant-design/ant-design/pull/37013) [@LiZhiHao97](https://github.com/LiZhiHao97)

## 4.22.4

`2022-08-08`

- π Fix Drawer `zIndex` prop not working. [#36958](https://github.com/ant-design/ant-design/pull/36958)
- π Fix PageHeader focus style stay after clicking it. [#36902](https://github.com/ant-design/ant-design/pull/36902)
- π Fix Drawer nesting content-wrapper style. [#36845](https://github.com/ant-design/ant-design/pull/36845) [@yanm1ng](https://github.com/yanm1ng)
- π Fix Mentions popup shift when contain scrollbar. [#36898](https://github.com/ant-design/ant-design/pull/36898) [@JarvisArt](https://github.com/JarvisArt)
- TypeScript
  - π€ Fix Avatar `onClick` type missing. [#36940](https://github.com/ant-design/ant-design/pull/36940) [@kungege](https://github.com/kungege)
  - π€ Fix Table `onChange` argument `sorter` type error. [#36710](https://github.com/ant-design/ant-design/pull/36710) [@kungege](https://github.com/kungege)
  - π€ Input `data-*` should not be required. [#36858](https://github.com/ant-design/ant-design/pull/36858) [@yifanwww](https://github.com/yifanwww)

## 4.22.3

`2022-08-01`

- π Fixed flickering when `fileList` updating in Uploader with React 18. [#36801](https://github.com/ant-design/ant-design/pull/36801) [@zhengjitf](https://github.com/zhengjitf)
- π Fix Form.Item with small size `labelCol` and `wrapperCol` not break line in vertical layout. [#36800](https://github.com/ant-design/ant-design/pull/36800)
- π Fix Row in flex layout takes too wide space by default. [#36770](https://github.com/ant-design/ant-design/pull/36770)

## 4.22.2

`2022-07-28`

- π Adjust Collapse title click region which will be fully width when `collapsible=default` now. [#36761](https://github.com/ant-design/ant-design/pull/36761)
- Drawer
  - π Fix Drawer not work in 360 browser. [#36748](https://github.com/ant-design/ant-design/pull/36748)
  - π Revert back panel style into wrapper dom node in case developer use `contentWrapperStyle` for overwrite. [#36748](https://github.com/ant-design/ant-design/pull/36748)
  - π Fix for the string type as `width/height` value and warning which should use number type instead. [#284](https://github.com/react-component/drawer/pull/284)

## 4.22.1

`2022-07-27`

- π Fix Drawer with percentage width display issue. [#36729](https://github.com/ant-design/ant-design/pull/36729)

## 4.22.0

`2022-07-26`

- Form
  - π₯ Form support `Form.Item.useStatus` for custom components to get Form.Item validate status. [#36486](https://github.com/ant-design/ant-design/pull/36486)
  - π Form support `setFieldValue` to simplify config array index value. [#36058](https://github.com/ant-design/ant-design/pull/36058)
  - π Fix Form.Item shaking when trigger validate so fast. [#36575](https://github.com/ant-design/ant-design/pull/36575)
- π Radio.Group support `onBlur` and `onFocus` props. [#36041](https://github.com/ant-design/ant-design/pull/36041)
- π Typography `ellipsis.tooltip` supports a object for Tooltip props. [#36099](https://github.com/ant-design/ant-design/pull/36099)
- π  Refactor Drawer to remove directly style control which helps more React way. [#36672](https://github.com/ant-design/ant-design/pull/36672)
- π  Refactor Sketelon.Button square shape style that its width is equal to height, and old become the default. [#36123](https://github.com/ant-design/ant-design/pull/36123) [@alanhaledc](https://github.com/alanhaledc)
- π Fix Modal.confirm `onCancel` argument close is not a function sometimes. [#36600](https://github.com/ant-design/ant-design/pull/36600) [@Wxh16144](https://github.com/Wxh16144)
- π Revert [#36439](https://github.com/ant-design/ant-design/pull/36439) to fix the problem of incorrect status when uploading and deleting files, and fix the status color change when Upload removes files again change problem. [#36706](https://github.com/ant-design/ant-design/pull/36706)
- Tree
  - π  Tree/TreeSelect `switcherIcon` argument support more parameters from `{ expanded: boolean }` to `AntTreeNodeProps`. [#36651](https://github.com/ant-design/ant-design/pull/36651) [@alanhaledc](https://github.com/alanhaledc)
  - π Fix Tree `draggable` Fn params type from AntTreeNode to DataNode. [#36648](https://github.com/ant-design/ant-design/pull/36648) [@tianyuan233](https://github.com/tianyuan233)
- Table
  - π Fix Table extra shadow and scrollbar when all columns are fixed. [#36606](https://github.com/ant-design/ant-design/pull/36606) [@dashaowang](https://github.com/dashaowang)
  - π Fix Table tree data ellipsis style problem. [#36608](https://github.com/ant-design/ant-design/pull/36608)
- π Localization
  - π±π° Add Sri Lanka locale. [#36149](https://github.com/ant-design/ant-design/pull/36149) [@sayuri-gi](https://github.com/sayuri-gi)

## 4.21.7

`2022-07-18`

- π Add Skeleton.Node sub-component, allow user customize content of Skeleton. [#36441](https://github.com/ant-design/ant-design/pull/36441) [@DawnLck](https://github.com/DawnLck)
- Form
  - π Fix Form with percentage width Select may leaves unexpected height. [#36484](https://github.com/ant-design/ant-design/pull/36484)
  - π Fix Form disabled but Upload component still uploadable in it. [#36573](https://github.com/ant-design/ant-design/pull/36573) [@cwjTerrace](https://github.com/cwjTerrace)
- π Fix Tree non-draggable element still render the draggable icon. [#36511](https://github.com/ant-design/ant-design/pull/36511) [@Wxh16144](https://github.com/Wxh16144)
- π Fix Upload preview error on SVG with `<foreignObject>` and cross-origin links. [#36402](https://github.com/ant-design/ant-design/pull/36402) [@jonioni](https://github.com/jonioni)
- π Fix that Tooltip cannot close automaticly on disabled Radio. [#36483](https://github.com/ant-design/ant-design/pull/36483)
- π Add Modal Less variable `@modal-border-radius`. [#36527](https://github.com/ant-design/ant-design/pull/36527) [@kkkisme](https://github.com/kkkisme)
- π Fix Table expand icon wrap style when column is fixed and ellipsis. [#36496](https://github.com/ant-design/ant-design/pull/36496)

## 4.21.6

`2022-07-11`

- π Fix Skeleton active lost border-radius in Safari. [#36445](https://github.com/ant-design/ant-design/pull/36445)
- π Fix Breadcrumb separators disappearing when used as last element in a List. [#36448](https://github.com/ant-design/ant-design/pull/36448) [@LeonKattendick](https://github.com/LeonKattendick)
- π Fixed Upload removing file status color is wrong. [#36439](https://github.com/ant-design/ant-design/pull/36439)
- π Fix DatePicker style issue when using `status`. [#35685](https://github.com/ant-design/ant-design/pull/35685) [@simplejason](https://github.com/simplejason)
- Table
  - π Fix Table scroll shadow style. [#36420](https://github.com/ant-design/ant-design/pull/36420) [@shunyue1320](https://github.com/shunyue1320)
  - π Fix Table hover render performance issue. [#36383](https://github.com/ant-design/ant-design/pull/36383)
- π Adjust Modal header close icon style. [#36309](https://github.com/ant-design/ant-design/pull/36309) [@cw1997](https://github.com/cw1997)
- π Fix Form.ErrorList shaking when validating too fast. [#36358](https://github.com/ant-design/ant-design/pull/36358)
- π Radio shadow color should be transparency to fit none-white background. [#36335](https://github.com/ant-design/ant-design/pull/36335)
- π Fix Table border style issue when `title` configured. [#36384](https://github.com/ant-design/ant-design/pull/36384) [@Unuuuuu](https://github.com/Unuuuuu)

## 4.21.5

`2022-07-03`

- π Fix Checkbox cannot be disabled by Form `disabled` prop. [#36345](https://github.com/ant-design/ant-design/pull/36345)
- π Fix Button `loading` prop with `null` value. [#36288](https://github.com/ant-design/ant-design/pull/36288) [@kejianfeng](https://github.com/kejianfeng)
- π Fix popover arrow compatibility problem on some browsers. [#36266](https://github.com/ant-design/ant-design/pull/36266)
- π Fix extra shadow in nested Table. [#36277](https://github.com/ant-design/ant-design/pull/36277)
- π Fix that some class name in Divider cannot be customized. [#36271](https://github.com/ant-design/ant-design/pull/36271) [@alanhaledc](https://github.com/alanhaledc)
- π§πΎ Update Belarusian locale. [#36265](https://github.com/ant-design/ant-design/pull/36265)

## 4.21.4

`2022-06-27`

- Table
  - π Fix Table expand icon not align center. [#36215](https://github.com/ant-design/ant-design/pull/36215)
  - π Fix nested Table margin style. [#36209](https://github.com/ant-design/ant-design/pull/36209)
  - π Fix Table filter dropdown with multiple subMenu may not closed. [#36132](https://github.com/ant-design/ant-design/pull/36132)
  - π Table reset the last selection key when deselect or bulk operations. [#34705](https://github.com/ant-design/ant-design/pull/34705) [@Dunqing](https://github.com/Dunqing)
- π Fix Popover arrow color with custom `color` prop. [#36241](https://github.com/ant-design/ant-design/pull/36241)
- π Fix Upload `listType="picture-card"` select button not being hidden when children is empty. [#36196](https://github.com/ant-design/ant-design/pull/36196)
- π Fix Menu deprecated warning when `item={undefined}`. [#36190](https://github.com/ant-design/ant-design/pull/36190)
- π Fix Button `loading` icon margin style lost. [#36168](https://github.com/ant-design/ant-design/pull/36168)
- π Fix Dropdown using Menu with group item can not close by click. [#36148](https://github.com/ant-design/ant-design/pull/36148)
- π Enlarge dragable area for Slider handler. [#36018](https://github.com/ant-design/ant-design/pull/36018) [@slotDumpling](https://github.com/slotDumpling)
- π Fix: repeat a css class in readOnly, which has been declared in rc-input-number. [#36120](https://github.com/ant-design/ant-design/pull/36120) [@RainyLiao](https://github.com/RainyLiao)
- π Fix Skeleton active background color in dark theme. [#36116](https://github.com/ant-design/ant-design/pull/36116)
- TypeScript
  - π€ Fix type incompatibility. [#36189](https://github.com/ant-design/ant-design/pull/36189) [@Dunqing](https://github.com/Dunqing)
  - π€ exporting `UploadFile` from `Upload`. [#34733](https://github.com/ant-design/ant-design/pull/34733) [@chentsulin](https://github.com/chentsulin)

## 4.21.3

`2022-06-17`

- π Fix Table customize `filterDropdown` with Menu should not break default `selectable`. [#36098](https://github.com/ant-design/ant-design/pull/36098)
- π Fix Input.Textarea cannot focus after click clear icon in controlled mode. [#34728](https://github.com/ant-design/ant-design/pull/34728) [@Pulset](https://github.com/Pulset)
- TypeScript
  - π€ Tree.DirectoryTree supports generic DataNode type. [#36092](https://github.com/ant-design/ant-design/pull/36092) [@JaylanChen](https://github.com/JaylanChen)
  - π€ Export `RefSelectProps` from `Select`. [#34732](https://github.com/ant-design/ant-design/pull/34732) [@chentsulin](https://github.com/chentsulin)
  - π€ Export `FormRule`, `FormListFieldData`, `FormListOperation` from `Form`. [#34735](https://github.com/ant-design/ant-design/pull/34735) [@chentsulin](https://github.com/chentsulin)

## 4.21.2

`2022-06-15`

- π Fix incorrect Form status with `noStyle`. [#36054](https://github.com/ant-design/ant-design/pull/36054)

## 4.21.1

`2022-06-13`

- π Fixed Image the `getContainer` property not reading from ConfigProvider. [#36002](https://github.com/ant-design/ant-design/pull/36002) [@robothot](https://github.com/robothot)
- π Fixed Button issue [#35952](https://github.com/ant-design/ant-design/issues/35952) where the `disabled` attribute does not take effect with `href`. [#35975](https://github.com/ant-design/ant-design/pull/35975) [@MuxinFeng](https://github.com/MuxinFeng)
- π Fix less color palette algorithm according to `@ant-design/colors`. [#35954](https://github.com/ant-design/ant-design/pull/35954) [@christian-lechner](https://github.com/christian-lechner)
- π Fix Upload image flickering. [#35943](https://github.com/ant-design/ant-design/pull/35943)
- π Remove styles from Form such as `status` for children of Modal and Drawer. [#35849](https://github.com/ant-design/ant-design/pull/35849)
- TypeScript
  - π€ Fix type definition for `autoFocus` in Dropdown. [#35990](https://github.com/ant-design/ant-design/pull/35990) [@robothot](https://github.com/robothot)
  - π€ Fix type definition for `MenuItemGroupType` in Menu. [#35790](https://github.com/ant-design/ant-design/pull/35790) [@MasaoBlue](https://github.com/MasaoBlue)
  - π€ Fix Carousel type definition in React 18. [#35959](https://github.com/ant-design/ant-design/pull/35959)
- π Localization
  - π?πΉ Fix italian translation for `Table.cancelSort` key. [#35970](https://github.com/ant-design/ant-design/pull/35970) [@gariggio](https://github.com/gariggio)

## 4.21.0

`2022-06-06`

- π₯ Add Form level control input component `disabled`. [#35210](https://github.com/ant-design/ant-design/pull/35210) [@heiyu4585](https://github.com/heiyu4585)
- π Tabs support `popupClassName` for more Dropdown. [#35892](https://github.com/ant-design/ant-design/pull/35892)
- π Table `rowSelection.onChange` support `info.type` param. [#35598](https://github.com/ant-design/ant-design/pull/35598)
- π The `copyable` prop of Typography.Paragraph supports to reset the mime type of the clipboardData by the `format`. [#35219](https://github.com/ant-design/ant-design/pull/35219) [@kanweiwei](https://github.com/kanweiwei)
- π TreeSelect support `treeExpandAction`. [#35618](https://github.com/ant-design/ant-design/pull/35618) [@NE-SmallTown](https://github.com/NE-SmallTown)
- ConfigProvider
  - π ConfigProvider support config Pagination `showSizeChanger`. [#35750](https://github.com/ant-design/ant-design/pull/35750)
  - π ConfigProvider support `componentDisabled` to config components `disabled` status. [#35718](https://github.com/ant-design/ant-design/pull/35718)
  - π  Refactor ConfigProvider removing default `renderEmpty` to resolve dist circle deps. [#35570](https://github.com/ant-design/ant-design/pull/35570)
- Collapse
  - π  Refactor Collapse to keep stable dom structure with header content. [#35781](https://github.com/ant-design/ant-design/pull/35781)
  - π  Refactor Collapse `expandIconPosition` with logical position `start` or `end` to resolve RTL style issue. [#35770](https://github.com/ant-design/ant-design/pull/35770)
- Progress
  - π Progress steps support custom strokeColor for each step. [#35855](https://github.com/ant-design/ant-design/pull/35855)
  - π  Refactor Progress `type="circle"` and `type="dashboard"` for simpler dom structure and better rendering. [#35433](https://github.com/ant-design/ant-design/pull/35433)
  - π  Refactor Progress to React hooks. [#35393](https://github.com/ant-design/ant-design/pull/35393) [@shuaijiumei](https://github.com/shuaijiumei)
  - π Fix Progress percent accuracy issue when near 100%. [#35433](https://github.com/ant-design/ant-design/pull/35433)
  - π Fix Progress `gapDegree` displayed with wrong degree when `type="dashboard"`. [#35433](https://github.com/ant-design/ant-design/pull/35433)
  - π Fix Progress border radius style when `type="line"` and `strokeLinecap="butt"`. [#35822](https://github.com/ant-design/ant-design/pull/35822)
- Dropdown
  - π Dropdown support `autoFocus` to focus elements in `overlay` automaticly when opened. [#35391](https://github.com/ant-design/ant-design/pull/35391)
  - π  Fix Dropdown nesting menu injection logic. [#35810](https://github.com/ant-design/ant-design/pull/35810)
- Card
  - π  Refactor Card `loading` with Skeleton. [#35525](https://github.com/ant-design/ant-design/pull/35525)
  - π  Refactor Card style to use flex instead of float. [#35236](https://github.com/ant-design/ant-design/pull/35236) [@miracles1919](https://github.com/miracles1919)
- π  DatePicker refactored to React hooks. [#35425](https://github.com/ant-design/ant-design/pull/35425) [@heiyu4585](https://github.com/heiyu4585)
- π  Rename className of Pagination `mini` mode with `ant-pagination-mini`. [#35881](https://github.com/ant-design/ant-design/pull/35881)
- π  Refactor Popconfirm internal realize with Popover component. [#35676](https://github.com/ant-design/ant-design/pull/35676)
- π  Change the implementation of the bottom button layout of the Modal confirm component. [#35530](https://github.com/ant-design/ant-design/pull/35530) [@foryuki](https://github.com/foryuki)
- π Fix the Wave effect does not work in React 18 strict mode. [#35889](https://github.com/ant-design/ant-design/pull/35889) [@Carrotzpc](https://github.com/Carrotzpc)
- π Fix Drawer close twice `children` will undefined. [#35853](https://github.com/ant-design/ant-design/pull/35853) [@crazyair](https://github.com/crazyair)
- Skeleton
  - π Remove Skeleton default `margin-top` style. [#35848](https://github.com/ant-design/ant-design/pull/35848)
  - π Optimize Skeleton `active` animation performance. [#35836](https://github.com/ant-design/ant-design/pull/35836) [@slotDumpling](https://github.com/slotDumpling)
- π Remove `!important` in Radio style with `disabled`. [#35920](https://github.com/ant-design/ant-design/pull/35920)
- TypeScript
  - π€ Fix Form.List type `FormListFieldData` missing property `fieldKey`. [#35884](https://github.com/ant-design/ant-design/pull/35884) [@nanianlisao](https://github.com/nanianlisao)
- π Localization
  - πΉπ² Add a new locale `tk_TK`. [#35605](https://github.com/ant-design/ant-design/pull/35605)
- RTL
  - π Fix the wrong direction of `border` and `border-radius` for InputNumber and Input in RTL mode. [#35876](https://github.com/ant-design/ant-design/pull/35876) [@yykoypj](https://github.com/yykoypj)

## 4.20.7

`2022-05-30`

- π Fix Drawer form instance lost bug when opened. [#35706](https://github.com/ant-design/ant-design/pull/35706) [@crazyair](https://github.com/crazyair)
- π Fix Segmented options invalid space between icon and text when using the icon prop. [#35701](https://github.com/ant-design/ant-design/pull/35701)
- π Optimize Popover arrow style. [#35717](https://github.com/ant-design/ant-design/pull/35717)
- TypeScript
  - π€ Fix Card type hints problem. [#35753](https://github.com/ant-design/ant-design/pull/35753)

## 4.20.6

`2022-05-22`

- π Fix DatePicker placeholder flush when open first time. [#35620](https://github.com/ant-design/ant-design/pull/35620) [@yykoypj](https://github.com/yykoypj)
- π  Remove Grid default `role` attr to fit [aria-required-parent](https://accessibilityinsights.io/info-examples/web/aria-required-parent/) requirement. [#35616](https://github.com/ant-design/ant-design/pull/35616) [@bartpio](https://github.com/bartpio)
- π Fix Anchor cut content in some browser. [#35612](https://github.com/ant-design/ant-design/pull/35612) [@josonho](https://github.com/josonho)
- π Fix Table header cell border when have `rowSpan` and `scroll.y`. [#35591](https://github.com/ant-design/ant-design/pull/35591)
- π Fix Drawer that the button in it closes too fast issue. [#35339](https://github.com/ant-design/ant-design/pull/35339)

## 4.20.5

`2022-05-15`

- π€ Deprecated Table `rowSelection.onSelectNone` and `rowSelection.onSelectMultiple` in TS type. [#35545](https://github.com/ant-design/ant-design/pull/35545)
- π Ignore the decimal part in InputNumber when `precision` is negative. [#35520](https://github.com/ant-design/ant-design/pull/35520) [@ty888](https://github.com/ty888)

## 4.20.4

`2022-05-11`

- π Fix broken List.Item type definition. [#35455](https://github.com/ant-design/ant-design/pull/35455) [@rsmeral](https://github.com/rsmeral)
- π Fix Checkbox margin in Tree RTL mode. [#35491](https://github.com/ant-design/ant-design/pull/35491) [@miracles1919](https://github.com/miracles1919)
- π Remove Cascader `displayRender` warning. [#35417](https://github.com/ant-design/ant-design/pull/35417) [@lalalazero](https://github.com/lalalazero)

## 4.20.3

`2022-05-08`

- π Fix unnecessary `rowGap: 0` style attribute in Row. [#35409](https://github.com/ant-design/ant-design/pull/35409)
- π Fix List.Item `ref` no work problem. [#35321](https://github.com/ant-design/ant-design/pull/35321)
- π Optimize the style of arrow in Tooltip. [#35401](https://github.com/ant-design/ant-design/pull/35401)
- π Fix Table column filter reset is not working. [#35386](https://github.com/ant-design/ant-design/pull/35386) [@lalalazero](https://github.com/lalalazero)
- π Add missing localizations for π¬π§ en_GB and πΊπ¦ uk_UA. [#35430](https://github.com/ant-design/ant-design/pull/35430) [@velykanov](https://github.com/velykanov)
- Typescript
  - π€ Fixed an issue where notification `maxCount` attribute was missing. [#35369](https://github.com/ant-design/ant-design/pull/35369) [@cwveysey](https://github.com/cwveysey)

## 4.20.2

`2022-04-30`

- Segmented
  - π Fix Segmented inconsisit height with other controls. [#35281](https://github.com/ant-design/ant-design/pull/35281)
  - π Fix Segmented animation not working correct in StrictMode mode. [#35281](https://github.com/ant-design/ant-design/pull/35281)
  - π Segmented `options` now supports `icon` property. [#35256](https://github.com/ant-design/ant-design/pull/35256)
- Table
  - β¨οΈ Improve Table columns sorter a11y experience. [#35269](https://github.com/ant-design/ant-design/pull/35269)
  - πͺπΈ Added Table filter localization for es_ES. [#35309](https://github.com/ant-design/ant-design/pull/35309) [@agarciaguillo](https://github.com/agarciaguillo)
- π Fix Switch color in dark theme. [#35332](https://github.com/ant-design/ant-design/pull/35332)
- π Tweak Breadcrumb link hover color. [#35324](https://github.com/ant-design/ant-design/pull/35324)
- π Fix Space throws `Encountered two children with the same key` warning in some cases. [#35311](https://github.com/ant-design/ant-design/pull/35311)
- π Fix Select tag remove icon position issue. [#35336](https://github.com/ant-design/ant-design/pull/35336) [@walidcherhane](https://github.com/walidcherhane)

## 4.20.1

`2022-04-26`

- π Fix Breadcrumb extra padding and margin style. [#35235](https://github.com/ant-design/ant-design/pull/35235)
- π Fix Input.Seach inconsistent behavior of triggering `onSearch` when press enter using Chinese inputting method. [#35164](https://github.com/ant-design/ant-design/pull/35164) [@qyzzzz](https://github.com/qyzzzz)
- π Fix circle reference between Upload and Dragger. [#34379](https://github.com/ant-design/ant-design/pull/34379) [@kanweiwei](https://github.com/kanweiwei)

## 4.20.0

`2022-04-24`

- π₯ React 18 Support. Fix related known issue.
  - π Fix Form with React 18 StrictMode missing error message update. [#35096](https://github.com/ant-design/ant-design/pull/35096)
  - π Fix Notification and Message throw `createRoot` warning in React 18. [#35030](https://github.com/ant-design/ant-design/pull/35030)
  - π Fix BackTop not working in StrictMode. [#34858](https://github.com/ant-design/ant-design/pull/34858) [@tmkx](https://github.com/tmkx)
- π₯ New component Segmented. [#34319](https://github.com/ant-design/ant-design/pull/34319)
  - π  Since v4.20.0 `Segemented` props `onChange` callback function parameter adjusted from `ChangeEvent` (v4.20.0-alpha.0, v4.20.0-alpha.1) to `value` to simplify API. [#35187](https://github.com/ant-design/ant-design/pull/35187) [@vagusX](https://github.com/vagusX)
- Form
  - π₯ Form support `useWatch` to get current field value. [#35036](https://github.com/ant-design/ant-design/pull/35036)
  - π Form support `useFormInstance` to get current context form instance. [#35039](https://github.com/ant-design/ant-design/pull/35039)
  - π Fix Form broken layout when set `labelCol={{ sm: 24 }}` and `wrapperCol={{ sm: 24 }}`. [#34907](https://github.com/ant-design/ant-design/pull/34907)
- π Menu support `items` for perf prepare, and `children` will be removed in next major version. [#34559](https://github.com/ant-design/ant-design/pull/34559)
- π Image PreviewGroup Support top progress rendering. [#35038](https://github.com/ant-design/ant-design/pull/35038) [@zpc7](https://github.com/zpc7)
- Upload
  - π Upload support `crossOrigin` for images in `picture-card` mode. [#34981](https://github.com/ant-design/ant-design/pull/34981) [@dragmove](https://github.com/dragmove)
  - π Fix Upload `prefixCls` don't work on file list. [#34944](https://github.com/ant-design/ant-design/pull/34944) [@swchen](https://github.com/swchen)
  - π Improve Upload action styles. [#35052](https://github.com/ant-design/ant-design/pull/35052)
- Table
  - π Support reset to the default value rather than empty, when click reset in Table column filter. [#34355](https://github.com/ant-design/ant-design/pull/34355) [@heiyu4585](https://github.com/heiyu4585)
  - π Fix Table head background and selection column width styling issues when `size="small"`. [#34963](https://github.com/ant-design/ant-design/pull/34963)
  - π©πͺ Improve German translations for Table. [#34836](https://github.com/ant-design/ant-design/pull/34836) [@pfedan](https://github.com/pfedan)
  - β‘οΈ Optimize Table filter calculation perfromance. [#35064](https://github.com/ant-design/ant-design/pull/35064) [@nieyuyao](https://github.com/nieyuyao)
  - π Improve small and middle size Table selection dropdown margin style. [#35173](https://github.com/ant-design/ant-design/pull/35173)
- Tree
  - π Tree `switcherIcon` prop support render-prop. [#34470](https://github.com/ant-design/ant-design/pull/34470) [@zqran](https://github.com/zqran)
  - π Tree support `rootClassName` and `rootStyle`. [#34578](https://github.com/ant-design/ant-design/pull/34578)
- Breadcrumb
  - π Fix Breadcrumb deprecated warning of Dropdown `placement`. [#35162](https://github.com/ant-design/ant-design/pull/35162)
  - π Fix Breadcrumb show the number when is unexpected. [#35123](https://github.com/ant-design/ant-design/pull/35123)
  - β¨οΈ Make structure of Breadcrumb be accessible. [#34082](https://github.com/ant-design/ant-design/pull/34082) [@VladimirOtroshchenko](https://github.com/VladimirOtroshchenko)
- Anchor
  - π Anchor `getCurrentAnchor` has active link as argument. [#34799](https://github.com/ant-design/ant-design/pull/34799)
  - π  Refactor Anchor to Function component. [#35073](https://github.com/ant-design/ant-design/pull/35073) [@LongHaoo](https://github.com/LongHaoo)
- Cascader
  - π Cascader supports `showCheckedStrategy ` for value display strategy. [#34568](https://github.com/ant-design/ant-design/pull/34568) [@heiyu4585](https://github.com/heiyu4585)
  - π Fix Cascader search result do not fill the entrie panel. [#35019](https://github.com/ant-design/ant-design/pull/35019) [@boomler](https://github.com/boomler)
- π Click event object can be accessed in `onCopy` function of Typography. [#34655](https://github.com/ant-design/ant-design/pull/34655) [@yzwxk](https://github.com/yzwxk)
- π Grid supports `justify="space-evenly"`. [#34606](https://github.com/ant-design/ant-design/pull/34606) [@gp5251](https://github.com/gp5251)
- π Support `rootClassName` property for Dialog and Image. [#34574](https://github.com/ant-design/ant-design/pull/34574) [@heiyu4585](https://github.com/heiyu4585)
- π Fix error `Nothing was returned from render` when Skeleton use falsy `loading` props without `children`. [#34872](https://github.com/ant-design/ant-design/pull/34872) [@AlbertAZ1992](https://github.com/AlbertAZ1992)
- π Optimize Switch disabled color to fit colorful background. [#35103](https://github.com/ant-design/ant-design/pull/35103)
- π Remove Tabs `overflow: hidden` style to fix Select and sticky Table display problem inside Tabs. [#35195](https://github.com/ant-design/ant-design/pull/35195)
- π Fix Steps style issues in RTL mode. [#35088](https://github.com/ant-design/ant-design/pull/35088) [@zpc7](https://github.com/zpc7)
- π Fix animation for standalone Badge in RTL mode. [#34899](https://github.com/ant-design/ant-design/pull/34899) [@hmz22](https://github.com/hmz22)
- π  Optimize Modal id generate logic to improve accessibility experience. [#35072](https://github.com/ant-design/ant-design/pull/35072)
- π Fix Select and AutoComplete scroll abnormal behavior when navigate via keyboard.γ[#35025](https://github.com/ant-design/ant-design/pull/35025)
- Spin
  - π Fix Spin animation style being abnormally parsed in Parcel. [#35005](https://github.com/ant-design/ant-design/pull/35005)
  - β¨οΈ Spin add `aria` attribute to improve accessibility. [#34408](https://github.com/ant-design/ant-design/pull/34408) [@heiyu4585](https://github.com/heiyu4585)
- β¨οΈ Dropdown support select option by keyboard. [#34738](https://github.com/ant-design/ant-design/pull/34738)
- π Fix Title, Text, Paragraph components cannot get `ref` bug. [#34847](https://github.com/ant-design/ant-design/pull/34847) [@MQuy](https://github.com/MQuy)
- Input
  - π Input.Group prevent components from getting style from Form.Item. [#34764](https://github.com/ant-design/ant-design/pull/34764)
  - π Adjust TextArea style in Form. [#34714](https://github.com/ant-design/ant-design/pull/34714)
- β¨οΈ Fix `aria-checked` attribute for Checkbox, to avoid screen reader getting an incorrect status. [#34862](https://github.com/ant-design/ant-design/pull/34862) [@SpaNb4](https://github.com/SpaNb4)
- Less
  - π Replace less html selector with related variable. [#35186](https://github.com/ant-design/ant-design/pull/35186) [@jeffdrumgod](https://github.com/jeffdrumgod)
  - π Modify less `danger` value from the function to variable. [#35113](https://github.com/ant-design/ant-design/pull/35113) [@TrickyPi](https://github.com/TrickyPi)
  - π Arrow border radius variable use fixed value. [#35086](https://github.com/ant-design/ant-design/pull/35086)
- TypeScript
  - π€ Fixed `Upload` component `UploadChangeParam<T>` internal `fileList` not using generics. [#35158](https://github.com/ant-design/ant-design/pull/35158) [@rendaoer](https://github.com/rendaoer)
  - π€ Update TypeScript definition for `@types/react@18` compatible. [#35075](https://github.com/ant-design/ant-design/pull/35075) [@AliRezaBeigy](https://github.com/AliRezaBeigy) [#35076](https://github.com/ant-design/ant-design/pull/35076) [@littledian](https://github.com/littledian)

## 4.19.5

`2022-04-02`

- π Fix Form that not keep store value when unmount and mount again. [#34845](https://github.com/ant-design/ant-design/pull/34845)
- π Fix Pagination under `<ConfigProvider componentSize="large" />` should display middle size Select. [#34756](https://github.com/ant-design/ant-design/pull/34756)
- π fix Skeleton to unable to render `childten` of non-react element. [#34751](https://github.com/ant-design/ant-design/pull/34751) [@1247748612](https://github.com/1247748612)
- π Fix Tag `@tag-border-radius` less variable not work. [#34741](https://github.com/ant-design/ant-design/pull/34741)

## 4.19.4

`2022-03-27`

- π Fix when `fullscreen` of the Calendar is `false`, the element returned by `dateFullCellRender` cannot be interactive. [#34614](https://github.com/ant-design/ant-design/pull/34614) [@imoctopus](https://github.com/imoctopus)
- π fix BackTop responsive in RTL. [#34626](https://github.com/ant-design/ant-design/pull/34626) [@hmz22](https://github.com/hmz22)
- π Fix text position in Steps with `small` size and `dot` mode. [#34651](https://github.com/ant-design/ant-design/pull/34651)
- π Fix Descriptions `contentStyle` not working when children is 0. [#34696](https://github.com/ant-design/ant-design/pull/34696) [@zhao-huo-long](https://github.com/zhao-huo-long)
- π Fix notification prevent interaction on elements which under it. [#34716](https://github.com/ant-design/ant-design/pull/34716)

## 4.19.3

`2022-03-21`

- π Fix TextArea `clearIcon` color. [#34610](https://github.com/ant-design/ant-design/pull/34610)
- π Fix: apply scale transform to disabled star. [#34547](https://github.com/ant-design/ant-design/pull/34547) [@Unuuuuu](https://github.com/Unuuuuu)
- π Fix Tooltip arrow color with preset. [#34548](https://github.com/ant-design/ant-design/pull/34548)
- π Fixed number abnormal position display in Badge RTL mode. [#34545](https://github.com/ant-design/ant-design/pull/34545)
- π Fix numeric Row and Col class styles when using prefixCls. [#34494](https://github.com/ant-design/ant-design/pull/34494) [@mic-web](https://github.com/mic-web)
- π Fix Editable Textarea height jump in Firefox and Editable Typography.Title confirm icon position. [#34518](https://github.com/ant-design/ant-design/pull/34518)
- π Fix missing `status` style in RangePicker. [#34509](https://github.com/ant-design/ant-design/pull/34509)
- π Add warning for Input getting blurred when dynamically add `hasFeedback`. [#34475](https://github.com/ant-design/ant-design/pull/34475)
- π Fix missing classname in input when Input has `prefix` or `suffix`. [#34474](https://github.com/ant-design/ant-design/pull/34474)
- π±πΉ Updated lt_LT locale for `typeTemplate`. [#34567](https://github.com/ant-design/ant-design/pull/34567) [@Anizcus](https://gitit_LTit_LThub.com/Anizcus)
- π?πΉ Updated it_iT locale for `Table`. [#34566](https://github.com/ant-design/ant-design/pull/34566) [@freshgiammi](https://gitit_LTit_LThub.com/freshgiammi)

## 4.19.2

`2022-03-13`

- π Fix Dropdown not auto adjust placement when position on the edge of window. [#34390](https://github.com/ant-design/ant-design/pull/34390)
- π Change PageHeader elements margin from `12px` to `8px` inside `extra`. [#34428](https://github.com/ant-design/ant-design/pull/34428)
- π  Export css variable function in `antd/es/config-provider` folder to enable ssr requirement. [#34436](https://github.com/ant-design/ant-design/pull/34436)
- π  Refactor Menu with React hooks. [#34433](https://github.com/ant-design/ant-design/pull/34433)
- Input
  - π Fix Input font-size when `size` is large. [#34381](https://github.com/ant-design/ant-design/pull/34381)
  - π Fix Input.Group wrong border when status is error. [#34412](https://github.com/ant-design/ant-design/pull/34412)
- Form
  - π Fix Form.Item removed in `form.validateFields` throw `Can't perform a React state update on an unmounted component` warning. [#34405](https://github.com/ant-design/ant-design/pull/34405)
  - π Fix to Form that `initialValues` would change if `preserve` is false. [#34411](https://github.com/ant-design/ant-design/pull/34411)
- Tooltip
  - π Fix Tooltip width in Safari. [#34415](https://github.com/ant-design/ant-design/pull/34415) [@jiandandkl](https://github.com/jiandandkl)
  - π Fix arrow size of Tooltip/Popover/Popconfirm. [#34407](https://github.com/ant-design/ant-design/pull/34407)
- π Remove Collapse bottom border in simple style. [#34366](https://github.com/ant-design/ant-design/pull/34366) [@PanStar](https://github.com/PanStar)
- TypeScript
  - π€ Fix Input `data-*` type definition. [#34410](https://github.com/ant-design/ant-design/pull/34410) [@GitKou](https://github.com/GitKou)
  - π€ Fix Transfer `footer` type definition. [#34337](https://github.com/ant-design/ant-design/pull/34337) [@zomixi](https://github.com/zomixi)

## 4.19.1

`2022-03-08`

- π Fix less compile error related to custom status. [#34350](https://github.com/ant-design/ant-design/pull/34350)
  - π Fix error `ReferenceError: colorPalette is not defined` when customize theme.
  - π Fix error `Error: Invalid class or id selector syntax` when import `antd/dist/antd.css`.
- π Fix Input.Passowrd icon color in site. [#34354](https://github.com/ant-design/ant-design/pull/34354)
- π Fix ConfigProvider `csp` sometime not effect on Icon. [#34356](https://github.com/ant-design/ant-design/pull/34356)

## 4.19.0

`2022-03-08`

- π Optimize arrow style for some components. [#33710](https://github.com/ant-design/ant-design/pull/33710)

   <img src="https://user-images.githubusercontent.com/27722486/157088587-ca49cc29-bf25-42d1-8c14-020b5501c62e.png" width="500" />

- Input
  - π  Refactor Input with rc-input. [#34206](https://github.com/ant-design/ant-design/pull/34206)
    - Attention: The type and value of `ref` is modified because of refactoring from class component to function component. You can still get DOM node from `input`, and other methods such as `focus` and `blur` mentioned in document are also supported.
  - π Support `clearIcon` prop for customizing clear icon. [#34325](https://github.com/ant-design/ant-design/pull/34325)
- Table
  - π `filterSearch` now support passing function to customize search. [#34085](https://github.com/ant-design/ant-design/pull/34085) [@heiyu4585](https://github.com/heiyu4585)
  - π `column.filterDropdown({ clearFilters })` support `clearFilters({ confirm: false, closeDropdown: false })`. [#34120](https://github.com/ant-design/ant-design/pull/34120) [@heiyu4585](https://github.com/heiyu4585)
  - β¨οΈ Table adds `aria-sort` attribute for screen readers. [#33603](https://github.com/ant-design/ant-design/pull/33603) [@dgreene1](https://github.com/dgreene1)
  - π Fix Table filters select-all Checkbox not changed when select item. [#34295](https://github.com/ant-design/ant-design/pull/34295)
- π Data entry components add `status` prop to support custom status.

  - Transfer [#34098](https://github.com/ant-design/ant-design/pull/34098)
  - AutoComplete [#34096](https://github.com/ant-design/ant-design/pull/34096)
  - TreeSelect [#34093](https://github.com/ant-design/ant-design/pull/34093)
  - Cascader [#34086](https://github.com/ant-design/ant-design/pull/34086)
  - Select [#34084](https://github.com/ant-design/ant-design/pull/34084)
  - DatePicker and TimePicker [#34073](https://github.com/ant-design/ant-design/pull/34073)
  - Mentions [#34071](https://github.com/ant-design/ant-design/pull/34071)
  - InputNumber [#34042](https://github.com/ant-design/ant-design/pull/34042)
  - Input [#33995](https://github.com/ant-design/ant-design/pull/33995)

  <img src="https://user-images.githubusercontent.com/27722486/157089015-f96b0153-2cc4-4e04-94d6-e0e4b195d5d1.png" width="500" />

- π InputNumber supports `controls={{ upIcon, downIcon }}` to customize icon up and down. [#33914](https://github.com/ant-design/ant-design/pull/33914) [@heiyu4585](https://github.com/heiyu4585)
- π Notification `placement` support `top` / `bottom` [#33871](https://github.com/ant-design/ant-design/pull/33871) [@heiyu4585](https://github.com/heiyu4585)
- π Select, Cascades, DatePicker now support `placement` property. [#33641](https://github.com/ant-design/ant-design/pull/33541) [@ONLY-yours](https://github.com/ONLY-yours)
- π Dropdown support `arrow={{ pointAtCenter: true }}` to make arrow point at center. And `top` `bottom` placement are also supported. [#33658](https://github.com/ant-design/ant-design/pull/33658)
- π Skeleton.Input Adds `block` prop. [#33672](https://github.com/ant-design/ant-design/pull/33672) [@woochanleee](https://github.com/woochanleee)
- π Move TimePicker `disabledHours`, `disabledMinutes`, `disabledSeconds` into `disabledTime` to align with DatePicker. [#33503](https://github.com/ant-design/ant-design/pull/33503)
- π Modify the color of some borders and the background color of the progress bar to be transparent to suit the colored background. [#33506](https://github.com/ant-design/ant-design/pull/33506)
- π Space support custom children `key`. [#33607](https://github.com/ant-design/ant-design/pull/33607) [@qin20](https://github.com/qin20)
- π Fix `Typography.Title` didn't keep font size when become editable. [#34169](https://github.com/ant-design/ant-design/pull/34169) [@heiyu4585](https://github.com/heiyu4585)
- π Fix Form.Item throw warning `React does not recognize the requiredMark prop on a DOM element`. [#34323](https://github.com/ant-design/ant-design/pull/34323)

## 4.18.9

`2022-02-28`

- π New theme less variable for Radio, Divider, Modal, Dropdown, Drawer. [#34194](https://github.com/ant-design/ant-design/pull/34194) [#34187](https://github.com/ant-design/ant-design/pull/34187) [#34191](https://github.com/ant-design/ant-design/pull/34191) [#34189](https://github.com/ant-design/ant-design/pull/34189) [#34188](https://github.com/ant-design/ant-design/pull/34188) [@qdzhaoxiaodao](https://github.com/qdzhaoxiaodao)
- π Fix Dropdown item wrap style when text is too long. [#34177](https://github.com/ant-design/ant-design/pull/34177)
- TypeScript
  - π Fix Upload `onChange` parameter generic passing. [#34161](https://github.com/ant-design/ant-design/pull/34161) [@wangcch](https://github.com/wangcch)

## 4.18.8

`2022-02-21`

- π Fix `getContainer` config not working bug when called multi-times via `message.config`. [#34123](https://github.com/ant-design/ant-design/pull/34123) [@TrickyPi](https://github.com/TrickyPi)
- π Fix invalid context value cache in Menu component. [#34121](https://github.com/ant-design/ant-design/pull/34121) [@mrwd2009](https://github.com/mrwd2009)
- π Fix ConfigProvider config theme on server side crash, and warning for useless in SSR instead. [#34118](https://github.com/ant-design/ant-design/pull/34118)
- Table
  - β‘οΈ Fix Table render twice on first mount. [#34106](https://github.com/ant-design/ant-design/pull/34106)
  - β‘οΈ Optimized Table rendering performance, now will skip useless rendering when deprecated `column.render: () => { children, props }` method is not used. [#34075](https://github.com/ant-design/ant-design/pull/34075)
- π Fix incorrect copy text of Typography after children is updated when enable `copyable`. [#34034](https://github.com/ant-design/ant-design/pull/34034) [@opopeieie](https://github.com/opopeieie)
- β‘οΈ Optimize Avatar, List, Pagination, Steps to avoid additional render on mount if unnecessary. [34122](https://github.com/ant-design/ant-design/pull/34122)
- π Fix Form broken style when Select item is too long in horizontal layout. [#34117](https://github.com/ant-design/ant-design/pull/34117)
- πΈπ° Improve texts for Table, Form and Modal in `sk_SK`. [#34061](https://github.com/ant-design/ant-design/pull/34061) [@xseman](https://github.com/xseman)
- TypeScript
  - π€ Export `SiderProps` type from Layout component. [#34137](https://github.com/ant-design/ant-design/pull/34137) [@Picsong](https://github.com/Picsong)

## 4.18.7

`2022-02-14`

- Typography
  - π  Fix Typography `useLayoutEffect` warning in SSR. [#33818](https://github.com/ant-design/ant-design/pull/33818) [@SoYoung210](https://github.com/SoYoung210)
  - π Fix Typography with `ellipsis` makes screen show the scroll bar in some case. [#34007](https://github.com/ant-design/ant-design/pull/34007)
  - π Typography copy click event is now `stopPropagation` by default. [#33998](https://github.com/ant-design/ant-design/pull/33998) [@linxianxi](https://github.com/linxianxi)
  - π Fix Typography edit & copy button not trigger by enter key. [#33976](https://github.com/ant-design/ant-design/pull/33976) [@mrwd2009](https://github.com/mrwd2009)
- π Fix Form `undefined` text of min/max validators in pl_PL locale. [#34024](https://github.com/ant-design/ant-design/pull/34024) [@MichalPodeszwa](https://github.com/MichalPodeszwa)
- π Fix Input.TextArea cut text logic when `maxLength` configured. [#33910](https://github.com/ant-design/ant-design/pull/33910) [@chenyizhongx](https://github.com/chenyizhongx)
- π Button with `type=default` will provide `.ant-btn-default` className. [#34013](https://github.com/ant-design/ant-design/pull/34013)
- π Improve Menu `:focus-visible` style. [#34008](https://github.com/ant-design/ant-design/pull/34008)
- π Fix Pagination and Rate style problem in Safari. [#34002](https://github.com/ant-design/ant-design/pull/34002)
- π Fix Row and Col component styles when using prefixCls. [#33969](https://github.com/ant-design/ant-design/pull/33969) [@mic-web](https://github.com/mic-web)
- π Fix Timeline icons with custom color not working. [#33951](https://github.com/ant-design/ant-design/pull/33951)
- TypeScript
  - π€ Optimize Cascader `onChange` definition with `multiple` prop. [#33947](https://github.com/ant-design/ant-design/pull/33947) [@babycannotsay](https://github.com/babycannotsay)

## 4.18.6

`2022-02-07`

- π Fix the empty Popover displayed when `content` and `title` is undefined or null. [#33835](https://github.com/ant-design/ant-design/pull/33835) [@DawnLck](https://github.com/DawnLck)
- π Fix the problem that Tooltip didn't show on `ellipsis` with rows larger than 1. [#33875](https://github.com/ant-design/ant-design/pull/33875)
- Button
  - π Fix the issue that `block` of Button not work when small size. [#33878](https://github.com/ant-design/ant-design/pull/33878) [@tangjinzhou](https://github.com/tangjinzhou)
  - π Fix the issue that `loading.delay` of Button cause React memory leak warning [#33858](https://github.com/ant-design/ant-design/pull/33858) [@mrwd2009](https://github.com/mrwd2009)
- π Fix the problem that Tooltip cannot be displayed when it is used with Switch in `loading` state. [#33860](https://github.com/ant-design/ant-design/pull/33860)
- π Fix the Upload button sometimes flashes after changed from hidden to display when the Upload component is a `picture-card` type. [#33820](https://github.com/ant-design/ant-design/pull/33820) [@credred](https://github.com/credred)
- TypeScript
  - π€ Fix DatePicker `ref` TypeScript definition. [#33901](https://github.com/ant-design/ant-design/pull/33901) [@Amour1688](https://github.com/Amour1688)

## 4.18.5

`2022-01-24`

- Cascader
  - π Fix Cascader loading icon. [#33799](https://github.com/ant-design/ant-design/pull/33799)
  - π Fix Cascader not auto offset placement when popup is out of screen and fix active option out of screen not scroll. [#33777](https://github.com/ant-design/ant-design/pull/33777)
- π Fix Tag style in dark theme. [#33751](https://github.com/ant-design/ant-design/pull/33751)
- π Fix disabled Checkbox inside Tooltip dom structure. [#33772](https://github.com/ant-design/ant-design/pull/33772) [@boomler](https://github.com/boomler)
- β‘οΈ Fix invalid hook dependency array in Row and Layout.Sider components. [#33804](https://github.com/ant-design/ant-design/pull/33804) [@mrwd2009](https://github.com/mrwd2009)
- π Fix Card `ref` not working. [#33784](https://github.com/ant-design/ant-design/pull/33784) [@LongHaoo](https://github.com/LongHaoo)
- π Fix a Checkbox problem that `onChange` could not correctly pass in the modified value when dynamically modifying `value` property. [#33753](https://github.com/ant-design/ant-design/pull/33753)

## 4.18.4

`2022-01-18`

- Typography
  - β‘οΈ Optimize Typography to use native css ellipsis when `tooltip` is configured. [#33669](https://github.com/ant-design/ant-design/pull/33669)
  - π Refactor Typography `ellipsis` logic to fix error when `children` use Context content. [#33725](https://github.com/ant-design/ant-design/pull/33725)
- Icon
  - π Fix `<Icon component={HomeOutlined} />` and `<HomeOutlined />` not aligned. (https://github.com/ant-design/ant-design/pull/33709)
  - π Fix `<Icon component={SyncOutlined} spin />` shake. [#33726](https://github.com/ant-design/ant-design/pull/33726) [@JX-Zhuang](https://github.com/JX-Zhuang)
- Input
  - π Fix the display effect for Input related components with `hidden`. [#33735](https://github.com/ant-design/ant-design/pull/33735) [@fanerge](https://github.com/fanerge) [#33706](https://github.com/ant-design/ant-design/pull/33706) [@hydraZty](https://github.com/hydraZty)
  - π Fix the warning in console for Input with `showCount`. [#33686](https://github.com/ant-design/ant-design/pull/33686) [@whwangms](https://github.com/whwangms)
- β‘οΈ Fix ConfigProvider and Anchor rerender unexpectedly. [#33723](https://github.com/ant-design/ant-design/pull/33723) [@mrwd2009](https://github.com/mrwd2009)
- π Fix the duplicate keys warning in console for Cascader. [#33649](https://github.com/ant-design/ant-design/pull/33649) [@dimbslmh](https://github.com/dimbslmh)
- π Checkbox.Group support number and boolean as options element. [#33678](https://github.com/ant-design/ant-design/pull/33678)
- π Fix Form `validateMessages` bug in multiple ConfigProvider. [#33705](https://github.com/ant-design/ant-design/pull/33705)
- π Fix Steps the tail part would be hidden when type is navigation and labelPlacement is vertical. [#33716](https://github.com/ant-design/ant-design/pull/33716) [@toSayNothing](https://github.com/toSayNothing)
- π Fix Image has bottom blank style. [#33631](https://github.com/ant-design/ant-design/pull/33631) [@fanerge](https://github.com/fanerge)
- π Fix TreeSelect with keyboard operation missing highlight issue. [#33755](https://github.com/ant-design/ant-design/pull/33755)
- π°π­ Fix some translations for Khmer (km_KH). [#33738](https://github.com/ant-design/ant-design/pull/33738) [@vireakkeosokvibol](https://github.com/vireakkeosokvibol)

## 4.18.3

`2022-01-10`

- π Menu support `home` and `end` keyboard navigate. [#33642](https://github.com/ant-design/ant-design/pull/33642) [@dartamonov-vertex](https://github.com/dartamonov-vertex)
- Table
  - β‘οΈ Improve Table performance significantly when mount and unmount. [#33554](https://github.com/ant-design/ant-design/pull/33554)
  - π Fix Table emptynode fixed display. [#33610](https://github.com/ant-design/ant-design/pull/33610) [@hemengke1997](https://github.com/hemengke1997)
  - π Fix Table tree data hover error. [#33638](https://github.com/ant-design/ant-design/pull/33638) [@LongHaoo](https://github.com/LongHaoo)
- Form
  - π Fix Form validateMessages is not correct in default locale. [#33511](https://github.com/ant-design/ant-design/pull/33511)
  - π Fix Form.Item help with empty string makes layout shaking. [#33644](https://github.com/ant-design/ant-design/pull/33644)
- π Fix Input.Textarea throws error on preact. [#33536](https://github.com/ant-design/ant-design/pull/33536) [@developit](https://github.com/developit)
- π Fix PageHeader state update error after unmounted. [#33546](https://github.com/ant-design/ant-design/pull/33546) [@wuifdesign](https://github.com/wuifdesign)
- π Fix Select tag margin issue when using `tagRender`. [#33539](https://github.com/ant-design/ant-design/pull/33539)
- π Remove svg reset style for IE9-, fix svg elements being cutting style problem. [#33579](https://github.com/ant-design/ant-design/pull/33579)
- TypeScript
  - π€ Fix Upload types for pass generic. [#33543](https://github.com/ant-design/ant-design/pull/33543) [@woochanleee](https://github.com/woochanleee)
  - π€ Fix Card.Grid props should expose Div Properties like `onClick`. [#33563](https://github.com/ant-design/ant-design/pull/33563) [@LongHaoo](https://github.com/LongHaoo)

## 4.18.2

`2021-12-30`

- π Revert [#33411](https://github.com/ant-design/ant-design/pull/33411) to Table `onChange` being invoked infinitely.

## 4.18.1

`2021-12-29`

- π Fix Popconfirm throws `Can't perform a React state update on an unmounted component.` warning in some async case. [#33432](https://github.com/ant-design/ant-design/pull/33432)
- π Fix Input with `suffix` will crash when `value` is number type. [#33462](https://github.com/ant-design/ant-design/pull/33462)
- π Fix Divider with text dashed border color error. [#33452](https://github.com/ant-design/ant-design/pull/33452) [@chen-jingjie](https://github.com/chen-jingjie)
- π Fix Dropdown.Button not support `destroyPopupOnHide`. [#33442](https://github.com/ant-design/ant-design/pull/33442) [@LongHaoo](https://github.com/LongHaoo)
- π Fix Table Pagination not trigger `onChange` when `current` changed. [#33411](https://github.com/ant-design/ant-design/pull/33411) [@2724635499](https://github.com/2724635499)

## 4.18.0

`2021-12-27`

- π Fix Skeleton missing `style` prop. [#33405](https://github.com/ant-design/ant-design/pull/33405)
- π Fix Descriptions overflow style cause other components being cut. [#33392](https://github.com/ant-design/ant-design/pull/33392)
- π Unique Select-like component generic as OptionType to support FieldNames type. [#33364](https://github.com/ant-design/ant-design/pull/33364)
- π Fix Slider rail hover color when it is disabled. [#33369](https://github.com/ant-design/ant-design/pull/33369) [@chen-jingjie](https://github.com/chen-jingjie)
- Table
  - π Table `colSpan` &amp; `rowSpan` move to `onCell` function to optimize performance. [#33114](https://github.com/ant-design/ant-design/pull/33114)
  - π Table support Table.EXPAND_COLUMN &amp; Table.SELECTION_COLUMN to customize column order. [#33026](https://github.com/ant-design/ant-design/pull/33026)
  - π Fix Table hovering will trigger `expandedRowRender` and `column.render` unexpectly. [#33342](https://github.com/ant-design/ant-design/issues/33342)
- Form
  - π₯ Form.List nest Form.Item no longer need pass `fieldKey` anymore. [#32689](https://github.com/ant-design/ant-design/pull/32689)
  - π Form `label` can wrap via setting `labelWrap` now. [#33048](https://github.com/ant-design/ant-design/pull/33048)
- π ConfigProvider support Form `colon`. [9bc148a](https://github.com/ant-design/ant-design/commit/9bc148a) [@seaSuper](https://github.com/seaSuper)
- π add `prefix` to `InputNumber`. [#32600](https://github.com/ant-design/ant-design/pull/32600) [@Austaras](https://github.com/Austaras)
- π Modal static function support `wrapClassName` prop. [#32676](https://github.com/ant-design/ant-design/pull/32676) [@cwjTerrace](https://github.com/cwjTerrace)
- π Popconfirm add `showCancel` prop. [#32620](https://github.com/ant-design/ant-design/pull/32620) [@cwjTerrace](https://github.com/cwjTerrace)
- π Dropdown.Button supports `loading` property now. [#32467](https://github.com/ant-design/ant-design/pull/32467) [@kaysonwu](https://github.com/kaysonwu)
- π Input adds `showCount` property. [#32522](https://github.com/ant-design/ant-design/pull/32522) [@cwjTerrace](https://github.com/cwjTerrace)
- π Alert supports `closeIcon` now. [#32345](https://github.com/ant-design/ant-design/pull/32345) [@chen-jingjie](https://github.com/chen-jingjie)
- Typography
  - π for editable Paragraph, edit can be triggered by clicking the icon or the value itself (or both) with `triggerType`. [#32219](https://github.com/ant-design/ant-design/pull/32219) [@kachanovskiy](https://github.com/kachanovskiy)
  - π Typography support `enterIcon` to config confirm icon. [#32220](https://github.com/ant-design/ant-design/pull/32220) [@kachanovskiy](https://github.com/kachanovskiy)
- π Divider added `orientationMargin` APIs for customizing `margin-left/right` of title. [#32084](https://github.com/ant-design/ant-design/pull/32084) [@neotan](https://github.com/neotan)
- π Avatar add `maxPopoverTrigger` to support configuration of popover trigger. [#32197](https://github.com/ant-design/ant-design/pull/32197) [@RiteshMakan](https://github.com/RiteshMakan)
- π Upload supports `showUploadList.previewIcon` now. [#32059](https://github.com/ant-design/ant-design/pull/32059) [@1040961807](https://github.com/1040961807)
- π΄σ ₯σ ³σ £σ ΄σ Ώ Fix Catalan (ca_ES) missing translation key with `Form`. [#33377](https://github.com/ant-design/ant-design/pull/33377) [@ZzGGitter](https://github.com/ZzGGitter)
- π«π? Fix Finland (fi_FI) missing translation key with `Table`. [#33372](https://github.com/ant-design/ant-design/pull/33372) [@ZakarFin](https://github.com/ZakarFin)
- π°π­ Added locales for Khmer (km_KH) translation. [#32853](https://github.com/ant-design/ant-design/pull/32853) [@vireakkeosokvibol](https://github.com/vireakkeosokvibol)
- TypeScript
  - π€ Add Upload `capture` definition. [#33370](https://github.com/ant-design/ant-design/pull/33370) [@MichalPodeszwa](https://github.com/MichalPodeszwa)

## 4.17.4

`2021-12-19`

- π Fix a bug that Form.Item name is "parentNode" casue endless loop and memory leak. [#31846](https://github.com/ant-design/ant-design/pull/31846) [@DaoxingHuang](https://github.com/DaoxingHuang)
- π Revert [#32448](https://github.com/ant-design/ant-design/pull/32448) to fix emoji input at Input.TextArea. [#33312](https://github.com/ant-design/ant-design/pull/33312)

## 4.17.3

`2021-12-08`

- π Fix Drawer broken style caused by title width. [#33205](https://github.com/ant-design/ant-design/pull/33205)
- π Fix Badge flash style when switch from `display:none`. [#33083](https://github.com/ant-design/ant-design/pull/33083) [@songlinn](https://github.com/songlinn)
- π Change Anchor className form `.fixed` to `.ant-anchor-fixed`. [#33085](https://github.com/ant-design/ant-design/pull/33085) [@tangjinzhou](https://github.com/tangjinzhou)
- π Fix Button loading style missing in Firefox. [#33199](https://github.com/ant-design/ant-design/pull/33199)
- Select
  - π Fix Select width became small when searching. [#32988](https://github.com/ant-design/ant-design/pull/32988)
  - π Fix Select throw `Object.values not defined` in low version browser. [#33124](https://github.com/ant-design/ant-design/pull/33124)
- Radio
  - π Fix Radio dot offset when zooming. [#33086](https://github.com/ant-design/ant-design/pull/33086) [@hydraZty](https://github.com/hydraZty)
  - π Fix Radio cursor style. [#33198](https://github.com/ant-design/ant-design/pull/33198) [@tangjinzhou](https://github.com/tangjinzhou)
- π Revert Collapse header `position: relative` style to ensure some user depends on this style. [#33070](https://github.com/ant-design/ant-design/pull/33070)
- π Fix Input.TextArea height bug when has `showCount`. [#33055](https://github.com/ant-design/ant-design/pull/33055)
- TypeScript
  - π€ Fix Upload `data` type. [#33193](https://github.com/ant-design/ant-design/pull/33193)
  - π€ Fix Carousel type declaration. [#33109](https://github.com/ant-design/ant-design/pull/33109) [@q1uxu](https://github.com/q1uxu)
- π Add missing zh-TW translation. [#33108](https://github.com/ant-design/ant-design/pull/33108) [@dengfuping](https://github.com/dengfuping)

## 4.17.2

`2021-11-26`

- π Fix Form broken layout when set `wrapperCol={{ span: 24 }}`. [#32981](https://github.com/ant-design/ant-design/pull/32981)
- π Fix Modal `centered` was not centered vertically. [#33022](https://github.com/ant-design/ant-design/pull/33022)
- π Cascader typescript fix definition missing `suffixIcon` and support generic of `options` type. [#33008](https://github.com/ant-design/ant-design/pull/33008)
- π Fix Input.Search don't trigger click event on element inside `enterButton`. [#32999](https://github.com/ant-design/ant-design/pull/32999)
- πͺπͺ Added missing Estonian translations. [#33005](https://github.com/ant-design/ant-design/pull/33005) [@wedeso](https://github.com/wedeso)
- π€ Tree support generic to work more well with `fieldNames`. [#32992](https://github.com/ant-design/ant-design/pull/32992)

## 4.17.1

`2021-11-22`

- π Fix directly import `es/style/mixins/index.less` throw `Variable @root-entry-name is undefined` error. [#32887](https://github.com/ant-design/ant-design/pull/32887)
- π Fix Menu text color in collapsed tooltip. [#32956](https://github.com/ant-design/ant-design/pull/32956)
- π Fix Modal.method `bodyStyle` not working bug. [#32934](https://github.com/ant-design/ant-design/pull/32934) [@jin-benben](https://github.com/jin-benben)
- π Fix abnormal placeholder color. [#32915](https://github.com/ant-design/ant-design/pull/32915)
- π Fix editable Tabs dropdown remove button style issue. [#32919](https://github.com/ant-design/ant-design/pull/32919)
- π  Modal.confirm() Remove unnecessary `div` container. [#31492](https://github.com/ant-design/ant-design/pull/31492) [@ppbl](https://github.com/ppbl)
- π  Remove unused css code for Drawer. [4ca6976](https://github.com/ant-design/ant-design/commit/4ca6976)
- π  Use `@height-base` in PageHeader. [#32883](https://github.com/ant-design/ant-design/pull/32883)
- π΅π± Added missing pl_PL translations. [#32896](https://github.com/ant-design/ant-design/pull/32896) [@MichalPodeszwa](https://github.com/MichalPodeszwa)
- TypeScript
  - π€ Remove unnecessary union types for ReactNode. [#32935](https://github.com/ant-design/ant-design/pull/32935) [@huangkairan](https://github.com/huangkairan)
  - π€ Inherit `itemRender` typing from `rc-pagination`. [#32931](https://github.com/ant-design/ant-design/pull/32931) [@JounQin](https://github.com/JounQin)

## 4.17.0

`2021-11-15`

- Dynamic Theme Theme
  - π₯ ConfigProvider support dynamic modify theme color. [view detail](/docs/react/customize-theme-variable). [#31496](https://github.com/ant-design/ant-design/pull/31496)
  - π§ Move part `mixins` related less file to `themes` instead since it requires theme variable. We do not recommend use internal file but please note this if you already use it. [#32763](https://github.com/ant-design/ant-design/pull/32763)
  - π Fix `antd.variable.less` compile mix with default theme variable. [#32279](https://github.com/ant-design/ant-design/pull/32279)
  - π Fix antd compile file miss `/style/default.css`. [#32116](https://github.com/ant-design/ant-design/pull/32116)
  - π Fix less compile `antd.xxx.less` throw the `Maximum call stack size exceeded error`. [#32063](https://github.com/ant-design/ant-design/pull/32063)
- Input
  - π Fix Input.Search `border-left-radius` is not 0 when configured with `allowClear` and `addonBefore`. [#32812](https://github.com/ant-design/ant-design/pull/32812) [@KAROTT7](https://github.com/KAROTT7)
  - π Fix Input set to `disabled` still keep focused style. [#32739](https://github.com/ant-design/ant-design/pull/32739)
  - π Avoid Input `placeholder` can be selected on Chrome. [#32639](https://github.com/ant-design/ant-design/pull/32639) [@cw1997](https://github.com/cw1997)
  - π Input.TextArea `maxLength` is now passing to html textarea element. [#32448](https://github.com/ant-design/ant-design/pull/32448) [@MOHAMMADArsalan](https://github.com/MOHAMMADArsalan)
  - π Fix Input cannot clear content when focus it. [#31931](https://github.com/ant-design/ant-design/pull/31931) [@adaex](https://github.com/adaex)
- Cascader
  - π₯ Cascader support `multiple` mode. [#31936](https://github.com/ant-design/ant-design/pull/31936)
  - π Cascader support `onSearch` and `searchValue` props. [#31936](https://github.com/ant-design/ant-design/pull/31936)
  - π Cascader add `title` prop with content by default. [#31237](https://github.com/ant-design/ant-design/pull/31237) [@yingpengsha](https://github.com/yingpengsha)
  - π Fix Cascader missing `popupClassName` and `popupPlacement` props. [#32143](https://github.com/ant-design/ant-design/pull/32143)
- Select
  - π Select support `placement`. [#32143](https://github.com/ant-design/ant-design/pull/32143)
  - π Select support `fieldNames`. [#31925](https://github.com/ant-design/ant-design/pull/31925)
  - π Select support `ctrl + n/p` on mac. [#650](https://github.com/react-component/select/pull/650)
  - π Select add `title` for tag in `multiple` mode. [#637](https://github.com/react-component/select/pull/637)
  - π Optimize the text weight in Select. [#32486](https://github.com/ant-design/ant-design/pull/32486) [@liuxulian](https://github.com/liuxulian)
- TreeSelect
  - π TreeSelect support `placement`. [#32143](https://github.com/ant-design/ant-design/pull/32143)
  - π TreeSelect support `fieldNames`. [#31925](https://github.com/ant-design/ant-design/pull/31925)
- Tree
  - π Tree `draggable` add handler for tips. [#32306](https://github.com/ant-design/ant-design/pull/32306)
  - π Tree support `fieldNames` to customize node field name. [#31395](https://github.com/ant-design/ant-design/pull/31395)
  - π Tree support `onScroll` in virtual scroll. [#474](https://github.com/react-component/tree/pull/474)
  - π Fix Tree icon align bug when `showLine` is enable. [#32822](https://github.com/ant-design/ant-design/pull/32822)
  - π Fix Tree.DirectoryTree throws `TypeError:nativeEvent is undefined`. [#32551](https://github.com/ant-design/ant-design/pull/32551) [@D-to-the-K](https://github.com/D-to-the-K)
  - π Fix Tree drop outside not clear indicator. [#478](https://github.com/react-component/tree/pull/478)
  - π Fix 1px position deviation of the Tree connection line when zooming in. [#32075](https://github.com/ant-design/ant-design/pull/32075) [@btea](https://github.com/btea)
- PageHeader
  - π Fix PageHeader with false 'breadcrumbrender' still shows dom. [#32738](https://github.com/ant-design/ant-design/pull/32738)
- Form
  - π₯ Form `rule` support `warningOnly` to avoid form submit. [#30829](https://github.com/ant-design/ant-design/pull/30829)
  - π Form.ErrorList support customize `className`. [#30887](https://github.com/ant-design/ant-design/pull/30887)
  - π Fix Form breaks the line when Select content too long. [#32778](https://github.com/ant-design/ant-design/pull/32778)
  - π Fix Mentions error style in Form. [#32385](https://github.com/ant-design/ant-design/pull/32385)
- Drawer
  - π Tweak Drawer close icon position and default width, add `extra` and `size` props. [#30908](https://github.com/ant-design/ant-design/pull/30908)
  - π Drawer support `autoFocus` prop. [#181](https://github.com/react-component/drawer/pull/181)
  - π Fix the problem that the bottom Drawer component has no animation. [#32761](https://github.com/ant-design/ant-design/pull/32761) [@solitia7125](https://github.com/solitia7125)
  - π Optimize Drawer open animation. [#32342](https://github.com/ant-design/ant-design/pull/32342)
- Steps
  - π Fix Steps `progressDot` style when it is `vertical`. [#32742](https://github.com/ant-design/ant-design/pull/32742)
  - π Fix Steps default responsive style not working. [#31965](https://github.com/ant-design/ant-design/pull/31965) [@tangjinzhou](https://github.com/tangjinzhou)
- Typography
  - π Fix Typography ellipsis with `rows: 1` doesn't wrap after expanding. [#32735](https://github.com/ant-design/ant-design/pull/32735) [@hydraZty](https://github.com/hydraZty)
  - π Fix the text overflow when page zoomed in Typography with prop `ellipsis`. [#32496](https://github.com/ant-design/ant-design/pull/32496) [@hydraZty](https://github.com/hydraZty)
  - π Fix Typography `ellipsis` calculation bug when browser zoomed in. [#32447](https://github.com/ant-design/ant-design/pull/32447)
- Table
  - π₯ Table adds `column.filterMode` to support filter in a tree, which could set to `'menu' | 'tree'`. [#31809](https://github.com/ant-design/ant-design/pull/31809)
  - π₯ Table adds `column.filterSearch` for enable search function in filter dropdown. [#31809](https://github.com/ant-design/ant-design/pull/31809)
  - π Table hover `rowSpan` row will highlight all the rows now. [#32557](https://github.com/ant-design/ant-design/pull/32557)
  - π Fix Table selection column arrow get covered by fixed column. [#32276](https://github.com/ant-design/ant-design/pull/32276) [@g7i](https://github.com/g7i)
  - π Fix Table `loading` jumpy style when set `sticky`. [#32703](https://github.com/ant-design/ant-design/pull/32703) [@miloudbelaabed](https://github.com/miloudbelaabed)
  - π Fix Table don't support `ref`. [#32136](https://github.com/ant-design/ant-design/pull/32136) [@JounQin](https://github.com/JounQin)
  - π Table remove `sticky` style with fixed column in IE11 to avoid layout issue. [#32177](https://github.com/ant-design/ant-design/pull/32177)
  - π Optimize Table sorter icon margin problem. [#32172](https://github.com/ant-design/ant-design/pull/32172)
  - π Fix Table.SELECT_XXX ignore record `disabled` status by `getCheckboxProps`. [#32027](https://github.com/ant-design/ant-design/pull/32027)
  - π Table filter reset button won't close dropdown now. [#31809](https://github.com/ant-design/ant-design/pull/31809)
  - π Revert Table sticky `z-index` style back to `calc` instead of less calculation to fix `auto` style failure. [#31874](https://github.com/ant-design/ant-design/pull/31874) [@bconnorwhite](https://github.com/bconnorwhite)
  - π Fix Table scroll bar display issue when data dynamic changed. [#647](https://github.com/react-component/table/pull/647) [@lanten](https://github.com/lanten)
  - π Fix `pagination.className` not working in Table. [#32131](https://github.com/ant-design/ant-design/pull/32131) [@JounQin](https://github.com/JounQin)
- Transfer
  - π Transfer support custom left and right `footer`. [#31108](https://github.com/ant-design/ant-design/pull/31108)
  - π Transfer supports `locale.notFoundContent` with array. [#31088](https://github.com/ant-design/ant-design/pull/31088) [@wwyx778](https://github.com/wwyx778)
  - π Fix Transfer throws `MenuItem should not leave undefined key` warning when opening selection dropdown menu. [#32578](https://github.com/ant-design/ant-design/pull/32578)
  - π Tweak Transfer filter search input icon position. [#31809](https://github.com/ant-design/ant-design/pull/31809)
- Collapse
  - π Fix Collapse style issue when `expandIconPosition="right"`. [#32648](https://github.com/ant-design/ant-design/pull/32648)
  - π Adjust Collapse header style to make title overflow wrap not take arrow position. [#32492](https://github.com/ant-design/ant-design/pull/32492)
- Button
  - π Fix Button with `ghost` hover style. [#32289](https://github.com/ant-design/ant-design/pull/32289)
  - π Fix Button with `loading` can not trigger Tooltip. [#32158](https://github.com/ant-design/ant-design/pull/32158)
  - π Fix Button align issue with `icon` and `href`. [#32373](https://github.com/ant-design/ant-design/pull/32373)
- Pagination
  - π Pagination supports `selectComponentClass` prop. [#32132](https://github.com/ant-design/ant-design/pull/32132) [@JounQin](https://github.com/JounQin)
  - π Add box-shadow for jumper input in Pagination with `simple` props. [#32528](https://github.com/ant-design/ant-design/pull/32528) [@chen-jingjie](https://github.com/chen-jingjie)
- Upload
  - π Fix Upload broken loading style when `listStyle="picture"`. [#32664](https://github.com/ant-design/ant-design/pull/32664)
  - π Fix Upload icon error background. [#32051](https://github.com/ant-design/ant-design/pull/32051)
- InputNumber
  - π₯ InputNumber support `addonBefore` and `addonAfter`. [#31432](https://github.com/ant-design/ant-design/pull/31432) [@Austaras](https://github.com/Austaras)
  - π InputNumber now supports `controls` for displaying `+-` buttons or not. [#31548](https://github.com/ant-design/ant-design/pull/31548)
  - π InputNumber `formatter` support additional param to check if current input is user typing. [#31030](https://github.com/ant-design/ant-design/pull/31030)
  - π Fix InputNumber handler arrow not align center. [#32409](https://github.com/ant-design/ant-design/pull/32409)
  - π Show InputNumber handler when focus it. [#31911](https://github.com/ant-design/ant-design/pull/31911)
- DatePicker
  - π `DatePicker` and `RangePicker` now support `nextIcon`, `prevIcon`, `superNextIcon` and `superPrevIcon`. [#31703](https://github.com/ant-design/ant-design/pull/31703) [@Oreoz](https://github.com/Oreoz)
  - π Fix `defaultPickerValue` not working in RangePicker. [#32107](https://github.com/ant-design/ant-design/pull/32107) [@thommesZip](https://github.com/thommesZip)
- Notification
  - π Notification support `maxCount` to limit count. [#31807](https://github.com/ant-design/ant-design/pull/31807) [@binyellow](https://github.com/binyellow)
  - π Fix `closeIcon` not working bug when Notification is called multiple times. [#32359](https://github.com/ant-design/ant-design/pull/32359) [@KAROTT7](https://github.com/KAROTT7)
- π Menu.Divider support `dashed` style. [#31379](https://github.com/ant-design/ant-design/pull/31379) [@Map1en](https://github.com/Map1en)
- π Skeleton.Button add `block` prop. [#30902](https://github.com/ant-design/ant-design/pull/30902) [@Jehu](https://github.com/Jehu)
- π Popconfirm `onConfirm` supports Promise. [#30871](https://github.com/ant-design/ant-design/pull/30871) [@wendellhu95](https://github.com/wendellhu95)
- π Fix Card `tabs` style when set `tabPosition: 'left'`. [#32695](https://github.com/ant-design/ant-design/pull/32695)
- π Fix Radio cannot click due to custom `type` property. [#32463](https://github.com/ant-design/ant-design/pull/32463)
- π Fix `Ok` abbreviation to be `OK`. [#32259](https://github.com/ant-design/ant-design/pull/32259) [@chj-damon](https://github.com/chj-damon)
- π Fix Grid Col `flex` some time exceed its width when content too long. [#32160](https://github.com/ant-design/ant-design/pull/32160)
- π Fix Switch Loading icon in an incorrect position. [#32216](https://github.com/ant-design/ant-design/pull/32216)
- π Fix return element of `getPopupContainer` in ConfigProvider is not used as a container when calling `message.useMessage`. [#31939](https://github.com/ant-design/ant-design/pull/31939) [@DaoxingHuang](https://github.com/DaoxingHuang)
- π Improve small size Image by ellipsising preview text. [#29900](https://github.com/ant-design/ant-design/pull/29900) [@drizzlesconsin](https://github.com/drizzlesconsin)
- π Fix Alert extra dom node when `message` is `undefined`. [#32057](https://github.com/ant-design/ant-design/pull/32057)
- π Fix anchor `targetOffset` not work when contain spaces. [#31952](https://github.com/ant-design/ant-design/pull/31952) [@adaex](https://github.com/adaex)
- π Add `@checkbox-border-radius` less variable. [#31360](https://github.com/ant-design/ant-design/pull/31360) [@Gherciu](https://github.com/Gherciu)
- π Avatar add `crossOrigin` property to resolve cross origin issue. [#31273](https://github.com/ant-design/ant-design/pull/31273) [@Map1en](https://github.com/Map1en)
- RTL
  - π Optimized Alert close icon display in RTL mode. [#32286](https://github.com/ant-design/ant-design/pull/32286)
  - π Optimized Table header action display in RTL mode. [#32283](https://github.com/ant-design/ant-design/pull/32283)
  - π Optimized Collapse arrow icon display in RTL mode. [#32282](https://github.com/ant-design/ant-design/pull/32282)
  - π Optimized Badge count display and animation in RTL mode. [#32281](https://github.com/ant-design/ant-design/pull/32281)
  - π Optimized InputNumber handler border style in RTL mode. [#32272](https://github.com/ant-design/ant-design/pull/32272)
  - π Optimized Dropdown icon display in RTL mode. [#32271](https://github.com/ant-design/ant-design/pull/32271)
  - π Fix Transfer list `direction` value in RTL mode. [#31903](https://github.com/ant-design/ant-design/pull/31903)
- π Localization
  - π¬πͺ Add Georgian locale. [#32106](https://github.com/ant-design/ant-design/pull/32106) [@PrimulaX](https://github.com/PrimulaX)
  - π©πͺ Added Image translation in de_DE. [#32001](https://github.com/ant-design/ant-design/pull/32001) [@Chtau](https://github.com/Chtau)
  - π?π³ Added Malayalam (ml_IN) locale. [#31521](https://github.com/ant-design/ant-design/pull/31521) [@khjabir](https://github.com/khjabir)
  - π΅π° Added Urdu language (ur_PK) locale. [#31346](https://github.com/ant-design/ant-design/pull/31346) [@MuhammadAnas190](https://github.com/MuhammadAnas190)
  - π§π© Added bn_BD (Bangla) locale. [#31257](https://github.com/ant-design/ant-design/pull/31257) [@AminulBD](https://github.com/AminulBD)
- TypeScript
  - π€ Modify the type of Spin `tip` to ReactNode.. [#32733](https://github.com/ant-design/ant-design/pull/32733) [@tychenjiajun](https://github.com/tychenjiajun)
  - π€ Fix Message duration type definition. [#32524](https://github.com/ant-design/ant-design/pull/32524) [@chen-jingjie](https://github.com/chen-jingjie)
  - π€ Fix args type for `getPopupContainer` in ConfigProvider. [#32406](https://github.com/ant-design/ant-design/pull/32406) [@mtadams007](https://github.com/mtadams007)
  - π Fix Table missing generic type definition. [#32358](https://github.com/ant-design/ant-design/pull/32358)
  - π Fix Switch missing `id` property. [#32237](https://github.com/ant-design/ant-design/pull/32237) [@M-ZubairAhmed](https://github.com/M-ZubairAhmed)
  - π€ Fix `type` type for Button. [#32004](https://github.com/ant-design/ant-design/pull/32004) [@jaredleechn](https://github.com/jaredleechn)
  - π€ Improve type `locale` for Pagination. [#32128](https://github.com/ant-design/ant-design/pull/32128) [@JounQin](https://github.com/JounQin)
  - π€ Improve and export `DropdownButtonType` type for DropdownButton [[#31957](https://github.com/ant-design/ant-design/pull/31957) [@Dreamerryao](https://github.com/Dreamerryao)
  - π€ Adjust List `rowKey` type to React.key. [#32033](https://github.com/ant-design/ant-design/pull/32033) [@lironhl](https://github.com/lironhl)
  - π Fix DatePicker `ref` typing. [#31993](https://github.com/ant-design/ant-design/pull/31993) [@acfasj](https://github.com/acfasj)
  - π€ Update the `levelMove` type definition in Drawer. [#30714](https://github.com/ant-design/ant-design/pull/30714) [@g0shed](https://github.com/g0shed)

## 4.16.13

`2021-08-23`

- π Fix Form `label` and `<Typography.Text ellipsis />` don't work together. [#31838](https://github.com/ant-design/ant-design/pull/31838)
- π Fix Collapse update failed bug in HMR. [#31827](https://github.com/ant-design/ant-design/pull/31827) [@v4](https://github.com/v4)
- π Fix circular dependencies in Modal and Input. [#31817](https://github.com/ant-design/ant-design/pull/31817) [@zhyupe](https://github.com/zhyupe)
- RTL
  - π Fix the rtl config of Modal.confirm custom content missing. [#31828](https://github.com/ant-design/ant-design/pull/31828)

## 4.16.12

`2021-08-16`

- Form
  - π Fix Form shows `title` on help icon and optional text. [#31785](https://github.com/ant-design/ant-design/pull/31785)
  - π Fix Form `<Input bordered={false} />` outline style. [#31754](https://github.com/ant-design/ant-design/pull/31754)
- Button
  - π Fix Button broken style when using `ghost` and `danger`. [#31780](https://github.com/ant-design/ant-design/pull/31780)
  - π Fix Button icon not aligned center vertically in Chrome. [#31755](https://github.com/ant-design/ant-design/pull/31755)
- Input
  - π Fix Input clear icon margin missing with `suffix`. [#31745](https://github.com/ant-design/ant-design/pull/31745)
  - π Fix Input should not have focus style when disabled. [#31738](https://github.com/ant-design/ant-design/pull/31738)
- π Fix Transfer `showSelectAll={false}` does not hide selection dropdown. [#31746](https://github.com/ant-design/ant-design/pull/31746)
- π Fix Checkbox not aligned center in Checkbox.Group. [#31726](https://github.com/ant-design/ant-design/pull/31726)

## 4.16.11

`2021-08-08`

- π Fix ConfigProvider rerender unexpectedly when switching some languages. [#31630](https://github.com/ant-design/ant-design/pull/31630) [@Map1en](https://github.com/Map1en)
- π Improve ghost button style rules, no more `!important`. [#31659](https://github.com/ant-design/ant-design/pull/31659)
- π Improve RangePicker range transition style. [#31645](https://github.com/ant-design/ant-design/pull/31645)
- π€ Fix Dropdown `destroyPopupOnHide` TypeScript definition missing. [#31700](https://github.com/ant-design/ant-design/pull/31700) [@linxianxi](https://github.com/linxianxi)
- π€ Remove useless Omit type which is built-in in TypeScript 3.5+. [#31661](https://github.com/ant-design/ant-design/pull/31661) [@Dreamerryao](https://github.com/Dreamerryao)

## 4.16.10

`2021-08-02`

- π Fix Badge not showing count when customize `color` prop. [#31617](https://github.com/ant-design/ant-design/pull/31617) [@eokoneyo](https://github.com/eokoneyo)
- π Fix circle Progress `success.strokeColor` cannot take effect. [#31589](https://github.com/ant-design/ant-design/pull/31589)
- π Fix the type error due to the Select component didn't ignore the `getRawInputElement` prop. [#31566](https://github.com/ant-design/ant-design/pull/31566) [@aoilti](https://github.com/aoilti)
- π Fix Pagination's `totalBoundaryShowSizeChanger` property type error. [#31549](https://github.com/ant-design/ant-design/pull/31549) [@Monty-Ma](https://github.com/Monty-Ma)
- π Fix `className` applied to both Skeleton.Avatar wrapper and element itself. [#31536](https://github.com/ant-design/ant-design/pull/31536) [@Greatshock](https://github.com/Greatshock)
- π Internationalization
  - πΉπ· Added Turkish translation for Image `Preview` text. [#31593](https://github.com/ant-design/ant-design/pull/31593) [@mburakkalkan](https://github.com/mburakkalkan)
  - π°π· Fix a typo in the Korean language. [#31575](https://github.com/ant-design/ant-design/pull/31575) [@chatoo2412](https://github.com/chatoo2412)

## 4.16.9

`2021-07-27`

- π Fix Typography `ellipsis` calculation bug when browser zoomed. [#31449](https://github.com/ant-design/ant-design/pull/31449)
- π Fix Input wrong class when using `prefixCls`. [#31479](https://github.com/ant-design/ant-design/pull/31479) [@spawnia](https://github.com/spawnia)
- π Fix Input.Password unexpected focus style of error status. [#31456](https://github.com/ant-design/ant-design/pull/31456)
- π Fix Badge color transition issue when toggle visibility. [#31458](https://github.com/ant-design/ant-design/pull/31458)
- π Fix Tabs `tabBarGutter` abnormal style behaviors. [#31469](https://github.com/ant-design/ant-design/pull/31469)
- π Internationalization
  - π·πΊ Update translation for Image in ru_RU. [#31448](https://github.com/ant-design/ant-design/pull/31448) [@KirillSBarsukov](https://github.com/KirillSBarsukov)
  - π©π° Add missing translation for Table in da_DK. [#31486](https://github.com/ant-design/ant-design/pull/31486) [@bischmlb](https://github.com/bischmlb)

## 4.16.8

`2021-07-19`

- π Fix TextArea `style` not work when `allowClear` configured. [#31391](https://github.com/ant-design/ant-design/pull/31391)
- π Fix BackTop not disappear when fade out. [#31357](https://github.com/ant-design/ant-design/pull/31357)
- π Fix Cascader style bug inside Input `addonBefore`. [#31350](https://github.com/ant-design/ant-design/pull/31350)
- π Fix DatePicker disabled cell style when customize `dateRender`. [#31349](https://github.com/ant-design/ant-design/pull/31349)
- π Fix Select background in disabled. [#31430](https://github.com/ant-design/ant-design/pull/31430) [@DerrickTel](https://github.com/DerrickTel)
- π Fix alignment between Radio.Group and Button. [#31421](https://github.com/ant-design/ant-design/pull/31421) [@gtb104](https://github.com/gtb104)
- π Fix Input clear icon color in some situation. [#31378](https://github.com/ant-design/ant-design/pull/31378)
- Table
  - π Fix Table `sticky` header background is transparent when has sorters. [#31373](https://github.com/ant-design/ant-design/pull/31373)
  - π Fix missing top border of the first cell in table summary. [#31363](https://github.com/ant-design/ant-design/pull/31363)
- π Internationalization
  - π·πΊ Add Table.SELECTION_NONE for Russian localization. [#31361](https://github.com/ant-design/ant-design/pull/31361) [@wwyx778](https://github.com/wwyx778)
  - π­π° Add missing translations for Transfer in zh_HK. [#31404](https://github.com/ant-design/ant-design/pull/31404) [@kanweiwei](https://github.com/kanweiwei)
  - πͺπΈ Add missing translation for Image in es_ES. [#31330](https://github.com/ant-design/ant-design/pull/31330) [@Andu15](https://github.com/Andu15)

## 4.16.7

`2021-07-12`

- π Fix DatePicker date cell not centered when used in Table. [#31306](https://github.com/ant-design/ant-design/pull/31306) [@Map1en](https://github.com/Map1en)
- π Fix Desciptions border missing when inside Table. [#31307](https://github.com/ant-design/ant-design/pull/31307)
- π Fix InputNumber border and interactive handler not matched. [#31300](https://github.com/ant-design/ant-design/pull/31300) [@diyews](https://github.com/diyews)
- Table
  - π Fix incomplete display of the upper border of the table when the window is too small. [#31298](https://github.com/ant-design/ant-design/pull/31298) [@Map1en](https://github.com/Map1en)
  - π Fix Table `rowSelection.selectedRows` don't sync in initial state. [#31224](https://github.com/ant-design/ant-design/pull/31224) [@kerm1it](https://github.com/kerm1it)
  - π Fix Table `filteredValue` not work with nested columns. [#30815](https://github.com/ant-design/ant-design/pull/30815) [@moraispgsi](https://github.com/moraispgsi)
- Form
  - π Fix Form Input outline color under Form validation. [#31240](https://github.com/ant-design/ant-design/pull/31240)
  - π Form add `name` as a default label value in `validationMessages`. [#30179](https://github.com/ant-design/ant-design/pull/30179) [@jameslahm](https://github.com/jameslahm)
- π Fix Rate focus ring style in Safari. [#31241](https://github.com/ant-design/ant-design/pull/31241)
- π Tweak Select arrow icon position. [#31234](https://github.com/ant-design/ant-design/pull/31234)
- π Input will not trigger `onBlur` when click clear icon now which resolve that editable table input cannot be cleared. [#31202](https://github.com/ant-design/ant-design/pull/31202)
- π Fix Tooltip `arrowPointAtCenter` 1px shift bug. [#31201](https://github.com/ant-design/ant-design/pull/31201)
- π Fix Menu.Item hover color transition style. [#31189](https://github.com/ant-design/ant-design/pull/31189)
- π Fix Dropdown.Button don't support `overlayClassName` and `overlayStyle`. [#31187](https://github.com/ant-design/ant-design/pull/31187)
- π Adjust Pagination pattern of disabled-active buttons align with Radio style. [#31185](https://github.com/ant-design/ant-design/pull/31185) [@Map1en](https://github.com/Map1en)
- π Fix the path error when packaging the component style export file in the Windows environment. [#31277](https://github.com/ant-design/ant-design/pull/31277) [@aoxiang78](https://github.com/aoxiang78)
- π Add `selectNone` for en_GB locale file. [#31264](https://github.com/ant-design/ant-design/pull/31264) [@Map1en](https://github.com/Map1en)
- TypeScript
  - π€ Adjust Transfer `listStyle` definition to be optional. [#31322](https://github.com/ant-design/ant-design/pull/31322) [@geekrainy](https://github.com/geekrainy)

## 4.16.6

`2021-06-29`

- π Fix Tree loading status not been restored when `loadData` throw error. [#31170](https://github.com/ant-design/ant-design/pull/31170)
- β‘οΈ Optimize Progress animation CPU usage. [#31128](https://github.com/ant-design/ant-design/pull/31128) [@stygian-desolator](https://github.com/stygian-desolator)
- π Fix Popover arrow cannot show correct color. [#31127](https://github.com/ant-design/ant-design/pull/31127) [@A113n1003](https://github.com/A113n1003)

## 4.16.5

`2021-06-23`

- π Fix Menu to import `@ant-design/icons` icon directly to reduce bundle size without tree shaking. [#31011](https://github.com/ant-design/ant-design/pull/31011)
- π Fix Menu with overflow indicator popup do not follow current theme. [#31043](https://github.com/ant-design/ant-design/pull/31043)
- π Fix Table styles not using `@{table-prefix-cls}` less variable. [#30983](https://github.com/ant-design/ant-design/pull/30983)
- π Fix Input.Password hover border color in Form validation. [#30999](https://github.com/ant-design/ant-design/pull/30999)
- π Fix Space with wrap takes additional negative margin style. [#31000](https://github.com/ant-design/ant-design/pull/31000)
- π Fix Typography warning for non-boolean attribute when set `italic` property. [#31004](https://github.com/ant-design/ant-design/pull/31004)
- π Fix Badge not passing markup validation. [#31042](https://github.com/ant-design/ant-design/pull/31042) [@conwnet](https://github.com/conwnet)

## 4.16.4

`2021-06-23`

- Broken version, don't use it.

## 4.16.3

`2021-06-14`

- π Fix the mistake that tooltip mount on wrong dom, when getPopupContainer of tooltip's props is undefined or null. [#30963](https://github.com/ant-design/ant-design/pull/30963) [@ymrdf](https://github.com/ymrdf)
- π Fix Button lost margin between loading icon and text when children is fragment. [#30962](https://github.com/ant-design/ant-design/pull/30962)
- Table
  - π Table adds warning when `filteredKeys` is controlled and not reflecting internal changes. [#30882](https://github.com/ant-design/ant-design/pull/30882) [@wendellhu95](https://github.com/wendellhu95)
  - π Fix Table fixed column header hover background. [#30972](https://github.com/ant-design/ant-design/pull/30972)
- π Adjust Dropdown item content style to make it get more display space. [#30911](https://github.com/ant-design/ant-design/pull/30911)
- π Fix Menu in dark mode open style affect by light mode. [#30907](https://github.com/ant-design/ant-design/pull/30907)
- π Fix Dropdown/DatePicker/Select/Cascader animation direction after auto adjust position. [#30892](https://github.com/ant-design/ant-design/pull/30892)
- π Internationalization
  - π΅π± Fix Polish locale. [#30899](https://github.com/ant-design/ant-design/pull/30899) [@MichalJani](https://github.com/MichalJani)

## 4.16.2

`2021-06-07`

- π Fix Menu auto overflow with `horizontal` mod breaks by `float` element. [#30879](https://github.com/ant-design/ant-design/pull/30879)
- Typography
  - π Fix the problem that Typography.Paragraph `copyable` will treat `React.Fragment` as an array. [#30869](https://github.com/ant-design/ant-design/pull/30869) [@crazyair](https://github.com/crazyair)
  - π Fix Typography incorrect ellipsis width when customize `font-size`. [#30840](https://github.com/ant-design/ant-design/pull/30840)
- π Fix Progress `type="circle"` throws error `Rendered more hooks than during the previous render` sometimes. [#30855](https://github.com/ant-design/ant-design/pull/30855)
- π Optimize Tooltip content width. [#30822](https://github.com/ant-design/ant-design/pull/30822) [@donysukardi](https://github.com/donysukardi)
- Table
  - π  Optimize state display logic of select all checkbox in Table. [#30811](https://github.com/ant-design/ant-design/pull/30811) [@kerm1it](https://github.com/kerm1it)
  - π Fix Table column which contains filters or sorters cannot work with `onClick` and `ellipsis` property. [#30799](https://github.com/ant-design/ant-design/pull/30799)
- π Fix Dropdown Item with link color style and click icon can also trigger link effect now. [#30802](https://github.com/ant-design/ant-design/pull/30802)
- π Remove duplicated css reset styles for render performance. [#30660](https://github.com/ant-design/ant-design/pull/30660) [@renzhao1113](https://github.com/renzhao1113)
- TypeScript
  - π€ Adjust Form, Input, Locale, PageHeader component definition. [#30776](https://github.com/ant-design/ant-design/pull/30776) [@qqabcv520](https://github.com/qqabcv520)

## 4.16.1

`2021-05-30`

- Menu
  - π Fix overflow not work as expect. [#30672](https://github.com/ant-design/ant-design/pull/30672)
  - π Fix warning of `Can't perform a React state update on an unmounted component` when unmounted. [#30678](https://github.com/ant-design/ant-design/pull/30678)
  - π Fix `inline` mode not correct handle ellipsis when `icon` not provided. [#30682](https://github.com/ant-design/ant-design/pull/30682)
- Typography
  - π Fix Typography.Text trigger ResizeObserver when css ellipsis is validate. [#30664](https://github.com/ant-design/ant-design/pull/30664)
  - π Fix `ellipsis` not work when HMR take effect in dev env. [#30754](https://github.com/ant-design/ant-design/pull/30754)
- Table
  - π Fix Table.Summary missing border style when `sticky` and `bordered` enabled. [#30666](https://github.com/ant-design/ant-design/pull/30666)
  - π Fix column align with sorter and filter. [#30744](https://github.com/ant-design/ant-design/pull/30744)
- π Fix Collapse expandIconPosition="right" not working. [#30680](https://github.com/ant-design/ant-design/pull/30680) [@hongdeyuan](https://github.com/hongdeyuan)
- TypeScript
  - π€ Export TableColumnsType type.[#30747](https://github.com/ant-design/ant-design/pull/30747) [@alwaysloseall](https://github.com/alwaysloseall)
  - π€ Export TreeDataNode type. [#30745](https://github.com/ant-design/ant-design/pull/30745) [@alwaysloseall](https://github.com/alwaysloseall)

## 4.16.0

`2021-05-24`

- π₯ Refactor Menu to support keyboard access and enhance accessibility experience. [#30382](https://github.com/ant-design/ant-design/pull/30382)
- π Redesign Table filter and sorter buttons to clarify current column. [#30651](https://github.com/ant-design/ant-design/pull/30651)
- Table
  - π Table.Summary supports `sticky` mode. [#30631](https://github.com/ant-design/ant-design/pull/30631)
  - π Fix nested Table margin inside Table with fixed columns. [#30587](https://github.com/ant-design/ant-design/pull/30587)
  - π Table add the `expandable.fixed` property to set the expansion icon to be fixed. [#29959](https://github.com/ant-design/ant-design/pull/29959)
- Upload
  - π Upload `itemRender` add `actions` param. [#30236](https://github.com/ant-design/ant-design/pull/30236)
  - π Upload: Remove `stopPropagation` from drag events and add `onDrop` prop. [#30319](https://github.com/ant-design/ant-design/pull/30319) [@ebonow](https://github.com/ebonow)
- Typography
  - π Typography support for italics. [#30458](https://github.com/ant-design/ant-design/pull/30458) [@alwaysloseall](https://github.com/alwaysloseall)
  - π Fix Typography flush issue when use `ellipsis={{ suffix: 'xxx' }}`. [#30582](https://github.com/ant-design/ant-design/pull/30582)
- Collapse
  - π Fix Collapse arrow style bug when no `header`. [#30586](https://github.com/ant-design/ant-design/pull/30586)
  - π Fix Collapse content disappears when set `activeKey` while it is hidden. [#30555](https://github.com/ant-design/ant-design/pull/30555) [@zjffun](https://github.com/zjffun)
- π Fix Menu.SubMenu icon margin issue when using third party icon libraries. [@#30642](https://github.com/ant-design/ant-design/pull/30642)
- π Fix Descriptions wrong styling import. [@#30602](https://github.com/ant-design/ant-design/pull/30602) [@lisenenkov](https://github.com/lisenenkov)
- π Radio.Group supports `data-*` and `aria-*` props. [#30507](https://github.com/ant-design/ant-design/pull/30507)
- π Statistic.CountDown support `onChange` event. [#30265](https://github.com/ant-design/ant-design/pull/30265) [@appleshell](https://github.com/appleshell)
- π PageHeader `breadcrumb` allows to set as a reactnode. [#30019](https://github.com/ant-design/ant-design/pull/30019) [@gepd](https://github.com/gepd)
- π ConfigProvider supports dynamic `prefixCls`. [#30625](https://github.com/ant-design/ant-design/pull/30625)
- π Fix Anchor cannot trigger `onChange` when have `getCurrentAnchor` prop. [#30601](https://github.com/ant-design/ant-design/pull/30601)
- π Fix Notification custom styles don't apply to correct div by `className` when using `useNotification`. [#30588](https://github.com/ant-design/ant-design/pull/30588)
- π Fix Tabs `tabBarGutter` not working. [#30545](https://github.com/ant-design/ant-design/pull/30545)
- π Rewrite Space to use `flexGap` instead of `margin` style to deal with layout issues under certain border situations. [#30023](https://github.com/ant-design/ant-design/pull/30023)
- π Fix Form error style of Input.Group and Cascader. [#30640](https://github.com/ant-design/ant-design/pull/30640)
- π Internationalization
  - π·π΄ Added Romanian internationalization. [#30419](https://github.com/ant-design/ant-design/pull/30419) [@stefy](https://github.com/stefy)
  - π Added Dutch (Netherland π³π±) and Dutch (Belgium π§πͺ) internationalization. [#30389](https://github.com/ant-design/ant-design/pull/30389) [@lewis-fidlers](https://github.com/lewis-fidlers)
- TypeScript
  - π€ Space TypeScript definition supports HTMLAttribute props. [#30590](https://github.com/ant-design/ant-design/pull/30590)

## 4.15.6

`2021-05-18`

- π Upload will ignore `accept` if it's invalidate MIME type to follow native behavior. [#30549](https://github.com/ant-design/ant-design/pull/30549)
- π Remove reset style of `th` `text-align`. [#30399](https://github.com/ant-design/ant-design/pull/30399) [@lbwa](https://github.com/lbwa)
- π Locale
  - π?π³ Improve hi_IN locale. [#30541](https://github.com/ant-design/ant-design/pull/30541) [@jaideepghosh](https://github.com/jaideepghosh)
  - π§π· Improve pt-BR locale. [#30532](https://github.com/ant-design/ant-design/pull/30532) [@buzs](https://github.com/buzs)

## 4.15.5

`2021-05-10`

- π Fix Upload crashes if `beforeUpload` returns `false` in IE. [#30391](https://github.com/ant-design/ant-design/pull/30391) [@OleksandrAntonenko1](https://github.com/OleksandrAntonenko1)
- Calendar
  - π Fix Calendar broken style inside Form.Item. [#30442](https://github.com/ant-design/ant-design/pull/30442)
  - π Fix Calendar throws error when set `value` to `null` or `undefined`. [#30442](https://github.com/ant-design/ant-design/pull/30442)
- Table
  - π Fix Table call `confirm({ closeDropdown: true })` in `filterDropdown` should not trigger `onFilterDropdownVisibleChange`. [#30457](https://github.com/ant-design/ant-design/pull/30457)
  - π Fix Table broken expand icon style in Windows Firefox. [#30410](https://github.com/ant-design/ant-design/pull/30410)
- π Fix Dropdown.Button don't support `mouseEnterDelay` and `mouseLeaveDelay`. [#30452](https://github.com/ant-design/ant-design/pull/30452)
- π Optimize Rate focus behavior from `:focus` to `:focus-visible`. [#30451](https://github.com/ant-design/ant-design/pull/30451)
- π Fix Steps with progress get cut at the bottom. [#30373](https://github.com/ant-design/ant-design/pull/30373) [@fachreza73](https://github.com/fachreza73)
- π Fix the problem that setting `locale` in DatePicker cannot override ConfigProvider `locale`. [#30380](https://github.com/ant-design/ant-design/pull/30380) [@Map1en](https://github.com/Map1en)
- Locale
  - π«π? Update DatePicker Finnish locale. [#30433](https://github.com/ant-design/ant-design/pull/30433) [@hiiri](https://github.com/hiiri)
  - π«π· Update French locale with missing messages. [#30436](https://github.com/ant-design/ant-design/pull/30436) [@LoicUV](https://github.com/LoicUV)
  - π·πΈ Update Serbian locale. [#30401](https://github.com/ant-design/ant-design/pull/30401) [@vmedar](https://github.com/vmedar)
- TypeScript
  - π€ Export Tooltip `zIndex` prop typescript definition. [#30432](https://github.com/ant-design/ant-design/pull/30432)

## 4.15.4

`2021-04-30`

- π Fix Menu.Item width issue when `collapsedWidth` is set. [#30357](https://github.com/ant-design/ant-design/pull/30357) [@Map1en](https://github.com/Map1en)
- π Fix Radio check spin style sometime height too long. [#30367](https://github.com/ant-design/ant-design/pull/30367)
- π Fix Typography.Link open link when trigger `editable`. [#30354](https://github.com/ant-design/ant-design/pull/30354) [@John60676](https://github.com/John60676)
- π InputNumber clean up input will trigger `onChange(null)` now. [#30337](https://github.com/ant-design/ant-design/pull/30337)
- π Fix Dropdown.Button broken style when inside Modal `footer`. [#30328](https://github.com/ant-design/ant-design/pull/30328) [@Map1en](https://github.com/Map1en)
- π Replace Anchor default background from `#FFFFFF` to `transparent`. [#30336](https://github.com/ant-design/ant-design/pull/30336)
- π Add `ko_KR` and `ja_JP` TimePicker.RangePicker placeholder. [#30285](https://github.com/ant-design/ant-design/pull/30285) [@ChalkPE](https://github.com/ChalkPE)
- TypeScript
  - π€ Fix Upload type definition of `beforeUpload` and `UploadFile`. [#30351](https://github.com/ant-design/ant-design/pull/30351) [#30343](https://github.com/ant-design/ant-design/pull/30343) [@kerm1it](https://github.com/kerm1it)

## 4.15.3

`2021-04-25`

- Table
  - π Fix Table selection column width when bordered is true. [#30304](https://github.com/ant-design/ant-design/pull/30304)
  - π¨ Add warning when Table `current` is negative number. [#30242](https://github.com/ant-design/ant-design/pull/30242) [@wadezhan](https://github.com/wadezhan)
- π Fix Button `type="link"` should not redirect when it is `disabled`. [#30209](https://github.com/ant-design/ant-design/pull/30209)
- π Fix Upload appear errors when url of file is `null`. [#30215](https://github.com/ant-design/ant-design/pull/30215)
- π Fix padding on a SubMenu inside an ItemGroup. [#30218](https://github.com/ant-design/ant-design/pull/30218) [@sebakerckhof](https://github.com/sebakerckhof)
- π Fix Checkbox & Radio align issue in flex box. [#30260](https://github.com/ant-design/ant-design/pull/30260)
- π Fix Badge broken animation on spin icon. [#30275](https://github.com/ant-design/ant-design/pull/30275)
- π Fix Input `disabled` hover style in Form. [#30302](https://github.com/ant-design/ant-design/pull/30302) [@Fog3211](https://github.com/Fog3211)
- TypeScript
  - π€ Fix Upload type definition of `beforeUpload`. [#30213](https://github.com/ant-design/ant-design/pull/30213) [@hello-chinese](https://github.com/hello-chinese)

## 4.15.2

`2021-04-19`

- π Fix Tabs `centered` doesn't work. [#30106](https://github.com/ant-design/ant-design/pull/30106) [@kerm1it](https://github.com/kerm1it)
- π Fix Button `type="link"` disabled cursor style missing. [#30197](https://github.com/ant-design/ant-design/pull/30197)
- π Fix TextArea `onChange` event return `target` object is not a HTMLTextArea object. [#30124](https://github.com/ant-design/ant-design/pull/30124)
- π Files in Upload `fileList` will always have uid. [#30087](https://github.com/ant-design/ant-design/pull/30087) [@jameslahm](https://github.com/jameslahm)
- π Fix Badge toggle style when `status` is `warning`. [#30090](https://github.com/ant-design/ant-design/pull/30090) [@jameslahm](https://github.com/jameslahm)
- π Add Image component `preview` text in zh_HK and zh_TW. [#30100](https://github.com/ant-design/ant-design/pull/30100) [@jameslahm](https://github.com/jameslahm)
- π add da_DK locale TimePicker.RangePicker. [#30128](https://github.com/ant-design/ant-design/pull/30128) [@themitvp](https://github.com/themitvp)
- TypeScript
  - π€ Modify LIST_IGNORE field is of string type. [#30188](https://github.com/ant-design/ant-design/pull/30188) [@hello-chinese](https://github.com/hello-chinese)

## 4.15.1

`2021-04-10`

- π Fix Descriptions `labelStyle` `contentStyle` unsuccessful when `layout="vertical"` and `bordered={true}`. [#29942](https://github.com/ant-design/ant-design/pull/29942)
- π Upload won't crash when `fileList` is a frozen object now. [#29944](https://github.com/ant-design/ant-design/pull/29944)
- π Fix Tabs cannot scroll when vertical mode in Safari 13.1. [#29983](https://github.com/ant-design/ant-design/pull/29983)
- π Fix Button throws `Cannot read property 'removeChild' of null` in some situation. [#29961](https://github.com/ant-design/ant-design/pull/29961) [@JohnDeved](https://github.com/JohnDeved)
- π Fix Transfer button's box-shadow getting cut. [#30030](https://github.com/ant-design/ant-design/pull/30030) [@jinchaofs](https://github.com/jinchaofs)
- π Fix CheckBox.Group cannot work with Form of `@ant-design/compatible`. [#30039](https://github.com/ant-design/ant-design/pull/30039) [@jameslahm](https://github.com/jameslahm)
- π Fix PageHeader `<Tabs type="card" />` padding missing. [#29819](https://github.com/ant-design/ant-design/pull/29819)
- Table
  - π Optimize Table pagination style when narrow width. [#30065](https://github.com/ant-design/ant-design/pull/30065)
  - π Fix Table `@table-border-radius-base` not being applied to `.ant-table` node. [#29966](https://github.com/ant-design/ant-design/pull/29966) [@VoliBearCat](https://github.com/VoliBearCat)
- π Fix Input.TextArea `maxLength` does not work in control mode. [#30070](https://github.com/ant-design/ant-design/pull/30070)
- TypeScript
  - π€ Fix Select can not contain `undefined` type. [#30068](https://github.com/ant-design/ant-design/pull/30068) [@Gamote](https://github.com/Gamote)
  - π€ Fix Popconfirm `okButtonProps` and `cancelButtonProps` types. [#29928](https://github.com/ant-design/ant-design/pull/29928) [@IggsGrey](https://github.com/IggsGrey)
- Locale
  - πͺπΈ Add es_ES locale for `Table.SELECTION_NONE`. [#29962](https://github.com/ant-design/ant-design/pull/29962) [@liquorxm](https://github.com/liquorxm)

## 4.15.0

`2021-03-29`

- π Table now supports `rowSelection.defaultSelectedRowKeys`. [#29879](https://github.com/ant-design/ant-design/pull/29879) [@keelii](https://github.com/keelii)
- π Fix TextArea display value will be cut by `maxLength` when in controlled. Fix `onCompositionEnd` not trigger when input exceed `maxLength`. Fix emoji count not align with `maxLength` & `showCount`. [#29867](https://github.com/ant-design/ant-design/pull/29867)
- π Fix Button click effect style not working in shadow root. [#29897](https://github.com/ant-design/ant-design/pull/29897) [@JohnDeved](https://github.com/JohnDeved)
- Pagination
  - π Fix Pagination focus style stay after interaction. [#29891](https://github.com/ant-design/ant-design/pull/29891)
  - π Fix Pagination jump input height not correct when config `modifyVars`. [#29886](https://github.com/ant-design/ant-design/pull/29886) [@SyMind](https://github.com/SyMind)
- π Fix Steps progress item getting cut at edge. [#29893](https://github.com/ant-design/ant-design/pull/29893)
- π  Prevent Upload drop event bubbling to handle nest case. [#29832](https://github.com/ant-design/ant-design/pull/29832) [@jojonarte](https://github.com/jojonarte)
- π Apply ConfigProvider `componentSize` on Tabs component. [#29844](https://github.com/ant-design/ant-design/pull/29844) [@bn3t](https://github.com/bn3t)
- π Remove Tag hover style since it do not have click interactive. [#29874](https://github.com/ant-design/ant-design/pull/29874)
- π«π· Add missing `fr_FR` translations. [#29839](https://github.com/ant-design/ant-design/pull/29839) [@bn3t](https://github.com/bn3t)
- πΈπͺ Add missing `sv_SE` translations. [#29896](https://github.com/ant-design/ant-design/pull/29896) [@isakol](https://github.com/isakol)

## 4.14.1

`2021-03-22`

- π Fix Tabs position shift when active item changed. [#29781](https://github.com/ant-design/ant-design/issues/29781)
- π Fix `placeholder` not being hidden when Image is loaded from cache. [#29829](https://github.com/ant-design/ant-design/pull/29829)
- π Improve Checkbox/Radio label text layout. [#29788](https://github.com/ant-design/ant-design/pull/29788)
- TypeScript
  - π€ Fix Upload type declaration of `beforeUpload`. [#29766](https://github.com/ant-design/ant-design/pull/29766)

## 4.14.0

`2021-03-14`

- Upload
  - π Upload `onChange` to change back to the original behavior (before Upload false returns the original file, and the rest of the scene returns the encapsulated object). Now you can always get the original file via `onChange.info.originFileObj`. For future upgrades, please use this method to access the original text first. [#29737](https://github.com/ant-design/ant-design/pull/29737)
  - π Fix Upload `onChange` params `file` can not `cloneDeep` by lodash. [#29718](https://github.com/ant-design/ant-design/pull/29718)
  - π Fix Upload crash when `fileList` is `null`. [#29702](https://github.com/ant-design/ant-design/pull/29702)
  - π Upload motion add 2s deadline to avoid developer manually remove motion makes hanging. [#29686](https://github.com/ant-design/ant-design/pull/29686)
- π Fix the bug that Modal footer buttons not spaced properly when using href in button. [#29681](https://github.com/ant-design/ant-design/pull/29681) [@n0ruSh](https://github.com/n0ruSh)
- π Add parent class for different Notification types. [#29634](https://github.com/ant-design/ant-design/pull/29634) [@n0ruSh](https://github.com/n0ruSh)
- π Typography editable supports `onCancel` and `onEnd`. [#29615](https://github.com/ant-design/ant-design/pull/29615) [@jueinin](https://github.com/jueinin)
- Tabs
  - π Fix Tabs `centered` prop is not actually center. [#29495](https://github.com/ant-design/ant-design/pull/29495) [@jinchaofs](https://github.com/jinchaofs)
  - π Tabs support `moreIcon`. [#29744](https://github.com/ant-design/ant-design/pull/29744) [@tianyuan233](https://github.com/tianyuan233)
- π Button with `htmlType='reset'` will reset all form fileds. [#29752](https://github.com/ant-design/ant-design/pull/29752) [@jueinin](https://github.com/jueinin)
- π Fix AutoComplete custom input `className` missing. [#29725](https://github.com/ant-design/ant-design/pull/29725)
- π Fix console warning when setting `margin` style on Row. [#29688](https://github.com/ant-design/ant-design/pull/29688)
- π Fix the error style where the `disabled` Input has affix elements. [#29670](https://github.com/ant-design/ant-design/pull/29670)
- π Optimize the cursor style of Form.Item tooltip info. [#29650](https://github.com/ant-design/ant-design/pull/29650)
- π¨πΏ Fix typo in cs_CZ locale. [#29675](https://github.com/ant-design/ant-design/pull/29675) [@jvaclavik](https://github.com/jvaclavik)
- π¨π¦ Add fr_CA locale. [#29748](https://github.com/ant-design/ant-design/pull/29748) [@liufenghua808](https://github.com/liufenghua808)

## 4.13.1

`2021-03-06`

- π Fix `message.config` with `prefixCls` missing animation style. [#29574](https://github.com/ant-design/ant-design/pull/29574)
- π Fix Tooltip is not interactive when `visible` is `true` under some situation. [#29555](https://github.com/ant-design/ant-design/pull/29555)
- π Fix ConfigProvider within multiple page switch will lose locale issue. [#29570](https://github.com/ant-design/ant-design/pull/29570)
- π Fix Modal with hooks cannot call `update` or `destroy` before render. [#29584](https://github.com/ant-design/ant-design/pull/29584)
- π Fix Grid throw error when client support flexGap but ssr not support. [#29586](https://github.com/ant-design/ant-design/pull/29586)
- π Fix Select caret position when `mode="tags"` and `size="small"`. [#29561](https://github.com/ant-design/ant-design/pull/29561)
- π Fix Carousel `dotPosition` makes `pauseOnHover` not working. [#29587](https://github.com/ant-design/ant-design/pull/29587) [@zgoby](https://github.com/zgoby)
- π Fix Steps `responsive` prop warning. [#29599](https://github.com/ant-design/ant-design/pull/29599)
- π Fix Upload `onChange` param of `file.originFileObj` return nest Proxy object. [#29614](https://github.com/ant-design/ant-design/pull/29614)
- π Fix Descriptions under Table will not have 100% width. [#29630](https://github.com/ant-design/ant-design/pull/29630)
- TypeScript
  - π€ Fix Drawer type declaration of `contentWrapperStyle`. [#29571](https://github.com/ant-design/ant-design/pull/29571)

## 4.13.0

`2021-02-28`

- π₯ InputNumber support `stringMode` for high precision `step`. `value` in control out of range shows warning style instead of changing it. Dynamic update `min` & `max` will not trigger `onChange` anymore. [#29373](https://github.com/ant-design/ant-design/pull/29373)
- π Upload support `beforeUpload` return `Upload.LIST_IGNORE` to skip item added in UploadList. [#29474](https://github.com/ant-design/ant-design/pull/29474)
- π Image support config motion name. [#29394](https://github.com/ant-design/ant-design/pull/29394) [@crazyair](https://github.com/crazyair)
- ConfigProvider
  - π ConfigProvider support global statistic config to support some statistic function call. [#29285](https://github.com/ant-design/ant-design/pull/29285) [@crazyair](https://github.com/crazyair)
  - π Motion related css `className` prepend `ant-` prefix to avoid naming conflict. [#29268](https://github.com/ant-design/ant-design/pull/29268) [@crazyair](https://github.com/crazyair)
- π Form.List nest multiple level Form.Item support `preserve` prop. [#29267](https://github.com/ant-design/ant-design/pull/29267)
- π Drawer support `contentWrapperStyle`. [#29219](https://github.com/ant-design/ant-design/pull/29219) [@kerm1it](https://github.com/kerm1it)
- π Layout.Sider added ref support. [#29169](https://github.com/ant-design/ant-design/pull/29169) [@qramilq](https://github.com/qramilq)
- π Fix Table `pagination.current` display error when result of filter is empty. [#29386](https://github.com/ant-design/ant-design/pull/29386) [@jinchaofs](https://github.com/jinchaofs)
- π Fix Anchor throws error when `target` don't return a html element. [#29523](https://github.com/ant-design/ant-design/pull/29523) [@bcd337](https://github.com/bcd337)
- π Fix Steps with small size that icon shift up `1px`. [#29484](https://github.com/ant-design/ant-design/pull/29484)
- Select
  - π Fix Select `mode="tags"` large size (41px => 40px). [#29437](https://github.com/ant-design/ant-design/pull/29437)
  - π Update Select debounce demo to create DebounceSelect component for easy usage. [#29414](https://github.com/ant-design/ant-design/pull/29414)
- Dropdown
  - π Fix Dropdown menu item lost disable style with icon. [#29433](https://github.com/ant-design/ant-design/pull/29433)
  - π Fix Dropdown menu not support `expandIcon`. [#29338](https://github.com/ant-design/ant-design/pull/29338)
- π Fix tree-shaking warning on development builds. [#29378](https://github.com/ant-design/ant-design/pull/29378)
- π°π· Fix TimePicker Korean locale. [#29540](https://github.com/ant-design/ant-design/pull/29540)
- TypeScript
  - π€ Fix Form.Item generic definition issue. [#29397](https://github.com/ant-design/ant-design/pull/29397) [@mumiao](https://github.com/mumiao)
  - π€ Optimize Table `filter` definition. [#29385](https://github.com/ant-design/ant-design/pull/29385) [@mumiao](https://github.com/mumiao)

## 4.12.3

`2021-02-10`

- π  Refactor Drawer with React hooks. [#29229](https://github.com/ant-design/ant-design/pull/29229)
- π Fix Table pagination not disappear when `pagination.position` is `['none', 'none']`. [#29256](https://github.com/ant-design/ant-design/pull/29256) [@mumiao](https://github.com/mumiao)
- π Fix TextArea `showCount` should not be interactive. [#29245](https://github.com/ant-design/ant-design/pull/29245)
- π Fix abnormal background color for `multiple` and `disabled` Select in dark. [#29242](https://github.com/ant-design/ant-design/pull/29242)
- β‘οΈ Optimize Slider align performance of tooltip. [#29308](https://github.com/ant-design/ant-design/pull/29308) [@kerm1it](https://github.com/kerm1it)
- β‘οΈ Upgrade `@ant-design/colors` to 6.x to reduce gzipped bundle size `1KB`. [#29307](https://github.com/ant-design/ant-design/pull/29307) [@07akioni](https://github.com/07akioni)
- π·πΊ Add `ru_RU` locale text for Image. [#29271](https://github.com/ant-design/ant-design/pull/29271) [@mumiao](https://github.com/mumiao)
- π?π· Add `fa_IR` locale text for DatePicker, Form, Table, TimePicker and Transfer. [#29232](https://github.com/ant-design/ant-design/pull/29232) [@amiralitaheri](https://github.com/amiralitaheri)
- TypeScript
  - π€ Fix type definition for Table FilterDropdownProps `confirm` parameter. [#29241](https://github.com/ant-design/ant-design/pull/29241) [@mumiao](https://github.com/mumiao)

## 4.12.2

`2021-02-04`

- π Make Table expand icon and checkbox same size and aligned. [#29214](https://github.com/ant-design/ant-design/pull/29214)
- π Fix List with `gutter` makes column break line. [#29211](https://github.com/ant-design/ant-design/pull/29211)

## 4.12.1

`2021-02-03`

- π Fix antd crash when load before page ready. [#29202](https://github.com/ant-design/ant-design/pull/29202)
- π Fix Table pagination `current` change logic when `pageSize` changes. [#29184](https://github.com/ant-design/ant-design/pull/29184)

## 4.12.0

`2021-02-03`

- π Image.PreviewGroup add `current` prop. [#29153](https://github.com/ant-design/ant-design/pull/29153)
- InputNumber
  - π InputNumber support `bordered` prop. [#29105](https://github.com/ant-design/ant-design/pull/29105)
  - π InputNumber add `keyboard` prop which could disable keyboard behavior. [#29110](https://github.com/ant-design/ant-design/pull/29110) [@kerm1it](https://github.com/kerm1it)
- π Darken Tag text color to enhance readability. [#29144](https://github.com/ant-design/ant-design/pull/29144)
- π Fix Row with vertical `gutter` provides additional `margin-bottom` style. [#29059](https://github.com/ant-design/ant-design/pull/29059)
- π Fix Collapse header disappers with delay. [#29158](https://github.com/ant-design/ant-design/pull/29158)
- π Fix the problem that `showCount` display data is incorrect when TextArea input emoji. [#29057](https://github.com/ant-design/ant-design/pull/29057) [@HomyeeKing](https://github.com/HomyeeKing)
- π¦ Optimize ConfigProvider to avoid import all icons when tree shaking is not enabled. [#29045](https://github.com/ant-design/ant-design/pull/29045)
- π Add en-GB missing translations for table. [#29131](https://github.com/ant-design/ant-design/pull/29131) [@eberjoe](https://github.com/eberjoe)
- Table
  - π Table `showSorterTooltip` now could be a object for more configuration. [#29002](https://github.com/ant-design/ant-design/pull/29002) [@harrisoff](https://github.com/harrisoff)
  - β‘οΈ Optimize calling sequence of `onChange` and `onSelectAll` in `rowSelection` of Table. [#29079](https://github.com/ant-design/ant-design/pull/29079) [@kerm1it](https://github.com/kerm1it)
- Badge
  - π Fix Badge change `count` content to hide miss style. [#29089](https://github.com/ant-design/ant-design/pull/29089)
  - π Fix Badge digital animation problem. [#29100](https://github.com/ant-design/ant-design/pull/29100)
- TypeScript
  - π€ Table TS definition update `dataSource` to `readonly`. [#29084](https://github.com/ant-design/ant-design/pull/29084)
- Less
  - π Add less variable `@progress-info-text-color`. [#28981](https://github.com/ant-design/ant-design/pull/28981) [@yuxuan](https://github.com/yuxuan)

## 4.11.3

`2021-02-03`

Wrong release is the same as `4.12.0`, if you need to lock the version, you need to lock it to `4.11.2`.

## 4.11.2

`2021-01-26`

- π Fix rc-trigger BuildInPlacements TypeScript compile error. [#29029](https://github.com/ant-design/ant-design/pull/29029) [@waiwaiku](https://github.com/waiwaiku)

## 4.11.1

`2021-01-24`

- π Layout inline sub menu now has grey background. [#28842](https://github.com/ant-design/ant-design/pull/28842)
- π PageHeader supports `breadcrumbRender`. [#28999](https://github.com/ant-design/ant-design/pull/28999)
- π Typography `ellipsis` support `tooltip` to customize tooltip when ellipsis. [#28821](https://github.com/ant-design/ant-design/pull/28821)
- Image
  - π Image supports `preview.maskClassName`. [#28681](https://github.com/ant-design/ant-design/pull/28681)
  - π Fix preview image will move after click it. [react-component/image#61](https://github.com/react-component/image/pull/61) [@simonwong](https://github.com/simonwong)
  - π Fix Image `placeholder` disappear issue. [#28953](https://github.com/ant-design/ant-design/issues/28953)
  - π Fix multiple Image.PreviewGroup contain same image. [#28881](https://github.com/ant-design/ant-design/issues/28881)
- ConfigProvider
  - π ConfigProvider supports `iconPrefixCls`. [#28924](https://github.com/ant-design/ant-design/pull/28924)
  - β‘οΈ Optimize ConfigProvider props updating performance. [#28792](https://github.com/ant-design/ant-design/pull/28792) [@zxc0328](https://github.com/zxc0328)
- π Tweak TreeSelect filter highlight color. [#28984](https://github.com/ant-design/ant-design/pull/28984)
- π Fix Select item align style with custom `tagRender`. [#28962](https://github.com/ant-design/ant-design/pull/28962)
- Form
  - π Fix Form.Item can not clear nested `noStyle` error message. [#28918](https://github.com/ant-design/ant-design/pull/28918)
  - π Form.Item with `preserve=false` will reset value to `initialValues` when removed. [#28908](https://github.com/ant-design/ant-design/pull/28908)
- π Fix Button click effect style not working in shadow root. [#28995](https://github.com/ant-design/ant-design/pull/28995) [@rinick](https://github.com/rinick)
- π Fix Table custom filter menu cannot close bug. [#28688](https://github.com/ant-design/ant-design/pull/28688) [@alekye](https://github.com/alekye)
- Less
  - π Add `@menu-inline-submenu-bg` less variable and rename `@menu-dark-submenu-bg` to `@menu-dark-inline-submenu-bg`. [#28842](https://github.com/ant-design/ant-design/pull/28842)
  - π Add less variable `@drawer-footer-padding-horizontal`. [#28975](https://github.com/ant-design/ant-design/pull/28975) [@yuxuan](https://github.com/yuxuan)
- RTL
  - π Fix Card actions divider style in RTL. [#28915](https://github.com/ant-design/ant-design/pull/28915) [@Aghosey](https://github.com/Aghosey)
- TypeScript
  - π€ Expose interfaces and types from default entry of antd. [#28963](https://github.com/ant-design/ant-design/pull/28963)
  - π€ Improve Input/Skeleton `style` definition. [#28966](https://github.com/ant-design/ant-design/pull/28966) [@yingpengsha](https://github.com/yingpengsha)

## 4.11.0

`2021-01-24`

It is a wrong release which same as `4.10.3`, don't use it.

## 4.10.3

`2021-01-18`

- π Fix Button not adapting to the `@btn-border-width` when loading. [#28886](https://github.com/ant-design/ant-design/pull/28886) [@jjanssen](https://github.com/jjanssen)
- Table
  - π Add `@table-border-color` less variable. [#28903](https://github.com/ant-design/ant-design/pull/28903)
  - π Fix that invalid params passed to `onChange` event if define custom filterDropdown and nested filters. [#28850](https://github.com/ant-design/ant-design/pull/28850) [@Meowu](https://github.com/Meowu)
  - π Tweak Table selection column width to `32px`. [#28073](https://github.com/ant-design/ant-design/pull/28073)
- Transfer
  - π  Refactor Transfer Search with React hooks. [#28895](https://github.com/ant-design/ant-design/pull/28895) [@susiwen8](https://github.com/susiwen8)
  - π Added German translations for the Transfer component. [#28826](https://github.com/ant-design/ant-design/pull/28826) [@aequi42](https://github.com/aequi42)
- Upload
  - π Support for capturing Error message for the Upload error tooltip. [#28716](https://github.com/ant-design/ant-design/pull/28716) [@wangcch](https://github.com/wangcch)
  - π Upload auto fills `uid` of `fileList` when not provided. [#28832](https://github.com/ant-design/ant-design/pull/28832)
- π Fix Slider `getPopupContainer` prop has no default value `document.body`. [#28865](https://github.com/ant-design/ant-design/pull/28865) [@rinick](https://github.com/rinick)
- π Fix Empty description validateDOMNesting warning. [#28862](https://github.com/ant-design/ant-design/pull/28862)
- π Fix Tree `filterTreeNode` missing style. [#28866](https://github.com/ant-design/ant-design/pull/28866)
- π fix Badge `dot` width issue when `size="small"`. [#28854](https://github.com/ant-design/ant-design/pull/28854)

## 4.10.2

`2021-01-11`

- π Fix import error when use antd in commonjs. [#28715](https://github.com/ant-design/ant-design/issues/28804)

## 4.10.1

`2021-01-10`

- π  Optimize Select search performance. [#28715](https://github.com/ant-design/ant-design/pull/28715) [@kerm1it](https://github.com/kerm1it)
- π Fix Slider throw `forcePopupAlign` error when unmounted. [#28699](https://github.com/ant-design/ant-design/pull/28699) [@Kerumen](https://github.com/Kerumen)
- π Fix Transfer throws `Cannot add property key, object is not extensible` when `dataSource` is immutable. [#28675](https://github.com/ant-design/ant-design/pull/28675)
- π Fix Notification box closing height issue generated by `useNotification`. [#28660](https://github.com/ant-design/ant-design/pull/28660)
- π Fix Drawer and Modal disabled scrollbar after closing. [#28749](https://github.com/ant-design/ant-design/pull/28749)
- π  Reduce gzipped bundle size `2kB`. [#28678](https://github.com/ant-design/ant-design/pull/28678)
- TypeScript
  - π€ InputNumber `onChange` support `null` as `value`. [#28769](https://github.com/ant-design/ant-design/pull/28769) [@lengfangbing](https://github.com/lengfangbing)

## 4.10.0

`2021-01-04`

π Happy New Year!

- π Fix the compatibility issue of less 4.0.0.
- π Fix the problem of cursor jumping when Typography is editable. [#28545](https://github.com/ant-design/ant-design/pull/28545)
- π Fix the problem that repeatedly clicking on expanded nodes when Tree dynamically loads data will lead to wrong status.[#28349](https://github.com/ant-design/ant-design/issues/28349) [@liuchao233](https://github.com/react-component/tree/pull/401)
- π Fix TreeSelect and Select cannot open the dropdown menu when it's `searchValue` has value. [#28574](https://github.com/ant-design/ant-design/pull/28574)
- π Fix Dropdown disabled menu item link style. [#28578](https://github.com/ant-design/ant-design/pull/28578)
- π Fix Progress `steps` display accuracy issue. [#28530](https://github.com/ant-design/ant-design/pull/28530) [@gaoryrt](https://github.com/gaoryrt)
- π Fix Radio align issue in Chrome. [#28616](https://github.com/ant-design/ant-design/pull/28616)
- π Fix Collapse arrow position not aligned when change @collapse-header-padding variable. [#28507](https://github.com/ant-design/ant-design/pull/28507)
- π Optimize the white border style of Card images. [#28624](https://github.com/ant-design/ant-design/pull/28624)
- Input
  - π Fix TextArea value get cut when input chinese words. [#28456](https://github.com/ant-design/ant-design/pull/28456)
  - π The `showCount` property of Input.TextArea now supports passing in a method to customize the display format of the number. [#28145](https://github.com/ant-design/ant-design/pull/28145) [@MrHeer](https://github.com/MrHeer)
  - π Input `focus` supports configuring the cursor position when getting focus. [#28602](https://github.com/ant-design/ant-design/pull/28602)
- Modal
  - π Modal.method adds an `afterClose` callback that will be triggered after the Modal is completely closed. [#28053](https://github.com/ant-design/ant-design/pull/28053) [@liuchao233](https://github.com/liuchao233)
  - π Fix the problem that Modal can be dragged outside the viewport. [#28438](https://github.com/ant-design/ant-design/pull/28527) [@mumiao](https://github.com/mumiao)
- Table
  - π Fix the problem that Table childrenColumnName and checkStrictly={false} cannot be used together. [#28568](https://github.com/ant-design/ant-design/pull/28568)
  - π Fix Table selection abnormal behavior when inside Checkbox.Group. [#28576](https://github.com/ant-design/ant-design/pull/28576)
  - π Fix the problem that the sticky header style is messy when there is no data. [#28323](https://github.com/ant-design/ant-design/issues/28323)
  - π Fix the problem that `onChange` listener always receives empty list as `filters` parameter if use a custom `filterDropdown`. [#28627](https://github.com/ant-design/ant-design/pull/28627) [@Meowu](https://github.com/Meowu)
  - π Adds `expandable.columnWidth` to customize the width of the expanded column. [#28249](https://github.com/ant-design/ant-design/pull/28249)
  - π Adds clear all option from selection. [#28580](https://github.com/ant-design/ant-design/pull/28580) [@n0ruSh](https://github.com/ant-design/ant-design/pull/285)
- Image
  - π Fix the misalignment issue of Image component.[#28439](https://github.com/ant-design/ant-design/pull/28439) [@MoeCasts](https://github.com/MoeCasts)
  - π Adds preview style. [#28235](https://github.com/ant-design/ant-design/pull/28235)
  - π Adds functionality for zoom in\out by sliding the wheel. [#react-component/image/52](https://github.com/react-component/image/pull/52) [@OmriGM](https://github.com/OmriGM)
  - π Support separate settings url for preview images. [#react-component/image/56](https://github.com/react-component/image/pull/56) [@wangcch](https://github.com/wangcch)
- Upload
  - π Fix a warning even when not using `transformFile`. [#28455](https://github.com/ant-design/ant-design/pull/28455) [@YanYuanFE](https://github.com/YanYuanFE)
  - π Fix Upload `fileList` cannot work with data that is produced by immer. [#28636](https://github.com/ant-design/ant-design/pull/28636) [@mumiao](https://github.com/mumiao)
  - π Upload adds a new `maxCount` property to limit the number of files. [#28367](https://github.com/ant-design/ant-design/pull/28367)
- DatePicker
  - π Optimize the logic of `disabledDate`. [#react-component/picker/191](https://github.com/react-component/picker/pull/191)
  - π Adds `onKeyDown` callback. [#react-component/picker/138](https://github.com/react-component/picker/pull/138) [@conquera99](https://github.com/react-component/picker/pull/138)
- Select
  - π Fix issue where `options` update does not trigger the selection box content update. [#react-component/select/580](https://github.com/react-component/select/pull/580) [@jameslahm](https://github.com/jameslahm)
  - π Fix the problem that the dropdown box cannot be opened after clicking the option with `tagRender`. [react-component/select/582](https://github.com/react-component/select/pull/582) [@mumiao](https://github.com/mumiao)
  - π Fix the problem that `tokenSeparators` can not recognize the separator correctly under Chinese input method. [#28564](https://github.com/ant-design/ant-design/issues/28564)
  - π Adds `scrollTo` to the `ref`. [#react-component/select/565](https://github.com/react-component/select/pull/565)
  - π `maxTagCount` supports `responsive` in `multiple` mode. [#28520](https://github.com/ant-design/ant-design/pull/28520)
- π Slider add a new `range.draggableTrack` prop. [#28592](https://github.com/ant-design/ant-design/pull/28592)
- π Descriptions support setting `labelStyle` & `contentStyle` directly. [#28613](https://github.com/ant-design/ant-design/pull/28613)
- π message added a new `onClick` callback that will be triggered when the message is clicked. [#28148](https://github.com/ant-design/ant-design/pull/28148) [@ZeroTo0ne](https://github.com/ant-design/ant-design/pull/28148)
- π The `scrollToFirstError` property of the Form adds support for setting the position for scrolling. [#28272](https://github.com/ant-design/ant-design/pull/28272) [@vouis](https://github.com/vouis)
- π Steps support reponsive which allows to turn off reponsive change. [#28459](https://github.com/ant-design/ant-design/pull/28459)
- π Localization
  - π­π· Improved Croatian language support. [#28458](https://github.com/ant-design/ant-design/pull/28458)
- TypeScript
  - βοΈ Fix `title` type of PageHeader. [#28374](https://github.com/ant-design/ant-design/pull/28374) [@zhukovvandrei](https://github.com/zhukovvandrei)

## 4.9.4

`2020-12-16`

- π Fix Menu delayed hover color transition in Chrome. [#28372](https://github.com/ant-design/ant-design/pull/28372)
- π Fix Tree node connection line position problem. [#28354](https://github.com/ant-design/ant-design/pull/28354) [@maksnester](https://github.com/maksnester)
- π Fix Table fixed column `z-index` which makes Dropdown not showing on top. [#28346](https://github.com/ant-design/ant-design/pull/28346)
- TypeScript
  - π€ Fix `message.loading()` return type. [#28362](https://github.com/ant-design/ant-design/pull/28362)

## 4.9.3

`2020-12-14`

- π Fix Badge standalone motion blink when show/hide. [#28240](https://github.com/ant-design/ant-design/pull/28240)
- π Fix Table `filters` not support number and boolean type. [#28220](https://github.com/ant-design/ant-design/pull/28220) [@Meowu](https://github.com/Meowu)
- π Remove Tree hover background color when `selectable={false}`. [#28269](https://github.com/ant-design/ant-design/pull/28269)
- π Fix Statistics decimal font size. [#28223](https://github.com/ant-design/ant-design/pull/28223)
- TypeScript
  - π€ Fix Tree `draggable` TS definition. [#28262](https://github.com/ant-design/ant-design/pull/28262) [@DavidSichau](https://github.com/DavidSichau)
  - π€ Fix Image.PreviewGroup TS definition. [#28263](https://github.com/ant-design/ant-design/pull/28263) [@liuchao233](https://github.com/liuchao233)
  - π€ Improve `message().then` TS definition. [#28304](https://github.com/ant-design/ant-design/pull/28304)
  - π€ Fix TransferProps `titles` to ReactNode. [#28326](https://github.com/ant-design/ant-design/pull/28326) [@jacklee814](https://github.com/jacklee814)

## 4.9.2

`2020-12-06`

- Table
  - π Fix Table selecting crash sometimes. [#28193](https://github.com/ant-design/ant-design/pull/28193) [@yanguoyu](https://github.com/yanguoyu)
  - π Fix Table selection column header align issue. [#28173](https://github.com/ant-design/ant-design/pull/28173)
- Dropdown
  - π Fix Dropdown subMenu arrow style. [#28181](https://github.com/ant-design/ant-design/pull/28181)
  - π Fix Dropdown click area not matched. [#28180](https://github.com/ant-design/ant-design/pull/28180)
- π Fix `overlayInnerStyle` not work in Tooltip. [#27682](https://github.com/ant-design/ant-design/pull/27682) [@jasepellerin](https://github.com/jasepellerin)
- π Fix Layout overflow style for Table `sticky`. [#28176](https://github.com/ant-design/ant-design/pull/28176)
- π Fix Steps `progressDot` broken style of first step. [#28126](https://github.com/ant-design/ant-design/pull/28126) [@ZeroTo0ne](https://github.com/ZeroTo0ne)
- π Optimize Modal `useModal` performance by isolating elements render to avoid the component to rerender. [#28122](https://github.com/ant-design/ant-design/pull/28122) [@TotooriaHyperion](https://github.com/TotooriaHyperion)
- π Fix TextArea showCount style while using with Form. [#28130](https://github.com/ant-design/ant-design/pull/28130) [@AlanCutFlim](https://github.com/AlanCutFlim)
- π Fix Tag cursor style in Tree node. [#28219](https://github.com/ant-design/ant-design/pull/28219)
- π  Remove `@ant-design/css-animation` for better bundle size. [#28201](https://github.com/ant-design/ant-design/pull/28201)
- RTL
  - π Fix the style of Alert. [#28108](https://github.com/ant-design/ant-design/pull/28108) [@jesse3mh9a](https://github.com/jesse3mh9a)
  - π Fix Tree `dropIndicator` style of default `ltr` direction. [#28150](https://github.com/ant-design/ant-design/pull/28150) [@kagawagao](https://github.com/kagawagao)
- TypeScript
  - π€ Fix Table `selectedRows` in `SelectionSelectFn` return generic type. [#28206](https://github.com/ant-design/ant-design/pull/28206) [@weiyuc](https://github.com/weiyuc)
  - π€ Add `className` in `BreadcrumbItemProps`. [#28182](https://github.com/ant-design/ant-design/pull/28182) [@ccloveak](https://github.com/ccloveak)
  - π€ Form.List `initialValue` types are supported. [#28153](https://github.com/ant-design/ant-design/pull/28153) [@Debiancc](https://github.com/Debiancc)
  - π€ Fix `dontAnimate` optional in Carousel. [#28090](https://github.com/ant-design/ant-design/pull/28090) [@jarretmoses](https://github.com/jarretmoses)

## 4.9.1

`2020-12-01`

- TypeScript
  - π€ Fix Collapse.Panel `collapsible` property to optional. [#28092](https://github.com/ant-design/ant-design/pull/28092) [@sammarks](https://github.com/sammarks)

## 4.9.0

`2020-11-30`

- Modal
  - π Modal support `focusTriggerAfterClose` to disable auto focus back. [#27985](https://github.com/ant-design/ant-design/pull/27985) [@molokovev](https://github.com/molokovev)
  - π Fix Modal hooks not trigger `onCancel`. [#28063](https://github.com/ant-design/ant-design/pull/28063) [@JuniorTour](https://github.com/JuniorTour)
  - π Fix Modal sometime not popup from the click position. [#28037](https://github.com/ant-design/ant-design/pull/28037)
  - π Support `closable` and `closeIcon` api for Modal.method. [#27909](https://github.com/ant-design/ant-design/pull/27909) [@MrHeer](https://github.com/MrHeer)
- π Reduce Table selection column width to `32px`. [#28073](https://github.com/ant-design/ant-design/pull/28073)
- Image
  - π₯ Image add PreviewGroup component to support multiple images preview. [#28069](https://github.com/ant-design/ant-design/pull/28069)
  - π Fix Image style prop not acting on img element. [#27446](https://github.com/ant-design/ant-design/pull/27446)
- Collapse
  - π₯ Collapse support `collapsible` to customize trigger region and deprecated Panel `disabled` prop. [#27790](https://github.com/ant-design/ant-design/pull/27790)
  - π Fix Collapse cannot contains `<Table sticky />`. [#28039](https://github.com/ant-design/ant-design/pull/28039)
- π Fix Cascader bug that empty data can be selected. [#28062](https://github.com/ant-design/ant-design/pull/28062) [@n0ruSh](https://github.com/n0ruSh)
- π Alert support `action` prop. [#25892](https://github.com/ant-design/ant-design/pull/25892) [@jesse3mh9a](https://github.com/jesse3mh9a)
- π₯ Tree refactor drag behavior. Add `dropIndicatorRender` and `allowDrop` prop. [#26462](https://github.com/ant-design/ant-design/pull/26462) [@07akioni](https://github.com/07akioni)
- π Space support `wrap` for auto break line. [#27910](https://github.com/ant-design/ant-design/pull/27910)
- π Descriptions.Item support `labelStyle` & `contentStyle` props. [#27897](https://github.com/ant-design/ant-design/pull/27897)
- π Form.List support `initialValue`. [#27872](https://github.com/ant-design/ant-design/pull/27872)
- π Menu supports `expandIcon`, and optimize default expand icon style. [#27565](https://github.com/ant-design/ant-design/pull/27565)
- π Input and TextArea add `setSelectionRange` of `ref`. [#27584](https://github.com/ant-design/ant-design/pull/27584) [@appleshell](https://github.com/appleshell)
- π Select support `filterSort` to order the filtered options. [#27523](https://github.com/ant-design/ant-design/pull/27523) [@n0ruSh](https://github.com/n0ruSh)
- π°πΏ Add Kazakh locale. [#27589](https://github.com/ant-design/ant-design/pull/27589) [@nodkz](https://github.com/nodkz)

## 4.8.6

`2020-11-27`

- π Fix Badge style blink when mounted. [#28003](https://github.com/ant-design/ant-design/pull/28003)
- π Reduce Modal style size. [#27998](https://github.com/ant-design/ant-design/pull/27998)
- π Fix Layout.Sider can not collapse when `width='0'`. [#28000](https://github.com/ant-design/ant-design/pull/28000)
- π Fix Menu style when using none Ant Design icons. [#27983](https://github.com/ant-design/ant-design/pull/27983)
- Input
  - π Fix Input.Search button height when customize less variables. [#27986](https://github.com/ant-design/ant-design/pull/27986)
  - π Fix Input.Search `addonBefore` abnormal style. [#27960](https://github.com/ant-design/ant-design/pull/27960)
- π Fix Typography.Link clicking copy button will redirect. [#27982](https://github.com/ant-design/ant-design/pull/27982)
- π Fix Carousel throws error `Unable to preventDefault inside passive event listener`. [#27957](https://github.com/ant-design/ant-design/pull/27957)
- π Improve data picker locale for `en_GB` and `zh_TW`. [#28016](https://github.com/ant-design/ant-design/pull/28016) [@abz53378](https://github.com/abz53378)
- RTL
  - π Optimize the border style of Descriptions in RTL model. [#28010](https://github.com/ant-design/ant-design/pull/28010)
  - π Fix the vertical style of Steps in RTL mode. [#27996](https://github.com/ant-design/ant-design/pull/27996)
- TypeScript
  - π€ Fix Upload `beforeUpload` definition. [#27946](https://github.com/ant-design/ant-design/pull/27946) [@bingling0084](https://github.com/bingling0084)
  - π€ Provided a separate type definition for Carousel reference. [#27935](https://github.com/ant-design/ant-design/pull/27935) [@ocassio](https://github.com/ocassio)

## 4.8.5

`2020-11-22`

- π Fix that Spin can't render children `0`. [#27839](https://github.com/ant-design/ant-design/pull/27839) [@liuchao233](https://github.com/liuchao233)
- π Fix the RangePicker panel interaction style. [#27894](https://github.com/ant-design/ant-design/pull/27894)
- π Fix Switch `loading` style. [#27860](https://github.com/ant-design/ant-design/pull/27860)
- π Optimize Skeleton color to fit dark background. [#27836](https://github.com/ant-design/ant-design/pull/27836)
- π Adjust Statistic `deciaml` font size. [#27884](https://github.com/ant-design/ant-design/pull/27884)
- π  Refactor CheckboxγLayout.Sider and TextArea with React hooks. [#27739](https://github.com/ant-design/ant-design/pull/27739) [#27719](https://github.com/ant-design/ant-design/pull/27719) [#27693](https://github.com/ant-design/ant-design/pull/27693)
- π  Refactor BackTopγBadgeγUploadList with `rc-motion` instead of `rc-animate`. [#27840](https://github.com/ant-design/ant-design/pull/27840) [#27848](https://github.com/ant-design/ant-design/pull/27848) [#27923](https://github.com/ant-design/ant-design/pull/27923)
- RTL
  - π Fix the style of the Tree switch icon in RTL mode. [#27876](https://github.com/ant-design/ant-design/pull/27876)
- TypeScript
  - π€ Fix AutoComplete `DataSourceItemType` type definition. [#27892](https://github.com/ant-design/ant-design/pull/27892)
  - π€ Export Image `ImageProps` interface. [#27846](https://github.com/ant-design/ant-design/pull/27846) [@wangcch](https://github.com/wangcch)

## 4.8.4

`2020-11-16`

- π Fix Button and Form loading style. [#27794](https://github.com/ant-design/ant-design/pull/27794)
- π Fix Modal.confirm locale missing after close it. [#27797](https://github.com/ant-design/ant-design/pull/27797)
- π Fix Button/Anchor throws `findDOMNode is deprecated` in React 17. [#27755](https://github.com/ant-design/ant-design/pull/27755) [@hosseinmd](https://github.com/hosseinmd)

## 4.8.3

`2020-11-14`

- π  Refactor Carousel with React hooks. [#27694](https://github.com/ant-design/ant-design/pull/27694)
- π  Refactor `<Typography editable />` with React hooks. [#27655](https://github.com/ant-design/ant-design/pull/27655)
- π Fixed the problem that form behaves abnormally when namepath is an array. [#27664](https://github.com/ant-design/ant-design/pull/27664)
- π Fix RangePicker hover effect position when hover over start or end cell of in range row. [#27731](https://github.com/ant-design/ant-design/pull/27731) [@AlanCutFlim](https://github.com/AlanCutFlim)
- π Fix Select `mode=tags` cannot input whitespace normally. [#27726](https://github.com/ant-design/ant-design/pull/27726) [@baxtergu](https://github.com/baxtergu)
- π Fix the mouse style when Typography.Link is `disabled`. [#27734](https://github.com/ant-design/ant-design/pull/27734)
- π Fix Menu dropdown animation start twice when appear. [#27663](https://github.com/ant-design/ant-design/pull/27663)
- π Fix Avatar style when `src` is Image component. [#27691](https://github.com/ant-design/ant-design/pull/27691)
- π Fix Select multiple cursor position. [#27689](https://github.com/ant-design/ant-design/pull/27689)
- π Fix TextArea emoji been cut when enable `maxLength`. [#27679](https://github.com/ant-design/ant-design/pull/27679) [@372623460jh](https://github.com/372623460jh)
- π Fix small size RangePicker active bar align issue. [#27673](https://github.com/ant-design/ant-design/pull/27673) [@Ifeinstein](https://github.com/Ifeinstein)
- π Add `@radio-border-width`. [#27703](https://github.com/ant-design/ant-design/pull/27703)

## 4.8.2

`2020-11-09`

- π Fix Pagination lost jumper margin style. [#27650](https://github.com/ant-design/ant-design/pull/27650)
- π Fix Steps `type="navigation"` last item broken style. [#27654](https://github.com/ant-design/ant-design/pull/27654)

## 4.8.1

`2020-11-08`

- π  Refactor TreeSelect with React hooks. [#27593](https://github.com/ant-design/ant-design/pull/27593)
- π  Refactor Layout with React hooks. [#27595](https://github.com/ant-design/ant-design/pull/27595)
- π Fix Select abnormal outline style in Form validation. [#27607](https://github.com/ant-design/ant-design/pull/27607)
- π Fix Pagination extra `margin-right` when enable size changer. [#27610](https://github.com/ant-design/ant-design/pull/27610)
- π Fix Input.Search `enterButton={null}` throw error. [#27591](https://github.com/ant-design/ant-design/pull/27591) [@davidebianchi](https://github.com/davidebianchi)
- π fix Avatar.Group `size` not working. [#27531](https://github.com/ant-design/ant-design/pull/27531)
- π Fix vertical Tabs long title cause tab width changes. [#27569](https://github.com/ant-design/ant-design/pull/27569)
- π Fix Table filters didn't display in `column.children`. [#27435](https://github.com/ant-design/ant-design/pull/27435) [@JhonXY](https://github.com/JhonXY)
- π Fix Steps style that inside another Steps. [#27514](https://github.com/ant-design/ant-design/pull/27514)
- TypeScript
  - π€ Fix Select `ref` TS error. [#27482](https://github.com/ant-design/ant-design/pull/27482)
  - π€ Fix Avatar `src` type. [#27524](https://github.com/ant-design/ant-design/pull/27524) [@n0ruSh](https://github.com/n0ruSh)
- RTL
  - π Fix Progress.Line `strokeColor` direction error in RTL mode. [#27515](https://github.com/ant-design/ant-design/pull/27515)

## 4.8.0

`2020-11-02`

- Image
  - π₯ Image support `preview.getContainer` property. [#26713](https://github.com/ant-design/ant-design/pull/26713) [@rfreling](https://github.com/rfreling)
  - π Fix Image `style` prop not acting on img element. [#27446](https://github.com/ant-design/ant-design/pull/27446)
- π ConfigProvider support `form.requiredMark`. [#27322](https://github.com/ant-design/ant-design/pull/27322)
- π Statistic support `loading` prop. [#26811](https://github.com/ant-design/ant-design/pull/26811) [@appleshell](https://github.com/appleshell)
- Avatar
  - π₯ Support Image element as prop for Avatar component. [#27448](https://github.com/ant-design/ant-design/pull/27448) [@n0ruSh](https://github.com/n0ruSh)
  - π Avatar.Group support `size` props. [#27348](https://github.com/ant-design/ant-design/pull/27348)
- π Row support `noWrap` to make Col in line. [#27469](https://github.com/ant-design/ant-design/pull/27469)
- Tree
  - π Fix Tree text selecting when double click switcher icon. [#27476](https://github.com/ant-design/ant-design/pull/27476)
  - π Fix Tree with `showLine` not connect line when `title` break line. [#27386](https://github.com/ant-design/ant-design/pull/27386)
- Modal
  - π `modal.update()` supports functional updating. [#27163](https://github.com/ant-design/ant-design/pull/27163) [@Mongkii](https://github.com/Mongkii)
  - π Modal method support `bodyStyle` props. [#27292](https://github.com/ant-design/ant-design/pull/27292)
  - π Fix Modal missing `modalRender` prop. [#27272](https://github.com/ant-design/ant-design/pull/27272) [@jieny](https://github.com/jieny)
  - π `rootPrefixCls` set in `Modal.config` can be effective for the antd components used in `title` and `content`. [#27376](https://github.com/ant-design/ant-design/pull/27376) [@Chersquwn](https://github.com/Chersquwn)
- Input
  - π Input.Textarea support `size` props. [#27110](https://github.com/ant-design/ant-design/pull/27110)
  - π Fix Input missing `className` when `allowClear` is true. [#27462](https://github.com/ant-design/ant-design/pull/27462)
- Table
  - π Table.Summary.Cell support `align` prop. [#27365](https://github.com/ant-design/ant-design/pull/27365)
  - π Fix Table `onShowSizeChange` trigger twice. [#27417](https://github.com/ant-design/ant-design/pull/27417)
  - π Fix Table `pagination` cache previous config issue. [#27412](https://github.com/ant-design/ant-design/pull/27412)
- Typography
  - π Fix Typography Invalid regular expression issue with particular content. [#27383](https://github.com/ant-design/ant-design/pull/27383) [@ttys026](https://github.com/ttys026)
  - π Fix disabled Typography.Link hover or active color. [@27487](https://github.com/ant-design/ant-design/pull/27487) [@Liu-Ya](https://github.com/Liu-Ya)
- Steps
  - π Fix title is not centered when enabling `progressDot`. [#27406](https://github.com/ant-design/ant-design/pull/27406)
  - π Fix style in small screen. [#27499](https://github.com/ant-design/ant-design/pull/27499)
- π Fix PageHeader that empty dom will be displayed when `title` is empty. [#27485](https://github.com/ant-design/ant-design/pull/27485)
- π Fix Slider keep tooltip align with handle when dragging. [#27489](https://github.com/ant-design/ant-design/pull/27489)
- π Fix RangePicker selected range border style. [#27438](https://github.com/ant-design/ant-design/pull/27438)
- π Adjust Collapse arrow position align with first line. [#27363](https://github.com/ant-design/ant-design/pull/27363)
- π Fix Descriptions style when `label` use block element. [#27375](https://github.com/ant-design/ant-design/pull/27375)
- π Fix Select abnormal border style in Form validation. [#27378](https://github.com/ant-design/ant-design/pull/27378)

## 4.7.3

`2020-10-24`

- Form
  - π Fix Form warning for non-boolean attribute `virtual` when use ConfigProvider. [#27343](https://github.com/ant-design/ant-design/pull/27343)
  - π  Adjust Form.Item `initialValue` sync status align with Form level `initialValues`. [#27319](https://github.com/ant-design/ant-design/pull/27319)
- Typography
  - π  Improve Typography `ellipsis` title display. [#27328](https://github.com/ant-design/ant-design/pull/27328)
  - π Fix Editable Typography in Card title style problems. [#27221](https://github.com/ant-design/ant-design/pull/27221)
- Input
  - π Fix Input.Search duplicated `className` when `allowClear` is `true`. [#27261](https://github.com/ant-design/ant-design/pull/27261)
  - π Fix Input.Search border style when enable `allowClear`. [#27261](https://github.com/ant-design/ant-design/pull/27325)
- π Fix Upload.List preview image fit size issue. [#27312](https://github.com/ant-design/ant-design/pull/27312) [@JuniorTour](https://github.com/JuniorTour)
- π Fix Notification no wrap with long text. [#27285](https://github.com/ant-design/ant-design/pull/27285) [@littleee](https://github.com/littleee)
- π Fix Menu inside flexable container will not shrink properly. [#27253](https://github.com/ant-design/ant-design/pull/27253)
- π Fix en_US, en_GB and ga_IE gramma. [#27259](https://github.com/ant-design/ant-design/pull/27259) [@yasikovsky](https://github.com/yasikovsky)
- π Fix Tag with customize `closeIcon` breaks line issue. [#27226](https://github.com/ant-design/ant-design/pull/27226) [@handycode](https://github.com/handycode)

## 4.7.2

`2020-10-19`

- π Fix Layout.Sider `light` theme lost styles. [#27227](https://github.com/ant-design/ant-design/pull/27227) [@lingjieee](https://github.com/lingjieee)
- π Fix TextArea wrapped with additional div when `showCount` is `false`, and pass `className` and `style` to outer wrapper when `showCount` is `true`. [#27216](https://github.com/ant-design/ant-design/pull/27216)
- π Fix Checkbox.Group TS2559 error. [#27231](https://github.com/ant-design/ant-design/pull/27231)

## 4.7.1

`2020-10-18`

- DatePicker
  - π Fix DatePicker don't work correctly when `showTime` is `true` and `format` is function. [#27156](https://github.com/ant-design/ant-design/pull/27156)
  - π Fix DatePicker wrong animation direction when auto overflow. [#27101](https://github.com/ant-design/ant-design/pull/27101)
- Typography
  - π Fix Typography miss `pre` and `blockquote` style. [#27150](https://github.com/ant-design/ant-design/pull/27150)
  - π Fix Typography.Link hover color. [#27119](https://github.com/ant-design/ant-design/pull/27119)
  - π Fix Typography.Link hover color when type is danger. [#27104](https://github.com/ant-design/ant-design/pull/27104)
- π Fix Descriptions `ant-descriptions-item-content` and add style `word-break:break-word;`. [#27195](https://github.com/ant-design/ant-design/pull/27195) [@WLyKan](https://github.com/WLyKan)
- π Fix clear Password value attribute in controlled mode. [#27191](https://github.com/ant-design/ant-design/pull/27191)
- π Optimize Notification width in small screen. [#27189](https://github.com/ant-design/ant-design/pull/27189)
- π Fix Cascader className duplicate. [#27187](https://github.com/ant-design/ant-design/pull/27187) [@huntdream](https://github.com/huntdream)
- π Fix the issue that the Drawer will trigger form submit. [#27175](https://github.com/ant-design/ant-design/pull/27175)
- π Fix Dropdown icon missing margin. [#27165](https://github.com/ant-design/ant-design/pull/27165)
- π Fix Layout.Sider `collapsedWidth` cannot work without modifying `@menu-collapsed-width`. [#27154](https://github.com/ant-design/ant-design/pull/27154)
- π Fix Tabs `animated={true}` not working for panels. [#27145](https://github.com/ant-design/ant-design/pull/27145)
- π Fix Divider color when contains text. [#27134](https://github.com/ant-design/ant-design/pull/27134)
- π Fix the cursor style when the Radio option is selected and disabled. [#27125](https://github.com/ant-design/ant-design/pull/27125)
- πͺπΈ Add missing translations in es_ES. [#27079](https://github.com/ant-design/ant-design/pull/27079) [@gersongams](https://github.com/gersongams)
- RTL
  - π Optimize the style of Input.TextArea character count in RTL mode. [#27098](https://github.com/ant-design/ant-design/pull/27098)
- TypeScript
  - π€ Button shape remove undeclared doc type. [#27159](https://github.com/ant-design/ant-design/pull/27159)
  - π€ Add optional `rules` property into `FormListProps`. [#27164](https://github.com/ant-design/ant-design/pull/27164) [@huntdream](https://github.com/huntdream)

## 4.7.0

`2020-10-10`

- π₯ Input.TextArea support word count. [#26952](https://github.com/ant-design/ant-design/pull/26952) [@zhangchen915](https://github.com/zhangchen915)
- DatePicker
  - π₯ DatePicker support custom `format` by passing a function. [#26845](https://github.com/ant-design/ant-design/pull/26845)
  - π Fix RangePicker initial date of end panel cannot selected. [#23167](https://github.com/ant-design/ant-design/issues/23167)
- Form
  - π₯ Form.Item support `tooltip` to customize tooltip. [#26780](https://github.com/ant-design/ant-design/pull/26780)
  - π Form.List support `rules` validation and add Form.ErrorList to show the errors. [#26676](https://github.com/ant-design/ant-design/pull/26676)
  - π Form.Item support `messageVariables` prop. [#26597](https://github.com/ant-design/ant-design/pull/26597)
  - π Fix Form `onValuesChange` second param return fully `store` values instead of validate fields. [#26808](https://github.com/ant-design/ant-design/pull/26808)
- Upload
  - π₯ Upload can custom the item of file list by `itemRender` now. [#26333](https://github.com/ant-design/ant-design/pull/26333)
  - π Upload custom action icons now supports callback functions. [#26684](https://github.com/ant-design/ant-design/pull/26684) [@mwaddell](https://github.com/mwaddell)
- Table
  - π Table `sticky` now support `getContainer`. [#26973](https://github.com/ant-design/ant-design/pull/26973)
  - π Fix Table should not render dropdown filter icon when filterDropdown is `undefined`. [#27002](https://github.com/ant-design/ant-design/pull/27002) [@shangyilim](https://github.com/shangyilim)
- Modal
  - π  Refactor Modal animation code so that it will remove all dom element by `destroyOnClose` when closed. [#26940](https://github.com/ant-design/ant-design/pull/26940)
  - π Modal add `modalRender` prop which can be used for draggable dialog. [#26507](https://github.com/ant-design/ant-design/pull/26507) [@jhoneybee](https://github.com/jhoneybee)
- π Space add `split` prop. [#26948](https://github.com/ant-design/ant-design/pull/26948)
- π Image `preview` prop now support `visible` and `onVisibleChange`. [#26915](https://github.com/ant-design/ant-design/pull/26915)
- π InputNumber will trigger `onStep` prop when click up/down buttons. [#27075](https://github.com/ant-design/ant-design/pull/27075)
- π Avatar `size` support responsive config. [#26244](https://github.com/ant-design/ant-design/pull/26244) [@willamesoares](https://github.com/willamesoares)
- π Fix Radio.Button children cannot apply Tooltip. [#27050](https://github.com/ant-design/ant-design/pull/27050)
- RTL
  - β¬οΈ Fix List action button position in RTL mode. [#26964](https://github.com/ant-design/ant-design/pull/26964)
  - β¬οΈ Fix Transfer pagination style in RTL mode. [#26960](https://github.com/ant-design/ant-design/pull/26960)
  - β¬οΈ Fix Upload style in RTL mode. [#26961](https://github.com/ant-design/ant-design/pull/26961)
  - β¬οΈ Optimize Tag style to avoid the interaction between theme and RTL mode. [#26955](https://github.com/ant-design/ant-design/pull/26955)
  - β¬οΈ Optimize Cascader and Tree style of the data expansion loading icon in RTL mode. [#27010](https://github.com/ant-design/ant-design/pull/27010)
- TypeScript
  - π€ Fix typo `TimeLineItemProps` to `TimelineItemProps`. [#27001](https://github.com/ant-design/ant-design/pull/27001) [@mgcrea](https://github.com/mgcrea)
  - π€ Fix Slider missing `autoFocus` prop. [#26995](https://github.com/ant-design/ant-design/pull/26995) [@shangyilim](https://github.com/shangyilim)
  - π€ Fix Slider `step` prop not accepting `null` value. [#26984](https://github.com/ant-design/ant-design/pull/26984) [@shangyilim](https://github.com/shangyilim)
  - π€ Fix Slider.Range `trackStyle` and `handleStyle` should be array. [#27033](https://github.com/ant-design/ant-design/pull/27033)
  - π€ Optimize Tag `onClose` TypeScript definition. [#26932](https://github.com/ant-design/ant-design/pull/26932)
  - π€ Improve Form TypeScript definition to support `getFieldsValue` return generic type without `namePath` argument. [#26791](https://github.com/ant-design/ant-design/pull/26791)
- Locale
  - π§πΎ Add Belarusian locale. [#27028](https://github.com/ant-design/ant-design/pull/27028) [@StIvan8](https://github.com/StIvan8)
  - π―π΅ Fix Japanese locale. [#27043](https://github.com/ant-design/ant-design/pull/27043) [@iorikingdom](https://github.com/iorikingdom)
  - πΉπ­ Add Thai locale for Pickers. [#26993](https://github.com/ant-design/ant-design/pull/26993) [@anawinwz](https://github.com/anawinwz)
  - πΉπ· Add Turkish locale of Form optional text. [#27017](https://github.com/ant-design/ant-design/pull/27017) [@alperTunca](https://github.com/alperTunca)
  - π΅π± Add Polish locale of Table. [#26913](https://github.com/ant-design/ant-design/pull/26913) [@daczczcz1](https://github.com/daczczcz1)

## 4.6.6

`2020-09-27`

- π Fix Steps first item shifts in small screen. [#26894](https://github.com/ant-design/ant-design/pull/26894)
- π Fix Divider border style not work when text is provided. [#26863](https://github.com/ant-design/ant-design/pull/26863)
- π Fix Radio.Button validation error highlight. [#26849](https://github.com/ant-design/ant-design/pull/26849) [@dhorelik](https://github.com/dhorelik)
- π Fix Typography link-decoration style. [#26854](https://github.com/ant-design/ant-design/pull/26854) [@vineetvk01](https://github.com/vineetvk01)
- Locale
  - π Add Thai locale support. [#26906](https://github.com/ant-design/ant-design/pull/26906) [@anawinwz](https://github.com/anawinwz)
- TypeScript
  - π€ Fix message.destroy parameter type. [#26864](https://github.com/ant-design/ant-design/pull/26864) [@lihqi](https://github.com/lihqi)
  - π€ Optimize Slider type definition. [#26884](https://github.com/ant-design/ant-design/pull/26884)
  - π€ Form properly export `FormListProps` type. [#26831](https://github.com/ant-design/ant-design/pull/26831) [@mgcrea](https://github.com/mgcrea)

## 4.6.5

`2020-09-20`

- π Fix Descriptions item long text ellipsis issue. [#26820](https://github.com/ant-design/ant-design/pull/26820)
- π Fix Menu unexpected scrollbar when show and hide. [#26817](https://github.com/ant-design/ant-design/pull/26817)
- π Fix `@layout-sider-background` cannot set to linear gradient color. [#26810](https://github.com/ant-design/ant-design/pull/26810)
- π Fix Select compositing status lost when input first letter in Chinese. [#26796](https://github.com/ant-design/ant-design/pull/26796)
- π Fix Table `@table-sticky-zindex` less compile error issue. [#26800](https://github.com/ant-design/ant-design/pull/26800) [@chimp1nski](https://github.com/chimp1nski)
- Button
  - π Fix Button align issue when has icon only. [#26785](https://github.com/ant-design/ant-design/pull/26785)
  - π Fix Button warning `Invalid value for prop navigate` when using with react-router. [#26740](https://github.com/ant-design/ant-design/pull/26740) [@knobo](https://github.com/knobo)
- π Fix TimePicker column align issue, add `@picker-time-panel-column-width` and `@picker-time-panel-column-height` less variables. [#26784](https://github.com/ant-design/ant-design/pull/26784)
- π Fix AutoComplete warning when using `placeholder` and `allowClear`. [#26765](https://github.com/ant-design/ant-design/pull/26765)
- π Fix Space show items when it's render empty dom. [#26721](https://github.com/ant-design/ant-design/pull/26721) [@knobo](https://github.com/knobo)
- π  Dedupe `rc-trigger` version to reduce package size. [#26803](https://github.com/ant-design/ant-design/pull/26803)
- TypeScript
  - π€ Cascader add `name` and `id` props definition. [#26660](https://github.com/ant-design/ant-design/pull/26660) [@alwaysloseall](https://github.com/alwaysloseall)

## 4.6.4

`2020-09-13`

- π style: Card card image has extra 1px border. [#26659](https://github.com/ant-design/ant-design/pull/26659)
- π Fix Select `placeholder` color not same as Input. [#26651](https://github.com/ant-design/ant-design/pull/26651) [@wangcch](https://github.com/wangcch)
- π Fix Menu not support React.Fragment inside. [#26656](https://github.com/ant-design/ant-design/pull/26656)
- π Fix TextArea different behavior with Input when set `value` to `undefined`. [#26652](https://github.com/ant-design/ant-design/pull/26652)
- π Fix Motion related issue like Upload align flash and Form.Item with `help` ssr issue. [#26628](https://github.com/ant-design/ant-design/pull/26628)
- π Fix Typography.Link warning `Invalid value for prop navigate` when using with react-router. [#26623](https://github.com/ant-design/ant-design/pull/26623)
- π Fix Table pagination missing when is above table. [#26618](https://github.com/ant-design/ant-design/pull/26618)
- π Fix Upload in control miss file when upload multiple file in same time. [#26612](https://github.com/ant-design/ant-design/pull/26612)
- TypeScript
  - π€ Fix Table that sorter `compare` and `multiple` should be optional. [#26686](https://github.com/ant-design/ant-design/pull/26686)

## 4.6.3

`2020-09-06`

- π Sort props `className` to the end. [#26602](https://github.com/ant-design/ant-design/pull/26602)
- Table
  - π Fix Table nested table styles affects all sub-level tables. [#26568](https://github.com/ant-design/ant-design/pull/26568) [@willc001](https://github.com/willc001)
  - π Fix elements above Table was not clickable elements which has `float: right;` style. [#26599](https://github.com/ant-design/ant-design/pull/26599)
- π Fix Modal closing cause scroll position jump up. [#26538](https://github.com/ant-design/ant-design/pull/26538)
- π Fix the type declaration of onError in `customRequest` options of Upload. [#26601](https://github.com/ant-design/ant-design/pull/26601) [@yingpengsha](https://github.com/yingpengsha)
- π Shutdown Select/TreeSelect autocomplete list in Chrome. [#26590](https://github.com/ant-design/ant-design/pull/26590)
- π Fix Cascader value overwritten when filtering. [#26569](https://github.com/ant-design/ant-design/pull/26569) [@lich-yoo](https://github.com/lich-yoo)
- π Fix Modal jump out of screen in some situations. [#25765](https://github.com/ant-design/ant-design/pull/25765) [@tanmoyopenroot](https://github.com/tanmoyopenroot)
- π Fix Radio.Group not working properly, when is used in legacy Form. [#26555](https://github.com/ant-design/ant-design/pull/26555) [@willc001](https://github.com/willc001)
- π Fix Pagination align issue in windows. [#26549](https://github.com/ant-design/ant-design/pull/26549)
- π Fix Form with `help` make ssr un-sync issue. [#26542](https://github.com/ant-design/ant-design/pull/26542)
- π Fix Avatar doesn't scale fallback text well when display is none. [#26522](https://github.com/ant-design/ant-design/pull/26522) [@zhangyu1818](https://github.com/zhangyu1818)
- TypeScript
  - π€ Col Add `flex` type to `ColSize` interface. [#26578](https://github.com/ant-design/ant-design/pull/26578) [@blaiz](https://github.com/blaiz)
  - π€ Fix Tooltip/Popover `children` tsd to accept ReactNode. [#26534](https://github.com/ant-design/ant-design/pull/26534)

## 4.6.2

`2020-08-31`

- Upload
  - π Fix Upload list status issue when in control mode. [#26481](https://github.com/ant-design/ant-design/pull/26481)
  - π Fix Upload `picture-card` style unexpected margin in Form.Item. [#26367](https://github.com/ant-design/ant-design/pull/26367)
- π Fix Select focus shadow style. [#26465](https://github.com/ant-design/ant-design/pull/26465) [@Rainy](https://github.com/Rainy)
- Table
  - π Fix Table Pagination not hide with empty data when show on top position. [#26143](https://github.com/ant-design/ant-design/pull/26143) [@zhangchen915](https://github.com/zhangchen915)
  - π Fix Table expand icon size issue when `@font-size-base` is `12px`. [#26409](https://github.com/ant-design/ant-design/pull/26409)
- Space
  - π Fix Space not support React.Fragment issue. [#26444](https://github.com/ant-design/ant-design/pull/26444)
  - π Fix Space preserve empty dom node when `children` contains empty node. [#26389](https://github.com/ant-design/ant-design/pull/26389)
- π Fix Badge not work when `status` or `color` is empty. [#26375](https://github.com/ant-design/ant-design/pull/26375) [@zhangchen915](https://github.com/zhangchen915)
- π Fix Tree draggable transition style. [#26387](https://github.com/ant-design/ant-design/pull/26387)
- π Fix `colorPalette is not defined` when customize theme in some situation. [#26395](https://github.com/ant-design/ant-design/pull/26395)
- TypeScript
  - π Fix TimePicker.RangePicker typescript need `picker` issue. [#26446](https://github.com/ant-design/ant-design/pull/26446)
  - π Upload extended `showUploadList` of Upload with `removeIcon` and `downloadIcon` properties. [#26406](https://github.com/ant-design/ant-design/pull/26406) [@bencallaway](https://github.com/bencallaway)
- RTL
  - π Fix the rtl style of Col. [#26479](https://github.com/ant-design/ant-design/pull/26479) [#26482](https://github.com/ant-design/ant-design/pull/26482) [@TrueMoein](https://github.com/TrueMoein)

## 4.6.1

`2020-08-24`

- TypeScript
  - π Fix Upload type declaration missing `children`. [#26347](https://github.com/ant-design/ant-design/pull/26347)

## 4.6.0

`2020-08-23`

- π Darker `@text-color` for WCAG 2.0 on contrast ratio. [#25630](https://github.com/ant-design/ant-design/pull/25630)
- π₯ New Image component. [#26296](https://github.com/ant-design/ant-design/pull/26296)
- π₯ Table support `sticky` prop to sticky header and scroll bar. [#25939](https://github.com/ant-design/ant-design/pull/25939)
- π  Refactor Upload via hooks. [#26196](https://github.com/ant-design/ant-design/pull/26196)
- Form
  - π Form support style of required mark with `requiredMark` and deprecate `hideRequiredMark` prop. [#26309](https://github.com/ant-design/ant-design/pull/26309)
  - π Form.List support the second `index` param in `add`. [#26081](https://github.com/ant-design/ant-design/pull/26081)
- π VirtualList support no blink jump and fix Select blank dropdown issue. [#26306](https://github.com/ant-design/ant-design/pull/26306)
- Typography
  - π Support Typography.Text `success` type. [#26145](https://github.com/ant-design/ant-design/pull/26145) [@llwslc](https://github.com/llwslc)
  - π Typography `copyable` support hide tooltip and `editable` support config icon and tooltip. [#25953](https://github.com/ant-design/ant-design/pull/25953) [@llwslc](https://github.com/llwslc)
  - π Add Typography.Title level 5. [#25861](https://github.com/ant-design/ant-design/pull/25861)
  - π Typography add `maxLength` & `autoSize` with `editable` config [#25373](https://github.com/ant-design/ant-design/pull/25373) [@CornerSkyless](https://github.com/CornerSkyless)
- π Fix Transfer `filterOption` not trigger when search spaces. [#26335](https://github.com/ant-design/ant-design/pull/26335)
- Progress
  - π Fix Progress `steps` don't support `trailColor`. [#26323](https://github.com/ant-design/ant-design/pull/26323)
  - π Fix Progress `success.percent` not working when `type="circle"`. [#26307](https://github.com/ant-design/ant-design/pull/26307)
- π Fix Textarea don't display `defaultValue` when `value` is `undefined`. [#26327](https://github.com/ant-design/ant-design/pull/26327)
- Cascader
  - π Fix Cascader options not open with search after ESC pressing. [#26271](https://github.com/ant-design/ant-design/pull/26271) [@flyerH](https://github.com/flyerH)
  - π Optimize Cascader clear animation. [#26186](https://github.com/ant-design/ant-design/pull/26186)
- π Remove deprecated `Button.Group` and please use Space component instead. [#26260](https://github.com/ant-design/ant-design/pull/26260)
- Select
  - π Select support `onClear` prop. [#25907](https://github.com/ant-design/ant-design/pull/25907)
  - π Fix Select `mode="tags"` showing duplicated items when search. [#25907](https://github.com/ant-design/ant-design/pull/25907)
  - π Fixed the style exception that was disabled when Select focused. [#26255](https://github.com/ant-design/ant-design/pull/26255)
  - π Fix Select icon overlap with selections when `showArrow` enabled. [#26168](https://github.com/ant-design/ant-design/pull/26168) [@zhangchen915](https://github.com/zhangchen915)
- DatePicker
  - π Fix panel not correct when `picker` changed. [#26093](https://github.com/ant-design/ant-design/issues/26093)
  - π Fix RangePicker do not close panel when click clear icon. [#26188](https://github.com/ant-design/ant-design/issues/26188)
- π Fix Pagination font family style. [#26230](https://github.com/ant-design/ant-design/pull/26230) [@albertms10](https://github.com/albertms10)
- π Fix Space children remount in some case. [#26219](https://github.com/ant-design/ant-design/pull/26219)
- Badge
  - π Add `@badge-color` less variable. [#26159](https://github.com/ant-design/ant-design/pull/26159)
  - π Badge support `size` prop. [#25851](https://github.com/ant-design/ant-design/pull/25851) [@moonrailgun](https://github.com/moonrailgun)
- π Tabs `tabBarExtraSlot` support extra position. [#25138](https://github.com/ant-design/ant-design/pull/25138) [@jesse3mh9a](https://github.com/jesse3mh9a)
- π Optimize the display effect of Descriptions when there is more content. [#25903](https://github.com/ant-design/ant-design/pull/25903)
- π message could be detroied by `message.desctroy(key)`. [#26052](https://github.com/ant-design/ant-design/pull/26052) [@lihqi](https://github.com/lihqi)
- π Adjust InputNumber handler bar to be hidden when `readOnly`. [#25998](https://github.com/ant-design/ant-design/pull/25998)
- Locale
  - π Add Galician locale support. [#26015](https://github.com/ant-design/ant-design/pull/26015) [@barreeeiroo](https://github.com/barreeeiroo)
  - π±πΉ Add Lithuanian locale support. [#26312](https://github.com/ant-design/ant-design/pull/26312) [@mslotvinskij](https://github.com/mslotvinskij)
  - π Use `kmr_IQ` to replace `ku_IQ`. [#26030](https://github.com/ant-design/ant-design/pull/26030)
- RTL
  - π Optimize the connection line style in Tree RTL mode. [#26205](https://github.com/ant-design/ant-design/pull/26205)
  - π Optimize Dropdown RTL writing to avoid dark mode style overlays. [#26206](https://github.com/ant-design/ant-design/pull/26206)
- TypeScript
  - π€ Fix Form.Item `initialValue` missing definition. [#26292](https://github.com/ant-design/ant-design/pull/26292) [@miaoyuxinbaby](https://github.com/miaoyuxinbaby)
  - π€ Form support generic type. [#25937](https://github.com/ant-design/ant-design/pull/25937)

## 4.5.4

`2020-08-12`

- π Fix Form.Item `hidden` not working in less. [#26152](https://github.com/ant-design/ant-design/pull/26152)
- π Fix Dropdown render issue when `overlay` is string. [#26135](https://github.com/ant-design/ant-design/pull/26135)
- π Fix Table pagination disappear when last record in last page is deleted. [#26133](https://github.com/ant-design/ant-design/pull/26133) [@QoVoQ](https://github.com/QoVoQ)
- Tree
  - π Fix Tree.DirectoryTree can not use `scrollTo` with ref. [#26129](https://github.com/ant-design/ant-design/pull/26129)
  - π Fix Tree lost line between top level nodes when enable `showLine`. [#25991](https://github.com/ant-design/ant-design/pull/25991) [@zhangchen915](https://github.com/zhangchen915)
- π Add `@badge-color` less variable. [#26159](https://github.com/ant-design/ant-design/pull/26159)
- RTL
  - π Fixed Input.Search border style in RTL mode. [#26156](https://github.com/ant-design/ant-design/pull/26156)
  - π Fix the style of Input when `addonBefore` in RTL mode. [#26153](https://github.com/ant-design/ant-design/pull/26153)
  - π Fix multiple style issues for DatePicker in RTL mode. [#26149](https://github.com/ant-design/ant-design/pull/26149) [#26157](https://github.com/ant-design/ant-design/pull/26157) [#26158](https://github.com/ant-design/ant-design/pull/26158)
- TypeScript
  - π Fix Slider `handleStyle` and `trackStyle` TypeScript definitions. [#26160](https://github.com/ant-design/ant-design/pull/26160)

## 4.5.3

`2020-08-08`

- Menu
  - π Fix horizontal Menu dark `theme` style under dark theme. [#26062](https://github.com/ant-design/ant-design/pull/26062)
  - π Fix the position of the horizontal Menu in dark theme and RTL mode. [#26032](https://github.com/ant-design/ant-design/pull/26032)
- Table
  - π Fix Table crash when `dataSource` contains number. [#26042](https://github.com/ant-design/ant-design/pull/26042)
  - π Fix Table empty filters throw warning. [#26001](https://github.com/ant-design/ant-design/pull/26001)
- Form
  - π Fix Form.Item `hidden` not work with `noStyle`. [#26020](https://github.com/ant-design/ant-design/pull/26020)
  - π Fix Form.Item margin is uncorrect in compact mode. [#26069](https://github.com/ant-design/ant-design/pull/26069)
- Transfer
  - π Fix the mouse style of the head dropDown when Transfer is `disabled`. [#26005](https://github.com/ant-design/ant-design/pull/26005)
  - π Fix the problem that Pagination is not `disabled` when Transfer is `disabled`. [#26009](https://github.com/ant-design/ant-design/pull/26009)
- Cascader
  - π Cascader selector down arrow doesn't rotate. [#26078](https://github.com/ant-design/ant-design/pull/26078) [@07akioni](https://github.com/07akioni)
  - π Fix Cascader text overflow bug in Firefox. [#26011](https://github.com/ant-design/ant-design/pull/26011)
  - π Fix the problem that the color of mouse hover border is abnormal when Cascader is `disabled`. [#25970](https://github.com/ant-design/ant-design/pull/25970)
- Select
  - π Optimize the `disabled` style of Select multiple mode. [#25980](https://github.com/ant-design/ant-design/pull/25980)
  - π Fix the mouse style of custom icon when Select is `disabled`. [#26002](https://github.com/ant-design/ant-design/pull/26002)
- π Fix Breadcrumb.Item lost separator after wrapping in component. [#25984](https://github.com/ant-design/ant-design/pull/25984) [@flyerH](https://github.com/flyerH)
- π Fix InputNumber dark theme handler background color. [#26072](https://github.com/ant-design/ant-design/pull/26072)
- π Fix the missing `key` of Avatar.Group. [#26098](https://github.com/ant-design/ant-design/pull/26098)
- π Adjusts Mentions `readOnly` mouse style to native style. [#25977](https://github.com/ant-design/ant-design/pull/25977)
- π Add `@btn-line-height`. [#26014](https://github.com/ant-design/ant-design/pull/26014)
- π Optimize Pagination style when `simple` type and `disabled`. [#26008](https://github.com/ant-design/ant-design/pull/26008)
- π Fix Modal `useModal` missing style issue. [#25967](https://github.com/ant-design/ant-design/pull/25967)
- π Fix Steps RTL style when use `progress`. [#26075](https://github.com/ant-design/ant-design/pull/26075)
- π Improve Arabic locale. [#26094](https://github.com/ant-design/ant-design/pull/26094) [@Mohelm97](https://github.com/Mohelm97)
- π Improve fr_FR localization. [#26034](https://github.com/ant-design/ant-design/pull/26034) [@Thanaen](https://github.com/Thanaen)

## 4.5.2

`2020-08-02`

- π Fix Slider tooltip abnormal visibility. [#25945](https://github.com/ant-design/ant-design/pull/25945) [@lihqi](https://github.com/lihqi)
- π Fix Divider color in dark mode. [#25922](https://github.com/ant-design/ant-design/pull/25922)
- π Fix Radio.Button text color when `disabled` and `checked`. [#25911](https://github.com/ant-design/ant-design/pull/25911)
- π Fix Carousel children height smaller then parent node issue. [#25906](https://github.com/ant-design/ant-design/pull/25906)
- π Fix Table `indentSize` couldn't be zero value. [#25890](https://github.com/ant-design/ant-design/pull/25890) [@OmriGM](https://github.com/OmriGM)
- π Fix List `actions` show cursor outside clickable area. [#25961](https://github.com/ant-design/ant-design/pull/25961)
- π·πΊ Improve Russian locale. [#25958](https://github.com/ant-design/ant-design/pull/25958) [@addictional](https://github.com/addictional)
- RTL
  - π Fixed vertical Slider default `tooltipPlacement` in RTL mode. [#25909](https://github.com/ant-design/ant-design/pull/25909)
  - π Fix Tabs RTL style of `card` type. [#25936](https://github.com/ant-design/ant-design/pull/25936)
  - π Fix nested Table RTL style under dark theme. [#25938](https://github.com/ant-design/ant-design/pull/25938)

## 4.5.1

`2020-07-28`

- π Fix Badge style causing build error. [#25863](https://github.com/ant-design/ant-design/pull/25863)
- π Fix Menu in `horizontal` `dark` status Menu.Item background style glitch. [#25850](https://github.com/ant-design/ant-design/pull/25850)
- π Optimize Divider color in none-white background. [#25855](https://github.com/ant-design/ant-design/pull/25855)
- π Remove multiple Select choice animation of item. [#25852](https://github.com/ant-design/ant-design/pull/25852)
- TypeScript
  - Export Form `FormList` interface. [#25849](https://github.com/ant-design/ant-design/pull/25849)

## 4.5.0

`2020-07-28`

- π Input and Input.TextArea support `bordered` prop. [#25617](https://github.com/ant-design/ant-design/pull/25617)
- π Add `useMessage` hook for Message to support `context` access. [#25422](https://github.com/ant-design/ant-design/pull/25422)
- π Tree support `titleRender` to customize all nodes' content. [#25624](https://github.com/ant-design/ant-design/pull/25624)
- π Descriptions add `extra` prop. [#25512](https://github.com/ant-design/ant-design/pull/25512) [@zzz111](https://github.com/zzz111)
- π Add `Modal.config` to set `rootPrefixCls` for Modal statis methods. [#25613](https://github.com/ant-design/ant-design/pull/25613)
- π Drawer support `push` prop for multi-Drawer linkage. [#25445](https://github.com/ant-design/ant-design/pull/25445) [@jinxin0112](https://github.com/jinxin0112)
- π Add Badge.Ribbon component. [#25456](https://github.com/ant-design/ant-design/pull/25456)
- π Steps support `percent` prop to show step icon progress. [#25839](https://github.com/ant-design/ant-design/pull/25839)
- π **Menu.Item's blue indicator line and dropdown width are the same as its content's width in `horizontal` mode.** [#25622](https://github.com/ant-design/ant-design/pull/25622)
- Avatar
  - π Add Avatar.Group for showing a set of avatars. [#25192](https://github.com/ant-design/ant-design/pull/25192)
  - π Fix Avatar not fallback correctly when `src` is invalid. [#25806](https://github.com/ant-design/ant-design/pull/25806)
- DatePicker
  - π DatePicker support [date-fns](https://date-fns.org/). [#25822](https://github.com/ant-design/ant-design/pull/25822) [@fireairforce](https://github.com/fireairforce)
  - π Improve DatePicker hovering experience, the placeholder will change to format value of target-date when hovering a date cell. ([#25050](https://github.com/ant-design/ant-design/issues/25050)). [#25784](https://github.com/ant-design/ant-design/pull/25784) [@Kermit-Xuan](https://github.com/Kermit-Xuan)
  - π RangePicker `onCalendarChange` add `range` param to indicate currently activated pane. [#25568](https://github.com/ant-design/ant-design/pull/25568) [@Kim-Wing-Fung](https://github.com/Kim-Wing-Fung)
  - π DatePicker support `panelRender` to customize panel. [#25488](https://github.com/ant-design/ant-design/pull/25488)
  - π Fix QuarterPicker not working, remove DatePicker.XxxPicker and recommend `picker='xxx'` usage instead. [#25768](https://github.com/ant-design/ant-design/pull/25768)
- Form
  - π Form.List support array in `remove` method. [#25638](https://github.com/ant-design/ant-design/pull/25638) [@fireairforce](https://github.com/fireairforce)
  - π Form.Item supports `dependencies` to control updating logic with render props `children`. [#25408](https://github.com/ant-design/ant-design/pull/25408)
  - π Adjust Form.Item validateFist to validate in order. Origin logic use parallel to validate. [#25321](https://github.com/ant-design/ant-design/pull/25321)
  - π Fix Form.Item sometime not clean up prev error message. [#25737](https://github.com/ant-design/ant-design/pull/25737)
  - π Fix Form.Item not collect `validateStatus` when children Form.Item with `noStyle` has an error. [#25734](https://github.com/ant-design/ant-design/pull/25734)
  - π Fix Form.Item setting `labelCol={{ offset: number }}` doesn't work if layout is vertical. [#25713](https://github.com/ant-design/ant-design/pull/25713) [@zhangchen915](https://github.com/zhangchen915)
  - β¨οΈ Form add `role="alert"` attribute on validation message node to import accessibility. [#25735](https://github.com/ant-design/ant-design/pull/25735) [@AlbertAZ1992](https://github.com/AlbertAZ1992)
- Calendar
  - π Fix Calendar `validRange` prevents `disabledDate`. [#25626](https://github.com/ant-design/ant-design/pull/25626) [@zhangchen915](https://github.com/zhangchen915)
  - π Fix Calendar `validRange` not working on month selection dropdown. [#25626](https://github.com/ant-design/ant-design/pull/25626) [@zhangchen915](https://github.com/zhangchen915)
- π Fix Table `indeterminate` returned by `getCheckboxProps` not working. [#25649](https://github.com/ant-design/ant-design/pull/25649)
- π Fix Select clear icon position in Form.Item. [#25728](https://github.com/ant-design/ant-design/pull/25728)
- π Fix Pagination mouse style of the page turning button. [#25772](https://github.com/ant-design/ant-design/pull/25772)
- π Fix TreeSelect `treeNodeLabelProp` affect tree node render result. [#25755](https://github.com/ant-design/ant-design/pull/25755)
- π Fix Carousel `findDOMNode` warning in strict mode. [#25744](https://github.com/ant-design/ant-design/pull/25744)
- π Fix Radio causing SSR build errors with `webpack@4.44.0`. [25821](https://github.com/ant-design/ant-design/pull/25821) [@Kermit-Xuan](https://github.com/Kermit-Xuan)
- π Fix Tabs focus & active state color when disabled. [25827](https://github.com/ant-design/ant-design/pull/25827) [hsuanxyz](https://github.com/hsuanxyz)
- π Card action pane color is unified with body color. [#25722](https://github.com/ant-design/ant-design/pull/25722)
- β¨οΈ Improve Alert/message/notification accessibility by adding role attribute. [#25774](https://github.com/ant-design/ant-design/pull/25774)
- π­π° Add zh_HK localization. [#25731](https://github.com/ant-design/ant-design/pull/25731) [@wuchu](https://github.com/wuchu)
- π©πͺ Improve Form de_DE localization. [#25823](https://github.com/ant-design/ant-design/pull/25823) [@LukeTimeWalker](https://github.com/LukeTimeWalker)

## 4.4.3

`2020-07-20`

- π Fix Layout `trigger` cannot customize zero width to trigger. [#25653](https://github.com/ant-design/ant-design/pull/25653)
- π Fix Form.Item `help` style when verification fails. [#25582](https://github.com/ant-design/ant-design/pull/25582) [@zhangchen915](https://github.com/zhangchen915)
- π Fix Descriptions abnormal style inside Table `expandedRowRender`. [#25593](https://github.com/ant-design/ant-design/pull/25593)
- π Add `@zindex-popconfirm: 1060` less variable, and improve `@zindex-tooltip` into `1070`. [#25693](https://github.com/ant-design/ant-design/pull/25693)
- π  Upgrade `react-slick` to reduce bundle size. [#25599](https://github.com/ant-design/ant-design/pull/25599)
- π Improve Catalan ca_ES localization. [#25583](https://github.com/ant-design/ant-design/pull/25583) [@albertms10](https://github.com/albertms10)
- πΈπ¦ Improve ar_EG localization. [#25587](https://github.com/ant-design/ant-design/pull/25587) [@amir5000](https://github.com/amir5000)
- TypeScript
  - π Fix Upload `customRequest` file interface. [#25598](https://github.com/ant-design/ant-design/pull/25598) [@AlbertAZ1992](https://github.com/AlbertAZ1992)

## 4.4.2

`2020-07-11`

- π  Adjust Alert animation to remove directly dom operation. [#dd8e9f8](https://github.com/ant-design/ant-design/commit/dd8e9f8) [@Yunfly](https://github.com/Yunfly)
- Select
  - π Fix Select shifts vertically when searching. [#25536](https://github.com/ant-design/ant-design/pull/25536)
  - π Add `@select-item-select-color` to control the color when Select item is selected. [#25476](https://github.com/ant-design/ant-design/pull/25476)
- π Fix Form.Item warning for `preserve` as invalidate dom prop. [#25518](https://github.com/ant-design/ant-design/pull/25518)
- π Fix Card cover margin bug when bordered is false. [#25515](https://github.com/ant-design/ant-design/pull/25515) [@yutingzhao1991](https://github.com/yutingzhao1991)
- π Adjust Typography style to set `overflow-wrap: break-word` as default. [#25516](https://github.com/ant-design/ant-design/pull/25516)
- π Fix Table `expandedRowRender` nested Table cell background color. [#25498](https://github.com/ant-design/ant-design/pull/25498)
- π Fix Popover wrong positioning on Radio.Button. [#25449](https://github.com/ant-design/ant-design/pull/25449) [@zgoby](https://github.com/zgoby)
- π Fix RangePicker clear icon position issue when `size=small`. [#25458](https://github.com/ant-design/ant-design/pull/25458)
- π Upload supports to show thumbnail for non-image files as `thumbUrl` configured in `onChange` event. [#25432](https://github.com/ant-design/ant-design/pull/25432) [@AlbertAZ1992](https://github.com/AlbertAZ1992)
- π Fix Table `onChange` triggered multiple times when change page size. [#25520](https://github.com/ant-design/ant-design/pull/25520) [@zhangchen915](https://github.com/zhangchen915)
- π  Remove `babel-runtime` and add `@babel/runtime` in dependencies, reduce gzipped bundle size `18.6KB`. [#25530](https://github.com/ant-design/ant-design/pull/25530)
- πͺπΈ Improve es_ES localization. [#25460](https://github.com/ant-design/ant-design/pull/25460) [@gersongams](https://github.com/gersongams)

## 4.4.1

`2020-07-06`

- Menu
  - π Fix Menu.Item use `a` tag color style issue. [#25414](https://github.com/ant-design/ant-design/pull/25414) [@kaysonwu](https://github.com/kaysonwu)
  - π Fix Menu inline animation not correct issue. [#25341](https://github.com/ant-design/ant-design/pull/25341)
  - π Optimize Menu collapse animation. [#25301](https://github.com/ant-design/ant-design/pull/25301)
- π Fix Input disabled `backgroundColor` is override when inside a `error` or `warning` Form.Item. [#25385](https://github.com/ant-design/ant-design/pull/25385)
- π Fix Table header extra border of right side column. [#25378](https://github.com/ant-design/ant-design/pull/25378)
- π Fix Grid ResponsiveObserve not been unsubscribed correctly. [#25319](https://github.com/ant-design/ant-design/pull/25319) [@zhangchen915](https://github.com/zhangchen915)
- π Fix Progress `successPercent` warning message and correct `success.progress` to `success.percent`. [#25356](https://github.com/ant-design/ant-design/pull/25356) [@fireairforce](https://github.com/fireairforce)
- π Fix PageHeader Tabs unnecessary `margin-bottom`. [#25340](https://github.com/ant-design/ant-design/pull/25340) [@dickeylth](https://github.com/dickeylth)
- Form
  - π Fix Form.Item `hidden` no working. [#25336](https://github.com/ant-design/ant-design/pull/25336)
  - π Fix Form.Item help message may not disappear in a `display:none` container. [#25297](https://github.com/ant-design/ant-design/pull/25297)
- Radio
  - π Fix Radio.Group throw `Function components cannot be given refs` warning message. [#25328](https://github.com/ant-design/ant-design/pull/25328)
  - π Fix Radio.Group style with extra spaces in `children`. [#25304](https://github.com/ant-design/ant-design/pull/25304) [@ElderJames](https://github.com/ElderJames)
- π Fix Drawer click mask will trigger close event multiple times. [#25313](https://github.com/ant-design/ant-design/pull/25313)
- π Fix Skeleton Button/Avatar/Input/Image default width to auto. [#25303](https://github.com/ant-design/ant-design/pull/25303)
- πΊπ¦ Update uk_UA localization. [#25402](https://github.com/ant-design/ant-design/pull/25402) [@kitsoRik](https://github.com/kitsoRik)
- π³π΄ Update nb_NO localization. [#25374](https://github.com/ant-design/ant-design/pull/25374) [@Johannes-Andersen](https://github.com/Johannes-Andersen)
- TypeScript
  - π Fix Slider `onChange` definition. [#25358](https://github.com/ant-design/ant-design/pull/25358) [@CornerSkyless](https://github.com/CornerSkyless)
  - π Fix Tooltip custom color type definition. [#25315](https://github.com/ant-design/ant-design/pull/25315) [@CornerSkyless](https://github.com/CornerSkyless)

## 4.4.0

`2020-06-29`

- π₯ Optimize RangePicker interaction that any picker selection will popup another picker panel. [#25135](https://github.com/ant-design/ant-design/pull/25135)
- π₯ Add Skeleton.Image. [#24805](https://github.com/ant-design/ant-design/pull/24805) [@fireairforce](https://github.com/fireairforce)
- Form
  - π Form.Item support `preserve` to disable value preserve. [#25186](https://github.com/ant-design/ant-design/pull/25186)
  - π Form.Item add `hidden` prop. [#25108](https://github.com/ant-design/ant-design/pull/25108)
  - π Form instance support `getFieldInstance`. [#24711](https://github.com/ant-design/ant-design/pull/24711)
- Table
  - π Table `onChange` add `action` in extra argument. [#24697](https://github.com/ant-design/ant-design/pull/24697)
  - π Table support `rowSelection.dirty` to enable cache `key` with ajax. [#24718](https://github.com/ant-design/ant-design/pull/24718)
  - π Table supports `rowSelection.checkStrictly`. [#24931](https://github.com/ant-design/ant-design/pull/24931)
  - π Fix Table `onSelectAll`'s `changeRows` parameter is incorrect. [#24931](https://github.com/ant-design/ant-design/pull/24931)
  - π Fix Table expand buttons of leaf rows in tree data can still be clicked. [#24931](https://github.com/ant-design/ant-design/pull/24931)
  - π Fix Table expand icon still interative when hidden. [#25170](https://github.com/ant-design/ant-design/pull/25170)
- TimePicker
  - π Fix TimePicker display 12 AM as 0 AM. [#25174](https://github.com/ant-design/ant-design/pull/25174)
  - π Fix TimePicker not using 0 ~ 23 to disable hours. [#25174](https://github.com/ant-design/ant-design/pull/25174)
  - π Fix TimePicker AM | PM are not related with hour disabled status. [#25174](https://github.com/ant-design/ant-design/pull/25174)
  - π Fix TimePicker "Now" button's behavior doesn't conform hour, minute, second step. [#25174](https://github.com/ant-design/ant-design/pull/25174)
- Cascader
  - π Cascader add `expandIcon` to customize the current item expand icon. [#24865](https://github.com/ant-design/ant-design/pull/24865)
  - π Cascader support `dropdownRender` prop for customizing menu. [#24812](https://github.com/ant-design/ant-design/pull/24812)
- Menu
  - π Menu support `triggerSubMenuAction` (hover or click). [#25127](https://github.com/ant-design/ant-design/pull/25127) [@hydRAnger](https://github.com/hydRAnger)
  - π Fix Menu.SubMenu background color in dark theme. [#25205](https://github.com/ant-design/ant-design/pull/25205)
- Tabs
  - π Pagination support `onChange` called when `pageSize` change. [#24964](https://github.com/ant-design/ant-design/pull/24964) [@fireairforce](https://github.com/fireairforce)
  - π Tabs support `addIcon` to customize add icon node. [#25006](https://github.com/ant-design/ant-design/pull/25006)
  - π Fix Tabs can not close in IE11. [#25200](https://github.com/ant-design/ant-design/pull/25200)
- Pagination
  - π Improve Pagination accessibility by fixing a W3C error. [#25119](https://github.com/ant-design/ant-design/pull/25119)
- DatePicker
  - π Fix month and quarter picker's toggle button size of DatePicker component. [#25035](https://github.com/ant-design/ant-design/pull/25035) [@fireairforce](https://github.com/fireairforce)
  - π DatePicker support `showNow`. TimePicker support `showNow`. [#25032](https://github.com/ant-design/ant-design/pull/25032)
- Drawer
  - π Dropdown component support `arrow` prop. [#23869](https://github.com/ant-design/ant-design/pull/23869) [@wendellhu95](https://github.com/wendellhu95)
  - π Fix Drawer `getContainer={false}` cause scrollbar missing in some situation. [#25273](https://github.com/ant-design/ant-design/pull/25273)
- π Fix Rate render unexpectedly when `value` is `1.6` or `2.6`. [#24993](https://github.com/ant-design/ant-design/pull/24993)
- π Menution support `autoSize` prop. [#24961](https://github.com/ant-design/ant-design/pull/24961) [@Kermit-Xuan](https://github.com/Kermit-Xuan)
- π Remove the 140px width limit on vertical dot Steps.Step. [#24907](https://github.com/ant-design/ant-design/pull/24907)
- π Move Result children to end of component. [#24945](https://github.com/ant-design/ant-design/pull/24945)
- π Add Rate `character` support `(RateProps)=> ReactNode` customization. [#24903](https://github.com/ant-design/ant-design/pull/24903)
- π Add `optionType` api to set Radio type in Radio.Group when use `options`. [#24809](https://github.com/ant-design/ant-design/pull/24809)
- π Add `closeIcon` to customize Tag close icon. [#24885](https://github.com/ant-design/ant-design/pull/24885)
- π Drawer support `closeIcon`. [#24842](https://github.com/ant-design/ant-design/pull/#24842)
- π Add `ghost` prop for collapse to set a transparent background. [#24734](https://github.com/ant-design/ant-design/pull/24734)
- π Progress support customise filled Progress color. [#24655](https://github.com/ant-design/ant-design/pull/24655) [@fireairforce](https://github.com/fireairforce)
- π Typography copyable support `icon` and `tooltips` for customization. [#25274](https://github.com/ant-design/ant-design/pull/25274) [@israelKusayev](https://github.com/israelKusayev)
- π Add `showLeafIcon` for Tree Component when set `showLine` prop. [#25271](https://github.com/ant-design/ant-design/pull/25271)
- π Add BackTop `duration` used to set the time required to return to the top. [#25254](https://github.com/ant-design/ant-design/pull/25254)
- π Fix Select suffix icon can not focus input. [#25212](https://github.com/ant-design/ant-design/pull/25212)
- π Fix the issue that Notification modification `width` is not aligned with the edge of the screen. [#25168](https://github.com/ant-design/ant-design/pull/25168)
- π Make Switch animation more smooth and quicker. [#25160](https://github.com/ant-design/ant-design/pull/25160)
- π  Modal add more less parameters. [#24773](https://github.com/ant-design/ant-design/pull/24773) [@hicrystal](https://github.com/hicrystal)
- π Fix PageHeader tabs unexpected border style. [#25159](https://github.com/ant-design/ant-design/pull/25159)
- π Fix InputNumber `max` prop has no default value. [#25243](https://github.com/ant-design/ant-design/pull/25243)
- π Add missing translation keys to table locale in German, Italian and Czech. [#25233](https://github.com/ant-design/ant-design/pull/25233) [@karelsoupaEMZ](https://github.com/karelsoupaEMZ)
- π―π΅ Add ja_JP globalization for Form. [#25244](https://github.com/ant-design/ant-design/pull/25244) [@kentaro84207](https://github.com/kentaro84207)
- RTL
  - π Fix Table nested style in RTL. [#25156](https://github.com/ant-design/ant-design/pull/25156)
  - π Fix Table title style in RTL when use filter and sorter. [#25152](https://github.com/ant-design/ant-design/pull/25152)
  - π Fix InputNumber input inner in RTL. [#25146](https://github.com/ant-design/ant-design/pull/25146)

## 4.3.5

`2020-06-21`

- π Fix Input.Search as AutoComplete customize component crash issue. [#25049](https://github.com/ant-design/ant-design/pull/25049)
- π  Rewrite Input.Password with hooks. [#25012](https://github.com/ant-design/ant-design/pull/25012) [@Rustin-Liu](https://github.com/Rustin-Liu)
- π Fix PageHeader tabs broken style since `4.3.0`. [#24991](https://github.com/ant-design/ant-design/pull/24991)
- π Fix Backtop still interactive when it is hidden. [#25132](https://github.com/ant-design/ant-design/pull/25132) [@jesse3mh9a](https://github.com/jesse3mh9a)
- π Fix Upload don't support Popover. [#25090](https://github.com/ant-design/ant-design/pull/25090)
- π Fix Tabs content exceeds container width issue. [#25072](https://github.com/ant-design/ant-design/pull/25072)
- π Fix DataPicker/TimePicker time dropdown alignment issue. [#25019](https://github.com/ant-design/ant-design/pull/25019)
- Table
  - π Fix Table nested border style. [#24995](https://github.com/ant-design/ant-design/pull/24995)
  - π Improve Table empty filters menu UI. [#25073](https://github.com/ant-design/ant-design/pull/25073)
  - π Reduce Table filter dropdown's `max-height`. [#25001](https://github.com/ant-design/ant-design/pull/25001)
- Descriptions
  - π Fix Descriptions selecting text behavior when double clicking item. [#24983](https://github.com/ant-design/ant-design/pull/24983) [@harupy](https://github.com/harupy)
  - π Fix Descriptions label text not start aligned in Safari. [#25018](https://github.com/ant-design/ant-design/pull/25018)
- π Fix List.Item.Meta content width may overflow sometimes. [#24992](https://github.com/ant-design/ant-design/pull/24992)
- π Fix dark mode Menu.SubMenu background color in compact theme. [#24997](https://github.com/ant-design/ant-design/pull/24997)
- β‘οΈ Reduce 3KB Button css bundle size. [#24996](https://github.com/ant-design/ant-design/pull/24996)
- πΉπ· Improve Turkish locale. [#25100](https://github.com/ant-design/ant-design/pull/25100) [@smddzcy](https://github.com/smddzcy)
- TypeScript
  - Export Tree `DataNode`. [#25065](https://github.com/ant-design/ant-design/pull/25065) [@jinxin0112](https://github.com/jinxin0112)

## 4.3.4

`2020-06-14`

- Form
  - π Fix `validateTrigger` not works on Form. [#24979](https://github.com/ant-design/ant-design/pull/24979)
  - π Fix Form.Item still replace component `id` when `id` configured. [#24929](https://github.com/ant-design/ant-design/pull/24929)
  - π Fix Form.List error message display not correct when nested with `noStyle`. [#24867](https://github.com/ant-design/ant-design/pull/24867)
- Table
  - π Fix Table `shouldCellUpdate` missing `prevRecord` param. [#24963](https://github.com/ant-design/ant-design/pull/24963)
  - π Fix Table's filter dropdown's display value doesn't sync with controlled `filteredValue`. [#24952](https://github.com/ant-design/ant-design/pull/24952)
  - π Fix Table `onChange` get wrong state with multiple sorter operation. [#24852](https://github.com/ant-design/ant-design/pull/24852)
- π Fix Modal `confirm()` has no default icon. [#24956](https://github.com/ant-design/ant-design/pull/24956)
- π Fix List `grid` not working in React.Fragment or wrapped List.Item. [#24955](https://github.com/ant-design/ant-design/pull/24955)
- π Fix Avatar fallback to children when loading image with error. [#24944](https://github.com/ant-design/ant-design/pull/24944) [@sosohime](https://github.com/sosohime)
- π Fix Drawer doesn't omit prop `getTargetContainer`. [#24938](https://github.com/ant-design/ant-design/pull/24938)
- π Fix Tabs dropdown clip text when tab title too long. [#24928](https://github.com/ant-design/ant-design/pull/24928)
- π Fix Carousel under Tabs shaking when tab switch. [#24873](https://github.com/ant-design/ant-design/pull/24873)
- π Fix Transfer package size will increase if tree shaking is disabled. [#24847](https://github.com/ant-design/ant-design/pull/24847) [@DavidSichau](https://github.com/DavidSichau)
- π Add `@rate-star-hover-scale` to control Rate scale when cursor hover. [#24917](https://github.com/ant-design/ant-design/pull/24917)
- π Add `@divider-orientation-margin` less variable to control Divider's left margin when `orientation` is set. [#24877](https://github.com/ant-design/ant-design/pull/24877)
- π Localization
  - π«π· Improve fr_FR i18n. [#24962](https://github.com/ant-design/ant-design/pull/24962) [@sharkyze](https://github.com/sharkyze)
- TypeScript
  - π  Export Select `OptionProps` interface. [#24870](https://github.com/ant-design/ant-design/pull/24870) [@nitinknolder](https://github.com/nitinknolder)
  - π  Export Card `CardInterface` interface. [#24866](https://github.com/ant-design/ant-design/pull/24866) [@THPubs](https://github.com/THPubs)
  - π  Remove `emptyText` from Table `TableProps`. [#24948](https://github.com/ant-design/ant-design/pull/24948) [@hehex9](https://github.com/hehex9)
  - π  Add `patch` type on Upload `method` prop. [#24936](https://github.com/ant-design/ant-design/pull/24936) [@miclle](https://github.com/miclle)

## 4.3.3

`2020-06-07`

- π Fix Drawer cannot open. [#24802](https://github.com/ant-design/ant-design/pull/24802)
- π Fix Menu.SubMenu cannot scroll. [#24806](https://github.com/ant-design/ant-design/pull/24806)

## 4.3.2

`2020-06-06`

- π Fix Tag.CheckableTag don't support `onClick`. [#24743](https://github.com/ant-design/ant-design/pull/24743)
- π Fix Drawer support set `getPopupContainer` and `getPrefixCls` by ConfigProvider. [#24727](https://github.com/ant-design/ant-design/pull/24727)
- π Fix Button `loading.delay` repeat trigger when parent compoent re-render. [#24713](https://github.com/ant-design/ant-design/pull/24713)
- π Fix Dropdown menu link color when has `icon`. [#24707](https://github.com/ant-design/ant-design/pull/24707) [#24702](https://github.com/ant-design/ant-design/pull/24702)
- Select
  - π Fix Select virtual scroll display abnormally in compact mode. [#24706](https://github.com/ant-design/ant-design/pull/24706)
  - β‘οΈ Optimize Select multiple mode performance. [#24785](https://github.com/ant-design/ant-design/pull/24785) [@Kermit-Xuan](https://github.com/Kermit-Xuan)
- π Fix Calendar trigger `onPanelChange` even when in the same panel. [#24695](https://github.com/ant-design/ant-design/pull/24695)
- π Fix Input component height issue in IE11. [#24673](https://github.com/ant-design/ant-design/pull/24673) [@xiaosongxiaosong](https://github.com/xiaosongxiaosong)
- π Fix Radio typescript error typo. [#24693](https://github.com/ant-design/ant-design/pull/24693) [@hengkx](https://github.com/hengkx)
- π Fix Statistic don't work with Tooltip. [#24782](https://github.com/ant-design/ant-design/pull/24782)
- π Fix TimePicker.RangePicker `bordered={false}` not working when has `className`. [#24781](https://github.com/ant-design/ant-design/pull/24781)
- π Fix List cannot trigger `onChange` in pagination. [#24514](https://github.com/ant-design/ant-design/pull/24514)
- π Localization
  - π?π± Add Hebrew localisations for Form. [#24716](https://github.com/ant-design/ant-design/pull/24716) [@israelKusayev](https://github.com/israelKusayev)
  - π°π· Add ko_KR localizations for Form. [#24783](https://github.com/ant-design/ant-design/pull/24783) [@Jaewoook](https://github.com/Jaewoook)
- π Add less variable `@table-font-size`, `@table-font-size-md` and `@table-font-size-sm` to customize the size of Table text. [#24714](https://github.com/ant-design/ant-design/pull/24714) [@morenyang](https://github.com/morenyang)
- RTL
  - π Optimize Tabs dropdown style in RTL. [#24715](https://github.com/ant-design/ant-design/pull/24715)
  - π Add `Modal.method()` RTL supports only use hooks. [#24682](https://github.com/ant-design/ant-design/pull/24682)
  - π Fix Badge offset in RTL. [#24724](https://github.com/ant-design/ant-design/pull/24724)

## 4.3.1

`2020-06-02`

- Tabs
  - π Fix Tabs `hideAdd` not working. [#24621](https://github.com/ant-design/ant-design/pull/24621)
  - π Fix Tabs dropdown has extra horizontal scrollbar in Firefox. [#24677](https://github.com/ant-design/ant-design/pull/24677)
  - π Fix Tabs inkbar border lost when use with `react-sticky`. [#24643](https://github.com/ant-design/ant-design/pull/24643)
  - π Adjust Tabs `tabBarStyle` style display. [#24620](https://github.com/ant-design/ant-design/pull/24620)
- Button
  - π Fix Button quick set `loading` from `delay` to `false` will still change to the loading status. [#24678](https://github.com/ant-design/ant-design/pull/24678)
  - π Fix the inconsistent style of Text Button in `danger`. [#24622](https://github.com/ant-design/ant-design/pull/24622) [@morenyang](https://github.com/morenyang)
- π Fix Table no showing scrollbar inside Row. [#24661](https://github.com/ant-design/ant-design/pull/24661) [@zt123123](https://github.com/zt123123)
- π Fix Drawer get `dropdownMatchSelectWidth` as dom prop warning. [#24651](https://github.com/ant-design/ant-design/pull/24651)
- π Adjust Steps to support React.Fragment with `children`. [#24644](https://github.com/ant-design/ant-design/pull/24644)
- π Fix Upload delete icon cannot be navigate via keyboard. [#24615](https://github.com/ant-design/ant-design/pull/24615) [@morenyang](https://github.com/morenyang)
- π Fix multiple Select search input cursor missing issue. [#24631](https://github.com/ant-design/ant-design/pull/24631)
- π Fix Radio.Group using `options` get `Element type is invalid` error. [#24631](https://github.com/ant-design/ant-design/pull/24631)
- RTL
  - π Adjust Notification default placement to `topLeft` in RTL. [#24632](https://github.com/ant-design/ant-design/pull/24632)
- TypeScript
  - π  Export Tabs `TabPaneProps` definition. [#24648](https://github.com/ant-design/ant-design/pull/24648)

## 4.3.0

`2020-05-31`

- π₯ Rewrite Tabs for better user experience, dom structure is changed. [#24552](https://github.com/ant-design/ant-design/pull/24552)
- π Add components [overview page](https://ant.design/components/overview). [#24491](https://github.com/ant-design/ant-design/pull/24491) [@arvinxx](https://github.com/arvinxx)
- π  Optimize dependencies to reduce overall package size. [#24584](https://github.com/ant-design/ant-design/pull/24584)
- Button
  - π New `type="text"` Button. [#22552](https://github.com/ant-design/ant-design/pull/22552)
  - π Improve button background variable usage. [#24372](https://github.com/ant-design/ant-design/pull/24372) [@morenyang](https://github.com/morenyang)
- Upload
  - π `data` could return `Promise` now. [#24546](https://github.com/ant-design/ant-design/pull/24546) [@Kermit-Xuan](https://github.com/Kermit-Xuan)
  - π Support `progress` to customize progress bar. [#24319](https://github.com/ant-design/ant-design/pull/24319) [@morenyang](https://github.com/morenyang)
  - π Fix progress bar override by accident. [#24339](https://github.com/ant-design/ant-design/pull/24339) [@morenyang](https://github.com/morenyang)
- Table
  - π Table support `rowSelection.hideSelectAll` to hide selectAll checkbox. [#24592](https://github.com/ant-design/ant-design/pull/24592) [@Kermit-Xuan](https://github.com/Kermit-Xuan)
  - π `ellipsis` support `showTitle` to config `title` show. [#24056](https://github.com/ant-design/ant-design/pull/24056) [@lijinke666](https://github.com/lijinke666)
  - π Table `columns` support `shouldCellUpdate`. [#23872](https://github.com/ant-design/ant-design/pull/23872)
- Input
  - π Input.Passowrd support custom icon. [#23792](https://github.com/ant-design/ant-design/pull/23792)
  - π Fix Input.Password still show `value` attribute in DOM after blur it. [#24535](https://github.com/ant-design/ant-design/pull/24535)
  - π Add less variable `@input-disabled-color`. [#23775](https://github.com/ant-design/ant-design/pull/23775) [@alwaysloseall](https://github.com/alwaysloseall)
- Form
  - π Fix Form.Item inline `label` collapsed when in narrow space. [#24531](https://github.com/ant-design/ant-design/pull/24531)
  - π Fix Form.List field status sync logic and add a nest fields demo. [#24009](https://github.com/ant-design/ant-design/pull/24009)
  - π Form support `validateTrigger` to config children fields validate trigger. [#23972](https://github.com/ant-design/ant-design/pull/23972)
- Menu
  - π Adjust text shows the first character when Menu is collapsed in `inline` mode. [#24330](https://github.com/ant-design/ant-design/pull/24330)
  - π Menu.Item support `danger` prop. [#23785](https://github.com/ant-design/ant-design/pull/23785)
- Avatar
  - π Avatar support `gap` to set the unit distance between left and right sides. [#24357](https://github.com/ant-design/ant-design/pull/24357)
  - π Fix Avatar `onError` trigger twice. [#24506](https://github.com/ant-design/ant-design/pull/24506) [@sanonz](https://github.com/sanonz)
- Typography
  - π Support Typography.Paragraph custom expand style. [#24385](https://github.com/ant-design/ant-design/pull/24385) [@fireairforce](https://github.com/fireairforce)
  - π Typography.Text support `keyboard` style. [#24195](https://github.com/ant-design/ant-design/pull/24195)
  - π Add Link component. [#24019](https://github.com/ant-design/ant-design/pull/24019)
  - π Fix Typography `title` prop support. [#24440](https://github.com/ant-design/ant-design/pull/24440) [@Kermit-Xuan](https://github.com/Kermit-Xuan)
- π Tooltip support `color` to config background color. [#23155](https://github.com/ant-design/ant-design/pull/23155)
- π Popconfirm can be closed by pressing `ESC` now. [#24420](https://github.com/ant-design/ant-design/pull/24420)
- π Tooltip `destroyTooltipOnHide` support `keepParent` config. [#24362](https://github.com/ant-design/ant-design/pull/24362) [@Kermit-Xuan](https://github.com/Kermit-Xuan)
- π Notification support to config `prefixCls`. [#24295](https://github.com/ant-design/ant-design/pull/24295) [@tdida](https://github.com/tdida)
- π RangePicker `dateRender` support additional argument to detect is `start` or `end` field. [#24278](https://github.com/ant-design/ant-design/pull/24278)
- π Skeleton add `round` prop to enable paragraph and title show radius. [#24137](https://github.com/ant-design/ant-design/pull/24137) [@xilihuasi](https://github.com/xilihuasi)
- π Transfer support `oneWay` and `pagination`. [#24041](https://github.com/ant-design/ant-design/pull/24041)
- π Message support customize `className` and `style`. [#24024](https://github.com/ant-design/ant-design/pull/24024) [@Kermit-Xuan](https://github.com/Kermit-Xuan)
- π ConfigProvider support `virtual` and `dropdownMatchSelectWidth`. [#23841](https://github.com/ant-design/ant-design/pull/23841) [@hengkx](https://github.com/hengkx)
- π Fix Breadcrumb icon margin missing when using links. [#24490](https://github.com/ant-design/ant-design/pull/24490) [@EscapeB](https://github.com/EscapeB)
- π Fix Cascader expand icon color when disabled. [#24521](https://github.com/ant-design/ant-design/pull/24521)
- π Fix List warning about `React does not recognize colStyle prop`. [#24568](https://github.com/ant-design/ant-design/pull/24568)
- π Fix Progress with `steps` don't update `percent` expectedly. [#24534](https://github.com/ant-design/ant-design/pull/24534) [@ChuckJonas](https://github.com/ChuckJonas)
- π Fix Steps `subtitle` transition style. [#24593](https://github.com/ant-design/ant-design/pull/24593)
- π Fix Alert close icon `padding` style. [#24471](https://github.com/ant-design/ant-design/pull/24471)
- π Fix Tree `@tree-directory-selected-bg` don't work. [#24468](https://github.com/ant-design/ant-design/pull/24468) [@morenyang](https://github.com/morenyang)
- π Fix `@ant-prefix` don't work on some styles. [#24459](https://github.com/ant-design/ant-design/pull/24459) [@morenyang](https://github.com/morenyang)
- π Descriptions add less variables `@descriptions-item-trailing-colon` and etc. [#24032](https://github.com/ant-design/ant-design/pull/24032) [@hengkx](https://github.com/hengkx)
- π Localization
  - π?πͺ Add Irish(ga_IE) locale. [#24609](https://github.com/ant-design/ant-design/pull/24609) [@AbhijeetGaware](https://github.com/AbhijeetGaware)
  - π«π? Improve Typography `fi_FI` locale. [#24591](https://github.com/ant-design/ant-design/pull/24591) [@sagge](https://github.com/sagge)
  - π§π· Improve `pt_BR` locale. [#24518](https://github.com/ant-design/ant-design/pull/24518) [@arturpfb](https://github.com/arturpfb)
  - π¬π§ Improve Form `en_GB` locale. [#24404](https://github.com/ant-design/ant-design/pull/24404) [@morenyang](https://github.com/morenyang)
- RTL
  - π Optimize Tree checkbox style in RTL. [#24563](https://github.com/ant-design/ant-design/pull/24563)
  - π Optimize Calendar notice content text style in RTL. [#24528](https://github.com/ant-design/ant-design/pull/24528)
  - π Optimize Table filter dropdown style in RTL. [#24529](https://github.com/ant-design/ant-design/pull/24529)
  - π Fix Cascader dropdown style in RTL. [#24520](https://github.com/ant-design/ant-design/pull/24520)
- TypeScript
  - π  Form export `RuleObject` and `RuleRender` types. [#24541](https://github.com/ant-design/ant-design/pull/24541) [@sorteam](https://github.com/sorteam)

## 4.2.5

`2020-05-25`

- π Fix Table selection arrow out of column when `size` is `small/middle`. [#24394](https://github.com/ant-design/ant-design/pull/24394)
- π Fix Input.TextArea clear icon disappears in Input.Group when hover it. [#24360](https://github.com/ant-design/ant-design/pull/24360) [@Mr-jiangzhiguo](https://github.com/Mr-jiangzhiguo)
- π Fixed an issue where the `RowSelection.onChange` will still be cached when the Table removes entries in `dataSource`. [#24338](https://github.com/ant-design/ant-design/pull/24338)
- π Adjust `useNotification` api instance to be same instance for each render. [#24337](https://github.com/ant-design/ant-design/pull/24337)
- π Fix Button `loading` transition animation missing and Modal `confirmLoading` not being reset. [#24328](https://github.com/ant-design/ant-design/pull/24328)
- π Fix Drawer cover background elements when it is not visible. [#24290](https://github.com/ant-design/ant-design/pull/24290)
- π Fix Cascader/Select/Table/TreeSelect text color when data empty. [#24279](https://github.com/ant-design/ant-design/pull/24279)
- π Fix InputNumber operation button arrow is not centered. [#24266](https://github.com/ant-design/ant-design/pull/24266)
- π Fix Table with empty array `filteredValue` still highlight the filtered icon. [#24263](https://github.com/ant-design/ant-design/pull/24263)
- π Fix Cascader not support `number[]` value. [#24247](https://github.com/ant-design/ant-design/pull/24247)
- β¨οΈ Fix Switch `autoFocus` trigger when `disabled` removed. Adjust style to avoid switch shaking. Remove blur logic when `onMouseUp` to improve acessibility. [#24254](https://github.com/ant-design/ant-design/pull/24254)
- π Add Menu default `text-align` style. [#24253](https://github.com/ant-design/ant-design/pull/24253)
- π  Refactor List code. [#24280](https://github.com/ant-design/ant-design/pull/24280) [@hengkx](https://github.com/hengkx)
- π  Modify the Alert with hooks to support strict mode. [#24236](https://github.com/ant-design/ant-design/pull/24236) [@hengkx](https://github.com/hengkx)
- πFix Card performance bug when use with `react-split`. [#24425](https://github.com/ant-design/ant-design/pull/24425)
- TypeScript
  - π Cascader ts definition update. [#24393](https://github.com/ant-design/ant-design/pull/24393) [@zhangyu1818](https://github.com/zhangyu1818)
  - π Fix TS error of `Could not find a declaration rc-upload`. [#24325](https://github.com/ant-design/ant-design/pull/24325)
  - π  Add children type to BackTop. [#24235](https://github.com/ant-design/ant-design/pull/24235)

## 4.2.4

`2020-05-18`

- π Revert Switch patch to fix handle position style issue with `unCheckedChildren`. [#24242](https://github.com/ant-design/ant-design/pull/24242)
- π Adjust Upload icon default color to red in error status. [#24160](https://github.com/ant-design/ant-design/pull/24160)
- π Adjust Dropdown arrow position a little higher. [#24215](https://github.com/ant-design/ant-design/pull/24215)
- π Form `defaultValidateMessages` support `ru_RU`. [#24219](https://github.com/ant-design/ant-design/pull/24219) [@aivinog1](https://github.com/aivinog1)

## 4.2.3

`2020-05-16`

- π Refactor `rc-progress` to resolve `h3g is not defined` error in `<script src="antd.min.js" />`. [#24127](https://github.com/ant-design/ant-design/pull/24127)
- π Rewrote [Use in create-react-app](https://ant.design/docs/react/use-with-create-react-app). [#24184](https://github.com/ant-design/ant-design/pull/24184)
- Drawer
  - π Fix Drawer `getContainer={false}` height overflow issue. [#24082](https://github.com/ant-design/ant-design/pull/24082)
  - π Fix Drawer `mask={false}` animation not working. [#24082](https://github.com/ant-design/ant-design/pull/24082)
- BackTop
  - π  Refactor BackTop with hooks. [#23575](https://github.com/ant-design/ant-design/pull/23575)
  - π Fix BackTop not working in iframe of Chrome. [#24194](https://github.com/ant-design/ant-design/pull/24194)
- DatePicker
  - π Fix DatePicker with `showToday` not working with `disabledDate`. [#24190](https://github.com/ant-design/ant-design/pull/24190)
  - π Fix DatePicker `renderExtraFooter` with long content exceed content width. [#24145](https://github.com/ant-design/ant-design/pull/24145)
- Button
  - π Fix small Button align issue when customize theme. [#24097](https://github.com/ant-design/ant-design/pull/24097)
  - π Fix Button children not working with Tooltip. [#24095](https://github.com/ant-design/ant-design/pull/24095)
- π  Refactor Tooltip with hooks. [#23699](https://github.com/ant-design/ant-design/pull/23699)
- π Avoid `disabled` Upload.Dragger being triggered by clicking Form `label`. [#24202](https://github.com/ant-design/ant-design/pull/24202)
- π Fix Select selected option not interactive (such as `title` not working). [#24170](https://github.com/ant-design/ant-design/pull/24170)
- π Fix Switch shake in Safari and iOS Chrome. [#24122](https://github.com/ant-design/ant-design/pull/24122) [@lexlexa](https://github.com/lexlexa)
- π Carousel upgrade to `react-slick@0.26.1` to resolve some problems. [#24067](https://github.com/ant-design/ant-design/pull/24067)
- π Cascader will display `defaultValue` instead of empty string when no matched options. [#24058](https://github.com/ant-design/ant-design/pull/24058) [@Kermit-Xuan](https://github.com/Kermit-Xuan)
- π Improve `zh_TW` localisations. [#24065](https://github.com/ant-design/ant-design/pull/24065) [@wx1322](https://github.com/wx1322)
- π Fix Table `onChange` pagination type. [#24114](https://github.com/ant-design/ant-design/pull/24114) [@sorteam](https://github.com/sorteam)
- π Add less variable `@card-head-extra-color`. [#24189](https://github.com/ant-design/ant-design/pull/24189)
- π Adjust Pagination simple mode background to transparent. [#24152](https://github.com/ant-design/ant-design/pull/24152)
- π Fix dark Menu link color. [#24110](https://github.com/ant-design/ant-design/pull/24110)
- RTL
  - π Fix Dropdown.Button default menu placement in RTL. [#24150](https://github.com/ant-design/ant-design/pull/24150)
  - π Fix Menu `border` in RTL. [#24101](https://github.com/ant-design/ant-design/pull/24101)
  - π Optimize Select multiple tag style in RTL. [#24112](https://github.com/ant-design/ant-design/pull/24112)
  - π Optimize Typography `expand` style in RTL. [#24084](https://github.com/ant-design/ant-design/pull/24084)
  - π Optimize Pagination slash style in RTL. [#24154](https://github.com/ant-design/ant-design/pull/24154)

## 4.2.2

`2020-05-11`

- π Fix `npm run version` install error. [#24059](https://github.com/ant-design/ant-design/pull/24059)
- π Fix Menu `@menu-item-font-size` not working. [#24052](https://github.com/ant-design/ant-design/pull/24052)
- π Add `@modal-close-color` less variable. [#24053](https://github.com/ant-design/ant-design/pull/24053)

## 4.2.1

`2020-05-11`

- Form
  - π Fix Form.Item get React warning for `getValueProps`. [#23875](https://github.com/ant-design/ant-design/pull/23875)
  - π Fix Form.Item `help` style issue when `validateStatus` is not `error`. [#23945](https://github.com/ant-design/ant-design/pull/23945)
- Table
  - π Fix selection column width issue when fix header. [#23806](https://github.com/ant-design/ant-design/pull/23806)
  - π Adjust selection column css selector priority to enable customize width. [#23914](https://github.com/ant-design/ant-design/pull/23914)
- DatePicker
  - π Fix miss placeholder when `placeholder` is `undefined`. [#23818](https://github.com/ant-design/ant-design/pull/23818)
  - π Fix clear icon color style. [#23811](https://github.com/ant-design/ant-design/pull/23811)
- Switch
  - π Fix loading style for the dark theme. [#23766](https://github.com/ant-design/ant-design/pull/23766) [@vsn4ik](https://github.com/vsn4ik)
  - π Fix `unCheckedChildren` not showing. [#23791](https://github.com/ant-design/ant-design/pull/23791)
- π Fix Upload error message location to scroll in the float layer. [#24001](https://github.com/ant-design/ant-design/pull/24001) [@mraiguo](https://github.com/mraiguo)
- π Tweak Comment render unnecessary div style when `avatar` is empty. [#23994](https://github.com/ant-design/ant-design/pull/23994) [@Xuhao](https://github.com/Xuhao)
- π Fix Select `focus` border style in Input.Group. [#23985](https://github.com/ant-design/ant-design/pull/23985)
- π Fix Steps `subTitle` showing `[object Object]` title. [#23989](https://github.com/ant-design/ant-design/pull/23989)
- π Tweak Select close icon position. [#23963](https://github.com/ant-design/ant-design/pull/23963)
- π Fix Drawer `width="50%"` hidden problem when no mask. [#23925](https://github.com/ant-design/ant-design/pull/23925)
- π Fix Textarea with `allowClear` has error height style. [#23835](https://github.com/ant-design/ant-design/pull/23835)
- π Adjust Modal.xxx function async to avoid block React events. [#23826](https://github.com/ant-design/ant-design/pull/23826)
- π Fix Menu with controlled `openKeys` abnormal behavior when `inlineCollapsed` changed. [#23822](https://github.com/ant-design/ant-design/pull/23822)
- π Fix Button `loading` animation. [#23783](https://github.com/ant-design/ant-design/pull/23783)
- π Fix Slider `marks` selected problem when dragging. [#23773](https://github.com/ant-design/ant-design/pull/23773)
- π  Timeline refactors with React Hooks. [#23631](https://github.com/ant-design/ant-design/pull/23631) [@hengkx](https://github.com/hengkx)
- π Localization
  - π?π· Add Farsi `fa_IR` default locale template localisations. [#23926](https://github.com/ant-design/ant-design/pull/23926) [@NarimanMov](https://github.com/NarimanMov)
  - πΊπΈ Add default `en` default locale template localisations for Form. [#23859](https://github.com/ant-design/ant-design/pull/23859) [@mjfwebb](https://github.com/mjfwebb)
- π¦ Reduce bundle size
  - π Reduce bundle size via removing `react-lifecycles-compat`. [#23969](https://github.com/ant-design/ant-design/pull/23969)
  - π  Reduce bundle size via excluding `package.json` from source code. [#23957](https://github.com/ant-design/ant-design/pull/23957)
  - π  Upgrade `rc-animate` to 3.x to reduce bundle size. [#23937](https://github.com/ant-design/ant-design/pull/23937)
- RTL
  - π Fix Input clear icon style in RTL. [#23999](https://github.com/ant-design/ant-design/pull/23999)
  - π Fix DatePicker panel style in RTL. [#24028](https://github.com/ant-design/ant-design/pull/24028) [@xrkffgg](https://github.com/xrkffgg)
  - π Optimize DatePicker active bar style in `RTL`. [#23981](https://github.com/ant-design/ant-design/pull/23981)
  - π Fix Transfer search padding style in `RTL`. [#23962](https://github.com/ant-design/ant-design/pull/23962)
  - π Optimize Layout style of RTL. [#23921](https://github.com/ant-design/ant-design/pull/23921)
  - π Optimize Button `loading` style in RT. [#23776](https://github.com/ant-design/ant-design/pull/23776)
  - π Optimize Input.Search style in RTL. [#23797](https://github.com/ant-design/ant-design/pull/23797)
- TypeScript
  - π Fix InputNumber `onChange` type. [#23871](https://github.com/ant-design/ant-design/pull/23871) [@jjhbw](https://github.com/jjhbw)

## 4.2.0

`2020-04-29`

- π List `grid` support all column count like 5. [#23630](https://github.com/ant-design/ant-design/pull/23630)
- π Divider add `plain` prop which allows a non-heading style divider text. [#23405](https://github.com/ant-design/ant-design/pull/23405)
- π Typography `ellipsis` support `onEllipsis` event handler. [#23414](https://github.com/ant-design/ant-design/pull/23414)
- π Space support `align` prop. [#23306](https://github.com/ant-design/ant-design/pull/23306)
- π Upload support `isImageUrl` to force trade file as image. [#23248](https://github.com/ant-design/ant-design/pull/23248) [@onjuju](https://github.com/onjuju)
- π Form.Item support `initialValue` and `getValueProps` props. [#22993](https://github.com/ant-design/ant-design/pull/22993)
- ConfigProvider
  - π ConfigProvider support `getTargetContainer` to config Affix `target` props. [#23751](https://github.com/ant-design/ant-design/pull/23751)
  - π ConfigProvider support `input` prop to config Input `autoComplete`. [#23455](https://github.com/ant-design/ant-design/pull/23455)
  - π Fix ConfigProvider `getPopupContainer` not working on DatePicker and Slider. [#23594](https://github.com/ant-design/ant-design/pull/23594) [@hengkx](https://github.com/hengkx)
- Table
  - π Table `summary` support fixed columns. [#23647](https://github.com/ant-design/ant-design/pull/23647)
  - π Table support responsive columns. [#23298](https://github.com/ant-design/ant-design/pull/23298) [@vbudovski](https://github.com/vbudovski)
  - π Fix Table pagination default position in RTL. [#23747](https://github.com/ant-design/ant-design/pull/23747)
  - π Fix Table crash when `pageSize` is `undefined`. [#23724](https://github.com/ant-design/ant-design/pull/23724)
  - π fix Table nested margin when size is `small` or `middle`. [#23602](https://github.com/ant-design/ant-design/pull/23602) [@hengkx](https://github.com/hengkx)
- π Fix RangePicker `ranges` tag color to primary color. [#23705](https://github.com/ant-design/ant-design/pull/23705)
- π Fix Transfer with custom empty style issue. [#23694](https://github.com/ant-design/ant-design/pull/23694) [@hengkx](https://github.com/hengkx)
- Input
  - π Fix Password caret position. [#23633](https://github.com/ant-design/ant-design/pull/23633) [@huntdream](https://github.com/huntdream)
  - π Adjust Input.Search icon style. [#23406](https://github.com/ant-design/ant-design/pull/23406)
- Button
  - π Fix Button align problem of icon only. [#23671](https://github.com/ant-design/ant-design/pull/23671)
  - π Fix Button of icon only wrong `loading` style. [#23614](https://github.com/ant-design/ant-design/pull/23614)
  - π fix Button cannot be directly called by `react-dnd`. [#23571](https://github.com/ant-design/ant-design/pull/23571) [@hengkx](https://github.com/hengkx)
- Menu
  - π Menu Item and SubMenu support `icon` prop. [#23629](https://github.com/ant-design/ant-design/pull/23629)
  - π Fix Menu duplicated shadow style. [#23664](https://github.com/ant-design/ant-design/pull/23664)
- π Fix Tag cannot be directly called by `react-dnd`. [#23632](https://github.com/ant-design/ant-design/pull/23632) [@hengkx](https://github.com/hengkx)
- Anchor
  - π Fix Anchor Link with multiple `#` can not jump correctly. [#23595](https://github.com/ant-design/ant-design/pull/23595) [@wuzekang](https://github.com/wuzekang)
  - π Fix Input with `suffix` align problem. [#23606](https://github.com/ant-design/ant-design/pull/23606)
- π Select arrow won't rotate when open. [#23468](https://github.com/ant-design/ant-design/pull/23468)
- π Rate support `direction`. [#23321](https://github.com/ant-design/ant-design/pull/23321)
- π Adjust font-size in compact mode. [#23135](https://github.com/ant-design/ant-design/pull/23135)
- RTL
  - π Optimize Result button style in RTL. [#23733](https://github.com/ant-design/ant-design/pull/23733)
  - π Add Divider RTL support. [#23734](https://github.com/ant-design/ant-design/pull/23734)
  - π Fix Alert style in RTL when no-icon. [#23714](https://github.com/ant-design/ant-design/pull/23714)
  - π Optimize Table expand animation and pagination style in RTL. [#23706](https://github.com/ant-design/ant-design/pull/23706)
  - π Fix Table filter dropdown position in RTL. [#23695](https://github.com/ant-design/ant-design/pull/23695)
  - π Fix Table rowSelect icon style in RTL. [#23690](https://github.com/ant-design/ant-design/pull/23690)
  - π Optimize List style in RTL. [#23676](https://github.com/ant-design/ant-design/pull/23676)
  - π Add Calendar RTL. [#23394](https://github.com/ant-design/ant-design/pull/23394)
  - π Optimize Input.Search style in RTL. [#23424](https://github.com/ant-design/ant-design/pull/23424)
  - π Add Notification RTL config. [#23185](https://github.com/ant-design/ant-design/pull/23185)
- TypeScript
  - π Fix PageHeader `tag` definition. [#23712](https://github.com/ant-design/ant-design/pull/23712) [@hengkx](https://github.com/hengkx)
  - π Remove Button deprecated `type="danger"` TypeScript definition and warn it. [#23709](https://github.com/ant-design/ant-design/pull/23709)
  - π Fix Table pagination `position` definition. [#23681](https://github.com/ant-design/ant-design/pull/23681) [@hengkx](https://github.com/hengkx)

## 4.1.5

`2020-04-25`

- π Fix Button.Group align style. [#23590](https://github.com/ant-design/ant-design/pull/23590)
- π Fix Select cannot trigger open by clicking arrow icon. [#23448](https://github.com/ant-design/ant-design/pull/23448)
- π Fix Form fields shake when `@form-item-margin-bottom` is customize and switching the validing info. [#23436](https://github.com/ant-design/ant-design/pull/23436) [@yoyo837](https://github.com/yoyo837)
- π Fix the first Divider render differently with others. [#23438](https://github.com/ant-design/ant-design/pull/23438)
- π Fix nest ConfigProvider missing `prefixCls` value. [#23423](https://github.com/ant-design/ant-design/pull/23423)
- π Fix Carousel tabbed Radio/Checkbox to non-active slide. [#23380](https://github.com/ant-design/ant-design/pull/23380)
- π Fix Tree with virtual scroll frozen by quick `loadData`. [#23581](https://github.com/ant-design/ant-design/pull/23581)
- π Fix Steps style in IE11 when direction is vertical. [#23561](https://github.com/ant-design/ant-design/pull/23561) [@AdrianoRuberto](https://github.com/AdrianoRuberto)
- π Fix Input.Search height affected by `suffix` and `react key` warning. [#23527](https://github.com/ant-design/ant-design/pull/23527)
- π Fix Menu behavior when hover on submenu gap. [#23511](https://github.com/ant-design/ant-design/pull/23511)
- π Fix Tree custom icon missing when node is loading data. [#23494](https://github.com/ant-design/ant-design/pull/23494)
- RTL
  - π Fix Alert RTL style when set both `showIcon` and `closable`. [#23526](https://github.com/ant-design/ant-design/pull/23526)
  - π Fix Button RTL style when loading. [#23399](https://github.com/ant-design/ant-design/pull/23399)
  - π Fix Collapse that icon position is incorrect in RTL. [#23445](https://github.com/ant-design/ant-design/pull/23445)
  - π Fix Select group label style in RTL. [#23404](https://github.com/ant-design/ant-design/pull/23404)
  - π Fix Statistic RTL style. [#23397](https://github.com/ant-design/ant-design/pull/23397)
- TypeScript
  - π Fix type definition of `selections` for Table. [#23462](https://github.com/ant-design/ant-design/pull/23462) [@xiaoxintang](https://github.com/xiaoxintang)

## 4.1.4

`2020-04-18`

- π Fix dark theme and compact theme not working. [#23243](https://github.com/ant-design/ant-design/pull/23243)
- π Fix Modal.info executed only once when has argument. [#23360](https://github.com/ant-design/ant-design/pull/23360)
- π Fix Dropdown submenu background missing. [#23296](https://github.com/ant-design/ant-design/pull/23296)
- π Optimize PageHeader responsive behavior. [#23277](https://github.com/ant-design/ant-design/pull/23277)
- π Fix TreeSelect render blank in compact mode. [#23231](https://github.com/ant-design/ant-design/pull/23231)
- π Fix Checkbox and Switch console warning typo (validate -> a valid). [#23240](https://github.com/ant-design/ant-design/pull/23240) [@evancharlton](https://github.com/evancharlton)
- π Fix Table `rowSelection` params issue when `childrenColumnName` configured. [#23205](https://github.com/ant-design/ant-design/pull/23205)
- Input
  - π Fix Input `type="color"` height issue. [#23351](https://github.com/ant-design/ant-design/pull/23351)
  - π Fix Input width shaking when trigger clear icon. [#23259](https://github.com/ant-design/ant-design/pull/23259)
  - π Fix Input.Search `size` not affected by ConfigProvider `componentSize`. [#23331](https://github.com/ant-design/ant-design/pull/23331)
- Select
  - π Fix multiple Select show remove icon when `disabled`. [#23295](https://github.com/ant-design/ant-design/pull/23295)
  - π Fix Select custom `suffixIcon` cannot be access. [#23274](https://github.com/ant-design/ant-design/pull/23274)
  - π Fix Select search input caret missing in Collapse. [#23250](https://github.com/ant-design/ant-design/pull/23250)
- Globalization
  - π¨π³ Form validation messages support internalization and add zh_CN locale. [#23165](https://github.com/ant-design/ant-design/pull/23165) [@hengkx](https://github.com/hengkx)
  - π Add missing translations in he_IL. [#23302](https://github.com/ant-design/ant-design/pull/23302) [@MishaKav](https://github.com/MishaKav)
  - π Add missing translations in ru_RU. [#23303](https://github.com/ant-design/ant-design/pull/23303) [@MishaKav](https://github.com/MishaKav)
- TypeScript
  - π· Form.Item type upgrade. [#22962](https://github.com/ant-design/ant-design/pull/22962) [@fa93hws](https://github.com/fa93hws)
  - π· Tree type upgrade. [#23348](https://github.com/ant-design/ant-design/pull/23348) [@yoyo837](https://github.com/yoyo837)
  - π Pass `popupClassName` prop to `rc-picker`. [#23214](https://github.com/ant-design/ant-design/pull/23214) [@tanmoyopenroot](https://github.com/tanmoyopenroot)
- RTL
  - π Fix Select RTL style. [#23235](https://github.com/ant-design/ant-design/pull/23235)
  - π Fix Menu RTL style. [#23319](https://github.com/ant-design/ant-design/pull/23319)

## 4.1.3

`2020-04-13`

- π Adjust Form.Item `label` height style in vertical layout. [#23192](https://github.com/ant-design/ant-design/pull/23192)
- π Fix `Variable is undefined` when importing dark or compact theme and provide a `getThemeVariables` methold for getting theme variables easily. [#23171](https://github.com/ant-design/ant-design/pull/23171)
- π Fix PageHeader style breaks when `title` is too long and improve it's responsive design. [#23133](https://github.com/ant-design/ant-design/pull/23133)
- Tabs
  - π Fix Tabs `@tabs-card-height` less variable not working. [#23168](https://github.com/ant-design/ant-design/pull/23168)
  - π Fix Tabs cannot be displayed in Safari 13. [#23151](https://github.com/ant-design/ant-design/pull/23151) [@imhxc](https://github.com/imhxc)
- Table
  - π Fix Table fixed columns cannot pin in Safari 12. [#23161](https://github.com/ant-design/ant-design/pull/23161)
  - π Fix Table `summary` padding in small size. [#23140](https://github.com/ant-design/ant-design/pull/23140) [@someyoungideas](https://github.com/someyoungideas)
- π Fix Select align style with different size. [#23160](https://github.com/ant-design/ant-design/pull/23160)
- π Fix RangePicker under Input.Group style issue. [#23149](https://github.com/ant-design/ant-design/pull/23149)
- π Fix Pagination missing TypeScript definition of `showTitle`. [#23144](https://github.com/ant-design/ant-design/pull/23144) [@DongchengWang](https://github.com/DongchengWang)

## 4.1.2

`2020-04-10`

- Menu
  - π Fix Menu SubMenu background in dark mode. [#22981](https://github.com/ant-design/ant-design/pull/22981) [@AshoneA](https://github.com/AshoneA)
  - π Fix long SubMenu title being overlayed by arrow icon. [#23028](https://github.com/ant-design/ant-design/pull/23028) [@wwyx778](https://github.com/wwyx778)
- π Fix dark and compact theme cannot work together. [#22934](https://github.com/ant-design/ant-design/pull/22934) [@AshoneA](https://github.com/AshoneA)
- π Fix Notification invalid `paddig-top` value. [#22941](https://github.com/ant-design/ant-design/pull/22941)
- Button
  - π Fix Button `loading` animation with icon. [#23102](https://github.com/ant-design/ant-design/pull/23102)
  - β οΈ Improve Button invalid `type` warning. [#22933](https://github.com/ant-design/ant-design/pull/22933) [@fa93hws](https://github.com/fa93hws)
- π Fix Statistic show `-0` when value is `-`. [@22950](https://github.com/ant-design/ant-design/pull/22950)
- π Fix Modal.confirm `onOk` should not be triggered multiple times. [#22963](https://github.com/ant-design/ant-design/pull/22963)
- Input
  - π Fix Input.Group Button style not aligned center. [#22975](https://github.com/ant-design/ant-design/pull/22975)
  - π Fix Input with `affix` background style in dark theme. [#23115](https://github.com/ant-design/ant-design/pull/23115)
- π Fix Form.Item not correct reset error style when dynamic switch Form.Item. [#23041](https://github.com/ant-design/ant-design/pull/23041)
- π Adjust RangePicker arrow & suffix color style. [#23025](https://github.com/ant-design/ant-design/pull/23025)
- Table
  - π Fix Table selection row with hover background style. [#23110](https://github.com/ant-design/ant-design/pull/23110)
  - π Tweak Table hover background color. [#23113](https://github.com/ant-design/ant-design/pull/23113)
  - β οΈ Table add warning info when async mode `dataSource` length not match with `pageSize`. [#23118](https://github.com/ant-design/ant-design/pull/23118)
- Select
  - π Match mulitiple Select cursor position to single Select. [#22978](https://github.com/ant-design/ant-design/pull/22978)
  - π Fix borderless Select still show border when Form.Item set `validateStatus`. [#23004](https://github.com/ant-design/ant-design/pull/23004)
  - π Fix Select style in IE11. [#23020](https://github.com/ant-design/ant-design/pull/23020)
- π Fix Calendar missing `style` prop support. [#23081](https://github.com/ant-design/ant-design/pull/23081)
- π Fix Tabs bottom card active tab wrong height style. [#23087](https://github.com/ant-design/ant-design/pull/23087)
- π Fix RTL support of Anchor, Select, DatePicker, Grid, Mentions. [@xrkffgg](https://github.com/xrkffgg)
- TypeScript
  - π Upload `UploadProps` support generic typing. [#22921](https://github.com/ant-design/ant-design/pull/22921) [@dpyzo0o](https://github.com/dpyzo0o)
  - π Fix Modal.confirm `okButtonProps` types. [#21165](https://github.com/ant-design/ant-design/pull/21165) [@nicu-chiciuc](https://github.com/nicu-chiciuc)
  - π Export Form `Store` interface. [#22755](https://github.com/ant-design/ant-design/pull/22755) [@shaodahong](https://github.com/shaodahong)
  - π Improve enum types for Input, Tag, Badge. [#23026](https://github.com/ant-design/ant-design/pull/23026) [#22999](https://github.com/ant-design/ant-design/pull/22999) [#23006](https://github.com/ant-design/ant-design/pull/23006) [@fjc0k](https://github.com/fjc0k)
  - π Fix Pagination `position` type. [#23048](https://github.com/ant-design/ant-design/pull/23048) [@Arttse](https://github.com/Arttse)

## 4.1.1

`2020-04-05`

- π Fix Tabs panel focus outline style. [#22752](https://github.com/ant-design/ant-design/pull/22752) [@MrHeer](https://github.com/MrHeer)
- π Fix Input affix with popup element can not get click focus. [#22887](https://github.com/ant-design/ant-design/pull/22887)
- Table
  - π Table row selection dropdown support `getPopupContainer`. [#22787](https://github.com/ant-design/ant-design/pull/22787) [@mikeyshing88](https://github.com/mikeyshing88)
  - π Fix Table header size with filter or sorter when `size` is configured. [#22872](https://github.com/ant-design/ant-design/pull/22872)
  - π Adjust nest Table style, compact only when just one table element. [#22868](https://github.com/ant-design/ant-design/pull/22868)
  - π Fix Table column `align` not working on head when `sorter` configured. [#22858](https://github.com/ant-design/ant-design/pull/22858)
  - π Fix Table filter config not work on jsx structure. [#22888](https://github.com/ant-design/ant-design/pull/22888)
  - π Adjust Table expanded row not fix width when scroll only. [#22832](https://github.com/ant-design/ant-design/pull/22832)
  - π Fix the column can't show when the `column.children` is `undefined`. [#22832](https://github.com/ant-design/ant-design/pull/22832)
  - π Fix Table still show filter icon when `filters` is `undefined`. [#22833](https://github.com/ant-design/ant-design/pull/22833)
  - π Fix Table unchanged `filters` should not trigger `onChange`. [#22829](https://github.com/ant-design/ant-design/pull/22829)
  - π Fix Table loading compatibility. [#22739](https://github.com/ant-design/ant-design/pull/22739)
  - π Fix Table scroll shadow style in Safari. [#22794](https://github.com/ant-design/ant-design/pull/22794)
- π Adjust RangePicker arrow style. [#22847](https://github.com/ant-design/ant-design/pull/22847)
- π Fix Text with `ellipsis` align issue. [#22836](https://github.com/ant-design/ant-design/pull/22836)
- π Tweak `@info-color` should be `@primary-color` defaultly. [#22723](https://github.com/ant-design/ant-design/pull/22723)
- π Fix BackTop not working in iframe and improve it's performance. [#22788](https://github.com/ant-design/ant-design/pull/22788)
- π Fix Select inconsistent height when `mode="multiple"` and `size="large" />`. [#22904](https://github.com/ant-design/ant-design/pull/22904)
- π Fix Radio less variable. [#22803](https://github.com/ant-design/ant-design/pull/22803) [@yoyo837](https://github.com/yoyo837)
- π Fix Card Tabs do not support small size. [#22666](https://github.com/ant-design/ant-design/pull/22666) [@MrHeer](https://github.com/MrHeer)
- π Fix Affix throws `React warning of state update on unmounted component`. [#22790](https://github.com/ant-design/ant-design/pull/22790)
- π Fix Textarea with `clearIcon` additional `margin` in Form.Item. [#22793](https://github.com/ant-design/ant-design/pull/22793)
- π Fix List `footer` missing border when data is empty. [#22771](https://github.com/ant-design/ant-design/pull/22771)
- π Fix Slider `tooltipPlacement` option API is changed to be correct again. [#22772](https://github.com/ant-design/ant-design/pull/22772) [@phoenixeliot](https://github.com/phoenixeliot)
- π  Refactor LocaleReceiver with new context api to avoid React strict mode warning. [#22762](https://github.com/ant-design/ant-design/pull/22762)
- π Fix Radio and Checkbox required prop not passing to input. [#22761](https://github.com/ant-design/ant-design/pull/22761)
- π Fix variable `--scroll-bar` is undefined. [#22754](https://github.com/ant-design/ant-design/pull/22754) [@mikeyshing88](https://github.com/mikeyshing88)
- π Fix Menu and Spin style in compact mode. [#22908](https://github.com/ant-design/ant-design/pull/22908) [@AshoneA](https://github.com/AshoneA)
- π Fix Space item duplicate key. [#22745](https://github.com/ant-design/ant-design/pull/22745)
- π Fix Select cursor style. [#22743](https://github.com/ant-design/ant-design/pull/22743)
- π«π· DatePicker and TimePicker update French locale. [#22769](https://github.com/ant-design/ant-design/pull/22769) [@PaulJln](https://github.com/PaulJln)
- RTL
  - π Add Message RTL style. [#22513](https://github.com/ant-design/ant-design/pull/22513) [@xrkffgg](https://github.com/xrkffgg)
  - π Fix Menu RTL style. [#22841](https://github.com/ant-design/ant-design/pull/22841)
  - π Fix Radio RTL style. [#22926](https://github.com/ant-design/ant-design/pull/22926) [@AshoneA](https://github.com/AshoneA)
  - π Fix label display in Form RTL. [#22621](https://github.com/ant-design/ant-design/pull/22621) [@xrkffgg](https://github.com/xrkffgg)
  - π Fix Space RTL style. [#22809](https://github.com/ant-design/ant-design/pull/22809) [@xrkffgg](https://github.com/xrkffgg)
- TypeScript
  - π Fix Table `FilterDropdownProps` TypeScript definition. [#22895](https://github.com/ant-design/ant-design/pull/22895) [@zhangyu1818](https://github.com/zhangyu1818)
  - π Fix Form `Store` and `StoreValue` TypeScript definition. [#22755](https://github.com/ant-design/ant-design/pull/22755) [@shaodahong](https://github.com/shaodahong)

## 4.1.0

`2020-03-29`

- π₯ Support compact mode theme. [#22126](https://github.com/ant-design/ant-design/pull/22126) [@AshoneA](https://github.com/AshoneA)
- π₯ New Space component to resolve inline component margin style. [#22363](https://github.com/ant-design/ant-design/pull/22363)
- π₯ DatePicker support quarter picker. [#22468](https://github.com/ant-design/ant-design/pull/22468)
- π Tree/TreeSelect/Select support `virtual` prop to disable virtual scroll. [#21955](https://github.com/ant-design/ant-design/pull/21955)
- π Improve Pagination switch experience. [#22711](https://github.com/ant-design/ant-design/pull/22711)
  - Pagination will show size changer when `total > 50`.
  - Unify Pagination items to fixed length.
  - Change default size options to `10, 20, 50, 100`.
- Table
  - π Table pagination `position` add more option. [#22647](https://github.com/ant-design/ant-design/pull/22647) [@hengkx](https://github.com/hengkx)
  - π Table selection column support `renderCell`. [#21711](https://github.com/ant-design/ant-design/pull/21711)
  - π Table sorter adding hint tooltip and a new prop `showSorterTooltip`. [#21631](https://github.com/ant-design/ant-design/pull/21631) [@AshoneA](https://github.com/AshoneA)
- π Tag component support `icon` prop. [#22418](https://github.com/ant-design/ant-design/pull/22418) [@vtsybulin](https://github.com/vtsybulin)
- π Grid add `useBreakpoint` hook. [#22226](https://github.com/ant-design/ant-design/pull/22226)
- π Card support `tabProps`. [#22207](https://github.com/ant-design/ant-design/pull/22207)
- π Pagination add `autoResize` prop. [#21959](https://github.com/ant-design/ant-design/pull/21959) [@wendellhu95](https://github.com/wendellhu95)
- π Add render props support for Popover/Popconfirm. [#22034](https://github.com/ant-design/ant-design/pull/22034) [@nossbigg](https://github.com/nossbigg)
- π TimePicker.RangePicker support `order` prop. [#21948](https://github.com/ant-design/ant-design/pull/21948)
- π Carousel `dots` support object to pass `className`. [#21848](https://github.com/ant-design/ant-design/pull/21848)
- π Form `validateMessages` support `${label}` variable. [#21835](https://github.com/ant-design/ant-design/pull/21835)
- π Expose all Dropdown props in Breadcrumb.Item. [#20763](https://github.com/ant-design/ant-design/pull/20763) [@paranoidjk](https://github.com/paranoidjk)
- β¨οΈ Improve Tabs Accessibility. [#22287](https://github.com/ant-design/ant-design/pull/22287)
  - Add Tabs `keyboard` prop.
  - Tabs `extraContent` don't trigger keyboard navigation now.
- π  Warning Form.Item with `defaultValue` when it's controlled. [#22571](https://github.com/ant-design/ant-design/pull/22571)
- π  Menu.Item Tooltip could be hidden by falsy `title` prop. [#22202](https://github.com/ant-design/ant-design/pull/22202)
- π  Typography `onExpand` function support event parameter. [#22092](https://github.com/ant-design/ant-design/pull/22092) [@BlazPocrnja](https://github.com/BlazPocrnja)
- π  Simplify Popconfirm and Popover dom structure. [#22052](https://github.com/ant-design/ant-design/pull/22052)
- π Fix Autocomplete display `null` when `value` is `null`. [#21955](https://github.com/ant-design/ant-design/pull/21955)
- π Adjust Drawer close button without `title` style to avoid overlap with scroll bar. [#22710](https://github.com/ant-design/ant-design/pull/22710)
- π Fix Calendar style details. [#22676](https://github.com/ant-design/ant-design/pull/22676)
- Table
  - π Fix Table fixed column shadow style in Safari. [#22680](https://github.com/ant-design/ant-design/pull/22680)
  - π Fix Table style affect nest table element. [#22643](https://github.com/ant-design/ant-design/pull/22643)
  - π Fix Table `emptyText` is not centered and show pagination when empty data. [#22548](https://github.com/ant-design/ant-design/pull/22548) [@hengkx](https://github.com/hengkx)
  - π Fix Table `rowSelection` event bubbling with `onRow`. [#22566](https://github.com/ant-design/ant-design/pull/22566) [@hengkx](https://github.com/hengkx)
- π Fix Input with `suffix` only align style issue. [#22603](https://github.com/ant-design/ant-design/pull/22603)
- π Fix Alert cannot work with Tooltip/Popover. [#22594](https://github.com/ant-design/ant-design/pull/22594)
- π Fix nest dynamic Form.Item get react unmounted update warning. [#22575](https://github.com/ant-design/ant-design/pull/22575)
- π Adjust Tag `processing` status color. [#22303](https://github.com/ant-design/ant-design/pull/22303)
- π Remove Select dropdown group title mouse click style. [#22581](https://github.com/ant-design/ant-design/pull/22581)
- π Redesign Table filter menu buttons and fix Dropdown edge `padding` style. [#22072](https://github.com/ant-design/ant-design/pull/22072)
- π Move `@form-item-label-height` from form styles to theme variables. [#22600](https://github.com/ant-design/ant-design/pull/22600) [@slavakam](https://github.com/slavakam)
- π Add less variables `@link-focus-decoration` and `@link-focus-outline`. [#22511](https://github.com/ant-design/ant-design/pull/22511)
- π add separator cursor `disabled` of DatePicker. [#22563](https://github.com/ant-design/ant-design/pull/22563)
- RTL
  - π Optimize Checkbox `inner` RTL style issue. [#22627](https://github.com/ant-design/ant-design/pull/22627)
  - π Optimize Upload `picture-card` RTL style issue. [#22630](https://github.com/ant-design/ant-design/pull/22630)
  - π Fix Badge RTL number style issue. [#22665](https://github.com/ant-design/ant-design/pull/22665)
  - π Fix Select RTL style issue when select multiple options can be cleared. [#22596](https://github.com/ant-design/ant-design/pull/22596)
  - π Fix Progress RTL style issue. [#22558](https://github.com/ant-design/ant-design/pull/22558)
  - π Fix Badge RTL style issue. [#22551](https://github.com/ant-design/ant-design/pull/22551)
  - π Fix Input RTL style issue. [#22525](https://github.com/ant-design/ant-design/pull/22525)
  - π Fix Steps RTL style issue. [#22523](https://github.com/ant-design/ant-design/pull/22523)
  - π Optimize Tabs RTL icon style issue. [#22653](https://github.com/ant-design/ant-design/pull/22653)
  - π Optimize Input.Group RTL style issue. [#22624](https://github.com/ant-design/ant-design/pull/22624)
  - π Optimize Timeline label mode RTL style issue. [#22652](https://github.com/ant-design/ant-design/pull/22652)
  - π Optimization Select dropdown group RTL style issue. [#22584](https://github.com/ant-design/ant-design/pull/22584)
  - π Optimization Dropdown.Button RTL style issue. [#22519](https://github.com/ant-design/ant-design/pull/22519)
- Typescript
  - π  replace deprecated `React.SFC` with `React.FC`. [#22691](https://github.com/ant-design/ant-design/pull/22691) [@Rustin-Liu](https://github.com/Rustin-Liu)
  - π Fix Form.Item `children` definition. [#22662](https://github.com/ant-design/ant-design/pull/22662)

## 4.0.4

`2020-03-23`

- π Fix AutoComplete clear icon overlap issue on search icon. [#22310](https://github.com/ant-design/ant-design/pull/22310)
- π Fix Button align issue when is `disabled` and wrapped by Tooltip. [#22461](https://github.com/ant-design/ant-design/pull/22461)
- π Fix Cascader search need to press down arrow twice to select item. [#22216](https://github.com/ant-design/ant-design/pull/22216) [@Kermit-Xuan](https://github.com/Kermit-Xuan)
- π Fix Carousel cannot works on Snowpack. [#22507](https://github.com/ant-design/ant-design/pull/22507)
- π Fix ConfigProvider `componentSize` not works on DatePicker.RangePicker. [#22486](https://github.com/ant-design/ant-design/pull/22486)
- π Fix Descriptions cannot fit to small container width. [#22407](https://github.com/ant-design/ant-design/pull/22407)
- β‘οΈ Optimization Form.Item with multiple noStyle children Form.Item message collection performance. [#22410](https://github.com/ant-design/ant-design/pull/22410)
- π Fix Grid broken style using Col without `span`. [#22455](https://github.com/ant-design/ant-design/pull/22455)
- π Add InputNumber RTL style. [#22434](https://github.com/ant-design/ant-design/pull/22434)
- Menu
  - π  Menu inherit `line-height` from header. [#16142](https://github.com/ant-design/ant-design/pull/16142) [@sheerun](https://github.com/sheerun)
  - π Fix Menu unexpected scrollbar when show and hide. [#22248](https://github.com/ant-design/ant-design/pull/22248)
- π Fix Progress Dashboard won't allow `gapDeg` to be `0`. [#22462](https://github.com/ant-design/ant-design/pull/22462) [@thisrabbit](https://github.com/thisrabbit)
- π  Adjust Radio.Group logic that `value` is `undefined` should be uncontrolled mode. [#22245](https://github.com/ant-design/ant-design/pull/22245)
- β‘οΈ Reduce Row unnecessary render when `gutter` is array. [#22475](https://github.com/ant-design/ant-design/pull/22475) [@dolfje](https://github.com/dolfje)
- π Tweak RangePicker arrow shadow style. [#22406](https://github.com/ant-design/ant-design/pull/22406)
- π Fix Select dropdown menu vertical padding. [#22251](https://github.com/ant-design/ant-design/pull/22251)
- π Fix Slider tooltip crash when with `nullable` value. [#22482](https://github.com/ant-design/ant-design/pull/22482)
- Table
  - π Fix Table ColumnGroup with controlled `sorterOrder` not working issue. [#22450](https://github.com/ant-design/ant-design/pull/22450)
  - π Fix Table border radius style. [#22413](https://github.com/ant-design/ant-design/pull/22413) [@akshatmittal](https://github.com/akshatmittal)
  - π Fix Table fixed column height issue. [#22367](https://github.com/ant-design/ant-design/pull/22367)
  - πFix Table row expand icon show error in ipad. [#22334](https://github.com/ant-design/ant-design/pull/22334) [@BugHiding](https://github.com/BugHiding)
  - π  Table `column.filter` support `boolean` value. [#22277](https://github.com/ant-design/ant-design/pull/22277) [@xudongdev](https://github.com/xudongdev)
  - π Fix Table filter no working when only set `onFilter`. [#22317](https://github.com/ant-design/ant-design/pull/22317)
- π Fix TreeSelect `treeIcon` not working. [#22437](https://github.com/ant-design/ant-design/pull/22437)
- π Refactor DirectoryTree to fix deprecated warning. [#22318](https://github.com/ant-design/ant-design/pull/22318)
- π Fix Typography nest list style issue. [#22284](https://github.com/ant-design/ant-design/pull/22284)
- π Adjust Upload `onChange` return `fileList` is immutable data to avoid render issue. [#22322](https://github.com/ant-design/ant-design/pull/22322)
- π Localization
  - π©πͺ Updated German locale. [#22270](https://github.com/ant-design/ant-design/pull/22270) [@iChebbi](https://github.com/iChebbi)
  - π«π· Update French locale. [#22238](https://github.com/ant-design/ant-design/pull/22238) [@abenhamdine](https://github.com/abenhamdine)
- Typescript
  - π Omit Table `getCheckboxProps` typeof `checked`. [#22391](https://github.com/ant-design/ant-design/pull/22391) [@geekrainy](https://github.com/geekrainy)

## 4.0.3

`2020-03-14`

- Menu
  - π Fix Menu horizontal Item with nest Icon miss margin style. [#22021](https://github.com/ant-design/ant-design/pull/22021)
  - π Fix Menu item wrong `title` when setting `getPopupContainer`. [#22182](https://github.com/ant-design/ant-design/pull/22182)
  - π Optimize the style of Icon in Menu. [#22090](https://github.com/ant-design/ant-design/pull/22090) [@x1mrdonut1x](https://github.com/x1mrdonut1x)
  - π Fix Avatar in horizontal Menu `margin` issue. [#22038](https://github.com/ant-design/ant-design/pull/22038) [#22033](https://github.com/ant-design/ant-design/pull/22033)
- Slider
  - π Fix an issue where the position of 'slider handle' is incorrect in the vertical case of Slider. [#22135](https://github.com/ant-design/ant-design/pull/22135) [@wendellhu95](https://github.com/wendellhu95)
  - π Fix Slider missing `focus` style. [#22161](https://github.com/ant-design/ant-design/pull/22161)
- Table
  - π Fix ConfigProvider not work on Table filter dropdown. [#22133](https://github.com/ant-design/ant-design/pull/22133)
  - π Fix Table nest tree column expandable style issue with fixed column. [#22131](https://github.com/ant-design/ant-design/pull/22131)
  - π Fix an issue where Table filtering throws `cannot read property 'map' of undefined`. [#22096](https://github.com/ant-design/ant-design/pull/22096) [@yoyo837](https://github.com/yoyo837)
  - π Fix Table expandable column not fixed when selection column is fixed. [#22087](https://github.com/ant-design/ant-design/pull/22087)
  - π Fix Table filter menu reset not working. [#22079](https://github.com/ant-design/ant-design/pull/22079) [@shaodahong](https://github.com/shaodahong)
  - π Fix Table filter sub menu max height with many items. [#22230](https://github.com/ant-design/ant-design/pull/22230)
- Form
  - π Optimize the responsive and box model performance of The Form. [#21907](https://github.com/ant-design/ant-design/pull/21907) [@shaodahong](https://github.com/shaodahong)
  - π Fix FormItem hooks render error. [#22053](https://github.com/ant-design/ant-design/pull/22053) [@kagawagao](https://github.com/kagawagao)
- π Fixed the problem of using custom icons to wrap in Input.Group. [#22197](https://github.com/ant-design/ant-design/pull/22197) [@xrkffgg](https://github.com/xrkffgg)
- π Adjust Select single padding style to avoid tweak with dropdown. [#22167](https://github.com/ant-design/ant-design/pull/22167)
- π Fix Calendar header select ellipsis bug. [#22148](https://github.com/ant-design/ant-design/pull/22148)
- π Fixed Dropdown content and icons overlapping. [#22098](https://github.com/ant-design/ant-design/pull/22098) [@xrkffgg](https://github.com/xrkffgg)
- π Fix Select ellipsis bug in Firefox. [#22101](https://github.com/ant-design/ant-design/pull/22101)
- π Remove PageHeader unnecessary `overflow: hidden` style,Optimize PageHeader extra buttons responsive design. [#22030](https://github.com/ant-design/ant-design/pull/22030)
- π Fix TextArea `autoSize` don't scroll bottom in Firefox. [#22014](https://github.com/ant-design/ant-design/pull/22014)
- π«π· The full fr_FR internationalized text. [#22122](https://github.com/ant-design/ant-design/pull/22122) [@PaulJln](https://github.com/PaulJln)
- RTL
  - π Optimize the style of Pagination in RTL mode. [#22155](https://github.com/ant-design/ant-design/pull/22155) [@xrkffgg](https://github.com/xrkffgg)
  - π Fixed the icon style with Cascader RTL. [#22191](https://github.com/ant-design/ant-design/pull/22191) [@xrkffgg](https://github.com/xrkffgg)
  - π Optimize the Checkbox.Group style in RTL mode. [#22186](https://github.com/ant-design/ant-design/pull/22186) [@xrkffgg](https://github.com/xrkffgg)
  - π Optimize Radio.Button style issues in RTL mode. [#22066](https://github.com/ant-design/ant-design/pull/22066) [@xrkffgg](https://github.com/xrkffgg)
  - π Optimize table-pinned style issues that are listed under RTL. [#21914](https://github.com/ant-design/ant-design/pull/21914) [@saeedrahimi](https://github.com/saeedrahimi)
  - π Adjust the direction of the Dropdown icon in RTL mode. [#22104](https://github.com/ant-design/ant-design/pull/22104) [@xrkffgg](https://github.com/xrkffgg)
  - π Optimize the Breadcrumb style in RTL mode. [#22159](https://github.com/ant-design/ant-design/pull/22159) [@xrkffgg](https://github.com/xrkffgg)
  - π Optimize the style of the Steps component in RTL mode. [#22175](https://github.com/ant-design/ant-design/pull/22175) [@xrkffgg](https://github.com/xrkffgg)
  - π Optimize styles in RTL mode with form feedback. [#22222](https://github.com/ant-design/ant-design/pull/22222)
- TypeScript
  - π· Update the `operation` type definition of FormList. [#22058](https://github.com/ant-design/ant-design/pull/22058) [@kagawagao](https://github.com/kagawagao)
  - π· Update the definition of the `trigger` parameter for components such as Tooltip. [#22043](https://github.com/ant-design/ant-design/pull/22043) [@wendellhu95](https://github.com/wendellhu95)

## 4.0.2

`2020-03-08`

- Form
  - π Fix nest Form.Item dynamic remove will warning in React. [#21896](https://github.com/ant-design/ant-design/pull/21896)
  - β‘οΈ Form `useForm` now return same instance for performance. [#21927](https://github.com/ant-design/ant-design/pull/21927)
  - β‘οΈ Refactor Form.Item render logic that will only render once when children is a pure component. [#21991](https://github.com/ant-design/ant-design/pull/21991)
  - β‘οΈ FormContext use a memoized value to avoid trigger FormItem's unintentional renders. [#21980](https://github.com/ant-design/ant-design/pull/21980) [@qiqiboy](https://github.com/qiqiboy)
- Table
  - π Fix Table dropdown popup at abnormal direction. [#21905](https://github.com/ant-design/ant-design/pull/21905)
  - π Fix Table `expandIconColumnIndex` display order with `rowSelection`. [#21915](https://github.com/ant-design/ant-design/pull/21915)
  - π Fix Table `size="small"` header background color is not same as other size. [#21942](https://github.com/ant-design/ant-design/pull/21942)
  - π Fix Table `className` and `style` works on wrong node. [#21974](https://github.com/ant-design/ant-design/pull/21974)
- Select
  - π Fix Select align issue with empty string value. [#21880](https://github.com/ant-design/ant-design/pull/21880)
  - π Fix small size Select tag text not align middle. [#21940](https://github.com/ant-design/ant-design/pull/21940) [@xrkffgg](https://github.com/xrkffgg)
- Menu
  - π Fix Menu bottom margin is missing. [#21867](https://github.com/ant-design/ant-design/pull/21867)
  - π Fix horizontal Menu extra margin of Menu.Item with only icon. [#21925](https://github.com/ant-design/ant-design/pull/21925)
  - π Fix Menu popup menu overflow issue when contains too many items. [#21930](https://github.com/ant-design/ant-design/pull/21930)
- π Fix Badge animation when switch between 10 and 11. [#21834](https://github.com/ant-design/ant-design/pull/21834) [@wendellhu95](https://github.com/wendellhu95)
- π Fix Radio.Button inside Tooltip throws `Function components cannot be given refs` warning. [#21895](https://github.com/ant-design/ant-design/pull/21895) [@AshoneA](https://github.com/AshoneA)
- π Fix Descriptions miss style when content is falsy. [#21901](https://github.com/ant-design/ant-design/pull/21901)
- π Fix DatePicker cursor style on `seperator`. [#21937](https://github.com/ant-design/ant-design/pull/21937) [@xrkffgg](https://github.com/xrkffgg)
- π Fix ConfigProvider `prefixCls` not working on Input.Password. [#21953](https://github.com/ant-design/ant-design/pull/21953) [@tdida](https://github.com/tdida)
- π Fix Carousel `dots` not align center. [#21960](https://github.com/ant-design/ant-design/pull/21960) [@liusiasi](https://github.com/liusiasi)
- π Fix Input.Search border style in `rtl` mode. [#21946](https://github.com/ant-design/ant-design/pull/21946) [@xrkffgg](https://github.com/xrkffgg)
- Less
  - π Add `@outline-fade` variable. [#20227](https://github.com/ant-design/ant-design/pull/20227) [@Satloff](https://github.com/Satloff)
  - π Add `@form-item-label-height` variable. [#21912](https://github.com/ant-design/ant-design/pull/21912)
- TypeScript
  - π Improve Form.Item `renderProps` definite. [#21911](https://github.com/ant-design/ant-design/pull/21911)

## 4.0.1

`2020-03-04`

- Form
  - π Fix Form help control will get `react@16.13` warning. [#21800](https://github.com/ant-design/ant-design/pull/21800) [#21702](https://github.com/ant-design/ant-design/pull/21702)
  - π Fix Form.Item exceed Form width when content is too long. [#21682](https://github.com/ant-design/ant-design/pull/21682)
- Input
  - π Fix TextArea style get warning in `react@16.13`. [#21703](https://github.com/ant-design/ant-design/pull/21703)
  - π Fix Input.Search extra border when has `prefix`. [#21753](https://github.com/ant-design/ant-design/pull/21753)
- Table
  - π Fix Table column with `filtered` not working. [#21825](https://github.com/ant-design/ant-design/pull/21825)
  - π Fix Table locale not work. [#21772](https://github.com/ant-design/ant-design/pull/21772)
  - π Fix Table.Column `sortOrder` is not working in JSX mode. [#21719](https://github.com/ant-design/ant-design/pull/21719)
  - π Fix Table fixed column with sorted status style issue. [#21679](https://github.com/ant-design/ant-design/pull/21679)
- π Fix Dropdown menu arrow position. [#21768](https://github.com/ant-design/ant-design/pull/21768) [@xrkffgg](https://github.com/xrkffgg)
- π Fix List `bordered` and `split` props conflict. [#21784](https://github.com/ant-design/ant-design/pull/21784) [@MXWXZ](https://github.com/MXWXZ)
- π Fix Menu.Item `a` tag hidden bug. [#21699](https://github.com/ant-design/ant-design/pull/21699) [@shaodahong](https://github.com/shaodahong)
- π Fix `message.open` crash when `icon` is not passed. [#21747](https://github.com/ant-design/ant-design/pull/21747) [@AshoneA](https://github.com/AshoneA)
- π Fix Result `status` cannot assigned to string or number type. [#21691](https://github.com/ant-design/ant-design/pull/21691)
- π Fix Descriptions warning for duplicate key. [#21688](https://github.com/ant-design/ant-design/pull/21688)
- π Optimize Calendar header style in small screen. [#21813](https://github.com/ant-design/ant-design/pull/21813)
- π Radio.Group not wrapping now. [#21813](https://github.com/ant-design/ant-design/pull/21813)
- π  Refactor icons import code to reduce webpack disabled tree shaking bundle size. [#21752](https://github.com/ant-design/ant-design/pull/21752)
- Typescript
  - π Fix Radio.Button type error. [#21807](https://github.com/ant-design/ant-design/pull/21807) [@jhoneybee](https://github.com/jhoneybee)
  - π fix `TreeSelect.SHOW_*` type. [#21791](https://github.com/ant-design/ant-design/pull/21791) [@TennyZhuang](https://github.com/TennyZhuang)
  - π Fix TreeSelect missing `suffix` define. [#21714](https://github.com/ant-design/ant-design/pull/21714)
  - π Fix Drawer `forceRender` TypeScript definite. [#21774](https://github.com/ant-design/ant-design/pull/21774)
  - π Fix Tree `treeData` define. [#21756](https://github.com/ant-design/ant-design/pull/21756)
  - π Fix Form.Item `renderProps` return type define. [#21716](https://github.com/ant-design/ant-design/pull/21716)

## 4.0.0

`2020-02-28`

- π Ant Design v4 is out! Check [here](https://github.com/ant-design/ant-design/issues/21656) for more info.
- π Breadcrumb use `path` as default key to fix `name` key conflict. [#21583](https://github.com/ant-design/ant-design/pull/21583) [@douxc](https://github.com/douxc)
- π Timeline.Item support `label`. [#21560](https://github.com/ant-design/ant-design/pull/21560) [@shaodahong](https://github.com/shaodahong)
- π Fix Table filter menu max height style with many items. [#21602](https://github.com/ant-design/ant-design/pull/21602)
- π Add the Calendar component's custom default font color for display content. [#21598](https://github.com/ant-design/ant-design/pull/21598) [@xrkffgg](https://github.com/xrkffgg)
- π? Remove DatePicker legacy cell className for custom cell style. [#21589](https://github.com/ant-design/ant-design/pull/21589)
- π Fix RangePicker style render bug in IE11. [#21587](https://github.com/ant-design/ant-design/pull/21587)
- π  Progress `strokeColor` now will ignore incorrect percent. [#21564](https://github.com/ant-design/ant-design/pull/21564) [@AshoneA](https://github.com/AshoneA)
- π Fix Progress `trailColor` not working when `type=line`. [#21552](https://github.com/ant-design/ant-design/pull/21552) [@AshoneA](https://github.com/AshoneA)
- π Fix the background of the components in the pop-up components in the dark theme. [#21299](https://github.com/ant-design/ant-design/pull/21299)
  - π Optimization under the dark theme color swatches transparency.
  - π new less variable `@popover-customize-border-color`, `@list-customize-card-bg`, `@table-expand-icon-bg`, `@steps-background`, `@pagination-item-input-bg` for theme customization.

## 4.0.0-rc.6

`2020-02-24`

- Form
  - π support `scrollToFirstError` to simplify submit scroll logic. [#21462](https://github.com/ant-design/ant-design/pull/21462)
  - π Fix Form.Item with `help` align style. [#21476](https://github.com/ant-design/ant-design/pull/21476)
  - π Fix Form throw error when using BraftEditor. [#21425](https://github.com/ant-design/ant-design/pull/21425)
  - π Fix Form fields shake when switching the validing info. [#21302](https://github.com/ant-design/ant-design/pull/21302) [@yoyo837](https://github.com/yoyo837)
- Upload
  - π Upload added `removeIcon` and `downloadIcon` properties. [#21363](https://github.com/ant-design/ant-design/pull/21363) [@sdhr27](https://github.com/sdhr27)
  - π Fix Upload identify types of image logic errors. [#21473](https://github.com/ant-design/ant-design/pull/21473) [@holynewbie](https://github.com/holynewbie)
- Input
  - π Fix Input with `readOnly` still clearable by `allowClear`. [#21494](https://github.com/ant-design/ant-design/pull/21494)
  - π Fix Input click with `prefix` / `suffix` not get focused. [#21413](https://github.com/ant-design/ant-design/pull/21413)
- Table
  - π Fix Table selection crash when record children is `null`. [#21528](https://github.com/ant-design/ant-design/pull/21528)
  - π Fix Table fixed column style with `small` size. [#21431](https://github.com/ant-design/ant-design/pull/21431)
- Descriptions
  - π Fix `label` does not have the problem of still rendering the label element when not using `bordered`. [#21542](https://github.com/ant-design/ant-design/pull/21542)
  - π Fix Non-bordered titles under `vertical` are also a problem for `td`. [#21542](https://github.com/ant-design/ant-design/pull/21542)
  - π Fix `vertical` and `bordered` layout issues. [#21542](https://github.com/ant-design/ant-design/pull/21542)
  - π Fix the problem of `style` not working on `Item`. [#21542](https://github.com/ant-design/ant-design/pull/21542)
  - π Fix `th` will also get the useless `-colon` className problem under `border`. [#21542](https://github.com/ant-design/ant-design/pull/21542)
- π Select added `tagRender` for customized tag rendering. [#21064](https://github.com/ant-design/ant-design/pull/21064) [@fguitton](https://github.com/fguitton)
- π Picker `onPanelChange` will also trigger when panel value changed. [#21455](https://github.com/ant-design/ant-design/pull/21455)
- π Fix Notification first call multiple time can not stack. [#21531](https://github.com/ant-design/ant-design/pull/21531)
- π Fix TreeSelect popup do not update issue. [#21410](https://github.com/ant-design/ant-design/pull/21410)
- π Optimize Upload `showDownloadIcon` default doesn't show. [b4636](https://github.com/ant-design/ant-design/commit/b4636ab2dfdb006c14bdb3d5d7de09e1650c3567)
- π Tweak Divider inner text `padding` and add `@divider-text-padding`. [#21407](https://github.com/ant-design/ant-design/pull/21407)
- Typescript
  - π Fix Form types. [#21483](https://github.com/ant-design/ant-design/pull/21483) [#21411](https://github.com/ant-design/ant-design/pull/21411)

## 4.0.0-rc.5

`2020-02-16`

- π Fix Form.Item `validateFirst` prevent form submit. [#21329](https://github.com/ant-design/ant-design/pull/21329)
- π Fix InputNumber cursor position issue when deleting consecutive identical numbers. [#21344](https://github.com/ant-design/ant-design/pull/21344)
- π Remove Menu excess background color. [#21365](https://github.com/ant-design/ant-design/pull/21365)
- π Optimize the mouse style for the `disabled` state of the DatePicker component. [#21352](https://github.com/ant-design/ant-design/pull/21352)
- π Fix Affix throws `Cannot read property getBoundingClientRect` in mobile device. [#21350](https://github.com/ant-design/ant-design/pull/21350)
- π Fix the problem that the label width is incorrect when the screen is less than `xs`. [#21222](https://github.com/ant-design/ant-design/pull/21222)
- π Fix Input `size` is `large` height style. [#21338](https://github.com/ant-design/ant-design/pull/21338)
- π Fix Badge `color` not working when contains children. [#21333](https://github.com/ant-design/ant-design/pull/21333)
- π Fix Alert close button extra padding. [#21325](https://github.com/ant-design/ant-design/pull/21325)
- π Tweak Steps 1px align issue. [#21306](https://github.com/ant-design/ant-design/pull/21306)
- π Fix legacy Button.Group `large` size style issue. [#21307](https://github.com/ant-design/ant-design/pull/21307)
- π Fix Input border radius with suffix, style in Firefox, TextArea allowClear style issues. [#21316](https://github.com/ant-design/ant-design/pull/21316)
- π Pagination will pass `disabled` prop to prev/next buttons return by `itemRender`. [#21361](https://github.com/ant-design/ant-design/pull/21361)
- π¦πΏ Added Azerbaijani translation. [#21387](https://github.com/ant-design/ant-design/pull/21387) [@orkhan-huseyn](https://github.com/orkhan-huseyn)
- Typescript
  - π· Menu export `MenuItemGroupProps`. [#21356](https://github.com/ant-design/ant-design/pull/21356)
  - π· Table export `ColumnProps`. [#21321](https://github.com/ant-design/ant-design/pull/21321)

## 4.0.0-rc.4

`2020-02-09`

- π Add [color palette](https://preview-21101-ant-design.surge.sh/docs/spec/dark-cn#%E5%9F%BA%E7%A1%80%E8%89%B2%E6%9D%BF) and [palette generation tool](https://preview-21101-ant-design.surge.sh/docs/spec/dark-cn#%E8%89%B2%E6%9D%BF%E7%94%9F%E6%88%90%E5%B7%A5%E5%85%B7) for dark theme. [#21101](https://github.com/ant-design/ant-design/pull/21101)
- π Add `style` field for `options` prop of Checkbox.Group and Radio.Group. [#21219](https://github.com/ant-design/ant-design/pull/21219)
- π Add `validateFirst` prop for Form.Item. [#21178](https://github.com/ant-design/ant-design/pull/21178)
- π Add `useModal` hook for Modal to support `context` access. [#20949](https://github.com/ant-design/ant-design/pull/20949)
- π Add `useNotification` hook for Notification to support `context` access. [#21275](https://github.com/ant-design/ant-design/pull/21275)
- π Add `bordered` prop for SelectγTreeSelectγDatePickerγTimePicker and Cascader. [#21242](https://github.com/ant-design/ant-design/pull/21242)
- π Add `selectAllLabels` prop for Transfer. [#21139](https://github.com/ant-design/ant-design/pull/21139) [@morenyang](https://github.com/morenyang)
- π Redesign the style of ink bar for Tabs. [#21256](https://github.com/ant-design/ant-design/pull/21256)
- π Add less variable `@form-item-label-font-size`. [#21216](https://github.com/ant-design/ant-design/pull/21216)
- π Fix Badge style for Badge with Typography. [#21235](https://github.com/ant-design/ant-design/pull/21235)
- π Fix Checkbox not work when Checkbox and Checkbox.Group are separated by other component. [#21146](https://github.com/ant-design/ant-design/pull/21146) [@morenyang](https://github.com/morenyang)
- π Fix Collapse.Panel wrong content width when `extra` prop is set. [#21202](https://github.com/ant-design/ant-design/pull/21202) [@zhiyuc123](https://github.com/zhiyuc123)
- Form
  - π Fix Form.Item `required` validation not work when name is not set. [#21168](https://github.com/ant-design/ant-design/pull/21168)
  - π Fix Form.Item data binding not work when `name` is `0`. [#21186](https://github.com/ant-design/ant-design/pull/21186) [@wanjas](https://github.com/wanjas)
  - π Fix Form.Item shaking when `help` prop change from valuable to `undefined`. [#21211](https://github.com/ant-design/ant-design/pull/21211)
- Input
  - π Fix worng validating style when `prefix` is set. [#21121](https://github.com/ant-design/ant-design/pull/21121)
  - π Fix `size` prop not work when `prefix` or `affix` is set. [#21290](https://github.com/ant-design/ant-design/pull/21290) [@yoyo837](https://github.com/yoyo837)
- π Fix Radio.Group style with Badge. [#21215](https://github.com/ant-design/ant-design/pull/21215)
- π Fix Select no margin between lines when mode is `tags` or `multiple`. [#21175](https://github.com/ant-design/ant-design/pull/21175)
- π Fix Slider dots focus style. [#21244](https://github.com/ant-design/ant-design/pull/21244) [@Kermit-Xuan](https://github.com/Kermit-Xuan)
- π Fix Steps icon not align when `size="small"` and `labelPlacement="vertical"`. [#21258](https://github.com/ant-design/ant-design/pull/21258)
- Table
  - π Fix `expandIcon` prop not work when data item has no `children` field. [#21169](https://github.com/ant-design/ant-design/pull/21169)
  - π Fix Column `sorter` prop not work. [#21194](https://github.com/ant-design/ant-design/pull/21194)
  - π Fix custom filter's typing not work. [#21218](https://github.com/ant-design/ant-design/pull/21218)
- π Fix TimePicker `defaultOpenValue` prop not work. [#21198](https://github.com/ant-design/ant-design/pull/21198)
- Transfer
  - π Fix wrong unit for checkbox label of header. [#21136](https://github.com/ant-design/ant-design/pull/21136) [@morenyang](https://github.com/morenyang)
  - π Fix icon not align in search input. [#21247](https://github.com/ant-design/ant-design/pull/21247)
- π Fix Typography not focus at the end of textarea when editable is true. [#21268](https://github.com/ant-design/ant-design/pull/21268)

## 4.0.0-rc.3

`2020-01-27`

- π  Use native Date instead of moment to get timestamp in Countdown component. [#21108](https://github.com/ant-design/ant-design/pull/21108) [@morenyang](https://github.com/morenyang)
- π Fix Input `suffix / prefix` style issue with `addonBefore / addonAfter`. [#21105](https://github.com/ant-design/ant-design/pull/21105)
- π Improved Timeline component style in RTL mode. [#21068](https://github.com/ant-design/ant-design/pull/21068) [@xrkffgg](https://github.com/xrkffgg)
- π Update `clearfix` mixin to remove legacy `zoom` descriptor. [#21109](https://github.com/ant-design/ant-design/pull/21109) [@morenyang](https://github.com/morenyang)
- πCard component use `@font-size-base` instead of inline `14px`. [#21107](https://github.com/ant-design/ant-design/pull/21107) [@morenyang](https://github.com/morenyang)
- π Adjust Layout component to let `className` get higher priority. [#21074](https://github.com/ant-design/ant-design/pull/21074) [@yoyo837](https://github.com/yoyo837)
- Typescript
  - π Fix Tree wrong event type of AntTreeNodeMouseEvent. [#21102](https://github.com/ant-design/ant-design/pull/21102) [@Jirka-Lhotka](https://github.com/Jirka-Lhotka)
  - π Fix Form.Item return type define. [#21067](https://github.com/ant-design/ant-design/pull/21067)

## 4.0.0-rc.2

`2020-01-21`

- π  Refactor some demos to React hooks and TypeScript. [#21045](https://github.com/ant-design/ant-design/pull/21045)
- π Fixed Input/Select components align issue. [#20869](https://github.com/ant-design/ant-design/pull/20869)
- Dropdown
  - π Support `buttonsRender` to customize buttons. [#20815](https://github.com/ant-design/ant-design/pull/20815)
  - π Tooltip doesn't disappear on `disabled` Dropdown.Button in Chrome. [#20960](https://github.com/ant-design/ant-design/pull/20960)
- Input
  - π Fixed Input `prefix` and `suffix` overlap with content issue. [#20872](https://github.com/ant-design/ant-design/pull/20872)
  - π Fixed Input `placeholder` color in Firefox. [#20850](https://github.com/ant-design/ant-design/issues/20850)
- Table
  - π Fixed `onChange` return cached fresh sorter & filter state. [#20858](https://github.com/ant-design/ant-design/pull/20858)
  - π Fixed problem that all-checkbox is checked when all the checkboxes are disabled. [#20968](https://github.com/ant-design/ant-design/pull/20968)
  - π Fixed `locale.emptyText` not working. [#21024](https://github.com/ant-design/ant-design/pull/21024)
- Select
  - π Fixed `placeholder` wrap and align issue. [#20883](https://github.com/ant-design/ant-design/pull/20883) [#20884](https://github.com/ant-design/ant-design/pull/20884)
  - π Fixed multiple Select left padding. [#20861](https://github.com/ant-design/ant-design/pull/20861)
  - π Fixed multiple Select clean icon overlap issue. [#20914](https://github.com/ant-design/ant-design/pull/20914)
- Form
  - π Added scroll options as `scrollToField` argument. [#20774](https://github.com/ant-design/ant-design/pull/20774)
  - π Fixed Form.Item update `help` makes layout shake. [#20886](https://github.com/ant-design/ant-design/pull/20886)
  - π Fixed unexpected extra rerender when Form.Item is not a real Field. [#20963](https://github.com/ant-design/ant-design/pull/20963)
  - π Fixed Form.Item ignore `help=""` issue. [#21026](https://github.com/ant-design/ant-design/pull/21026)
  - π Fixed Form.Item `label` align bug in small screen. [#20836](https://github.com/ant-design/ant-design/issues/20836)
- π Fixed message cut shadow issue. [#20856](https://github.com/ant-design/ant-design/issues/20856)
- π Fixed Tooltip hidden when `title` is `0`. [#20894](https://github.com/ant-design/ant-design/pull/20894)
- π Fixed List `actions` inconsistent position. [#20897](https://github.com/ant-design/ant-design/pull/20897)
- π Add a visual list example for Tree. [#20911](https://github.com/ant-design/ant-design/pull/20911)
- π Fixed AutoComplete example styling issue. [#20946](https://github.com/ant-design/ant-design/pull/20946)
- π Removed AutoComplete useless `labelInValue`. [#20967](https://github.com/ant-design/ant-design/pull/20967)
- π Fixed Drawer `footerStyle` prop cause react warning. [#20983](https://github.com/ant-design/ant-design/pull/20983)
- π Fixed Breadcrumb style in `rtl` mode. [#21054](https://github.com/ant-design/ant-design/pull/21054)
- π Tweak Layout `className` order to end. [#21041](https://github.com/ant-design/ant-design/pull/21041)
- TypeScript
  - π Export DatePicker related interface. [#20900](https://github.com/ant-design/ant-design/pull/20900)
- Less variables
  - π Readded `@border-radius-sm`. [#20818](https://github.com/ant-design/ant-design/pull/20818)
  - π Added `@timeline-item-padding-bottom`. [#21013](https://github.com/ant-design/ant-design/pull/21013)
  - π Added `@layout-header-color`. [#21033](https://github.com/ant-design/ant-design/pull/21033)

## 4.0.0-rc.1

`2020-01-11`

- π Drawer Added `footer` and `footerStyle` properties. [#20690](https://github.com/ant-design/ant-design/pull/20690) [@DeanVanNiekerk](https://github.com/DeanVanNiekerk)
- π Switch Added `@switch-min-width` and `@switch-sm-min-width` less variables. [#20829](https://github.com/ant-design/ant-design/pull/20829) [@abdih](https://github.com/abdih)
- Table
  - π Fix expanded icon not work when `expandRowByClick` is set. [#20808](https://github.com/ant-design/ant-design/pull/20808)
  - π Fix expanded row width in scaled dom element and border style. [#20805](https://github.com/ant-design/ant-design/pull/20805)
  - π Fix background color css priority too high to override user customize style. [#20794](https://github.com/ant-design/ant-design/pull/20794)
  - π Fix `rowSelection` of `fixed` not work. [#20735](https://github.com/ant-design/ant-design/pull/20735)
  - π Fix fixed columns in Chrome show the vertical scrollbar. [#20705](https://github.com/ant-design/ant-design/pull/20705)
  - π Fix crash when columns with empty children. [#20703](https://github.com/ant-design/ant-design/pull/20703)
- π Tweak Calendar basic style month drop-down box width and notice items of word order and card mode, select the size of the box. [#20790](https://github.com/ant-design/ant-design/pull/20790) [@xrkffgg](https://github.com/xrkffgg)
- DatePicker
  - π Optimize the `border-radius` of the rounded corners connection. [#20736](https://github.com/ant-design/ant-design/pull/20736)
  - π Fix selected style overlap. [#20736](https://github.com/ant-design/ant-design/pull/20736)
  - π Fix extra dividing line at the bottom. [#20736](https://github.com/ant-design/ant-design/pull/20736)
  - π Fix button style for DatePicker's default range. [#20760](https://github.com/ant-design/ant-design/pull/20760) [@xrkffgg](https://github.com/xrkffgg)
- π Input not block user input when value is `undefined`. [#20783](https://github.com/ant-design/ant-design/pull/20783)
- π Fix Carousel card carousel orientation in left / right mode. [#20781](https://github.com/ant-design/ant-design/pull/20781) [@xrkffgg](https://github.com/xrkffgg)
- π Fix Grid responsive gutter under SSR initial value of `0`. [#20762](https://github.com/ant-design/ant-design/pull/20762)
- π Fix InputNumber, Select and other components icon size. [#20765](https://github.com/ant-design/ant-design/pull/20765)
- π Fix Badge `z-index` higher than Table fixed columns. [#20751](https://github.com/ant-design/ant-design/pull/20751)
- π Tweak font family to be same as tailwindcss. [#20747](https://github.com/ant-design/ant-design/pull/20747)
- π Fix TextArea `autoSize` blink in FireFox. [#20737](https://github.com/ant-design/ant-design/pull/20737)
- π Fix Form.Item not keep error message sync when hit rule changed. [#20725](https://github.com/ant-design/ant-design/pull/20725)
- π Fix Form.Item add additional feedback style when `hasFeedback` is not set. [#20691](https://github.com/ant-design/ant-design/pull/20691)
- π Fix Cascader search bug when `fieldNames` is existed and label/value share same name. [#20720](https://github.com/ant-design/ant-design/pull/20720)
- π Fix Collapse background color with wrong less variable. [#20718](https://github.com/ant-design/ant-design/pull/20718) [@kuitos](https://github.com/kuitos)
- π Fix Slider's Tooltip not follow handle. [#20699](https://github.com/ant-design/ant-design/pull/20699)
- π Fix Card cover image get skretched. [#20701](https://github.com/ant-design/ant-design/pull/20701)
- π Fix Typography automatic overflow with `suffix` property. [#20689](https://github.com/ant-design/ant-design/pull/20689) [@zouxiaomingya](https://github.com/zouxiaomingya)
- π Fix AutoComplete with customize component with wrong style. [#20686](https://github.com/ant-design/ant-design/pull/20686)
- π Fix Input.Group to be partial to a pixel in Form. [#20681](https://github.com/ant-design/ant-design/pull/20681)
- TypeScript
  - π Export Form interfaces. [3a1c5](https://github.com/ant-design/ant-design/commit/3a1c51010fecfa59f63f5e09027805a141e9ec11)
  - π Fix Table types. [#20789](https://github.com/ant-design/ant-design/pull/20789)
  - π Fix Table.Column and Table.ColumnGroup definition. [#20695](https://github.com/ant-design/ant-design/pull/20695)

## 4.0.0-rc.0

`2020-01-04`

Ant Design 4.0-rc released! Here is the release [document](https://github.com/ant-design/ant-design/issues/20661).

β οΈ Migrate from v3 to v4 please ref to [migration document](/docs/react/migration-v4).

### New features and improvements

- π antd package size optimization, js gzipped dropped from 532.75KB to 289.89 KB. [#20356](https://github.com/ant-design/ant-design/pull/20356)
- π New dark theme support. [#20281](https://github.com/ant-design/ant-design/pull/20281)
- π ConfigProvider supports `direction` internationalization setting `rtl`. [#19380](https://github.com/ant-design/ant-design/pull/19380)
- π New Form component. [#17327](https://github.com/ant-design/ant-design/pull/17327)
  - π Form comes with data binding function.
  - π Field changes only affect the rendering of related field components and not the entire Form.
  - π Added `initialValues` to replace the original field initialization.
  - π Added `validateMessages` to support modify validation templates.
  - π Added `onFinish` and `onFinishFailed` to complete the overall component verification logic.
  - π Added `onFieldsChange` and `onValuesChange` for triggering controlled state.
  - π Provide hook support for `useForm`.
  - π Form.Item adds `name` property for data binding.
  - π Form.Item `validateTrigger` will only perform validation trigger and will not collect field values ββat the same time.
  - π Form.Item adds `rules` property for data validation.
  - π Form.Item adds `shouldUpdate` property to support render props.
  - π Form.Item adds `dependencies` property to simplify related field update logic.
  - π Form.Item adds `noStyle` property and adds unstyled data binding.
  - π Added Form.List component to simplify adding, deleting, modifying and checking operations.
  - π Added Form.Provider component to support multi-form linkage.
- π New Table component. [#19678](https://github.com/ant-design/ant-design/pull/19678)
  - π Added `summary` support for summary lines.
  - π Now `fixedColumn`,`expandable`, and `scroll` can be mixed.
  - π Support multi-column sort.
  - π Support custom `body` and add virtual scrolling example.
  - π Expansion-related props moved into the `expandable` attribute and add `rowExpandable` prop.
  - π Use css `sticky` to achieve fixed effects to optimize performance.
  - π Optimized `expand` animation effect.
- π New DatePicker, TimePicker and Calendar components. [#20023](https://github.com/ant-design/ant-design/pull/20023)
  - π Support custom date library.
  - π Added `picker` support for setting selectors (no longer need to simulate selectors via controlled `mode`).
  - π Full range selector support: time, date, week, month, year.
  - π Range selector can now select start and end times individually.
  - π The range selector can be set to `disabled` separately for the start and end time.
  - π The range selector allows empty start and end times.
  - π Optimized manual input and keyboard interaction support.
  - π Added `inputReadOnly` to disable manual input.
- π Remove Icon and use `@ ant-design / icons` instead. [#18217](https://github.com/ant-design/ant-design/pull/18217)
- Skeleton
  - π Support Skeleton.Avatar placeholder component. [#19898](https://github.com/ant-design/ant-design/pull/19898) [@Rustin-Liu](https://github.com/Rustin-Liu)
  - π Support Skeleton.Button placeholder component. [#19699](https://github.com/ant-design/ant-design/pull/19699) [@Rustin-Liu](https://github.com/Rustin-Liu)
  - π Support Skeleton.Input placeholder component. [#20264](https://github.com/ant-design/ant-design/pull/20264) [@Rustin-Liu](https://github.com/Rustin-Liu)
- π Tree supports virtual scrolling. [#18172](https://github.com/ant-design/ant-design/pull/18172)
- π Tree Enhanced accessibility support and keyboard interaction. [#18866](https://github.com/ant-design/ant-design/pull/18866)
- π Select uses virtual scrolling and enhanced accessibility support and keyboard interaction. [#18658](https://github.com/ant-design/ant-design/pull/18658)
  - π Uncontrolled mode when `value` is `undefined` now.
  - π multiple Select won't rerender if `value` is mutable.
- π TreeSelect uses virtual scrolling and optimizes keyboard support. [#19040](https://github.com/ant-design/ant-design/pull/19040)
  - π Uncontrolled mode when `value` is `undefined` now.
- π Button adds `default` and `link` styles for `danger`. [#19837](https://github.com/ant-design/ant-design/pull/19837)
- π Form and ConfigProvider support `size` setting to include component size. [#20570](https://github.com/ant-design/ant-design/pull/20570)
- π Typography adds `suffix` attribute. [#20224](https://github.com/ant-design/ant-design/pull/20224)
- π Progress adds `steps` subcomponent. [#19613](https://github.com/ant-design/ant-design/pull/19613)
- π TextArea supports `onResize`. [#20408](https://github.com/ant-design/ant-design/pull/20408)
- π Added Alert.ErrorBoundary to provide friendly error interception and prompting. [#19923](https://github.com/ant-design/ant-design/pull/19923)
- π Upload supports iconRender to customize icons. [#20034](https://github.com/ant-design/ant-design/pull/20034) [@qq645381995](https://github.com/qq645381995)
- π Tag component preset status color. [#19399](https://github.com/ant-design/ant-design/pull/19399)
- π Grid uses `flex` layout. [#16635](https://github.com/ant-design/ant-design/pull/16635)
- π Fix the display error of Carousel component `dotposition` as `left | right`. [#20645](https://github.com/ant-design/ant-design/pull/20645) [@xrkffgg](https://github.com/xrkffgg)
- π Fix Alert style text overflow. [#20318](https://github.com/ant-design/ant-design/pull/20318)
- π Removed warning messages for deprecated APIs. [#17510](https://github.com/ant-design/ant-design/pull/17510)
- π Added warning for Avatar, Button, Modal.method and Result components using v3 strings as icons. [#20226](https://github.com/ant-design/ant-design/pull/20226)
- π Add `@border-color-split-popover`γ`@input-icon-hover-color`γ`@select-clear-background`γ`@cascader-menu-border-color-split`γ`@modal-header-border-color-split`γ`@skeleton-to-color`γ`@transfer-item-hover-bg` and other less variables. [#20070](https://github.com/ant-design/ant-design/pull/20070)

## 3.x

Visit [GitHub](https://github.com/ant-design/ant-design/blob/3.x-stable/CHANGELOG.en-US.md) to read `3.x` change logs.

## 2.x

Visit [GitHub](https://github.com/ant-design/ant-design/blob/2.x-stable/CHANGELOG.en-US.md) to read `2.x` change logs.

## 1.11.4

Visit [GitHub](https://github.com/ant-design/ant-design/blob/1.x-stable/CHANGELOG.md) to read change logs from `0.x` to `1.x`.
