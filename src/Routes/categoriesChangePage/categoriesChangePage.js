import React from 'react';
import { Button, ButtonGroup } from 'reactstrap';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import './categoriesChangePage.scss'
const CategoriesChangePage = (prosp) => {

    return (
        <div className='container'>
            <table class="table table-bordered">
                <thead class="thead-dark">
                    <tr>
                        <th scope="col"><input type="checkbox"></input></th>
                        <th scope="col">Name</th>
                        <th scope="col">Id</th>
                        <th scope="col">SubCategoryName</th>
                        <th scope="col">Change</th>
                    </tr>
                </thead>
                <tbody>
                <tr>
                        <th scope="row"><input type="checkbox"></input></th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td><ButtonGroup>
                                <Breadcrumb tag="nav" listTag="div">
                                    <BreadcrumbItem tag="a" href="#">See Instruments</BreadcrumbItem>
                                </Breadcrumb>
                            </ButtonGroup></td>
                        <td>
                            <ButtonGroup>
                                <Breadcrumb tag="nav" listTag="div">
                                    <BreadcrumbItem tag="a" href="#">Delete</BreadcrumbItem>
                                    <BreadcrumbItem tag="a" href="#">Edit</BreadcrumbItem>
                                    <BreadcrumbItem tag="a" href="#">Show</BreadcrumbItem>
                                </Breadcrumb>
                            </ButtonGroup>
                        </td>
                    </tr>
                   

                </tbody>
            </table>

        </div>
    );
}

export default CategoriesChangePage;