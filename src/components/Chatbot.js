import React, { useState } from 'react';
import './Chatbot.css';


function Chatbot() {
    const [show, setShow] = useState(false);

    return (
        <>
            <df-messenger
                intent="WELCOME"
                chat-icon="http://cdn.onlinewebfonts.com/svg/img_381628.png"
                chat-title="HWSMBot"
                agent-id="340da86e-b113-4ee0-8242-0dc348dbd222"
                language-code="en"
            >

            </df-messenger>
        </>
    );
}

export default Chatbot;