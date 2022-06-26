import React, { useEffect, useState } from "react";
import { Html5QrcodeScanner } from "html5-qrcode";

const Scanner = () => {
  const [scannedCodes, setScannedCodes] = useState([]);

  function onScanSuccess(decodedText, decodedResult) {
    // handle the scanned code as you like, for example:
    console.log(`Code matched = ${decodedText}`, decodedResult);
    setScannedCodes(scannedCodes.concat([{ decodedText, decodedResult }]));
  }

  function onScanFailure(error) {
    // handle scan failure, usually better to ignore and keep scanning.
    // for example:
    // console.log(`Code scan error = ${error}`);
  }

  useEffect(() => {
    let html5QrcodeScanner = new Html5QrcodeScanner("reader", { fps: 10, qrbox: { width: 250, height: 250 } }, /* verbose= */ false);
    html5QrcodeScanner.render(onScanSuccess, onScanFailure);
    console.log("ile razy");
  }, []);

  return (
    <div id="reader" style={{ width: 600 }}>
      Scanner
    </div>
  );
};

export default Scanner;
