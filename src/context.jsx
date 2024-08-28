import React, { useContext, useEffect, useReducer } from "react";
import reducer from "./reducer";

const AppContext = React.createContext();
const API = "https://api.pujakaitem.com/api/products";

const initialState = {
  name: "",
  image: "",
  services: [],
};
const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);


  const updateHomepage = () => {
    return dispatch({
        type: "HOME_UPDATE",
        payload: {
        name: "AMAN MANGAL",
        image: "./images/i phone.jpeg",
      },
    });
  };
  const updateAboutPage = () => {
    return dispatch({
      type: "ABOUT_UPDATE",
      payload: {
        name: "aman agrwal",
        image: "./images/apple-iphone-13-pro.jpg",
      },
    });
  };

  // to get the api data

  const getServices = async(url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      dispatch({ type: "GET_SERVICES", payload: data });
    } catch (error) {
      console.log(error);
    }
  };

  // to call the api   automatticaly 
  useEffect(() => {
    getServices(API);
  }, []);

  return (
    <AppContext.Provider value={{ ...state, updateHomepage, updateAboutPage, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider, useGlobalContext };
