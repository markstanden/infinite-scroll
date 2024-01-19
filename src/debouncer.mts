function debouncer(delay: number) {
    let timeout: NodeJS.Timeout;
    let lastArgs: any;

    return (fn: (...args: any[]) => any) => {
        return (...args: any[]) => {
            if (args !== lastArgs) {
                clearTimeout(timeout);
                timeout = setTimeout(() => {
                    fn(args);
                }, delay);
            }
        };
    };
}

export { debouncer };
