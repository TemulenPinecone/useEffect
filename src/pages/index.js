import { useState, useEffect } from "react";

export default function Home() {
  const [userName, setUserName] = useState("");
  const [userThumb, setUserThumb] = useState("");

  useEffect(() => {
    async function getData() {
      const response = await fetch("https://randomuser.me/api/");
      const data = await response.json();
      console.log(`data`, data);
      setUserName(data.results[0].name.first);
      setUserThumb(data.results[0].picture.large);
      console.log(`data`, data);
    }
    getData();
  }, []);

  return (
    <div className="flex">
      <div>
        <p>First name : {userName}</p>
        <p>Age : {userName}</p>
        <p>Date of Birth : {userName}</p>
        <p>Location : {userName}</p>
        <p>ID : {userName}</p>
        <p>Gender : {userName}</p>
        <p>Cellphone : {userName}</p>
        <p>Registered : {userName}</p>
      </div>
      <div>
        <img src={userThumb}></img>
      </div>
    </div>
  );
}
