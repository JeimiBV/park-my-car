import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Navbar.module.css"



export default function Navbar() {
    return (
        <div className={`${styles.navegador} ${"d-flex align-items-center"} `} >

            <nav class="navbar navbar-expand-lg bg-body-tertiary container align-items  ">
                <div class="container-fluid ">
                    <Image
                        className="img-fluid"
                        src="/../public/logo.jpg"
                        width={190}
                        height={10000}
                        alt="park my car"
                    >
                    </Image>

                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <i class="fa-sharp fa-solid fa-bars text-light"></i>
                    </button>
                    <div class="collapse navbar-collapse " id="navbarText">
                        <ul class="navbar-nav ms-auto mb-2 mb-lg-0 ">
                            <li class="nav-item ">
                                <div className="d-flex ">
                                    <p className="text-light mt-3 ms-2">
                                        ADMIN
                                    </p>
                                    <i class="fa-sharp fa-regular fa-circle-user text-light fs-1 ms-3"></i>
                                </div>
                            </li>


                        </ul>
                        <ul className="d-lg-none navbar-nav">
                            <li >
                                <Link className="d-flex py-3 text-decoration-none text-dark" href={""}>
                                    <i class="fa-solid fa-circle-parking"></i>
                                    <h3>Reservas</h3>
                                </Link>
                            </li>

                            <li >
                                <Link className="d-flex py-3  text-decoration-none text-dark" href={""}>
                                    <i class="fa-solid fa-location-pin fs-1 me-3 "></i>
                                    <h3>Reservas</h3>
                                </Link>
                            </li>
                            <li>
                                <Link className="d-flex py-3  text-decoration-none text-dark" href={""}>
                                    <i class="fa-solid fa-location-pin fs-1 me-3"></i>
                                    <h3>Reservas</h3>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>


    )
}