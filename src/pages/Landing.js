import main from '../assets/images/main.svg';
import { Logo } from '../components';
import Wrapper from '../assets/wrappers/Testing';
import { Link } from 'react-router-dom';

const Landing=()=>{
  return (
    <Wrapper>
        <nav>
            <Logo/>
        </nav>
        <div className="container page">
            <div className="info">
                <h1>
                    job <span>Tracking</span> App
                </h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce at rhoncus orci. Nam ut facilisis ante. Nunc tempor, ligula eu dictum ornare, magna sem laoreet erat, quis iaculis arcu est a risus.
                     Mauris in lacinia augue. 
                </p>
                <Link to='/register' className='btn btn-hero'>Login/Register</Link>
            </div>
            <img src={main} alt='job hunt' className='img main-img'></img>
        </div>
    </Wrapper>
  )
}

export default Landing
