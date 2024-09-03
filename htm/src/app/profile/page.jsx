"use client";
import { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { app } from "../../../context/firebaseConfig";
import axios from "axios";
import Button from "@mui/material/Button";

const auth = getAuth(app);
export default function ProfilePage() {
  let [user, setUser] = useState(false);
  console.log(user);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        // ...
        setUser(user);
      } else {
        setUser(false);
      }
    });
  });
  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log("sdgdf" + user);
        const result = await axios.post("/api/user", { email: user.email });
        // Handle the result here if needed
      } catch (error) {
        console.error("Error posting data:", error);
      }
    };

    fetchData();
  }, [user]);

  return (
    <>
      <div className="flex h-screen">
        <div
          id="profile-info "
          className=" max-w-96 minw-96 box-border pt-6 bg-slate rounded-2xl mt-24 bg-slate-900 ml-5"
        >
          <div id="user-info " className="flex items-center gap-x-4">
            <div>
              <img src={user.photoURL} className="ml-7 rounded-3xl"></img>
            </div>
            <div>
              <h1 className="text-white text-lg">{user.displayName}</h1>
            </div>
          </div>
          <h1 className="ml-7  mt-5">
            user about Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Aliquam enim eum repellat libero dolor, ratione placeat quasi, minus
            id distinctio, alias reprehenderit corrupti. Aliquam possimus
            doloribus iusto ut architecto in.
            <br />
            <Button className="w-1 ml-36 ">Contained</Button>
          </h1>
        </div>
        <div
          id="q-Data "
          className=" w-screen  box-border pt-6 bg-slate rounded-2xl mt-24 bg-slate-900 ml-5 mr-5"
        >
          <h1 className="text-center text-4xl mt-24">
            Total number of question attempted <br></br>
            {}
          </h1>
          <h1 className="text-center text-4xl mt-24">
            Total number of Right question {}
          </h1>
          <h1 className="text-center text-4xl mt-24">
            Total number of Wrong attempted:{}
          </h1>
        </div>
      </div>
    </>
  );
}
