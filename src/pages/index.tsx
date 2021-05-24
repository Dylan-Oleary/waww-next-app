import Image from "next/image";

import { getSiteLayout } from "layouts";

const IndexPage: ExtendedNextPage = ({}) => {
    return (
        <div className="flex flex-col items-center h-full space-y-4">
            <Image alt="Puppers!" src="/puppers.png" layout="intrinsic" width={750} height={600} />
            <h1 className="text-2xl font-extrabold text-center">
                Next.js / TypeScript / TailwindCSS / Apollo Starter
            </h1>
        </div>
    );
};

IndexPage.getLayout = getSiteLayout;

export default IndexPage;
