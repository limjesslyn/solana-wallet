import sendIcon from "../../resources/send.svg";
import underline from "../../resources/underline.svg";
const SendModal = (props) => {
    return (
        <div>
            <div id="modal" className="modal justify-center flex">
                <div className="modal-box max-w-screen-md">
                    <div className="modal-action">
                        <span className="w-5/6 flex pt-3">Send</span>
                        <a href="#" onClick={() => {
                            let modal = document.getElementById("modal");
                            if (modal.classList.contains("modal-open")) {
                                modal.classList.remove("modal-open");
                            }
                        }} className="btn btn-ghost btn-circle">X</a>
                    </div>
                    <div className="content mt-5">
                        <div className="card">
                            <div className="form-control mx-20">
                                <input placeholder="Destination Address" className="input input-ghost text-center mt-3 mb-2" type="text" />
                                <div className=" underline w-full justify-center flex -mt-2">
                                    <span className="w-3/5">
                                        <img src={underline} />
                                    </span>
                                </div>
                                <input placeholder="Amount" className="input input-ghost text-center mb-3 mt-5" type="text" />
                                <div className="underline w-full justify-center flex -mt-2">
                                    <span className="w-3/5">
                                        <img src={underline} />
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="icon w-full mt-8 p-2 justify-center flex">
                            <div className="w-3/12 h-16 justify-center flex">
                                <img className="bg-white shadow-lg rounded-full p-5 hover:shadow-2xl" src={sendIcon} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default SendModal