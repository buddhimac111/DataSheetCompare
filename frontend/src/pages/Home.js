import React, { useState } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

const Home = () => {
  const [file1, setFile1] = useState(null);
  const [file2, setFile2] = useState(null);

  const onChange = (e) => {
    setFile1(e.target.files[0]);
  };


  return (
    <>
      <div id="uploadContainer" className="p-5">
        <div className="text-center my-5">
          <h2 className="headerTopic">Data Sheet Comparison</h2>
        </div>
        <Form encType="multipart/form-data" method="POST" action="http://localhost:5000/uploadFiles">
          <div className="w-100 container p-3">
            <FormGroup>
              <Label for="file">Upload Excel Sheet 1</Label>
              <Input type="file" name="file1" id="file1" onChange={onChange} />
            </FormGroup>
            <br />
            <FormGroup>
              <Label for="file">Upload Excel Sheet 2</Label>
              <Input type="file" name="file2" id="file2" onChange={onChange} />
            </FormGroup>

            <Input
              type="submit"
              value="Submit"
              className="btn btn-primary mb-3 mt-5"
            />
            <Input type="reset" value="clear" className="btn btn-danger" />
          </div>

          <div></div>
        </Form>
      </div>
    </>
  );
};

export default Home;
