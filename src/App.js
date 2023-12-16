import "./App.css";
import { Fragment, useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import toast, { Toaster } from "react-hot-toast";

function App() {
  const [oldPayment, setOldPayment] = useState("");
  const [paidRecently, setPaidRecently] = useState("");
  const [date, setDate] = useState("");
  const [nag, setNag] = useState("");
  const [amountPerNag, setAmountPerNag] = useState("");
  const [oldEmpty, setOldEmpty] = useState("");
  const [emptyDate, setEmptyDate] = useState("");
  const [recentEmpty, setRecentEmpty] = useState("");

  const [output, setOutput] = useState("");

  const resetHandler = (e) => {
    e.preventDefault();

    setOldPayment("");
    setPaidRecently("");
    setDate("");
    setNag("");
    setAmountPerNag("");
    setOldEmpty("");
    setEmptyDate("");
    setRecentEmpty("");
    setOutput("");
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const outputMessage = `
      Date = ${new Date(date).getDate()}/${new Date(date).getMonth()+1}/${new Date(date).getFullYear()}

      Old Payment = ₹${Number(oldPayment).toLocaleString("en-IN")}
      Paid Recently = ₹${Number(paidRecently).toLocaleString("en-IN")}

      -------------------------

      Balance = ₹${Number(oldPayment - paidRecently).toLocaleString("en-IN")}
      ${nag} Nag = ₹${Number(nag * amountPerNag).toLocaleString("en-IN")}

      -------------------------

      Total Amount Remaining = ₹${
       Number(Number(oldPayment - paidRecently) + Number(nag * amountPerNag)).toLocaleString("en-IN")
      }

      
      -------------------------
      -------------------------

      Old Empty = ${oldEmpty}
      ${new Date(emptyDate).getDate()}/${new Date(emptyDate).getMonth()+1}/${new Date(emptyDate).getFullYear()} Empty = ${recentEmpty}

      -------------------------

      Total Empty Remaining = ${Number(oldEmpty) + Number(recentEmpty)}
      `;

    setOutput(outputMessage);
  };

  return (
    <Fragment>
      <Toaster position="top-center" reverseOrder={false} />

      <div className="container">
        <div>
          <div>
            <h1>WELCOME DAD</h1>
            {/*  */}
            <div className="formContainer">
              <form className="form" onSubmit={submitHandler}>
                <div className="f1">
                  <div>
                    <p>Old Payment :</p>
                    <input
                      type="number"
                      value={oldPayment}
                      onChange={(e) => setOldPayment(e.target.value)}
                      required
                    />
                  </div>
                  {/*  */}
                  <div>
                    <p>Paid Recently :</p>
                    <input
                      type="number"
                      value={paidRecently}
                      onChange={(e) => setPaidRecently(e.target.value)}
                      required
                    />
                  </div>
                  {/*  */}
                  <div>
                    <div>
                      <p>Date :</p>
                      <input
                        type="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        required
                      />
                    </div>
                    {/*  */}
                    <div>
                      <p>Nag :</p>
                      <input
                        type="number"
                        value={nag}
                        onChange={(e) => setNag(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                  {/*  */}
                  <div>
                    <p>Amount per nag :</p>
                    <input
                      type="number"
                      value={amountPerNag}
                      onChange={(e) => setAmountPerNag(e.target.value)}
                      required
                    />
                  </div>
                </div>
                {/*  */}
                <div className="f2">
                  <div>
                    <p>Old Empty :</p>
                    <input
                      type="number"
                      value={oldEmpty}
                      onChange={(e) => setOldEmpty(e.target.value)}
                      required
                    />
                  </div>
                  {/*  */}
                  <div>
                    <div>
                      <p>Date :</p>
                      <input
                        type="date"
                        value={emptyDate}
                        onChange={(e) => setEmptyDate(e.target.value)}
                        required
                      />
                    </div>
                    {/*  */}
                    <div>
                      <p>Empty :</p>
                      <input
                        type="number"
                        value={recentEmpty}
                        onChange={(e) => setRecentEmpty(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                </div>
                {/*  */}
                <div className="btns">
                  <button type="reset" onClick={resetHandler}>
                    Reset
                  </button>
                  {/*  */}
                  <button type="submit">Submit</button>
                </div>
              </form>
            </div>
            {/*  */}
            <div className="output">
              <textarea
                readOnly
                name="output"
                value={output}
              ></textarea>
              <CopyToClipboard
                text={output}
                onCopy={() => toast.success(`Copied`)}
              >
                <button className="copyBtn">Copy To Clipboard</button>
              </CopyToClipboard>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
