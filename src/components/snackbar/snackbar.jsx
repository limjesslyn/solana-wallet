import "./snackbar.css"

const Snackbar = (props) => {
    return(
        <div id="snackbar">Your address : {props.address} is successfully copied to clipboard.</div>
    )
    
}

export default Snackbar