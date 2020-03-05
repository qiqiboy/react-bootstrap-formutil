import React, { Component } from 'react';
import { withForm, FormGroup, CheckboxGroup, RadioGroup, SwitchGroup } from 'app/../../src';
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

class App extends Component {
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

    render() {
        return (
            <Container fluid style={{ margin: '20px 0' }}>
                <h3 className="text-center">react-bootstrap-formutil</h3>
                <p />
                <Form noValidate onSubmit={this.submit}>
                    <CardColumns>
                        <Card>
                            <Card.Body>
                                <Card.Title>登录表单 - 纵向 - demo1</Card.Title>
                                <FormGroup
                                    label="Email address"
                                    name="demo1.email"
                                    helper="We'll never share your email with anyone else."
                                    required
                                    controlId="demo1.formBasicEmail">
                                    <Form.Control type="email" placeholder="Enter email" />
                                </FormGroup>

                                <FormGroup
                                    label="Password"
                                    name="demo1.password"
                                    required
                                    controlId="demo1.formBasicPassword">
                                    <Form.Control type="password" placeholder="Password" />
                                </FormGroup>

                                <FormGroup name="demo1.checkme" controlId="demo1.formBasicCheckbox">
                                    <Form.Check type="checkbox" label="Check me out" />
                                </FormGroup>
                                <pre>{JSON.stringify(this.props.$formutil.$params.demo1, null, 2)}</pre>
                            </Card.Body>
                        </Card>
                        <Card>
                            <Card.Body>
                                <Card.Title>登录表单 - 横向 - demo2</Card.Title>
                                <FormGroup
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
                                    name="demo3.password"
                                    required
                                    controlId="demo3.formBasicPassword">
                                    <Form.Control type="password" placeholder="Password" />
                                </FormGroup>

                                <FormGroup name="demo3.checkme" controlId="demo3.formBasicCheckbox">
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
                                        controlId="demo4.formBasicPassword">
                                        <Form.Control type="password" placeholder="Password" />
                                    </FormGroup>

                                    <FormGroup as={Col} name="demo4.checkme" controlId="demo4.formBasicCheckbox">
                                        <Form.Check type="checkbox" label="Check" />
                                    </FormGroup>
                                </Form.Row>
                                <FormGroup label="姓名">
                                    <InputGroup>
                                        <FormGroup
                                            name="demo4.first_name"
                                            required
                                            validMessage={{ required: 'First name reuqired!' }}
                                            noStyle>
                                            <Form.Control placeholder="姓" />
                                        </FormGroup>
                                        <FormGroup
                                            name="demo4.last_name"
                                            required
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
                                <FormGroup name="demo5.checkbox" required>
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
                                <FormGroup name="demo5.radio" required>
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
                                <FormGroup name="demo5.switch" required>
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

                                <FormGroup name="demo5.inlineSwitch" required>
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
                                <FormGroup label="input" name="demo6.input" required controlId="demo6.input">
                                    <Form.Control type="email" placeholder="Enter email" />
                                </FormGroup>

                                <FormGroup label="textarea" name="demo6.textarea" required controlId="demo6.textarea">
                                    <Form.Control as="textarea" />
                                </FormGroup>

                                <FormGroup
                                    label="select"
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
                                    controlId="demo6.toggleButtonRadio"
                                    $defaultValue={2}>
                                    <ToggleButtonGroup type="radio">
                                        <ToggleButton value={1}>Option 1</ToggleButton>
                                        <ToggleButton value={2}>Option 2</ToggleButton>
                                        <ToggleButton value={3}>Option 3</ToggleButton>
                                    </ToggleButtonGroup>
                                </FormGroup>

                                <FormGroup name="demo6.checkbox" required controlId="demo6.checkbox">
                                    <Form.Check custom type="checkbox" label="checkbox" />
                                </FormGroup>

                                <FormGroup name="demo6.radio" required controlId="demo6.radio">
                                    <Form.Check custom type="radio" label="radio" />
                                </FormGroup>

                                <FormGroup name="demo6.switch" required controlId="demo6.switch">
                                    <Form.Check type="switch" label="switch" />
                                </FormGroup>

                                <pre>{JSON.stringify(this.props.$formutil.$params.demo6, null, 2)}</pre>
                            </Card.Body>
                        </Card>
                    </CardColumns>
                    <Button variant="primary" type="submit" block>
                        Submit
                    </Button>
                    <pre>{JSON.stringify(this.props.$formutil.$params, null, 2)}</pre>
                </Form>
            </Container>
        );
    }
}

export default withForm(App);
