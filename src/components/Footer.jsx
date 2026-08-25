import React from "react";

export default function Footer() {



  const contactLinks = {
    linkedin: "https://www.linkedin.com/in/YOUR-LINKEDIN-USERNAME",
    twitter: "https://twitter.com/YOUR-TWITTER-USERNAME",
    github: "https://github.com/YOUR-GITHUB-USERNAME",
    email: "yourmail@example.com",
  };


  return (
    <footer className="border-t border-gray-800 bg-[#070a10] text-white">



      <div className="mx-auto max-w-7xl px-6 py-14">

        <div className="grid gap-10 md:grid-cols-4">



          <div className="md:col-span-2">

            <div className="font-mono text-xl font-bold tracking-tight">
              Vault<span className="text-cyan-400">of</span>Codes
            </div>

            <p className="mt-4 max-w-md text-sm leading-6 text-gray-400">
              Learn by building. Explore programs, develop real-world
              skills, and create projects that are ready for the future.
            </p>


            <div className="mt-6 flex items-center gap-3">

              <a
                href={contactLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-gray-700 bg-[#0c1119] text-gray-400 transition hover:border-cyan-400 hover:bg-cyan-400/10 hover:text-cyan-400"
              >

                <svg
                  width="19"
                  height="19"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.35V8.99h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.26 2.37 4.26 5.46v6.29ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM3.56 20.45h3.56V8.99H3.56v11.46ZM22.22 0H1.78C.8 0 0 .8 0 1.78v20.44C0 23.2.8 24 1.78 24h20.44c.98 0 1.78-.8 1.78-1.78V1.78C24 .8 23.2 0 22.22 0Z" />
                </svg>

              </a>



              <a
                href={contactLinks.twitter}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter / X"
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-gray-700 bg-[#0c1119] text-gray-400 transition hover:border-cyan-400 hover:bg-cyan-400/10 hover:text-cyan-400"
              >

                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.657l-5.214-6.817-5.964 6.817H1.684l7.73-8.835L1.254 2.25h6.826l4.713 6.231 5.451-6.231Zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77Z" />
                </svg>

              </a>



              <a
                href={contactLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-gray-700 bg-[#0c1119] text-gray-400 transition hover:border-cyan-400 hover:bg-cyan-400/10 hover:text-cyan-400"
              >

                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56v-2.15c-3.2.7-3.88-1.54-3.88-1.54-.53-1.33-1.28-1.69-1.28-1.69-1.05-.72.08-.71.08-.71 1.16.08 1.77 1.19 1.77 1.19 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.55-.29-5.23-1.28-5.23-5.69 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.47.11-3.06 0 0 .97-.31 3.18 1.18a11.06 11.06 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.77.11 3.06.74.81 1.19 1.84 1.19 3.1 0 4.42-2.69 5.39-5.25 5.68.41.35.78 1.04.78 2.1v3.12c0 .31.21.68.8.56A11.51 11.51 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5Z" />
                </svg>

              </a>


              <a
                href={`mailto:${contactLinks.email}`}
                aria-label="Email"
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-gray-700 bg-[#0c1119] text-gray-400 transition hover:border-cyan-400 hover:bg-cyan-400/10 hover:text-cyan-400"
              >

                <svg
                  width="19"
                  height="19"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                >
                  <rect
                    x="3"
                    y="5"
                    width="18"
                    height="14"
                    rx="2"
                  />

                  <path d="m3 7 9 6 9-6" />

                </svg>

              </a>

            </div>

          </div>



          {/* ==================================
              VAULTCAREER
          ================================== */}

          <div>

            <h3 className="text-sm font-semibold text-white">
              VaultOfCodes
            </h3>

            <div className="mt-4 space-y-3 text-sm text-gray-400">

              <a
                href="/aboutus"
                className="block transition hover:text-cyan-400"
              >
                Home
              </a>

              <a
                href="/login"
                className="block transition hover:text-cyan-400"
              >
                LogIn
              </a>

            </div>

          </div>

          <div>

            <h3 className="text-sm font-semibold text-white">
              Software
            </h3>

            <div className="mt-4 space-y-3 text-sm text-gray-400">

              <a
                href="/vaultcareer"
                className="block transition hover:text-cyan-400"
              >
                VaultCareer
              </a>

              <a
                href="/vaulthire"
                className="block transition hover:text-cyan-400"
              >
                VaultHire
              </a>

              <a
                href="/vaultverify"
                className="block transition hover:text-cyan-400"
              >
                VaultVerify
              </a>

            </div>

          </div>

        </div>


        <div className="mt-12 rounded-2xl border border-gray-800 bg-[#0b0f16] p-6">

          <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">

            <div>

              <p className="text-sm font-semibold text-white">
                Get in touch
              </p>

              <p className="mt-1 text-sm text-gray-500">
                Have a question or want to work with us?
              </p>

            </div>


            <a
              href={`mailto:${contactLinks.email}`}
              className="w-fit rounded-xl border border-cyan-400/30 bg-cyan-400/5 px-5 py-3 font-mono text-sm text-cyan-400 transition hover:border-cyan-400 hover:bg-cyan-400/10"
            >
              {contactLinks.email}
            </a>

          </div>

        </div>




        <div className="mt-10 flex flex-col gap-4 border-t border-gray-800 pt-6 text-sm text-gray-500 md:flex-row md:items-center md:justify-between">

          <p>
            © {new Date().getFullYear()} VaultofCodes. Learn.Build.Launch.
          </p>

          <div className="flex gap-6">

            <a
              href="/privacy"
              className="transition hover:text-white"
            >
              Privacy
            </a>

            <a
              href="/terms"
              className="transition hover:text-white"
            >
              Terms
            </a>

          </div>

        </div>

      </div>

    </footer>
  );
}