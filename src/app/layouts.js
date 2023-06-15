'use client'

import { usePathname } from 'next/navigation'

export const Layouts = ({ children}) => {
  /*const path = usePathname()
  const render = () => {
    let element = ''
    if (path.includes('/admin/')) {
      console.log('admin');
    }
    return element = children
  }*/
  return (
    <div>
      {children}
    </div>
  )
}
