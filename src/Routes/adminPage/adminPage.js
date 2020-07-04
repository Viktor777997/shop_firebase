import React from 'react';
import { Link } from 'react-router-dom';


const AdminPage = () => {
    return (
        <div className='conainer'>
            <div className='d-block text-center'>
                <div className=' mb-3'>
                    <Link to='/admin/login' className="btn btn-dark col-3">Войти</Link>
                </div>
                <div className=' mb-3'>
                    <Link to='/admin/itemCreate' className="btn btn-dark col-3">Создать товары</Link>
                </div>
                <div className=' mb-3'>
                    <Link to='/admin/allItems' className="btn btn-dark col-3">Все товары</Link>
                </div>
                <div className=' mb-3'>
                    <Link to='/admin/categoriesCreate' className="btn btn-dark col-3">Создать категорию</Link>
                </div>
                <div className=' mb-3'>
                    <Link to='/admin/allCategories' className="btn btn-dark col-3">Все категории</Link>
                </div>
            </div>
        </div>
    );
}

export default AdminPage;