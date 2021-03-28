import React from "react";
import Button from "react-bootstrap/Button";
import useClipboard from "react-use-clipboard";
import "./style.css";
function Generatedlink(props) {
  const [isCopied, setCopied] = useClipboard(props.newLink);

  return (
    <div className="generated-links d-flex">
      <p className="link-text">{props.oldLink}</p>
      <div className="button-container-links">
        <div className="new-link">{props.newLink}</div>
        <Button
          onClick={setCopied}
          className={isCopied ? "Copied buttonSmall copy" : "buttonSmall copy"}
          size="sm"
        >
          {isCopied ? "Copied!" : "Copy"}
        </Button>
      </div>
    </div>
  );
}

export default Generatedlink;
