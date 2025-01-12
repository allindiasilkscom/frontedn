
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Oauth from "../components/OAuth";


const SignUp = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({});
  const navigate = useNavigate();
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();

      if (data.success == false) {
        setLoading(false);
        setError(data.message);
        return;
      }
      setLoading(false);
      setError(null);
      navigate("/sign-in")
    } catch (error) {
      setLoading(false);
      setError(error.message);
    }
  };

  return (
    <div className="p-3 max-w-lg mx-auto">
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <h1 className="text-3xl items-center font font-semibold my-7">
          Sign Up
        </h1>
        <input
          type="text"
          placeholder="Please Enter the username"
          className="border p-3 rounded-lg"
          id="username"
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Please Enter the Email"
          className="border p-3 rounded-lg"
          id="email"
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="Please Enter the Password"
          className="border p-3 rounded-lg"
          id="password"
          onChange={handleChange}
        />
        <button className="bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-65">
          {loading ? "Loading...":"Register"}
        </button>
        <Oauth/>
      </form>

      <div className="flex gap-2 mt-2">
        <p>Have an Account ? </p>
        <Link to={"/sign-in"}> <span className="text-blue-700">Sign In</span></Link>
       
      </div>
      {error&& <p className="text-red-500 m">{error}</p>}
    </div>
  );
};

export default SignUp;
