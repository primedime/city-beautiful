import React from 'react';
import { Container, Content, Button, Text, ListItem, Body, CheckBox } from 'native-base';
import { Actions } from 'react-native-router-flux';

const CreateReportComponent = (props) => (
    <Container>
        <Content>
            <ListItem>
                <CheckBox checked={props.submitAnonymously} />
                <Body>
                    <Text>Submit anonymously</Text>
                </Body>
            </ListItem>

            <Button block success onPress={Actions.pop}>
                <Text>Submit</Text>
            </Button>
        </Content>
    </Container>
);

CreateReportComponent.propTypes = {
};

CreateReportComponent.defaultProps = {
};

export default CreateReportComponent;