import React, { Component } from "react";
import { Toolbar } from './ToolbarFC';
import { ProjectList } from './ProjectsFC';

export class Portfolio extends Component {
  constructor(cards) {
    super();
    this.state = { selected: 'All' };
    this.filters = {
      arrFilters: ["All", "Websites", "Flayers", "Business Cards"],
      selected: this.state.selected,
      onSelectFilter: this.handlerSwitchToolbar,
    }
    this.dataCards = cards;
    this.dataResultArrCards = this.dataCards.cards;
  }

  handlerSwitchToolbar = (event) => {
    this.filters.selected = event.target.textContent;
    this.dataResultArrCards = [];
    this.dataCards.cards.forEach(item => {
      if (event.target.textContent === 'All') {
        this.dataResultArrCards.push(item);
      } else {
        if (event.target.textContent === item.category) {
          this.dataResultArrCards.push(item);
        }
      }
    })
    this.setState({ selected: event.target.textContent });
  }

  render() {
    return (
      <>
      <div className="block-toolbar">
        <Toolbar items={this.filters} />
      </div>
      <div className="block-cards">
        <ProjectList items={this.dataResultArrCards} />
      </div>
      </>
    )
  }
}
