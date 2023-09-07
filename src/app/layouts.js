'use client'

import { NavbarAdminLayout } from '@/layouts/NavbarAdminLayout'
import { NavbarMainLayout } from '@/layouts/NavbarMainLayout'
import { usePathname } from 'next/navigation'

export const Layouts = ({ children}) => {
  const path = usePathname()

  const render = () => {
    let element = ''

    switch (true) {
      case path.includes('/admin/'):
        element = <NavbarAdminLayout children={children} /> 
        break;

      default:
        element = <NavbarMainLayout path={path} children={children} />
        break;
    }
    return element
  }

  return (
    <div>
      {render()}
    </div>
  )
}
