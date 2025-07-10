import { Footer, Header } from "@components/organisms";
import { Block, Main } from "@components/atoms";

interface Props {
    children: React.ReactNode;
}

export const RootLayout: React.FC<Props> = ({ children }) => (
    <Block className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <Header />
        <Main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
            {children}
        </Main>
        <Footer />
    </Block>
)