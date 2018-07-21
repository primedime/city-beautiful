import React from 'react';
import { TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { Container, Content, H2, Icon } from 'native-base';
import { Actions } from 'react-native-router-flux';

const StartReportComponent = (props) => (
    <Container>
        <Content>
            <H2 style={{ alignSelf: "center", marginTop: 20 }}>Report a cleanup.</H2>
            <TouchableOpacity style={{ alignSelf: "center", marginTop: 50 }} onPress={Actions.createReport}>
                <Icon type="FontAwesome" name="plus-circle" style={{ fontSize: 30, color: 'blue' }} />
            </TouchableOpacity>
        </Content>
    </Container>
);

StartReportComponent.propTypes = {
};

StartReportComponent.defaultProps = {
};

export default StartReportComponent;