import React from 'react';
import SearchBar from './SearchBar';

class MainPage extends React.Component {

    render() {
        return(
            <div className='outer-wrapper'>
                
                <SearchBar />
            </div>
        )
    }
}

export default MainPage;