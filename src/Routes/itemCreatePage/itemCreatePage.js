import React from 'react';


const ItemCreatePage = () => {
    return (<div className='container'>

        <form>

            <div class="form-group">
                <label for="exampleFormControlSelect1">available</label>
                <select class="form-control" id="exampleFormControlSelect1">
                    <option>true</option>
                    <option>False</option>
                </select>
            </div>
            {/* <div class="form-group">
                <label for="exampleFormControlSelect2">Example multiple select</label>
                <select multiple class="form-control" id="exampleFormControlSelect2">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                </select>
            </div> */}
            <div class="form-group">
                <label for="exampleInputPassword1">Title</label>
                <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Title"></input>
            </div>

            <div class="form-group">
                <label for="exampleInputPassword1">Price</label>
                <input type="number"class="form-control" id="formGroupExampleInput" placeholder="Price"></input>
            </div>
            <div class="form-group">
                <label for="exampleFormControlTextarea1">About item</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
            <div class="form-group">
                <label for="exampleFormControlFile1">item fhoto</label>
                <input type="file" class="form-control-file" id="exampleFormControlFile1"></input>
            </div>
            <button type="submit" className="btn btn-dark col-2">Create Item</button>

        </form>
    </div>
    );
}

export default ItemCreatePage;