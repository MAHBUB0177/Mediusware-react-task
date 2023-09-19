import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import CommonModal from "./commonmodal";
import ActionButton from "./ActionButton";
import { Form } from "react-bootstrap";

const ModalB= () => {
  const [response, setResponse] = useState()
  const [country, setCountry] = useState();
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    fetch("https://contact.mediusware.com/api/country-contacts/United States/")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((responseData) => {
        setResponse(responseData?.results)
        setCountry(responseData?.results);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  const _handleCheckbox = (e) => {
    if (e.target.checked) {
        const newCountry = country?.filter(item => item?.id % 2 === 0)
        setCountry(newCountry)
    }else {
      setCountry(response);
    }
  }

  return (
    <div>
      <CommonModal show={true} >
        <div>
        <table className="table table-striped ">
                        <thead>

                            
                        <tr>
                        <th scope="col">id</th>
                            <th scope="col">phone</th>
                            <th scope="col">country</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                                country?.map((item,index)=>
                                
                                <tr key={index}>
                                  <td scope="col">{item?.id}</td>
                            <td scope="col">{item?.phone}</td>
                            <td scope="col">{item?.country?.name}</td>
                        </tr>
                                )
                            }
                        </tbody>
                    </table>
        </div>
        <div className='d-flex  justify-content-between'>
          <ActionButton/>

          <Form.Check
            inline
            label="filter"
            name="group1"
            type='checkbox'
            onClick={_handleCheckbox}
          />
        </div>
      </CommonModal >
    </div>
  );
};

export default ModalB;
