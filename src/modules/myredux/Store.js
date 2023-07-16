import React from "react";
import {configureStore} from '@reduxjs/toolkit';
import  Myfunction  from "./Myslicer";


export const store = configureStore({
    reducer: {
        counter: Myfunction
    },
  })

