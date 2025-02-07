import React from 'react'
import './SearchBar.css'


class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      term: '',
      location: '',
      sortBy: 'best_match'
    }
    this.sortByOptions = {
      "Best Match": "best_match",
      "Highest Rated": "rating",
      "Most Reviewed": "review_count"
    }
    this.handleTermChange = this.handleTermChange.bind(this);
    this.handleLocationChange = this.handleLocationChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }
  getSortByClass(sortByOption) {
    if (this.state.sortBy === this.sortByOptions[sortByOption]) return 'active';
  }
  handleSortByChange(sortByOption) {
    this.setState({
      sortBy: sortByOption
    });
  }
  handleTermChange(e) {
    this.setState({
      term: e.target.value
    });
  }
  handleLocationChange(e) {
    this.setState({
      location: e.target.value
    });
  }
  handleSearch(e) {
    this.props.searchYelp(this.state.term, this.state.location, this.state.sortBy);
    e.preventDefault();
  }
  renderSortByOptions() {
    return Object.keys(this.sortByOptions).map(sortByOption => {
      const sortByOptionValue = this.sortByOptions[sortByOption];
      const sortByOptionClass = this.getSortByClass(sortByOption);
      return <li key={sortByOptionValue} className={sortByOptionClass} onClick={this.handleSortByChange.bind(this, sortByOptionValue)}>{sortByOption}</li>;
    });
  }
  render() {
    return (
      <div className="SearchBar">
        <div className="SearchBar-sort-options">
          <ul>
            { this.renderSortByOptions() }
          </ul>
        </div>
        <div className="SearchBar-fields">
          <input onChange={this.handleTermChange} placeholder="Search Businesses" />
          <input onChange={this.handleLocationChange} placeholder="Where?" />
        </div>
        <div className="SearchBar-submit">
          <a href="/" onClick={this.handleSearch}>Let's Go</a>
        </div>
      </div>
    )
  }
}

export default SearchBar;
