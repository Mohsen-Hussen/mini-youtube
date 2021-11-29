import React , {useState} from 'react';

const SearchBar = ({afterEnterSearchValue}) => {
    const [term , setTerm] = useState('');

    const formSubmit = (e) => {
        e.preventDefault();
        afterEnterSearchValue(term);
    };
    return (
        <div className="search-bar ui segment">
                <form className="ui form" onSubmit={formSubmit}>
                    <div className="field">
                        <label>Video Search</label>
                        <input type="text" value={term} onChange={(e) => {setTerm(e.target.value)}}/>
                    </div>
                </form>
            </div>
    )
}

export default SearchBar;