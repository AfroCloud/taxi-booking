import React, { useState } from 'react'
import { connect } from 'react-redux'
import { searchDestinationRequest } from '../store/thunks'

const UserInput = ({ pickup, dropoff, price, userLocation: { city, country, countryName }, onSeachDestination }) => {
    const [pickupPoint, setPickup] = useState(pickup)
    const [dropoffPoint, setDropoff] = useState(dropoff)

    const startSearch = () => {
        onSeachDestination(pickupPoint, dropoffPoint)
    }

    return (
        <div className="card">
            <div className="card-body">
                <div style={{textAlign: 'center', margin: '30px 0'}}>
                    <h4>My online taxi</h4>
                </div>
                <div className="input-location-container">
                    <div className="input-location-field">
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="Enter pick-up location" value={pickupPoint} onChange={(e) => setPickup(e.target.value)}/>
                        </div>
                    </div>
                    <div className="input-location-field">
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="Enter drop-off location" value={dropoffPoint} onChange={(e) => setDropoff(e.target.value)} />
                        </div>
                    </div>
                    <div className="input-location-field">
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="Add address"/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card-footer d-flex justify-content-between align-items-center">
                <div>
                    <small>Total Cost</small>
                    <h4>{price}</h4>
                </div>
                <button type="button" className="btn btn-primary orange" onClick={startSearch}>Order</button>
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    pickup: state.reservation.pickup,
    dropoff: state.reservation.dropoff,
    price: state.reservation.price,
    userLocation: state.reservation.userLocation
})

const mapDispatchToProps = dispatch => ({
    onSeachDestination : (pickup, dropoff) => dispatch(searchDestinationRequest(pickup, dropoff))
})

export default connect(mapStateToProps, mapDispatchToProps)(UserInput)