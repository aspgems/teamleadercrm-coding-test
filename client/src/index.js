/* eslint-disable prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
// We should remove these eslint checks when we load our real component

import ReactDOM from 'react-dom';
import React from 'react';
import FormContainer from "./components/functional/FormContainer";

const wrapper = document.getElementById('app');
wrapper ? ReactDOM.render(<FormContainer />, wrapper) : false
