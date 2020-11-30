import React from 'react';

function Modal() {
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
                        <p>Other packages avaible upon request</p>
                    </div> 
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
