import Navibar from '../../components/Navbar'
import Footer from '../../components/Footer/Footer'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import styles from './About.module.css'
import Row from 'react-bootstrap/Row'


export default function AboutSETS() {
    return(
        <>
        <Navibar/>
        <Container fluid>
            <br></br><br></br>
            <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-12 ">
                    <h1 className="text-center">What is Emission Trading?<br></br></h1>
                    <p className={styles.content1}>
                    Emissions trading is a market-based approach to<br></br> 
                    control pollution by providing economic incentives for reducing<br></br>
                    the emissions.<br></br><br></br>
                    </p>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12">
                    <img width="500" height="350" src="/assets/pic2.png/" className="img-fluid"></img>
                </div>
            </div>
            <br></br><br></br>
            <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-12 mx-auto">
                    <img width="500" height="350" src="/assets/pic1.jpg/" className="img-fluid"></img>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 mx-auto ">
                    <h1>Why is Emission Trading<br></br> important?<br></br></h1>
                    <p className={styles.content2}>
                    Climate change is the biggest negative economic externality that<br></br>human has ever faced in history. Emissions trading is a key part<br></br>of global efforts to reduce the man-made greenhouse gas<br></br>emissions that are causing climate change﻿, meeting the Paris<br></br>Agreement﻿ target of keeping temperature rise below 2°C.
                    <br></br><br></br>
                    Emission Trading Systems provide a mechanism to reduce<br></br>greenhouse gas (GHG) emissions in the most cost-effective and<br></br>economically-efficient manner. Climate change will only be<br></br>addressed if individuals, businesses and government<br></br>organizations all takes responsible steps to reduce our<br></br>CO2 emissions as much as possible and then trade the credits<br></br>you get, or offset the remaining unavoidable emissions.
                    <br></br><br></br>
                    SETS is a flexible market-based solution to perform<br></br>environmental commitments, allowing companies, organizations,<br></br>markets and individuals to meet policy targets. It also allows the<br></br>benefits of climate change policy decisions to be compared<br></br>against other possible environmental policies.
                    <br></br><br></br>
                    </p>
                </div>
                
            </div>
            
        </Container>
        <Container>
            <Row>
                <div className="col-md-12 text-md-center">
                <h1 >How can you be part of global<br></br>Emission Reduction mission</h1>
                </div>

                <div className="d-flex mx-auto">
                    <p className={styles.nice}>
                        Being part of the global emission reduction efforts, you’re addressing global economic inequality<br></br>caused by climate change.
                        <br></br><br></br>
                        Trading and offsetting your unavoidable CO2 emissions is a practical and immediate way to take<br></br>ownership of your personal contribution to climate change.
                        <br></br><br></br>
                        You can help reduce emission by simple actions:
                        <br></br><br></br>
                        • 3R: Reduce, Reuse, Recycle at what you can.
                        <br></br><br></br>
                        + Reduce Home energy use
                        <br></br><br></br>
                        + Travel smartly in daily activities and vacation
                        <br></br><br></br>
                        + Food saving
                        <br></br><br></br>
                        + Waste management
                        <br></br><br></br>
                        Etc
                        <br></br><br></br>
                        • Trading/ Offseting your carbon footprint.
                    </p>
                </div>
            </Row>      
        </Container>
        <Container>
            <Row>
                <div className="col-md-12 text-md-center">
                <h1 >How SETS can help you reduce Emission</h1>
                </div>

                <div className="d-flex mx-auto">
                    <p className={styles.nice}>
                        SETS offer high quality carbon trading/ offsetting solutions for you. Through our MRV screening<br></br>system, we carry out careful due diligence of projects and suppliers before any product is offered<br></br>to you.
                        <br></br><br></br>
                        All the highest standards for ITMOs, CERs, ERUs are applied in our Compliance market platform.<br></br>For the Voluntary market, we accept highly reputed Verified Carbon Standard (VCS), Gold Standard<br></br>VERs or the like, meeting the PAS 2060 guidance on carbon neutrality, therefore assuring your<br></br>carbon neutral claims.
                        <br></br><br></br>
                        Our carbon credits/ packages are fully traceable using blockchain technology. We keep detailed<br></br>records of all purchases online, along with a database of all offline sales.<br></br>
                        We also have a MRV (Monitoring, Reporting, Validating) system allowing carbon credits to be cross<br></br> referenced every single transaction.
                        <br></br><br></br>
                        Our AI recommender system will help you choose the most suitable product to meet your needs,<br></br> for a better world and a better you!
                    </p>
                </div>
            </Row>      
        </Container>
        <Footer/>
        </>
    )
}