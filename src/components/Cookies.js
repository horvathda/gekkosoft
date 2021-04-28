import CookieConsent from "react-cookie-consent";

function Cookies(){
return(

    <CookieConsent
    onAccept={() => {
        
    }}
    enableDeclineButton
    declineButtonText="Decline (optional)"
    onDecline={() => { 
        
    }}
    >
    This website uses cookies to enhance the user experience.{" "}
    <span style={{ fontSize: "10px" }}>
            This bit of text is smaller :O
          </span>
        </CookieConsent> 
);
}
 export default Cookies;