import { NavLink } from "react-router-dom";

const HeadNav = () => {
    return (
        <ul>
            <li><NavLink className="headNav__link" to="/windows">Окна и Двери</NavLink></li>
            <li><NavLink className="headNav__link" to="/loggia">Остекление балконов</NavLink></li>
            <li><NavLink className="headNav__link" to="/stock">Акция</NavLink></li>
            <li><NavLink className="headNav__link" to="/office">Офис продаж</NavLink></li>
        </ul>
    )
}

export default HeadNav