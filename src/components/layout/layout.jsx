import Logonav from "../logo/logo-navbar";
import { useRouter } from "next/router";

export default function Layout({ children }) {
  const router = useRouter();
  const navigateToSection = (section) => {
    router.push({
      pathname: "services",
      query: { section },
    });
  };

  return (
    <>
      <div className="navbar text-black layout-container relative z-20">
        <div className="flex-1">
          <a className="btn btn-ghost" onClick={() => router.push("/")}>
            <Logonav />
          </a>
        </div>
        <div className="flex-none text-xs">
          <ul className="menu menu-horizontal px-1 ">
            <li>
              <details className="font-custom font-extrabold text-blue-900 text-base navbar-font">
                <summary
                  className="cursor-pointer"
                  onDoubleClick={() => router.push("/services")}
                >
                  Services
                </summary>
                <ul className="bg-[#F8F0E3] z-50">
                  <li>
                    <a onClick={() => router.push("/services")}>
                      Personal safety
                    </a>
                  </li>
                  <li>
                    <a onClick={() => navigateToSection("guard")}>Guarding</a>
                  </li>
                  <li>
                    <a onClick={() => navigateToSection("cctv")}>CCTV</a>
                  </li>
                  <li>
                    <a onClick={() => navigateToSection("verify")}>Verify</a>
                  </li>
                  <li>
                    <a onClick={() => navigateToSection("cyber")}>Cyber</a>
                  </li>
                </ul>
              </details>
            </li>
            <li className="font-extrabold text-blue-900 navbar-font">
              <a className="font-custom" onClick={() => router.push("/about")}>
                About
              </a>
            </li>
            <li className="font-extrabold text-blue-900 navbar-font">
              <a
                className="font-custom"
                onClick={() => router.push("/contact")}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
