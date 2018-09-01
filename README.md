# react-bootstrap-formutil

[![npm](https://img.shields.io/npm/v/react-bootstrap-formutil.svg?style=flat)](https://npm.im/react-bootstrap-formutil)

Happy to use react-formutil in the project based on `react-bootstrap` ^\_^

在 [react-bootstrap](https://github.com/react-bootstrap/react-bootstrap) 项目，结合[react-formutil](https://github.com/qiqiboy/react-formutil) 来快速构建表单。

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
        * [`$parser`](#parser)
        * [`$formatter`](#formatter)
        * [`checked` `unchecked`](#checked-unchecked)
        * [`validMessage`](#validmessage)
        * [`valuePropName` `changePropName` `focusPropName` `blurPropName`](#valuepropname-changepropname-focuspropname-blurpropname)
        * [`controlId` `bsSize` `bsClass`](#controlid-bssize-bsclass)
    + [`<CheckboxGroup />`](#checkboxgroup-)
    + [`<RadioGroup />`](#radiogroup-)
    + [`支持的组件`](#支持的组件)
        * [`FormControl`](#formcontrol)
        * [`Checkbox`](#checkbox)
        * [`Radio`](#radio)
        * [`InputGroup`](#inputgroup)
        * [`Checkbox` `Radio`](#checkbox-radio)
- [FAQ](#faq)
    + [`给组件设置的 onChange、onFocus 等方法无效、不执行`](#给组件设置的-onchangeonfocus-等方法无效不执行)

<!-- vim-markdown-toc -->

### 安装 Installation

```bash
# npm
npm install react-bootstrap-formutil --save

# yarn
yarn install react-bootstrap-formutil
```

### 使用 Usage

> `react-bootstrap-formutil` 整合了 `react-formutil` 的组件，所以可以直接从`react-bootstrap-formutil`中导出所需要的
> `react-formutil` 组件。不用单独从 `react-formutil` 中导出。

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

##### `name`

设置输入项的 name 值，表单项将会以 name 作为 key 收集到 formutil 的状态中。支持嵌套语法 _（同`react-formutil`的`Field`同名参数，可以参考 [name](https://github.com/qiqiboy/react-formutil#name)）_

##### `$defaultValue`

设置该表单项的默认值 _（同`react-formutil`的`Field`同名参数，可以参考[$defaultvalue](https://github.com/qiqiboy/react-formutil#defaultvalue)）_

##### `$validators`

设置校验方法 _（同`react-formutil`的`Field`同名参数 , 可以参考
[$validators](https://github.com/qiqiboy/react-formutil#validators)）_

> 同 react-formutil 的 EasyField，FormControl 也内置了同样的校验规则：

> *   `required` 必填 `required`
> *   `maxLength` 。最大输入长度，有效输入时才会校验 `maxLength="100"`
> *   `minLength` 最小输入长度，有效输入时才会校验 `minLength="10"`
> *   `max` 最大输入数值，仅支持 Number 比较。有效输入时才会校验 `max="100"`
> *   `min` 最小输入数值，仅支持 Number 比较。有效输入时才会校验 `min="10"`
> *   `pattern` 正则匹配。有效输入时才会校验 `pattern={/^\d+$/}`
> *   `enum` 枚举值检测。有效输入时才会校验 `enum={[1,2,3]}`
> *   `checker` 自定义校验函数。`checker={value => value > 10 && value < 100 || ' 输入比如大于 10 小与 100'}`

注：校验属性的值为 `null` 时表示不进行该校验

内置的校验规则无需再次声明，除非规则不符合预期，需要替换，则可以通过`$validators` 传递同名校验方法即可替换默认的。另外，内置的校验规则，如果校验不通过，会尝试去 `validMessage` 匹配错误信息。

##### `label`

如果表单项需要 label，应该通过该属性设置。你可以传入字符串，或者直接传入`ControlLabel`节点：

```javascript
<FormGroup name="name" label="Username">
    <FormControl />
</FormGroup>

//or

<FormGroup name="name" label={<ControlLabel>Username</ControlLabel>}>
    <FormControl />
</FormGroup>
```

##### `helper`

如果要设置表单项的 helper，需要通过该字段设置，或者直接传入`HelpBlock`节点：

```javascript
<FormGroup name="name" helper="Please type your name">
    <FormControl />
</FormGroup>

//or

<FormGroup name="name" helper={<HelpBlock>Please type your name</HelpBlock>}>
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

示例见`labelCol`

##### `$parser`

设置输入的值收集到 formutil 状态中时的过滤处理。默认为`value => value`

```javascript
<FormGroup $parser={value => parseInt(value)}>
    <FormControl />
</FormGroup>
```

##### `$formatter`

设置 formutil 中的值渲染到输入组件上时的过滤处理。默认为`value => value`

```javascript
<FormGroup $formatter={value => '$' + value}>
    <FormControl />
</FormGroup>
```

##### `checked` `unchecked`

对于 `<Switch />` `<Checkbox />` `<Radio />` 这三种组件，其值默认是 checked 属性，为布尔值。可以通过`checked`
`unchecked`来设置 checked 状态时所要映射的值：

```javascript
<FormGroup checked="yes" unchecked="no">
    <Checkbox />
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

##### `controlId` `bsSize` `bsClass`

这三个属性同`react-bootstrap`中 FormGroup 组件的同名属性

#### `<CheckboxGroup />`

该组件用来同步多选组，需要嵌套在`FormGroup`下配合使用：

> 每个子项`Checkbox`组件必须显式设置`value`属性值

```javascript
<FormGroup
    name="group.checkbox"
    required
    label="Checkbox group"
    wrapperCol={{
        xs: 12,
        md: 10
    }}
    labelCol={{
        xs: 12,
        md: 2
    }}>
    <CheckboxGroup>
        <Checkbox inline value="1">
            1
        </Checkbox>
        <Checkbox inline value="2">
            2
        </Checkbox>
        <Checkbox inline value="3">
            3
        </Checkbox>
    </CheckboxGroup>
</FormGroup>
```

#### `<RadioGroup />`

该组件用来同步单选组，需要嵌套在`FormGroup`下配合使用：

> 每个子项`Radio`组件必须显式设置`value`属性值

```javascript
<FormGroup
    name="group.radio"
    required
    label="Radio group"
    wrapperCol={{
        xs: 12,
        md: 10
    }}
    labelCol={{
        xs: 12,
        md: 2
    }}>
    <RadioGroup>
        <Radio value="1">1</Radio>
        <Radio value="2">2</Radio>
        <Radio value="3">3</Radio>
    </RadioGroup>
</FormGroup>
```

#### `支持的组件`

##### [`FormControl`](https://react-bootstrap.github.io/components/forms/#forms-props-form-control)

```javascript
<FormGroup name="pwd">
    <FormControl type="password" />
</FormGroup>

<FormGroup name="pwd">
    <FormControl type="select">
        <option value="1">1</option>
        <option value="2">2</option>
    </FormControl>
</FormGroup>
```

##### [`Checkbox`](https://react-bootstrap.github.io/components/forms/#forms-props-checkbox)

```javascript
<FormGroup name="agree">
    <Checkbox />
</FormGroup>
```

##### [`Radio`](https://react-bootstrap.github.io/components/forms/#forms-props-radio)

```javascript
<FormGroup name="agree">
    <Radio />
</FormGroup>
```

##### [`InputGroup`](https://react-bootstrap.github.io/components/forms/#forms-props-input-group)

```javascript
<FormGroup name="name">
    <InputGroup>
        <InputGroup.Addon>@</InputGroup.Addon>
        <FormControl type="text" />
    </InputGroup>
</FormGroup>
```

##### [`Checkbox`](#checkbox) [`Radio`](#radio)

**注意**：这两个组件并不是`react-bootstrap`提供的组件，而是`react-bootstrap-formutil`提供的。

```javascript
import { CheckboxGroup, RadioGroup } from 'react-bootstrap-formutil';
```

### FAQ

#### `给组件设置的 onChange、onFocus 等方法无效、不执行`

`FormGroup`会覆盖掉直接添加到 antd 组件上的`onFocus` `onBlur` `onChange`方法，所以如果需要这三个事件方法，需要添加到
`FormGroup`上：

```javascript
<FormGroup name="test" onChange={ev => console.log('change', ev)} onFocus={ev => console.log('focus', ev)}>
    <FormControl />
</FormGroup>
```
