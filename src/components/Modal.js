import React, {useState} from 'react';
import { PayPalButton } from "react-paypal-button-v2";


function Modal() {

    const [paidFor, setPaidFor] = useState(false);

    return (
        <>
        <div className="modal fade" id="dive-packages" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable" role="document">
                <div className="modal-content">
                <div className="modal-header">
                    <h3 className="modal-title" id="dive-package-title">Dive Packages</h3>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="well">
                        <p>2 Tank Dive: $100 per person</p>
                        <p>Duration: 2.5 Hours</p>
                        <p>4 Tank Package: $180</p>
                        <p>Duration: 2 days of diving</p>
                        <p>Nitrox: $15 per dive</p>
                        <p>Includes: Transport</p>
                        <p>Other packages avaible upon request</p>
                    </div>
                    <div className="underline my-4"></div>
                    <div className="well">
                        <p className='mb-1 mt-2'><strong>Reserve Now</strong></p>
                        <p className='mt-1'>Only a $50 deposit</p>
                    </div>
                    {paidFor ? (
                        <div>
                            <h6>Thanks for choosing to dive with us!</h6>
                        </div>
                    ) : (
                        <div className="well d-flex justify-content-center mb-2">
                        <PayPalButton
                            amount="50.00"
                            shippingPreference="NO_SHIPPING" // default is "GET_FROM_FILE"
                            onSuccess={(details, data) => {
                                setPaidFor(true)

                            // OPTIONAL: Call your server to save the transaction
                            return fetch("/paypal-transaction-complete", {
                                method: "post",
                                body: JSON.stringify({
                                orderId: data.orderID
                                })
                            });
                            }}
                            options={{
                            clientId: "AaPiNuBE-3bjn86CtDSbnbs5nnaeQ-vNhBk48DdMwZ0vsUYGVuE1_38burybKxv_Qn78gXQYUSKf1UG0"
                            }}
                        />
                        </div>
                    )} 
                </div>
                <div class="modal-footer">
                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                </div>
                </div>
            </div>
        </div> 
        </>
    )
}

export default Modal
