export default function NavBar() {
  return (
    <div class="bg-dark shadow-md">
      <div class="flex container max-w-screen-7xl h-16 mx-auto px-4 lg:(px-2 h-18) justify-center items-center">
        <div id="branding" class="flex items-center justify-center">
          <div class="flex items-center">
            <img
              class="mr-2 md:mr-4 h-6 lg:(h-8) w-auto rounded-full"
              src="/static/fish-navbar.png"
              alt=""
            />
          </div>

          <div class="flex items-center">
            <span class="font-inter text-lg lg:(text-xl) font-bold text-white">
              Phish Grabber
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
