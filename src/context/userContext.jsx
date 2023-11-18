import React, { useContext, useState, createContext } from "react";
import { View, Text, Button } from "react-native";

export const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
  const initialContextValue = {
    loggedInUserId: "",
    setLoggedInUserId: (userId) => {},
  };

  const [contextValue, setContextValue] = useState(initialContextValue);

  const updateLoggedInuser = (userId) => {
    setContextValue((prevContext) => {
      return {
        ...prevContext,
        loggedInUserId: userId,
      };
    });
  };

  return (
    <UserContext.Provider value={{ ...contextValue, updateLoggedInuser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
