import Image from "next/image";
import styles from "../styles/Navbar.module.css"



export default function Navbar() {
    return (
        <div className={styles.navegador, styles.otro} >
            <nav class="navbar navbar-expand-lg bg-body-tertiary container">
                <div class="container-fluid">
                    <Image
                        src="/../public/logo.jpg"
                        width={150}
                        height={70}
                        alt="park my car"
                    >
                    </Image>


                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <i class="fa-sharp fa-solid fa-bars text-light"></i>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarText">
                        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <div className="d-flex align-items-center">
                                    <i class="fa-sharp fa-regular fa-circle-user text-light fs-1 ms-3"></i>
                                    <p className="text-light mt-3 ms-2">
                                        ADMIN
                                    </p>
                                </div>
                            </li>
                           
                        </ul>
                    </div>
                </div>
            </nav>
        </div>


    )
}