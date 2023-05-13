import { RouterProps } from "preact-router";

export default function Tos(props: RouterProps) {
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
           <h1> Terms of Service for Phish Grabber bot</h1>
        </div>
        
        <br/>
        <div class="font-inter text-white font-extrabold text-left lg:(text-2xl)">
          General information of Terms of service
        </div>
        <div class="pl-3 pr-2 pt-4 lg:(pt-2)">
          <ul class="list-disc font-open-sans text-light space-y-2 text-base lg:(text-lg)">
            {[
              "By using Phish Grabber bot, you agree to Terms of Service to not use this bot to promote any illegal activity or use bot in any abusive manner that violate discord rules or disrupt Discord API in any manner. Users must be 13+ older in order to use our bot service. ",
            ].map((rule: string, index: number) => (
              <li key={index}>{rule}</li>
            ))}
          </ul>
        </div>
        
<br/>

        
   


       
        
      </div>
    </div>
  );
}
