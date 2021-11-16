import React, { Component } from 'react';

export class SearchBar extends Component {
    state = {term: ''};
    newTermValueHandler = (e) => {
        this.setState({term: e.target.value});
    };
    formSubmit = (e) => {
        e.preventDefault();
        this.props.afterEnterSearchValue(this.state.term);
    };
    render() {
        return (
            <div className="search-bar ui segment">
                <form className="ui form" onSubmit={this.formSubmit}>
                    <div className="field">
                        <label>Video Search</label>
                        <input type="text" value={this.state.term} onChange={this.newTermValueHandler}/>
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBar;