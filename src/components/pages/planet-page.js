import React, {Component} from "react";
import {PlanetDetails, PlanetList} from "../sw-components";
import Row from "../row";

export default class PlanetPage extends Component {

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
                left={<PlanetList onItemSelected={this.onItemselected}/>}
                right={<PlanetDetails itemId={selectedItem} />}
            />
        );
    }
};