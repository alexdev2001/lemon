export default function Accordion() {
  return (
    <div className="shadow-black custom-accordion-width">
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css"
        integrity="sha512-SnH5WK+bZxgPHs44uWIX+LLJAJ9/2PkPKZ5QiAj6Ta86w+fsb2TkcmfRyVX3pBnMFcV7oQPJkl9QevSCWr3W6A=="
        crossorigin="anonymous"
        referrerPolicy="no-referrer"
      />
      <div
        className="collapse collapse-arrow bg-[rgba(94,123,22,0.8)]

        "
      >
        <input type="radio" name="my-accordion-2" defaultChecked />
        <div className="collapse-title text-xl  text-blue-900 font-semibold custom-font-head-accordion">
          Armed reaction___{" "}
          <i class="fa-duotone fa-solid fa-gun fa-lg font-semibold"></i>
        </div>
        <div className="collapse-content">
          <p className="text-left custom-font-body-accordion text-blue-900">
            Lemon Secure Solutions operates a fleet of reaction vehicles serving
            residential and commercial areas. We specialize in alarm monitoring,
            area initiatives, and public space protection. Our armed officers
            receive rigorous training and are equipped with bulletproof vests,
            handcuffs, torches, and 9mm firearms.
          </p>
        </div>
      </div>
      <div
        className="collapse collapse-arrow bg-[rgba(114,145,32,0.8)]

        "
      >
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-semibold custom-font-head-accordion text-blue-900">
          Guarding___{" "}
          <i class="fa-duotone fa-solid fa-shield fa-lg font-semibold"></i>
        </div>
        <div className="collapse-content custom-font-body-accordion">
          <p className="text-left text-blue-900">
            Lemon Secure Solutions provides expert physical guarding services,
            with armed and unarmed officers for commercial, residential, retail,
            and educational sectors. We deploy well-trained Grade C security
            personnel to blue-chip clients, unless otherwise specified.
          </p>
        </div>
      </div>
      <div
        className="collapse collapse-arrow bg-[rgba(134,164,44,0.8)]
        "
      >
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-semibold custom-font-head-accordion text-blue-900">
          Technical Services___{" "}
          <i class="fa-duotone fa-solid fa-video fa-lg font-semibold"></i>
        </div>
        <div className="collapse-content">
          <p className="text-left custom-font-body-accordion text-blue-900">
            Lemon Secure Solutions offers customized technical installations and
            24/7 support through our maintenance contracts.
          </p>
        </div>
      </div>
      <div
        className="collapse collapse-arrow bg-[rgba(174,192,63,0.8)]
        "
      >
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-semibold custom-font-head-accordion text-blue-900">
          Risk Assesment___ <i class="fa-solid fa-dice fa-lg font-semibold"></i>
        </div>
        <div className="collapse-content">
          <p className="text-left custom-font-body-accordion text-blue-900">
            Lemon Secure Solutions offers on-site risk assessments by trained
            professionals who evaluate your security measures and identify
            potential risks.
          </p>
        </div>
      </div>
      <div
        className="collapse collapse-arrow bg-[rgba(194,211,85,0.8)]
        "
      >
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-semibold custom-font-head-accordion text-blue-900">
          Close Protection___{" "}
          <i class="fa-duotone fa-solid fa-user-shield fa-lg font-semibold"></i>
        </div>
        <div className="collapse-content custom-font-body-accordion">
          <p className="text-left text-blue-800">
            Lemon Secure Solutions' Close Protection Officers (CPOs) are highly
            trained experts in safeguarding executives, dignitaries,
            celebrities, and individuals requiring personal protection.
          </p>
        </div>
      </div>
      <div
        className="collapse collapse-arrow bg-[rgba(214,231,106,0.8)]
        "
      >
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-semibold custom-font-head-accordion text-blue-900">
          Online Intelligence___{" "}
          <i class="fa-duotone fa-solid fa-globe fa-lg font-semibold"></i>
        </div>
        <div className="collapse-content">
          <p className="text-left custom-font-body-accordion text-blue-900">
            Lemon Secure Solutions offers online intelligence through Track
            Force, a comprehensive GIS that monitors urban infrastructure and
            analyzes trends. We also provide pentesting and network security
            solutions for clients' IT systems.
          </p>
        </div>
      </div>
    </div>
  );
}
