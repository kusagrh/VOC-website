import React, { useState } from "react";

const generateCaptcha = () => {
  const characters =
    "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";

  let result = "";

  for (let i = 0; i < 6; i++) {
    result += characters.charAt(
      Math.floor(Math.random() * characters.length)
    );
  }

  return result;
};



export default function VaultVerify() {


  const [studentId, setStudentId] = useState("");
  const [verificationCode, setVerificationCode] = useState("");

  const [captcha, setCaptcha] = useState(generateCaptcha());
  const [captchaInput, setCaptchaInput] = useState("");


  const [verified, setVerified] = useState(false);
  const [error, setError] = useState("");


  const [showCertificate, setShowCertificate] = useState(false);


  const refreshCaptcha = () => {
    setCaptcha(generateCaptcha());
    setCaptchaInput("");
    setError("");
    setVerified(false);
  };



  const handleVerify = (e) => {
    e.preventDefault();

    setError("");
    setVerified(false);
    setShowCertificate(false);


    /* Student ID validation */

    if (!studentId.trim()) {
      setError("Please enter your Email or Student ID.");
      return;
    }


    if (!verificationCode.trim()) {
      setError("Please enter the verification code.");
      return;
    }


    if (!captchaInput.trim()) {
      setError("Please enter the CAPTCHA.");
      return;
    }


    if (
      captchaInput.trim().toLowerCase() !==
      captcha.toLowerCase()
    ) {
      setError("Incorrect CAPTCHA. Please try again.");

      setCaptcha(generateCaptcha());

      setCaptchaInput("");

      return;
    }



    setVerified(true);
    setError("");
  };


  const downloadCertificate = () => {

    const certificateHTML = `
      <!DOCTYPE html>

      <html>

      <head>

        <title>VaultVerify Certificate</title>

        <style>

          body {
            margin: 0;
            padding: 40px;
            font-family: Arial, sans-serif;
            background: #05070b;
            color: #ffffff;
          }

          .certificate {
            max-width: 900px;
            margin: auto;
            padding: 60px;
            border: 2px solid #24d6c7;
            border-radius: 20px;
            background: #0c1018;
            text-align: center;
          }

          .logo {
            color: #24d6c7;
            font-size: 14px;
            letter-spacing: 4px;
            font-weight: bold;
          }

          h1 {
            font-size: 42px;
            margin: 20px 0;
          }

          .verified {
            display: inline-block;
            padding: 10px 20px;
            border-radius: 30px;
            background: rgba(36,214,199,.1);
            color: #24d6c7;
            margin-bottom: 30px;
          }

          .student {
            font-size: 28px;
            font-weight: bold;
          }

          .program {
            font-size: 20px;
            margin-top: 15px;
          }

          .details {
            margin-top: 40px;
            padding: 25px;
            border-top: 1px solid #29313d;
            border-bottom: 1px solid #29313d;
          }

          .detail {
            margin: 15px 0;
          }

          .label {
            color: #8893a5;
            font-size: 12px;
            text-transform: uppercase;
            letter-spacing: 2px;
          }

          .value {
            margin-top: 5px;
            font-size: 17px;
          }

          .footer {
            margin-top: 40px;
            color: #8893a5;
            font-size: 12px;
          }

        </style>

      </head>

      <body>

        <div class="certificate">

          <div class="logo">
            VAULTOFCODES
          </div>

          <h1>Certificate of Achievement</h1>

          <div class="verified">
            ✓ VERIFIED CREDENTIAL
          </div>

          <div class="student">
            ${studentId}
          </div>

          <div class="program">
            Full Stack Web Development
          </div>

          <div class="details">

            <div class="detail">

              <div class="label">
                Certificate ID
              </div>

              <div class="value">
                VOC-CERT-2026-004281
              </div>

            </div>


            <div class="detail">

              <div class="label">
                Issue Date
              </div>

              <div class="value">
                18 August 2026
              </div>

            </div>


            <div class="detail">

              <div class="label">
                Verification Status
              </div>

              <div class="value">
                Valid and Verified
              </div>

            </div>

          </div>

          <div class="footer">

            This certificate has been verified through VaultVerify.

          </div>

        </div>

      </body>

      </html>
    `;


    const blob = new Blob(
      [certificateHTML],
      { type: "text/html" }
    );

    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");

    link.href = url;

    link.download =
      `VaultVerify-Certificate-${studentId}.html`;

    document.body.appendChild(link);

    link.click();

    document.body.removeChild(link);

    URL.revokeObjectURL(url);
  };

  const viewCertificate = () => {
    setShowCertificate(true);
  };


  return (

    <div className="min-h-screen bg-[#05070b] text-white">


      <section className="relative overflow-hidden px-6 py-20 md:py-28">


        <div className="pointer-events-none absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-cyan-500/10 blur-3xl" />


        <div className="relative mx-auto max-w-4xl">


          <div className="text-center">

            <h1 className="text-3xl font-bold md:text-4xl">
              Validate Credential
            </h1>

            <p className="mt-4 text-lg text-gray-400">
              Enter Email or Student ID to verify certification status.
            </p>

          </div>


          {/* FORM */}

          <form
            onSubmit={handleVerify}
            className="mx-auto mt-10 max-w-3xl"
          >


            {/* Student ID */}

            <div className="rounded-xl border border-gray-700 bg-[#0b0f15]">

              <input
                type="text"
                value={studentId}
                onChange={(e) =>
                  setStudentId(e.target.value)
                }
                placeholder="student@email.com / STU-ID"
                className="w-full bg-transparent px-5 py-5 font-mono text-base text-white outline-none placeholder:text-gray-500"
              />

            </div>


            {/* Verification Code */}

            <div className="mt-5">

              <input
                type="text"
                value={verificationCode}
                onChange={(e) =>
                  setVerificationCode(e.target.value)
                }
                placeholder="ENTER VERIFICATION CODE"
                className="w-full rounded-xl border border-gray-700 bg-[#0b0f15] px-5 py-5 text-center font-mono text-sm text-white outline-none placeholder:text-gray-500 focus:border-cyan-400"
              />

            </div>



            <div className="mt-5 flex flex-col gap-3 sm:flex-row">


              {/* CAPTCHA DISPLAY */}

              <div className="relative flex min-h-[62px] select-none items-center justify-center overflow-hidden rounded-xl border border-gray-700 bg-[#0b0f15] sm:w-48">


                {/* Decorative lines */}

                <span className="absolute left-2 top-4 h-px w-32 rotate-6 bg-cyan-400 opacity-40" />

                <span className="absolute left-5 top-9 h-px w-28 -rotate-12 bg-purple-400 opacity-40" />

                <span className="absolute right-2 top-7 h-px w-20 rotate-3 bg-cyan-400 opacity-40" />


                {/* CAPTCHA text */}

                <span className="relative font-mono text-xl font-bold tracking-[0.3em] text-white">

                  {captcha}

                </span>

              </div>


              {/* REFRESH BUTTON */}

              <button
                type="button"
                onClick={refreshCaptcha}
                title="Generate new CAPTCHA"
                className="flex h-[62px] items-center justify-center rounded-xl border border-gray-700 bg-[#0b0f15] px-5 text-xl text-gray-400 transition hover:border-cyan-400 hover:text-cyan-400"
              >
                ↻
              </button>


              {/* CAPTCHA INPUT */}

              <input
                type="text"
                value={captchaInput}
                onChange={(e) =>
                  setCaptchaInput(e.target.value)
                }
                placeholder="ENTER CAPTCHA"
                autoComplete="off"
                className="min-h-[62px] min-w-0 flex-1 rounded-xl border border-gray-700 bg-[#0b0f15] px-5 text-center font-mono uppercase tracking-widest text-white outline-none placeholder:text-gray-500 focus:border-cyan-400"
              />

            </div>



            {error && (

              <div className="mt-4 rounded-xl border border-red-500/30 bg-red-500/10 px-5 py-4 text-sm font-medium text-red-400">

                ⚠ {error}

              </div>

            )}


            <button
              type="submit"
              className="mt-6 flex w-full items-center justify-center gap-3 rounded-xl border border-cyan-400/50 bg-gradient-to-r from-blue-500/40 via-cyan-400/20 to-green-500/30 px-6 py-4 text-lg font-bold tracking-wide text-white transition-all hover:border-cyan-300 hover:shadow-[0_0_30px_rgba(34,211,238,0.2)]"
            >

              VERIFY RECORD

              <span className="text-xl">
                →
              </span>

            </button>

          </form>

        </div>

      </section>



      {verified && (

        <section className="border-t border-gray-800 bg-[#080c12] px-6 py-16 md:py-24">

          <div className="mx-auto max-w-5xl">


            {/* VERIFIED MESSAGE */}

            <div className="mb-8 flex items-center gap-4 rounded-xl border border-emerald-400/30 bg-emerald-400/5 px-6 py-5">

              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-400/10 text-xl text-emerald-400">

                ✓

              </div>

              <div>

                <h2 className="font-semibold text-emerald-400">
                  Credential Verified
                </h2>

                <p className="mt-1 text-sm text-gray-400">
                  This certificate record has been successfully verified.
                </p>

              </div>

            </div>



            {/* CERTIFICATE CARD */}

            <div className="overflow-hidden rounded-3xl border border-gray-700 bg-[#0c1119]">


              {/* HEADER */}

              <div className="border-b border-gray-700 bg-gradient-to-r from-cyan-400/10 via-purple-400/10 to-transparent p-7 md:p-10">

                <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">


                  <div>

                    <p className="font-mono text-xs uppercase tracking-[0.25em] text-cyan-400">
                      VaultVerify
                    </p>

                    <h2 className="mt-2 text-2xl font-bold md:text-3xl">
                      Certificate Record
                    </h2>

                  </div>


                  <span className="w-fit rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-2 text-xs font-bold tracking-wide text-emerald-400">

                    ✓ VERIFIED

                  </span>

                </div>

              </div>



              {/* DETAILS */}

              <div className="grid gap-8 p-7 md:grid-cols-2 md:p-10">


                <div>

                  <p className="text-xs uppercase tracking-widest text-gray-500">
                    Student
                  </p>

                  <p className="mt-2 text-lg font-semibold">
                    {studentId}
                  </p>

                </div>


                <div>

                  <p className="text-xs uppercase tracking-widest text-gray-500">
                    Certificate ID
                  </p>

                  <p className="mt-2 font-mono text-sm">
                    VOC-CERT-2026-004281
                  </p>

                </div>


                <div>

                  <p className="text-xs uppercase tracking-widest text-gray-500">
                    Program
                  </p>

                  <p className="mt-2 text-lg font-semibold">
                    Full Stack Web Development
                  </p>

                </div>


                <div>

                  <p className="text-xs uppercase tracking-widest text-gray-500">
                    Issue Date
                  </p>

                  <p className="mt-2 text-lg font-semibold">
                    18 August 2026
                  </p>

                </div>

              </div>



              {/* VALID STATUS */}

              <div className="border-t border-gray-700 p-7 md:p-10">

                <div className="rounded-2xl border border-emerald-400/20 bg-emerald-400/5 p-5">

                  <p className="font-semibold text-emerald-400">
                    ✓ Certificate is valid
                  </p>

                  <p className="mt-2 text-sm leading-relaxed text-gray-400">

                    This credential has been successfully verified
                    through VaultVerify.

                  </p>

                </div>

              </div>



              {/* ACTION BUTTONS */}

              <div className="flex flex-col gap-3 border-t border-gray-700 p-7 sm:flex-row md:p-10">


                {/* VIEW */}

                <button
                  type="button"
                  onClick={viewCertificate}
                  className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-gray-600 px-5 py-4 font-semibold transition hover:border-cyan-400 hover:text-cyan-400"
                >

                  👁 View Certificate

                </button>


                {/* DOWNLOAD */}

                <button
                  type="button"
                  onClick={downloadCertificate}
                  className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-400 to-purple-500 px-5 py-4 font-semibold text-black transition hover:scale-[1.01]"
                >

                  ↓ Download Certificate

                </button>

              </div>

            </div>

          </div>

        </section>

      )}



      {showCertificate && (

        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 px-5 backdrop-blur-sm">


          <div className="max-h-[90vh] w-full max-w-3xl overflow-auto rounded-3xl border border-gray-700 bg-[#0c1119] shadow-2xl">


            {/* MODAL HEADER */}

            <div className="flex items-center justify-between border-b border-gray-700 p-6">

              <div>

                <p className="font-mono text-xs tracking-widest text-cyan-400">
                  VAULTVERIFY
                </p>

                <h2 className="mt-1 text-xl font-bold">
                  Certificate Preview
                </h2>

              </div>


              <button
                onClick={() => setShowCertificate(false)}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-700 text-gray-400 transition hover:border-red-400 hover:text-red-400"
              >

                ✕

              </button>

            </div>



            {/* CERTIFICATE */}

            <div className="p-8 md:p-12">

              <div className="rounded-2xl border-2 border-cyan-400/40 bg-gradient-to-br from-cyan-400/5 via-transparent to-purple-500/10 p-8 text-center md:p-12">


                <p className="font-mono text-xs tracking-[0.4em] text-cyan-400">
                  VAULTOFCODES
                </p>


                <h1 className="mt-6 text-3xl font-bold md:text-4xl">
                  Certificate of Achievement
                </h1>


                <div className="mx-auto mt-5 w-fit rounded-full border border-emerald-400/30 bg-emerald-400/10 px-5 py-2 text-sm font-bold text-emerald-400">

                  ✓ VERIFIED CREDENTIAL

                </div>


                <p className="mt-10 text-2xl font-semibold">
                  {studentId}
                </p>


                <p className="mt-3 text-lg text-gray-400">
                  Full Stack Web Development
                </p>


                <div className="my-10 border-y border-gray-700 py-7">

                  <div className="grid gap-6 md:grid-cols-3">


                    <div>

                      <p className="text-xs uppercase tracking-widest text-gray-500">
                        Certificate ID
                      </p>

                      <p className="mt-2 font-mono text-sm">
                        VOC-CERT-2026-004281
                      </p>

                    </div>


                    <div>

                      <p className="text-xs uppercase tracking-widest text-gray-500">
                        Issue Date
                      </p>

                      <p className="mt-2 text-sm">
                        18 August 2026
                      </p>

                    </div>


                    <div>

                      <p className="text-xs uppercase tracking-widest text-gray-500">
                        Status
                      </p>

                      <p className="mt-2 font-semibold text-emerald-400">
                        Valid
                      </p>

                    </div>

                  </div>

                </div>


                <p className="text-sm text-gray-500">
                  This certificate has been verified through VaultVerify.
                </p>

              </div>

            </div>



            {/* MODAL ACTIONS */}

            <div className="flex flex-col gap-3 border-t border-gray-700 p-6 sm:flex-row">

              <button
                onClick={downloadCertificate}
                className="flex flex-1 items-center justify-center rounded-xl bg-gradient-to-r from-cyan-400 to-purple-500 px-5 py-3 font-semibold text-black"
              >
                ↓ Download Certificate
              </button>


              <button
                onClick={() => setShowCertificate(false)}
                className="flex-1 rounded-xl border border-gray-700 px-5 py-3 font-semibold text-white hover:border-gray-500"
              >
                Close
              </button>

            </div>

          </div>

        </div>

      )}

    </div>
  );
}