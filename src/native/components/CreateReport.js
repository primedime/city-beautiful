import React from 'react';
import { Container, Content, Button, Text, ListItem, Body, CheckBox, Textarea, Form, Item, Label } from 'native-base';
import { Actions } from 'react-native-router-flux';

const CreateReportComponent = (props) => (
    <Container>
        <Content padder>
            <Form>
                <Item floatingLabel>
                    <Label>Description</Label>
                </Item>
                <Textarea rowSpan={5} bordered placeholder="...enter a brief description" />
                <ListItem>
                    <CheckBox checked={props.submitAnonymously} />
                    <Body>
                        <Text>Submit anonymously</Text>
                    </Body>
                </ListItem>

                <Button block success onPress={Actions.pop}>
                    <Text>Submit</Text>
                </Button>
            </Form>

        </Content>
    </Container>
);

CreateReportComponent.propTypes = {
};

CreateReportComponent.defaultProps = {
};

export default CreateReportComponent;