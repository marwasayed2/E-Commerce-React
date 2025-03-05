import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";


export default function Checkout() {
    const [userData, setUserData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        address: '',
        phoneNumber: '',
        city: '',
        postCode: ''
    });
    const [errors, setErrors] = useState({});
    const [paymentMethod, setPaymentMethod] = useState('');
    const navigate = useNavigate();

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUserData(prevState => ({
            ...prevState,
            [name]: value
        }));
        if (errors[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: ''
            }));
        }
    };
    const validateForm = () => {
        const newErrors = {};
        if (!paymentMethod) {
            newErrors.paymentMethod = 'Please select a payment method';
        }
        if (!userData.firstName || !userData.firstName.trim()) {
            newErrors.firstName = 'First Name is required';
        }

        if (!userData.lastName || !userData.lastName.trim()) {
            newErrors.lastName = 'Last Name is required';
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!userData.email || !userData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!emailRegex.test(userData.email)) {
            newErrors.email = 'Invalid email format';
        }


        if (!userData.phoneNumber || !userData.phoneNumber.trim()) {
            newErrors.phoneNumber = 'Phone Number is required';
        }

        if (!userData.address || !userData.address.trim()) {
            newErrors.address = 'Address is required';
        }

        if (!userData.city || !userData.city.trim()) {
            newErrors.city = 'City is required';
        }

        if (!userData.postCode || !userData.postCode.trim()) {
            newErrors.postCode = 'Post Code is required';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handlePlaceOrder = () => {
        if (validateForm()) {
            navigate('/Thank', { state: { userData } });
        }
    };


    return (
        <>
            {/* **********************************Start Header Page************************** */}
            <header>
                <div className="bg-secondary-subtle">
                    <div className="container">
                        <div className="Title text-center py-3">
                            <div className="main-title fs-3 fw-normal">Checkout</div>
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb justify-content-center">
                                    <li className="breadcrumb-item active fw-medium" aria-current="page">
                                        <Link to={'/'}>
                                            Home</Link>
                                    </li>
                                    <li className="breadcrumb-item">
                                        <a href="#" className="text-decoration-none">Checkout</a>
                                    </li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
            </header>
            {/* **********************************End Header Page************************** */}
            {/* **********************************Start Main Content************************** */}
            <section className="mb-3">
                <div className="container">
                    <div className="Checkout-form px-1 py-5">
                        <div className="row">
                            <div className="col-md-12 col-lg-6 pb-md-5">
                                <div className="Billing-details">
                                    <h3 className="border-bottom pb-2 fw-normal">Billing Details</h3>
                                    <div className="row name mb-3">
                                        <div className="fname d-flex flex-column col-md-6">
                                            <label htmlFor="fname">First Name * </label>
                                            <input value={userData.firstName}
                                                onChange={handleInputChange}
                                                className={`p-2 ${errors.firstName ? 'is-invalid' : ''}`} type="text" id="firstName" name="firstName" placeholder="First Name" required />
                                            {errors.firstName && (
                                                <div className="text-danger">{errors.firstName}</div>
                                            )}
                                        </div>
                                        <div className="lname d-flex flex-column col-md-6">
                                            <label htmlFor="lname">Last Name * </label>
                                            <input value={userData.lastName}
                                                onChange={handleInputChange} className={`p-2 ${errors.lastName ? 'is-invalid' : ''}`} type="text" id="lastName" name="lastName" placeholder="Last Name" required />
                                            {errors.lastName && (
                                                <div className="text-danger">{errors.lastName}</div>
                                            )}
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="company-name d-flex flex-column mb-3">
                                            <label className="p-0" htmlFor="company-name">Company Name </label><input className="p-2" type="text" id="companyName" name="company-name" placeholder="Company Name" />
                                        </div>
                                    </div>
                                    <div className="row email-phone mb-3">
                                        <div className="email-address d-flex flex-column col-md-6">
                                            <label htmlFor="email-address">Email Address* </label><input value={userData.email}
                                                onChange={handleInputChange} className={`p-2 ${errors.email ? 'is-invalid' : ''}`} type="text" id="email" name="email" placeholder="Email Address" required />
                                            {errors.email && (
                                                <div className="text-danger">{errors.email}</div>
                                            )}
                                        </div>
                                        <div className="phone-number d-flex flex-column col-md-6">
                                            <label htmlFor="phone-number">Phone Number* </label><input value={userData.phoneNumber} onChange={handleInputChange} className={`p-2 ${errors.phoneNumber ? 'is-invalid' : ''}`} type="text" id="phoneNumber" name="phoneNumber" placeholder="Phone Number" required />
                                            {errors.phoneNumber && (
                                                <div className="text-danger">{errors.phoneNumber}</div>
                                            )}
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="address d-flex flex-column mb-3">
                                            <label className="p-0" htmlFor="address">Address *</label><input value={userData.address}
                                                onChange={handleInputChange} className={`p-2 ${errors.address ? 'is-invalid' : ''}`} type="text" id="address" name="address" placeholder="Address" required />
                                            {errors.address && (
                                                <div className="text-danger">{errors.address}</div>
                                            )}
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="town-city d-flex flex-column mb-3">
                                            <label className="p-0" htmlFor="town-city">Town/City * </label><input value={userData.city} onChange={handleInputChange} className={`p-2 ${errors.city ? 'is-invalid' : ''}`} type="text" id="city" name="city" placeholder="Town/City" required />
                                            {errors.city && (
                                                <div className="text-danger">{errors.city}</div>
                                            )}
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="post-code d-flex flex-column mb-3">
                                            <label className="p-0" htmlFor="post-code">Post Code/Zip Code* </label><input value={userData.postCode} onChange={handleInputChange} className={`p-2 ${errors.postCode ? 'is-invalid' : ''}`} type="text" id="postCode" name="postCode" placeholder="Post Code/Zip Code" required />
                                            {errors.postCode && (
                                                <div className="text-danger">{errors.postCode}</div>
                                            )}
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="order-notes d-flex flex-column mb-3">
                                            <label className="p-0" htmlFor="order-notes">Order Notes </label><input className="p-2" type="text" id="OrderNotes" name="order-notes" placeholder="Order Notes" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-12 col-lg-6 fs-7">
                                <div className="Your-order bg-secondary-subtle p-5">
                                    <div className="row">
                                        <h4 className="border-bottom ps-0 pb-2">Your Order</h4>
                                    </div>
                                    <div className="row border-bottom mb-3">
                                        <div className="d-flex">
                                            <div className="col-md-6">
                                                <p className="mb-2">PRODUCT</p>
                                            </div>
                                            <div className="col-md-6">
                                                <p className="mb-2">TOTAL</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row border-bottom mb-3">
                                        <div className="d-flex">
                                            <div className="col-md-6">
                                                <p className="mb-2">PRODUCT TITLE ⨉ 1</p>
                                            </div>
                                            <div className="col-md-6">
                                                <p className="mb-2">$1,026.00</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row border-bottom mb-3">
                                        <div className="d-flex">
                                            <div className="col-md-6">
                                                <p className="mb-2">SUBTOTAL</p>
                                            </div>
                                            <div className="col-md-6">
                                                <p className="mb-2">$1,026.00</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row border-bottom pb-3 mb-3">
                                        <div className="d-flex justify-content-center align-items-center">
                                            <div className="col-md-6">
                                                <p className="mb-2">SHAPING</p>
                                            </div>
                                            <div className="col-md-6">
                                                <input type="radio" id="FLAT-RATE" name="SHIPPING" defaultValue="FLAT-RATE" />
                                                <label htmlFor="FLAT-RATE">FLAT RATE: $03</label><br />
                                                <input type="radio" id="FREE-SHIPPING" name="SHIPPING" defaultValue="FREE-SHIPPING" />
                                                <label htmlFor="FREE-SHIPPING">FREE SHIPPING</label><br />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row mb-2">
                                        <div className="d-flex">
                                            <div className="col-md-6">
                                                <p className="mb-2">TOTAL</p>
                                            </div>
                                            <div className="col-md-6">
                                                <p className="mb-2">$1,029.00</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row mb-4">
                                        <form>
                                            <input type="radio" id="Direct" name="payment-method" defaultValue="Direct" onChange={(e) => setPaymentMethod(e.target.value)} />
                                            <label htmlFor="Direct">Direct Bank Transfer</label><br />
                                            <input type="radio" id="Cheque-Payment" name="payment-method" defaultValue="Cheque-Payment" onChange={(e) => setPaymentMethod(e.target.value)} />
                                            <label htmlFor="Cheque-Payment">Cheque Payment</label><br />
                                            <input type="radio" id="Cash" name="payment-method" defaultValue="Cash" onChange={(e) => setPaymentMethod(e.target.value)} />
                                            <label htmlFor="Cash">Cash On Delivery</label><br />
                                            <input type="radio" id="Paypal" name="payment-method" defaultValue="Paypal" onChange={(e) => setPaymentMethod(e.target.value)} />
                                            <label htmlFor="Paypal">Paypal</label><br />
                                            {errors.paymentMethod && (
                                                <div className="text-danger">{errors.paymentMethod}</div>
                                            )}
                                        </form>
                                    </div>
                                    <button onClick={handlePlaceOrder} className="btn btn-primary px-2 Place-Order">
                                        Place Order
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* **********************************End Main Content************************** */}
        </>
    )
}
