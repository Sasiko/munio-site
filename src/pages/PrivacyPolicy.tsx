import { RouterProps } from "preact-router";

export default function PrivacyPolicy(props: RouterProps) {
  return (
    <div class="min-h-screen bg-dark">
      <nav class="py-1 bg-dark-secondary px-4">
        <div
          class="py-2 flex items-center justify-center space-x-4 cursor-pointer hover:underline text-white"
          onClick={() => window.location.replace("/")}
        >
          <img class="h-10" src="/static/fish.png" alt="logo" />
          <div class="font-inter text-white font-bold text-xl">
            Phish Grabber
          </div>
        </div>
      </nav>

      <div class="max-w-screen-6xl mx-auto px-4 py-8 text-xl">
        <div class="font-inter text-white font-extrabold text-center lg:(text-2xl)">
           <h1> Privacy Policy for Phish Grabber bot</h1>
        </div>
        
        <br/>
        <div class="font-inter text-white font-extrabold text-left lg:(text-2xl)">
          General information of privacy policy
        </div>
        <div class="pl-3 pr-2 pt-4 lg:(pt-2)">
          <ul class="list-disc font-open-sans text-light space-y-2 text-base lg:(text-lg)">
            {[
              "By reading this privacy policy and adding Phish Grabber bot to their discord server, the server owners or administrators acknowledge that the bot stores partial data for logging purposes and for some parts of bots features to function properly. We are very much aware about how important privacy is for our users. We take a lot of steps to make sure your data remains confidential and protected.",
            ].map((rule: string, index: number) => (
              <li key={index}>{rule}</li>
            ))}
          </ul>
        </div>
        
<br/>
        <div class="font-inter text-white font-extrabold text-left lg:(text-2xl)">
          How data is collected
        </div>
        <div class="pl-3 pr-2 pt-4 lg:(pt-2)">
          <ul class="list-disc font-open-sans text-light space-y-2 text-base lg:(text-lg)">
            {[
              "Member ID/Username and the message content will not be logged at all, ensuring full anonymity for all users. The bot will simply extract the domains from message content and discard the rest of the message content.",
              "By default, not using any commmands means only data domain sent by users are stored as logs. The bot however offers server specific command settings such as logging channel, ignore roles, ignore channel, punishment types etc. In that case it means that the bot must save GuildID, ChannelID and RoleID data in the database. These are needed otherwise majority of the commands would not work.",
            ].map((rule: string, index: number) => (
              <li key={index}>{rule}</li>
            ))}
          </ul>
        </div>
        
        <br/>
                <div class="font-inter text-white font-extrabold text-left lg:(text-2xl)">
          How we treat your data
        </div>
        
                <div class="pl-3 pr-2 pt-4 lg:(pt-2)">
          <ul class="list-disc font-open-sans text-light space-y-2 text-base lg:(text-lg)">
            {[
              "The server will only temporarily log domains up to 30 days.",
              "All data are stored on a dedicated server in datacenter operated by a commercial hosting company located in USA, West Virginia.",
              "The limited data stored in the database and server log will NEVER be sold to anyone or used for monetary gains.",
              "The data can also be used for statistic analysis accessed only by the developer of this bot and no one else.",

            ].map((rule: string, index: number) => (
              <li key={index}>{rule}</li>
            ))}
          </ul>
        </div>
        
                        <br/>
                <div class="font-inter text-white font-extrabold text-left lg:(text-2xl)">
          Who has access
        </div>
        
                <div class="pl-3 pr-2 pt-4 lg:(pt-2)">
          <ul class="list-disc font-open-sans text-light space-y-2 text-base lg:(text-lg)">
            {[
              "The data in any form will NOT be accessed by anyone beside the bot owner and appropriate party in use-cases such as server diagnostic. The server is accessed by the server/bot owner only and have implemented appropriate security measures by industry standard to protect and secure the server",

            ].map((rule: string, index: number) => (
              <li key={index}>{rule}</li>
            ))}
          </ul>
        </div>
        
        
                <br/>
                <div class="font-inter text-white font-extrabold text-left lg:(text-2xl)">
          Data deletion rights
        </div>
        
                <div class="pl-3 pr-2 pt-4 lg:(pt-2)">
          <ul class="list-disc font-open-sans text-light space-y-2 text-base lg:(text-lg)">
            {[
              "Server owners can delete their data from our server and database, by sending a request to the bot owner. Contact Sasiko#1234 via our support server. We do our best to promptly comply with the deletion request and strives to delete the appropriate data ideally within 7 days period.",

            ].map((rule: string, index: number) => (
              <li key={index}>{rule}</li>
            ))}
          </ul>
        </div>
        
                        <br/>
                <div class="font-inter text-white font-extrabold text-left lg:(text-2xl)">
          Policy update
        </div>
        
                <div class="pl-3 pr-2 pt-4 lg:(pt-2)">
          <ul class="list-disc font-open-sans text-light space-y-2 text-base lg:(text-lg)">
            {[
              "This page will be updated with any type of policy change regarding privacy and it is recommended to visit this page to review the changes. Furthermore, for any feedback towards the privacy policy should be directed to the support server.",
              "Last policy update: 2022-01-25",

            ].map((rule: string, index: number) => (
              <li key={index}>{rule}</li>
            ))}
          </ul>
        </div>
        
      </div>
    </div>
  );
}
