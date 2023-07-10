import platforms from "../data/platforms";

export interface Platform {
    id: number;
    name: string;
    slug: string;
}

// const usePlatforms = () => useData<Platform>("/platforms/lists/parents");
const usePlatforms = () => ({ data: platforms, error: null, loading: false });

export default usePlatforms;