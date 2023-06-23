'use client'

import { NavbarAdminLayout } from '@/layouts/NavbarAdminLayout'
import { usePathname } from 'next/navigation'

export const Layouts = ({ children}) => {
  const path = usePathname()

  const render = () => {
    let element = ''

    switch (true) {
      case path.includes('/admin/'):
        element = <NavbarAdminLayout>
          {children}
        </NavbarAdminLayout>
        break;

      default:
        element = children
        console.log('default');
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
