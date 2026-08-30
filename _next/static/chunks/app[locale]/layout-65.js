import WalletContextProvider from "../components/WalletProvider";

export const metadata = {
  title: "LaunchMemes | Create Solana Tokens",
  description: "Create Solana Tokens",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <WalletContextProvider>
          {children}
        </WalletContextProvider>
      </body>
    </html>
  );
}
