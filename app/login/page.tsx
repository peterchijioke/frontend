import LoginForm from "../_components/(login)/LoginForm";
import NavBar from "../_components/Navbar";

export default function LoginPage() {
  return (
    <div>
      <NavBar />
      <main className=" pt-20">
        <div className=" flex justify-center">
          <span className=" text-xl font-semibold">Login</span>
        </div>
        <LoginForm />
      </main>
    </div>
  );
}
