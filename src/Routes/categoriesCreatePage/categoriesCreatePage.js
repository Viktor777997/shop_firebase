import React from 'react';


const CategoriesCreatePage = () => {
    return (
        <div className='container'>
            <form>
                {/* <div className="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"></input>
                </div> */}
                <div className="form-group">
                    <label for="exampleInputPassword1">New Category</label>
                    <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Category Name"></input>
                </div>
               
                <button type="submit" className="btn btn-primary">add category</button>
            </form>
        </div>
    );
}

export default CategoriesCreatePage;