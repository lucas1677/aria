declare interface PathParam {
    path: string;
    newTab?: boolean;
    newWindow?: boolean;
}

declare interface ApplicationState {
    currentRoutePath: string;
}

declare module '*.svg' {
    const content: any;
    export default content;
}

declare module '*.css' {
    const content: any;
    export default content;
}
