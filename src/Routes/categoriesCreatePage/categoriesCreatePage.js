import React from 'react';


const CategoriesCreatePage = () => {
    return (
        <div className='container'>
            <form>
                {/* <div class="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"></input>
                </div> */}
                <div class="form-group">
                    <label for="exampleInputPassword1">New Category</label>
                    <input type="text" class="form-control" id="exampleInputPassword1" placeholder="Category Name"></input>
                </div>
               
                <button type="submit" class="btn btn-primary">add category</button>
            </form>
        </div>
    );
}

export default CategoriesCreatePage;