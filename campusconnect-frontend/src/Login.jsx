import "./Login.css";

function Login() {
  return (
    <div className="login-page">

      <div className="login-box">

        <h1>CampusConnect</h1>

        <p>Welcome Back!</p>

        <input
          type="email"
          placeholder="Enter your email"
        />

        <input
          type="password"
          placeholder="Enter your password"
        />

        <select>
          <option>Student</option>
          <option>Teacher</option>
          <option>Admin</option>
        </select>

        <button>Login</button>

      </div>

    </div>
  );
}

export default Login;