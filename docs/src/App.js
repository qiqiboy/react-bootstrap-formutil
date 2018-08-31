import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import { FormGroup, withForm } from '../../src';

class App extends Component {
    state = { acDataSource: [] };

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
            <Grid>
                <Row className="show-grid">
                    <Col xs={12} md={8}>
                        <code>{'<Col xs={12} md={8} />'};</code>
                    </Col>
                    <Col xs={6} md={4}>
                        <code>{'<Col xs={6} md={4} />'}</code>
                    </Col>

                    <Col lg={6} style={{ padding: 20 }}>
                        <pre>{JSON.stringify(this.props.$formutil.$params, null, 2)}</pre>
                    </Col>
                    <Col lg={6} style={{ padding: 20 }}>
                        <pre>{JSON.stringify(this.props.$formutil.$errors, null, 2)}</pre>
                    </Col>
                </Row>
            </Grid>
        );
    }
}

export default withForm(App);

