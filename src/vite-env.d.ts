/// <reference types="vite/client" />

type TupleKeyValuePair = [key: string, value: string|number];
type Fetcher = (url:string) => Promise<Response>;
type CardGetter = (number) => Promise<GiphyResponse>;

interface ApiSettings {
    baseURL: string,
    params: ApiPageParams,
}

interface ApiPageParams {
    api_key: string,
    bundle: BundleType,
    lang: string,
    limit: number,
    offset: number,
    q: string,
    rating: Rating,
}

interface CardData {
    src: string,
    name: string,
    link: string,
    id: string,
}

type BundleType = "messaging_non_clips" | "clips_grid_picker" | "sticker_layering" | "low_bandwidth";
type Rating = "g" | "pg" | "pg-13" | "r";

interface GiphyResponse extends Response {
    data: GiphyItem[]
}

interface GiphyItem {
    "type": "gif" | string,
    "id": string,
    "url": string,
    "slug": string,
    "bitly_gif_url": string,
    "bitly_url": string,
    "embed_url": string,
    "username": string,
    "source": string,
    "title": string,
    "rating": Rating,
    "content_url": string,
    "source_tld": string,
    "source_post_url": string,
    "is_sticker": boolean,
    "import_datetime": Date,
    "trending_datetime": Date,
    "images": {
        "original": {
            "height": number,
            "width": number,
            "size": number,
            "url": string,
            "mp4_size": number,
            "mp4": string,
            "webp_size": number,
            "webp": string,
            "frames": number,
            "hash": string,
        },
        "fixed_height": {
            "height": number,
            "width": number,
            "size": number,
            "url": string,
            "mp4_size": number,
            "mp4": string,
            "webp_size": number,
            "webp": string,
        },
        "fixed_height_downsampled": {
            "height": number,
            "width": number,
            "size": number,
            "url": string,
            "webp_size": number,
            "webp": string,
        },
        "fixed_height_small": {
            "height": number,
            "width": number,
            "size": number,
            "url": string,
            "mp4_size": number,
            "mp4": string,
            "webp_size": number,
            "webp": string,
        },
        "fixed_width": {
            "height": number,
            "width": number,
            "size": number,
            "url": string,
            "mp4_size": number,
            "mp4": string,
            "webp_size": number,
            "webp": string,
        },
        "fixed_width_downsampled": {
            "height": number,
            "width": number,
            "size": number,
            "url": string,
            "webp_size": number,
            "webp": string,
        },
        "fixed_width_small": {
            "height": number,
            "width": number,
            "size": number,
            "url": string,
            "mp4_size": number,
            "mp4": string,
            "webp_size": number,
            "webp": string,
        }
    },
    "user": {
        "avatar_url": string,
        "banner_image": string,
        "banner_url": string,
        "profile_url": string,
        "username": string,
        "display_name": string,
        "description": string,
        "instagram_url": string,
        "website_url": string,
        "is_verified": boolean,
    },
}