import React, {Component} from 'react';
import {Link,withRouter} from 'react-router-dom';
import PropTypes from 'prop-types';
import Nav from './nav';
import MultiSlider from "multi-slider";
import Flightadd from "./flightadd"
import * as API from '../api/API';
import * as Actions from '../actions/action';
import {connect} from 'react-redux';
import Caradd from "./caradd";
import Hoteladd from "./hoteladd";

class Vendoradd extends Component {

    state={
        cars:[],
        hotels:[],
        flights:[]
    }

    componentDidMount() {


        API.getHotelList()
            .then((res) => {

                console.log(res);
                if (res.status == 200) {

                    this.setState({
                        hotels: res.api_results
                    })
                    console.log("Success...")

                } else if (res.status == 401) {

                    //  this.props.history.push('/');
                }
            });

        API.getCarList()
            .then((res) => {

                console.log(res);
                if (res.status == 200) {

                    this.setState({
                        cars: res.api_results
                    })
                    console.log("Success...")

                } else if (res.status == 401) {

                    //  this.props.history.push('/');
                }
            });

        API.getFlightList()
            .then((res) => {

                console.log(res);
                if (res.status == 200) {

                    this.setState({
                        flights: res.api_results
                    })
                    console.log("Success...")

                } else if (res.status == 401) {

                    //  this.props.history.push('/');
                }
            });
    }
        
             // API.doLogout().then((data)=>{
             //        console.log("adf");
             //    })
             //
        componentWillMount(){
           API.checkSession().then((data)=>{
           
            if(data.status===201){
               //this.successshowAlert(data.data.value);
                //this.props.signIn(data);
                console.log(data);
                if(data.data.data[0].user_role!="VENDOR"){
                    this.props.history.push('/')
                }

            }
            else{
                this.props.history.push('/')  
            }
        
           })

        }

    deleteCar(id){

        API.deleteCar(id)
            .then((res) => {


                if (res.status == 200) {


                    console.log("Success...")

                }else if (res.status == 401) {

                    //  this.props.history.push('/');
                }
            });
    }

    deleteHotel(id){

        API.deleteHotel(id)
            .then((res) => {


                if (res.status == 200) {


                    console.log("Success...")

                }else if (res.status == 401) {

                    //  this.props.history.push('/');
                }
            });
    }

    deleteFlight(id){

        API.deleteFlight(id)
            .then((res) => {


                if (res.status == 200) {


                    console.log("Success...")

                }else if (res.status == 401) {

                    //  this.props.history.push('/');
                }
            });
    }

    render(){
   /*
    db.ExpediaFlights.insert({
        'flightId': 'ED101',
        'operator': 'Air India',
        'imageurl': 'airindia.jpg',
        'class':[

            {'type':'Economy','price':100, 'capacity':50},
            {'type':'First','price':200 , 'capacity':50},
            {'type':'Business','price':300 , 'capacity':10}
        ] ,
        'flights':[
            {
                'arrivaltime': '16:00',
                'arrivalday' : 'Thu',
                'departuretime': '00:00',
                'departureday' : 'Mon',
                'origin': {'city':'San Francisco', 'state':'California', 'country':'USA', 'airport':'San Francisco International Airport'},
                'destination': {'city':'San Jose', 'state':'California', 'country':'USA', 'airport':'San Jose Airport'}

            },
            {
                'arrivaltime': '02:00',
                'arrivalday' : 'Tue',
                'departuretime': '18:00',
                'departureday' : 'Wed',
                'origin': {'city':'San Jose', 'state':'California', 'country':'USA', 'airport':'San Jose Airport'},
                'destination': {'city':'San Francisco', 'state':'California', 'country':'USA', 'airport':'San Francisco International Airport'}

            }
        ]
    })
*/


    return(
        <div>

            <div className="card" style={{marginTop:'10vh',marginBottom:'10vh',marginLeft:'10vw',marginRight:'10vw'}}>

                <div class="card-body">
                    <br/>


                    <ul className="nav nav-tabs nav-justified deep-orange" role="tablist">
                        <li className="nav-item">
                            <a className="nav-link active" data-toggle="tab" href="#flight" role="tab" ><i class="fa fa-user"></i>Flight</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" data-toggle="tab" href="#car" role="tab"><i class="fa fa-heart" ></i>Car</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" data-toggle="tab" href="#hotel" role="tab" ><i class="fa fa-heart" ></i>Hotel</a>
                        </li>

                    </ul>

                    <div className="tab-content">

                        <div className="tab-pane fade in show active" id="profile" role="tabpanel">

                            <Flightadd/>

                        </div>

                        <div className="tab-pane fade" id="trip" role="tabpanel">

                        <Caradd/>



                        </div>
                        <div className="tab-pane fade" id="searchhistroy" role="tabpanel">

                        <Hoteladd/>


                        </div>


                    </div>
                </div>

                </div>

                <div className="card" style={{marginTop:'10vh',marginBottom:'10vh',marginLeft:'10vw',marginRight:'10vw'}}>


               

                <div class="card-body">
                    <br/>

                    <div style={{textAlign:'center'}}>
                            <b>Vendor Details</b>
                     </div>       
                     <br/>
                    <ul className="nav nav-tabs nav-justified deep-orange" role="tablist">
                        <li className="nav-item">
                            <a className="nav-link active" data-toggle="tab" href="#profile1" role="tab"><i class="fa fa-user"></i>Flight</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" data-toggle="tab" href="#trip1" role="tab"><i class="fa fa-heart"></i>Hotel</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" data-toggle="tab" href="#searchhistroy1" role="tab" ><i class="fa fa-heart"></i>Car</a>
                        </li>

                    </ul>

                    <div className="tab-content">

                        <div className="tab-pane fade in show active" id="profile1" role="tabpanel">
                        <div className="md-form">
                            <input type="text" placeholder="ID/Operator" className="form-control"/>
                            <button className="btn btn-light-blue"><i className="fa fa-search"></i> Search</button>
                        </div>    
                        <div className="table-responsive">
                            <table className="table">
                                <thead>
                                    <tr>
                                    <th><b>Flight ID</b></th>
                                    <th><b>Operator</b></th>
                                    <th></th>
                                    </tr>
                                
                                </thead>
                                <thead>
                                    <tr>
                                        <th>FlightID</th>
                                        <th>operator</th>
                                        <th><i className="fa fa-trash fa-2x" {/*onClick={()=>this.deleteFlight(flight._id)}*/}></i></th>
                                    </tr>

                                
                                </thead>
                            </table>
                        </div>
                        </div>

                        <div className="tab-pane fade" id="trip1" role="tabpanel">
                        <div className="md-form">
                            <input type="text" placeholder="ID/Hotel Name" className="form-control"/>
                            <button className="btn btn-light-blue"><i className="fa fa-search"></i> Search</button>
                        </div>    
                        <div className="table-responsive">
                            <table className="table">
                                <thead>
                                    <tr>
                                    <th><b>Hotel ID</b></th>
                                    <th><b>Hotel Name</b></th>
                                    <th></th>
                                    </tr>
                                
                                </thead>
                                <thead>
                                    <tr>
                                        <th>FlightID</th>
                                        <th>operator</th>
                                        <th><i className="fa fa-trash fa-2x" {/*onClick={()=>this.deleteHotel(hotel._id)}*/}></i></th>
                                    </tr>

                                
                                </thead>
                            </table>
                        </div>




                        </div>
                        <div className="tab-pane fade" id="searchhistroy1" role="tabpanel">

                        <div className="md-form">
                            <input type="text" placeholder="ID/Car Name" className="form-control"/>
                            <button className="btn btn-light-blue"><i className="fa fa-search"></i> Search</button>
                        </div>    
                        <div className="table-responsive">
                            <table className="table">
                                <thead>
                                    <tr>
                                    <th><b>Car ID</b></th>
                                    <th><b>Car Name</b></th>
                                    <th></th>
                                    </tr>
                                
                                </thead>
                                <thead>
                                    <tr>
                                        <th>Car ID</th>
                                        <th>Car Name</th>
                                        <th><i className="fa fa-trash fa-2x" {/*onClick={()=>this.deleteCar(car._id)*/}}></i></th>
                                    </tr>

                                
                                </thead>
                            </table>
                        </div>


                        </div>


                    </div>
                </div>

                </div>

            </div>

    )
}

}


export default Vendoradd ;
