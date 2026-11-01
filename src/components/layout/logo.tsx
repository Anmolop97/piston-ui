import { Link } from "react-router-dom"
import LogoSVG from "@/assets/logo-icon"

const Logo = () => {
  return (
    <Link to="/home" className="flex items-center gap-2 group">
      <div className="size-9 rounded-xl bg-lime-500 shadow-sm flex items-center justify-center transition-transform group-hover:scale-105">
        <LogoSVG className="h-6.5 w-6.5 text-white" />
      </div>
      <span className="font-semibold hidden md:block text-sm tracking-tight">Piston UI</span>
    </Link>
  )
}

const LogoIcon = () => {
  return (
    <Link to="/home" className="flex items-center gap-2 bg-background rounded-md px-2 py-1 group">
      <div className="size-7 rounded-lg bg-primary flex items-center justify-center transition-transform group-hover:scale-105">
        <LogoSVG className="h-5 w-5 text-white" />
      </div>
      <span className="font-semibold hidden md:block text-sm tracking-tight">Piston UI</span>
    </Link>
  )
}

export { Logo, LogoIcon }
