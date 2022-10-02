import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

const UserContext = createContext();

export const StateUserContext = ({ children }) => {
  const [user, setuser] = useState([]);
  const [id, setid] = useState(`63351641f87b88d5376adef6`);
  const [Singlebook, setSinglebook] = useState({
    title: "",
    img: "",
  });
  useEffect(() => {});

  return (
    <UserContext.Provider
      value={{ user, setuser, Singlebook, setSinglebook, id, setid }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const GlobalUserContext = () => useContext(UserContext);
