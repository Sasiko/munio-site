interface ListItem {
  mainMessage: string;
  items: string[];
}

interface InfoBarOptions {
  title: string;
  message: string | (string | ListItem)[];
  image?: string;
  imageClass?: string;
  fromRight?: boolean;
  hideBullets?: boolean;
}

export default function InfoBar(props: InfoBarOptions) {
  function generateRenderData(p: InfoBarOptions) {
    if (Array.isArray(p.message)) {
      return p.message.map((message) => {
        if (typeof message === "object") {
          if (!message.items || !message.mainMessage) return undefined;
          return (
            <li>
              {message.mainMessage}
              <ul class="pl-3 lg:(pl-8) list-disc">
                {message.items.map((m) => (
                  <li>{m}</li>
                ))}
              </ul>
            </li>
          );
        } else {
          return <li>{message}</li>;
        }
      });
    } else {
      return p.message;
    }
  }

  return (
    <div
      class={`bg-dark-pro px-4 py-4 rounded w-full flex <md:(flex-col mx-auto) lg:(py-8) ${
        props.fromRight ? "flex-row-reverse" : ""
      }`}
    >
      <div class="md:(w-md) lg:(w-2xl) mx-auto">
        <div class="h-full mx-auto rounded flex items-center justify-center">
          <img
            class={`h-50 lg:(${props.imageClass ? props.imageClass : "h-1/2"})`}
            src={props.image ? props.image : "/static/fish.svg"}
            alt=""
          />
        </div>
      </div>

      <div class="px-4">
        <h1 class="font-inter font-bold text-light text-xl w-full <md:(text-center pt-4) uppercase">
          {props.title}
        </h1>

        <ul
          class={`${
            props.hideBullets ? "" : "list-disc"
          } lg:px-4 pt-2 font-open-sans text-gray-200 space-y-1 text-lg <md:(text-sm space-y-2 pt-3 px-1) leading-relaxed`}
        >
          {generateRenderData(props)}
        </ul>
      </div>
    </div>
  );
}
