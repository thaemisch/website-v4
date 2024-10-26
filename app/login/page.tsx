import { LoginForm } from "@/components/login-form"

function DotBackground() {
  return (
    <div className="h-full w-full bg-background dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative flex items-center justify-center">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-background [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <div className="relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8">
        <LoginForm />
      </div>
    </div>
  );
}

export default function Page() {
  return (
    <div className="h-full w-full">
      <DotBackground />
    </div>
  )
}
