import styles from './Menu.module.css'
import { useNavigate } from 'react-router-dom';



function Menu(props) {
    const navigate = useNavigate();

//function for new users
    function createAccountPage(){
        navigate("/newuser");
    }
//function to create reservation
    function goToReservationPage(){
        navigate("/book-reservation");
    }
    return <>
        <div onClick={props.closeOverlay} className={styles.overlay}>
        </div>
        <div className={styles["overlay-content"]}>
            <div className={styles["menu"]}>
                <div className={styles.menuHeader}>Log In</div>
                <div className={styles.menuBody}>
                    <div className={styles.inputFields}>
                        <input type="text" placeholder="Username" />
                        <input type="text" placeholder="Password" />
                    </div>
                    <button>Sign In</button>
                    <div>
                        <div>
                            <br></br>
                            <div onClick={createAccountPage}>New user?</div>
                        </div>
                        <div onClick={goToReservationPage}>Continue As Guest</div>
                    </div>
                </div>

            </div>
        </div>
    </>
}

export default Menu