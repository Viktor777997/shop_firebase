import React from 'react';
import { Button, ButtonGroup } from 'reactstrap';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';

const ItemChangePage = () => {
    return (
        <div className='container'>

            <table class="table table-bordered">
                <thead class="thead-dark">
                    <tr>
                        <th scope="col"><input type="checkbox"></input></th>
                        <th scope="col">
                            <input
                                className="form-control mr-sm-2 search-input"
                                type="search"
                                placeholder="Name"
                                aria-label="Search"
                            ></input>
                        </th>
                        <th scope="col">
                            <input
                                className="form-control mr-sm-2 search-input"
                                type="search"
                                placeholder="Id"
                                aria-label="Search"
                            ></input>
                        </th>
                        <th scope="col">Change</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row"><input type="checkbox"></input></th>
                        <td>Mark</td>
                        <td>Otto</td>
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

export default ItemChangePage;