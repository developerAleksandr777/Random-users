import { useSearchParams, URLSearchParamsInit } from 'react-router-dom';

interface DefaultParams {
    page: number;
    favorites:number[];
}

interface PageState {
    page?: number;
    favorites?:number[] | number;
}

type SetPageFunction = (newParams: { page?: number,favorites?:number[] }) => void;

interface UsePageStateResult {
    collection: PageState;
    setPage: SetPageFunction;
}

export const usePageState = (): UsePageStateResult => {
    const [searchParams, setSearchParams] = useSearchParams();

    const defaultParams: DefaultParams = {
        page: 1,
        favorites:[]
    };

    const currentPage: number = Number(searchParams.get('page')) || defaultParams.page;
    const currentFavorites:number | number[] = Number(searchParams.get('favorites')) || defaultParams.favorites;

    const removeDefaultParams = (params: Record<string, string | null>, defaultParams: DefaultParams) => {
        const cleanedParams: URLSearchParamsInit = new URLSearchParams();
        for (const [key, value] of Object.entries(params)) {
            if (value !== null) {
                cleanedParams.append(key, value);
            }
        }
        return cleanedParams;
    };

    const setPage: SetPageFunction = (newParams) => {
        setSearchParams((prevParams) => {
            const allParams: Record<string, string | null> = Array.from(prevParams.entries()).reduce(
                (acc, [key, value]) => {
                    return { ...acc, [key]: value };
                },
                {},
            );
            const finalParams: URLSearchParamsInit = removeDefaultParams(allParams, defaultParams);

            const updatedParams: URLSearchParamsInit = { ...finalParams, ...newParams };

            return updatedParams;
        });
    };

    const collection: PageState = {
        page: currentPage,
        favorites:currentFavorites
    };

    return { collection, setPage };
};
