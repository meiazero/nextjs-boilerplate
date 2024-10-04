import { NavItem, ThemeToggle } from "@/components/elements/common";
import { Button } from "@/components/ui/button";

type NavbarProps = {
  onThemeTogglerClick: () => void;
};

export function NavBar({ onThemeTogglerClick }: NavbarProps) {
  return (
    <nav className="container flex items-center justify-between h-full">
      <div className="flex flex-items gap-8">
        <h1 className="text-2xl font-bold">Boilerplate</h1>

        <div className="flex flex-items gap-4">
          <NavItem href="/" type="nav">
            Home
          </NavItem>
        </div>
      </div>

      <div className="flex flex-items gap-4">
        <ThemeToggle onClick={onThemeTogglerClick} />
        <Button>Entrar</Button>
      </div>
    </nav>
  );
}
