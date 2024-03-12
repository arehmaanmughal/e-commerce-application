import React from "react";
import { IoIosSearch } from "react-icons/io";
import "./UpperNavbar.css";
import { Button, Form, InputGroup } from "react-bootstrap";
const SearchBar = () => {
  return (
    <>
      <div >
        <Form >
          <InputGroup className="border rounded-pill d-flex align-items-center ">
          <Form.Select >
          <optgroup className="border rounded">
          <option>All Category</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
          </optgroup>
              
            </Form.Select>
            <span className="text-secondary">|</span>
            <Form.Control
              placeholder="What you looking for?"
              type="text"
            />
            
            <Button className="btn rounded-pill text-white d-flex align-items-center justify-content-center" variant="outline-secondary">
              <IoIosSearch/>
            </Button>
          </InputGroup>
        </Form>
      </div>
    </>
  );
};

export default SearchBar;
