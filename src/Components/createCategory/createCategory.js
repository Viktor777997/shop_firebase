import React, { Component } from 'react';

class CreateCategory extends Component {

    constructor(props) {
        super(props)
        if (this.props.data) {
            this.state = {
                available: this.props.data.available,
                title: this.props.data.title,
                categoryMother: this.props.data.categoryMother,
            }
        }
        else {
            this.state = {
                available: 'true',
                title: '',
                categoryMother: '',
            }
        }
    }

    onChange = (e) => {
        return this.setState({
            [e.target.name]: e.target.value,
        })
    }
    onSubmit = (e) => {
        e.preventDefault();
        if (this.state.title === '') {
            return alert('Есть пустые строки')
        }
        if (this.props.data) {
            this.props.edit(this.props.id, this.state)
            return alert('Категория изменена')
        }

        this.props.createCategory(this.state)
        alert('Категория создана')
        return setTimeout(() => { window.location.reload(false) }, 2000)
    }

    render() {

        const { data, categories } = this.props;

        return (
            <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    <label htmlFor="exampleFormControlSelect1" name='available'>Активный</label>
                    <select className="form-control form-control" id="exampleFormControlSelect1" name='available'
                        onChange={this.onChange} value={this.state.available}>
                        <option value="true">Да</option>
                        <option value='false'>Нет</option>
                    </select>
                </div>

                <div className="form-group">
                    <label htmlFor="exampleFormControlSelect1" name='category'>Категория</label>
                    <select className="form-control form-control" id="exampleFormControlSelect2" name='categoryMother'
                        onChange={this.onChange} value={this.state.categoryMother}>
                        <option value="">По умолчанию</option>
                        {
                            categories.map(item => (
                                <option key={item.id} value={item.id} >{item.title}</option>
                            ))
                        }
                    </select>
                </div>

                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Новая категория</label>
                    <input type="text" className="form-control" id="exampleInputPassword2" placeholder="Название категории" name='title'
                        onChange={this.onChange} value={this.state.title} />
                </div>

                <button type="submit" className="btn btn-dark">{data ? "Изменить категорию" : 'Создать категорию'}</button>
            </form>
        );
    }
}

export default CreateCategory;