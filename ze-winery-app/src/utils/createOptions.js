export const createOptions = (data) => {

    return Object.keys(data).map(f => {
        if (f.includes('Name') && data[f]) {
            return <option key={f} value={f}>{data[f]}</option>

        }
    })};
