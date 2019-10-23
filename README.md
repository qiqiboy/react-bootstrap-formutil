# react-bootstrap-formutil

[![npm](https://img.shields.io/npm/v/react-bootstrap-formutil.svg?style=flat)](https://npm.im/react-bootstrap-formutil)
[![peerDependencies](https://img.shields.io/npm/dependency-version/react-bootstrap-formutil/peer/react.svg?color=yellowgreen)](https://reactjs.org)
[![definitionTypes](https://img.shields.io/npm/types/react-bootstrap-formutil.svg)](https://github.com/qiqiboy/react-bootstrap-formutil/blob/master/index.d.ts)
[![gzip](https://img.shields.io/bundlephobia/minzip/react-bootstrap-formutil.svg)](https://npm.im/react-bootstrap-formutil)
[![download](https://img.shields.io/npm/dm/react-bootstrap-formutil.svg)](https://npm.im/react-bootstrap-formutil)
[![issues](https://img.shields.io/github/issues/qiqiboy/react-bootstrap-formutil.svg)](https://github.com/qiqiboy/react-bootstrap-formutil/issues)
[![license](https://img.shields.io/github/license/qiqiboy/react-bootstrap-formutil.svg)](https://github.com/qiqiboy/react-bootstrap-formutil/blob/master/LICENSE)
[![github](https://img.shields.io/github/last-commit/qiqiboy/react-bootstrap-formutil.svg)](https://github.com/qiqiboy/react-bootstrap-formutil)
[![github](https://img.shields.io/github/release-date/qiqiboy/react-bootstrap-formutil.svg)](https://github.com/qiqiboy/react-bootstrap-formutil/releases)
[![github](https://img.shields.io/github/commit-activity/m/qiqiboy/react-bootstrap-formutil.svg)](https://github.com/qiqiboy/react-bootstrap-formutil/commits/master)
[![github](https://img.shields.io/github/stars/qiqiboy/react-bootstrap-formutil.svg?style=social)](https://github.com/qiqiboy/react-bootstrap-formutil)

[![react-formutil](https://nodei.co/npm/react-bootstrap-formutil.png?compact=true)](https://npm.im/react-bootstrap-formutil)

Happy to use react-formutil in the project based on `react-bootstrap` ^\_^

在 [react-bootstrap](https://github.com/react-bootstrap/react-bootstrap) 项目，结合[react-formutil](https://github.com/qiqiboy/react-formutil) 来快速构建表单。

> **如果你在使用其他 react 组件库，可以查阅：**
>
> 1.  ant-design [`react-antd-formutil`](https://github.com/qiqiboy/react-antd-formutil) [![npm](https://img.shields.io/npm/v/react-antd-formutil.svg?style=flat)](https://npm.im/react-antd-formutil)
> 1.  react-md [`react-md-formutil`](https://github.com/qiqiboy/react-md-formutil) [![npm](https://img.shields.io/npm/v/react-md-formutil.svg?style=flat)](https://npm.im/react-md-formutil)
> 1.  Material-UI [`react-material-formutil`](https://github.com/qiqiboy/react-material-formutil) [![npm](https://img.shields.io/npm/v/react-material-formutil.svg?style=flat)](https://npm.im/react-material-formutil)

<!-- vim-markdown-toc GFM -->

- [安装 Installation](#安装-installation)
- [使用 Usage](#使用-usage)
    + [`<FormGroup />`](#formgroup-)
        * [`name`](#name)
        * [`$defaultValue`](#defaultvalue)
        * [`$validators`](#validators)
        * [`label`](#label)
        * [`helper`](#helper)
        * [`labelCol`](#labelcol)
        * [`wrapperCol`](#wrappercol)
        * [`addons`](#addons)
        * [`extra`](#extra)
        * [`$parser`](#parser)
        * [`$formatter`](#formatter)
        * [`checked` `unchecked`](#checked-unchecked)
        * [`validMessage`](#validmessage)
        * [`feedback`](#feedback)
        * [`valuePropName` `changePropName` `focusPropName` `blurPropName`](#valuepropname-changepropname-focuspropname-blurpropname)
        * [`controlId` `as` `xs` `sm` `md` `lg` 等](#controlid-as-xs-sm-md-lg-等)
        * [`errorLevel`](#errorlevel)
    + [`<CheckboxGroup />`](#checkboxgroup-)
    + [`<RadioGroup />`](#radiogroup-)
    + [`<SwitchGroup />`](#switchgroup-)
    + [`setErrorLevel(level)`](#seterrorlevellevel)
    + [`支持的组件`](#支持的组件)
        * [`FormControl` `Form.Control`](#formcontrol-formcontrol)
        * [`Form.Check` `FormCheck`](#formcheck-formcheck)
        * [`InputGroup`](#inputgroup)
        * [`ToggleButtonGroup`](#togglebuttongroup)
        * [`CheckboxGroup` `RadioGroup` `SwitchGroup`](#checkboxgroup-radiogroup-switchgroup)
- [FAQ](#faq)
    + [`给组件设置的 onChange、onFocus 等方法无效、不执行`](#给组件设置的-onchangeonfocus-等方法无效不执行)
    + [`在生产环境(NODE_ENV==='production')部分组件调用有异常？`](#在生产环境node_envproduction部分组件调用有异常)

<!-- vim-markdown-toc -->

### 安装 Installation

[![react-bootstrap-formutil](https://nodei.co/npm/react-bootstrap-formutil.png?compact=true)](https://npm.im/react-bootstrap-formutil)

由于目前流行的`bootstrap`版本主要有`v3`和`v4`，其对应的`react-bootstrap`也有两个相对应的版本，所以我们也提供了两个版本供选择下载。

该版本适用于 `bootstrap@4.x` 和 `react-bootstrap@1.x`。**如果你项目中使用的是 `bootstrap@3.x` 和 `react-bootstrap@0.32.x`，请查看 [react-bootstrap-formutil v3](https://github.com/qiqiboy/react-bootstrap-formutil/tree/v3)**。

```bash
# npm
npm install react-bootstrap-formutil --save

# yarn
yarn install react-bootstrap-formutil
```

### 使用 Usage

> `react-bootstrap-formutil` 整合了 `react-formutil` 的组件，所以可以直接从`react-bootstrap-formutil`中导出所需要的
> `react-formutil` 组件。不用单独从 `react-formutil` 中导出。

**本文档适用于 `bootstrap@4.x` 和 `react-bootstrap@1.x` 版本，如果你要查看早期`react-bootstrap@0.32`的文档，请查看 [react-bootstrap-formutil v3](https://github.com/qiqiboy/react-bootstrap-formutil/tree/v3)**

先看一个使用示例（点击查看在线完整示例 :
[react-bootstrap-formutil on codesandbox.io](https://codesandbox.io/s/rmj2l1o80o)）：

```javascript
import React, { Component } from 'react';
import { withForm, FormGroup } from 'react-bootstrap-formutil';
import { FormControl } from 'react-bootstrap'; // 导入react-bootstrap的FormControl组件

@withForm
class MyForm extends Component {
    submit = () => {
        const { $invalid, $getFirstError, $params } = this.props.$formutil;

        if ($invalid) {
            alert($getFistError());
        } else {
            // submit your data
        }
    };

    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <FormGroup name="username" required>
                    <FormControl type="text" />
                </FormGroup>
            </form>
        );
    }
}
```

`FormGroup`是 `react-bootstrap-formuitl` 新增加的组件，`withForm`是`react-formutil`的组件（没错，你可以直接从`react-bootstrap-formutil`中导出`react-formutil`的组件啦）。

只需要将`react-bootstrap`的交互组件，嵌套在`FormGroup`下，即可实现自动的表单状态同步。

#### `<FormGroup />`

要实现将`react-bootstrap`的交互组件的值能同步到 `react-formutil` 的状态中，需要通过 `FormGroup` 这个组件来实现中间态绑定。

`FormGroup`提供了与`react-bootstrap`中同名组件一样的 UI 与状态展示功能，所以你完全可以使用`react-bootstrap-formutil`中的`FormGroup`替代`react-bootstrap`中的该组件。

> `FormGroup`下只允许放置一个表单组件，不允许多个。

`FormGroup`基于`react-formutil`中的[`<EasyField />`](https://github.com/qiqiboy/react-formutil#easyfield-)组件实现，同名属性参数用法可以更多参考[`<EasyField />`](https://github.com/qiqiboy/react-formutil#easyfield-)。

##### `name`

设置输入项的 name 值，表单项将会以 name 作为 key 收集到 formutil 的状态中。支持嵌套语法 _（同`react-formutil`的`Field`同名参数，可以参考 [name](https://github.com/qiqiboy/react-formutil#name)）_

##### `$defaultValue`

设置该表单项的默认值 _（同`react-formutil`的`Field`同名参数，可以参考[\$defaultvalue](https://github.com/qiqiboy/react-formutil#defaultvalue)）_

##### `$validators`

设置校验方法 _（同`react-formutil`的`Field`同名参数 , 可以参考
[\$validators](https://github.com/qiqiboy/react-formutil#validators)）_

> 同 react-formutil 的 EasyField，FormControl 也内置了同样的校验规则：

> -   `required` 必填 `required`
> -   `maxLength` 。最大输入长度，有效输入时才会校验 `maxLength="100"`
> -   `minLength` 最小输入长度，有效输入时才会校验 `minLength="10"`
> -   `max` 最大输入数值，仅支持 Number 比较。有效输入时才会校验 `max="100"`
> -   `min` 最小输入数值，仅支持 Number 比较。有效输入时才会校验 `min="10"`
> -   `pattern` 正则匹配。有效输入时才会校验 `pattern={/^\d+$/}`
> -   `enum` 枚举值检测。有效输入时才会校验 `enum={[1,2,3]}`
> -   `checker` 自定义校验函数。`checker={value => value > 10 && value < 100 || ' 输入比如大于 10 小与 100'}`

注：校验属性的值为 `null` 时表示不进行该校验

内置的校验规则无需再次声明，除非规则不符合预期，需要替换，则可以通过`$validators` 传递同名校验方法即可替换默认的。另外，内置的校验规则，如果校验不通过，会尝试去 `validMessage` 匹配错误信息。

##### `label`

如果表单项需要 label，应该通过该属性设置。你可以传入字符串，或者直接传入`Form.Label`节点：

```javascript
<FormGroup name="name" label="Username">
    <Form.Control />
</FormGroup>

//or

<FormGroup name="name" label={<Form.Label>Username</Form.Label>}>
    <Form.Control />
</FormGroup>
```

##### `helper`

如果要设置表单项的 helper，需要通过该字段设置，或者直接传入`HelpBlock`节点：

```javascript
<FormGroup name="name" helper="Please type your name">
    <FormControl />
</FormGroup>

//or

<FormGroup name="name" helper={<Form.Text className="text-muted">Please type your name</Form.Text>}>
    <FormControl />
</FormGroup>
```

##### `labelCol`

该属性可用来设置 label 的 `栅格` 布局：

```javascript
<FormGroup
    name="agree"
    label="Name"
    wrapperCol={{
        xs: 12,
        md: 10
    }}
    labelCol={{
        xs: 12,
        md: 2
    }}>
    <Control />
</FormGroup>
```

##### `wrapperCol`

该属性可用来搭配`labelCol`设置水平布局的表单项的 `栅格` 布局

##### `addons`

该属性可以用来实现`InputGroup`布局，该属性包含三个字段`pre` `end` `size`，可以分别用来添加前后`addons`以及设置`InputGroup`的尺寸大小。

如果`pre` `end`的值为字符串，则会自动添加`InputGroup.Prepend` `InputGroup.Append`组件。当然，你也可以自行定义要添加的节点。

```javascript
<FormGroup
    name="email"
    addons={{
        size: 'lg',
        pre: 'Email',
        end: (
            <InputGroup.Append>
                <InputGroup.Text>@apple.com</InputGroup.Text>
            </InputGroup.Append>
        )
    }}>
    <FormControl />
</FormGroup>
```

##### `extra`

该属性用来添加一个额外的节点内容。

```javascript
<FormGroup name="email" extra={<div>其他内容</div>}>
    <FormControl />
</FormGroup>

// 你可以利用 Fragment 添加多个其他节点内容
<FormGroup
    name="email"
    extra={
        <Fragment>
            <p>...</p>
            <div>...</div>
        </Fragment>
    }>
    <FormControl />
</FormGroup>
```

##### `$parser`

**注意：** 这里介绍的`$parser`和`$formatter`为`react-formutil@>0.5.0`的用法。如果你还在使用`0.5.0`以前的版本，请参考[安装`0.5.0`版本以上的`react-formutil`](https://github.com/qiqiboy/react-formutil#安装-installation);

当用户在表单中进行输入时（主动更新视图），视图中的值在更新到状态模型中前，会经过 `$parser` 处理。

```javascript
// 通过$parser属性来过滤前后输入空格
<FormGroup name="fieldName" $parser={(viewValue, $setViewValue) => viewValue.trim()}>
    //...
</FormGroup>
```

注意，上述写法不会修改当前视图值，它仅仅影响状态模型中的值。如果希望限制用户的输入（例如禁止用户输入任意空格），可以通过`$parser`的第二个参数`$setViewValue`，来在用户每次输入后立即更新视图值。

```javascript
// 通过$parser属性来过滤前后输入空格
<FormGroup name="fieldName" $parser={(viewValue, $setViewValue) => $setViewValue(viewValue.trim())} />
```

##### `$formatter`

当在表单模型中主动更新模型值时，会通过 `$formatter` 将模型中的值转换为`$viewValue`后传递给视图渲染。

```javascript
// 通过$formatter将模型中的值转换为标准的金额书写格式
<FormGroup name="amount" $formatter={(value, $setModelValue) => priceFormat(value)} />
```

`$formatter`同样有一个回调方法`$setModelValue`，它可以用来在处理模型值时再次对其进行修改。

##### `checked` `unchecked`

对于 `<Form.Check />`，其值默认是 checked 属性，为布尔值。可以通过`checked` `unchecked`来设置 checked 状态时所要映射的值：

```javascript
<FormGroup checked="yes" unchecked="no">
    <Form.Check type="checkbox" />
</FormGroup>
```

该示例中， 当 Switch 为开时，获取的值将为 yes。

##### `validMessage`

设置校验结果的错误信息。

```javascript
<FormGroup
    name="username"
    required
    validMessage={{
        required: '请输入用户名'
    }}>
    <FormControl />
</FormGroup>
```

##### `feedback`

布尔值。设置是否要支持额外的状态，如果设置为`true`，这表单项正确时将会显示 绿色的`valid`状态

```javascript
<FormGroup name="username" feedback>
    <FormControl />
</FormGroup>
```

##### `valuePropName` `changePropName` `focusPropName` `blurPropName`

该四个参数可以用来设置绑定到组件上的值或者值变动、是否聚焦等事件回调。该项一般不需要设置，`FormGroup` 已经针对 `react-bootstrap`
中的所有 `data-entry` 型组件做了兼容处理。

对于一些特殊场景，例如不需要同步 `focus`、`blur`，则可以通过将该值设为`{null}`来禁用：

```javascript
//禁用focus、blur状态同步
<FormGroup focusPropName={null} blurPropName={null} name="username">
    <FormControl />
</FormGroup>
```

##### `controlId` `as` `xs` `sm` `md` `lg` 等

这几个属性同`react-bootstrap`中 `FormGroup` 组件的同名属性，事实上任何可以传递给`Form.Group`的属性都可以传递。

##### `errorLevel`

用来覆盖全局的 errorLevel 设置。参考[`setErrorLevel(level)`](#seterrorlevellevel)

#### `<CheckboxGroup />`

该组件用来同步多选组，需要嵌套在`FormGroup`下配合使用：

> 每个子项`Form.Check`组件必须显式设置`value`属性值

```javascript
<FormGroup name="group.checkbox" required label="Checkbox group">
    <CheckboxGroup>
        <Form.Check inline type="checkbox" value="1" label="1" />
        <Form.Check inline type="checkbox" value="2" label="2" />
        <Form.Check inline type="checkbox" value="2" label="3" />
    </CheckboxGroup>
</FormGroup>
```

#### `<RadioGroup />`

该组件用来同步单选组，需要嵌套在`FormGroup`下配合使用：

> 每个子项`Form.Check`组件必须显式设置`value`属性值

```javascript
<FormGroup name="group.radio" required label="Radio group">
    <RadioGroup>
        <Form.Check inline type="radio" value="1" label="1" />
        <Form.Check inline type="radio" value="2" label="2" />
        <Form.Check inline type="radio" value="2" label="3" />
    </RadioGroup>
</FormGroup>
```

#### `<SwitchGroup />`

该组件用来同步单选组，需要嵌套在`FormGroup`下配合使用：

> 每个子项`Form.Check`组件必须显式设置`value`属性值

```javascript
<FormGroup name="group.switch" required label="Switch group">
    <SwitchGroup>
        <Form.Check inline type="switch" value="1" label="1" />
        <Form.Check inline type="switch" value="2" label="2" />
        <Form.Check inline type="switch" value="2" label="3" />
    </SwitchGroup>
</FormGroup>
```

#### `setErrorLevel(level)`

`setErrorLevel` 该方法可以用来全局设置错误信息何时出现，有三个级别可以设置：

-   `0` 当`$dirty` `$touched` `invalid` 都为 true 时
-   `1` 当`$dirty` `invalid` 都为 true 时
-   `2` 当`invalid` 为 true 时
-   `off` 关闭错误显示

默认值为 `1`

> 注意，该方法影响全局，如果只是希望单独对某个表单项进行设置，可以通过`errorLevel`属性进行设置：参考[`errorLevel`](#errorlevel)

```javascript
import { setErrorLevel } from 'react-bootstrap-formutil';

setErrorLevel(0);

// 当关闭错误显示时，errorLevel='off'，你可以手动自行设置错误展示方式：
<FormGroup
    name="errorOff"
    errorLevel="off"
    validationState={$formutil.$errors.errorOff ? 'error' : null}
    helper={$formutil.$errors.errorOff ? <div>出错啦</div> : null}>
    <FormControl />
</FormGroup>;
```

#### `支持的组件`

##### [`FormControl` `Form.Control`](https://react-bootstrap.github.io/components/forms/#forms-props-form-control)

```javascript
<FormGroup name="pwd">
    <FormControl type="password" />
</FormGroup>

<FormGroup name="pwd">
    <FormControl as="select">
        <option value="1">1</option>
        <option value="2">2</option>
    </FormControl>
</FormGroup>
```

##### [`Form.Check` `FormCheck`](https://react-bootstrap.github.io/components/forms/#forms-props-checkbox)

```javascript
<FormGroup name="agree">
    <Form.Check type="checkbox" />
</FormGroup>

<FormGroup name="agree">
    <Form.Check type="radio" />
</FormGroup>

<FormGroup name="agree">
    <Form.Check type="switch" />
</FormGroup>
```

##### [`InputGroup`](https://react-bootstrap.github.io/components/forms/#forms-props-input-group)

需要通过 `addons` 属性调用

```javascript
<FormGroup name="name" addons={{ pre: '@' }}>
    <FormControl type="text" />
</FormGroup>
```

##### [`ToggleButtonGroup`](https://react-bootstrap.github.io/components/button-group/#btn-groups-checkbox-radio)

```javascript
<FormGroup name="hobbies">
    <ToggleButtonGroup type="checkbox">
        <ToggleButton value={1}>option 1</ToggleButton>
        <ToggleButton value={2}>option 2</ToggleButton>
        <ToggleButton value={3}>option 3</ToggleButton>
    </ToggleButtonGroup>
</FormGroup>
```

##### [`CheckboxGroup`](#checkboxgroup-) [`RadioGroup`](#radiogroup-) [`SwitchGroup`](#switchgroup-)

**注意**：这三个组件并不是`react-bootstrap`提供的组件，而是`react-bootstrap-formutil`提供的。

```javascript
import { CheckboxGroup, RadioGroup, SwitchGroup } from 'react-bootstrap-formutil';
```

### FAQ

#### `给组件设置的 onChange、onFocus 等方法无效、不执行`

`FormGroup`会覆盖掉直接添加到 react-bootstrap 组件上的`onFocus` `onBlur` `onChange`方法，所以如果需要这三个事件方法，需要添加到
`FormGroup`上：

```javascript
<FormGroup name="test" onChange={ev => console.log('change', ev)} onFocus={ev => console.log('focus', ev)}>
    <FormControl />
</FormGroup>
```

#### `在生产环境(NODE_ENV==='production')部分组件调用有异常？`

如果在生产环境，发现例如`Checkbox` `Radio` `Switch`等组件无法正确捕获用户输入的值，这种情况一般是由于项目中使用了`babel-plugin-import`插件。

`react-bootstrap-formutil`中是使用 `import { FormControl } from 'react-bootstrap'` 这种写法来调用 `FormControl` 组件的，而`babel-plugin-import`插件会将项目源代码中的类似语句，替换成`import FormControl from 'react-bootstrap/lib/FormControl'`。这两种写法获取到的`Switch`其实并不是严格意义上的相等，前者是对后者的又一层导出封装。

而由于`babel-plugin-import`一般仅仅会配置成仅仅对项目代码进行处理，所以处于项目`node_modules`目录中的`react-bootstrap-formutil`中的语句不会被处理。我们需要通过修改项目 webpack 配置的方式，来使`babel-plugin-import`插件能处理`react-bootstrap-formutil`的代码。

可以编辑项目的 webpack 配置（只需要配置生产环境的构建配置即可），在`rules`模块下添加以下的代码：

```javascript
{
    test: /\.(js|mjs)$/,
    include: /react-bootstrap-formutil/, // 仅仅处理react-bootstrap-formutil即可
    loader: require.resolve('babel-loader'),
    options: {
        babelrc: false,
        plugins: [[
            "import",
            {
                "libraryName": "react-bootstrap"
            },
            "react-bootstrap"
        ]]
    }
}
```
