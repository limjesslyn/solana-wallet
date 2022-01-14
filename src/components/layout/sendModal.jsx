import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import sendIcon from "../../resources/send.svg";
import underline from "../../resources/underline.svg";
import { PublicKey, Connection, clusterApiUrl, Transaction, SystemProgram, sendAndConfirmTransaction } from "@solana/web3.js";
import { Token } from "@solana/spl-token"
import { TOKEN_PROGRAM_ID } from "../../const";
import { GetClusterUrl } from '../../utils/cluster';
import { Secret2Keypair, SecretString2Secret } from "../../utils/wallet";

const SendModal = (props) => {
    const token = useSelector(state => state.token)
    const network = useSelector(state => state.cluster.network)
    const auth = useSelector(state => state.auth)

    const [destinationAddress, setDestinationAddress] = useState("")
    const [amount, setAmount] = useState(0)
    const [transactionLink, setTransactionLink] = useState("")

    const connection = new Connection(clusterApiUrl(GetClusterUrl(network)))

    const onChangeDestinationAddress = (e) => {
        setDestinationAddress(e.target.value)
    }

    const onChangeAmount = (e) => {
        setAmount(e.target.value)
    }

    useEffect(() => {
        if(token?.currentToken?.decimals === 0)
            setAmount(1)
    }, [token])

    const process = async () => {
        if (token.currentToken === {}) {
            alert("No selected token")
            return
        }

        if (isNaN(amount)) {
            alert("Invalid amount")
            return
        }

        if (amount > token.currentToken.balance) {
            alert("Not enought balance")
        }

        let targetPubkey;
        try {
            targetPubkey = new PublicKey(destinationAddress)
        } catch (e) {
            alert("Invalid destination address")
            return
        }

        const keypair = Secret2Keypair(SecretString2Secret(auth.secret))

        if (token.currentToken.address === "NATIVE") {
            const transaction = new Transaction()
                .add(
                    SystemProgram.transfer({
                        fromPubkey: keypair.publicKey,
                        toPubkey: targetPubkey,
                        lamports: amount * (10 ** token.currentToken.decimals),
                    })
                )
            const recentBlockhash = await connection.getRecentBlockhash();
            const confirm = window.confirm(`Fee for this transaction: ${recentBlockhash.feeCalculator.lamportsPerSignature / 1e9} SOL ?`);
            if (confirm) {
                const sendBtn = document.getElementById("send-button");
                const sendIcon = document.getElementById("send-icon");
                sendIcon.classList.add("hidden");
                sendBtn.classList.add("loading");
                try {
                    let transactionHash = await sendAndConfirmTransaction(connection, transaction, [keypair]);
                    setTransactionLink(`https://solscan.io/tx/${transactionHash}?cluster=${network.toLowerCase()}`)
                } catch(_) {
                    alert("Your transaction failed!");
                }
                sendIcon.classList.remove("hidden");
                sendBtn.classList.remove("loading");
            }
        } else {
            const mintToken = new Token(
                connection,
                new PublicKey(token.currentToken.address),
                TOKEN_PROGRAM_ID,
                keypair
            )

            const fromTokenAccount = await mintToken.getOrCreateAssociatedAccountInfo(keypair.publicKey)
            const toTokenAccount = await mintToken.getOrCreateAssociatedAccountInfo(targetPubkey)

            const transaction = new Transaction().add(
                Token.createTransferInstruction(
                    TOKEN_PROGRAM_ID,
                    fromTokenAccount.address,
                    toTokenAccount.address,
                    keypair.publicKey,
                    [],
                    amount * (10 ** token.currentToken.decimals)
                )
            )
            
            const recentBlockhash = await connection.getRecentBlockhash();
            const confirm = window.confirm(`Fee for this transaction: ${recentBlockhash.feeCalculator.lamportsPerSignature / 1e9} SOL ?`);
            if (confirm) {
                const sendBtn = document.getElementById("send-button");
                const sendIcon = document.getElementById("send-icon");
                sendIcon.classList.add("hidden");
                sendBtn.classList.add("loading");
                try {
                    let transactionHash = await sendAndConfirmTransaction(connection, transaction, [keypair]);
                    setTransactionLink(`https://solscan.io/tx/${transactionHash}?cluster=${network.toLowerCase()}`)
                } catch(_) {
                    alert("Your transaction failed!");
                }
                sendIcon.classList.remove("hidden");
                sendBtn.classList.remove("loading");
            }
        }
    }

    return (
        <div>
            <div id="modal" className="modal justify-center flex">
                <div className="modal-box max-w-screen-md">
                    <div className="modal-action">
                        <span className="w-5/6 flex pt-3">Send</span>
                        <button onClick={() => {
                            let modal = document.getElementById("modal");
                            if (modal.classList.contains("modal-open")) {
                                modal.classList.remove("modal-open");
                            }
                        }} className="btn btn-ghost btn-circle">X</button>
                    </div>
                    <div className="content mt-5">
                        <div className="card">
                            <div className="form-control mx-20">
                                <input placeholder="Destination Address" onChange={onChangeDestinationAddress} className="input input-ghost text-center mt-3 mb-2" type="text" />
                                <div className=" underline w-full justify-center flex -mt-2">
                                    <span className="w-3/5">
                                        <img alt="" src={underline} />
                                    </span>
                                </div>
                                {
                                    token?.currentToken?.decimals !== 0 &&
                                    <>
                                        <input placeholder="Amount" onChange={onChangeAmount} className="input input-ghost text-center mb-3 mt-5" type="text" />
                                        <div className="underline w-full justify-center flex -mt-2">
                                            <span className="w-3/5">
                                                <img alt="" src={underline} />
                                            </span>
                                        </div> 
                                    </>
                                }
                            </div>
                        </div>

                        {
                            transactionLink !== "" &&
                                <div className="card border mt-10">
                                    <div className="card-body">
                                        <h2 className="card-title">Your transaction finished</h2>
                                        <p>
                                            Here's your link.<br />
                                            <a target="_blank" className="link-primary underline" href={transactionLink}>{transactionLink}</a>
                                        </p>
                                        <button className="btn btn-outline shadow-lg btn-md btn-accent mx-auto" onClick={() => setTransactionLink("")}>Okay</button>
                                    </div>
                                </div>
                        }


                        <div onClick={process} id="send-button" className="btn btn-circle btn-ghost justify-center flex items-center shadow-lg mx-auto mt-5">
                            <img alt="" className="" id="send-icon" src={sendIcon} width="60%" height="60%" />
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default SendModal