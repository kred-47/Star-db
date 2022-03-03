import React, {Component} from "react";
import {StarshipDetails, StarshipList} from "../sw-components";
import Row from "../row";

export default class StarshipPage extends Component {

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
                left={<StarshipList onItemSelected={this.onItemselected}/>}
                right={<StarshipDetails itemId={selectedItem} />}
            />
        );
    }
};