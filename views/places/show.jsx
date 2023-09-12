const React = require('react')
const Def = require('../default')


function show (data) {
  data = {
    place: ""
  }
  //to access the value of a key inside a javascript object, you use the dot notation with the key
  
  let comments = (
    <h3 className="inactive">
      No comments yet!
    </h3>
  )
  let rating = (
    <h3 className="inactive">
      Not yet rated
    </h3>
  )
  if (data.place.comments.length) {
    comments = data.place.comments.map(c => {
      return (
        <div className="border col-sm-4">
          <h2 className="rant">{c.rant ? 'Rant! ðŸ˜¡' : 'Rave! ðŸ˜»'}</h2>
          <h4>{c.content}</h4>
          <h3>
            <stong>- {c.author}</stong>
          </h3>
          <h4>Rating: {c.stars}</h4>
        </div>
      )
    })
  }
  return (
      <Def>
        <main>
          <div className="row">
            <h1>Show Page</h1>
            <a href={`/places/${data.id}/edit`} className="btn btn-warning"> 
              Edit
            </a>     

            <form method="POST" action={`/places/${data.id}?_method=DELETE`}> 
              <button type="submit" className="btn btn-danger">
                Delete
              </button>
            </form>
          </div>
          <hr />
          <h2>Comments</h2>
          {comments}
        </main>
      </Def>
  )
}

module.exports = show






{/* <a href={`/places/${data.id}/edit`} className="btn btn-warning"> 
  Edit
</a>     

<form method="POST" action={`/places/${data.id}?_method=DELETE`}> 
  <button type="submit" className="btn btn-danger">
    Delete
  </button>
</form>  */}
// function show (data) {
//   let comments = (
//     <h3 className="inactive">
//       No comments yet!
//     </h3>
//   )
//   let rating = (
//     <h3 className="inactive">
//       Not yet rated
//     </h3>
//   )
//   if (data.place.comments.length) {
//     comments = data.place.comments.map(c => {
//       return (
//         <div className="border col-sm-4">
//           ...
//         </div>
//       )
//     })
//   }
//   return (
//       <Def>
//         <main>
//           <div className="row">
//             ...
//             <div className="col-sm-6">
//               <h1>{ data.place.name }</h1>
//               <h2>
//                 Rating
//               </h2>
//               {rating}
//               <br />
//               ...
//             </div>
//           </div>
//         </main>
//       </Def>
//     )
//   }
