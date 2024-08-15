import Style from './footer.module.scss'
import { FaGithub,FaHeart,FaCoffee   } from "react-icons/fa";

const UiFooter = () => {
    return (
        <footer>
            <div className={Style.content}>
                <span>Made by <a href="https://github.com/Danko118"><FaGithub /> Danko</a></span> <br />
                <span>With <FaHeart className={Style.heart}/> and <FaCoffee className={Style.coffee}/></span>
            </div>
        </footer>
    );
};

export default UiFooter;