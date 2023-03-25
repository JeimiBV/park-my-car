import Image from "next/image";
import styles from "../styles/navbar.modules.css"


export default function navbar() {
    return (<>
        <nav class="navbar navbar-expand-sm navbar-light navegador" className={styles.navegador}>
            <div class="container ">
                <Image
                    src="/../public/logo.jpg"
                    width={150}
                    height={80}
                    alt="park my car"
                >
                </Image>
                <button class="navbar-toggler d-lg-none " type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="collapsibleNavId">
                    <ul class="navbar-nav ms-auto mt-2 mt-lg-0">
                        <li class="nav-item d-flex align-items-center">
                            <a class="nav-link text-light " href="#" aria-current="page">ADMIN <span class="visually-hidden">(current)</span></a>
                        </li>
                        <i class="fa-sharp fa-regular fa-circle-user text-light fs-1 ms-3"></i>

                    </ul>

                </div>
            </div>
        </nav>


    </>)
}