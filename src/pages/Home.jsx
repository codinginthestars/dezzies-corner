/* eslint-disable react/no-unescaped-entities */
import './Home.css';
import dezzie from '../assets/dezzies-home.jpg';

function Home() {
    return (
        <div className="home">
            <h1>Dezzie's Doodles</h1>
            <div className="hero-section">
                <div className="left-section">
                    <p>Pitter Patter, Let the ink splatter!</p>
                </div>
                <div className="right-section">
                    <div className="image-container">
                        <img src={dezzie} className='dezzie-image' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;