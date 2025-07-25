import { SignInButton } from "@clerk/nextjs";

function LoginButton() {
  return (
    <SignInButton mode="modal">
      <button className="bg-gradient-to-r md:text-sm text-xs md:w-28 w-20 from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white font-bold py-1 px-0 md:px-6 rounded-full shadow-lg transform transition-all duration-500 ease-in-out hover:scale-110 hover:brightness-110 hover:animate-pulse active:animate-bounce">
        <span>Sign In</span>
      </button>
    </SignInButton>
  );
}
export default LoginButton;
