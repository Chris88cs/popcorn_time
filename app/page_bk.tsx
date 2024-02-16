
async function getData(page: number | 1, search: string | '' ) {
    const includeAdult = 'include_adult=false';
    const includeVideo = '&include_video=false';
    const language = '&language=en-US';
    const currentPage = (page>1) ? '&page='+page : '&page=1';
    const sortBy = '&sort_by=popularity.desc';
    const searchText = '';


  const query = 'https://api.themoviedb.org/3/discover/movie?'+includeAdult+includeVideo+language+currentPage+sortBy

  const res = await fetch(query,{
      method: 'GET',
      headers: {
        'Authorization' : 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2YzM2NjVjNTg1NDMzMTA0MjBmYWMyNjMxZDEzZTk1MCIsInN1YiI6IjY1Y2M4OGJkMTVjNjM2MDE4N2U1YmE1YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.XeZEwpXPqaJVQP9qkBAQEvKxxsegssFXMV8dXnpXrFk'
      },
  })
 
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  return res.json()
}



export default async function Movies({
    searchParams,
}:{
    searchParams:{ page:number | 1, search:string | '' }
    }) {



    //pagination
    const data = await getData(searchParams.page, searchParams.search);
    const rowLen = data.results.length;
    const dCurrentPage = data.page;
    const dTotalPage = data.total_pages;

    const dNext = ((dCurrentPage > 1 )&&(dCurrentPage < dTotalPage)) ? dCurrentPage + 1 : 1;
    const dPrevious = ((dCurrentPage > 1 )&&(dCurrentPage < dTotalPage)) ? dCurrentPage - 1 : 1;
    
    let dPagination1: number  = (dCurrentPage > 2 ) ? dCurrentPage - 2 : 1;
    let dPagination2: number  = (dCurrentPage > 2 ) ? dCurrentPage - 1 : 2;
    let dPagination3: number  = (dCurrentPage > 2 ) ? dCurrentPage: 3;
    let dPagination4: number  = (dCurrentPage > 2 ) ? dCurrentPage + 1 : 4;
    let dPagination5: number  = (dCurrentPage > 2 ) ? dCurrentPage + 2 : 5;

    let dPaginationlinks1 = '/?page='+dPagination1;
    let dPaginationlinks2 = '/?page='+dPagination2;
    let dPaginationlinks3 = '/?page='+dPagination3;
    let dPaginationlinks4 = '/?page='+dPagination4;
    let dPaginationlinks5 = '/?page='+dPagination5;

    let dPaginationNext = '/?page='+dNext;
    let dPaginationPrevious = '/?page=' + dPrevious;

    return (
        <>  
            <div className="m-2 shadow border-2 bg-blue-200 whitespace-nowrap border-gray-500">
            <div>
                <div  style={{height:40 + 'px'}}>
                    <div className="inline-block text-center font-bold truncate border-b border-r border-gray-500" style={{width:17.5 + 'vw',height:40 + 'px',paddingTop:5 + 'px'}}>Title</div>
                    <div className="inline-block text-center font-bold truncate border-b border-r border-gray-500" style={{width:60 + 'vw',height:40 + 'px',paddingTop:5 + 'px'}}>Description</div>
                    <div className="inline-block text-center font-bold truncate border-b border-r border-gray-500" style={{width:10 + 'vw',height:40 + 'px',paddingTop:5 + 'px'}}>Release Date</div>
                    <div className="inline-block text-center font-bold truncate border-b border-gray-500" style={{width:10 + 'vw',height:40 + 'px',paddingTop:5 + 'px'}}>Popularity</div>
                </div>
            </div>

            { rowLen > 0 ? (
                    <div>
                        {data.results.map((item,i) => (
                            <div key={item.id} style={{height:40 + 'px'}}>
                                <div className="inline-block border-b border-r truncate px-2.5  border-gray-500" style={{width:17.5 + 'vw',height:40 + 'px',paddingTop:5 + 'px'}}>{item.title}</div>
                                <div className="inline-block border-b border-r truncate px-2.5 border-gray-500" style={{width:60 + 'vw',height:40 + 'px',paddingTop:5 + 'px'}}>{item.overview}</div>
                                <div className="inline-block border-b border-r truncate text-center border-gray-500" style={{width:10 + 'vw',height:40 + 'px',paddingTop:5 + 'px'}}>{item.release_date}</div>
                                <div className="inline-block border-b truncate text-center border-gray-500" style={{width:10 + 'vw',height:40 + 'px',paddingTop:5 + 'px'}}>{item.popularity}</div>
                            </div>

                        ))}
                    </div>
                ) : (
                    <p>Loading...</p>
                )}
        </div>

        <nav aria-label="Page navigation text-center">
            <ul className="list-style-none flex">
                <li>
                    <a className="relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white" href={dPaginationPrevious}>Previous</a>
                </li>
                <li>
                    <a className="relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white" href={dPaginationlinks1}>{dPagination1}</a>
                </li>
                <li>
                    <a className="relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white" href={dPaginationlinks2}>{dPagination2}</a>
                </li>
                <li>
                    <a className="relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white" href={dPaginationlinks3}>{dPagination3}</a>
                </li>
                <li>
                    <a className="relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white" href={dPaginationlinks4}>{dPagination4}</a>
                </li>
                <li>
                    <a className="relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white" href={dPaginationlinks5}>{dPagination5}</a>
                </li>
                <li>
                    <a className="relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white" href={dPaginationNext}>Next</a>
                </li>
            </ul>
        </nav>

    </>
    )
}