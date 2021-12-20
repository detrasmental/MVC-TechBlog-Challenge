async function deleteFormHandler(event) {
    event.preventDefault();
    
    //pull post id from the url
    const id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
      ];

    // DELETE POST 
    const response = await fetch(`/api/posts/${id}`, {
        method: 'DELETE',
        body: JSON.stringify({
          post_id: id
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      });
     // if post is deleted, redirect to the dahsboard 
      if (response.ok) {
        document.location.replace('/dashboard/');
      } else {
        alert(response.statusText);
      }
    
  }
  
  document.querySelector('.delete-post-btn').addEventListener('click', deleteFormHandler);