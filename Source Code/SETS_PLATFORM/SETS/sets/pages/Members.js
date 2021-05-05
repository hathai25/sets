import Navibar from '../components/Navbar'
import Footer from '../components/Footer/Footer'

export default function Members() {
    return(
        <>
        <Navibar/>
        <header className="bg-light primary text-center py-5 mb-4">
            <div className="container">
                <h1 className="font-weight-light text-dark">Meet the Team</h1>
            </div>
        </header>


        <div className="container">
        <div className="row">

            <div className="col-xl-3 col-md-6 mb-4">
            <div className="card border-0 shadow">
                <img src="https://i.picsum.photos/id/520/500/350.jpg?hmac=IRXqeouI_nbIt6s4osRmeWa_u4GwY9WoT-8ubEeXReg" className="card-img-top" alt="..."></img>
                <div className="card-body mx-auto">
                <h5 className="card-title mb-0">Vũ Trung Kiên<br></br><br></br></h5>
                <div className="card-text text-black-50 ">Director at Climate Change Resilience Centre
                            <br></br><br></br>Global Leadership course in Denmark
                            <br></br><br></br>Directly trained by US former Vice President Al Gore in climate leadership
                            <br></br><br></br>Study and work experience in 6 countries
                </div>
                </div>
            </div>
            </div>

            <div className="col-xl-3 col-md-6 mb-4">
            <div className="card border-0 shadow">
                <img src="https://i.picsum.photos/id/520/500/350.jpg?hmac=IRXqeouI_nbIt6s4osRmeWa_u4GwY9WoT-8ubEeXReg" className="card-img-top" alt="..."></img>
                <div className="card-body mx-auto">
                <h5 className="card-title mb-0">Trần Thanh Phương<br></br><br></br></h5>
                <div className="card-text text-black-50">
                Vice Director of Minh Sơn Group
                            <br></br><br></br>BA of Economics, Australia
                            <br></br><br></br>Master on Business and Financial
                            <br></br><br></br>Management 11-year auditor
                </div>
                </div>
            </div>
            </div>

            <div className="col-xl-3 col-md-6 mb-4">
            <div className="card border-0 shadow">
                <img src="https://i.picsum.photos/id/520/500/350.jpg?hmac=IRXqeouI_nbIt6s4osRmeWa_u4GwY9WoT-8ubEeXReg" className="card-img-top" alt="..."></img>
                <div className="card-body text-center">
                <h5 className="card-title mb-0">LÊ THỊ NHI CÔNG<br></br><br></br></h5>
                <div className="card-text text-black-50">
                Dept Head at CNSH Môi trường, IBT, VAST
                            <br></br><br></br>Lecturer, PhD in Germany
                            <br></br><br></br>Author of 5 ISI articles and 3 patents
                            <br></br><br></br>16 years in R&D and product manufacturing
                </div>
                </div>
            </div>
            </div>

            <div className="col-xl-3 col-md-6 mb-4">
            <div className="card border-0 shadow">
                <img src="https://i.picsum.photos/id/520/500/350.jpg?hmac=IRXqeouI_nbIt6s4osRmeWa_u4GwY9WoT-8ubEeXReg" className="card-img-top" alt="..."></img>
                <div className="card-body text-center">
                <h5 className="card-title mb-0">ĐỖ MINH THÀNH<br></br><br></br></h5>
                <div className="card-text text-black-50">
                Director at Sanova VN company
                            <br></br><br></br>Master in agriculture, Israel
                            <br></br><br></br>Author of 5 ISI articles and 3 patents.
                            <br></br><br></br>6 year experience in business development
                </div>
                </div>
            </div>
            </div>
        </div>
        </div>
        <Footer/>
        </>
    )
}