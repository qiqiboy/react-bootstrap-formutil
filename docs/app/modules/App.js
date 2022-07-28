import MemoRender from 'memo-render';
import React, { Component } from 'react';
import {
    Container,
    Form,
    InputGroup,
    Button,
    Card,
    CardColumns,
    Col,
    ToggleButtonGroup,
    ToggleButton
} from 'react-bootstrap';
import { withForm, FormGroup, CheckboxGroup, RadioGroup, SwitchGroup } from 'app/../../src';

class App extends Component {
    state = { memoIndex: 0 };

    submit = ev => {
        ev.preventDefault();

        const { $invalid, $batchDirty } = this.props.$formutil;

        console.log('submit');

        if ($invalid) {
            $batchDirty(true);
        } else {
            // submit data
        }
    };

    memoEnum = [false, true, []];

    render() {
        const $memo = this.memoEnum[this.state.memoIndex];

        return (
            <Container fluid style={{ margin: '20px 0' }}>
                <h3 className="text-center">react-bootstrap-formutil</h3>
                <p />
                <MemoRender deps={[this.state.memoIndex]}>
                    <div
                        className="enable-memo"
                        style={{ position: 'sticky', padding: 10, top: 0, zIndex: 10, background: 'white' }}>
                        Enable $memo：
                        <ToggleButtonGroup
                            size="sm"
                            name="$memo-enable"
                            type="radio"
                            value={this.state.memoIndex}
                            onChange={value => {
                                this.setState({
                                    memoIndex: value
                                });
                            }}>
                            <ToggleButton value={0}>false</ToggleButton>
                            <ToggleButton value={1}>true</ToggleButton>
                            <ToggleButton value={2}>空数组</ToggleButton>
                        </ToggleButtonGroup>
                    </div>
                </MemoRender>
                <Form noValidate onSubmit={this.submit}>
                    <CardColumns>
                        <Card>
                            <Card.Body>
                                <Card.Title>登录表单 - 纵向 - demo1</Card.Title>
                                <FormGroup
                                    $memo={$memo}
                                    label="Email address"
                                    name="demo1.email"
                                    helper="We'll never share your email with anyone else."
                                    required
                                    controlId="demo1.formBasicEmail">
                                    <Form.Control type="email" placeholder="Enter email" />
                                </FormGroup>

                                <FormGroup
                                    $memo={$memo}
                                    label="Password"
                                    name="demo1.password"
                                    required
                                    controlId="demo1.formBasicPassword">
                                    <Form.Control type="password" placeholder="Password" />
                                </FormGroup>

                                <FormGroup name="demo1.checkme" controlId="demo1.formBasicCheckbox" $memo={$memo}>
                                    <Form.Check type="checkbox" label="Check me out" />
                                </FormGroup>
                                <pre>{JSON.stringify(this.props.$formutil.$params.demo1, null, 2)}</pre>
                            </Card.Body>
                        </Card>
                        <Card>
                            <Card.Body>
                                <Card.Title>登录表单 - 横向 - demo2</Card.Title>
                                <FormGroup
                                    $memo={$memo}
                                    labelCol={{ sm: 4 }}
                                    wrapperCol={{ sm: 8 }}
                                    label="Email address"
                                    name="demo2.email"
                                    helper="We'll never share your email with anyone else."
                                    required
                                    controlId="demo2.formBasicEmail">
                                    <Form.Control type="email" placeholder="Enter email" />
                                </FormGroup>

                                <FormGroup
                                    $memo={$memo}
                                    labelCol={{ sm: 4 }}
                                    wrapperCol={{ sm: 8 }}
                                    label="Password"
                                    name="demo2.password"
                                    required
                                    controlId="demo2.formBasicPassword">
                                    <Form.Control type="password" placeholder="Password" />
                                </FormGroup>

                                <FormGroup
                                    wrapperCol={{
                                        sm: {
                                            offset: 4
                                        }
                                    }}
                                    $memo={$memo}
                                    name="demo2.checkme"
                                    controlId="demo2.formBasicCheckbox">
                                    <Form.Check type="checkbox" label="Check me out" />
                                </FormGroup>
                                <pre>{JSON.stringify(this.props.$formutil.$params.demo2, null, 2)}</pre>
                            </Card.Body>
                        </Card>
                        <Card>
                            <Card.Body>
                                <Card.Title>登录表单 - 内嵌 - demo3</Card.Title>
                                <FormGroup
                                    addons={{
                                        pre: 'Email address'
                                    }}
                                    $memo={$memo}
                                    name="demo3.email"
                                    helper="We'll never share your email with anyone else."
                                    required
                                    controlId="demo3.formBasicEmail">
                                    <Form.Control type="email" placeholder="Enter email" />
                                </FormGroup>

                                <FormGroup
                                    addons={{
                                        pre: 'Password'
                                    }}
                                    $memo={$memo}
                                    name="demo3.password"
                                    required
                                    controlId="demo3.formBasicPassword">
                                    <Form.Control type="password" placeholder="Password" />
                                </FormGroup>

                                <FormGroup name="demo3.checkme" controlId="demo3.formBasicCheckbox" $memo={$memo}>
                                    <Form.Check type="checkbox" label="Check me out" />
                                </FormGroup>
                                <pre>{JSON.stringify(this.props.$formutil.$params.demo3, null, 2)}</pre>
                            </Card.Body>
                        </Card>

                        <Card>
                            <Card.Body>
                                <Card.Title>登录表单 - 行内 - demo4</Card.Title>
                                <Form.Row>
                                    <FormGroup
                                        as={Col}
                                        $memo={$memo}
                                        name="demo4.email"
                                        helper="We'll never share your email with anyone else."
                                        required
                                        controlId="demo4.formBasicEmail">
                                        <Form.Control type="email" placeholder="Enter email" />
                                    </FormGroup>

                                    <FormGroup
                                        as={Col}
                                        name="demo4.password"
                                        required
                                        $memo={$memo}
                                        controlId="demo4.formBasicPassword">
                                        <Form.Control type="password" placeholder="Password" />
                                    </FormGroup>

                                    <FormGroup
                                        as={Col}
                                        name="demo4.checkme"
                                        controlId="demo4.formBasicCheckbox"
                                        $memo={$memo}>
                                        <Form.Check type="checkbox" label="Check" />
                                    </FormGroup>
                                </Form.Row>
                                <FormGroup label="姓名">
                                    <InputGroup>
                                        <FormGroup
                                            name="demo4.first_name"
                                            required
                                            $memo={$memo}
                                            validMessage={{ required: 'First name reuqired!' }}
                                            noStyle>
                                            <Form.Control placeholder="姓" />
                                        </FormGroup>
                                        <FormGroup
                                            name="demo4.last_name"
                                            required
                                            $memo={$memo}
                                            validMessage={{ required: 'Last name reuqired!' }}
                                            noStyle>
                                            <Form.Control placeholder="名" />
                                        </FormGroup>
                                    </InputGroup>
                                </FormGroup>

                                <pre>{JSON.stringify(this.props.$formutil.$params.demo4, null, 2)}</pre>
                            </Card.Body>
                        </Card>

                        <Card>
                            <Card.Body>
                                <Card.Title>单选组和多选组 - demo5</Card.Title>
                                <FormGroup name="demo5.checkbox" required $memo={$memo}>
                                    <CheckboxGroup>
                                        <Form.Check
                                            custom
                                            checked
                                            value="1"
                                            type="checkbox"
                                            id="demo5.checkbox.1"
                                            label={`Check this custom checkbox`}
                                        />

                                        <Form.Check
                                            custom
                                            disabled
                                            value="2"
                                            type="checkbox"
                                            label="disabled checkbox"
                                            id="demo5.checkbox.2"
                                        />
                                    </CheckboxGroup>
                                </FormGroup>
                                <FormGroup name="demo5.radio" required $memo={$memo}>
                                    <RadioGroup>
                                        <Form.Check
                                            custom
                                            checked
                                            value="1"
                                            type="radio"
                                            id="demo5.radio.1"
                                            label={`Check this custom radio`}
                                        />

                                        <Form.Check
                                            custom
                                            disabled
                                            value="2"
                                            type="radio"
                                            label="disabled radio"
                                            id="demo5.radio.2"
                                        />
                                    </RadioGroup>
                                </FormGroup>
                                <FormGroup name="demo5.switch" required $memo={$memo}>
                                    <SwitchGroup>
                                        <Form.Check
                                            custom
                                            value="1"
                                            checked
                                            type="switch"
                                            id="demo5.switch.1"
                                            label={`Check this custom switch`}
                                        />

                                        <Form.Check
                                            custom
                                            disabled
                                            value="2"
                                            type="switch"
                                            label="disabled switch"
                                            id="demo5.switch.2"
                                        />
                                    </SwitchGroup>
                                </FormGroup>

                                <FormGroup name="demo5.inlineSwitch" required $memo={$memo}>
                                    <CheckboxGroup>
                                        <Form.Check
                                            inline
                                            value="1"
                                            checked
                                            type="switch"
                                            id="demo5.inlineSwitch.1"
                                            label="inline 1"
                                        />

                                        <Form.Check
                                            inline
                                            disabled
                                            value="2"
                                            type="switch"
                                            label="inline 2"
                                            id="demo5.inlineSwitch.2"
                                        />
                                    </CheckboxGroup>
                                </FormGroup>

                                <pre>{JSON.stringify(this.props.$formutil.$params.demo5, null, 2)}</pre>
                            </Card.Body>
                        </Card>

                        <Card>
                            <Card.Body>
                                <Card.Title>其他组件 - demo6</Card.Title>
                                <FormGroup
                                    label="input"
                                    name="demo6.input"
                                    required
                                    controlId="demo6.input"
                                    $memo={$memo}>
                                    <Form.Control type="email" placeholder="Enter email" />
                                </FormGroup>

                                <FormGroup
                                    label="textarea"
                                    name="demo6.textarea"
                                    required
                                    controlId="demo6.textarea"
                                    $memo={$memo}>
                                    <Form.Control as="textarea" />
                                </FormGroup>

                                <FormGroup
                                    label="select"
                                    $memo={$memo}
                                    name="demo6.select"
                                    helper="We'll never share your email with anyone else."
                                    required
                                    controlId="demo6.select">
                                    <Form.Control as="select">
                                        <option disabled value="">
                                            请选择
                                        </option>
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                    </Form.Control>
                                </FormGroup>

                                <FormGroup
                                    label="select"
                                    $memo={$memo}
                                    name="demo6.multipleSelect"
                                    helper="We'll never share your email with anyone else."
                                    required
                                    controlId="demo6.select">
                                    <Form.Control as="select" multiple>
                                        <option disabled value="">
                                            请选择
                                        </option>
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                    </Form.Control>
                                </FormGroup>

                                <FormGroup
                                    name="demo6.toggleButtonCheckbox"
                                    required
                                    $memo={$memo}
                                    controlId="demo6.toggleButtonCheckbox"
                                    $defaultValue={[2]}>
                                    <ToggleButtonGroup type="checkbox">
                                        <ToggleButton value={1}>Option 1</ToggleButton>
                                        <ToggleButton value={2}>Option 2</ToggleButton>
                                        <ToggleButton value={3}>Option 3</ToggleButton>
                                    </ToggleButtonGroup>
                                </FormGroup>

                                <FormGroup
                                    name="demo6.toggleButtonRadio"
                                    required
                                    $memo={$memo}
                                    controlId="demo6.toggleButtonRadio"
                                    $defaultValue={2}>
                                    <ToggleButtonGroup name="demo6.toggleButtonRadio" type="radio">
                                        <ToggleButton value={1}>Option 1</ToggleButton>
                                        <ToggleButton value={2}>Option 2</ToggleButton>
                                        <ToggleButton value={3}>Option 3</ToggleButton>
                                    </ToggleButtonGroup>
                                </FormGroup>

                                <FormGroup name="demo6.checkbox" required controlId="demo6.checkbox" $memo={$memo}>
                                    <Form.Check custom type="checkbox" label="checkbox" />
                                </FormGroup>

                                <FormGroup name="demo6.radio" required controlId="demo6.radio" $memo={$memo}>
                                    <Form.Check custom type="radio" label="radio" />
                                </FormGroup>

                                <FormGroup name="demo6.switch" required controlId="demo6.switch" $memo={$memo}>
                                    <Form.Check type="switch" label="switch" />
                                </FormGroup>

                                <pre>{JSON.stringify(this.props.$formutil.$params.demo6, null, 2)}</pre>
                            </Card.Body>
                        </Card>
                    </CardColumns>
                    <MemoRender disabled={!$memo}>
                        <Button variant="primary" type="submit" block>
                            Submit
                        </Button>
                        <pre>{JSON.stringify(this.props.$formutil.$params, null, 2)}</pre>
                    </MemoRender>
                </Form>
            </Container>
        );
    }
}

export default withForm(App);
