import "./App.css";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Buttonsmall from "./shared/components/Button small/button-small";
import Buttonlarg from "./shared/components/Button large/button-large";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import DetailBox from "./shared/components/DetailBox/detail-box";
import Generatedlink from "./shared/components/Generate link/generated-link";
function App() {
  const [show, setShow] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const axios = require('axios').default;
  const [urls, setUrls] = useState([]);
  const [loading, setLoading] = useState(false);

    function handleSubmit() {
      setLoading(true);
      axios
        .get(`https://api.shrtco.de/v2/shorten?url=${inputValue}/`)
        .then((response) => {
          setLoading(false);
          handleReset()
          let urlEntry = {
            newLink: response.data.result.short_link2,
            oldLink: inputValue,
          };
          setUrls([...urls, urlEntry]);
        })
        .then();
    }

    function handleReset() {
        document.querySelector('input').value = '';
    }

    function handleInputText(e) {
      setInputValue(e.target.value);
    }


  return (
    <div className="App">
      <Navbar variant="light" className="main-nav container">
        <Navbar.Brand href="#home">
          <svg
            width="121"
            height="33"
            viewBox="0 0 121 33"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M34.6988 25.0001H40.1388V13.5761C40.1388 12.8054 40.0708 12.0177 39.9348 11.2131C39.7988 10.4084 39.5324 9.68306 39.1357 9.03705C38.7391 8.39105 38.1724 7.85839 37.4358 7.43905C36.6991 7.01972 35.7301 6.81005 34.5288 6.81005C33.2367 6.81005 32.0524 7.09905 30.9758 7.67705C29.8991 8.25506 29.0321 9.07672 28.3748 10.1421V0.180054H22.9348V25.0001H28.3748V14.7661C28.5334 14.2901 28.7601 13.8594 29.0548 13.4741C29.3494 13.0887 29.6724 12.7544 30.0238 12.4711C30.3751 12.1877 30.7377 11.9724 31.1118 11.8251C31.4858 11.6777 31.8314 11.6041 32.1488 11.6041C32.9421 11.6041 33.5654 11.8761 34.0188 12.4201C34.4721 12.9641 34.6988 13.814 34.6988 14.9701V25.0001ZM16.0006 7.42205C16.4086 7.67139 16.6466 7.84139 16.7146 7.93205L19.1626 3.30805C18.6186 2.99072 18.0236 2.67339 17.3776 2.35605C16.7316 2.03872 16.0346 1.75539 15.2866 1.50605C14.5386 1.25672 13.7566 1.05272 12.9406 0.894054C12.1246 0.735386 11.2973 0.656054 10.4586 0.656054C9.2573 0.656054 8.11831 0.826052 7.04164 1.16605C5.96497 1.50606 5.01864 2.01038 4.20264 2.67905C3.38664 3.34772 2.74064 4.16938 2.26464 5.14405C1.78864 6.11873 1.55064 7.24071 1.55064 8.51005C1.55064 9.41673 1.68097 10.2101 1.94164 10.8901C2.20231 11.5701 2.59897 12.1707 3.13164 12.6921C3.66431 13.2134 4.33864 13.6724 5.15464 14.0691C5.97064 14.4657 6.93397 14.8341 8.04464 15.1741C8.38011 15.2738 8.7056 15.3699 9.02112 15.4624L10.7226 15.9575C11.2909 16.1322 11.7922 16.3187 12.2266 16.5171C12.748 16.7551 13.156 17.0214 13.4506 17.3161C13.7453 17.6107 13.8926 17.9847 13.8926 18.4381C13.8926 19.6394 12.9066 20.2401 10.9346 20.2401C10.0053 20.2401 9.08731 20.1154 8.18064 19.8661C7.27397 19.6167 6.45231 19.3334 5.71564 19.0161C4.97897 18.6987 4.36131 18.3814 3.86264 18.0641C3.36397 17.7467 3.06931 17.5314 2.97864 17.4181L0.53064 22.2801C1.23331 22.7561 1.9983 23.1754 2.82564 23.5381C3.65298 23.9007 4.50864 24.2124 5.39264 24.4731C6.27664 24.7337 7.1833 24.9321 8.11264 25.0681C9.04198 25.2041 9.94864 25.2721 10.8326 25.2721C11.9886 25.2721 13.1106 25.1417 14.1986 24.8811C15.2866 24.6204 16.25 24.2011 17.0886 23.6231C17.9273 23.045 18.6016 22.2857 19.1116 21.3451C19.6216 20.4044 19.8766 19.2541 19.8766 17.8941C19.8766 16.7834 19.701 15.8314 19.3496 15.0381C18.9983 14.2447 18.4996 13.5704 17.8536 13.0151C17.2076 12.4597 16.42 11.9951 15.4906 11.6211C14.5613 11.2471 13.5186 10.9014 12.3626 10.5841C12.0831 10.5085 11.8149 10.4355 11.558 10.3649L10.1526 9.97205C9.51797 9.79072 8.99098 9.59239 8.57164 9.37705C8.1523 9.16172 7.83497 8.91805 7.61964 8.64605C7.40431 8.37405 7.29664 8.03406 7.29664 7.62605C7.29664 6.28871 8.29396 5.62005 10.2886 5.62005C11.014 5.62005 11.7393 5.72205 12.4646 5.92605C13.19 6.13005 13.8586 6.36805 14.4706 6.64005C15.0826 6.91206 15.5926 7.17272 16.0006 7.42205ZM52.4789 25.3401C50.9602 25.3401 49.6059 25.0907 48.4159 24.5921C47.2259 24.0934 46.2229 23.4191 45.4069 22.5691C44.5909 21.719 43.9732 20.7331 43.5539 19.6111C43.1345 18.489 42.9249 17.3161 42.9249 16.0921C42.9249 14.868 43.1345 13.6951 43.5539 12.5731C43.9732 11.451 44.5909 10.4651 45.4069 9.61505C46.2229 8.76505 47.2259 8.08506 48.4159 7.57505C49.6059 7.06505 50.9602 6.81005 52.4789 6.81005C53.9975 6.81005 55.3462 7.06505 56.5249 7.57505C57.7035 8.08506 58.7009 8.76505 59.5169 9.61505C60.3329 10.4651 60.9562 11.451 61.3869 12.5731C61.8175 13.6951 62.0329 14.868 62.0329 16.0921C62.0329 17.3161 61.8232 18.489 61.4039 19.6111C60.9845 20.7331 60.3669 21.719 59.5509 22.5691C58.7349 23.4191 57.7319 24.0934 56.5419 24.5921C55.3519 25.0907 53.9975 25.3401 52.4789 25.3401ZM49.6229 19.4751C48.8749 18.625 48.5009 17.4974 48.5009 16.0921C48.5009 15.4121 48.6029 14.7831 48.8069 14.2051C49.0109 13.6271 49.2885 13.1341 49.6399 12.7261C49.9912 12.3181 50.4105 12.0007 50.8979 11.7741C51.3852 11.5474 51.9122 11.4341 52.4789 11.4341C53.6122 11.4341 54.5529 11.859 55.3009 12.7091C56.0489 13.5591 56.4229 14.6867 56.4229 16.0921C56.4229 16.7721 56.3209 17.4011 56.1169 17.9791C55.9129 18.5571 55.6352 19.0501 55.2839 19.4581C54.9325 19.8661 54.5189 20.1834 54.0429 20.4101C53.5669 20.6367 53.0455 20.7501 52.4789 20.7501C51.3229 20.7501 50.3709 20.3251 49.6229 19.4751ZM76.277 11.8081C74.9623 11.8307 73.7723 12.0461 72.707 12.4541C71.6416 12.8621 70.871 13.474 70.395 14.2901V25.0001H64.955V7.15005H69.953V10.7541C70.565 9.55271 71.3526 8.61206 72.316 7.93205C73.2793 7.25205 74.305 6.90072 75.393 6.87805H75.937C76.0503 6.87805 76.1636 6.88939 76.277 6.91205V11.8081ZM87.7841 24.9321C88.7474 24.6601 89.6031 24.3654 90.3511 24.0481L89.2971 19.7301C88.9798 19.8887 88.6058 20.0361 88.1751 20.1721C87.7444 20.3081 87.3251 20.3761 86.9171 20.3761C86.4638 20.3761 86.0898 20.2457 85.7951 19.9851C85.5004 19.7244 85.3531 19.2994 85.3531 18.7101V11.2641H88.9911V7.15005H85.3531V1.47205H79.9131V7.15005H77.6351V11.2641H79.9131V20.5801C79.9131 21.4414 80.0434 22.1781 80.3041 22.7901C80.5648 23.4021 80.9218 23.8951 81.3751 24.2691C81.8284 24.6431 82.3554 24.9151 82.9561 25.0851C83.5568 25.2551 84.1971 25.3401 84.8771 25.3401C85.8518 25.3401 86.8207 25.2041 87.7841 24.9321ZM92.6272 0.180054H98.0672V18.6421C98.0672 20.0021 98.6452 20.6821 99.8012 20.6821C100.073 20.6821 100.374 20.6424 100.702 20.5631C101.031 20.4837 101.331 20.3647 101.603 20.2061L102.317 24.2861C101.637 24.6034 100.855 24.8527 99.9712 25.0341C99.0872 25.2154 98.2599 25.3061 97.4892 25.3061C95.9252 25.3061 94.7239 24.8981 93.8852 24.0821C93.0465 23.2661 92.6272 22.0874 92.6272 20.5461V0.180054ZM105.358 28.0261C104.962 27.9581 104.537 27.8447 104.083 27.6861V32.3441C104.559 32.5254 105.03 32.6557 105.494 32.7351C105.959 32.8144 106.418 32.8541 106.871 32.8541C108.549 32.8541 109.999 32.3951 111.223 31.4771C112.447 30.559 113.297 29.3634 113.773 27.8901L120.573 7.15005H115.473L111.903 20.3421L107.755 7.15005H102.145L108.945 25.0001C108.651 26.1787 108.322 26.9947 107.959 27.4481C107.597 27.9014 107.087 28.1281 106.429 28.1281C106.112 28.1281 105.755 28.0941 105.358 28.0261Z"
              fill="#34313D"
            />
          </svg>
        </Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#home">Features</Nav.Link>
          <Nav.Link href="#features">Pricing</Nav.Link>
          <Nav.Link href="#pricing">Resources</Nav.Link>
        </Nav>
        <div className="login-buttons">
          <Button variant="link">Login</Button>
          <Buttonsmall text="Sign Up" />
        </div>
        <div className="mobile-nav ml-auto">
          <Button variant="link" onClick={handleShow}>
            <svg
              width="24"
              height="21"
              viewBox="0 0 24 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="24" height="3" fill="#9E9AA8" />
              <rect y="9" width="24" height="3" fill="#9E9AA8" />
              <rect y="18" width="24" height="3" fill="#9E9AA8" />
            </svg>
          </Button>
          <Modal show={show} onHide={handleClose}>
            <Modal.Body>
              <div className="memu-item">Features</div>
              <div className="memu-item">Pricing</div>
              <div className="memu-item">Resources</div>
              <hr className="mobile-hr"></hr>
              <Button variant="link">Login</Button>
              <br></br>
              <Buttonsmall text="Sign Up" />
            </Modal.Body>
          </Modal>
        </div>
      </Navbar>
      <div className="banner-section">
        <div className="inner-container container">
          <div className="row">
            <div className="col-md-7 col text-left order-md-1 order-2">
              <h2 className="banner-header">More than just shorter links</h2>
              <p className="banner-text">
                Build your brand’s recognition and get detailed insights on how
                your links are performing.
              </p>
              <Buttonlarg text="Get Started"></Buttonlarg>
            </div>
            <div className="col-md-5 col order-md-2 order-1">
              <img className="banner" src="../assets/banner.png" />
              <img
                className="mobile-banner"
                src="../assets/mobile-banner.png"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="link-generation__section">
        <div
          className="input-section d-flex"
          style={{
            backgroundImage: `url("../assets/upper-background.png")`,
          }}
        >
          <div className="input">
            <Form className="input-form">
              <Form.Group controlId="formBasicEmail" className="red">
                <Form.Control
                  type="text"
                  placeholder="Shorten a link here..."
                  onKeyUp={handleInputText}
                />
              </Form.Group>
            </Form>
          </div>
          <div className="buttonContainer">
            <Buttonlarg
              text="Shorten it!"
              type="submit"
              click={handleSubmit}
              loading={loading}
            />
          </div>
        </div>
      </div>
      <div className="Generated links">
        {urls.map((url, index) => (
          <Generatedlink
            key={index}
            oldLink={url.oldLink}
            newLink={url.newLink}
          />
        ))}
      </div>
      <div className="info-section">
        <div className="inner-section container">
          <div className="row justify-content-center text-center align-items-center">
            <div
              className="col-xl-8 col-lg-9 col-md-10 layer-3 aos-init aos-animate"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              <h1 className="display-3">Advanced Statistics</h1>
              <div className="mb-4">
                <p className="lead px-xl-5">
                  Track how your links are performing across the web with our
                  advanced statistics dashboard.
                </p>
              </div>
            </div>
          </div>
          <div className="d-flex container">
            <DetailBox
              classNameGiven="first-option"
              icon="../assets/Brand.svg"
            />
            <DetailBox
              classNameGiven="second-option"
              icon="../assets/Detailed.svg"
            />
            <DetailBox
              classNameGiven="third-option"
              icon="../assets/Fully.svg"
            />
          </div>
        </div>
      </div>
      <div
        className="Bottom-CTA"
        style={{
          backgroundImage: `url("../assets/bottom-background.png")`,
        }}
      >
        <div className="row justify-content-center text-center align-items-center">
          <div
            className="col-xl-8 col-lg-9 col-md-10 text-container"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            <h1 className="display-3">Boost your links today</h1>
            <div className="mb-4">
              <Buttonlarg text="Get Started" />
            </div>
          </div>
        </div>
      </div>
      <div className="footer">
        <div className="container">
          <div className="row">
            <div className="col text-left mr-5">
              <svg
                width="121"
                height="33"
                viewBox="0 0 121 33"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M34.6988 25H40.1388V13.576C40.1388 12.8053 40.0708 12.0177 39.9348 11.213C39.7988 10.4083 39.5324 9.683 39.1357 9.03699C38.7391 8.39099 38.1724 7.85833 37.4358 7.43899C36.6991 7.01966 35.7301 6.80999 34.5288 6.80999C33.2367 6.80999 32.0524 7.09899 30.9758 7.67699C29.8991 8.255 29.0321 9.07665 28.3748 10.142V0.179993H22.9348V25H28.3748V14.766C28.5334 14.29 28.7601 13.8593 29.0548 13.474C29.3494 13.0887 29.6724 12.7543 30.0238 12.471C30.3751 12.1877 30.7377 11.9723 31.1118 11.825C31.4858 11.6777 31.8314 11.604 32.1488 11.604C32.9421 11.604 33.5654 11.876 34.0188 12.42C34.4721 12.964 34.6988 13.814 34.6988 14.97V25ZM16.0006 7.42199C16.4086 7.67133 16.6466 7.84133 16.7146 7.93199L19.1626 3.30799C18.6186 2.99066 18.0236 2.67333 17.3776 2.35599C16.7316 2.03866 16.0346 1.75533 15.2866 1.50599C14.5386 1.25666 13.7566 1.05266 12.9406 0.893993C12.1246 0.735325 11.2973 0.655993 10.4586 0.655993C9.2573 0.655993 8.11831 0.825991 7.04164 1.16599C5.96497 1.50599 5.01864 2.01032 4.20264 2.67899C3.38664 3.34766 2.74064 4.16932 2.26464 5.14399C1.78864 6.11866 1.55064 7.24065 1.55064 8.50999C1.55064 9.41666 1.68097 10.21 1.94164 10.89C2.20231 11.57 2.59897 12.1707 3.13164 12.692C3.66431 13.2133 4.33864 13.6723 5.15464 14.069C5.97064 14.4657 6.93397 14.834 8.04464 15.174C8.38011 15.2737 8.7056 15.3698 9.02112 15.4623L10.7226 15.9574C11.2909 16.1321 11.7922 16.3187 12.2266 16.517C12.748 16.755 13.156 17.0213 13.4506 17.316C13.7453 17.6107 13.8926 17.9847 13.8926 18.438C13.8926 19.6393 12.9066 20.24 10.9346 20.24C10.0053 20.24 9.08731 20.1153 8.18064 19.866C7.27397 19.6167 6.45231 19.3333 5.71564 19.016C4.97897 18.6987 4.36131 18.3813 3.86264 18.064C3.36397 17.7467 3.06931 17.5313 2.97864 17.418L0.53064 22.28C1.23331 22.756 1.9983 23.1753 2.82564 23.538C3.65298 23.9007 4.50864 24.2123 5.39264 24.473C6.27664 24.7337 7.1833 24.932 8.11264 25.068C9.04198 25.204 9.94864 25.272 10.8326 25.272C11.9886 25.272 13.1106 25.1417 14.1986 24.881C15.2866 24.6203 16.25 24.201 17.0886 23.623C17.9273 23.045 18.6016 22.2857 19.1116 21.345C19.6216 20.4043 19.8766 19.254 19.8766 17.894C19.8766 16.7833 19.701 15.8313 19.3496 15.038C18.9983 14.2447 18.4996 13.5703 17.8536 13.015C17.2076 12.4597 16.42 11.995 15.4906 11.621C14.5613 11.247 13.5186 10.9013 12.3626 10.584C12.0831 10.5084 11.8149 10.4354 11.558 10.3649L10.1526 9.97199C9.51797 9.79066 8.99098 9.59233 8.57164 9.37699C8.1523 9.16166 7.83497 8.91799 7.61964 8.64599C7.40431 8.37399 7.29664 8.03399 7.29664 7.62599C7.29664 6.28865 8.29396 5.61999 10.2886 5.61999C11.014 5.61999 11.7393 5.72199 12.4646 5.92599C13.19 6.12999 13.8586 6.36799 14.4706 6.63999C15.0826 6.91199 15.5926 7.17266 16.0006 7.42199ZM52.4789 25.34C50.9602 25.34 49.6059 25.0907 48.4159 24.592C47.2259 24.0933 46.2229 23.419 45.4069 22.569C44.5909 21.719 43.9732 20.733 43.5539 19.611C43.1345 18.489 42.9249 17.316 42.9249 16.092C42.9249 14.868 43.1345 13.695 43.5539 12.573C43.9732 11.451 44.5909 10.465 45.4069 9.61499C46.2229 8.76499 47.2259 8.085 48.4159 7.57499C49.6059 7.06499 50.9602 6.80999 52.4789 6.80999C53.9975 6.80999 55.3462 7.06499 56.5249 7.57499C57.7035 8.085 58.7009 8.76499 59.5169 9.61499C60.3329 10.465 60.9562 11.451 61.3869 12.573C61.8175 13.695 62.0329 14.868 62.0329 16.092C62.0329 17.316 61.8232 18.489 61.4039 19.611C60.9845 20.733 60.3669 21.719 59.5509 22.569C58.7349 23.419 57.7319 24.0933 56.5419 24.592C55.3519 25.0907 53.9975 25.34 52.4789 25.34ZM49.6229 19.475C48.8749 18.625 48.5009 17.4973 48.5009 16.092C48.5009 15.412 48.6029 14.783 48.8069 14.205C49.0109 13.627 49.2885 13.134 49.6399 12.726C49.9912 12.318 50.4105 12.0007 50.8979 11.774C51.3852 11.5473 51.9122 11.434 52.4789 11.434C53.6122 11.434 54.5529 11.859 55.3009 12.709C56.0489 13.559 56.4229 14.6867 56.4229 16.092C56.4229 16.772 56.3209 17.401 56.1169 17.979C55.9129 18.557 55.6352 19.05 55.2839 19.458C54.9325 19.866 54.5189 20.1833 54.0429 20.41C53.5669 20.6367 53.0455 20.75 52.4789 20.75C51.3229 20.75 50.3709 20.325 49.6229 19.475ZM76.277 11.808C74.9623 11.8307 73.7723 12.046 72.707 12.454C71.6416 12.862 70.871 13.474 70.395 14.29V25H64.955V7.14999H69.953V10.754C70.565 9.55265 71.3526 8.612 72.316 7.93199C73.2793 7.25199 74.305 6.90066 75.393 6.87799H75.937C76.0503 6.87799 76.1636 6.88933 76.277 6.91199V11.808ZM87.7841 24.932C88.7474 24.66 89.6031 24.3653 90.3511 24.048L89.2971 19.73C88.9798 19.8887 88.6058 20.036 88.1751 20.172C87.7444 20.308 87.3251 20.376 86.9171 20.376C86.4638 20.376 86.0898 20.2457 85.7951 19.985C85.5004 19.7243 85.3531 19.2993 85.3531 18.71V11.264H88.9911V7.14999H85.3531V1.47199H79.9131V7.14999H77.6351V11.264H79.9131V20.58C79.9131 21.4413 80.0434 22.178 80.3041 22.79C80.5648 23.402 80.9218 23.895 81.3751 24.269C81.8284 24.643 82.3554 24.915 82.9561 25.085C83.5568 25.255 84.1971 25.34 84.8771 25.34C85.8518 25.34 86.8207 25.204 87.7841 24.932ZM92.6272 0.179993H98.0672V18.642C98.0672 20.002 98.6452 20.682 99.8012 20.682C100.073 20.682 100.374 20.6423 100.702 20.563C101.031 20.4837 101.331 20.3647 101.603 20.206L102.317 24.286C101.637 24.6033 100.855 24.8527 99.9712 25.034C99.0872 25.2153 98.2599 25.306 97.4892 25.306C95.9252 25.306 94.7239 24.898 93.8852 24.082C93.0465 23.266 92.6272 22.0873 92.6272 20.546V0.179993ZM105.358 28.026C104.962 27.958 104.537 27.8447 104.083 27.686V32.344C104.559 32.5253 105.03 32.6557 105.494 32.735C105.959 32.8143 106.418 32.854 106.871 32.854C108.549 32.854 109.999 32.395 111.223 31.477C112.447 30.559 113.297 29.3633 113.773 27.89L120.573 7.14999H115.473L111.903 20.342L107.755 7.14999H102.145L108.945 25C108.651 26.1787 108.322 26.9947 107.959 27.448C107.597 27.9013 107.087 28.128 106.429 28.128C106.112 28.128 105.755 28.094 105.358 28.026Z"
                  fill="white"
                />
              </svg>
            </div>
            <div className="col">
              <h3>Features</h3>
              <p>Link Shortening</p>
              <p>Branded Links</p>
              <p>Analytics</p>
            </div>
            <div className="col">
              <h3>Resources</h3>
              <p>Blog</p>
              <p>Developers</p>
              <p>Support</p>
            </div>
            <div className="col">
              <h3>Company</h3>
              <p>About</p>
              <p>Our Team</p>
              <p>Careers</p>
              <p>Contact</p>
            </div>
            <div className="col">
              <div className="d-flex">
                <div className="icon mr-4">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M22.675 0H1.325C0.593 0 0 0.593 0 1.325V22.676C0 23.407 0.593 24 1.325 24H12.82V14.706H9.692V11.084H12.82V8.413C12.82 5.313 14.713 3.625 17.479 3.625C18.804 3.625 19.942 3.724 20.274 3.768V7.008L18.356 7.009C16.852 7.009 16.561 7.724 16.561 8.772V11.085H20.148L19.681 14.707H16.561V24H22.677C23.407 24 24 23.407 24 22.675V1.325C24 0.593 23.407 0 22.675 0Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <div className="icon mr-4">
                  <svg
                    width="24"
                    height="20"
                    viewBox="0 0 24 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M24 2.55699C23.117 2.94899 22.168 3.21299 21.172 3.33199C22.189 2.72299 22.97 1.75799 23.337 0.607986C22.386 1.17199 21.332 1.58199 20.21 1.80299C19.313 0.845986 18.032 0.247986 16.616 0.247986C13.437 0.247986 11.101 3.21399 11.819 6.29299C7.728 6.08799 4.1 4.12799 1.671 1.14899C0.381 3.36199 1.002 6.25699 3.194 7.72299C2.388 7.69699 1.628 7.47599 0.965 7.10699C0.911 9.38799 2.546 11.522 4.914 11.997C4.221 12.185 3.462 12.229 2.69 12.081C3.316 14.037 5.134 15.46 7.29 15.5C5.22 17.123 2.612 17.848 0 17.54C2.179 18.937 4.768 19.752 7.548 19.752C16.69 19.752 21.855 12.031 21.543 5.10599C22.505 4.41099 23.34 3.54399 24 2.55699Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <div className="icon mr-4">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 0C5.373 0 0 5.372 0 12C0 17.084 3.163 21.426 7.627 23.174C7.522 22.225 7.427 20.769 7.669 19.733C7.887 18.796 9.076 13.768 9.076 13.768C9.076 13.768 8.717 13.049 8.717 11.986C8.717 10.318 9.684 9.072 10.888 9.072C11.911 9.072 12.406 9.841 12.406 10.762C12.406 11.791 11.751 13.33 11.412 14.757C11.129 15.951 12.011 16.926 13.189 16.926C15.322 16.926 16.961 14.677 16.961 11.431C16.961 8.558 14.897 6.549 11.949 6.549C8.535 6.549 6.531 9.11 6.531 11.756C6.531 12.787 6.928 13.894 7.424 14.494C7.522 14.613 7.536 14.718 7.507 14.839L7.174 16.199C7.121 16.419 7 16.466 6.772 16.36C5.273 15.662 4.336 13.471 4.336 11.711C4.336 7.926 7.086 4.449 12.265 4.449C16.428 4.449 19.663 7.416 19.663 11.38C19.663 15.516 17.056 18.844 13.436 18.844C12.22 18.844 11.077 18.213 10.686 17.466L9.938 20.319C9.667 21.362 8.936 22.669 8.446 23.465C9.57 23.812 10.763 24 12 24C18.627 24 24 18.627 24 12C24 5.372 18.627 0 12 0Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <div className="icon">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M12 0C8.741 0 8.333 0.014 7.053 0.072C2.695 0.272 0.273 2.69 0.073 7.052C0.014 8.333 0 8.741 0 12C0 15.259 0.014 15.668 0.072 16.948C0.272 21.306 2.69 23.728 7.052 23.928C8.333 23.986 8.741 24 12 24C15.259 24 15.668 23.986 16.948 23.928C21.302 23.728 23.73 21.31 23.927 16.948C23.986 15.668 24 15.259 24 12C24 8.741 23.986 8.333 23.928 7.053C23.732 2.699 21.311 0.273 16.949 0.073C15.668 0.014 15.259 0 12 0ZM12 2.163C15.204 2.163 15.584 2.175 16.85 2.233C20.102 2.381 21.621 3.924 21.769 7.152C21.827 8.417 21.838 8.797 21.838 12.001C21.838 15.206 21.826 15.585 21.769 16.85C21.62 20.075 20.105 21.621 16.85 21.769C15.584 21.827 15.206 21.839 12 21.839C8.796 21.839 8.416 21.827 7.151 21.769C3.891 21.62 2.38 20.07 2.232 16.849C2.174 15.584 2.162 15.205 2.162 12C2.162 8.796 2.175 8.417 2.232 7.151C2.381 3.924 3.896 2.38 7.151 2.232C8.417 2.175 8.796 2.163 12 2.163ZM5.838 12C5.838 8.597 8.597 5.838 12 5.838C15.403 5.838 18.162 8.597 18.162 12C18.162 15.404 15.403 18.163 12 18.163C8.597 18.163 5.838 15.403 5.838 12ZM12 16C9.791 16 8 14.21 8 12C8 9.791 9.791 8 12 8C14.209 8 16 9.791 16 12C16 14.21 14.209 16 12 16ZM16.965 5.595C16.965 4.8 17.61 4.155 18.406 4.155C19.201 4.155 19.845 4.8 19.845 5.595C19.845 6.39 19.201 7.035 18.406 7.035C17.61 7.035 16.965 6.39 16.965 5.595Z"
                      fill="white"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
