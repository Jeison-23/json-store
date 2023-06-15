import { Layouts } from "./layouts";
import { Providers } from "./providers";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
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
