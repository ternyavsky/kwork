import NavbarStyles from './Navbar.css'
import Search from '../Search.svg'

export default function Requests() {

    return (
        <nav class="navbar__container navbar navbar-expand-xl">
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse w-100" id="navbarTogglerDemo01">
                <div className="NavTools__container">
                    <div className="filters">
                        <ul class="navbar-nav me-auto mb-lg-0">
                            <li class="nav-item">
                                <div class="dropdown">
                                    <button class="DropdownButton btn btn-secondary dropdown-toggle " type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        МАРКА
                                    </button>
                                    <ul class="dropdown-menu">
                                        <li><a class="dropdown-item" href="#/">Action</a></li>
                                        <li><a class="dropdown-item" href="#/">Another action</a></li>
                                        <li><a class="dropdown-item" href="#/">Something else here</a></li>
                                    </ul>
                                </div>
                            </li>
                            <li class="nav-item">
                                <div class="dropdown">
                                    <button class="DropdownButton btn btn-secondary dropdown-toggle " type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        МОДЕЛЬ
                                    </button>
                                    <ul class="dropdown-menu">
                                        <li><a class="dropdown-item" href="#/">Action</a></li>
                                        <li><a class="dropdown-item" href="#/">Another action</a></li>
                                        <li><a class="dropdown-item" href="#/">Something else here</a></li>
                                    </ul>
                                </div>
                            </li>
                            <li class="nav-item">
                                <div class="dropdown">
                                    <button class="DropdownButton btn btn-secondary dropdown-toggle " type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        ТИП
                                    </button>
                                    <ul class="dropdown-menu">
                                        <li><a class="dropdown-item" href="#/">Action</a></li>
                                        <li><a class="dropdown-item" href="#/">Another action</a></li>
                                        <li><a class="dropdown-item" href="#/">Something else here</a></li>
                                    </ul>
                                </div>
                            </li>
                            <li class="nav-item">
                                <div class="dropdown">
                                    <button class="DropdownButton btn btn-secondary dropdown-toggle " type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        ИСТОЧНИК
                                    </button>
                                    <ul class="dropdown-menu">
                                        <li><a class="dropdown-item" href="#/">Action</a></li>
                                        <li><a class="dropdown-item" href="#/">Another action</a></li>
                                        <li><a class="dropdown-item" href="#/">Something else here</a></li>
                                    </ul>
                                </div>
                            </li>
                            <li class="nav-item">
                                <div class="dropdown">
                                    <button class="DropdownButton btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        МАГАЗИН
                                    </button>
                                    <ul class="dropdown-menu">
                                        <li><a class="dropdown-item" href="#/">Action</a></li>
                                        <li><a class="dropdown-item" href="#/">Another action</a></li>
                                        <li><a class="dropdown-item" href="#/">Something else here</a></li>
                                    </ul>
                                </div>
                            </li>
                            <li class="nav-item">
                                <div class="dropdown">
                                    <button class="DropdownButton btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        СЧЁТ
                                    </button>
                                    <ul class="dropdown-menu">
                                        <li><a class="dropdown-item" href="#/">Action</a></li>
                                        <li><a class="dropdown-item" href="#/">Another action</a></li>
                                        <li><a class="dropdown-item" href="#/">Something else here</a></li>
                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="search__container">
                        <div class="input-group flex-nowrap w-100">
                            <input type="text" class="form-control" placeholder="Поиск..." aria-describedby="addon-wrapping" />
                        </div>
                        <button class="ClearButton"><img src={Search} alt="" /></button>
                    </div>
                </div>
            </div>
        </nav>
    )
}