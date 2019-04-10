import React, { Component } from 'react';
import { withForm, FormGroup, CheckboxGroup, RadioGroup, setErrorLevel } from '../../../src';
import {
    Grid,
    Row,
    Col,
    Form,
    FormControl,
    Checkbox,
    Radio,
    Button,
    ToggleButtonGroup,
    ToggleButton
} from 'react-bootstrap';

setErrorLevel(0);

@withForm
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
            <Grid fluid>
                <Row>
                    <Col xs={12}>
                        <h3 style={{ textAlign: 'center' }}>react-bootstrap-formutil</h3>
                    </Col>
                    <Col xs={12} md={6}>
                        <Form onSubmit={this.submit}>
                            <FormGroup name="text" required>
                                <FormControl type="text" placeholder="enter text" />
                            </FormGroup>

                            <FormGroup name="pwd" required validMessage={{ required: 'enter password' }}>
                                <FormControl type="password" placeholder="enter password" />
                            </FormGroup>

                            <FormGroup name="name" required label="Name" controlId="text">
                                <FormControl type="text" />
                            </FormGroup>

                            <FormGroup name="age" required label="Age" helper="Your age">
                                <FormControl type="number" />
                            </FormGroup>

                            <FormGroup name="select" required label="Select">
                                <FormControl componentClass="select" placeholder="select">
                                    <option value="">select</option>
                                    <option value="select1">option 1</option>
                                    <option value="select2">opton 2</option>
                                    <option value="other">...</option>
                                </FormControl>
                            </FormGroup>

                            <FormGroup
                                name="addon"
                                required
                                label="Addon"
                                addons={{
                                    pre: '@'
                                }}>
                                <FormControl type="text" />
                            </FormGroup>

                            <div className="form-horizontal">
                                <FormGroup
                                    name="job"
                                    required
                                    label="Job"
                                    controlId="job"
                                    helper="Your Job"
                                    labelCol={{
                                        xs: 12,
                                        md: 2
                                    }}
                                    wrapperCol={{
                                        xs: 12,
                                        md: 10
                                    }}>
                                    <FormControl type="text" />
                                </FormGroup>

                                <FormGroup
                                    name="agree"
                                    checked="yes"
                                    unchecked="no"
                                    required
                                    label="Checkbox"
                                    wrapperCol={{
                                        xs: 12,
                                        md: 10
                                    }}
                                    labelCol={{
                                        xs: 12,
                                        md: 2
                                    }}>
                                    <Checkbox>Checkbox</Checkbox>
                                </FormGroup>

                                <FormGroup
                                    name="radio"
                                    checked="yes"
                                    unchecked="no"
                                    required
                                    label="Radio"
                                    wrapperCol={{
                                        xs: 12,
                                        md: 10
                                    }}
                                    labelCol={{
                                        xs: 12,
                                        md: 2
                                    }}>
                                    <Radio>Radio</Radio>
                                </FormGroup>

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

                                <FormGroup
                                    name="group.buttonCheckbox"
                                    required
                                    label="ButtonGroup"
                                    $defaultValue={[1, 2]}
                                    wrapperCol={{
                                        xs: 12,
                                        md: 10
                                    }}
                                    labelCol={{
                                        xs: 12,
                                        md: 2
                                    }}>
                                    <ToggleButtonGroup type="checkbox">
                                        <ToggleButton value={1}>option 1</ToggleButton>
                                        <ToggleButton value={2}>option 2</ToggleButton>
                                        <ToggleButton value={3}>option 3</ToggleButton>
                                    </ToggleButtonGroup>
                                </FormGroup>

                                <FormGroup
                                    name="group.buttonRadio"
                                    required
                                    $defaultValue={3}
                                    label="ButtonGroup"
                                    wrapperCol={{
                                        xs: 12,
                                        md: 10
                                    }}
                                    labelCol={{
                                        xs: 12,
                                        md: 2
                                    }}>
                                    <ToggleButtonGroup type="radio">
                                        <ToggleButton value={1}>option 1</ToggleButton>
                                        <ToggleButton value={2}>option 2</ToggleButton>
                                        <ToggleButton value={3}>option 3</ToggleButton>
                                    </ToggleButtonGroup>
                                </FormGroup>
                            </div>

                            <Button block bsStyle="primary" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </Col>
                    <Col xs={12} md={3}>
                        <h4>$params</h4>
                        <pre>{JSON.stringify(this.props.$formutil.$params, null, 2)}</pre>
                    </Col>
                    <Col xs={12} md={3}>
                        <h4>$errors</h4>
                        <pre>{JSON.stringify(this.props.$formutil.$errors, null, 2)}</pre>
                    </Col>
                </Row>
            </Grid>
        );
    }
}

export default App;
