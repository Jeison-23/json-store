import { Layouts } from "./layouts";
import { Providers } from "./providers";

export default function RootLayout({ children }) {
  return (
    <html lang="en" >
      <head>
        <title>Json Store</title>
      </head>
      <body>
        <Providers>
          <Layouts>
            {children}
          </Layouts>
        </Providers>
      </body>
    </html>
  )
}
