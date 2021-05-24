import { FC } from "react";

const SiteLayout: FC<{}> = ({ children }) => {
    return (
        <div className="flex w-full h-screen antialiased text-gray-700 bg-gradient-to-r from-yellow-200 to-yellow-300">
            <main className="flex-grow max-w-4xl px-8 mx-auto">{children}</main>
        </div>
    );
};

const getSiteLayout: GetLayout = (page) => <SiteLayout>{page}</SiteLayout>;

export default SiteLayout;
export { getSiteLayout, SiteLayout };
