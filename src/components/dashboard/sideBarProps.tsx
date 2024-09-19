import { cn } from "@/lib/utils"
import Link from "next/link"


export type SideBarProps<T = SideBarNavLinkProps> = {
     children: React.ReactNode
     className?: string
} & T

type SideBarNavLinkProps = {
     href: string
     active?: boolean
}


export function SideBarContainer({ children, className }: SideBarProps) {
     return (
          <aside className={cn(['border-r border-border flex flex-col space-y-6 ', className])}>
               {children}
          </aside>
     )
}

export function SideBarHeader({ children, className }: SideBarProps) {
     return (
          <header className={cn(['px-6 pt-3 border-b border-border', className])}>
               {children}
          </header>
     )
}

export function SideBarMain({ children, className }: SideBarProps) {
     return (
          <main className={cn(['pt-6 px-3', className])}>
               {children}
          </main>
     )
}

export function SideBarNav({ children, className }: SideBarProps) {
     return (
          <nav className={cn(['', className])}>
               {children}
          </nav>
     )
}

export function SideBarNavHeader({ children, className }: SideBarProps) {
     return (
          <header className={cn(['', className])}>
               {children}
          </header>
     )
}

export function SideBarNavHeaderTitle({ children, className }: SideBarProps) {
     return (
          <div className={cn(['text-xs text-muted-foreground  uppercase  ml-3  ', className])}>
               {children}
          </div>
     )
}

export function SideBarNavMain({ children, className }: SideBarProps) {
     return (
          <main className={cn(['flex flex-col ', className])}>
               {children}
          </main>
     )
}

export function SideBarNavLink({ children, className, href, active }: SideBarProps<SideBarNavLinkProps>) {
     return (
          <Link href={href} className={cn([
               'flex items-center text-xs px-3 py-2 rounded-lg',
               active && 'bg-secondary',
               className
          ])}>
               {children}
          </Link>
     )
}

export function SideBarFooter({ children, className }: SideBarProps) {
     return (
          <footer className={cn(['py-4 px-3 mt-auto border-t border-border ', className])}>
               {children}
          </footer>
     )
}