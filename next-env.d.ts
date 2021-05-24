/// <reference types="next" />
/// <reference types="next/types/global" />

declare module "*.svg";
declare type GetLayout = (page: any) => JSX.Element;
declare type ExtendedNextPage<P = {}> = NextPage<P> & { getLayout: GetLayout };
declare type ExtendedNextComponent<N = NextPageContext, T = any, P = {}> = NextComponentType<N, T, P> & { getLayout: GetLayout };
