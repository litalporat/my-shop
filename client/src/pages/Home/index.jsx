import Catalog from '../../components/Catalog'
import './Home.css'

const HomePage = () => {
    return (
        <div className="home-body">
        <div className='home-cont'>
        <div className="home-head">
            <h1> Welcome To Our App</h1>
            <p > Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste unde quibusdam, laborum aperiam veniam et nisi architecto doloremque commodi tempore eveniet vero velit accusamus, ipsam ex nesciunt provident reiciendis! Nihil.</p>
            <button class="learn-more">
                <span class="circle" aria-hidden="true">
                <span class="icon arrow"></span>
                </span>
                <span class="button-text">Start Tour</span>
            </button>
        </div>

        </div>
        </div>
    )
}

export default HomePage