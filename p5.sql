--
-- PostgreSQL database dump
--

-- Dumped from database version 14.5
-- Dumped by pg_dump version 14.5

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: ar_internal_metadata; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.ar_internal_metadata (
    key character varying NOT NULL,
    value character varying,
    created_at timestamp(6) without time zone NOT NULL,
    updated_at timestamp(6) without time zone NOT NULL
);


--
-- Name: comments; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.comments (
    id bigint NOT NULL,
    post_id integer,
    user_id integer,
    comment_text text,
    created_at timestamp(6) without time zone NOT NULL,
    updated_at timestamp(6) without time zone NOT NULL
);


--
-- Name: comments_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.comments_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: comments_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.comments_id_seq OWNED BY public.comments.id;


--
-- Name: likes; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.likes (
    id bigint NOT NULL,
    user_id integer,
    post_id integer,
    "like" boolean DEFAULT false
);


--
-- Name: likes_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.likes_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: likes_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.likes_id_seq OWNED BY public.likes.id;


--
-- Name: posts; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.posts (
    id bigint NOT NULL,
    user_id integer,
    title character varying,
    body text,
    created_at timestamp(6) without time zone NOT NULL,
    updated_at timestamp(6) without time zone NOT NULL,
    user_initial character varying
);


--
-- Name: posts_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.posts_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: posts_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.posts_id_seq OWNED BY public.posts.id;


--
-- Name: resources; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.resources (
    id bigint NOT NULL,
    title character varying,
    description character varying,
    url character varying,
    created_at timestamp(6) without time zone NOT NULL,
    updated_at timestamp(6) without time zone NOT NULL
);


--
-- Name: resources_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.resources_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: resources_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.resources_id_seq OWNED BY public.resources.id;


--
-- Name: schema_migrations; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.schema_migrations (
    version character varying NOT NULL
);


--
-- Name: users; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.users (
    id bigint NOT NULL,
    email character varying,
    password_digest character varying,
    first_name character varying,
    last_name character varying,
    country character varying,
    created_at timestamp(6) without time zone NOT NULL,
    updated_at timestamp(6) without time zone NOT NULL
);


--
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.users_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;


--
-- Name: comments id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.comments ALTER COLUMN id SET DEFAULT nextval('public.comments_id_seq'::regclass);


--
-- Name: likes id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.likes ALTER COLUMN id SET DEFAULT nextval('public.likes_id_seq'::regclass);


--
-- Name: posts id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.posts ALTER COLUMN id SET DEFAULT nextval('public.posts_id_seq'::regclass);


--
-- Name: resources id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.resources ALTER COLUMN id SET DEFAULT nextval('public.resources_id_seq'::regclass);


--
-- Name: users id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);


--
-- Data for Name: ar_internal_metadata; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.ar_internal_metadata (key, value, created_at, updated_at) FROM stdin;
environment	development	2022-12-19 17:19:16.248812	2022-12-19 17:19:16.248812
\.


--
-- Data for Name: comments; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.comments (id, post_id, user_id, comment_text, created_at, updated_at) FROM stdin;
1	6	2	Eva Test comment 1	2023-01-08 18:02:35.866891	2023-01-08 18:02:35.866891
2	9	2	Eva test comment for Aslan’s first post	2023-01-09 17:16:09.933058	2023-01-09 17:16:09.933058
3	4	2	test comment from eva	2023-01-09 17:18:52.026685	2023-01-09 17:18:52.026685
4	4	2	\N	2023-01-09 17:18:54.61751	2023-01-09 17:18:54.61751
5	4	2	\N	2023-01-09 17:18:55.415303	2023-01-09 17:18:55.415303
6	4	2	\N	2023-01-09 17:18:55.782823	2023-01-09 17:18:55.782823
7	4	2	\N	2023-01-09 17:18:56.212097	2023-01-09 17:18:56.212097
8	4	2	\N	2023-01-09 17:18:56.757456	2023-01-09 17:18:56.757456
9	4	2	\N	2023-01-09 17:18:57.271725	2023-01-09 17:18:57.271725
10	4	2	\N	2023-01-09 17:20:52.530473	2023-01-09 17:20:52.530473
11	4	2	\N	2023-01-09 17:24:28.171928	2023-01-09 17:24:28.171928
12	4	2	\N	2023-01-09 17:24:44.702942	2023-01-09 17:24:44.702942
13	4	2	\N	2023-01-09 17:32:16.322318	2023-01-09 17:32:16.322318
14	9	2	eva comment 2	2023-01-09 17:33:01.152072	2023-01-09 17:33:01.152072
15	9	1	Joe’s comment	2023-01-09 22:42:54.503176	2023-01-09 22:42:54.503176
16	9	1	Another comment from joe	2023-01-09 22:43:55.968469	2023-01-09 22:43:55.968469
17	9	1	yet another test from joe	2023-01-09 22:45:04.848198	2023-01-09 22:45:04.848198
18	9	1	more comments from joe	2023-01-09 22:45:56.447646	2023-01-09 22:45:56.447646
19	3	1	test comment from joe	2023-01-10 16:29:03.750758	2023-01-10 16:29:03.750758
20	13	1	my own comment	2023-01-10 16:30:31.282984	2023-01-10 16:30:31.282984
21	10	5	Aslan comment	2023-01-10 16:41:20.141105	2023-01-10 16:41:20.141105
22	9	1	test comment from Joe	2023-01-10 18:36:43.686698	2023-01-10 18:36:43.686698
23	9	1	more test from joe	2023-01-10 18:38:06.717875	2023-01-10 18:38:06.717875
24	12	6	Test comment from Jenny	2023-01-17 20:47:45.870655	2023-01-17 20:47:45.870655
25	12	1	comments	2023-01-17 21:04:46.990859	2023-01-17 21:04:46.990859
26	12	1	comments	2023-01-17 21:04:57.267322	2023-01-17 21:04:57.267322
27	8	1	test comment\n	2023-01-17 21:12:10.792875	2023-01-17 21:12:10.792875
28	16	1	test	2023-01-17 21:19:42.944703	2023-01-17 21:19:42.944703
29	13	1	Another test	2023-01-18 22:57:49.1322	2023-01-18 22:57:49.1322
30	13	1	test	2023-01-18 23:00:48.117298	2023-01-18 23:00:48.117298
31	13	1	This is a test comment	2023-01-18 23:02:39.621342	2023-01-18 23:02:39.621342
32	12	2	test comment	2023-01-28 22:59:19.902681	2023-01-28 22:59:19.902681
33	12	2	another test	2023-01-28 22:59:49.586223	2023-01-28 22:59:49.586223
34	12	2	ghjglhlhlhlhlhlh jhk. jiuzd fgrjtt. ghjglhlhlhlhlhlh jhk. jiuzd fgrjtt. ghjglhlhlhlhlhlh jhk. jiuzd fgrjtt. ghjglhlhlhlhlhlh jhk. jiuzd fgrjtt. ghjglhlhlhlhlhlh jhk. jiuzd fgrjtt. ghjglhlhlhlhlhlh jhk. jiuzd fgrjtt. ghjglhlhlhlhlhlh jhk. jiuzd fgrjtt. ghjglhlhlhlhlhlh jhk. jiuzd fgrjtt. ghjglhlhlhlhlhlh jhk. jiuzd fgrjtt. ghjglhlhlhlhlhlh jhk. jiuzd fgrjtt. \n	2023-01-30 00:29:25.596082	2023-01-30 00:29:25.596082
\.


--
-- Data for Name: likes; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.likes (id, user_id, post_id, "like") FROM stdin;
1	1	12	t
2	1	1	f
\.


--
-- Data for Name: posts; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.posts (id, user_id, title, body, created_at, updated_at, user_initial) FROM stdin;
12	2	Eva’s Sixth Post	Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent enim ex, semper vitae orci at, tempor consequat tortor. Quisque ultricies nulla sapien, ac viverra elit auctor non. Mauris placerat risus feugiat lorem rutrum dignissim. Proin vel dui tristique, fringilla tellus eget, auctor sapien. Pellentesque lobortis nunc vitae pulvinar pretium. Proin rutrum arcu quis fringilla ornare. Praesent eu quam quis eros venenatis convallis eu at velit. Sed at eleifend velit, vitae volutpat lectus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Quisque iaculis arcu vitae egestas tincidunt. Suspendisse rutrum ultricies metus quis sodales.\n\nMauris eu quam quis metus pulvinar pulvinar. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Maecenas ut urna risus. Aliquam laoreet purus eget sem rhoncus, sit amet placerat turpis malesuada. Duis eget risus tincidunt, rutrum eros eu, gravida sem. Suspendisse condimentum nisi quis massa luctus, at pulvinar ligula iaculis. Fusce sem purus, convallis in urna vitae, congue facilisis neque. Nullam gravida sapien id porta egestas.\n\nMauris imperdiet purus sed placerat laoreet. Vivamus blandit arcu eros, a pulvinar justo sagittis pharetra. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc maximus lacus augue, nec viverra lorem porta eu. Integer molestie mauris ex, sed mollis justo consectetur eu. Fusce vitae porta erat. Maecenas eu mi ac leo mollis mollis.\n\nAenean magna lorem, mollis vehicula laoreet eu, pulvinar in leo. Donec ut risus urna. Integer sed pellentesque nulla. Sed facilisis nisl sed lorem venenatis, in finibus enim pulvinar. Integer mauris elit, dictum id ligula in, hendrerit pulvinar turpis. Vivamus posuere laoreet odio nec scelerisque. Suspendisse eu ipsum a enim scelerisque viverra. Etiam sed suscipit sapien. In quis purus ut nibh vehicula euismod id ut eros. Curabitur sed lorem aliquet, vulputate diam viverra, iaculis enim. Aliquam erat volutpat. Phasellus a tellus id turpis ornare aliquam a vitae urna. Nullam tincidunt efficitur nisi eu facilisis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aliquam fringilla imperdiet finibus. Aliquam nec leo imperdiet, maximus nunc vitae, volutpat leo.\n\nVestibulum fringilla orci tellus, at mollis mi dapibus non. Sed a hendrerit felis. Nullam arcu neque, sodales vel est in, sollicitudin fringilla tortor. Nunc id egestas ex. Nullam egestas arcu vel mauris convallis, non sagittis libero ultrices. Morbi dignissim lobortis est nec tempor. Nulla sed odio nisi.	2023-01-05 16:36:18.276135	2023-01-05 16:36:18.276135	eva
8	1	Joe - Post Title One	Joe - Post One Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent enim ex, semper vitae orci at, tempor consequat tortor. Quisque ultricies nulla sapien, ac viverra elit auctor non. Mauris placerat risus feugiat lorem rutrum dignissim. Proin vel dui tristique, fringilla tellus eget, auctor sapien. Pellentesque lobortis nunc vitae pulvinar pretium. Proin rutrum arcu quis fringilla ornare. Praesent eu quam quis eros venenatis convallis eu at velit. Sed at eleifend velit, vitae volutpat lectus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Quisque iaculis arcu vitae egestas tincidunt. Suspendisse rutrum ultricies metus quis sodales.\n\nMauris eu quam quis metus pulvinar pulvinar. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Maecenas ut urna risus. Aliquam laoreet purus eget sem rhoncus, sit amet placerat turpis malesuada. Duis eget risus tincidunt, rutrum eros eu, gravida sem. Suspendisse condimentum nisi quis massa luctus, at pulvinar ligula iaculis. Fusce sem purus, convallis in urna vitae, congue facilisis neque. Nullam gravida sapien id porta egestas.\n\nMauris imperdiet purus sed placerat laoreet. Vivamus blandit arcu eros, a pulvinar justo sagittis pharetra. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc maximus lacus augue, nec viverra lorem porta eu. Integer molestie mauris ex, sed mollis justo consectetur eu. Fusce vitae porta erat. Maecenas eu mi ac leo mollis mollis.\n\nAenean magna lorem, mollis vehicula laoreet eu, pulvinar in leo. Donec ut risus urna. Integer sed pellentesque nulla. Sed facilisis nisl sed lorem venenatis, in finibus enim pulvinar. Integer mauris elit, dictum id ligula in, hendrerit pulvinar turpis. Vivamus posuere laoreet odio nec scelerisque. Suspendisse eu ipsum a enim scelerisque viverra. Etiam sed suscipit sapien. In quis purus ut nibh vehicula euismod id ut eros. Curabitur sed lorem aliquet, vulputate diam viverra, iaculis enim. Aliquam erat volutpat. Phasellus a tellus id turpis ornare aliquam a vitae urna. Nullam tincidunt efficitur nisi eu facilisis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aliquam fringilla imperdiet finibus. Aliquam nec leo imperdiet, maximus nunc vitae, volutpat leo.\n\nVestibulum fringilla orci tellus, at mollis mi dapibus non. Sed a hendrerit felis. Nullam arcu neque, sodales vel est in, sollicitudin fringilla tortor. Nunc id egestas ex. Nullam egestas arcu vel mauris convallis, non sagittis libero ultrices. Morbi dignissim lobortis est nec tempor. Nulla sed odio nisi.\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent enim ex, semper vitae orci at, tempor consequat tortor. Quisque ultricies nulla sapien, ac viverra elit auctor non. Mauris placerat risus feugiat lorem rutrum dignissim. Proin vel dui tristique, fringilla tellus eget, auctor sapien. Pellentesque lobortis nunc vitae pulvinar pretium. Proin rutrum arcu quis fringilla ornare. Praesent eu quam quis eros venenatis convallis eu at velit. Sed at eleifend velit, vitae volutpat lectus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Quisque iaculis arcu vitae egestas tincidunt. Suspendisse rutrum ultricies metus quis sodales.\n\nMauris eu quam quis metus pulvinar pulvinar. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Maecenas ut urna risus. Aliquam laoreet purus eget sem rhoncus, sit amet placerat turpis malesuada. Duis eget risus tincidunt, rutrum eros eu, gravida sem. Suspendisse condimentum nisi quis massa luctus, at pulvinar ligula iaculis. Fusce sem purus, convallis in urna vitae, congue facilisis neque. Nullam gravida sapien id porta egestas.\n\nMauris imperdiet purus sed placerat laoreet. Vivamus blandit arcu eros, a pulvinar justo sagittis pharetra. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc maximus lacus augue, nec viverra lorem porta eu. Integer molestie mauris ex, sed mollis justo consectetur eu. Fusce vitae porta erat. Maecenas eu mi ac leo mollis mollis.\n\nAenean magna lorem, mollis vehicula laoreet eu, pulvinar in leo. Donec ut risus urna. Integer sed pellentesque nulla. Sed facilisis nisl sed lorem venenatis, in finibus enim pulvinar. Integer mauris elit, dictum id ligula in, hendrerit pulvinar turpis. Vivamus posuere laoreet odio nec scelerisque. Suspendisse eu ipsum a enim scelerisque viverra. Etiam sed suscipit sapien. In quis purus ut nibh vehicula euismod id ut eros. Curabitur sed lorem aliquet, vulputate diam viverra, iaculis enim. Aliquam erat volutpat. Phasellus a tellus id turpis ornare aliquam a vitae urna. Nullam tincidunt efficitur nisi eu facilisis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aliquam fringilla imperdiet finibus. Aliquam nec leo imperdiet, maximus nunc vitae, volutpat leo.\n\nVestibulum fringilla orci tellus, at mollis mi dapibus non. Sed a hendrerit felis. Nullam arcu neque, sodales vel est in, sollicitudin fringilla tortor. Nunc id egestas ex. Nullam egestas arcu vel mauris convallis, non sagittis libero ultrices. Morbi dignissim lobortis est nec tempor. Nulla sed odio nisi.	2023-01-04 19:35:05.943147	2023-01-04 19:35:05.943147	\N
9	5	Aslan’s First Post	Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent enim ex, semper vitae orci at, tempor consequat tortor. Quisque ultricies nulla sapien, ac viverra elit auctor non. Mauris placerat risus feugiat lorem rutrum dignissim. Proin vel dui tristique, fringilla tellus eget, auctor sapien. Pellentesque lobortis nunc vitae pulvinar pretium. Proin rutrum arcu quis fringilla ornare. Praesent eu quam quis eros venenatis convallis eu at velit. Sed at eleifend velit, vitae volutpat lectus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Quisque iaculis arcu vitae egestas tincidunt. Suspendisse rutrum ultricies metus quis sodales.\n\nMauris eu quam quis metus pulvinar pulvinar. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Maecenas ut urna risus. Aliquam laoreet purus eget sem rhoncus, sit amet placerat turpis malesuada. Duis eget risus tincidunt, rutrum eros eu, gravida sem. Suspendisse condimentum nisi quis massa luctus, at pulvinar ligula iaculis. Fusce sem purus, convallis in urna vitae, congue facilisis neque. Nullam gravida sapien id porta egestas.\n\nMauris imperdiet purus sed placerat laoreet. Vivamus blandit arcu eros, a pulvinar justo sagittis pharetra. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc maximus lacus augue, nec viverra lorem porta eu. Integer molestie mauris ex, sed mollis justo consectetur eu. Fusce vitae porta erat. Maecenas eu mi ac leo mollis mollis.\n\nAenean magna lorem, mollis vehicula laoreet eu, pulvinar in leo. Donec ut risus urna. Integer sed pellentesque nulla. Sed facilisis nisl sed lorem venenatis, in finibus enim pulvinar. Integer mauris elit, dictum id ligula in, hendrerit pulvinar turpis. Vivamus posuere laoreet odio nec scelerisque. Suspendisse eu ipsum a enim scelerisque viverra. Etiam sed suscipit sapien. In quis purus ut nibh vehicula euismod id ut eros. Curabitur sed lorem aliquet, vulputate diam viverra, iaculis enim. Aliquam erat volutpat. Phasellus a tellus id turpis ornare aliquam a vitae urna. Nullam tincidunt efficitur nisi eu facilisis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aliquam fringilla imperdiet finibus. Aliquam nec leo imperdiet, maximus nunc vitae, volutpat leo.\n\nVestibulum fringilla orci tellus, at mollis mi dapibus non. Sed a hendrerit felis. Nullam arcu neque, sodales vel est in, sollicitudin fringilla tortor. Nunc id egestas ex. Nullam egestas arcu vel mauris convallis, non sagittis libero ultrices. Morbi dignissim lobortis est nec tempor. Nulla sed odio nisi.	2023-01-05 15:47:43.789039	2023-01-05 15:47:43.789039	\N
10	5	Aslan’s Second Post	Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent enim ex, semper vitae orci at, tempor consequat tortor. Quisque ultricies nulla sapien, ac viverra elit auctor non. Mauris placerat risus feugiat lorem rutrum dignissim. Proin vel dui tristique, fringilla tellus eget, auctor sapien. Pellentesque lobortis nunc vitae pulvinar pretium. Proin rutrum arcu quis fringilla ornare. Praesent eu quam quis eros venenatis convallis eu at velit. Sed at eleifend velit, vitae volutpat lectus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Quisque iaculis arcu vitae egestas tincidunt. Suspendisse rutrum ultricies metus quis sodales.\n\nMauris eu quam quis metus pulvinar pulvinar. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Maecenas ut urna risus. Aliquam laoreet purus eget sem rhoncus, sit amet placerat turpis malesuada. Duis eget risus tincidunt, rutrum eros eu, gravida sem. Suspendisse condimentum nisi quis massa luctus, at pulvinar ligula iaculis. Fusce sem purus, convallis in urna vitae, congue facilisis neque. Nullam gravida sapien id porta egestas.\n\nMauris imperdiet purus sed placerat laoreet. Vivamus blandit arcu eros, a pulvinar justo sagittis pharetra. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc maximus lacus augue, nec viverra lorem porta eu. Integer molestie mauris ex, sed mollis justo consectetur eu. Fusce vitae porta erat. Maecenas eu mi ac leo mollis mollis.\n\nAenean magna lorem, mollis vehicula laoreet eu, pulvinar in leo. Donec ut risus urna. Integer sed pellentesque nulla. Sed facilisis nisl sed lorem venenatis, in finibus enim pulvinar. Integer mauris elit, dictum id ligula in, hendrerit pulvinar turpis. Vivamus posuere laoreet odio nec scelerisque. Suspendisse eu ipsum a enim scelerisque viverra. Etiam sed suscipit sapien. In quis purus ut nibh vehicula euismod id ut eros. Curabitur sed lorem aliquet, vulputate diam viverra, iaculis enim. Aliquam erat volutpat. Phasellus a tellus id turpis ornare aliquam a vitae urna. Nullam tincidunt efficitur nisi eu facilisis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aliquam fringilla imperdiet finibus. Aliquam nec leo imperdiet, maximus nunc vitae, volutpat leo.\n\nVestibulum fringilla orci tellus, at mollis mi dapibus non. Sed a hendrerit felis. Nullam arcu neque, sodales vel est in, sollicitudin fringilla tortor. Nunc id egestas ex. Nullam egestas arcu vel mauris convallis, non sagittis libero ultrices. Morbi dignissim lobortis est nec tempor. Nulla sed odio nisi.	2023-01-05 16:01:44.187414	2023-01-05 16:01:44.187414	\N
13	1	Joe’s First Post	Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent enim ex, semper vitae orci at, tempor consequat tortor. Quisque ultricies nulla sapien, ac viverra elit auctor non. Mauris placerat risus feugiat lorem rutrum dignissim. Proin vel dui tristique, fringilla tellus eget, auctor sapien. Pellentesque lobortis nunc vitae pulvinar pretium. Proin rutrum arcu quis fringilla ornare. Praesent eu quam quis eros venenatis convallis eu at velit. Sed at eleifend velit, vitae volutpat lectus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Quisque iaculis arcu vitae egestas tincidunt. Suspendisse rutrum ultricies metus quis sodales.\n\nMauris eu quam quis metus pulvinar pulvinar. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Maecenas ut urna risus. Aliquam laoreet purus eget sem rhoncus, sit amet placerat turpis malesuada. Duis eget risus tincidunt, rutrum eros eu, gravida sem. Suspendisse condimentum nisi quis massa luctus, at pulvinar ligula iaculis. Fusce sem purus, convallis in urna vitae, congue facilisis neque. Nullam gravida sapien id porta egestas.\n\nMauris imperdiet purus sed placerat laoreet. Vivamus blandit arcu eros, a pulvinar justo sagittis pharetra. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc maximus lacus augue, nec viverra lorem porta eu. Integer molestie mauris ex, sed mollis justo consectetur eu. Fusce vitae porta erat. Maecenas eu mi ac leo mollis mollis.\n\nAenean magna lorem, mollis vehicula laoreet eu, pulvinar in leo. Donec ut risus urna. Integer sed pellentesque nulla. Sed facilisis nisl sed lorem venenatis, in finibus enim pulvinar. Integer mauris elit, dictum id ligula in, hendrerit pulvinar turpis. Vivamus posuere laoreet odio nec scelerisque. Suspendisse eu ipsum a enim scelerisque viverra. Etiam sed suscipit sapien. In quis purus ut nibh vehicula euismod id ut eros. Curabitur sed lorem aliquet, vulputate diam viverra, iaculis enim. Aliquam erat volutpat. Phasellus a tellus id turpis ornare aliquam a vitae urna. Nullam tincidunt efficitur nisi eu facilisis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aliquam fringilla imperdiet finibus. Aliquam nec leo imperdiet, maximus nunc vitae, volutpat leo.\n\nVestibulum fringilla orci tellus, at mollis mi dapibus non. Sed a hendrerit felis. Nullam arcu neque, sodales vel est in, sollicitudin fringilla tortor. Nunc id egestas ex. Nullam egestas arcu vel mauris convallis, non sagittis libero ultrices. Morbi dignissim lobortis est nec tempor. Nulla sed odio nisi.	2023-01-10 16:30:03.267933	2023-01-10 16:30:03.267933	Joe
14	1	Test Post Title - Edited	EDITED - This is a test body for a post Etiam porta sem malesuada magna sem malesuada magna sem malesuada magna	2023-01-11 18:54:06.265527	2023-01-11 18:54:06.265527	Joe
1	1	another edit-Test Post Title	another edit - This is a test body for a post Etiam porta sem malesuada magna sem malesuada magna sem malesuada magna	2022-12-20 22:14:54.612977	2023-01-11 20:53:58.144267	Joe
2	1	Test Title edited	Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent enim ex, semper vitae orci at, tempor consequat tortor. Quisque ultricies nulla sapien, ac viverra elit auctor non. Mauris placerat risus feugiat lorem rutrum dignissim. Proin vel dui tristique, fringilla tellus eget, auctor sapien. Pellentesque lobortis nunc vitae pulvinar pretium. Proin rutrum arcu quis fringilla ornare. Praesent eu quam quis eros venenatis convallis eu at velit. Sed at eleifend velit, vitae volutpat lectus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Quisque iaculis arcu vitae egestas tincidunt. Suspendisse rutrum ultricies metus quis sodales.\n\nMauris eu quam quis metus pulvinar pulvinar. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Maecenas ut urna risus. Aliquam laoreet purus eget sem rhoncus, sit amet placerat turpis malesuada. Duis eget risus tincidunt, rutrum eros eu, gravida sem. Suspendisse condimentum nisi quis massa luctus, at pulvinar ligula iaculis. Fusce sem purus, convallis in urna vitae, congue facilisis neque. Nullam gravida sapien id porta egestas.\n\nMauris imperdiet purus sed placerat laoreet. Vivamus blandit arcu eros, a pulvinar justo sagittis pharetra. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc maximus lacus augue, nec viverra lorem porta eu. Integer molestie mauris ex, sed mollis justo consectetur eu. Fusce vitae porta erat. Maecenas eu mi ac leo mollis mollis.\n\nAenean magna lorem, mollis vehicula laoreet eu, pulvinar in leo. Donec ut risus urna. Integer sed pellentesque nulla. Sed facilisis nisl sed lorem venenatis, in finibus enim pulvinar. Integer mauris elit, dictum id ligula in, hendrerit pulvinar turpis. Vivamus posuere laoreet odio nec scelerisque. Suspendisse eu ipsum a enim scelerisque viverra. Etiam sed suscipit sapien. In quis purus ut nibh vehicula euismod id ut eros. Curabitur sed lorem aliquet, vulputate diam viverra, iaculis enim. Aliquam erat volutpat. Phasellus a tellus id turpis ornare aliquam a vitae urna. Nullam tincidunt efficitur nisi eu facilisis. Orci varius natoque penatibus et magnis dis parturient m	2022-12-26 22:52:55.56698	2023-01-13 17:44:58.423123	Joe
15	1	variable test	variable test setUrl. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent enim ex, semper vitae orci at, tempor consequat tortor. Quisque ultricies nulla sapien, ac viverra elit auctor non. Mauris placerat risus feugiat lorem rutrum dignissim. Proin vel dui tristique, fringilla tellus eget, auctor sapien. Pellentesque lobortis nunc vitae pulvinar pretium. Proin rutrum arcu quis fringilla ornare. Praesent eu quam quis eros venenatis convallis eu at velit. Sed at eleifend velit, vitae volutpat lectus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Quisque iaculis arcu vitae egestas tincidunt. Suspendisse rutrum ultricies metus quis sodales.\n\nMauris eu quam quis metus pulvinar pulvinar. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Maecenas ut urna risus. Aliquam laoreet purus eget sem rhoncus, sit amet placerat turpis malesuada. Duis eget risus tincidunt, rutrum eros eu, gravida sem. Suspendisse condimentum nisi quis massa luctus, at pulvinar ligula iaculis. Fusce sem purus, convallis in urna vitae, congue facilisis neque. Nullam gravida sapien id porta egestas.\n\nMauris imperdiet purus sed placerat laoreet. Vivamus blandit arcu eros, a pulvinar justo sagittis pharetra. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc maximus lacus augue, nec viverra lorem porta eu. Integer molestie mauris ex, sed mollis justo consectetur eu. Fusce vitae porta erat. Maecenas eu mi ac leo mollis mollis.\n\nAenean magna lorem, mollis vehicula laoreet eu, pulvinar in leo. Donec ut risus urna. Integer sed pellentesque nulla. Sed facilisis nisl sed lorem venenatis, in finibus enim pulvinar. Integer mauris elit, dictum id ligula in, hendrerit pulvinar turpis. Vivamus posuere laoreet odio nec scelerisque. Suspendisse eu ipsum a enim scelerisque viverra. Etiam sed suscipit sapien. In quis purus ut nibh vehicula euismod id ut eros. Curabitur sed lorem aliquet, vulputate diam viverra, iaculis enim. Aliquam erat volutpat. Phasellus a tellus id turpis ornare aliquam a vitae urna. Nullam tincidunt efficitur nisi eu facilisis. Orci varius natoque penatibus et magnis dis parturient m	2023-01-11 20:55:00.885836	2023-01-13 18:47:06.852275	Joe
16	2	Eva’s First Post	Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent enim ex, semper vitae orci at, tempor consequat tortor. Quisque ultricies nulla sapien, ac viverra elit auctor non. Mauris placerat risus feugiat lorem rutrum dignissim. Proin vel dui tristique, fringilla tellus eget, auctor sapien. Pellentesque lobortis nunc vitae pulvinar pretium. Proin rutrum arcu quis fringilla ornare. Praesent eu quam quis eros venenatis convallis eu at velit. Sed at eleifend velit, vitae volutpat lectus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Quisque iaculis arcu vitae egestas tincidunt. Suspendisse rutrum ultricies metus quis sodales.\n\nMauris eu quam quis metus pulvinar pulvinar. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Maecenas ut urna risus. Aliquam laoreet purus eget sem rhoncus, sit amet placerat turpis malesuada. Duis eget risus tincidunt, rutrum eros eu, gravida sem. Suspendisse condimentum nisi quis massa luctus, at pulvinar ligula iaculis. Fusce sem purus, convallis in urna vitae, congue facilisis neque. Nullam gravida sapien id porta egestas.\n\nMauris imperdiet purus sed placerat laoreet. Vivamus blandit arcu eros, a pulvinar justo sagittis pharetra. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc maximus lacus augue, nec viverra lorem porta eu. Integer molestie mauris ex, sed mollis justo consectetur eu. Fusce vitae porta erat. Maecenas eu mi ac leo mollis mollis.\n\nAenean magna lorem, mollis vehicula laoreet eu, pulvinar in leo. Donec ut risus urna. Integer sed pellentesque nulla. Sed facilisis nisl sed lorem venenatis, in finibus enim pulvinar. Integer mauris elit, dictum id ligula in, hendrerit pulvinar turpis. Vivamus posuere laoreet odio nec scelerisque. Suspendisse eu ipsum a enim scelerisque viverra. Etiam sed suscipit sapien. In quis purus ut nibh vehicula euismod id ut eros. Curabitur sed lorem aliquet, vulputate diam viverra, iaculis enim. Aliquam erat volutpat. Phasellus a tellus id turpis ornare aliquam a vitae urna. Nullam tincidunt efficitur nisi eu facilisis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aliquam fringilla imperdiet finibus. Aliquam nec leo imperdiet, maximus nunc vitae, volutpat leo.\n\nVestibulum fringilla orci tellus, at mollis mi dapibus non. Sed a hendrerit felis. Nullam arcu neque, sodales vel est in, sollicitudin fringilla tortor. Nunc id egestas ex. Nullam egestas arcu vel mauris convallis, non sagittis libero ultrices. Morbi dignissim lobortis est nec tempor. Nulla sed odio nisi.\n\n	2023-01-16 22:52:11.002662	2023-01-16 22:52:11.002662	eva
17	2	Eva’s Second Post	Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent enim ex, semper vitae orci at, tempor consequat tortor. Quisque ultricies nulla sapien, ac viverra elit auctor non. Mauris placerat risus feugiat lorem rutrum dignissim. Proin vel dui tristique, fringilla tellus eget, auctor sapien. Pellentesque lobortis nunc vitae pulvinar pretium. Proin rutrum arcu quis fringilla ornare. Praesent eu quam quis eros venenatis convallis eu at velit. Sed at eleifend velit, vitae volutpat lectus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Quisque iaculis arcu vitae egestas tincidunt. Suspendisse rutrum ultricies metus quis sodales.\n\nMauris eu quam quis metus pulvinar pulvinar. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Maecenas ut urna risus. Aliquam laoreet purus eget sem rhoncus, sit amet placerat turpis malesuada. Duis eget risus tincidunt, rutrum eros eu, gravida sem. Suspendisse condimentum nisi quis massa luctus, at pulvinar ligula iaculis. Fusce sem purus, convallis in urna vitae, congue facilisis neque. Nullam gravida sapien id porta egestas.\n\nMauris imperdiet purus sed placerat laoreet. Vivamus blandit arcu eros, a pulvinar justo sagittis pharetra. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc maximus lacus augue, nec viverra lorem porta eu. Integer molestie mauris ex, sed mollis justo consectetur eu. Fusce vitae porta erat. Maecenas eu mi ac leo mollis mollis.\n\nAenean magna lorem, mollis vehicula laoreet eu, pulvinar in leo. Donec ut risus urna. Integer sed pellentesque nulla. Sed facilisis nisl sed lorem venenatis, in finibus enim pulvinar. Integer mauris elit, dictum id ligula in, hendrerit pulvinar turpis. Vivamus posuere laoreet odio nec scelerisque. Suspendisse eu ipsum a enim scelerisque viverra. Etiam sed suscipit sapien. In quis purus ut nibh vehicula euismod id ut eros. Curabitur sed lorem aliquet, vulputate diam viverra, iaculis enim. Aliquam erat volutpat. Phasellus a tellus id turpis ornare aliquam a vitae urna. Nullam tincidunt efficitur nisi eu facilisis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aliquam fringilla imperdiet finibus. Aliquam nec leo imperdiet, maximus nunc vitae, volutpat leo.\n\nVestibulum fringilla orci tellus, at mollis mi dapibus non. Sed a hendrerit felis. Nullam arcu neque, sodales vel est in, sollicitudin fringilla tortor. Nunc id egestas ex. Nullam egestas arcu vel mauris convallis, non sagittis libero ultrices. Morbi dignissim lobortis est nec tempor. Nulla sed odio nisi.\n\n	2023-01-16 22:58:02.759916	2023-01-16 22:58:02.759916	eva
19	1	test	test	2023-01-17 21:05:47.18473	2023-01-17 21:05:47.18473	Joe
\.


--
-- Data for Name: resources; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.resources (id, title, description, url, created_at, updated_at) FROM stdin;
1	Test title	test description	test url	2023-01-13 20:06:30.68925	2023-01-13 20:06:30.68925
2	FLCCC - Front Line COVID-19 Critical Care Alliance	The FLCCC Alliance was created by highly published, world-renowned physicians and scholars from around the world with the goal of developing life-saving protocols to prevent and treat COVID-19 at all stages of illness.	https://covid19criticalcare.com/	2023-01-16 00:13:58.452254	2023-01-16 00:13:58.452254
\.


--
-- Data for Name: schema_migrations; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.schema_migrations (version) FROM stdin;
20221218233352
20221220215549
20221220215647
20230105155012
20230113190546
20230127225641
\.


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.users (id, email, password_digest, first_name, last_name, country, created_at, updated_at) FROM stdin;
2	eva@eva.com	$2a$12$Ggm40ki8jQhqso21acyqq.aNmeUKhAOxc3e98QY1t7QjKMjcbEJIy	eva	mcpartland	\N	2022-12-21 17:38:01.41369	2022-12-21 17:38:01.41369
3	eva	$2a$12$984WOisbYLcwee41q0RiJuriFTH55kYmaikRYzioFyoTP4vQHKfNC			\N	2022-12-21 17:46:56.264288	2022-12-21 17:46:56.264288
4	test	$2a$12$UaACxhR6ClJR0xsJwZZTvuemnM0gzri4IVBBHGjLtBulYVhVqGR2.			\N	2022-12-21 17:49:00.22822	2022-12-21 17:49:00.22822
1	joemcpartland@gmail.com	$2a$12$/oHGn4hRU7pcbretRBLK6uc30/rssdF6FemR757.dFp3rBc/Awwia	Joe	McPartland	\N	2022-12-19 17:20:42.564724	2022-12-22 00:41:04.288422
5	aslan@aslan.com	$2a$12$NTiJxg2tC.Jj3jUL0E2F0.tUQucHOYKRhQpnYn9xQhbAVLqexywmi	Aslan	McPartland	\N	2023-01-05 15:45:28.706903	2023-01-05 15:45:28.706903
6	jenny	$2a$12$mxaeUMrzWtuHtquKOzQzROf5.1ZSlvLmYabQ2877Tzc/waNFZW/Km	Jenny	Mondaca	\N	2023-01-17 20:31:44.405085	2023-01-17 20:31:44.405085
\.


--
-- Name: comments_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.comments_id_seq', 34, true);


--
-- Name: likes_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.likes_id_seq', 2, true);


--
-- Name: posts_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.posts_id_seq', 19, true);


--
-- Name: resources_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.resources_id_seq', 2, true);


--
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.users_id_seq', 6, true);


--
-- Name: ar_internal_metadata ar_internal_metadata_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.ar_internal_metadata
    ADD CONSTRAINT ar_internal_metadata_pkey PRIMARY KEY (key);


--
-- Name: comments comments_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.comments
    ADD CONSTRAINT comments_pkey PRIMARY KEY (id);


--
-- Name: likes likes_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.likes
    ADD CONSTRAINT likes_pkey PRIMARY KEY (id);


--
-- Name: posts posts_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.posts
    ADD CONSTRAINT posts_pkey PRIMARY KEY (id);


--
-- Name: resources resources_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.resources
    ADD CONSTRAINT resources_pkey PRIMARY KEY (id);


--
-- Name: schema_migrations schema_migrations_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.schema_migrations
    ADD CONSTRAINT schema_migrations_pkey PRIMARY KEY (version);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- PostgreSQL database dump complete
--

