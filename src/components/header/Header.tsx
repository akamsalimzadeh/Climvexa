import styles from "./header.module.css"
import logo from "./../../assets/images/logo.svg"
import iconUnits from "./../../assets/images/icon-units.svg"
import iconDropdown from "./../../assets/images/icon-dropdown.svg"

function Header () {

    return (
        <div className={styles.header}>
            <img className={styles.header__websiteLogo} src={logo} alt="weather-now" />
            <button className={styles.header__dropdownBtn} type="button">
                <img className={styles.header__dropdownBtnSetting} src={iconUnits} alt="iconUnits" />
                Units
                <img className={styles.header__dropdownBtnArrow} src={iconDropdown} alt="iconDropdown" />
            </button>
        </div>
    )
}

export default Header