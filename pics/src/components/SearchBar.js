import React from 'react';

class SearchBar extends React.Component {
    OnInputChange(event){
    console.log(event.target.value);
    }

    onInputClick(){
        console.log('Input was clicked')
    }

    render(){
        return(
            <div className="ui segment">
                <form className="ui form">
                    <div className="field">
                        <label>Image Search</label>
                        <input type="text" onClick={this.onInputClick} onChange={this.OnInputChange} />
                    </div>
                </form>
            </div>
        ); 
    }
}

export default SearchBar;