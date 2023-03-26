import Link from "next/link"
import styles from "../styles/SideBar.module.css"
export default function SideBar() {
    return (
        <div className={`${styles.main} ${"d-none d-lg-inline"}  `}>
            <ul>
                <li className={styles.opcion}>
                    <Link className="d-flex py-3 text-decoration-none text-dark" href={""}>
                        <i class="fa-solid fa-square-parking fs-1 me-3"></i>
                        <h3>Plazas</h3>
                    </Link>
                </li>

                <li className={styles.opcion}>
                    <Link className="d-flex py-3  text-decoration-none text-dark" href={""}>
                    <i class="fa-solid fa-calendar-days fs-1 me-3"></i>    
                        <h3>Reservas</h3>
                    </Link>
                </li>
                <li className={styles.opcion}>
                    <Link className="d-flex py-3  text-decoration-none text-dark" href={""}>
                    <i class="fa-solid fa-user fs-1 me-3"></i>
                     <h3>Gestionar</h3>
                    </Link>
                </li>
            </ul>
        </div>
    )
}