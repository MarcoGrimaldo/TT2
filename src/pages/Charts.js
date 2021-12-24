import React, {useState,useEffect} from 'react';
import { Line } from "react-chartjs-2";
import NavbarComponent from '../Components/Navbar';
import Footer from '../Components/Footer';
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom';

const data = {
    labels: ["00:00", "04:00", "08:00", "12:00", "16:00", "20:00"],
    datasets: [
      {
        label: "Humedad Relativa",
        data: [33, 43, 65, 68, 74, 51],
        fill: false,
        borderColor: "rgba(75,192,192,1)"
      },
      {
        label: "Temperatura",
        data: [17, 12, 16, 23, 20, 16],
        fill: false,
        borderColor: "#AA6339"
      },
      {
        label: "pH",
        data: [7, 7, 7, 6, 7, 7],
        fill: false,
        borderColor: "#742774"
      }
    ]
  };
  

const Charts = () => {

    const [date,setDate] = useState('');
    const options = { year: 'numeric', month: 'long', day: 'numeric' };

    useEffect(() => {
        let dateAux = new Date();

        setDate(dateAux.toLocaleDateString("es-ES", options));
        // eslint-disable-next-line
    }, []);
    

    return (
        <div>
            <NavbarComponent userEmail={localStorage.getItem('user')}/>
            <div className="d-flex justify-content-center mt-4 mb-4">
                <h2>Datos día: { date }</h2>
            </div>
            <div className="container">
                <Line data={data} />
            </div>
            <div className=" container mt-4 mb-4 d-flex justify-content-between">
                <h4>Datos</h4>
                <Link to="/datos.csv" target="_blank" download>
                    <Button variant="success">Descargar CSV</Button>
                </Link>
            </div>
            <div className="container d-flex justify-content-center mt-4 mb-4" >
                <Table striped bordered hover>
                    <thead>
                        <tr>
                        <th>Fecha (DD/MM/AAAA)</th>
                        <th>Humedad (%)</th>
                        <th>Temperatura (°C)</th>
                        <th>pH</th>
                        </tr>
                    </thead>
                    
                    <tbody>
                        <tr>
                            <td>{(new Date()).toLocaleDateString("es-ES")}</td>
                            <td>{data.datasets[0].data[0]}</td>
                            <td>{data.datasets[1].data[0]}</td>
                            <td>{data.datasets[2].data[0]}</td>
                        </tr>
                        <tr>
                            <td>{(new Date()).toLocaleDateString("es-ES")}</td>
                            <td>{data.datasets[0].data[1]}</td>
                            <td>{data.datasets[1].data[1]}</td>
                            <td>{data.datasets[2].data[1]}</td>
                        </tr>
                        <tr>
                            <td>{(new Date()).toLocaleDateString("es-ES")}</td>
                            <td>{data.datasets[0].data[2]}</td>
                            <td>{data.datasets[1].data[2]}</td>
                            <td>{data.datasets[2].data[2]}</td>
                        </tr>
                        <tr>
                            <td>{(new Date()).toLocaleDateString("es-ES")}</td>
                            <td>{data.datasets[0].data[3]}</td>
                            <td>{data.datasets[1].data[3]}</td>
                            <td>{data.datasets[2].data[3]}</td>
                        </tr>
                        <tr>
                            <td>{(new Date()).toLocaleDateString("es-ES")}</td>
                            <td>{data.datasets[0].data[4]}</td>
                            <td>{data.datasets[1].data[4]}</td>
                            <td>{data.datasets[2].data[4]}</td>
                        </tr>
                        <tr>
                            <td>{(new Date()).toLocaleDateString("es-ES")}</td>
                            <td>{data.datasets[0].data[5]}</td>
                            <td>{data.datasets[1].data[5]}</td>
                            <td>{data.datasets[2].data[5]}</td>
                        </tr>
                        
                    </tbody>
                </Table>
            </div>
            <Footer />
        </div>
    )
}

export default Charts
