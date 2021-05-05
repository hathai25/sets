import styles from './Footer.module.css'

export default function Footer() {
    return(
        <section className={styles.footer}>
        <div className="container">
            <div className="row text-center text-xs-center text-sm-left text-md-left">
                <div className="col-xs-12 col-sm-4 col-md-4">
                    <h5>SETS.</h5>
                    <ul className="list-unstyled quick-links">
                        <li><a href="#"><i className="fa "></i>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia dese mollit anim id est laborum.</a></li>
                    </ul>
                </div>
                <div className="col-xs-12 col-sm-4 col-md-4">
                    <h5>Contact Us</h5>
                    <ul className="list-unstyled quick-links">
                        <li><a href="#"><i className="fa "></i>Email: office@example.org</a></li>
                        <li><a href="#"><i className="fa "></i>Phone: (+88) 999.888</a></li>
                        <li><a href="#"><i className="fa "></i>Address: Hanoi</a></li>
                    </ul>
                </div>
                <div className="col-xs-12 col-sm-4 col-md-4">
                    <h5>Quick links</h5>
                    <ul className="list-unstyled quick-links">
                        <li><a href="#"><i className="fa "></i>About us</a></li>
                        <li><a href="#"><i className="fa "></i>Terms of service</a></li>
                        <li><a href="#"><i className="fa "></i>Privacy policy</a></li>
                   
                    </ul>
                </div>
            </div>
            <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-5">
                    <ul className="list-unstyled list-inline social text-center">
                        Follow us on &nbsp;
                        <li className="list-inline-item"><a href="#"><i className="fa fa-facebook"></i></a></li>
                        <li className="list-inline-item"><a href="#"><i className="fa fa-twitter"></i></a></li>
                        <li className="list-inline-item"><a href="#;"><i className="fa fa-instagram"></i></a></li>
                        <li className="list-inline-item"><a href="#"><i className="fa fa-google-plus"></i></a></li>
                        <li className="list-inline-item"><a href="#" target="_blank"><i className="fa fa-envelope"></i></a></li>
                    </ul>
                </div>
                <hr></hr>
            </div>	
            <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-2 text-center text-white">
                    <p className="h6"><a className="text-green ml-2" href="#" target="_blank">@2021 SETS. All rights reserved</a></p>
                </div>
            </div>	
        </div>
        </section>

    )
}  