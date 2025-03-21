import './App.css';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as solidHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart as regularHeart } from '@fortawesome/free-regular-svg-icons';

function App() {
    let [Like, setLike] = useState(false);

    let toggleLike = () => {
        setLike(!Like);
    }

    return (
        <div className="App">
            <p onClick={toggleLike}>
                {Like ? (
                    <FontAwesomeIcon icon={solidHeart} />
                ) : (
                    <FontAwesomeIcon icon={regularHeart} />
                )}
            </p>
        </div>
    );
}

export default App;