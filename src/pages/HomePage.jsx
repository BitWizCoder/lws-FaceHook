import React from "react";
import useAuth from "../hooks/useAuth";
import { Link } from "react-router";

export default function HomePage() {
  const { auth } = useAuth();
  console.log(auth);

  return (
    <div>
      <p>Home Page</p>

      <Link to={"/me"}>Go to Profile Page</Link>
    </div>
  );
}
