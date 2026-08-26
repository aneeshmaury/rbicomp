import React from "react";

export default function App() {
  return (
    <div className="min-h-screen bg-[#f8f1d8] font-sans text-[#111111]">
      {/* Demo header */}
      <header className="bg-white">
        <div className="flex min-h-[200px] items-center justify-center px-6">
          <div className="text-center">
            <div className="mb-2 text-[38px] font-bold tracking-wide text-[#111111]">
              COMPLAINT PORTAL
            </div>

            <div className="text-[22px] font-medium text-[#555555]">
              Complaint Management System
            </div>

            <div className="mt-1 text-[20px] text-[#555555]">
              शिकायत प्रबंध प्रणाली
            </div>
          </div>
        </div>

        {/* Teal banner */}
        <div className="relative h-[205px] bg-[#11aaa2]">
          <div className="absolute right-[25px] top-[18px] text-right text-white">
            <div className="text-[27px] font-normal">
              Complaint Management System
            </div>

            <div className="mt-1 text-[23px]">
              शिकायत प्रबंध प्रणाली
            </div>
          </div>

          <div className="absolute right-[25px] top-[105px] flex gap-[5px]">
            <div className="flex h-[50px] w-[50px] items-center justify-center bg-white text-[28px] text-[#24516a]">
              A
            </div>

            <div className="flex h-[50px] w-[50px] items-center justify-center bg-white text-[28px] text-[#111111]">
              A
            </div>

            <div className="flex h-[50px] w-[50px] items-center justify-center bg-white text-[28px] text-[#111111]">
              A
            </div>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="mx-auto w-full max-w-[825px] px-[32px] py-[34px]">
        <div className="bg-white px-[40px] pb-[50px] pt-[40px]">

          {/* Section heading */}
          <div className="flex h-[92px] items-center justify-center bg-[#11aaa2]">
            <h1 className="text-center text-[45px] font-medium text-white">
              Complainant Details
            </h1>
          </div>

          {/* OTP status */}
          <div className="mt-[42px] text-[28px] font-normal text-[#c62828]">
            OTP is Successfully verified.
          </div>

          {/* Name */}
          <div className="mt-[48px]">
            <label className="block text-[31px] font-bold text-[#159e98]">
              <span className="text-[#c62828]">*</span>
              Name of the complainant
            </label>

            <input
              type="text"
              defaultValue="Sunit"
              className="mt-[4px] h-[72px] w-full border-b-[4px] border-[#999999] bg-[#eaf0fc] px-[2px] text-[29px] font-normal text-[#111111] outline-none"
            />
          </div>

          {/* Mobile */}
          <div className="mt-[82px]">
            <label className="block text-[31px] font-bold text-[#159e98]">
              <span className="text-[#c62828]">*</span>
              Mobile Number
            </label>

            <input
              type="text"
              defaultValue="XXXXXX6759"
              readOnly
              className="mt-[4px] h-[72px] w-full border-b-[4px] border-[#999999] bg-white px-[2px] text-[29px] font-normal text-[#111111] outline-none"
            />
          </div>

          {/* Email */}
          <div className="mt-[82px]">
            <label className="block text-[31px] font-bold text-[#159e98]">
              E-mail
            </label>

            <input
              type="email"
              className="mt-[4px] h-[72px] w-full border-b-[4px] border-[#999999] bg-white px-[2px] text-[29px] font-normal text-[#111111] outline-none"
            />
          </div>

          {/* Complaint category */}
          <div className="mt-[82px]">
            <label
              htmlFor="category"
              className="block text-[31px] font-bold text-[#159e98]"
            >
              <span className="text-[#c62828]">*</span>
              Complainant Category
            </label>

            <div className="relative">
              <select
                id="category"
                defaultValue=""
                className="mt-[4px] h-[72px] w-full appearance-none border-b-[4px] border-[#999999] bg-white px-[2px] text-[29px] font-normal text-[#111111] outline-none"
              >
                <option value="" disabled>
                  Select
                </option>

                <option value="individual">
                  Individual
                </option>

                <option value="business">
                  Business
                </option>

                <option value="company">
                  Company
                </option>

                <option value="other">
                  Other
                </option>
              </select>

              <div className="pointer-events-none absolute right-[10px] top-[27px]">
                <svg
                  width="28"
                  height="18"
                  viewBox="0 0 28 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3 3L14 14L25 3"
                    stroke="#888888"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* State */}
          <div className="mt-[82px]">
            <label
              htmlFor="state"
              className="block text-[31px] font-bold text-[#159e98]"
            >
              <span className="text-[#c62828]">*</span>
              Complainant’s State of residence
            </label>

            <div className="relative">
              <select
                id="state"
                defaultValue=""
                className="mt-[4px] h-[72px] w-full appearance-none border-b-[4px] border-[#999999] bg-white px-[2px] text-[29px] font-normal text-[#111111] outline-none"
              >
                <option value="" disabled>
                  Select
                </option>

                <option value="andhra-pradesh">
                  Andhra Pradesh
                </option>

                <option value="bihar">
                  Bihar
                </option>

                <option value="delhi">
                  Delhi
                </option>

                <option value="gujarat">
                  Gujarat
                </option>

                <option value="haryana">
                  Haryana
                </option>

                <option value="karnataka">
                  Karnataka
                </option>

                <option value="kerala">
                  Kerala
                </option>

                <option value="madhya-pradesh">
                  Madhya Pradesh
                </option>

                <option value="maharashtra">
                  Maharashtra
                </option>

                <option value="odisha">
                  Odisha
                </option>

                <option value="rajasthan">
                  Rajasthan
                </option>

                <option value="tamil-nadu">
                  Tamil Nadu
                </option>

                <option value="telangana">
                  Telangana
                </option>

                <option value="uttar-pradesh">
                  Uttar Pradesh
                </option>

                <option value="west-bengal">
                  West Bengal
                </option>
              </select>

              <div className="pointer-events-none absolute right-[10px] top-[27px]">
                <svg
                  width="28"
                  height="18"
                  viewBox="0 0 28 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3 3L14 14L25 3"
                    stroke="#888888"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}