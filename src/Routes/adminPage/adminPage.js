import React from 'react';
import { Link } from 'react-router-dom';


const AdminPage = () => {
    return (
        <div className='conainer'>
            <div className='d-block text-center'>
                <div className=' mb-3'>
                    <Link to='/admin/login' className="btn btn-dark col-3">Log in</Link>
                </div>
                <div className=' mb-3'>
                    <Link to='/admin/itemCreate' className="btn btn-dark col-3">Create Item</Link>
                </div>
                <div className=' mb-3'>
                    <Link to='/admin/allItems' className="btn btn-dark col-3">All Items</Link>
                </div>
                <div className=' mb-3'>
                    <Link to='/admin/categoriesCreate' className="btn btn-dark col-3">Create Categories</Link>
                </div>
                <div className=' mb-3'>
                    <Link to='/admin/allCategories' className="btn btn-dark col-3">All Categories </Link>
                </div>
                {/* <Link to=''></Link>
                <Link to=''></Link>
                <Link to=''></Link>
                <Link to=''></Link> */}
            </div>
        </div>
    );
}

export default AdminPage;