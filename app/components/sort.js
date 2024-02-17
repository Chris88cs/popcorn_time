
export default function Sort({ sortby, orderby, page }) { 
    let order_title = '';
    let SortUrl_title = '<a href="/dashboard?page=' + page + '&sortby=title&orderby=asc">Title</a>';

    let order_release_date = '';
    let SortUrl_release_date = '<a href="/dashboard?page=' + page + '&sortby=release_date&orderby=asc">Release Date</a>';

    let order_popularity = '';
    let SortUrl_popularity = '<a href="/dashboard?page=' + page + '&sortby=popularity&orderby=asc">Popularity</a>';

    let order_vote_average = '';
    let SortUrl_vote_average = '<a href="/dashboard?page=' + page + '&sortby=vote_average&orderby=asc">Rating</a>';

    if (sortby == 'title') {
        if (orderby == 'asc') {
            order_title = '<i class="fa fa-chevron-up" aria-hidden="true" ></i>';
            SortUrl_title = '<a href="/dashboard?page=' + page + '&sortby=' + sortby +'&orderby=desc">Title</a>';

        }
        else if (orderby == 'desc') {
            order_title = '<i class="fa fa-chevron-down" aria-hidden="true" ></i>';
            SortUrl_title = '<a href="/dashboard?page=' + page + '&sortby=' + sortby +'&orderby=asc">Title</a>';
        }
    }

    if (sortby == 'release_date') {
        if (orderby == 'asc') {
            order_release_date = '<i class="fa fa-chevron-up" aria-hidden="true" ></i>';
            SortUrl_release_date = '<a href="/dashboard?page=' + page + '&sortby=' + sortby + '&orderby=desc">Release Date</a>';

        }
        else if (orderby == 'desc') {
            order_release_date = '<i class="fa fa-chevron-down" aria-hidden="true" ></i>';
            SortUrl_release_date = '<a href="/dashboard?page=' + page + '&sortby=' + sortby + '&orderby=asc">Release Date</a>';
        }
    }

    if (sortby == 'popularity') {
        if (orderby == 'asc') {
            order_popularity = '<i class="fa fa-chevron-up" aria-hidden="true" ></i>';
            SortUrl_popularity = '<a href="/dashboard?page=' + page + '&sortby=' + sortby + '&orderby=desc">Popularity</a>';

        }
        else if (orderby == 'desc') {
            order_popularity = '<i class="fa fa-chevron-down" aria-hidden="true" ></i>';
            SortUrl_popularity = '<a href="/dashboard?page=' + page + '&sortby=' + sortby + '&orderby=asc">Popularity</a>';
        }
    }

    if (sortby == 'vote_average') {
        if (orderby == 'asc') {
            order_vote_average = '<i class="fa fa-chevron-up" aria-hidden="true" ></i>';
            SortUrl_vote_average = '<a href="/dashboard?page=' + page + '&sortby=' + sortby + '&orderby=desc">Rating</a>';

        }
        else if (orderby == 'desc') {
            order_vote_average = '<i class="fa fa-chevron-down" aria-hidden="true" ></i>';
            SortUrl_vote_average = '<a href="/dashboard?page=' + page + '&sortby=' + sortby + '&orderby=asc">Rating</a>';
        }
    }

    return (
        <>
            <div>
                <div style={{ height: 40 + 'px' }}>
                    <div className="inline-block text-center font-bold truncate border-b border-r border-gray-500 relative" style={{ width: 17.5 + 'vw', height: 40 + 'px', paddingTop: 5 + 'px', margin: 'auto' }}><div className="no-underline" dangerouslySetInnerHTML={{ __html: SortUrl_title }}></div><div className="absolute right-1" style={{ top: 6 + "px" }} dangerouslySetInnerHTML={{ __html: order_title }}></div></div>
                    <div className="inline-block text-center font-bold truncate border-b border-r border-gray-500 relative" style={{ width: 44 + 'vw', height: 40 + 'px', paddingTop: 5 + 'px' }}>Description</div>
                    <div className="inline-block text-center font-bold truncate border-b border-r border-gray-500 relative" style={{ width: 13 + 'vw', height: 40 + 'px', paddingTop: 5 + 'px' }}><div className="no-underline" dangerouslySetInnerHTML={{ __html: SortUrl_release_date }}></div><div className="absolute right-1" style={{ top: 6 + "px" }} dangerouslySetInnerHTML={{ __html: order_release_date }}></div></div>
                    <div className="inline-block text-center font-bold truncate border-b border-r border-gray-500 relative" style={{ width: 13 + 'vw', height: 40 + 'px', paddingTop: 5 + 'px' }}><div className="no-underline" dangerouslySetInnerHTML={{ __html: SortUrl_popularity }}></div><div className="absolute right-1" style={{ top: 6 + "px" }} dangerouslySetInnerHTML={{ __html: order_popularity }}></div></div>
                    <div className="inline-block text-center font-bold truncate border-b border-r border-gray-500 relative" style={{ width: 8 + 'vw', height: 40 + 'px', paddingTop: 5 + 'px' }}><div className="no-underline" dangerouslySetInnerHTML={{ __html: SortUrl_vote_average }}></div><div className="absolute right-1" style={{ top: 6 + "px" }} dangerouslySetInnerHTML={{ __html: order_vote_average }}></div></div>
                    <div className="inline-block text-center font-bold truncate border-b border-gray-500" style={{ width: 2 + 'vw', height: 40 + 'px', paddingTop: 5 + 'px' }}></div>
                </div>
            </div>

        </>
    )
}