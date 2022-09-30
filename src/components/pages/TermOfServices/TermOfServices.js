import React from 'react';

import './TermOfServices.css';

const TermOfServices = () => {
    return (
        <div className='body'>
            <div className="box">
                <div className="text">
                    <h2>Terms Of Service</h2>
                    <p>Updated On: 28/09/2022</p>
                    <p>Greetings User,</p>
                    <p>
                        Adequate understanding: we may provide you with User Guides, Security Procedures, any technical or functional specifications and / or
                        other materials and instructions for the access to, operation and use of Services. You have read, understood and assessed all such
                        materials and determined that they are adequate to protect your interests;
                    </p>
                    <p>
                        Adequate controls: you have taken reasonable steps to detect, prevent, remove and remedy any unauthorised access to or use of the
                        Channel including actual or potential Malware breaches of your Client Systems;
                    </p>
                    <p>
                        Adequate internal processes: you have adequate internal controls, procedures, processes and other security arrangements to
                        prevent unauthorised access to or use of the Channel including actual or potential Malware interference with your Client Systems;
                    </p>
                    <p>
                        Report problems: you must immediately report any: (i) actual or potential Loss suffered by you in connection with the Channel; (ii) loss
                        or actual or attempted, theft, misuse or unauthorised use, of System Materials, any Electronic Key, Client ID, User ID, Digital Certificate or
                        mobile device; (iii) actual or potential, problems with or unauthorised access to the Channel or Service; (iv) actual or attempted
                        unauthorised transactions; or (v) failure to comp
                    </p>
                </div>
                <h4>
                    I Agree to the <span>Terms of Service</span> and I read the Privacy
                    Notice.
                </h4>

                {/* <div className="buttons">
                    <button className="btn btn-accept" disabled>Accept</button>
                    <button className="btn btn-decline" disabled>Decline</button>
                </div> */}
            </div>
        </div>
    )
}

export default TermOfServices;