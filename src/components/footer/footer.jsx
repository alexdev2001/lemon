import Image from "next/image";
import footLogo from "../../../public/images/lemon_foot.png";
import Router from "next/router";
import { useRouter } from "next/navigation";

export default function Footer() {
  const router = useRouter();
  const navigateToSection = (section) => {
    router.push({
      pathname: "services",
      query: { section },
    });
  };

  return (
    <footer className="relative footer bg-base-200 text-base-content p-8 h-[300px] font-custom  justify-between custom-footer">
      <aside className="custom-foot-image">
        <Image width={190} height={190} viewBox="0 0 24 24" src={footLogo} />
      </aside>
      <nav>
        <h6 className="footer-title custom-font-head">Services</h6>
        <a className="link link-hover custom-font-foot" onClick={() => router.push("/services")}>Personal</a>
        <a className="link link-hover custom-font-foot" onClick={() => navigateToSection("guard")}>Guarding</a>
        <a className="link link-hover custom-font-foot" onClick={() => navigateToSection("cctv")}>CCTV</a>
        <a className="link link-hover custom-font-foot" onClick={() => navigateToSection("verify")}>Verify</a>
        <a className="link link-hover custom-font-foot" onClick={() => navigateToSection("cyber")}>Cyber</a>
      </nav>
      <nav>
        <h6 className="footer-title custom-font-head">Company</h6>
        <a className="link link-hover custom-font-foot" onClick={() => router.push("/")}>Home</a>
        <a className="link link-hover custom-font-foot" onClick={() => router.push("/about")}>About us</a>
        <a className="link link-hover custom-font-foot" onClick={() => router.push("/contact")}>Contact</a>
      </nav>
      <nav>
        <h6 className="footer-title">Social</h6>
        <div className="grid grid-flow-col gap-9 pr-8">
          <a href="https://">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M9.5,6.8l5.8-6.2h-1.4l-5,5.4l-4-5.4H0l6.2,8.2L0,15.5h1.4l5.4-5.9l4.4,5.9H16L9.5,6.8z M2.1,1.6h2.2l9.7,12.9h-2.2L2.1,1.6z" />
            </svg>
          </a>
          <a href="https://">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 32 32"
              className="fill-current"
            >
              <path d="M16.04 0c-8.84 0-16 7.16-16 15.98 0 2.82.74 5.57 2.16 8.02l-2.28 8.04 8.26-2.16c2.36 1.3 5.02 2 7.86 2 8.84 0 16-7.16 16-16 0-8.82-7.16-15.98-16-15.98zm7.58 22.82c-.3.86-1.48 1.6-2.5 1.82-.64.12-1.48.22-4.28-.9-3.58-1.44-5.9-4.98-6.08-5.2-.18-.26-1.46-1.94-1.46-3.7 0-1.78.92-2.64 1.24-3 .3-.38.66-.48.88-.48.22 0 .44 0 .64.02.2.02.5-.08.78.6.3.7 1.02 2.46 1.12 2.64.1.18.16.4.02.64-.12.26-.18.4-.36.62-.18.2-.38.48-.56.64-.2.18-.42.38-.18.74.26.48 1.16 1.96 2.5 2.88 1.72 1.14 2.36 1.24 2.74 1.38.38.14.6.12.84-.12.26-.26 1-1.12 1.28-1.5.28-.38.56-.3.9-.18.34.12 2.14 1.02 2.52 1.2.38.18.64.28.74.44.1.16.1.9-.2 1.76z" />
            </svg>
          </a>
          <a href="https://">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current"
            >
              <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
            </svg>
          </a>
         
        </div>
      </nav>
      <br/>
      <div className="text-center absolute bottom-2 left-1/2 transform -translate-x-1/2">
        <p> &copy; 2024 Ace Holdings</p>
      </div>
    </footer>
  );
}
