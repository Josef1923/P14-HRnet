import React from "react";
import employees from "../../../src/mock/employees.json";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addEmployeesList } from "../../redux/slice";
import "./styles.scss";

function Footer() {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const tadam = () => {
    localStorage.setItem("employees", JSON.stringify(employees));
    dispatch(addEmployeesList(employees))
    navigate("/employees");
  }

  return (
    <footer>
      <p onClick={tadam}>Copyright, 2021 HRnet</p>
    </footer>
  );
}

export default Footer;