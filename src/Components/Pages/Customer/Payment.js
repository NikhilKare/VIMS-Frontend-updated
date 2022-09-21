
import { red } from '@mui/material/colors';
import React, { useEffect, useState } from 'react'
import CustomerService from '../../../Services/CustomerService';
import './payment.css'
import chip from '../../../Components/img/chip.png'
import visa from '../../../Components/img/visa.png'
export const Payment = () => {
    const v = {
        cardNumber: "#################",
        cardHolder: "full Name",
        mdate: "month",
        myear: "year"
    }
    const [payment, setPayment] = useState(v);
    const initailValues = {
        cardNumber: "",
        cardHolder: "",
        amount: sessionStorage.getItem("policy").policyPremium,
        mdate: "",
        myear: "",
        cvv: ""
    }
    const [formValues, setFormValues] = useState(initailValues);
    const [formErrors, setFormErrors] = useState({});


    const handleChange = (e) => {
        console.log(e.target.value)
        const { name, value } = e.target;
        setFormValues({
            ...formValues, [name]: value
        })

        setPayment({
            ...payment, [name]: value
        })

    }
    useEffect(() => {
        setFormErrors(validate(formValues));
    }, [formValues])

    const handleSubmit = (e) => {
        e.preventDefault();
        CustomerService.doPayment(payment)
            .then(res => {
                console.log(res.data)
                sessionStorage.removeItem("policyId");
                sessionStorage.removeItem("chasisNo");
                sessionStorage.removeItem("policy");
            })
            .catch(err => {
                console.log(err)
            })
    }

    const validate = (values) => {
        const errors = {
            cardNumber: "",
            cvv: ""
        };
        const regex = /^\d{4}$/;
        if (!values.cardNumber.match(regex)) {
            errors.cardNumber = "please check your card Number"
        } else {
            errors.cardNumber = ""
        }
        return errors;
    }

    return (
        
        
        <div>
            <div class="container1">

                <div class="card-container1">

                    <div class="front">
                        <div class="image">
                            <img src={chip} alt="" />
                            <img src={visa} alt="" />
                        </div>
                        <div class="card-number-box">{payment.cardNumber}</div>
                        <div class="flexbox">
                            <div class="box">
                                <span>card holder Name</span>
                                <div class="card-holder-name">{payment.cardHolder}</div>

                            </div>

                            <div class="box">
                                <span>expires</span>
                                <div class="expiration">
                                    <span class="exp-month">{payment.mdate}</span>
                                    <span class="exp-year">{payment.myear}</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="back">
                        <div class="stripe"></div>
                        <div class="box">
                            <span>cvv</span>
                            <div class="cvv-box"></div>
                            <img src="image/visa.png" alt="" />
                        </div>
                    </div>

                </div>

                <form onSubmit={handleSubmit}>
                    <div class="inputBox">
                        <span>card number</span>
                        <input name='cardNumber' onChange={handleChange} value={formValues.cardNumber} type="text" class="card-number-input" />
                        <p style={{ color: "red" }}>{formErrors.cardNumber}</p>
                    </div>
                    <div class="inputBox">
                        <span>card holder</span>
                        <input name='cardHolder' onChange={handleChange} required value={formValues.cardHolder} type="text" class="card-holder-input" />
                        {/* <p style={{color:"red"}}>{formErrors.cardHolder}</p> */}
                    </div>
                    <div class="flexbox">
                        <div class="inputBox">
                            <span>expiration mm</span>
                            <select name="mdate" required onChange={handleChange} value={formValues.mdate} id="" class="month-input">
                                <option value="month" selected disabled>month</option>
                                <option value="01">01</option>
                                <option value="02">02</option>
                                <option value="03">03</option>
                                <option value="04">04</option>
                                <option value="05">05</option>
                                <option value="06">06</option>
                                <option value="07">07</option>
                                <option value="08">08</option>
                                <option value="09">09</option>
                                <option value="10">10</option>
                                <option value="11">11</option>
                                <option value="12">12</option>
                            </select>
                        </div>
                        <div class="inputBox">
                            <span>expiration yy</span>
                            <select name="myear" required onChange={handleChange} value={formValues.myear} id="" class="year-input">
                                <option value="year" selected disabled>year</option>
                                <option value="2021">2021</option>
                                <option value="2022">2022</option>
                                <option value="2023">2023</option>
                                <option value="2024">2024</option>
                                <option value="2025">2025</option>
                                <option value="2026">2026</option>
                                <option value="2027">2027</option>
                                <option value="2028">2028</option>
                                <option value="2029">2029</option>
                                <option value="2030">2030</option>
                            </select>
                        </div>
                        <div class="inputBox">
                            <span>cvv</span>
                            <input name='cvv' onChange={handleChange} value={formValues.cvv} type="password" minLength="3" maxLength="3" class="cvv-input" />
                        </div>

                    </div>
                    <div class="inputBox">
                        <span>Amount</span>
                        <input name='cardHolder' value={JSON.parse(sessionStorage.getItem("policy")).policyPremium} readOnly type="text" class="card-holder-input" />
                    </div>
                    <input type="submit" value="submit" class="submit-btn" />
                </form>

            </div>
        </div>


    )

}
