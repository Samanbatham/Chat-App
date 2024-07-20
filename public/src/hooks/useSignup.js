import { useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext.jsx";

const useSignup = () => {
  const [loading, setLoading] = useState(false);
  const { setAuthUser } = useAuthContext();

  const signup = async ({
    fullName,
    username,
    password,
    confirmpassword,
    gender,
  }) => {
    const success = handleInputError({
      fullName,
      username,
      password,
      confirmpassword,
      gender,
    });
    if (!success) return;

    setLoading(true);
    try {
      const res = await fetch("/api/auth/signup", {
        method: "Post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName,
          username,
          password,
          confirmpassword,
          gender,
        }),
      });

      const data = await res.json();
      if (data.error) {
        throw new Error(data.error);
      }

      //localstorage
      localStorage.setItem("chat-user", JSON.stringify(data));
      //context
      setAuthUser(data);
      toast.success("User Successfully created!");
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };
  return { loading, signup };
};

export default useSignup;

function handleInputError({
  fullName,
  username,
  password,
  confirmpassword,
  gender,
}) {
  if (!fullName || !username || !password || !confirmpassword || !gender) {
    toast.error("Please fill all the field!!");
    return false;
  }
  if (password !== confirmpassword) {
    toast.error("Password do not match!!");
    return false;
  }
  if (password.length < 6) {
    toast.error("Password must me at least 6 characters");
    return false;
  }
  return true;
}
