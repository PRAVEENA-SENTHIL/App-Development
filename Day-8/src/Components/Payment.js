import React from "react";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBContainer,
  MDBInput,
  MDBRow,
} from "mdb-react-ui-kit";
import { Link } from "react-router-dom";

export default function App() {
  return (
    <MDBContainer className="py-5">
      <MDBRow className="justify-content-center">
        <MDBCol md="4">
          <MDBCard>
            <MDBCardBody>
              <div className="text-center mb-4">
                <h3 className="text-2xl font-semibold">Settings</h3>
                <h6 className="text-sm">Payment</h6>
              </div>
              <p className="font-semibold mb-4 pb-2">Saved cards:</p>
              {/* Card 1 */}
              <div className="d-flex align-items-center mb-4 pb-1">
                <img
                  className="w-10 h-10 object-contain"
                  src="https://img.icons8.com/color/48/000000/mastercard-logo.png"
                  alt="Mastercard"
                />
                <div className="flex-grow-1 mx-3">
                  <div className="form-outline">
                    <MDBInput
                      label="Card Number"
                      id="form1"
                      type="text"
                      size="sm"
                      value="** ** ** 3193"
                    />
                  </div>
                </div>
                <a href="#!" className="text-blue-500 hover:underline">
                  Remove card
                </a>
              </div>
              {/* Card 2 */}
              <div className="d-flex align-items-center mb-4 pb-1">
                <img
                  className="w-10 h-10 object-contain"
                  src="https://img.icons8.com/color/48/000000/visa.png"
                  alt="Visa"
                />
                <div className="flex-grow-1 mx-3">
                  <div className="form-outline">
                    <MDBInput
                      label="Card Number"
                      id="form2"
                      type="text"
                      size="sm"
                      value="** ** ** 4296"
                    />
                  </div>
                </div>
                <a href="#!" className="text-blue-500 hover:underline">
                  Remove card
                </a>
              </div>
              <p className="font-semibold mb-4">Add new card:</p>
              <MDBInput
                label="Cardholder's Name"
                id="form3"
                type="text"
                size="sm"
                value="Anna Doe"
              />
              <MDBRow className="my-4">
                <MDBCol size="7">
                  <MDBInput
                    label="Card Number"
                    id="form4"
                    type="text"
                    size="sm"
                    value="1234 5678 1234 5678"
                  />
                </MDBCol>
                <MDBCol size="3">
                  <MDBInput
                    label="Expire"
                    id="form5"
                    type="text"
                    size="sm"
                    placeholder="MM/YYYY"
                  />
                </MDBCol>
                <MDBCol size="2">
                  <MDBInput
                    label="CVV"
                    id="form6"
                    type="text"
                    size="sm"
                    placeholder="CVV"
                  />
                </MDBCol>
              </MDBRow>
              <MDBBtn
                color="success"
                size="sm"
                className="w-100 hover:bg-green-700"
                onClick={() => {
                  window.location.href = "/";
                }}
              >
                Make Payment
              </MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}
