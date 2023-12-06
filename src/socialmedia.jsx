import { useEffect, useRef } from "react";


function SocialMedia() {

    const tg = useRef('https://t.me/IMFURgroup');
    const fb = useRef('https://www.facebook.com/groups/513799148790024/')
    const msg = useRef('https://www.facebook.com/institutomexicanodelfurry')
    const email = useRef('https://mail.google.com/mail/u/0/#inbox?compose=DmwnWrRqjKrtxbfcsZbTKnRCtBWXlkvZLlSFXmzxkXLTLcSQlHpsfjnFlpPKMxjfsTtDqrkLrkRl')

    const telegramLink = () =>{window.open(tg.current);}
    const groupLink = () =>{window.open(fb.current);}
    const pageLink = () =>{window.open(msg.current);}
    const emailLink = () => {window.open(email.current)}

    return (  
    <div className="container">
        
        <div className="row">

            <div className="col position-absolute bottom-0 end-0">
                <i className="fa-brands fa-telegram fa-2xl size" onClick={telegramLink}></i>
                <i className="fa-brands fa-facebook fa-2xl size" onClick={groupLink}></i>
                <i className="fa-brands fa-facebook-messenger fa-2xl size" onClick={pageLink}></i>
                <i className="fa-solid fa-comment fa-2xl size" onClick={emailLink}></i>
            </div>

        </div>
    </div>
    );
}

export default SocialMedia;

 
