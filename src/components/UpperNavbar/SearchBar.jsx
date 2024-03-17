import React from "react";
import { IoIosSearch } from "react-icons/io";
import "./UpperNavbar.css";
import { Button, Form, InputGroup } from "react-bootstrap";
const SearchBar = () => {
  return (
    <>
      <div >
        <Form >
          <InputGroup className="border rounded-pill align-items-center ps-3">
          <Form.Select className="text-grey border-0 p-0 select-category">
          <optgroup className="">
          <option>All Category</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
          </optgroup>
              
            </Form.Select>
            <span className="text-grey divider">|</span>
            <Form.Control
              placeholder="What you looking for?"
              type="text"
              className="border-0 text-grey search-input"
            />
            
            <Button className="btn-search rounded-pill text-white d-flex align-items-center justify-content-center" variant="outline-secondary">
              <IoIosSearch/>
            </Button>
          </InputGroup>
        </Form>
      </div>
    </>
  );
};

export default SearchBar;
