export type Serie = {
    num: number;
    name: string;
    series_id: number;
    cover: string;
    plot: string;
    cast: string;
    director: string;
    genre: string;
    releaseDate: string;
    last_modified: string;
    rating: string;
    rating_5based: string;
    backdrop_path: string[];
    youtube_trailer: string;
    tmdb: string;
    episode_run_time: string;
    category_id: string;
    category_ids: number[];
    url:string;
}

export type SerieInfo = {
    seasons: Season[];
    info: Serie;
    episodes: {
        [key: string]: Episode[];
    }
}

export type Season = {
    name: string;
    episode_count: string;
    overview: string;
    air_date: string;
    cover: string;
    cover_tmdb: string;
    season_number: number;
    cover_big: string;
    releaseDate: string;
    duration: string;
}

export type Episode = {
    id: string;
    episode_num: number;
    title: string;
    container_extension: string;
    info: EpisodeInfo;
    custom_sid: string;
    added: string;
    season: number;
    direct_source: string;
    url:string;
}
export type EpisodeInfo = {
    air_date: string;
    crew: string;
    rating: string;
    id: string;
    movie_image: string;
    duration_secs: string;
    duration: string;
    video: {
        index: number;
        codec_name: string;
        codec_long_name: string;
        profile: string;
        codec_type: string;
        codec_tag_string: string;
        codec_tag: string;
        width: number;
        height: number;
        coded_width: number;
        coded_height: number;
        closed_captions: number;
        film_grain: number;
        has_b_frames: number;
        sample_aspect_ratio: string;
        display_aspect_ratio: string;
        pix_fmt: string;
        level: number;
        color_range: string;
        color_space: string;
        color_transfer: string;
        color_primaries: string;
        chroma_location: string;
        field_order: string;
        refs: number;
        is_avc: string;
        nal_length_size: string;
        r_frame_rate: string;
        avg_frame_rate: string;
        time_base: string;
        start_pts: number;
        start_time: string;
        bits_per_raw_sample: string;
        extradata_size: number;
        disposition: {
            default: number;
            dub: number;
            original: number;
            comment: number;
            lyrics: number;
            karaoke: number;
            forced: number;
            hearing_impaired: number;
            visual_impaired: number;
            clean_effects: number;
            attached_pic: number;
            timed_thumbnails: number;
            captions: number;
            descriptions: number;
            metadata: number;
            dependent: number;
            still_image: number;
        },
        tags: {
            [key: string]: string;
        }
    },
    audio: {
        index: number;
        codec_name: string;
        codec_long_name: string;
        codec_type: string;
        codec_tag_string: string;
        codec_tag: string;
        sample_fmt: string;
        sample_rate: string;
        channels: number;
        channel_layout: string;
        bits_per_sample: number;
        r_frame_rate: string;
        avg_frame_rate: string;
        time_base: string;
        start_pts: number;
        start_time: string;
        bit_rate: string;
        disposition: {
            default: number;
            dub: number;
            original: number;
            comment: number;
            lyrics: number;
            karaoke: number;
            forced: number;
            hearing_impaired: 0,
            visual_impaired: 0,
            clean_effects: 0,
            attached_pic: 0,
            timed_thumbnails: 0,
            captions: 0,
            descriptions: 0,
            metadata: 0,
            dependent: 0,
            still_image: 0
        },
        tags: {
            [key: string]: string;
        }
    },
    bitrate: number
}