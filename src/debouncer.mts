function debouncer(delay:number) {
    let timeout: NodeJS.Timeout;
    let lastArgs: any;

    return (fn: (...args:any[])=>any) => {
        console.log("timeout reset ")
        clearTimeout(timeout);

        return (...args: any[]) => {
            console.log("timeout started")
            timeout = setTimeout(() => {
                if (args !== lastArgs) {
                    console.log("fn called")
                    fn(args);
                }
            }, delay);
        };
    };
}

export {debouncer}