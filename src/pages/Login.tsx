const Login = () => {
  return (
    <div className="flex flex-col bg-[#0A0A0A] mx-auto w-svw max-w-[420px] min-h-svh p-2 gap-1">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl text-white">Log In</h1>
        <p className="text-sm text-gray-400">
          Welcome back! Please log in to your account.
        </p>
      </div>

      <form className="flex flex-col gap-4">
        <input
          type="email"
          placeholder="Email"
          className="border border-gray-600 bg-transparent p-2 rounded-md"
        />
        <input
          type="password"
          placeholder="Password"
          className="border border-gray-600 bg-transparent p-2 rounded-md"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition duration-200"
        >
          Log In
        </button>
      </form>

      <p className="text-sm text-gray-400">
        Don't have an account?{" "}
        <a href="/signup" className="text-blue-500 hover:underline">
          Sign Up
        </a>
      </p>
    </div>
  );
};

export default Login;
