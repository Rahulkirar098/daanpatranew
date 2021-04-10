import React, { useState } from 'react'
import "./donate.css";
// import moment from "moment";

function Donate() {

    const [product_category, setProductCategory] = useState("")
    const [quantity, setQuantity] = useState("")
    const [pickup_time, setPickupTime] = useState("")
    const [pickup_date, setPickupDate] = useState("")
    const [pickup_address, setPickAddress] = useState("")
    const [product_description, setProductDescription] = useState("")
    const [images, setProductImage] = useState([])

    const imagedata = (e) => {
        setProductImage(e.target.files[0])

    }

    const donatesubmit = async (d) => {

        d.preventDefault();
        console.log({ product_category, quantity, pickup_time, pickup_date, pickup_address, product_description, images });
        let donateData = { product_category, quantity, pickup_time, pickup_date, pickup_address, product_description, images };

        let token = await localStorage.getItem("token");
            console.log(token);
        fetch("http://35.154.26.180/donation/", {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': token,
            },
            body: JSON.stringify(donateData)
        }).then
            ((result) => {
                console.log("result", result);
            })
    }

    return (
        <div className="donatedashbord">

            <h1>Donate</h1>

            <form onSubmit={(d) => donatesubmit(d)}>
                <select className="dashbord-select"
                    name="category"
                    value={product_category}
                    onChange={(e) => { setProductCategory(e.target.value) }}>
                    <option defaultValue >Product</option>
                    <option value="cloths" >Clothes</option>
                    <option value="food" >Raw Food</option>
                    <option value="utensils" >Utensils</option>
                    <option value="equipments" >Equipments</option>
                    <option value="books" >Books</option>
                    <option value="other" >Other</option>
                </select>
                <br /><br />
                <input className="dashbord-input" type="number" value={quantity} placeholder="Quantity"
                    onChange={(e) => { setQuantity(e.target.value) }} />
                <br /><br />
                <input className="dashbord-input" placeholder="Pick Up Time" value={pickup_time} type="time" required
                    onChange={(e) => { setPickupTime(e.target.value) }} />
                <br /><br />
                <input className="dashbord-input" placeholder="Pick Up Date" value={pickup_date} type="date" required onChange={(e) => {
                    setPickupDate(e.target.value)
                }} />
                <br /><br />
                <input className="dashbord-input" placeholder=" Pick Up Address" value={pickup_address} onChange={(e) => {
                    setPickAddress(e.target.value)
                }} />
                <br /><br />
                <input className="dashbord-input" placeholder=" Discripation " value={product_description} onChange={(e) => {
                    setProductDescription(e.target.value)
                }} />
                <br /><br />
                <input type="file" onChange={imagedata} />
                <br /><br />
                <button  className="dashbord-button-donate" type="submit">Submit</button>
            </form>

        </div>
    )
}

export default Donate;