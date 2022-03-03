import React, {Component} from "react";
import {PersonDetails, PersonList} from "../sw-components";
import Row from "../row";

export default class PersonPage extends Component {

    state = {
        selectedItem: null
    };

    onItemselected = (selectedItem) => {
        this.setState({ selectedItem })
    };

    render() {

        const { selectedItem } = this.state;

        return (
            <Row
                left={<PersonList onItemSelected={this.onItemselected}/>}
                right={<PersonDetails itemId={selectedItem} />}
            />
        );
    }
};