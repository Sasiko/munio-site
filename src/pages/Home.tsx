import { RouterProps } from "preact-router";
import InfoBar from "../components/InfoBar";
import Footer from "../components/navigation/Footer";
import NavBar from "../components/navigation/Navbar";

export default function Home(props?: RouterProps) {
  return (
    <div class="bg-dark">
      <nav class="absolute fixed top-0 w-full">
        <NavBar />
      </nav>

      <main class="mx-auto min-h-screen">
        <div class="h-screen bg-pattern bg-fixed flex flex-col items-center justify-center bg-dark-pro">
          <div class="font-inter font-extrabold text-light-secondary">
            <div class="text-2xl lg:text-4xl uppercase text-center">
              Protect your server
            </div>
            <div class="font-bold text-md lg:(text-2xl pt-0) text-hex-C1C5CD text-center pt-0">
              from phishing spams
            </div>

            <div
              id="buttons"
              class="pt-4 lg:pt-6 grid grid-cols-1 lg:grid-cols-2 gap-2 lg:gap-4 mx-8"
            >
              <button
                onClick={() =>
                  window.open(
                    "https://discord.com/api/oauth2/authorize?client_id=901735805662408725&permissions=1393985416198&scope=bot",
                    "_blank"
                  )
                }
                class="focus:outline-none px-4 py-2 bg-blurple-secondary rounded-sm font-inter font-bold text-light hover:shadow-md"
              >
                Invite
              </button>
              <button
                class="focus:outline-none px-4 py-2 bg-gray-600 rounded-sm font-inter font-bold text-light-secondary hover:shadow-md"
                onClick={() =>
                  window.open("https://discord.gg/DXHkPWsEuV", "_blank")
                }
              >
                Support
              </button>

              <button
                onClick={() => window.open("https://docs.dis.tf", "_blank")}
                class="col-span-2 focus:outline-none px-4 py-2 bg-light rounded-sm font-inter font-bold text-dark hover:(shadow-md bg-gray-100)"
              >
                Documentation
              </button>
            </div>
          </div>

          <img
            class="absolute bottom-0 w-full <md:(hidden)"
            src="/wave.svg"
            alt=""
          />
        </div>

        <div class="<md:( pt-8 ) max-w-7xl mx-auto px-4 mb-8 flex flex-col justify-center space-y-8 lg:(space-y-10 pt-16)">
          <div class="w-full space-y-2 lg:(space-y-4)">
            <InfoBar
              title="What is phishing?"
              message={[
                "With growing popularity for discord platform, it attracts bad actors to take advantage of users by attempting to trick them with phishing links. These spam messages usually advertise free nitro or anything that is considered valuable by asking users to click the link. These domains are copy of the legitimate websites and wants you to type the login details in order for them to steal your account.",
                "This bot can protect your server against these spams and let you focus what you do best, to run and engage with your community. Munio can detect, scan and, flag all kinds of domains based on various factors such as APIs or heuristic features, explained in the Heuristic features section.",
                {
                  mainMessage: "Phishing attempts include:",
                  items: [
                    "compromised accounts or self-made bots posting messages deceiving people into thinking they'll receive free nitro/games/etc.",
                    " misleading links that resemble legitimate websites, tricking people into entering sensitive information such as passwords, phone numbers, etc.",
                  ],
                },
                "Misleading links that resemble legitimate websites, tricking people into entering sensitive information such as passwords, phone numbers, etc.",
              ]}
            />
          </div>

          <div class="flex flex-col">
            <h1 class="font-bold text-center text-2xl lg:text-4xl text-white">
              FEATURES
            </h1>

            <div class="pt-6 w-full space-y-2 lg:(space-y-4 pt-5)">

                 <InfoBar
                image="/static/bot.svg"
                title="Detect Direct Message Spammers"
                message={[
                  "Munio scans user's profile picture when they join your server or are already in your server and changes to new profile picture. These bots/compromised accounts use a common themed profile picture in order to impersonate discord staff",
                  "This bot scans all profile picture to match for similarity against the internal database of blacklisted profile picture. Munio will in other case be able to detect DM spammers and kick the users before it has the chance to DM spam your server members.",
                ]}
              />

              <InfoBar
                fromRight={true}
                image="/static/database.svg"
                title="Database definition detection"
                message={[
                  "Munio uses a combination of 3 APIs with a database of over 15000+ discord/steam/epic phishing domains, including 400 000+ generalized malicious domains.",
                  "With the help of APIs, Munio can also scan known link shorteners, find the real domain hiding inside link shorteners and match against the phishing database.",
                ]}
              />

              <InfoBar
                title="Heuristic detection"
                image="/static/detection.svg"
                message={[
                  "Besides using anti-phishing APIs, the bot can scan and flag all types of domains that haven't yet registered on the APIs database.",
                  "By customizing blacklisted keywords set by server owners, Munio will scan the domain, fetch HTML content and match against your configured keywords.",
                  "The custom flag feature enables server owners to deny domains based on their preference without needing to know a specific domain. This means it can go beyond the scope of phishing links or unreported links. Such examples would be: blocking websites that contains non-english site that specifically target a community, individuals or people.",
                ]}
              />

              <InfoBar
                fromRight={true}
                image="/static/robust.svg"
                title="ROBUSTNESS "
                message={[
                  "Munio uses two separate anti-phishing APIs based on a centralized feed that registers new phishing domains.",
                  "Should there be an event where both APIs go offline, then a local cache database will initialize. Utilizing phishing APIs, a snapshot of the phishing database gets stored as a local cache database. The local cache file of the phishing database will continue to be in use until either of the APIs becomes available again.",
                  "With these fallback features, the bot can continue flagging bad domains. By using two similar APIs for redundancy and local cache, we will ensure the core function of the bot will continue to work in a normal state.",
                ]}
              />
            </div>
          </div>
        </div>
      </main>

      <footer class="">
        <Footer />
      </footer>
    </div>
  );
}
