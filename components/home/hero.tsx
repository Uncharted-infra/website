import { ChatInput } from "@/components/chat/chat-input";
import { GlitchTitle } from "@/components/ui/glitch-title";

export function Hero() {
  return (
    <section className="flex flex-col items-center justify-center px-4 pt-24 pb-16 md:pt-32 md:pb-20">
      <h1 className="text-4xl font-bold tracking-tight text-center sm:text-5xl md:text-6xl">
        Go somewhere <GlitchTitle className="font-navbar-title text-[1em]" /> today
      </h1>
      <p className="mt-4 text-lg text-muted-foreground text-center max-w-xl md:text-xl">
        An AI travel agent to explore, plan, or book trips
      </p>

      <div className="w-full mt-10 md:mt-12">
        <ChatInput />
      </div>
    </section>
  );
}
