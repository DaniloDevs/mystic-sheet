'use client'
import { usePathname } from "next/navigation";
import { SideBarContainer, SideBarFooter, SideBarHeader, SideBarMain, SideBarNav, SideBarNavHeader, SideBarNavHeaderTitle, SideBarNavLink, SideBarNavMain } from "./sideBarProps";
import { DashboardIcon, PersonIcon, MixerVerticalIcon } from "@radix-ui/react-icons";
import { UserDropdown } from "./dropDrow";
import { Session } from "next-auth";


type UserDropdownProps = {
  user: Session['user']
}

export default function SideBar({ user }: UserDropdownProps) {
  const pathName = usePathname()

  const isActive = (path: string) => {
    return pathName === path
  }

  return (
    <SideBarContainer>
      <SideBarHeader>
        <h1>Mystic Sheet</h1>
      </SideBarHeader>

      <SideBarMain className='flex flex-col flex-grow'>
        <SideBarNav>
          <SideBarNavMain>
            <SideBarNavLink href="/dashboard" active={isActive("/dashboard")}>
              <DashboardIcon className="w-4 h-4 mr-3" />
              Dashboard
            </SideBarNavLink>
          </SideBarNavMain>
        </SideBarNav>

        <SideBarNav className='mt-auto'>
          <SideBarNavHeader>
            <SideBarNavHeaderTitle>
              Configuração
            </SideBarNavHeaderTitle>
          </SideBarNavHeader>
          <SideBarNavMain>
            <SideBarNavLink href="/dashboard/settings/account" active={isActive("/dashboard/settings/account")}>
              <PersonIcon className="w-4 h-4 mr-3" />
              Conta
            </SideBarNavLink>
            <SideBarNavLink href="/dashboard/settings" active={isActive("/dashboard/settings")}>
              <MixerVerticalIcon className="w-4 h-4 mr-3" />
              Configuração
            </SideBarNavLink>
          </SideBarNavMain>
        </SideBarNav>

      </SideBarMain>

      <SideBarFooter>
        <UserDropdown user={user} />
      </SideBarFooter>
    </SideBarContainer>
  )
}