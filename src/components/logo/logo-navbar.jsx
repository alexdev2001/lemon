import Image from "next/image"
import logoNav from '../../../public/images/lemon-navbar.png'


export default function Logonav() {
    return(
        <>
            <div>
                <Image src={logoNav} alt="Logo" width={100} height={10}/>
            </div>
        </>
    );
}