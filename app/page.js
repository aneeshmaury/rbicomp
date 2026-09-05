'use client';

import React, { useState } from "react";


export default function App() {
  const [showThankYou, setShowThankYou] = useState(false);
  const [name, setName] = useState("");
  
const [entityName, setEntityName] = useState("");

const [entityDisplayName, setEntityDisplayName] = useState("");



  if (showThankYou) {
    return (
      <div className="min-h-screen bg-[#f8f1d8] font-sans text-[#444444]">

        {/* Thank You Page */}
        <div className="min-h-screen px-4 py-7 flex justify-center">
          <div className="w-full max-w-[825px] bg-[#f5f5f5] px-[40px] py-[48px]">

            {/* Heading */}
            <h1 className="text-center text-[#356aa5] text-[25px] font-semibold mb-[34px]">
              Thank You!
            </h1>

            {/* Dear */}
           <div className="text-[15px] leading-[1.65] mb-[25px]">
  Dear{" "}
  <span className="font-bold">
    {name || "Demo User"}
  </span>
</div>
            {/* Point 1 */}
            <div className="text-[15px] leading-[1.62] mb-[26px]">
              <span className="font-normal">1. </span>
              Please refer to your representation alleging deficiency in
              service on the part of{" "}
              <span className="font-bold uppercase">
  {entityDisplayName || "Demo Entity"}
</span>
            </div>

            {/* Point 2 */}
            <div className="text-[15px] leading-[1.62] mb-[27px]">
              <span>2. </span>
              As you have indicated{" "}
              <span className="font-bold">“No”</span> in response to the
              query –{" "}
              <span className="font-bold">
                “Have you filed a written/electronic complaint with the
                Regulated Entity?”
              </span>{" "}
              in terms of clause 10(1)(e) of Reserve Bank – Integrated
              Ombudsman Scheme, 2026, as the Complainant is required to
              first make a complaint in writing or through any other mode
              to the Regulated Entity concerned, before making a complaint
              under the Scheme; this representation alleging deficiency in
              service on the part of{" "}
             <span className="font-bold uppercase">
  {entityDisplayName || "Demo Entity"}
</span>{" "}
              cannot be processed under the Scheme.
            </div>

            {/* Point 3 */}
            <div className="text-[15px] leading-[1.62] mb-[62px]">
              <span>3. </span>
              Accordingly, we regret to inform you that your present
              grievance against{" "}
              <span className="font-bold uppercase">
                {entityDisplayName || "Demo Entity"}
              </span>{" "}
              cannot be registered under the Scheme. In case the response
              was furnished erroneously, you may submit a fresh complaint.
            </div>

            {/* Download PDF */}
            <div className="flex justify-center mb-[66px]">
              <button
                type="button"
                className="text-[#11aaa2] text-[17px] font-semibold hover:underline cursor-pointer"
              >
                Download PDF
              </button>
            </div>

            {/* Regards */}
            <div className="text-[15px] leading-[1.65]">
              <div>Regards,</div>
              <div className="font-normal">
                RBI CMS Team
              </div>
            </div>

          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f8f1d8] font-sans text-[#111111]">

      {/* Header */}
      <header className="bg-white">

        <div className="flex mb-15 py-3 items-center justify-center px-2">
          <div className="flex w-full max-w-[700px] items-center gap-[10px]">

            {/* Left image */}
            <div className="flex-shrink-0">
              <img
                src="https://i.ibb.co/G3cbztWd/Chat-GPT-Image-Aug-26-2026-07-30-32-AM.png"
                alt="Demo emblem"
                className="h-[80px] w-[115px] object-contain"
              />
            </div>

            {/* Right side text */}
            <div className="text-left">

              <div className="text-[20px] underline font-bold tracking-wide text-[#111111]">
                शिकायत प्रबंध प्रणाली
              </div>

              <div className="mt-[5px] text-[20px] underline font-bold tracking-wide text-[#111111]">
                RESERVE BANK OF INDIA
              </div>

            </div>

          </div>
        </div>

        {/* Teal banner */}
        <div className="relative mt-[-65px] h-[100px] bg-[#11aaa2]">

          <div className="absolute right-[25px] top-[1px] text-right text-white">

            <div className="text-[13px] font-normal">
              Complaint Management System
            </div>

            <div className="mt-1 text-[13px]">
              शिकायत प्रबंध प्रणाली
            </div>

          </div>

          {/* Font buttons */}
          <div className="absolute right-[25px] top-[50px] flex gap-[5px]">

            <div className="flex h-[25px] w-[25px] items-center justify-center bg-white text-[15px] text-[#24516a]">
              A
            </div>

            <div className="flex h-[25px] w-[25px] items-center justify-center bg-white text-[20px] text-[#111111]">
              A
            </div>

            <div className="flex h-[25px] w-[25px] items-center justify-center bg-white text-[25px] text-[#111111]">
              A
            </div>

          </div>

        </div>

      </header>

      {/* Main content */}
      <main className="mx-auto w-full max-w-[825px] px-3 py-5">

        <div className="bg-white px-[40px] pb-[50px] pt-[40px]">

          {/* Section heading */}
      <div className="mx-auto flex h-[40px] w-[300px] items-center justify-center bg-[#11aaa2]">

  <h1 className="text-center text-[22px] font-medium text-white">
    Complainant Details
  </h1>

</div>

          {/* OTP status */}
          <div className="mt-[19px] text-[15px] font-normal text-[#c62828]">
            OTP is Successfully verified.
          </div>

          {/* Name */}
          <div className="mt-[19px]">

            <label className="block text-[18px] font-bold text-[#159e98]">
              <span className="text-[#c62828]">*</span>
              Name of the complainant
            </label>

          <input
  type="text"
  value={name}
  onChange={(e) => setName(e.target.value)}
  className="mt-[1px] h-[30px] w-full border-b-[2px] border-[#999999] px-[2px] text-[20px] font-normal text-[#111111] outline-none"
/>

          </div>

          {/* Mobile */}
          <div className="mt-[19px]">

            <label className="block text-[18px] font-bold text-[#159e98]">
              <span className="text-[#c62828]">* </span>
              Mobile Number
            </label>

            <input
              type="text"
              defaultValue=""
              className="mt-[1px] h-[30px] w-full border-b-[2px] border-[#999999] px-[2px] text-[20px] font-normal text-[#111111] outline-none"
            />

          </div>

          {/* Email */}
          <div className="mt-[19px]">

            <label className="block text-[18px] font-bold text-[#159e98]">
              E-mail
            </label>

            <input
              type="email"
              className="mt-[1px] h-[30px] w-full border-b-[2px] border-[#999999] bg-white px-[2px] text-[20px] font-normal text-[#111111] outline-none"
            />

          </div>

          {/* Complaint Category */}
          <div className="mt-[19px]">

            <label
              htmlFor="category"
              className="block text-[18px] font-bold text-[#159e98]"
            >
              <span className="text-[#c62828]">*</span>
              Complainant Category
            </label>

            <div className="relative">

              <select
                id="category"
                defaultValue=""
                className="mt-[1px] h-[30px] w-full appearance-none border-b-[2px] border-[#999999] bg-white px-[2px] text-[20px] font-normal text-[#111111] outline-none"
              >

                <option value="" disabled>
                  Select
                </option>

                <option value="individual">
                  Individual - Business
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

              <div className="pointer-events-none absolute right-[10px] top-[6px]">

                <svg
                  width="20"
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
          <div className="mt-[19px]">

            <label
              htmlFor="state"
              className="block text-[18px] font-bold text-[#159e98]"
            >
              <span className="text-[#c62828]">*</span>
              Complainant’s State of residence
            </label>

            <div className="relative">

              <select
                id="state"
                defaultValue=""
                className="mt-[1px] h-[30px] w-full appearance-none border-b-[2px] border-[#999999] bg-white px-[2px] text-[20px] font-normal text-[#111111] outline-none"
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

              <div className="pointer-events-none absolute right-[10px] top-[6px]">

               

              </div>

            </div>

          </div>

<div className="mt-[19px]">

            <label
              htmlFor="category"
              className="block text-[18px] font-bold text-[#159e98]"
            >
              <span className="text-[#c62828]">*</span>
              Complainant's Distinct of residence
            </label>

            <div className="relative">

              <select
                id="category"
                defaultValue=""
                className="mt-[1px] h-[30px] w-full appearance-none border-b-[2px] border-[#999999] bg-white px-[2px] text-[20px] font-normal text-[#111111] outline-none"
              >

                <option value="" disabled>
                  Select
                </option>

                <option value="individual">
                  Individual - Business
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

              <div className="pointer-events-none absolute right-[10px] top-[6px]">

            

              </div>

            </div>

          </div>



          {/* Bank Name */}
          <div className="mt-[19px]">

            <label
              htmlFor="bankName"
              className="block text-[18px] font-bold text-[#159e98]"
            >
              <span className="text-[#c62828]">*</span>
              Entity Name 
            </label>

            <div className="relative">

              <select
  id="bankName"
  value={entityName}
  onChange={(e) => {
    setEntityName(e.target.value);
    setEntityDisplayName(
      e.target.options[e.target.selectedIndex].text
    );
  }}
  className="mt-[1px] h-[30px] w-full appearance-none border-b-[2px] border-[#999999] bg-white px-[2px] text-[20px] font-normal text-[#111111] outline-none"
>

                <option value="" disabled>
                  Select Bank
                </option>

                {/* Public Sector Banks */}
                <option value="state-bank-of-india">
                  State Bank of India
                </option>

                <option value="bank-of-baroda">
                  Bank of Baroda
                </option>

                <option value="bank-of-india">
                  Bank of India
                </option>

                <option value="bank-of-maharashtra">
                  Bank of Maharashtra
                </option>

                <option value="canara-bank">
                  Canara Bank
                </option>

                <option value="central-bank-of-india">
                  Central Bank of India
                </option>

                <option value="indian-bank">
                  Indian Bank
                </option>

                <option value="indian-overseas-bank">
                  Indian Overseas Bank
                </option>

                <option value="punjab-and-sind-bank">
                  Punjab &amp; Sind Bank
                </option>

                <option value="punjab-national-bank">
                  Punjab National Bank
                </option>

                <option value="uco-bank">
                  UCO Bank
                </option>

                <option value="union-bank-of-india">
                  Union Bank of India
                </option>

                {/* Private Sector Banks */}
                <option value="axis-bank-limited">
                  Axis Bank Limited
                </option>

                <option value="bandhan-bank-limited">
                  Bandhan Bank Limited
                </option>

                <option value="csb-bank-limited">
                  CSB Bank Limited
                </option>

                <option value="city-union-bank-limited">
                  City Union Bank Limited
                </option>

                <option value="dcb-bank-limited">
                  DCB Bank Limited
                </option>

                <option value="dhanlaxmi-bank-limited">
                  Dhanlaxmi Bank Limited
                </option>

                <option value="federal-bank-limited">
                  Federal Bank Limited
                </option>

                <option value="hdfc-bank-limited">
                  HDFC Bank Limited
                </option>

                <option value="icici-bank-limited">
                  ICICI Bank Limited
                </option>

                <option value="indusind-bank-limited">
                  IndusInd Bank Limited
                </option>

                <option value="idfc-first-bank-limited">
                  IDFC FIRST Bank Limited
                </option>

                <option value="jammu-and-kashmir-bank-limited">
                  Jammu &amp; Kashmir Bank Limited
                </option>

                <option value="karnataka-bank-limited">
                  Karnataka Bank Limited
                </option>

                <option value="karur-vysya-bank-limited">
                  Karur Vysya Bank Limited
                </option>

                <option value="kotak-mahindra-bank-limited">
                  Kotak Mahindra Bank Limited
                </option>

                <option value="nainital-bank-limited">
                  Nainital Bank Limited
                </option>

                <option value="rbl-bank-limited">
                  RBL Bank Limited
                </option>

                <option value="south-indian-bank-limited">
                  South Indian Bank Limited
                </option>

                <option value="tamilnad-mercantile-bank-limited">
                  Tamilnad Mercantile Bank Limited
                </option>

                <option value="yes-bank-limited">
                  YES Bank Limited
                </option>
                {/* Payments Banks */}

<option value="jio-payment-bank">
  Jio Payment Bank
</option>

<option value="airtel-payment-bank">
  Airtel Payment Bank
</option>

<option value="india-post-payments-bank-limited">
  India Post Payments Bank Limited
</option>

<option value="fino-payments-bank-limited">
  Fino Payments Bank Limited
</option>

                <option value="idbi-bank-limited">
                  IDBI Bank Limited
                </option>

                {/* Small Finance Banks */}
                <option value="au-small-finance-bank-limited">
                  Au Small Finance Bank Limited
                </option>

                <option value="capital-small-finance-bank-limited">
                  Capital Small Finance Bank Limited
                </option>

                <option value="equitas-small-finance-bank-limited">
                  Equitas Small Finance Bank Limited
                </option>

                <option value="esaf-small-finance-bank-limited">
                  ESAF Small Finance Bank Limited
                </option>

                <option value="suryoday-small-finance-bank-limited">
                  Suryoday Small Finance Bank Limited
                </option>

                <option value="ujjivan-small-finance-bank-limited">
                  Ujjivan Small Finance Bank Limited
                </option>

                <option value="utkarsh-small-finance-bank-limited">
                  Utkarsh Small Finance Bank Limited
                </option>

                <option value="slice-small-finance-bank-limited">
                  slice Small Finance Bank Limited
                </option>

                <option value="jana-small-finance-bank-limited">
                  Jana Small finance Bank Limited
                </option>

                <option value="shivalik-small-finance-bank-limited">
                  Shivalik Small Finance Bank Limited
                </option>

                <option value="unity-small-finance-bank-limited">
                  Unity Small Finance Bank Limited
                </option>

                {/* Payments Banks */}
                <option value="india-post-payments-bank-limited">
                  India Post Payments Bank Limited
                </option>

                <option value="fino-payments-bank-limited">
                  Fino Payments Bank Limited
                </option>

                <option value="paytm-payments-bank-limited">
                  Paytm Payments Bank Limited
                </option>

                <option value="airtel-payments-bank-limited">
                  Airtel Payments Bank Limited
                </option>

                <option value="nsdl-payments-bank-limited">
                  NSDL Payments Bank Limited
                </option>

                {/* Regional Rural Banks */}
                <option value="andhra-pradesh-grameena-bank">
                  Andhra Pradesh Grameena Bank
                </option>

                <option value="assam-gramin-bank">
                  Assam Gramin Bank
                </option>

                <option value="arunachal-pradesh-rural-bank">
                  Arunachal Pradesh Rural Bank
                </option>

                <option value="bihar-gramin-bank">
                  Bihar Gramin Bank
                </option>

                <option value="chhattisgarh-gramin-bank">
                  Chhattisgarh Gramin Bank
                </option>

                <option value="gujarat-gramin-bank">
                  Gujarat Gramin Bank
                </option>

                <option value="haryana-gramin-bank">
                  Haryana Gramin Bank
                </option>

                <option value="himachal-pradesh-gramin-bank">
                  Himachal Pradesh Gramin Bank
                </option>

                <option value="jharkhand-gramin-bank">
                  Jharkhand Gramin Bank
                </option>

                <option value="jammu-and-kashmir-grameen-bank">
                  Jammu and Kashmir Grameen Bank
                </option>

                <option value="karnataka-grameena-bank">
                  Karnataka Grameena Bank
                </option>

                <option value="kerala-grameena-bank">
                  Kerala Grameena Bank
                </option>

                <option value="maharashtra-gramin-bank">
                  Maharashtra Gramin Bank
                </option>

                <option value="madhya-pradesh-gramin-bank">
                  Madhya Pradesh Gramin Bank
                </option>

                <option value="manipur-rural-bank">
                  Manipur Rural Bank
                </option>

                <option value="meghalaya-rural-bank">
                  Meghalaya Rural Bank
                </option>

                <option value="mizoram-rural-bank">
                  Mizoram Rural Bank
                </option>

                <option value="nagaland-rural-bank">
                  Nagaland Rural Bank
                </option>

                <option value="odisha-grameen-bank">
                  Odisha Grameen Bank
                </option>

                <option value="punjab-gramin-bank">
                  Punjab Gramin Bank
                </option>

                <option value="puducherry-grama-bank">
                  Puducherry Grama Bank
                </option>

                <option value="rajasthan-gramin-bank">
                  Rajasthan Gramin Bank
                </option>

                <option value="tamil-nadu-grama-bank">
                  Tamil Nadu Grama Bank
                </option>

                <option value="telangana-grameena-bank">
                  Telangana Grameena Bank
                </option>

                <option value="tripura-gramin-bank">
                  Tripura Gramin Bank
                </option>

                <option value="uttar-pradesh-gramin-bank">
                  Uttar Pradesh Gramin Bank
                </option>

                <option value="uttarakhand-gramin-bank">
                  Uttarakhand Gramin Bank
                </option>

                <option value="west-bengal-gramin-bank">
                  West Bengal Gramin Bank
                </option>

                {/* Foreign Banks */}
                <option value="ab-bank-plc">
                  AB Bank PLC
                </option>

                <option value="american-express-banking-corporation">
                  American Express Banking Corporation
                </option>

                <option value="australia-and-new-zealand-banking-group-ltd">
                  Australia and New Zealand Banking Group Ltd.
                </option>

                <option value="barclays-bank-plc">
                  Barclays Bank Plc.
                </option>

                <option value="bank-of-america-national-association">
                  Bank of America National Association
                </option>

                <option value="bank-of-bahrain-and-kuwait-bsc">
                  Bank of Bahrain and Kuwait B.S.C.
                </option>

                <option value="bank-of-ceylon">
                  Bank of Ceylon
                </option>

                <option value="bank-of-china-limited">
                  Bank of China Limited
                </option>

                <option value="bank-of-nova-scotia">
                  Bank of Nova Scotia
                </option>

                <option value="bnp-paribas">
                  BNP Paribas
                </option>

                <option value="citibank-na">
                  Citibank N.A.
                </option>

                <option value="cooperatieve-rabobank-ua">
                  Cooperatieve Rabobank U.A./ Coöperatieve Centrale
                  Raiffeisen-Boerenleenbank B.A.
                </option>

                <option value="credit-agricole-corporate-and-investment-bank">
                  Credit Agricole Corporate and Investment Bank
                </option>

                <option value="ctbc-bank-co-ltd">
                  CTBC Bank Co., Ltd.
                </option>

                <option value="dbs-bank-india-limited">
                  DBS Bank India Limited
                </option>

                <option value="deutsche-bank-ag">
                  Deutsche Bank A.G.
                </option>

                <option value="doha-bank-qpsc">
                  Doha Bank Q.P.S.C
                </option>

                <option value="emirates-nbd-bank-pjsc">
                  Emirates NBD Bank P.J.S.C
                </option>

                <option value="first-abu-dhabi-bank-pjsc">
                  First Abu Dhabi Bank PJSC
                </option>

                <option value="firstrand-bank-limited">
                  FirstRand Bank Limited
                </option>

                <option value="hong-kong-and-shanghai-banking-corporation-limited">
                  Hong Kong and Shanghai Banking Corporation Limited
                </option>

                <option value="industrial-and-commercial-bank-of-china">
                  Industrial and Commercial Bank of China
                </option>

                <option value="industrial-bank-of-korea">
                  Industrial Bank of Korea
                </option>

                <option value="jp-morgan-chase-bank-na">
                  J.P. Morgan Chase Bank N.A.
                </option>

                <option value="jsc-vtb-bank">
                  JSC VTB Bank
                </option>

                <option value="keb-hana-bank">
                  KEB Hana Bank
                </option>

                <option value="kookmin-bank">
                  Kookmin Bank
                </option>

                <option value="mashreqbank-psc">
                  Mashreqbank P.S.C
                </option>

                <option value="mizuho-bank-ltd">
                  Mizuho Bank Ltd.
                </option>

                <option value="mufg-bank-ltd">
                  MUFG Bank, Ltd.
                </option>

                <option value="natwest-markets-plc">
                  NatWest Markets Plc
                </option>

                <option value="nonghyup-bank">
                  NongHyup Bank
                </option>

                <option value="pt-bank-maybank-indonesia-tbk">
                  PT Bank Maybank Indonesia TBK
                </option>

                <option value="qatar-national-bank-qpsc">
                  Qatar National Bank (Q.P.S.C.)
                </option>

                <option value="sberbank">
                  Sberbank
                </option>

                <option value="sbm-bank-india-limited">
                  SBM Bank (India) Limited
                </option>

                <option value="shinhan-bank">
                  Shinhan Bank
                </option>

                <option value="societe-generale">
                  Societe Generale
                </option>

                <option value="sonali-bank-plc">
                  Sonali Bank PLC
                </option>

                <option value="standard-chartered-bank">
                  Standard Chartered Bank
                </option>

                <option value="sumitomo-mitsui-banking-corporation">
                  Sumitomo Mitsui Banking Corporation
                </option>

                <option value="united-overseas-bank-limited">
                  United Overseas Bank Limited
                </option>

                <option value="ubs-ag">
                  UBS AG
                </option>

                <option value="woori-bank">
                  Woori Bank
                </option>

                {/* Demo / Sample Banks */}
                <option value="demo-bank">
                  Demo Bank
                </option>

                <option value="sample-national-bank">
                  Sample National Bank
                </option>

                <option value="test-commercial-bank">
                  Test Commercial Bank
                </option>

                <option value="example-private-bank">
                  Example Private Bank
                </option>

                <option value="demo-cooperative-bank">
                  Demo Cooperative Bank
                </option>

                <option value="sample-rural-bank">
                  Sample Rural Bank
                </option>

                <option value="example-payments-bank">
                  Example Payments Bank
                </option>

                <option value="test-small-finance-bank">
                  Test Small Finance Bank
                </option>

              </select>

              <div className="pointer-events-none absolute right-[10px] top-[6px]">

            

              </div>

            </div>

          </div>

          {/* Submit Button */}
          <div className="mt-[45px] flex justify-center">

            <button
              type="button"
              onClick={() => setShowThankYou(true)}
              className="bg-[#11aaa2] px-[45px] py-[14px] text-[20px] font-semibold text-white hover:bg-[#0e938d]"
            >
              Submit
            </button>

          </div>

        </div>

      </main>

    </div>
  );
}