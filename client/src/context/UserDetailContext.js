import { createContext } from "react";

const UserDetailContext = createContext({
  userDetails: {
    token: null,
    bookings: [], // Add a default empty array here
  },
  setUserDetails: () => {},
});

export default UserDetailContext;
