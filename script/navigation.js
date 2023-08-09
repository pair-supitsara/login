const navbar = ` <nav class="navigation">
                    <div class="navigation-logo">
                        <div class="navigation-items">LOGO</div>
                    </div>
                    <ul class="navigation-menu">
                        <li><a class="navigation-items">Shop</a></li>
                        <li><a class="navigation-items">Filter</a></li>
                        <li><a class="navigation-items">My cart</a></li>
                        <li><div class="navigation-items" id="dropdown-icon" onclick="document.getElementById('dropdown-menu').classList.toggle('visible');">
                                <i class="bi bi-arrow-down-left-square"></i>
                            </div>
                            <div class="dropdown " id="dropdown-menu">
                                <ul class="dropdown-content">
                                    <li><a href="../page/login.html"><i class="bi bi-cart3"> Login</i></a></li>
                                    <li><a href="../page/register.html"><i class="bi bi-cart3"> Register</i></a></li>
                                    <li><a href="../page/register.html"><i class="bi bi-person-circle"> Profile</i></a></li>
                                    <li><a href="../page/register.html"><i class="bi bi-box-arrow-right"> Logout</i></a></li>
                                </ul>
                            </div>
                        </li>
                    </ul>             
                </nav>  `
document.body.insertAdjacentHTML("afterbegin", navbar);