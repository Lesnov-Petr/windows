import HeadNav from "../HeadNav"
import Logo from '../Logo'
import Feedback from '../Feedback'
import './style.scss'

const Header = () => {
    return (
        <div className="header">
            <HeadNav />
            <Logo />
            <Feedback/>
        </div>)
}

export default Header